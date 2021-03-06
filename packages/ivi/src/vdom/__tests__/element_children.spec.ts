import { useResetDOM, useDOMElement, useHTML, useTest } from "ivi-jest";
import { Op } from "ivi";
import { useDOMOpsCounters } from "./jest";

useResetDOM();
const root = useDOMElement();
const domOps = useDOMOpsCounters();
const h = useHTML();
const t = useTest();
const _ = void 0;
const r = (children: Op) => t.render<HTMLDivElement>(h.div(_, _, children), root()).domNode!;

describe("element children", () => {
  describe("mount", () => {
    test("null", () => {
      const n = r(null);
      expect(n).toMatchSnapshot();
      expect(domOps()).toMatchSnapshot();
    });

    test("text", () => {
      const n = r("abc");
      expect(n).toMatchSnapshot();
      expect(domOps()).toMatchSnapshot();
    });
  });

  describe("update", () => {
    test("strictly equal child", () => {
      const child = h.div();
      r(child);
      const n = r(child);
      expect(n).toMatchSnapshot();
      expect(domOps()).toMatchSnapshot();
    });

    test("different child", () => {
      r(h.div());
      const n = r(h.span());
      expect(n).toMatchSnapshot();
      expect(domOps()).toMatchSnapshot();
    });
  });
});
