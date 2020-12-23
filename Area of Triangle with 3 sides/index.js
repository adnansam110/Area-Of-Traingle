//Q2.Find the Area of Triangle 

getArea = (l,b,h) => {
    var s = ((l+b+h)/2);
    var area = Math.sqrt((s*(s-l)*(s-b)*(s-h)));
    return area;
}
var len = prompt("Enter the length");
var bre = prompt("Enter the Breath");
var hei = prompt("Enter the Height");
var PrintArea = getArea(len,bre,hei);
document.write(`The Area of the traingle is ${PrintArea}`);