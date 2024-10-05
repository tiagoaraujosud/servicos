const db = require('../../banco/dbConexao');

module.exports = class PortifolioModel{
    static getTodos(callback){
        return db.query("SELECT * FROM servicos", callback);
    };  

    static getId(id_servico, callback){
        return db.query("SELECT * FROM servicos WHERE id_servico = ?", [id_servico], callback)
    }

    static adicionar(servicos, callback){
        return db.query("INSERT INTO servicos(data_serv, cliente, segurado, num_assistencia, bairro, servico, serv_status, consistido, mao_obra, material, TERCEIROS) VALUES(?,?,?,?,?,?,?,?,?,?,?)",
           [servicos.date, servicos.cliente, servicos.segurado, servicos.num_assistencia, servicos.bairro, servicos.servico, servicos.serv_status, servicos.consistido, servicos.mao_obra, servicos.material, servicos.TERCEIROS], callback 
        );
    }
};