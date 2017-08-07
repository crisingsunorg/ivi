export type MaybeUndefined<T> = {
  [P in keyof T]: T[P] | undefined;
};

/**
 * Context.
 */
export type Context<T = {}> = T;
