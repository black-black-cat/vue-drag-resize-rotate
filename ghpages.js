var ghpages = require('gh-pages');

ghpages.publish('dist/prod', function(err) {
    console.log(err)
});