var express = require('express');
var router = express.Router();
var PortifolioModel = require('../model/portifolio/portifolioModel');
var RespostaClass = require('../model/RespostaClass');

router.get("/", function(req, res, next){

    PortifolioModel.getTodos(function(erro, retorno){
        let resposta = new RespostaClass();
        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro', erro)
        }else{
            resposta.dados = retorno;
        }
        res.json(resposta);
    })
})

router.get("/:id_servico?", function(req, res, next){

    PortifolioModel.getId(req.params.id_servico, function(erro, retorno){
        let resposta = new RespostaClass();
        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro', erro)
        }else{
            resposta.dados = retorno;
        }
        res.json(resposta);
    })
})

module.exports = router;