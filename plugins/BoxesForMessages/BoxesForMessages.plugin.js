/**
 * @name Boxes for Messages
 * @version 1.1.1
 * @description Adjusts the Discord DOM to add boxes around every messages, per user!
 * @author Ahirusameneko-chan
 * @authorId 598208193772126259
 * @source https://github.com/Bido67/BetterDiscordAddons/plugins/BoxesForMessages
 * @updateUrl https://raw.githubusercontent.com/Bido67/BetterDiscordAddons/main/plugins/BoxesForMessages/BoxesForMessages.plugin.js
 * @website https://lilysoftpaw.github.io/aboutme
 * @invite bnSrkHT
 */

module.exports = class BoxesForMessages {
    load() {
        document.BoxesForMessages = function BoxesForMessages(speed = 500, loopEnabled = true, ignoreStyled = false, ignoreMode = 0) {
            this.loopSettings = {
                delay: speed,
                loop: loopEnabled,
            };
            this.ignoreStyled = ignoreStyled;
            this.ignoreMode = ignoreMode; /* 0: Fully Ignore Styled; 1 Ignore always but check on interval, 2: Don't ignore */
            this.classes = {
                start: "BFM-Start",
                message: "BFM-Msg",
                end: "BFM-End",
                check: "BFM-Done",
            };
            this.style = () => {
                try {
                    var q = 0;
                    var messagesToStyle = document.querySelector(".scrollerInner-2PPAp2").querySelectorAll(`li>.cozyMessage-1DWF9U${this.ignoreStyled == false ? "" : ":not(." + this.classes.check + ")"}`);
                    for (var i = 0; i < messagesToStyle.length; i++) {
                        var isGroupStart = messagesToStyle[i].parentElement.querySelectorAll(".groupStart-3Mlgv1").length != 0;
                        if (!isGroupStart && i == messagesToStyle.length - 1) {
                            try {
                                messagesToStyle[i - 1].classList.remove(this.classes.end);
                            } catch (e) {}
                            messagesToStyle[i].classList.add(this.classes.end);
                        } else if (isGroupStart && i == messagesToStyle.length - 1) {
                            messagesToStyle[i].classList.add(this.classes.end);
                        }
                        if (isGroupStart) {
                            try {
                                messagesToStyle[i - 1].classList.add(this.classes.end);
                            } catch (err) {}
                            messagesToStyle[i].classList.add(this.classes.start);
                        }
                        messagesToStyle[i].classList.add(this.classes.message);
                        messagesToStyle[i].classList.add(this.classes.check);

                        q++;
                    }
                    messagesToStyle = "";
                    console.log(q);
                    q = 0;
                } catch (err) {}
            };
            this.loop = () => {
                if (this.loopSettings.loop) {
                    this.style();
                }
                setTimeout(this.loop, this.loopSettings.delay);
            };
            this.loop();
        };
    }
    async start() {
        new document.BoxesForMessages();
    }
    stop() {
        document.BoxesForMessages = "";
    }
};
