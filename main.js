const alunos = [
  { nome: "Marco", nota: 8 },
  { nome: "Rafael", nota: 4 },
  { nome: "Paula", nota: 7 },
  { nome: "Veronica", nota: 9 },
  { nome: "Theo", nota: 10 },
  { nome: "Marcio", nota: 2 },
  { nome: "Marcia", nota: 1.5 },
  { nome: "Cristian", nota: 6 },
];
const maiorMedia = alunos.filter(function (item) {
  return item.nota >= 6;
});
console.log(maiorMedia);
