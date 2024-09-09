(() => {
    class SecretFile {
        secretMessage() {
            console.log("shhhh...");
        }
    }
    const secretFile = new SecretFile();
    secretFile.secretMessage();

})();