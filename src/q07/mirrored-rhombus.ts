const mirror = +process.argv[2];

if(Number.isNaN(mirror) || mirror <= 0 || mirror != Math.floor(mirror)){
  console.log("Invalid Input");
  process.exit()
}
for(let i = 0 ; i < mirror; i++){
    let result = "";
    for(let k = 0; k < i; k++){
      result += " "
    }
    for(let j = 0;j < mirror;j++){
      result += "*"
    }
    process.stdout.write(result)
    process.stdout.write("\n");
  }