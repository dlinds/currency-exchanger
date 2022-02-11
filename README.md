# Currency Calculator

### Converts currencies between USD and other global currencies

#### By Daniel Lindsey
<br>  

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Markdown_
* _jQuery_
* _Bootstrap_
* _Popper.js_
* _Webpack_
* _ESLint_
* _Jest_
* _Babel_

## Description
This application will allow a user to enter in a US dollar amount and choose a currency they'd like to calculate that amount to.  
<br>

# Setup/Installation Requirements
There are a couple of steps needed to get this project working correctly.

* ## Get an API Key
    
  1. To get an API key, open your browser and navigate to [ExchangeRate-API](https://www.exchangerate-api.com/)
  2. Locate the text box to enter in your email address.
  3. Enter in your email, and hit Get Free Key
  4. Navigate to your email inbox, and locate the email from ExchangeRate-API
  5. Click the link within the email to confirm your account
  6. You should then be directed to a page with your API key. If not, check your email inbox for an email with the subject "Account Activated" - this should also contain your API key.
      * API Keys are typically long, randomly generated strings of letters and numbers  
      <br>

* ## Cloning the repository
    
  1. First, you will need to access a terminal. The easiest way to do so on either OS X (Mac) or Windows is to install Visual Studio (VS) Code.
      *  [Windows](https://code.visualstudio.com/docs/?dv=win64user)
      *  [OS X](https://code.visualstudio.com/docs/?dv=osx)
  2. Next, install Node.js
      * [Node.js](https://nodejs.org/en/download/)
  3. Once VS Code and Node.js are installed, navigate back to [this project](https://github.com/dlinds/currency-exchange)
  4. Locate and click the green Code button at the top of the page, and choose the option to _Download ZIP_.
  5. Once downloaded, navigate to your Downloads folder and extract the contents to a location of your choosing. 
  6. Right click in the root directory of the folder, and choose _Open With Code_. This should open the repository in VS Code.  
  
  <br>

* ## Insert your API Key into the application
    
  1. Within the root directory of your project, right click and choose New File
  2. Create the new file with the name  "**_.env_**" (without the quotes). Open the file by clicking it
  3. Within the "**_.env_**" file, enter in the following text, replacing the "**_APY KEY HERE_**" portion with the key you generated earlier.
      * API_KEY=**_API KEY HERE_**  
<br>

* ## Opening the application
    
  1. From the top menu in VS Code, choose **_Terminal_** --> **_New Terminal_**. A terminal should open at the bottom of the application
  2. Type the following commands into the terminal, entering in each one a time
      * npm install
      * npm run build
      * npm run start
  3. Assuming there are no errors with downloading and installing the necessary dependency packages, your browser should automatically open to the home page of the currency site.

  <br>

## Known Bugs

There are no known bugs at this time. Please use the contact information below if you find anything.

## License

MIT

## Contact Information

Daniel Lindsey  
https://github.com/dlinds  
daniellindsey85254@gmail.com  