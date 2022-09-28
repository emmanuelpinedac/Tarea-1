// Extra 1

//

const edades = [12, 23, 4, 2, 34, 56, 23];

function edadesOrdenadas() {
  edades.sort((a, b) => {
    if (a == b) {
      return 0;
    }
    if (a < b) {
      return -1;
    }
    return 1;
  });
  console.log("y acá se muestran las edades ordenadas", edades);
}

console.log("acá se muestran las edades sin ordenar", edades);

edadesOrdenadas();
