const {StatusCodes} = require('http-status-codes');
const notFound = (req, res)=>{
    return res.status(StatusCodes.NOT_FOUND).json({success: false, msg:'route Not Found'});
}

module.exports = notFound;