import { KeyValue, StringKeyValue } from "@react-elf-types/shared";
export const NumberStyleKeys = {
  width: true,
  height: true,
  top: true,
  left: true,
  right: true,
  bottom: true,
  maxWidth: true,
  maxHeight: true,
  minWidth: true,
  minHeight: true,
  margin: true,
  marginTop: true,
  marginRight: true,
  marginBottom: true,
  marginLeft: true,
  padding: true,
  paddingTop: true,
  paddingRight: true,
  paddingBottom: true,
  paddingLeft: true,
  border: true,
  borderTop: true,
  borderRight: true,
  borderBottom: true,
  borderLeft: true,
  borderWidth: true,
  borderTopWidth: true,
  borderRightWidth: true,
  borderBottomWidth: true,
  borderLeftWidth: true,
  gap: true,
};

/**
 * convertNumberStyleValue("width", 10) => "10px"
 */
export function convertNumberStyleValue(key: string, value: unknown) {
  if (typeof value === "number") {
    if (NumberStyleKeys[key]) {
      value = value + "px";
    }
  }

  return value;
}

export function propertyMap(
  styles: KeyValue = {},
  mapper = {}
): KeyValue | undefined {
  const styleObj = {};
  Object.keys(styles).forEach((key) => {
    if (typeof styles[key] !== "undefined") {
      styleObj[mapper[key] || key] = convertNumberStyleValue(key, styles[key]);
    }
  });
  return Object.keys(styleObj).length ? styleObj : undefined;
}

// cache style keys
const styleKeys = {};
const uppercasePattern = /([A-Z])/g;

/**
 * convert style key to css key (camelCase to kebab-case)
 *
 * backgroundColor -> background-color
 *
 */
export function convertStyleKey(key: string): string {
  // check cache
  if (styleKeys[key]) {
    return styleKeys[key];
  }

  const upperKey = key.replace(uppercasePattern, "-$1").toLowerCase();

  styleKeys[key] = upperKey;

  return upperKey;
}

/**
 * prefixed style key
 *
 * makeCssVariablePrefixMap("--elf--ui", { backgroundColor: true });
 * =>
 * {
 *  backgroundColor: "--elf--ui-background-color",
 * }
 *
 */
export function makeCssVariablePrefixMap(
  prefix: string,
  obj: KeyValue = {}
): StringKeyValue {
  const newObj = {};

  Object.keys(obj).forEach((key) => {
    newObj[key] = prefix + "-" + convertStyleKey(key);
  });

  return newObj;
}
