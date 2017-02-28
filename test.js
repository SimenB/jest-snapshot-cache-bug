const m = require('./index');

test('something', () => {
    expect(m(42)).toMatchSnapshot();
});
