// ==UserScript==
// @name         Discord Theme
// @namespace    http://tampermonkey.net/
// @version      1.0
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
    if(document.domain == "discord.com"){
        document.querySelector("body").classList.add("stable");
    }
    if(document.domain == "canary.discord.com"){
        document.querySelector("body").classList.add("canary");
    }
    if(document.domain == "ptb.discord.com"){
        document.querySelector("body").classList.add("ptb");
    }
    document.querySelector("body").classList.add("anyclient")
    document.devFreeze = false;
        document.querySelector("body").addEventListener('pointerdown', (event) => {
            if(!document.devFreeze){
    	        var myshit = document.createAttribute("inputType");
	            myshit.value = event.pointerType;
	            document.querySelector("body").attributes.setNamedItem(myshit);
            }
        })
})();