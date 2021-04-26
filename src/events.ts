export class ChangePathEvent extends Event {
  static eventType = "change-route" as keyof HTMLElementEventMap;
  public routePath: string = '';

  constructor(path: string, eventInitDict?: EventInit) {
    super(
      ChangePathEvent.eventType,
      eventInitDict ?? { bubbles: true, composed: true }
    );
    this.routePath = path;
  }
}
