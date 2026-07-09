import { Theme } from "../Theme.js";
import type { ThemeComponentFactory } from "../ThemeComponentFactory.js";
import PrimaryThemeFactory from "./PrimaryThemeFactory.js";

class PrimaryTheme extends Theme{
    createComponentFactory(): ThemeComponentFactory {
        return new PrimaryThemeFactory();
    }
}

export default PrimaryTheme;