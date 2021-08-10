var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter

module.exports = {
    before: function (done) {
        chromedriver.start();
        done();
    },

    after: function (done) {
        chromedriver.stop();
        done();
    }
};

({
	openBrowser: true,
	reportsDirectory: __dirname + '/reports'
});
module.exports = {
	reporter: reporter.fn
};