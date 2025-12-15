const grade = +process.argv[2]
const point = Number(grade)
if(Number.isNaN(point)){
    console.log("Invalid Input");
}else if (point < 0 || point > 100){
    console.log("Invalid Input");
}else{
  if(grade >= 80){
    console.log("Grade is A");
  } else if(grade >= 70){
    console.log("Grade is B");
  } else if(grade >= 60){
    console.log("Grade is C");
  } else if(grade >= 50){
    console.log("Grade is D");
  } else{
    console.log("Grade is F");
}
}