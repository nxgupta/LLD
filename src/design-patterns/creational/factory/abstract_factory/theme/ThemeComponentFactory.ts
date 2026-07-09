import type { Button } from "./Button.js";
import type { Menu } from "./Menu.js";

//step 3- Create component factory
export interface ThemeComponentFactory{
    createButton(): Button;
    creatMenu(): Menu;
}