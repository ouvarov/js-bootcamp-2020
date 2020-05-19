function finteger(chislo, chastey) {
  let kratnost = chislo / chastey;
  kratnost = Math.round(kratnost - 0.5);
  let ostatok = chislo - kratnost * chastey;
  let otvet = [];
  for (; chastey > 0; chastey--) otvet.push(kratnost);
  for (let x = otvet.length; ostatok > 0; ostatok--) {
    otvet[x - 1] = kratnost + 1;
    x--;
  }
  return otvet;
}
console.log(finteger(20, 6));
