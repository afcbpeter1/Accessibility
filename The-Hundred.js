/*
Rule Explanations
https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
*/



module.exports = {
    '@tags': ['accessible'],
    'The Hundred Accesibility': function (browser) {

        var urls = [
            'https:www.skysports.com/the-hundred/'
            // 'https://www.skysports.com/the-hundred/news',
            // 'https://www.skysports.com/the-hundred/video',
            // 'https://www.skysports.com/the-hundred/live',
            // 'https://www.skysports.com/the-hundred/fixtures',
            // 'https://www.skysports.com/the-hundred/results',
            // 'https://www.skysports.com/the-hundred/standings',
            // 'https://www.skysports.com/matchhero',
            // 'https://www.skysports.com/fanfare',
            // 'https://www.skysports.com/the-hundred/teams'
        ];
        urls.forEach(function(url){
        browser
            .url(url)
            .assert.title('The Hundred | Sky Sports Cricket')
            .axeInject()
            .axeRun('body', {
                tags: {'wcag21a':{enabled:true},'wcag21aa':{enabled:true}}
            })
            browser.end();

            })
           
    }
}
