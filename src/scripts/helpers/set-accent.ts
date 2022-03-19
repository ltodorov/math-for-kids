import type { Accent } from "@scripts/models/accent";

interface SetAccentProps {
    imageNode: HTMLElement | null;
    accentNode: HTMLElement | null;
    value: Accent;
}

/**
 * Sets the accent image and color
 * @param param0 Configuration object
 */
function setAccent({
    imageNode,
    accentNode,
    value,
}: SetAccentProps): void {
    const [image, color] = value;
    if (imageNode instanceof HTMLImageElement) {
        imageNode.src = `../${image}`;
    }
    accentNode?.style.setProperty("--accent-color", color);
}

export {
    setAccent,
};
