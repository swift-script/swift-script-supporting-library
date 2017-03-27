function tryq(command) {
    try {
        return command();
    }
    catch(e) {
        return null;
    }
}
