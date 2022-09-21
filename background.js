
try{

chrome.runtime.onInstalled.addListener(r => {
  if(r.reason == 'install'){
    
    chrome.tabs.create({
      url: 'onboarding-page.html'
    });
  };
});


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    if (changeInfo.url) {

      chrome.scripting.executeScript({
        files: ['contentScript.js'],
        target: {tabId: tabId}
      });
    }

});


}catch(e){
  console.log(e);
}