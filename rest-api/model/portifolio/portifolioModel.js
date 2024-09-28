const db = require('../../banco/dbConexao');

module.exports = class PortifolioModel{
    static getTodos(callback){
        return db.query("SELECT * FROM servicos", callback);
    };  

    static getId(id_servico, callback){
        return db.query("SELECT * FROM servicos WHERE id_servico = ?", [id_servico], callback)
    }
};