
# Web Asset Discovery Tool

This is a simple command-line tool for discovering subdomains and identifying web assets associated with a given domain. The tool utilizes the subfinder tool for subdomain enumeration and the request library for HTTP requests to identify web assets.

## How to Use

1. Clone the repository:

```bash
   git clone https://github.com/your-username/your-repository.git

   cd your-repository
```

2. Install the required Node.js packages:

```bash
  npm install
```

3. Run the tool:

```bash
   node your-script-name.js
```

4. Enter the domain name when prompted.

## Features

Subdomain enumeration using subfinder.
Web asset discovery by making HTTP requests to identified subdomains.
Asynchronous processing for faster execution.

## Dependencies

subfinder: Make sure to have subfinder installed and available in your system's PATH.

Node.js: Make sure to have Node.js installed to run the script.


## Notes

Adjust the batch size (const batchSize = 50;) in the code according to your needs.
Web assets are identified by making HTTP requests to the subdomains.


Feel free to customize and enhance the tool based on your requirements. If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.
