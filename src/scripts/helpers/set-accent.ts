import { Accent } from "@scripts/models/accent";

interface SetAccentProps {
    imageNode: HTMLElement | null;
    navNode: HTMLElement | null;
    value: Accent;
}

function setAccent({
    imageNode,
    navNode,
    value,
}: SetAccentProps) {
    const [image, color] = value;
    if (imageNode instanceof HTMLImageElement) {
        imageNode.src = `../${image}`;
    }
    navNode?.style.setProperty("--accent-color", color);
}

export {
    setAccent,
};
