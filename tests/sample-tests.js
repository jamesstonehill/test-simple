context('isPrime', function() {
  it('returns true when given 5', function() {
    expect(isPrime(5)).toBeTrue();
  });

  it('returns true when given 9587', function() {
    expect(isPrime(9587)).toBeTrue();
  });

  it('returns false when given 1', function() {
    expect(isPrime(1)).toBeFalse();
  });

  it('returns false when given 0', function() {
    expect(isPrime(0)).toBeFalse();
  });

  it('returns false when given -5', function() {
    expect(isPrime(-5)).toBeFalse();
  });
});

context('beforeEach examples', function() {
  var foo = 5;

  beforeEach(function() {
    foo += 1;
  });

  context('foo', function() {
    it('is 6', function() {
      expect(foo).toEqual(6);
    });

    context('nested forEach', function() {
      beforeEach(function() {
        foo += 1;
      });

      it('is 7', function() {
        expect(foo).toEqual(7);
      });
    });
  });
});
