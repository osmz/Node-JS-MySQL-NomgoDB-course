const loggerStream = {
    write: message => {
        console.log('Capturando el LOG', message)
    },
};

module.exports = loggerStream;