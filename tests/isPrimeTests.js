context('prime tests',
  it('returns true when given 5', function() {
    expect(isPrime(5)).toBeTrue();
  }),

  it('returns true when given 9587', function() {
    expect(isPrime(9587)).toBeTrue();
  }),

  it('returns false when given 1', function() {
    expect(isPrime(1)).toBeFalse();
  }),

  it('returns false when given 0', function() {
    expect(isPrime(0)).toBeFalse();
  }),

  it('returns false when given -5', function() {
    expect(isPrime(-5)).toBeFalse();
  })
);

context('number 2',
  it('returns false when given -6', function() {
    expect(isPrime(-6)).toBeFalse();
  })
);
