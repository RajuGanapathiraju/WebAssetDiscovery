let exec = require('child_process').exec;
const readline = require('readline');
const request = require('request');
let async = require('async');
var colors = require('colors');

let subdomains = [];

let count = 1;

let web_assets = [];


const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//take the domain name and list the subdomains
r1.question("Enter the domain name:\t".brightBlue, (answer) => {
    let subfinder_command = `subfinder -d ${answer} - silent`;
    exec(subfinder_command, (stderr, stdout) => {
        subdomains = stdout.split("\n");
        console.log(`\nTotal subdomains identified - ${subdomains.length}\n`, subdomains);
        web_asset_discovery(subdomains)
    })
})


// Find the web asset list from the subdomains
function web_asset_discovery() {
    const batchSize = 50;

    async.eachLimit(subdomains, batchSize, async (url) => {
        try {
            const response = await requestAsync(`http://${url}`);
            const statusCode = response.statusCode;
            web_assets.push({
                url,
                statusCode
            });
            console.log(`${url} [${statusCode}]\t${count++}`.green);
        } catch (error) {
            console.error(`Error for ${url}: ${error.message}`.red);
        }
    }, () => {
        console.log(`list of web assets - [${web_assets.length}]\n`, web_assets);
    });
}

// Convert request to promise-based function
function requestAsync(url) {
    return new Promise((resolve, reject) => {
        request(url, { timeout: 100000 }, (error, response) => {
            if (error) {
                reject(error);
            } else {
                resolve(response);
            }
        });
    });
}