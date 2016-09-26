var testSimple = require('lib/testingLogic.js');

function returnTen() {
  return 10;
}

console.log("---------- passing tests ---------");

test("it returns ten",
  returnTen() * 2,
  20
  );

test("it evaluates a true question",
  !5 == true,
  false
  );

test("evalutes a false question",
  1 === 99,
  false
  );

  console.log("---------- failing tests ---------");

test("it returns ten",
  returnTen() * 2,
  202
  );

test("it evaluates a true question",
  99 === 99,
  false
  );

test("evalutes a false question",
  1 === 99,
  true
  );
