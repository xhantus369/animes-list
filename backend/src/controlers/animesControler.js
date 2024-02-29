const models = require('../models/AnimesModel');

const getAnime = (_req, res) =>{
    const data  = models.getAnime();
    
    data.then( (data) => {
        
        return res.status(200).json(data);
    });

};

module.exports = {
    getAnime,
}