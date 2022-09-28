// Extra 2

//
function palindromo(str) {
    const strReverso = str.split("").reverse().join("");
  
    return strReverso === str ? " si es palindromo" : "no es palindromo";
  }
  console.log(palindromo("ana")); // si es palindromo
  console.log(palindromo("hola")); // no es palindromo
  console.log(palindromo("omo")); // si es palindromo



  
  