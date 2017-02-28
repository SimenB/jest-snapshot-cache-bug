# Jest bug

See https://github.com/facebook/jest/issues/2843

Repro steps:

- `yarn`
- `yarn start`
- `sed s/input/output/g index.js | tee index.js`
- See test fail
- Update snapshot (using `u` in watch)
- See test pass
- `git checkout index.js`
- See jest say no changes
- Press enter in watch to trigger a test run
- See jest still say no changes
- press `a` in watch
- See the test fail
