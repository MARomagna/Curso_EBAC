//definindo a  classe de um objeto

function Eletronico(nome, funcao){
    this.nome = nome;
    this.funcao = funcao;
}
// objeto dessa classe
const impressora = new Eletronico ('HpDeskjet','imprimir');
console.log(impressora)

//função que recebe herança da classe eletronico.

function Celular( nome, funcao, marca, tela){
    let _marca = marca //atributo privado

    //função para retornar o atributo privado
    this.getmarca = function(){
        return _marca
    }
    //função para atribuir valor a atributo privado
    this.setMarca =  function(valor){
        _marca = valor
    }
    this.tela = tela

    Eletronico.call(this, nome, funcao);

}

//instancia de celular =D
const celularMarco = new Celular('Iphone 12', 'ligar', 'Iphone', 7)


console.log(celularMarco)
console.log(celularMarco.getmarca());


celularMarco.setMarca('sansung') //atribui o novo valor usando o set 

console.log(celularMarco.getmarca())//retornei o novo valor usando o geg(Joao)