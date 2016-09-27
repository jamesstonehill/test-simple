function Expect(test){
    this.testResult = function() {
      return test;
    };
    this.toEqual = function(assertionToCheck) {
      if (assertionToCheck !== this.testResult()) {
        throw new Error(test + " does not equal " + assertionToCheck);
      } else {
        console.log(test + " does equal " + assertionToCheck);
      }
    };
    this.isTrue = function() {
      if (this.testResult() !== true ) {
        throw new Error("It is not true:");
      } else {
        console.log(test + " is true");
      }
    };
}

function expect(test) {
  expectation = new Expect(test);
  return expectation;
}
