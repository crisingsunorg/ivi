
/**
 * VNode flags.
 */
export const enum VNodeFlags {
    /**
     * VNode represents a Text node.
     */
    Text = 1,
    /**
     * VNode represents an Element node.
     */
    Element = 1 << 1,
    /**
     * VNode represents a simple "function" component.
     *
     * It can also represent specialized components like "UpdateContext" component.
     */
    ComponentFunction = 1 << 2,
    /**
     * VNode represents a component.
     */
    ComponentClass = 1 << 3,
    /**
     * Children property contains a child with a basic type (number/string/boolean).
     */
    ChildrenBasic = 1 << 4,
    /**
     * Children property contains a child VNode.
     */
    ChildrenVNode = 1 << 5,
    /**
     * Children property contains unsafe HTML.
     */
    UnsafeHTML = 1 << 6,
    /**
     * VNode is using a non-artificial key.
     */
    Key = 1 << 7,
    /**
     * VNode represents an HTMLInputElement(+textarea) element.
     */
    InputElement = 1 << 8,
    /**
     * VNode represents a HTMLTextAreaElement.
     */
    TextAreaElement = 1 << 9,
    /**
     * VNode represents a HTMLMediaElement.
     */
    MediaElement = 1 << 10,
    /**
     * VNode is an SVGElement.
     */
    SvgElement = 1 << 11,
    /**
     * VNode is an Element Descriptor.
     */
    ElementDescriptor = 1 << 12,
    /**
     * VNode is a Custom Element.
     */
    WebComponent = 1 << 13,
    /**
     * Specialized VNode with connect functionality.
     */
    Connect = 1 << 14,
    /**
     * Specialized VNode with an update context functionality.
     */
    UpdateContext = 1 << 15,
    /**
     * Specialized VNode with keep alive functionality.
     */
    KeepAlive = 1 << 16,
    /**
     * VNode element will be automatically focused after instantiation.
     */
    Autofocus = 1 << 17,
    /**
     * VNode is deeply immutable. Deeply immutable VNodes can't have references to instances, they are used as a
     * prototype for building mutable trees.
     */
    Immutable = 1 << 18,

    /**
     * VNode represents a Component.
     */
    Component = ComponentFunction | ComponentClass,
    /**
     * Flags that should match to be compatible for syncing.
     */
    Syncable = Text | Element | Component | Key | InputElement | TextAreaElement | MediaElement | SvgElement |
    ElementDescriptor | WebComponent | Connect | UpdateContext | KeepAlive,
}

/**
 * Component flags.
 */
export const enum ComponentFlags {
    /**
     * Component is attached to the document.
     */
    Attached = 1,
    /**
     * Component is dirty (state) and should be updated.
     */
    DirtyState = 1 << 1,
    /**
     * Component is animated.
     */
    Animated = 1 << 2,

    /**
     * Component is dirty and should be updated.
     */
    Dirty = DirtyState | Animated,
}

/**
 * Element Descriptor flags.
 */
export const enum ElementDescriptorFlags {
    // it is important that flags below match `VNodeFlags`, because they will be copied to VNode.
    Element = VNodeFlags.Element,
    InputElement = VNodeFlags.InputElement,
    TextAreaElement = VNodeFlags.TextAreaElement,
    MediaElement = VNodeFlags.MediaElement,
    SvgElement = VNodeFlags.SvgElement,
    ElementDescriptor = VNodeFlags.ElementDescriptor,
    WebComponent = VNodeFlags.WebComponent,

    /**
     * Copy flags to VNode.
     */
    CopyFlags = ElementDescriptorFlags.Element | ElementDescriptorFlags.InputElement |
    ElementDescriptorFlags.TextAreaElement | ElementDescriptorFlags.MediaElement | ElementDescriptorFlags.SvgElement |
    ElementDescriptorFlags.ElementDescriptor | ElementDescriptorFlags.WebComponent,

    /**
     * Clone nodes from a base node with `Node.cloneNode(false)` method.
     */
    EnabledCloning = 1 << 17,
    /**
     * Protect class name from overriding.
     */
    ProtectClassName = 1 << 18,
    /**
     * Protect props from overriding.
     */
    ProtectProps = 1 << 19,
    /**
     * Protect style from overriding.
     */
    ProtectStyle = 1 << 20,
}

/**
 * Sync Flags.
 */
export const enum SyncFlags {
    /**
     * Tree is attached to the document.
     */
    Attached = 1,
    /**
     * Tree should be disposed.
     *
     * When tree is disposed, keep alive components can capture disposed subtrees.
     */
    Dispose = 1 << 2,
    /**
     * Update dirty components.
     */
    DirtyComponent = 1 << 3,
    /**
     * Force update for all components.
     */
    ForceUpdate = 1 << 4,
    /**
     * Context is dirty.
     */
    DirtyContext = 1 << 5,
}
