const axios = require('axios');

const getHighline = async (req,res)=>{
    try {
        const url = 'http://localhost:8000/highline';
        const profile = await axios.get(url);
        res.status(200).json({
            msg:'Get highline succeed',
            data: {
                highline: response.data,
            },
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {getHighline}
