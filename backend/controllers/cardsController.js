const axios = require('axios');

const CARDS_API_URL = 'http://localhost:8000/cards'

const getCardById = async (req,res,next)=>{
    const id = req.query.id;
    if (!id) {
        return res.status(400).send('Id is required');
    }
    try {
        const response = await axios.get(`${CARDS_API_URL}?id=${id}`);
        const card = response.data;
        console.log('card', card);
        if(!card.length){
            return res.status(404).json({
                msg: 'Card not found',
            });
        }
        res.status(200).json({
            msg: 'Get card succeed',
            data: card,
        });
    } catch (error) {
        next(error);
    }
};

const postCard = async (req,res, next)=>{
    const newCard = req.body;
    if(Object.keys(newCard).length === 0) {
        return res.status(400).send('Card is required');
    }
    try {
        await axios.post(CARDS_API_URL, newCard,{
            headers:{'Content-Type': 'application/json'},
        });
        res.status(200).json({
            msg: 'Card is created',
        });
    } catch (error) {
        next(error);
    }
};

const deleteCardById = async (req,res, next)=>{
    const id = req.params.card_id;
    if (!id) {
        return res.status(400).send('Id is required');
    }
    try {
        await axios.delete(`${CARDS_API_URL}/${id}`);
        res.status(200).json({
            msg: 'Card is deleted',
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { getCardById, postCard, deleteCardById };