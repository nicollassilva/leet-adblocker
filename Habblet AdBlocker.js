// ==UserScript==
// @name         Habblet AdBlocker
// @namespace    http://tampermonkey.net/
// @version      2025-03-04
// @description  Remove anúncios abusivos do Habblet.city
// @author       iNicollas
// @include      *://*.habblet.city/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=habblet.city
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    console.log("<=> Habblet AdBlocker v0.2 by iNicollas <=>");

    const removedElements = new Set();

    const elementsToRemove = [
        ".fc-ab-root",
        "#fb-root",
        'div[style="display: flex;justify-content: center;"]',
        '.adsbygoogle',
        'script[src*="adsbygoogle.js"]',
        'script[src*="googlesyndication.com"]',
        'script[src*="doubleclick.net"]',
        'script[src*="adservice.google.com"]',
        'iframe[src*="adsbygoogle"]',
        'iframe[src*="googlesyndication.com"]',
        'iframe[src*="doubleclick.net"]',
        'iframe[src*="adservice.google.com"]',
        'script[src*="ad.doubleclick.net"]',
        'script[src*="googleadservices.com"]',
        'script[src*="securepubads.g.doubleclick.net"]',
        'script[src*="static.doubleclick.net"]',
        'script[src*="pagead2.googlesyndication.com"]',
        'script[src*="tpc.googlesyndication.com"]',
        'script[src*="google-analytics.com/ga.js"]',
        'script[src*="google-analytics.com/analytics.js"]',
        'div[id^="google_ads_iframe"]',
        'div[id^="div-gpt-ad"]',
        'div[class^="ad_"]',
        'div[class*="banner-ad"]',
        'div[class*="sponsored-content"]',
        'div[class*="ad-wrapper"]',
        'div[class*="ad-placeholder"]',
        'div[class*="ads-container"]',
        'div[class*="ad-slot"]',
        'div[class*="advertisement"]',
        'div[class*="ad-module"]',
        'div[class*="ad-display"]',
        'div[class*="ad-inserter"]',
        'iframe[src*="googlesyndication.com"]',
        'iframe[src*="doubleclick.net"]',
        'iframe[src*="adservice.google.com"]',
        'iframe[src*="adsafeprotected.com"]',
        'iframe[src*="adnxs.com"]',
        'iframe[src*="criteo.com"]',
        'iframe[src*="taboola.com"]',
        'iframe[src*="outbrain.com"]',
        'iframe[src*="adform.net"]',
        'iframe[src*="amazon-adsystem.com"]',
        'iframe[src*="pubmatic.com"]',
        'iframe[src*="openx.net"]',
        'iframe[src*="revcontent.com"]',
        'iframe[src*="adnxs-simple.com"]',
        'script[src*="adsbygoogle.js"]',
        'script[src*="googlesyndication.com"]',
        'script[src*="doubleclick.net"]',
        'script[src*="adservice.google.com"]',
        'script[src*="adsafeprotected.com"]',
        'script[src*="adnxs.com"]',
        'script[src*="criteo.com"]',
        'script[src*="taboola.com"]',
        'script[src*="outbrain.com"]',
        'script[src*="adform.net"]',
        'script[src*="amazon-adsystem.com"]',
        'script[src*="pubmatic.com"]',
        'script[src*="openx.net"]',
        'script[src*="revcontent.com"]',
        'script[src*="adnxs-simple.com"]',
        '.ad-slot',
        '.ad-container',
        '.ad-banner',
        '.ad-unit',
        '.advertisement',
        '.sponsored',
        '[aria-label="Ads"]',
        '[data-google-query-id]',
        '[data-ad-client]',
        '[data-ad-slot]',
        '[data-ad-format]',
        '[data-ad-status]',
        'iframe[title*="Publicidade"]',
        'iframe[title*="Anúncio"]',
        'iframe[title*="ad"]',
        'iframe[title*="banner"]',
        'iframe[src*="ads"]',
        'iframe[src*="banners"]'
    ];

    function removeAds() {
        let removedCount = 0;

        elementsToRemove.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                if (!removedElements.has(el)) {
                    el.remove();
                    removedElements.add(el);
                    removedCount++;
                }
            });
        });

        if (removedCount > 0) {
            console.log(`[AdBlocker] Removidos ${removedCount} elementos.`);
        }
    }

    removeAds();

    const observer = new MutationObserver(() => removeAds());
    observer.observe(document.body, { childList: true, subtree: true });

})();
