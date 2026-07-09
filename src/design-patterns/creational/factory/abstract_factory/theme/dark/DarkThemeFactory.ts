import type { Button } from "../Button.js";
import type { Menu } from "../Menu.js";
import type { ThemeComponentFactory } from "../ThemeComponentFactory.js";
import { Darkmenu } from "./DarkButton.js";
import { DarkButton } from "./DarkMenu.js";

export class DarkThemeFactory implements ThemeComponentFactory{
    createButton(): Button {
        return new DarkButton();
    }
    creatMenu(): Menu {
        return new Darkmenu();
    }
}