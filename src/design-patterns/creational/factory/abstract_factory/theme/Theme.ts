import type { ThemeComponentFactory } from "./ThemeComponentFactory.js";

//Step 1 - Create Parent class
export abstract class Theme{
    private name: string;
    private primaryColour: string;
    private authorName: string;

    abstract createComponentFactory(): ThemeComponentFactory;
}