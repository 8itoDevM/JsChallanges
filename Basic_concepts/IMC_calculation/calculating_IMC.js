// create a programa that calculate the user IMC
// based on the data informed by the user, you can do it either by varibles either by forms
// formula: IMC = wheight / (height * height) 

//my solution

let wheight = 0;
let height = 0;
let IMC = 0;

function getInputs(){
    let instructionText = document.createElement("h5");
    instructionText.textContent = "Insert your Wheight (Ex. 65) in Kg";
    document.body.append(instructionText);

    const userInput = document.createElement("input");
    userInput.id = "user-input-field"
    userInput.setAttribute('type', 'text');

    const container = document.createElement('div');
    container.id = "container-id";
    document.body.appendChild(container);

    const inputContainer =document.getElementById("container-id");
    inputContainer.appendChild(userInput);

    userInput.addEventListener('keyup', function(event){
        if(event.key === 'Enter'){
            if(wheight === 0){
                wheight = userInput.value;
                console.log(wheight);
                userInput.value = "";
                instructionText.textContent = "Insert your Height (Ex. 1.75) in meter";
            } else if(height === 0){
                height = userInput.value;
                console.log(height);
                userInput.value = "";
                showResult();
            }
        }
    })
}

function calculateIMC(peso, altura){
    return (peso / (altura * altura)).toFixed(2);
}

function showResult(){
    IMC = calculateIMC(wheight, height);
    console.log("Your IMC is: "+IMC);
}

getInputs();