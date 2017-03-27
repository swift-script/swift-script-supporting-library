function range(from, to) {
    return (function* () {
        var current = from;
        while (current < to) {
            yield current++;
        }
    })();
}
