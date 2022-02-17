import type { Accent } from "@scripts/models/accent";

interface SetAccentProps {
    imageNode: HTMLElement | null;
    navNode: HTMLElement | null;
    value: Accent;
}

/**
 * Sets the accent image and color
 * @param param0 Configuration object
 */
function setAccent({
    imageNode,
    navNode,
    value,
}: SetAccentProps): void {
    const [image, color] = value;
    if (imageNode instanceof HTMLImageElement) {
        imageNode.src = `../${image}`;
    }
    navNode?.style.setProperty("--accent-color", color);
}

export {
    setAccent,
};
