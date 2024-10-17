let isPaused = false; 
function randomDelay() {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * (10000 - 5000 + 1)) + 1000;
    setTimeout(resolve, delay);
  });
}
async function sendConnectionRequests() {
  const buttons = Array.from(document.querySelectorAll('button'));
  const connectButtons = buttons.filter((btn) => btn.innerText.includes('Connect'));
  let count = 0;
  for (let btn of connectButtons) {
    while (isPaused) {
      await new Promise(resolve => setTimeout(resolve, 100)); 
    }
    btn.click();
    console.log('Clicked Connect');

    await randomDelay();
    const sendButton = document.querySelector('button[aria-label="Send without a note"]');
    if (sendButton) {
      sendButton.click();
      console.log('Sent Connection Request');
    }
    const gotItButton = document.querySelector('button[aria-label="Got it"]');
    if (gotItButton) {
      gotItButton.click();
      console.log('Got it');
    }
    count++;
    chrome.runtime.sendMessage({ type: 'updateCount', count: count });
    await randomDelay();
  }
  {
  alert('All visible connection requests sent!');
  chrome.runtime.sendMessage({ type: 'updateCount', count: 0 });
  isPaused = false;
  }
}
sendConnectionRequests();
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'togglePause') {
    isPaused = !isPaused;  
    console.log(isPaused ? 'Paused Connection Requests' : 'Resumed Connection Requests');
  }
});
