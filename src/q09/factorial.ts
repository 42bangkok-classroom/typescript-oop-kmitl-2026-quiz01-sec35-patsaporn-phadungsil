
  const nString = process.argv[2]; 

  let outputMessage: string;

  if (!nString) {
    outputMessage = "Invalid Input";
  } else {
    const N = parseFloat(nString);

    if (isNaN(N) || N < 0 || N !== Math.floor(N)) {
      outputMessage = "Invalid Input";
    } else {
    
      if (N === 0) {
        outputMessage = "1";
      } else {
        let factorial = 1;
        for (let i = 1; i <= N; i++) {
          factorial *= i;
        }
        outputMessage = factorial.toString();
      }
    }
  }

 
  console.log(outputMessage);
