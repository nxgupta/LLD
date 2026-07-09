import { Button } from "../Button.js";
import { Menu } from "../Menu.js";
import type { ThemeComponentFactory } from "../ThemeComponentFactory.js";
import { PrimaryButton } from "./PrimaryButton.js";
import { PrimaryMenu } from "./PrimaryMenu.js";

class PrimaryThemeFactory implements ThemeComponentFactory{
    creatMenu(): Menu {
        return new PrimaryMenu();
    }
    createButton(): Button {
        return new PrimaryButton();
    }
}

export default PrimaryThemeFactory;