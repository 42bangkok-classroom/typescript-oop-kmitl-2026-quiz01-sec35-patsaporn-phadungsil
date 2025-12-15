const foobar = +process.argv[2]
for(let i = 1; i <= foobar; i++){
    if(i % 3 === 0 && i % 7 === 0){
            console.log("FooBar");
    }else if(i % 3 ===0){
            console.log("Foo");
    }else if (i % 7){
        console.log("Bar");
    }else{
        console.log(i);
    }
}