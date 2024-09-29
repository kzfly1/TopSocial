const axios = require('axios');

const getMessage = async (req,res)=>{
    try {
        const url = 'http://localhost:8000/message';
        const message = await axios.get(url);
        res.status(200).json({
            msg: 'Get message succeed',
            data: {
                message: message.data,
            },
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {getMessage};