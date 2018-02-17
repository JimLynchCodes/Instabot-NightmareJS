var Nightmare = require('nightmare');
var expect = require('chai').expect;
var describe = require('mocha').describe;
var config = require('./config');

describe('Test Login', function() {
    it('Should be able to login successfully', function*(done) {
        this.timeout(30000);
        var nightmare = Nightmare({show: true});
        var link = yield nightmare
            .viewport(400, 600)
            .goto('https://www.instagram.com/')
            .wait(1000)
            .evaluate( () => {

                var a = document.getElementsByTagName('button');

                a[0].click();


            })
            .wait(1000)
            .type('input[placeholder="Email or Phone Number"]', config.username)
            .type('input[placeholder="Password"]', config.password)
            .wait(5000)
            .evaluate( () => {


                var a = document.getElementsByTagName('button');

                console.log('as', a.length)
                a[1].click();


            })
            .wait(30000)

            // .type('input[id="email"]', 'user@email.com')
            // .type('input[id="password"]', 'password')
            // .click('a[class="btn btn-inline btn-primary"]') // FIXME: we need an ID on the login button!
            // .wait('.page-title')
            // .evaluate(function () {
            //     return document.location.href
            // })
            .end();
        expect(link).to.equal('http://our.website.com/#/people/management/search');
        done();
    });
});