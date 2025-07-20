// Chrome extension background script
// ...existing code...
chrome.action.onClicked.addListener(function(tab) {
  if (tab.id !== undefined) {
    chrome.sidePanel.open({ tabId: tab.id });
  }
});