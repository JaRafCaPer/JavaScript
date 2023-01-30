function misCalculos() {
    let numGen = document.getElementById("inputGen").value;
    let numStr = document.getElementById("inputStr").value;
    let numDex = document.getElementById("inputDex").value;
    let numSta = document.getElementById("inputSta").value;
    let numCha = document.getElementById("inputCha").value;
    let numMan = document.getElementById("inputMan").value;
    let numApa = document.getElementById("inputApa").value;
    let numPer = document.getElementById("inputPer").value;
    let numInt = document.getElementById("inputInt").value;
    let numAst = document.getElementById("inputAst").value;
    let numAle = document.getElementById("inputAle").value;
    let numAtl = document.getElementById("inputAtl").value;
    let numSub = document.getElementById("inputSub").value;
    let numExp = document.getElementById("inputExp").value;
    let numInti = document.getElementById("inputInti").value;
    let numArm = document.getElementById("inputArm").value;
    let numCc = document.getElementById("inputCc").value;
    let numCondu = document.getElementById("inputCondu").value;
    let numInter = document.getElementById("inputInter").value;
    let numSig = document.getElementById("inputSig").value;
    let numAca = document.getElementById("inputAca").value;
    let numInv = document.getElementById("inputInv").value;
    let numTec = document.getElementById("inputTec").value;
    let numInf = document.getElementById("inputInf").value;
    let numMed = document.getElementById("inputMed").value;
    if(numGen === "" || numStr === "" || numDex === "" || numSta === "" || numCha === "" || numMan === "" || numApa === "" || numPer === "" || numInt === "" || numAst === "" || numAle === "" || numAtl === "" || numSub === "" || numExp === "" || numInti === "" || numArm === "" || numCc === "" || numCondu === "" || numInter === "" || numSig === "" || numAca === "" || numInv === "" || numTec === "" || numInf === "" || numMed === ""){
      alert("Debe llenar todas los campos");
    }
    if(numGen <10){
      alert("La generacion no puede ser inferior a 10")
    }
    else{
        const options = ["Investigar", "Conducir","Pelear", "Mentir","Disparar","Esquivar","Alerta al peligro", "Salir"];
        let response = "";
        let sum = 0;
        while (response !== "Salir") {
          response = prompt(`Elije una opción (${options.join(", ")}):`);
          switch (response) {
            case "Investigar":
              sum = parseInt(numPer) + parseInt(numInv);
              prompt(`Tira ${sum} Dados`);
              break;
            case "Conducir":
              sum = parseInt(numDex) + parseInt(numCondu);
              prompt(`Tira ${sum} Dados`);
              break;
            case "Pelear":
              sum = parseInt(numMan) + parseInt(numCc);
              prompt(`Tira ${sum} Dados`);
              break;
            case "Mentir":
              sum = parseInt(numMan) + parseInt(numSub);
              prompt(`Tira ${sum} Dados`);
              break;
            case "Disparar":
              sum = parseInt(numDex) + parseInt(numArm);
              prompt(`Tira ${sum} Dados`);
              break;
            case "Esquivar":
              sum = parseInt(numDex) + parseInt(numAtl);
              prompt(`Tira ${sum} Dados`);
              break;
            case "Alerta al peligro":
              sum = parseInt(numPer) + parseInt(numAle);
              prompt(`Tira ${sum} Dados`);
              break;
            case "Salir":
              prompt(`Hasta la Proxima`);
              break;
            default:
              prompt("Opción inválida");
          }
        }
    }
}
function showDisciplines(clan) {
  let disciplines = "";
  let rolls = "";
  switch (clan) {
          case "Ventrue":
            disciplines = "Presencia, Dominación, Fortaleza";
            rolls = "Mejora de la fuerza, Dominio mental";
            break;
          case "Brujah":
            disciplines = "Celeridad, Potencia, Pugna";
            rolls = "Ataque rápido, Mejora de la fuerza";
            break;
          case "Toreador":
            disciplines = "Auspicio, Euforia, Presencia";
            rolls = "Percepción extrasensorial, Ataque rápido";
            break;
          case "Tremere":
            disciplines = "Auspex, Thaumaturgia, Dominación";
            rolls = "Control de la sangre, Dominio mental";
            break;
          case "Malkavian":
            disciplines = "Dementación, Auspex, Ofuscación";
            rolls = "Locura, Visión de la verdad";
            break;
          case "Nosferatu":
            disciplines = "Ofuscación, Potencia, Sigilo";
            rolls = "Desaparición silenciosa, Movimiento veloz";
            break;
          case "Gangrel":
            disciplines = "Animalismo, Fortaleza, Protean";
            rolls = "Resistencia a la adversidad, Transformación en animales";
            break;
          case "Lasombra":
            disciplines = "Obtenebración, Potencia, Dominación";
            break;
          case "Tzimisce":
            disciplines = "Animalismo, Auspex, Vicisitud";
            break;
          case "Assamita":
            disciplines = "Celeridad, Ofuscación, Quietus";
            break;
          case "Followers of Set":
            disciplines = "Presencia, Serpents Tongue, Setite";
            break;
        }
  document.getElementById("disciplines").innerHTML = `Disciplinas: ${disciplines}<br>Tiradas comunes: ${rolls}`;
}