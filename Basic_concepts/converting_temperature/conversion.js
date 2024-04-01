// create a program that converts celsius to fahrenheit ((celsius * 9/5) + 32), or fahrenheit to celsius ((fahrenheit -32) * 5/9)


// my solution

const cel = 32;
const fahr = 73; 

function convertTemp(temp){
    if(temp == cel){
        temp = (cel * 9/5) + 32;
        return cel+" celcius is equals to "+temp.toFixed(1)+" fahr";
    } else {
        temp = (fahr - 32) * 5/9;
        return fahr+" fahr's is euquals to "+temp.toFixed(1)+" celsius";
    }
}


let text = document.createElement("h1");
text.textContent = convertTemp(cel);

document.body.append(text);