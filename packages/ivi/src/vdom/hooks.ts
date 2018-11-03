import { EMPTY_OBJECT } from "../core/empty_object";
import { Component } from "./component";
import { getContext } from "./context";
import { dirtyCheckCounter } from "./scheduler";

function addHook<T extends Function>(hooks: null | T | T[], hook: T): T | T[] {
  if (hooks === null) {
    return hook;
  }
  if (typeof hooks === "function") {
    return [hooks, hook];
  }
  hooks.push(hook);
  return hooks;
}

/**
 * useSelect creates a selector hook.
 *
 * @example
 *
 *     const C = component<number>((h) => {
 *       const selector = useSelect<string, number, { data: string[] }>(c,
 *         (id, context) => context.data[id],
 *       );
 *
 *       return (id) => div().t(selector(id));
 *     });
 *
 * @param c - Component instance.
 * @param selector - Selector function.
 * @returns Selector hook.
 */
export function useSelect<T>(
  c: Component,
  selector: (props?: undefined, context?: undefined, prev?: T | undefined) => T,
): () => T;

/**
 * useSelect creates a selector hook.
 *
 * @example
 *
 *     const C = component<number>((h) => {
 *       const selector = useSelect<string, number, { data: string[] }>(c,
 *         (id, context) => context.data[id],
 *       );
 *
 *       return (id) => div().t(selector(id));
 *     });
 *
 * @param c - Component instance.
 * @param selector - Selector function.
 * @returns Selector hook.
 */
export function useSelect<T, P>(
  c: Component,
  selector: (props: P, context?: undefined, prev?: T | undefined) => T,
  shouldUpdate?: undefined extends P ? undefined : (prev: P, next: P) => boolean,
): undefined extends P ? () => T : (props: P) => T;

/**
 * useSelect creates a selector hook.
 *
 * @example
 *
 *     const C = component<number>((h) => {
 *       const selector = useSelect<string, number, { data: string[] }>(c,
 *         (id, context) => context.data[id],
 *       );
 *
 *       return (id) => div().t(selector(id));
 *     });
 *
 * @param c - Component instance.
 * @param selector - Selector function.
 * @returns Selector hook.
 */
export function useSelect<T, P, C>(
  c: Component,
  selector: (props: P, context: C, prev?: T | undefined) => T,
  shouldUpdate?: undefined extends P ? undefined : (prev: P, next: P) => boolean,
): undefined extends P ? () => T : (props: P) => T;

/**
 * useSelect creates a selector hook.
 *
 * @example
 *
 *     const C = component<number>((c) => {
 *       const selector = useSelect<string, number, { data: string[] }>(c,
 *         (id, context) => context.data[id],
 *       );
 *
 *       return (id) => div().t(selector(id));
 *     });
 *
 * @param c - Component instance.
 * @param selector - Selector function.
 * @returns Selector hook.
 */
export function useSelect<T, P, C extends {}>(
  c: Component,
  selector: (props: P, context: C, prev: T | undefined) => T,
  shouldUpdate?: (prev: P, next: P) => boolean,
): (props: P) => T {
  const prevSelector = c.select;
  let lastChecked = 0;
  let prevState: T | undefined;
  let prevProps: P;

  c.select = (context: {}) => {
    if (prevSelector !== null && prevSelector(context) === true) {
      return true;
    }
    if (prevState !== void 0) {
      const nextState = selector(prevProps, context as C, prevState);
      lastChecked = dirtyCheckCounter();
      if (prevState !== nextState) {
        prevState = nextState;
        return true;
      }
    }
    return false;
  };

  return (nextProps: P) => {
    if (
      (prevState !== void 0) &&
      ((shouldUpdate !== void 0 && shouldUpdate(prevProps, nextProps) === true) || (prevProps !== nextProps))
    ) {
      prevState = void 0;
    }
    if (prevState === void 0 || lastChecked < dirtyCheckCounter()) {
      prevState = selector(nextProps, getContext() as C, prevState);
    }
    prevProps = nextProps;
    return prevState!;
  };
}

/**
 * useDetached creates a detached hook.
 *
 * @example
 *
 *     const C = component((h) => {
 *       useDetached(h, () => {
 *         console.log("detached");
 *       });
 *
 *       return () => div();
 *     });
 *
 * @param c - Component instance.
 * @param hook - Detached hook.
 */
export function useDetached(c: Component, hook: () => void): void {
  c.detached = addHook(c.detached, hook);
}

/**
 * useEffect creates a side effect hook.
 *
 * @example
 *
 *     const Counter = component<number>((c) => {
 *       let i = 0;
 *       const timer = useEffect<number>(c, (delay) => {
 *         const tid = setInterval(() => {
 *           i++;
 *           invalidate(c);
 *         }, delay);
 *         return () => { clearInterval(tid); };
 *       });
 *
 *       return (delay) => (
 *         timer(delay),
 *
 *         div().t(i),
 *       );
 *     });
 *
 * @param c - Component instance.
 * @param hook - Side effect function.
 * @param shouldUpdate - Should update function.
 * @returns side effect hook
 */
export function useEffect<P>(
  c: Component,
  hook: (props: P) => (() => void) | void,
  shouldUpdate?: (prev: P, next: P) => boolean,
): (props: P) => void {
  let reset: (() => void) | void;
  let prevProps: P | undefined = EMPTY_OBJECT as P;
  let detached = false;

  return (nextProps: P) => {
    if (
      prevProps === EMPTY_OBJECT ||
      (shouldUpdate !== void 0 && shouldUpdate(prevProps as P, nextProps) === true) ||
      prevProps !== nextProps
    ) {
      prevProps = nextProps;
      if (reset !== void 0) {
        reset();
      }
      reset = hook(nextProps);

      if (reset !== void 0 && !detached) {
        detached = true;
        useDetached(c, () => {
          if (reset !== void 0) {
            reset();
          }
        });
      }
    }
  };
}