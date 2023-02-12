// ==UserScript==
// @name         Discord Theme
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Same as the plugin but for your browser :D
// @author       Ahiruneko-chan#6669
// @match       https://ptb.discord.com/*
// @match       https://canary.discord.com/*
// @match       https://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        none
// @run-at document-body
// ==/UserScript==

(function() {
    'use strict';
    var isInstalledAttrib = document.createAttribute("contiditionalplugininstalled");
        isInstalledAttrib.value = true;
        document.body.attributes.setNamedItem(isInstalledAttrib);
        var isclientattrib = document.createAttribute("native");
        isclientattrib.value = false;
        var releaseChannelattrib = document.createAttribute("releasechannel");
        try{
            var releaseChannel = DiscordNative.app.getReleaseChannel()
            // Edit to attribue instead of class, upcoming feature for my theme
            
                releaseChannelattrib.value = releaseChannel;
	            
            // Compat for my unupdated theme
                document.body.classList.add(releaseChannel);
                isclientattrib.value = true; // because its using the Release channel function, its native discord client :3
                console.log("Added using Release Channel Function")
        }catch(err){
            console.log("Couldn't use release channel, using URL & Assuming WebBrowser")
            console.log(err)
            if (document.domain == "discord.com") {
                releaseChannelattrib.value = "stable";
                document.body.classList.add("stable");
            } else if (document.domain == "ptb.discord.com") {
                releaseChannelattrib.value = "ptb";
                document.body.classList.add("ptb");
            } else if (document.domain == "canary.discord.com") {
                releaseChannelattrib.value = "canary";
                document.body.classList.add("canary");
            }
        }
        document.body.attributes.setNamedItem(releaseChannelattrib);
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
})();