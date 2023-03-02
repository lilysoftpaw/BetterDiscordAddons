# BetterDiscord-BoxesForMessages

## What's this?

This plugin is made to add boxes around your messages! (Works in browser too!! Requires TamperMonkey)

Its very simple to use and the code is kinda simple.

## Dependencies
- Betterdiscord if used in a client.
- Tampermonkey if used in a browser.
- Could also be loaded in a Nativefier App, you just need to edit the plugin file to run start(), or simply use the tapermokey script one.

## Features: 

 - Doesn't work when theme doesn't support it.
 - Doesn't add CSS to the dom (This means it doesn't create the boxes if custom css / theme isn't made for it)

## How to use it:

Download the plugin and put it in your plugins folder.

And 

Add this to your custom css / theme.

```css
/* These variables are to edit the border styling, box margin, and border radius. This is made to be at the beginning of the theme file.*/
:root {
  /* Variables: */
  --BFM-border-size: 5px;
  --BFM-border-color: red;
  --BFM-border-style: solid;
  --BFM-border-radius: 15px;
  --BFM-margin: 40px;
  --BFM-background: transparent;
}
/* Add the following in its entierty. This is made to go in deep into the theme file */
:root {
  --BFM-border: var(--BFM-border-size) var(--BFM-border-style) var(--BFM-border-color);
}
.BFM-End{
    border-bottom: var(--BFM-border);
    border-bottom-left-radius: var(--BFM-border-radius);
    border-bottom-right-radius: var(--BFM-border-radius);
}
.BFM-Start{
    border-top: var(--BFM-border);
    border-top-left-radius: var(--BFM-border-radius);
    border-top-right-radius: var(--BFM-border-radius);
}
.BFM-Msg{
    border-left: var(--BFM-border);
    border-right: var(--BFM-border);
    margin-left: var(--BFM-margin);
    margin-right: var(--BFM-margin);
    background: var(--BFM-background);
    overflow: hidden;
}
.BFM-Start .buttons-3dF5Kd {
    top: 5px;
}
```
