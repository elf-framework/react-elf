import { ButtonProps } from "@react-elf-types/button";
import { makeCssVariablePrefixMap, propertyMap } from "@react-elf/shared";
import classnames from "classnames";

const cssProperties = makeCssVariablePrefixMap("--elf--button", {
  borderColor: true,
  backgroundColor: true,
  selectedBackgroundColor: true,
  disabledColor: true,
  color: true,
  textColor: true,
  fontSize: true,
  fontWeight: true,
  height: true,
  padding: true,
  borderRadius: true,
});

export function Button(props: ButtonProps) {
  const {
    variant = "default",
    size = "medium",
    disabled = false,
    selected,
    focused,
    shape = "none",
    quiet = false,
    outline = false,
    thin = false,
    closable = false,
    place = "",
    style = {},
    href = "",
    target = "_blank",
    children,
    className = "",
    iconOnly = false,
    justified = false,
    pending = false,
    play = false,
    hover = false,
    as = "button",
    hasMinWidth = false,
    ...extraProps
  } = props;

  const localClass = classnames([
    "elf--button",
    {
      selected,
      outline,
      focused,
      quiet,
      closable,
      justified,
      [variant]: true,
      [size]: true,
      [shape]: true,
      [place]: true,
      thin,
      hover,
      "icon-only": iconOnly,
      "has-min-width": hasMinWidth,
    },
    className,
  ]);

  const buttonContent = (
    <span>
      {/* {pending ? (
        <Animation.spin play={play}>
          <ProgressCircle value={80} size={size} variant={variant} />
        </Animation.spin>
      ) : ( */}
      {children}
      {/* )} */}
    </span>
  );

  if (as === "link") {
    const styleObject = {
      className: localClass,
      disabled,
      style: propertyMap(style, cssProperties),
      ...extraProps,
      onClick: undefined,
    };
    return (
      <a {...styleObject} href={href} target={target}>
        {buttonContent}
      </a>
    );
  } else {
    const styleObject = {
      className: localClass,
      disabled,
      style: propertyMap(style, cssProperties),
      ...extraProps,
    };
    return <button {...styleObject}>{buttonContent}</button>;
  }
}
