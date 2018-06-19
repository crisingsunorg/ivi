import { VNodeFlags } from "./flags";
import { VNode, t } from "./vnode";

/**
 * fragment is a variadic function that creates a children collection.
 *
 * @example
 *
 *     const content = children(
 *       p().c("Paragraph 1"),
 *       p().c("Paragraph 2"),
 *     );
 *
 *     render(
 *       div().c(
 *         h1().c("Title"),
 *         content,
 *       ),
 *       DOMContainer,
 *     );
 *
 * @param args - Children
 * @returns Virtual DOM collection
 */
export function fragment(...args: Array<VNode | string | number | null>): VNode | null;

/**
 * fragment is a variadic function that creates a children collection.
 *
 * @example
 *
 *     const content = children(
 *       p().c("Paragraph 1"),
 *       p().c("Paragraph 2"),
 *     );
 *
 *     render(
 *       div().c(
 *         h1().c("Title"),
 *         content,
 *       ),
 *       DOMContainer,
 *     );
 *
 * @returns Virtual DOM collection
 */
export function fragment(): VNode | null {
  const args: Array<VNode | string | number | null> = arguments as any;
  let first: VNode<any> | null = null;
  let prev: VNode<any> | null = null;

  for (let i = 0; i < args.length; ++i) {
    let n = args[i];

    if (n !== null) {
      if (typeof n !== "object") {
        n = t(n);
      }
      const last = n._l;
      if (prev !== null) {
        n._l = prev;
        prev._r = n;
      } else {
        first = n;
      }
      prev = last;
    }
  }
  if (first !== null) {
    first._l = prev!;
  }

  return first;
}

/**
 * map creates a children collection with the results of calling a provided function on every element in the calling
 * array.
 *
 * @example
 *
 *     render(
 *       div().c(
 *         map([1, 2, 3], (item) => div().k(item)),
 *       ),
 *       DOMContainer,
 *     );
 *
 * @param items - Array
 * @param fn - Function that produces an element for the children collection
 * @returns Virtual DOM collection
 */
export function map<T, U>(array: Array<T>, fn: (item: T, index: number) => VNode<U> | null): VNode<U> | null {
  let first: VNode<any> | null = null;
  let prev: VNode<any> | null = null;
  for (let i = 0; i < array.length; ++i) {
    const n = fn(array[i], i);
    if (n !== null) {
      /* istanbul ignore else */
      if (DEBUG) {
        if ((n._f & VNodeFlags.Key) === 0) {
          throw new Error(`VNodes created with a map() function should have an explicit key`);
        }
        if (n._l !== n) {
          throw new Error(`VNodes created with a map() function should be a singular nodes`);
        }
      }
      if (prev !== null) {
        n._l = prev;
        prev._r = n;
      } else {
        first = n;
      }
      prev = n;
    }
  }
  if (first !== null) {
    first._l = prev!;
    first._f |= VNodeFlags.KeyedList;
    return first;
  }
  return null;
}

/**
 * mapRange creates a children collection with the results of calling a provided function on every number in the
 * provided range.
 *
 * @example
 *
 *     const items = [1, 2, 3];
 *
 *     render(
 *       div().c(
 *         mapRange(0, items.length, (i) => div().k(items[i])),
 *       ),
 *       DOMContainer,
 *     );
 *
 * @param start - Range start
 * @param end - Range end
 * @param fn - Function that produces an element for the children collection
 * @returns Virtual DOM collection
 */
export function mapRange<T>(start: number, end: number, fn: (idx: number) => VNode<T> | null): VNode<T> | null {
  const length = end - start;
  let first: VNode<any> | null = null;
  let prev: VNode<any> | null = null;
  while (start < length) {
    const n = fn(start++);
    if (n !== null) {
      /* istanbul ignore else */
      if (DEBUG) {
        if ((n._f & VNodeFlags.Key) === 0) {
          throw new Error(`VNodes created with a mapRange() function should have an explicit key`);
        }
        if (n._l !== n) {
          throw new Error(`VNodes created with a mapRange() function should be a singular nodes`);
        }
      }
      if (prev !== null) {
        n._l = prev;
        prev._r = n;
      } else {
        first = n;
      }
      prev = n;
    }
  }
  if (first !== null) {
    first._l = prev!;
    first._f |= VNodeFlags.KeyedList;
    return first;
  }
  return null;
}

/**
 * mapIterable creates a children collection from an `IterableIterator` object.
 *
 * @example
 *
 *     const items = [1, 2, 3];
 *
 *     render(
 *       div().c(mapIterable(function* () {
 *         for (const item of items) {
 *           yield div().k(item);
 *         }
 *       }())),
 *       DOMContainer,
 *     );
 *
 * @param iterable - Iterable iterator
 * @returns Virtual DOM collection
 */
export function mapIterable<T>(iterable: IterableIterator<VNode<T>>): VNode<T> | null {
  let first: VNode<any> | null = null;
  let prev: VNode<any> | null = null;

  for (const n of iterable) {
    /* istanbul ignore else */
    if (DEBUG) {
      if ((n._f & VNodeFlags.Key) === 0) {
        throw new Error(`VNodes created with a mapIterable() function should have an explicit key`);
      }
      if (n._l !== n) {
        throw new Error(`VNodes created with a mapIterable() function should be a singular nodes`);
      }
    }
    if (prev !== null) {
      n._l = prev;
      prev._r = n;
    } else {
      first = n;
    }
    prev = n;
  }

  if (first !== null) {
    first._l = prev!;
    first._f |= VNodeFlags.KeyedList;
    return first;
  }
  return null;
}
