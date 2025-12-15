const grade = +process.argv[2]
const point = Number(grade)
if(Number.isNaN(point)){
    console.log("Invalid Input");
}else if (point < 0 || point > 100){
    console.log("Invalid Input");
}else{
  if(grade >= 80){
    console.log("A");
  } else if(grade >= 70){
    console.log("B");
  } else if(grade >= 60){
    console.log("C");
  } else if(grade >= 50){
    console.log("D");
  } else{
    console.log("F");
}
}