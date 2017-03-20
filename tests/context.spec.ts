import { frag, render, $sc, $fsc } from "./utils";
import { Context } from "../src/common/types";
import { Component } from "../src/vdom/component";
import { IVNode } from "../src/vdom/ivnode";
import { $t } from "../src/vdom/vnode";
import { $c, $ctx, $connect } from "../src/vdom/vnode_components";
import { expect } from "chai";

interface ContextTestComponentProps {
    value: number;
    child: IVNode<any>;
}

function ContextTestPrinter(value: string) {
    return $t(value);
}

interface ContextTestPrinterSelect {
    in: string;
    out: string;
}

const ContextTestPrinterDescriptor = {
    select: function (
        prev: ContextTestPrinterSelect,
        props: null,
        context: Context<{ value: string }>,
    ): ContextTestPrinterSelect {
        const value = context.value;

        return {
            in: context.value,
            out: context.value,
        };
    },
    render: ContextTestPrinter,
};

function $ContextTestPrinter() {
    return $connect(ContextTestPrinterDescriptor, null);
}

describe("context", () => {
    describe("component API", () => {
        it("<C>10</C>", () => {
            const n = render<HTMLElement>($ctx({ value: 10 }, $ContextTestPrinter()));
            expect(n.nodeValue).to.equal("10");
        });

        it("<C>10</C> => <C>20</C>", () => {
            const f = frag();
            render<HTMLElement>($ctx({ value: 10 }, $ContextTestPrinter()), f);
            const b = render<HTMLElement>($ctx({ value: 20 }, $ContextTestPrinter()), f);
            expect(b.nodeValue).to.equal("20");
        });

        it("<C><S>10</S></C> => <C><S>20</S></C>", () => {
            const f = frag();
            render<HTMLElement>($ctx({ value: 10 }, $sc($ContextTestPrinter())), f);
            const b = render<HTMLElement>($ctx({ value: 20 }, $sc($ContextTestPrinter())), f);
            expect(b.nodeValue).to.equal("20");
        });

        it("<C><SF>10</SF></C> => <C><SF>20</SF></C>", () => {
            const f = frag();
            render<HTMLElement>($ctx({ value: 10 }, $fsc($ContextTestPrinter())), f);
            const b = render<HTMLElement>($ctx({ value: 20 }, $fsc($ContextTestPrinter())), f);
            expect(b.nodeValue).to.equal("20");
        });
    });
});
