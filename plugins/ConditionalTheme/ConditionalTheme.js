/**
 * @name Conditional Theming
 * @version 1.2.0
 * @description Theme your discord under different conditions!
 * @author Duck-Chan
 * @authorId 598208193772126259
 * @source https://github.com/Bido67/BetterDiscordAddons/plugins/ConditionalTheme
 * @updateUrl https://raw.githubusercontent.com/Bido67/BetterDiscordAddons/main/plugins/ConditionalTheme/ConditionalTheme.plugin.js
 * @website https://bido67.github.io/aboutme
 * @invite bnSrkHT
 */
// This plugin will be renamed to theme controller.

module.exports = class ConditionalTheme {
    
    load() {}
    async start() {
        // this is quite easy to do
        var isInstalledAttrib = document.createAttribute("contiditionalplugininstalled");
        isInstalledAttrib.value = true;
        document.body.attributes.setNamedItem(isInstalledAttrib);
        var isclientattrib = document.createAttribute("native");
        isclientattrib.value = false;
	            
        try{
            var releaseChannel = DiscordNative.app.getReleaseChannel()
            // Edit to attribue instead of class, upcoming feature for my theme
            var releaseChannelattrib = document.createAttribute("releasechannel");
                releaseChannelattrib.value = releaseChannel;
	            document.body.attributes.setNamedItem(releaseChannelattrib);
            // Compat for my unupdated theme
                document.body.classList.add(releaseChannel);
                isclientattrib.value = true; // because its using the Release channel function, its native discord client :3
                console.log("Added using Release Channel Function")
        }catch(err){
            console.log("Couldn't use release channel, using URL & Assuming WebBrowser")
            console.log(err)
            if (document.domain == "discord.com") {
                document.body.classList.add("stable");
            } else if (document.domain == "ptb.discord.com") {
                document.body.classList.add("ptb");
            } else if (document.domain == "canary.discord.com") {
                document.body.classList.add("canary");
            }
        }
        
        document.body.attributes.setNamedItem(isclientattrib);
        
        document.body.classList.add("anyclient");
        //Add event listener for touch / mouse / pen input
        document.devFreeze = false;
        document.body.addEventListener('pointerdown', (event) => {
            if(!document.devFreeze){
    	        var myshit = document.createAttribute("inputType");
	            myshit.value = event.pointerType;
	            document.body.attributes.setNamedItem(myshit);
            }
        })
        // Upcoming feature for the tapermonkey script and since some people might figure out how to load this in a browser well might as well put it in
        // Use the user agent to figure out what browser ya using
        /*try{
            var navigator = document.createAttribute("browser");
            navigator.value = "Unknown";
            if(navigator.userAgentData && navigator.userAgentData.brands.length != 0){ 
                // yay
                if(navigator.userAgentData.brands.filter((brand => brand.brand == "Microsoft Edge")).length != 0){
                    // Microsoft Edge!
                }
                else if(navigator.userAgentData.brands.filter((brand => brand.brand == "Google Chrome")).length != 0){
                    // Google Chrome!
                }
            }else{
                // Discord doesn't have a brand in the navigator.userAgentData
                // bruh we gotta use navigator.userAgent >~<

            }
        }
        catch(err){
            console.log(err);
        }*/
    }
    stop() {}
};
