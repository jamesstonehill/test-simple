function test(description, evaluation, expectation) {
  function expectationExecution() {
    return expectation;
  }

  function evaluationExecution() {
    return evaluation;
  }

  if (evaluationExecution() === expectationExecution()) {
    console.log("✅ '" + description + "' PASSES.");
  } else {
    console.log("❗️ " + description + "' FAILS.");
  }
}

function greaterThanTest(description, evaluation, expectation) {
  function expectationExecution() {
    return expectation;
  }

  function evaluationExecution() {
    return evaluation;
  }

  if (evaluationExecution() > expectationExecution()) {
    console.log("✅ '" + description + "' PASSES.");
  } else {
    console.log("❗️ " + description + "' FAILS.");
  }
}
