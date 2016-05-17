/**
 * Created by Wahid on 5/17/2016.
 */
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['e2e/**/*.js'],
    capabilities: {
        browserName: 'chrome'
    }
}