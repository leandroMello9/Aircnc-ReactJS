//Metodos - Index, Show, Store, Update, Destroy
//Index - Listagem
//Show - Listagem uma unica sessão
//Store - Criando uma sessão
//Update - Alterar uma sessão
//Destroy - Exclui uma sessão
const User = require('../models/User');
module.exports = {
    async store(req, res) {
        const {email} = req.body;

        let user = await User.findOne( { email });
        
        if(!user) {
            user = await User.create({email});
        }

        // const user = await User.create({email});
        
        return res.json(user)


    }
}