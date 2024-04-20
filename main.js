function Pet(especie, raca, porte, origem) {
    this.especie = especie;
    this.raca = raca;
    this.porte = porte;
    this.origem = origem;
}

function Tutor(nome, idade, ehDeMaior){
    this.nome = nome;
    this.idade = idade;
    this.ehDeMaior = ehDeMaior;    
}

function Adocao(sucesso, nome, idade, ehDeMaior, especie, raca, porte, origem) {
    Tutor.call(this, nome, idade, ehDeMaior);
    Pet.call(this, especie, raca, porte, origem);
    this.status = sucesso;
}

const adocao1 = new Adocao("sucesso", "Danilo", 28, true, "cachorro", "bulldog", "pequeno", "inglaterra");

console.log(adocao1);