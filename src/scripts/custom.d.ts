declare module "*.svg" {
    const content: string;
    export default content;
}

declare interface Window {
    dataLayer: any;
}