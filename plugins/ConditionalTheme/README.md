# BetterDiscord-ConditionalTheme
## What's this?

This plugin is made to conditionally theme your better discord (Works in browsers too!! (Tappermonkey Required))

Its very simple to use and the code is quite simple.

## Dependencies
- Betterdiscord if used in a client.
- Tapermonkey if used in a browser.
- Could also be loaded in a Nativefier App, you just need to edit the plugin file to run start(), or simply use the tapermokey script one.

## Features: 

 - Discord client detection
    - Stable
    - PTB
    - Canary
    - Development
    - Any
  - User input type detection
    - Mouse
    - Touch
    - Pen

## How to use it in your themes

```css
/*Put your theme settings in these different blocs*/

/* Blocks for Discord Clients / Sites (Stable, PTB, Canary, Development, Stable (WEB), PTB (WEB), CANARY(WEB))*/
body.stable{
    /* 
    Here you put settings that should be applied when the Discord Stable Client (The normal Client) has this plugin or when a browser on https://discord.com/ has the tapper monkey script.
    */
}
body.ptb{
    /* 
    Here you put settings that should be applied when the Discord PTB Client (Same icon as Normal) has this plugin or when a browser on https://ptb.discord.com/ has the tapper monkey script.
    */
}
body.canary{
    /* 
    Here you put settings that should be applied when the Discord Canary Client (Yellow icon) has this plugin or when a browser on https://canary.discord.com/ has the tapper monkey script.
    */
}
body.development{
    /* 
    Here you put settings that should be applied when the Discord Development Client (Black icon) has this plugin.
    Please note: 
        Discord Development is NOT available in the browser
        and 
        That to install BetterDiscord on it you need to use the "Canary" installed with the path set to the Discord Development path.
    */
}
body.anyclient{
    /* 
    Here you put settings that should be applied when a client/browser has this plugin/addon.
    */
}
body:not(.anyclient){
    /* 
    Here you put settings that should be applied when a client/browser DOES NOT have this plugin/addon. 
    */
}
body{
    /* 
    Here you put settings that should be the same across all clients, including if the plugin is not loaded. 
    This could be a custom font setting or a setting that uses an other variable :D

    Note: This portion would need to be set at first but it can be anyware due to the 
          way css sheets work
    */
}


```

Note: This will be completed soon.
