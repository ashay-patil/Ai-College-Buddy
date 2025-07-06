const GeminiError = require("../errors/gemini-error");
const askGemini = require("../services/gemini-service");
const {StatusCodes} = require('http-status-codes');


const getResponse = async (req, res)=>{
    const {userInput} = req.body;
    if(!userInput){
        return res.status(StatusCodes.BAD_REQUEST).json({success : false, msg : 'Invalid user Input'});
    }
    console.log('Reached here');
    let geminiResponse;
    try {
        geminiResponse = await askGemini(userInput);
    } catch (error) {
        if (error instanceof GeminiError) {
        return res.status(error.statusCode).json({ success: false, msg: error.message });
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, msg: 'Unexpected server error' });
    }
    res.status(StatusCodes.OK).json({success: true, geminiResponse});
};


module.exports = getResponse;