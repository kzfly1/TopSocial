const axios = require('axios');

const getRequest = async (req,res)=>{
    try {
        const url = 'http://localhost:8000/request';
        const request = await axios.get(url);
        res.status(200).json({
            msg:'Get request succeed.',
            data: {
                message: request.data,
            },
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {getRequest};