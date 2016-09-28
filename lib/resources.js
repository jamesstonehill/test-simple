function Expectation(test){
    this.testResult = function() {
      return test;
    };
    this.toEqual = function(assertionToCheck) {
      if (assertionToCheck !== this.testResult()) {
        throw new Error("❌ " + test + " does not equal " + assertionToCheck);
      } else {
        console.log("✅ " + test + " does equal " + assertionToCheck);
      }
    };
    this.toBeTrue = function() {
      if (this.testResult() !== true ) {
        throw new Error("❌ " + test + " is not true:");
      } else {
        console.log("✅ " + test + " is true");
      }
    };
    this.toBeFalse = function() {
      if (this.testResult() !== false) {
        throw new Error("❌ " + test + " is not false:");
      } else {
        console.log("✅ " + test + " is false");
      }
    };
    this.toBeGreaterThan = function(assertionToCheck) {
      if (this.testResult() < assertionToCheck) {
        throw new Error("❌ " + test + " is not greater than " + assertionToCheck);
      } else {
        console.log("✅ " + test + " is greater than " + assertionToCheck);
      }
    };
    this.toBeLessThan = function(assertionToCheck) {
      if (this.testResult() > assertionToCheck) {
        throw new Error("❌ " + test + " is not less than " + assertionToCheck);
      } else {
        console.log("✅ " + test + " is greater than " + assertionToCheck);
      }
    };
}

function expect(test) {
  expectation = new Expectation(test);
  return expectation;
}

function it(description, test_code) {
  console.log(description);
  return test_code();
}

function context(description, tests) {
  console.log(description);
  return tests();
}
