(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.button = {}));
})(this, function(exports2) {
  "use strict";
  const NumberStyleKeys = {
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
    gap: true
  };
  function convertNumberStyleValue(key, value) {
    if (typeof value === "number") {
      if (NumberStyleKeys[key]) {
        value = value + "px";
      }
    }
    return value;
  }
  function propertyMap(styles = {}, mapper = {}) {
    const styleObj = {};
    Object.keys(styles).forEach((key) => {
      if (typeof styles[key] !== "undefined") {
        styleObj[mapper[key] || key] = convertNumberStyleValue(key, styles[key]);
      }
    });
    return Object.keys(styleObj).length ? styleObj : void 0;
  }
  const styleKeys = {};
  const uppercasePattern = /([A-Z])/g;
  function convertStyleKey(key) {
    if (styleKeys[key]) {
      return styleKeys[key];
    }
    const upperKey = key.replace(uppercasePattern, "-$1").toLowerCase();
    styleKeys[key] = upperKey;
    return upperKey;
  }
  function makeCssVariablePrefixMap(prefix, obj = {}) {
    const newObj = {};
    Object.keys(obj).forEach((key) => {
      newObj[key] = prefix + "-" + convertStyleKey(key);
    });
    return newObj;
  }
  exports2.NumberStyleKeys = NumberStyleKeys;
  exports2.convertNumberStyleValue = convertNumberStyleValue;
  exports2.convertStyleKey = convertStyleKey;
  exports2.makeCssVariablePrefixMap = makeCssVariablePrefixMap;
  exports2.propertyMap = propertyMap;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
