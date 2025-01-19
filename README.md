# Mobile-Data-Crawler
This App is built on Nodejs along with MongoDB as Database which leverages Puppeteer library to scrape mobile data.

The scraper folder contains mobileScraper.js which has logic to scrape a site using Puppeteer web crawler. It has successfully scraped 300+ devices including tablets, mobiles, smart watches etc.

This repository also has a express.js server which has different api endpoint which cater to different needs like getting devices based on brand ,price, specifications etc.

## Installation and Starting Instructions 
### Prerequisites
Ensure you have the following installed on your system:
  1. Node.js
  2. npm or yarn


### Installation
  1. Clone the Repository
     ```bash
     git clone git@github.com:humaidhusain98/NFT-AND-COLLECTIONS-TRACKER.git
     cd NFT-AND-COLLECTIONS-TRACKER
     ```
     
  2. Install Dependencies Run the following command to install all the required dependencies listed in package.json:
      ```bash
       npm install
     ```

### Configuration
  1. Environment Variables Create a .env file in the root directory of the project and add the necessary environment variables. A sample .env.example file might be available in the repository for reference
     ```bash
      cp .env.example .env
     ```
  2. Edit the .env File Update the file with your configurations

### Starting the Application
  1. Development Mode To start the app in development mode with hot reloading
     ```bash
     npm run dev
     ```
  2. Production Mode
     ```bash
      npm start
     ```
### Verifying Installation
  1. Open your browser and navigate to <br/>
  ```arduino
    http://localhost:PORT
   ```
  2. You should see the application running!


