function x(expression) {
  const is_null = (expression == null || typeof expression == 'undefined');
  if (is_null) {
    throw Error("Failed unwrapping");
  }
  return expression;
}
