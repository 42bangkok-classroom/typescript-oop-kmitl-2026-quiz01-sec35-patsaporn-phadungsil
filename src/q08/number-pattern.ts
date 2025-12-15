const leg = +process.argv[2];
if (Number.isNaN(leg) || leg <= 0 || leg != Math.floor(leg)){
    console.log("Invalid Input");
  process.exit()
}

for(let i = 0; i < leg; i++){
   let results = '';
   for(let j = leg - i; j >= 1; j--){
      results += j.toString();
   }
   process.stdout.write(results + '\n');
}
