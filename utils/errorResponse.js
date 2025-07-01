class errorResponse extends Error {
    constructor(Message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
module.exports = errorResponse;
