import darkTokens from "@elf-framework/design-tokens/tokens.dark.json";
import lightTokens from "@elf-framework/design-tokens/tokens.json";

export function getThemeTokens(mode: string = "light") {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const tokens = mode === "dark" || isDarkMode ? darkTokens : lightTokens;
  return tokens;
}
