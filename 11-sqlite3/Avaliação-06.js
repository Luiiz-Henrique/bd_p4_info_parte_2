//  Implementar um codigo Javascript que execute as seguintes features:
//      1) Criar um Banco de Dados com o nome BD_SCA.db;
//      2) Criar as tabelas TB_ALUNO,  TB_DISCIPLINA, TB_PROFESSOR, TB_MATRICULA;
//      3) Criar comandos SQL para inserir dados nessas tabelas.

var sqlite3 = required('sqlite3');
var db = new sqlite3.Database('BD_SCA.db');

db.serialize(function() {
    db.run('CREATE TABLE IF NOT EXISTS TB_ALUNO')



    db.run('CREATE TABLE IF NOT EXISTS TB_PROFESSOR')



    db.run('CREATE TABLE IF NOT EXISTS TB_MATRICULA')



    db.run('CREATE TABLE IF NOT EXISTS TB_DISCIPLINA')



})
