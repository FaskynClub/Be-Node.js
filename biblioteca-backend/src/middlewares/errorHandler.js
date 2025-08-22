const errorHandler = (err, req, res, next) => {
    console.error(`❌ Error: ${err.message}`);
    res.status(500).json({
        message: "Ha ocurrido un error en el servidor",
        error: err.message
    });
};

module.exports = errorHandler;
