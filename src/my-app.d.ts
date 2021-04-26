import { LitElement } from "lit-element";
export declare class MyAppElement extends LitElement {
    page: string;
    firstUpdated(): Promise<void>;
    protected changePage(mainPage: string, importFunction?: () => Promise<unknown>): Promise<void>;
    static styles: import("lit-element").CSSResult;
    render(): import("lit-element").TemplateResult;
}
