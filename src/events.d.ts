export declare class ChangePathEvent extends Event {
    static eventType: string;
    routePath: string;
    constructor(path: string, eventInitDict?: EventInit);
}
