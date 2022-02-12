window.dataLayer = window.dataLayer || [];

function gtag(...params: unknown[]): void {
    window.dataLayer.push(...params);
}

export {
    gtag,
};