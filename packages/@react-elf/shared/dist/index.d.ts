import { KeyValue, StringKeyValue } from "@react-elf-types/shared";
export declare const NumberStyleKeys: {
    width: boolean;
    height: boolean;
    top: boolean;
    left: boolean;
    right: boolean;
    bottom: boolean;
    maxWidth: boolean;
    maxHeight: boolean;
    minWidth: boolean;
    minHeight: boolean;
    margin: boolean;
    marginTop: boolean;
    marginRight: boolean;
    marginBottom: boolean;
    marginLeft: boolean;
    padding: boolean;
    paddingTop: boolean;
    paddingRight: boolean;
    paddingBottom: boolean;
    paddingLeft: boolean;
    border: boolean;
    borderTop: boolean;
    borderRight: boolean;
    borderBottom: boolean;
    borderLeft: boolean;
    borderWidth: boolean;
    borderTopWidth: boolean;
    borderRightWidth: boolean;
    borderBottomWidth: boolean;
    borderLeftWidth: boolean;
    gap: boolean;
};
/**
 * convertNumberStyleValue("width", 10) => "10px"
 */
export declare function convertNumberStyleValue(key: string, value: unknown): unknown;
export declare function propertyMap(styles?: KeyValue, mapper?: {}): KeyValue | undefined;
/**
 * convert style key to css key (camelCase to kebab-case)
 *
 * backgroundColor -> background-color
 *
 */
export declare function convertStyleKey(key: string): string;
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
export declare function makeCssVariablePrefixMap(prefix: string, obj?: KeyValue): StringKeyValue;
