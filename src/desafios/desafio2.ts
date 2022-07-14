// Como podemos melhorar o esse código usando TS?

/* class IIPessoa{
    nome: string;
    idade: number ;
    profissao: string ;

    constructor(nome: string, idade: number, profissao: string){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}
let pessoa1: IPessoa = new IPessoa( "maria", 29, "atriz");
let pessoa2: IPessoa = new IPessoa("Roberto", 19, "pedreiro");
let pessoa3:  IPessoa = new IPessoa("Laura", 32, "atriz"); 
let pessoa4: IPessoa = new IPessoa("Carlos", 22, "pedreiro");  */

enum Profissao {
  Atriz,
  Padeiro,
}

interface IPessoa {
  nome: string;
  idade: number;
  profissao: Profissao;
}

let pessoa1: IPessoa = {
  nome: "Maria",
  idade: 29,
  profissao: Profissao.Atriz,
};
let pessoa2: IPessoa = {
  nome: "Roberto",
  idade: 19,
  profissao: Profissao.Padeiro,
};
let pessoa3: IPessoa = {
  nome: "Laura",
  idade: 32,
  profissao: Profissao.Atriz,
};
let pessoa4: IPessoa = {
  nome: "Carlos",
  idade: 19,
  profissao: Profissao.Padeiro,
};
