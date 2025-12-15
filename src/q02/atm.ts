const WITHDRAWAL_LIMIT = 5000;

  const balanceString = process.argv[2];
  const amountString = process.argv[3];
  let outputMessage: string = ""; 
  
  if (!balanceString || !amountString) {
    outputMessage = "Invalid Input";
  }
  
  const balance = parseFloat(balanceString);
  const amount = parseFloat(amountString);

  if (outputMessage === "" && (isNaN(balance) || isNaN(amount))) {
    outputMessage = "Invalid Input";
  }
  
  if (outputMessage === "" && (balance < 0 || amount <= 0)) {
      outputMessage = "Invalid Input";
  }
  
  if (outputMessage === "") {
    
    if (amount > balance) {
      outputMessage = "Insufficient balance";
    } 
    else if (amount > WITHDRAWAL_LIMIT) {
      outputMessage = "Exceeds per-withdrawal limit";
    } 
    else {
      outputMessage = "Withdrawal approved";
    }
  }


  console.log(outputMessage);