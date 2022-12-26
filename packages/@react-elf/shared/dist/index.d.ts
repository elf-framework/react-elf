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
export declare const ComponentPropsToStylePropsMap: {
    alignContent: string;
    alignItems: string;
    alignSelf: string;
    area: string;
    autoColumns: string;
    autoFlow: string;
    autoRows: string;
    backgroundColor: string;
    backgroundImage: string;
    basis: string;
    border: string;
    borderRadius: string;
    bottom: string;
    boxShadow: string;
    color: string;
    column: string;
    columnEnd: string;
    columnGap: string;
    columnSpan: string;
    columnStart: string;
    direction: string;
    display: string;
    flex: string;
    fontFamily: string;
    fontSize: string;
    fontStyle: string;
    fontWeight: string;
    gap: string;
    grow: string;
    height: string;
    justifyContent: string;
    left: string;
    letterSpacing: string;
    lineHeight: string;
    margin: string;
    marginBlock: string;
    marginBlockEnd: string;
    marginBlockStart: string;
    marginBottom: string;
    marginInline: string;
    marginInlineEnd: string;
    marginInlineStart: string;
    marginLeft: string;
    marginRight: string;
    marginTop: string;
    maxHeight: string;
    maxWidth: string;
    minHeight: string;
    minWidth: string;
    objectFit: string;
    objectPosition: string;
    opacity: string;
    order: string;
    overflow: string;
    padding: string;
    paddingBlock: string;
    paddingBlockEnd: string;
    paddingBlockStart: string;
    paddingBottom: string;
    paddingInline: string;
    paddingInlineEnd: string;
    paddingInlineStart: string;
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    position: string;
    resize: string;
    right: string;
    row: string;
    rowEnd: string;
    rowGap: string;
    rowSpan: string;
    rowStart: string;
    shrink: string;
    templateAreas: string;
    templateColumns: string;
    templateRows: string;
    textAlign: string;
    textDecoration: string;
    textTransform: string;
    top: string;
    transform: string;
    transformOrigin: string;
    width: string;
    whiteSpace: string;
    wrap: string;
    zIndex: string;
};
/**
 * properties key 중에 style key가 있는지 확인
 * style key 와 none style key 를 분리해서 반환
 *
 */
export declare function splitStyleKeyAndNoneStyleKey(properties: KeyValue): {
    style: {};
    noneStyle: {};
};
