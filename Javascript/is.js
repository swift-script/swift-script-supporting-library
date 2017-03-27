function is(expression, type) {
    if (type == String) {
        return typeof (expression) == 'string' || expression instanceof String;
    } else if (type == Number) {
        return typeof (expression) == 'number' || expression instanceof Number;
    }
    return expression instanceof type;
}
