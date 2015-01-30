var forEachEl = require('../');
var fs = require('fs')
var stream = require('readable-stream').Readable;
var test = require('tape')
var concat = require('concat-stream');
var expected = fs.readFileSync(__dirname + '/expected.html', 'utf8');

test('make all h1 tags say WOW', function(t) {
    t.plan(1);

    var textChange = forEachEl('h1', function(x) {
        x.textContent = 'WOW';
    })
    
    stream(__dirname + 'index.html', 'utf8')
        .pipe(textChange)
        .pipe(concat(function (body) {
            t.equal(body.toString('utf8'), expected);
        }))
    ;
    t.end()
});
