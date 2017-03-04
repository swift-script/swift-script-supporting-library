function qq(expression, value) {
  const is_null = (expression == null || typeof expression == 'undefined');
  return is_null ? value : expression;
}
