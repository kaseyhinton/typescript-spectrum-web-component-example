import { customElement, html, LitElement } from "lit-element";
import "@spectrum-web-components/popover/sp-popover";

@customElement("popover-example")
export default class PopoverExampleElement extends LitElement {
  render() {
    return html`<h1>Popover</h1>`;
  }
}
