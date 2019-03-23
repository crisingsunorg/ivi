// Core
export {
  _, Predicate, Box, box, EMPTY_OBJECT, getFunctionName, addErrorHandler, catchError,
  NOOP, NOOP_FALSE, NOOP_TRUE,
  append, unorderedArrayDeleteByIndex, unorderedArrayDelete,
  RepeatableTaskList, runRepeatableTasks,
  strictEqual, strictNotEqual, shallowEqual, shallowNotEqual, shallowEqualArray, shallowNotEqualArray,
  lazy, memo, memoObject, memoArray,
} from "./core";

// DOM
export {
  PASSIVE_EVENTS, KEYBOARD_EVENT_KEY, MOUSE_EVENT_BUTTONS, TOUCH_EVENTS, POINTER_EVENTS, INPUT_DEVICE_CAPABILITIES,
  IOS_GESTURE_EVENT,
} from "./dom/feature_detection";
export {
  objectHasOwnProperty,
  nodeInsertBefore, nodeRemoveChild, nodeReplaceChild, nodeCloneNode, elementRemoveAttribute, elementSetAttribute,
  elementSetAttributeNS,
} from "./dom/shortcuts";
export {
  SVG_NAMESPACE, XLINK_NAMESPACE, XML_NAMESPACE,
} from "./dom/namespaces";
export { CSSStyleProps } from "./dom/style";
export {
  HTMLAnchorElementAttrs, HTMLElementAttrs, HTMLAreaElementAttrs, HTMLAudioElementAttrs,
  HTMLBaseElementAttrs, HTMLBodyElementAttrs, HTMLBRElementAttrs, HTMLButtonElementAttrs,
  HTMLCanvasElementAttrs, HTMLQuoteElementAttrs, HTMLTableCaptionElementAttrs, HTMLTableColElementAttrs,
  HTMLModElementAttrs, HTMLDivElementAttrs, HTMLDListElementAttrs, HTMLFieldSetElementAttrs, HTMLFormElementAttrs,
  HTMLHeadElementAttrs, HTMLHeadingElementAttrs, HTMLHRElementAttrs, HTMLHtmlElementAttrs, HTMLIFrameElementAttrs,
  HTMLImageElementAttrs, HTMLInputElementAttrs, HTMLLabelElementAttrs, HTMLLegendElementAttrs, HTMLLIElementAttrs,
  HTMLLinkElementAttrs, HTMLMapElementAttrs, HTMLMenuElementAttrs, HTMLMetaElementAttrs, HTMLMeterElementAttrs,
  HTMLOListElementAttrs, HTMLOptGroupElementAttrs, HTMLOptionElementAttrs, HTMLParagraphElementAttrs,
  HTMLPictureElementAttrs, HTMLPreElementAttrs, HTMLProgressElementAttrs, HTMLScriptElementAttrs,
  HTMLSelectElementAttrs, HTMLSourceElementAttrs, HTMLSpanElementAttrs, HTMLStyleElementAttrs,
  HTMLTableDataCellElementAttrs, HTMLTableElementAttrs, HTMLTableHeaderCellElementAttrs, HTMLTableRowElementAttrs,
  HTMLTableSectionElementAttrs, HTMLTemplateElementAttrs, HTMLTextAreaElementAttrs, HTMLTitleElementAttrs,
  HTMLTrackElementAttrs, HTMLUListElementAttrs, HTMLUnknownElementAttrs, HTMLVideoElementAttrs, HTMLMediaElementAttrs,
} from "./dom/html";
export {
  SVGCircleElementAttrs, SVGClipPathElementAttrs, SVGDefsElementAttrs, SVGDescElementAttrs, SVGEllipseElementAttrs,
  SVGFEBlendElementAttrs, SVGFEColorMatrixElementAttrs, SVGFEComponentTransferElementAttrs,
  SVGFECompositeElementAttrs, SVGFEConvolveMatrixElementAttrs, SVGFEDiffuseLightingElementAttrs,
  SVGFEDisplacementMapElementAttrs, SVGFEDistantLightElementAttrs, SVGFEFloodElementAttrs, SVGFEFuncAElementAttrs,
  SVGFEFuncBElementAttrs, SVGFEFuncGElementAttrs, SVGFEFuncRElementAttrs, SVGFEGaussianBlurElementAttrs,
  SVGFEImageElementAttrs, SVGFEMergeElementAttrs, SVGFEMergeNodeElementAttrs, SVGFEMorphologyElementAttrs,
  SVGFEOffsetElementAttrs, SVGFEPointLightElementAttrs, SVGFESpecularLightingElementAttrs, SVGFESpotLightElementAttrs,
  SVGFETileElementAttrs, SVGFETurbulenceElementAttrs, SVGFilterElementAttrs, SVGForeignObjectElementAttrs,
  SVGGElementAttrs, SVGImageElementAttrs, SVGLinearGradientElementAttrs, SVGLineElementAttrs, SVGMarkerElementAttrs,
  SVGMaskElementAttrs, SVGMetadataElementAttrs, SVGPathElementAttrs, SVGPatternElementAttrs, SVGPolygonElementAttrs,
  SVGPolylineElementAttrs, SVGRadialGradientElementAttrs, SVGRectElementAttrs, SVGStopElementAttrs,
  SVGSVGElementAttrs, SVGSwitchElementAttrs, SVGSymbolElementAttrs, SVGTextElementAttrs, SVGTextPathElementAttrs,
  SVGTSpanElementAttrs, SVGViewElementAttrs, SVGUseElementAttrs, SVGElementAttrs,
} from "./dom/svg";
export {
  KeyCode, KeyLocation, KeyName, MouseButtons,
  getEventCharCode, getEventKey, getMouseButtons,
} from "./dom/input";

// Virtual DOM
export { NodeFlags } from "./vdom/node_flags";
export { setContext, restoreContext, context } from "./vdom/context";
export {
  AttributeDirective,
  IGNORE_RENDER_TO_STRING,
  PROPERTY, UNSAFE_HTML, EVENT, AUTOFOCUS,
} from "./vdom/attribute_directive";
export { ElementProtoDescriptor } from "./vdom/element_proto";
export { ComponentHooks, ComponentDescriptor, StatelessComponentDescriptor, Component } from "./vdom/component";
export {
  OpType, OpNode, Op, OpArray, ElementData, OpData, EventsData, ContextData, Key,
  createOpType, createOpNode,
  Events, Context, TrackByKey, key
} from "./vdom/operations";
export { OpState, createStateNode } from "./vdom/state";
export {
  elementFactory, htmlElementFactory, svgElementFactory, elementProto, component, statelessComponent,
} from "./vdom/factories";
export { dirtyCheck } from "./vdom/root";
export { useUnmount, useSelect, useEffect, useMutationEffect, useLayoutEffect } from "./vdom/hooks";
export { selector, findDOMNode } from "./vdom/utils";
export { visitNodes, getDOMNode } from "./vdom/reconciler";
export { Ref } from "./vdom/ref";
export { Portal, portal, usePortal } from "./vdom/portal";

// SSR
export {
  escapeAttributeValue, escapeText, escapeJavascript, emitAttribute, emitStyle, emitChildren, renderToString,
} from "./ssr";

// Scheduler
export {
  UpdateFlags, withSchedulerTick, withNextFrame, requestDirtyCheck, render, invalidate, requestNextFrame,
  scheduleMicrotask, scheduleMutationEffect, scheduleLayoutEffect,
  beforeMutations, afterMutations,
  frameStartTime, clock, dirty,
} from "./scheduler";

// Events
export {
  SyntheticEventFlags, EventFlags, PREVENT_DEFAULT, STOP_PROPAGATION, NativeEventSourceFlags,
} from "./events/flags";
export {
  getEventTarget,
  EVENT_CAPTURE_PASSIVE_OPTIONS, EVENT_CAPTURE_ACTIVE_OPTIONS, EVENT_PASSIVE_OPTIONS, EVENT_ACTIVE_OPTIONS,
} from "./events/utils";
export { SyntheticEvent } from "./events/synthetic_event";
export { EventHandlerFlags, EventHandlerNode, EventHandler } from "./events/event_handler";
export { DispatchTarget } from "./events/dispatch_target";
export { accumulateDispatchTargets } from "./events/accumulate_dispatch_targets";
export { dispatchEvent } from "./events/dispatch_event";
export { SyntheticNativeEvent, createNativeEvent } from "./events/synthetic_native_event";
export {
  NativeEventDispatcher, createNativeEventDispatcher,
  beforeNativeEvent, afterNativeEvent,
  removeBeforeNativeEvent, removeAfterNativeEvent,
} from "./events/native_event_dispatcher";
export {
  EVENT_DISPATCHER_ABORT, EVENT_DISPATCHER_ACTIVATE, EVENT_DISPATCHER_ARIA_REQUEST, EVENT_DISPATCHER_BEFORE_ACTIVATE,
  EVENT_DISPATCHER_BEFORE_COPY, EVENT_DISPATCHER_BEFORE_CUT, EVENT_DISPATCHER_BEFORE_DEACTIVATE,
  EVENT_DISPATCHER_BEFORE_PASTE, EVENT_DISPATCHER_BLUR, EVENT_DISPATCHER_CAN_PLAY, EVENT_DISPATCHER_CAN_PLAYTHROUGH,
  EVENT_DISPATCHER_CHANGE, EVENT_DISPATCHER_CLICK, EVENT_DISPATCHER_CONTEXT_MENU, EVENT_DISPATCHER_COPY,
  EVENT_DISPATCHER_CUE_CHANGE, EVENT_DISPATCHER_CUT, EVENT_DISPATCHER_DOUBLE_CLICK, EVENT_DISPATCHER_DEACTIVATE,
  EVENT_DISPATCHER_DRAG, EVENT_DISPATCHER_DRAG_END, EVENT_DISPATCHER_DRAG_ENTER, EVENT_DISPATCHER_DRAG_LEAVE,
  EVENT_DISPATCHER_DRAG_OVER, EVENT_DISPATCHER_DRAG_START, EVENT_DISPATCHER_DROP, EVENT_DISPATCHER_DURATION_CHANGE,
  EVENT_DISPATCHER_EMPTIED, EVENT_DISPATCHER_ENCRYPTED, EVENT_DISPATCHER_ENDED, EVENT_DISPATCHER_ERROR,
  EVENT_DISPATCHER_FOCUS, EVENT_DISPATCHER_GOT_POINTER_CAPTURE, EVENT_DISPATCHER_BEFORE_INPUT, EVENT_DISPATCHER_INPUT,
  EVENT_DISPATCHER_INVALID, EVENT_DISPATCHER_KEY_DOWN, EVENT_DISPATCHER_KEY_PRESS, EVENT_DISPATCHER_KEY_UP,
  EVENT_DISPATCHER_LOAD, EVENT_DISPATCHER_LOADED_DATA, EVENT_DISPATCHER_LOADED_METADATA, EVENT_DISPATCHER_LOAD_START,
  EVENT_DISPATCHER_LOST_POINTER_CAPTURE, EVENT_DISPATCHER_MOUSE_DOWN, EVENT_DISPATCHER_MOUSE_MOVE,
  EVENT_DISPATCHER_MOUSE_OUT, EVENT_DISPATCHER_MOUSE_OVER, EVENT_DISPATCHER_MOUSE_UP, EVENT_DISPATCHER_PASTE,
  EVENT_DISPATCHER_PAUSE, EVENT_DISPATCHER_PLAY, EVENT_DISPATCHER_PLAYING, EVENT_DISPATCHER_POINTER_CANCEL,
  EVENT_DISPATCHER_POINTER_DOWN, EVENT_DISPATCHER_POINTER_MOVE, EVENT_DISPATCHER_POINTER_OUT,
  EVENT_DISPATCHER_POINTER_OVER, EVENT_DISPATCHER_POINTER_UP, EVENT_DISPATCHER_PROGRESS, EVENT_DISPATCHER_RATE_CHANGE,
  EVENT_DISPATCHER_RESET, EVENT_DISPATCHER_SCROLL, EVENT_DISPATCHER_SEEKED, EVENT_DISPATCHER_SEEKING,
  EVENT_DISPATCHER_SELECT, EVENT_DISPATCHER_SELECT_START, EVENT_DISPATCHER_STALLED, EVENT_DISPATCHER_SUBMIT,
  EVENT_DISPATCHER_SUSPEND, EVENT_DISPATCHER_TIME_UPDATE, EVENT_DISPATCHER_TOUCH_CANCEL, EVENT_DISPATCHER_TOUCH_END,
  EVENT_DISPATCHER_TOUCH_MOVE, EVENT_DISPATCHER_TOUCH_START, EVENT_DISPATCHER_TRANSITION_CANCEL,
  EVENT_DISPATCHER_TRANSITION_END, EVENT_DISPATCHER_TRANSITION_RUN, EVENT_DISPATCHER_TRANSITION_START,
  EVENT_DISPATCHER_UNLOAD, EVENT_DISPATCHER_VOLUME_CHANGE, EVENT_DISPATCHER_WAITING, EVENT_DISPATCHER_WHEEL,
  EVENT_DISPATCHER_ACTIVE_TOUCH_END, EVENT_DISPATCHER_ACTIVE_TOUCH_MOVE, EVENT_DISPATCHER_ACTIVE_TOUCH_START,
  EVENT_DISPATCHER_ACTIVE_WHEEL,

  createNativeEventHandler,

  onAbort, onActivate, onAriaRequest, onBeforeActivate, onBeforeCopy, onBeforeCut, onBeforeDeactivate, onBeforePaste,
  onBlur, onCanPlay, onCanPlaythrough, onChange, onClick, onContextMenu, onCopy, onCueChange, onCut, onDoubleClick,
  onDeactivate, onDrag, onDragEnd, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop, onDurationChange,
  onEmptied, onEncrypted, onEnded, onError, onFocus, onGotPointerCapture, onBeforeInput, onInput, onInvalid, onKeyDown,
  onKeyPress, onKeyUp, onLoad, onLoadedData, onLoadedMetadata, onLoadStart, onLostPointerCapture, onMouseDown,
  onMouseMove, onMouseOut, onMouseOver, onMouseUp, onPaste, onPause, onPlay, onPlaying, onPointerCancel, onPointerDown,
  onPointerMove, onPointerOut, onPointerOver, onPointerUp, onProgress, onRateChange, onReset, onScroll, onSeeked,
  onSeeking, onSelect, onSelectStart, onStalled, onSubmit, onSuspend, onTimeUpdate, onTouchCancel, onTouchEnd,
  onTouchMove, onTouchStart, onTransitionCancel, onTransitionEnd, onTransitionRun, onTransitionStart, onUnload,
  onVolumeChange, onWaiting, onWheel, onActiveTouchEnd, onActiveTouchMove, onActiveTouchStart, onActiveWheel,
} from "./events/native_events";

// Helpers
export { containsRelatedTarget } from "./helpers/events";

// Experimental SSR diff/patch
export { RootSSR, setInvalidateHandler, renderSSR, updateSSR, dirtyCheckSSR } from "./ssr/diff";
export { serializeSSR } from "./ssr/render";
