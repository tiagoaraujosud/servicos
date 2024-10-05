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

router.post("/?", function(req, res, next){

    PortifolioModel.adicionar(req.body, function(erro, retorno){
        let resposta = new RespostaClass();
        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro', erro)
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = 'Cadastro realizado com sucesso.';
            }else{
                resposta.erro = true;
                resposta.msg = 'Não foi possível realizar a operação'
            }
        }
        console.log('resp:', resposta);
        res.json(resposta);
    })
})

router.delete("/:id", function(req, res, next){

    PortifolioModel.deletar(req.params.id, function(erro, retorno){
        let resposta = new RespostaClass();
        if(erro){
            resposta.erro = true;
            resposta.msg = 'Ocorreu um erro';
            console.log('erro', erro)
        }else{
            if(retorno.affectedRows > 0){
                resposta.msg = 'Registro excluído com sucesso.';
            }else{
                resposta.erro = true;
                resposta.msg = 'Não foi possível excluir o registro'
            }
        }
        console.log('resp:', resposta);
        res.json(resposta);
    })
})

module.exports = router;