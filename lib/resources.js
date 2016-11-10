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

function context(description, tests) {
  var prom = new Promise(function(resolve, reject) {
    console.log(description);
    resolve();
  });

  prom.then( function() {
    tests();
  });
}

function beforeEach(beforeFunction) {
  beforeCode = beforeFunction;
}

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
