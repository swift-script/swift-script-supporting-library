function asx(expression, type_test) {
  if type_test() {
    throw Error("Failed to cast");
  }
  return expression;
}
