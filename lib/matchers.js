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
