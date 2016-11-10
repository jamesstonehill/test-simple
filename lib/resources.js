function expect(test) {
  expectation = new Expectation(test);
  return expectation;
}

function Expectation(test){
    this.test = test;
    this.testResult = function() {
      return test;
    };
}

function it(description, test_code) {
  console.log("It " + description);
  test_code();
}

function context(description, test) {
  var tests = Array.from(arguments);
  tests.shift(); //gets rid of the description from the tests array

  var prom = new Promise(function(resolve) {
    console.log(description);
  });

  prom.then(function() {
    tests.forEach(function(test){
      test();
    });
  });
}
