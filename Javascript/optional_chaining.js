function q(expression, command) {
    const is_null = (expression == null || typeof expression == 'undefined');
    return is_null ? null : command();
}
