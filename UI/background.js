chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.set({status: false}, function() {
      console.log('The color is green.');
      console.log("hm");
    });
  });