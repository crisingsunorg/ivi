import { usePromiseQueue, useIVI, useMockFn, useResetModules } from "ivi-jest";

useResetModules();
const promise = usePromiseQueue();
const ivi = useIVI();

describe("scheduleMicrotask", () => {
  describe("one task", () => {
    const task = useMockFn();

    test("outside of a scheduler loop", async () => {
      ivi.scheduleMicrotask(task);
      await promise.wait();
      expect(task).toHaveBeenCalledTimes(1);
      expect(task).toBeCalledWith(ivi.TASK_TOKEN);
    });

    test("inside of a scheduler loop", () => {
      ivi.withSchedulerTick(() => {
        ivi.scheduleMicrotask(task);
      })();
      expect(task).toHaveBeenCalledTimes(1);
      expect(task).toBeCalledWith(ivi.TASK_TOKEN);
    });
  });

  describe("two tasks", () => {
    const task1 = useMockFn();
    const task2 = useMockFn();

    test("outside of a scheduler loop", async () => {
      ivi.scheduleMicrotask(task1);
      ivi.scheduleMicrotask(task2);
      await promise.wait();

      expect(task1).toHaveBeenCalledTimes(1);
      expect(task2).toHaveBeenCalledTimes(1);
    });

    test("inside of a scheduler loop", () => {
      ivi.withSchedulerTick(() => {
        ivi.scheduleMicrotask(task1);
        ivi.scheduleMicrotask(task2);
      })();
      expect(task1).toHaveBeenCalledTimes(1);
      expect(task2).toHaveBeenCalledTimes(1);
    });
  });

  test("advance clock", () => {
    expect(ivi.clock()).toBe(1);
    ivi.withSchedulerTick(() => { /**/ })();
    expect(ivi.clock()).toBe(2);
  });
});
