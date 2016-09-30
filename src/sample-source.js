
var num = 111;

beforeEach( function () {
  num = 1;
  num += 1;
});

context( 'num', function() {
  it('checks the value of num', function() {
    expect(num).toEqual(2);
  });
});
