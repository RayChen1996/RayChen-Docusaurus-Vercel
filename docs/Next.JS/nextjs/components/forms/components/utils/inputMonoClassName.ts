type MonoInputInputMode = React.HTMLAttributes<HTMLInputElement>["inputMode"];

const monoInputInputModes: Array<MonoInputInputMode> = [
  "email",
  "numeric",
  "decimal",
  "tel",
  "url",
];

type MonoInputType = React.HTMLInputTypeAttribute;

const monoInputTypes: Array<MonoInputType> = [
  "date",
  "datetime-local",
  "email",
  "number",
  "password",
  "time",
  "week",
  "month",
  "url",
];

export function getMonoInputInputModeClassName(
  inputMode: MonoInputInputMode | undefined,
) {
  if (!inputMode) {
    return undefined;
  }
  return monoInputInputModes.includes(inputMode) ? "font-mono" : undefined;
}
export function getMonoInputTypeClassName(type: MonoInputType | undefined) {
  if (!type) {
    return undefined;
  }
  return monoInputTypes.includes(type) ? "font-mono" : undefined;
}
