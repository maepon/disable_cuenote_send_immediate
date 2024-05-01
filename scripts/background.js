// background

const cuenoteRegexp = /^https:\/\/.*\.cuenote\.jp\//

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && cuenoteRegexp.test(tab.url)) {
        chrome.tabs.executeScript(tab.id, { file: "scripts/replaceURL.js" });
    }
});