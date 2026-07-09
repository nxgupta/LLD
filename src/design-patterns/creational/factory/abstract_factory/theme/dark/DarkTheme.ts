import { Theme } from "../Theme.js";
import type { ThemeComponentFactory } from "../ThemeComponentFactory.js";
import { DarkThemeFactory } from "./DarkThemeFactory.js";

class DarkTheme extends Theme{
    createComponentFactory(): ThemeComponentFactory {
        return new DarkThemeFactory()
    }
}

export default DarkTheme;