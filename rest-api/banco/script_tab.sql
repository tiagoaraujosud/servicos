CREATE TABLE servicos (
    id_servico INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    data_serv DATE NULL,
    cliente VARCHAR(70) NULL,
    segurado VARCHAR(70) NULL,
    num_assistencia VARCHAR(30) NULL,
    bairro VARCHAR(70) NULL,
    servico TEXT NULL,
    serv_status VARCHAR(20) NULL,
    consistido BOOLEAN NULL,
    mao_obra INTEGER NULL,
    material INTEGER NULL,
    TERCEIROS VARCHAR(70) NULL,
    PRIMARY KEY(id_servico)
)