#FINN webAds

This implementation uses _only_ iframes, and focuses on keeping the banner inside the iframe.
The script will inspect the iframes content after load, and poll for sizing - and resize, trac, hide etc based on configuration

* If a banner wants to use other formats, this has to be done via plugins/configuration. *

#Run app/server, then run tests
- npm install
- node run.js
- new console tab: buster server
- new console tab: buster test

## Caution: Tests will fail or be unstable if
* browser isn`t using normal zoom mode when running buster test.
* browser tab doesnt have focus

# Branching - Stable master with 'feature branches'
( https://confluence.finn.no/display/TEKK/Git )
- Major changes should occur in a branch, but bugfixing and small changes occur in master.
