
require(['config'], function() {
    require([
        'require',
        'chai',
        'mocha'
    ],
        function(require, chai, mocha) {

            var tests = [
                '../../tests/unit/factory.js',
                '../../tests/unit/plugin.js'
            ];

            require(tests, function() {
                assert = chai.assert;

                if (window.mochaPhantomJS) {
                    return window.mochaPhantomJS.run();
                }
                mocha.run();
            });
        });
});
