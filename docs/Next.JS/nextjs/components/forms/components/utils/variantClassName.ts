import type { InputVariant } from "../types";

export function getInputVariantClassName(variant?: InputVariant) {
  switch (variant) {
    case "bordered":
      return "input-bordered";
    case "ghost":
      return "input-ghost";
    default:
      break;
  }
}

export function getFileInputVariantClassName(variant?: InputVariant) {
  switch (variant) {
    case "bordered":
      return "file-input-bordered";
    case "ghost":
      return "file-input-ghost";
    default:
      break;
  }
}

export function getTextareaVariantClassName(variant?: InputVariant) {
  switch (variant) {
    case "bordered":
      return "textarea-bordered";
    case "ghost":
      return "textarea-ghost";
    default:
      break;
  }
}
