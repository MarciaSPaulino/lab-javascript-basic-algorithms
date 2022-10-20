// Iteration 1: Names and Input
let hacker1 = "John";
console.log("The driver's name is", hacker1);
let hacker2 = "Walter";
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals
/*deixando nome e sobrenome sem espaço:*/
let junto_d = hacker1.split(" ").join("");
let junto_n = hacker2.split(" ").join("");

/*medindo tamanho do nome e sobrenome sem espaço*/
let tamanho_d = junto_d.length;
let tamanho_n = junto_n.length;
let QtdLetras_MenorNome;

if (tamanho_d > tamanho_n) {
  QtdLetras_MenorNome = tamanho_n;
  console.log(
    "The driver has the longest name, it has",
    tamanho_d,
    "characters."
  );
} else if (tamanho_d < tamanho_n) {
  QtdLetras_MenorNome = tamanho_d;
  console.log(
    "It seems that the navigator has the longest name, it has",
    tamanho_n,
    "characters"
  );
} else {
  QtdLetras_MenorNome = tamanho_n;
  console.log(
    "Wow, you both have equally long names,",
    tamanho_n,
    "characters!"
  );
}

// Iteration 3: Loops

//3.1
let nova_string = "";
for (let n = 0; n <= tamanho_d; n++) {
  nova_string = nova_string + junto_d.toUpperCase().charAt(n) + " ";
}
console.log(nova_string);

//3.2
contrario = "";
for (
  let n = hacker2.length - 1;
  (n <= hacker2.length - 1) & (n >= 0);
  n = n - 1
) {
  contrario = contrario + hacker2.charAt(n);
}
console.log(contrario);

//3.3
//Qual nome é menor? QtdLetras_MenorNome
let i=0;

if(hacker1.charAt(i)=!hacker2.charAt(i)){
  if(hacker1.charAt(i)<hacker2.charAt(i)){
    console.log("The driver's name goes first.")
  } else{
    console.log("Yo, the navigator goes first definitely.")
  }
} else
  for(i=1; i<=QtdLetras_MenorNome-1; i++){
    if(hacker1.charAt(i)<hacker2.charAt(i)){
      console.log("The driver's name goes first.")
    } else if (hacker1.charAt(i)>hacker2.charAt(i)){
      console.log("Yo, the navigator goes first definitely.")
    }else{
    console.log("What?! You both have the same name?")
    }
  }
  
