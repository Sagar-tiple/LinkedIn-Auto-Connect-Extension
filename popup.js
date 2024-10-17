const progressCircle = document.getElementById('progressCircle');
const startButton = document.getElementById('start');
let isConnecting = false;
let isPaused = false;
let maxRequests = 15;

startButton.textContent = 'START CONNECTING';
startButton.classList.remove('stop');

startButton.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!isConnecting) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['content.js'],
      });
      startButton.textContent = 'STOP CONNECTING';
      startButton.classList.add('stop');
      isConnecting = true;
      isPaused = false;
    } else {
      isPaused = !isPaused;
      chrome.tabs.sendMessage(tabs[0].id, { type: 'togglePause' });

      if (isPaused) {
        startButton.textContent = 'START CONNECTING';
        startButton.classList.remove('stop');
      } else {
        startButton.textContent = 'STOP CONNECTING';
        startButton.classList.add('stop');
      }
    }
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'updateCount') {
    const countElement = document.getElementById('count');
    countElement.textContent = message.count;

    const progress = (message.count / maxRequests) * 100;
    progressCircle.style.background = `
      conic-gradient(
        #4CAF50 ${progress}%, 
        #444 ${progress}% 100%
      )
    `;
  }
});




