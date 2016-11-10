var beforeCode = function(){};

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
// executes the code in the beforeEach block before moving on to the test code
  var prom = new Promise(function(resolve) {
    beforeCode();
    resolve();
  });

  prom.then( function() {
    console.log("It " + description);
    test_code();
  });
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

// function beforeEach(beforeFunction) {
//   beforeCode = beforeFunction;
// }

// function xit(description) {
//   console.log("Test skipped " + description);
// }

// ---------------- SPIES -------------------

// var spys = [];
//
// function spyOn(object, method) {
//
//   object.prototype.method = function () {
//     return "test";
//   };
//
// }
//
// function Spy(name, method) {
//   this.calls = [];
//   this.hasBeenCalled = false;
//
// }
//
// Spy.prototype.called = function (method) {
//   this.calls.push(method);
//   this.hasBeenCalled = true;
// };
