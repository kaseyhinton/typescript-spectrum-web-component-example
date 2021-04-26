import { css, customElement, html, LitElement, property } from "lit-element";
import page from "page";

import { ChangePathEvent } from "./events";

@customElement("my-app")
export class MyAppElement extends LitElement {
  @property({ type: String }) page!: string;

  async firstUpdated() {
    this.addEventListener(
      ChangePathEvent.eventType,
      ((event: ChangePathEvent) => {
        page.show(event.routePath);
      }) as EventListenerOrEventListenerObject
    );

    page("/", async () => {
      this.changePage(
        "popover-example",
        () => import("./components/popover-example.js")
      );
    });

    page("*", () => {
      this.changePage("error");
    });

    page.start();
  }

  protected async changePage(
    mainPage: string,
    importFunction?: () => Promise<unknown>
  ) {
    const handlePageChange = new Promise<void>(async (res) => {
      this.page = mainPage;
      try {
        await importFunction?.();
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch (error) {
        console.warn(error);
        this.page = "error";
      }
      res();
    });
    await handlePageChange;
  }

  static styles = css`
    [hidden] {
      display: none !important;
    }
  `;

  render() {
    return html`
      <popover-example
        ?hidden=${this.page !== "popover-example"}
      ></popover-example>
    `;
  }
}
