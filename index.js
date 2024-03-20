function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  function receivesAFunction() {}

  return receivesAFunction;
}

function returnsAnAnonymousFunction() {
  return function () {};
}
