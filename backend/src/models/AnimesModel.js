const connection = require('./connection');
const document = connection.collection('animes').doc('#11384');

//const data = async () => {await document.get();}

const getAnime = async () =>{
    const data = await document.get();
    
    if (!data.exists){
        console.log('Documento não existente!');
    }else {
        return data.data();
    }
};

module.exports = {
    getAnime,
};