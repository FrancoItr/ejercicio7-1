//- Un nuevo Set con los nombres de tu familia
const array = ["Homero", "Marge", "Bart", "Lisa", "Maggie"];
const miSet = new Set(array);

console.log(miSet);

//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
miSet.add("Bart");
console.log(miSet);

//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
miSet.add("Javascript");
console.log(miSet);