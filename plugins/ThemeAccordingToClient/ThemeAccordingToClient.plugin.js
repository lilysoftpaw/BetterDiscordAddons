/**
 * @name Theme according to client
 * @version 1.0.0
 * @description Use the same theme file for Stable, PTB and Canary but with different settings! The body will get a class according to its type!     Classes: Stable: .stable | PTB: .ptb | Canary: .canary | Any: .anyclient
 * @author Duck-Chan
 * @authorId 598208193772126259
 * @source https://github.com/Bido67/BetterDiscordAddons/plugins/ThemeAccordingToClient
 * @updateUrl https://github.com/Bido67/BetterDiscordAddons/plugins/ThemeAccordingToClient/ThemeAccordingToClient.plugin.js
 * @website https://bido67.github.io/aboutme
 * @invite bnSrkHT
 */

module.exports = class ThemeAccordingToClientPlugin {
    load() {}
    start() {
        if (document.domain == "discord.com") {
            document.body.classList.add("stable");
        } else if (document.domain == "ptb.discord.com") {
            document.body.classList.add("ptb");
        } else if (document.domain == "canary.discord.com") {
            document.body.classList.add("canary");
        }
        document.body.classList.add("anyclient");
    }
    stop() {}
};
