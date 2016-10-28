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
  console.log(description);
  tests();
}

function beforeEach(beforeFunction) {
  beforeCode = beforeFunction;
}

// function xit(description) {
//   console.log("Test skipped " + description);
// }

// ------------- MATCHERS ---------------

Expectation.prototype.toEqual = function (assertionToCheck) {
    if (assertionToCheck !== this.testResult()) {
      throw new Error("❌ " + this.test + " does not equal " + assertionToCheck);
    } else {
      console.log("✅ " + this.test + " does equal " + assertionToCheck);
    }
};

Expectation.prototype.toBeTrue = function () {
  if (this.testResult() !== true ) {
    throw new Error("❌ " + this.test + " is not true:");
  } else {
    console.log("✅ " + this.test + " is true");
  }
};

Expectation.prototype.toBeFalse = function () {
  if (this.testResult() !== false) {
    throw new Error("❌ " + this.test + " is not false:");
  } else {
    console.log("✅ " + this.test + " is false");
  }
};

Expectation.prototype.toBeGreaterThan = function (assertionToCheck) {
  if (this.testResult() <= assertionToCheck) {
    throw new Error("❌ " + this.test + " is not greater than " + assertionToCheck);
  } else {
    console.log("✅ " + this.test + " is greater than " + assertionToCheck);
  }
};

Expectation.prototype.toBeGreaterThanOrEqualTo = function (assertionToCheck) {
  if (this.testResult() <= assertionToCheck) {
    throw new Error("❌ " + this.test + " is not greater than " + assertionToCheck);
  } else {
    console.log("✅ " + this.test + " is greater than " + assertionToCheck);
  }
};

Expectation.prototype.toBeLessThan = function (assertionToCheck) {
  if (this.testResult() >= assertionToCheck) {
    throw new Error("❌ " + this.test + " is not less than " + assertionToCheck);
  } else {
    console.log("✅ " + this.test + " is greater than " + assertionToCheck);
  }
};

Expectation.prototype.toBeLessThanOrEqualTo = function (assertionToCheck) {
  if (this.testResult() >= assertionToCheck) {
    throw new Error("❌ " + this.test + " is not less than " + assertionToCheck);
  } else {
    console.log("✅ " + this.test + " is greater than " + assertionToCheck);
  }
};

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
