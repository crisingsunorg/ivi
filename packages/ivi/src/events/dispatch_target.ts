import { EventHandler } from "./event_handler";

/**
 * DispatchTarget.
 */
export interface DispatchTarget {
  /**
   * Target.
   */
  target: any;
  /**
   * Matched Event Handlers.
   */
  handlers: EventHandler | EventHandler[];
}
