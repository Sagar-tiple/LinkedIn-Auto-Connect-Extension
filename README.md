# LinkedIn Auto-Connector

## Description
LinkedIn Auto-Connector is a Chrome extension designed to automatically send LinkedIn connection requests. With a simple user interface, you can start and stop sending connection requests on LinkedIn search pages with ease.

## Features
- Automatically clicks "Connect" buttons on LinkedIn search results.
- Randomized delays between requests to avoid detection.
- Pause and resume functionality.
- Visual progress indicator showing the number of invitations sent.

## How to Run the Extension

1. **Set Up Your Project Folder**:
   - Create a folder named `LinkedIn Auto-Connector`.
   - Inside this folder, save the following files:
     - `manifest.json`
     - `popup.html`
     - `content.js`
     - `background.js`
     - `index.css`
     - `logo.png` (icon for the extension)

2. **Load the Extension in Chrome**:
   1. Open Google Chrome and navigate to `chrome://extensions/`.
   2. Enable **Developer Mode** by toggling the switch at the top right.
   3. Click the **Load Unpacked** button.
   4. Select the `LinkedIn Auto-Connector` folder.
   5. The extension should now appear in your list of installed extensions.

3. **Testing the Extension**:
   - Navigate to any LinkedIn search page (e.g., `https://www.linkedin.com/search/people/`).
   - Click on the extension icon in the toolbar to open the popup.
   - Click the **START CONNECTING** button to begin sending connection requests.
   - The extension will automatically click “Connect” buttons on the page, and you can monitor progress through the console or any alerts.

## Architecture and Code Design

### Overview  
The architecture of the Chrome extension is designed to automate LinkedIn connection requests effectively while ensuring a user-friendly interface and smooth operation. The components work together to provide a seamless experience.

### Key Components  
1. **Manifest File**:
   - The **`manifest.json`** file defines the extension's metadata and configuration.
   - It specifies permissions, sets up the service worker (`background.js`), and identifies the content script (`content.js`) that runs on LinkedIn search pages.

2. **Popup Interface**:
   - The **`popup.html`** file creates a simple, intuitive UI for users to start or stop the connection process.
   - It includes a **progress circle** to indicate the number of invitations sent, making it easy for users to track their progress visually.

3. **Content Script**:
   - **`content.js`** is the core of the extension, responsible for automating actions on the LinkedIn page.
   - It identifies and clicks on "Connect" buttons, waits for potential pop-ups (like additional notes), and sends connection requests in a controlled manner using randomized delays.
   - The `isPaused` flag allows users to pause the process, ensuring they have control over the requests sent to LinkedIn.

4. **Background Script**:
   - **`background.js`** listens for installation events and can be extended for more functionality in the future.
   - Although currently simple, this can be useful for handling background tasks or managing state if needed later.

5. **Styling**:
   - The **`index.css`** file provides a modern dark theme for the popup, enhancing visual appeal and readability.
   - It ensures that the UI is responsive and consistent, with clear visual cues for button states (green for start and red for stop).

### Design Choices  
- **Modularity**: The use of separate files for the manifest, UI, and scripts allows for easy maintenance and updates.
- **User Experience**: The design focuses on simplicity, making it easy for users to initiate actions and understand the status of their connection requests.
- **Performance**: Randomized delays are implemented to prevent LinkedIn from detecting automated behavior, which is crucial for maintaining user accounts.

### Conclusion  
This extension leverages Chrome's capabilities to enhance user productivity on LinkedIn while adhering to best practices in extension development. The architecture balances functionality, ease of use, and maintainability, making it a robust solution for automating connection requests.
