// ==UserScript==
// @name         Google Apps Script – Warning-Banner ausblenden
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Blendet das Warning-Banner aus, ohne den iframe-Inhalt zu stören
// @author       Du
// @license      MIT
// @homepageURL  https://github.com/jagodzinska/google-banner-remove
// @supportURL   https://github.com/jagodzinska/google-banner-remove/issues
// @downloadURL  https://raw.githubusercontent.com/jagodzinska/google-banner-remove/main/google-banner-remove.user.js
// @updateURL    https://raw.githubusercontent.com/jagodzinska/google-banner-remove/main/google-banner-remove.user.js
// @match        https://script.google.com/macros/s/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    // Nur das #warning-Element per ID ausblenden – nichts anderes anfassen
    GM_addStyle(`
        #warning { display: none !important; }
    `);
})();
