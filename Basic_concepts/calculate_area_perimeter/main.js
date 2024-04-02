// write a coda that calculates the area and perimeter of a rectangle
// area formula: lenght * width
// perimeter formula : 2 * (lenght + width)
// output results on the console or HTML

let area = 0;
let perimeter = 0;
let lenght = 12;
let width = 32;

function areaCalculation(lenght, width){
    return lenght * width;
}

function perimeterCalculaion(lenght, width){
    return 2 * (lenght + width);
}

area = areaCalculation(lenght, width);
perimeter = perimeterCalculaion(lenght, width);

function createOutput(){
    console.log(`A rectangle with ${lenght}cm of lenght and ${width}cm of width has a 
    area of ${area}cm and a perimeter of ${perimeter}cm`);
}

createOutput();