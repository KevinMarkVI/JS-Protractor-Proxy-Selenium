// conf.js
//var HTTPSProxyAgent = require('https-proxy-agent');
//var sauceRestAgent = new HTTPSProxyAgent("http://<proxy>:<port>")

exports.config = {
    framework: 'jasmine2',
    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    //sauceAgent: sauceRestAgent,

    //webDriverProxy: 'http://<proxy>:<port>',

    //seleniumAddress: 'https://KevinMarkVI:8a4b30c6-bedc-4fb6-821f-773a28670e4c@ondemand.saucelabs.com:443/wd/hub',
    specs: ['specs/**/*spec.js'],

    // restartBrowserBetweenTests: true,

    onPrepare: function () {
        //var caps = browser.getCapabilities()
    },

    capabilities: {
        browserName: 'firefox',
        version: '32',
        platform: 'OS X 10.10',
        name: "firefox-tests",
        shardTestFiles: true,
        maxInstances: 25
},
    // multiCapabilities: [{
    //     browserName: 'firefox',
    //     version: '32',
    //     platform: 'OS X 10.10',
    //     name: "firefox-tests",
    //     shardTestFiles: true,
    //     maxInstances: 25
    // }, {
    //     browserName: 'chrome',
    //     version: '41',
    //     platform: 'Windows 7',
    //     name: "chrome-tests",
    //     shardTestFiles: true,
    //     maxInstances: 25
    // }],

    onComplete: function () {

        var printSessionId = function (jobName) {
            browser.getSession().then(function (session) {
                console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
            });
        }
        printSessionId("Insert Job Name Here");
    }
}
