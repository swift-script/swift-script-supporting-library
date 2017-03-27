function tryx(command) {
    try {
        return command();
    }
    catch(e) {
        // TODO: some force stopping method
        throw e;
    }
}
