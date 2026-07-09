import PrimaryTheme from "./primary/PrimaryTheme.js";

let primaryTheme = new PrimaryTheme();
let componentFactory = primaryTheme.createComponentFactory();

let button = componentFactory.createButton()
let menu = componentFactory.creatMenu();