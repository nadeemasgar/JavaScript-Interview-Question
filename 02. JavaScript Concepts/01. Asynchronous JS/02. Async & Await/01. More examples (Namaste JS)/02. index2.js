const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise1 resolved value");
    }, 5000);
  });
  
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise2 resolved value");
    }, 15000);
  });

  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise3 resolved value");
    }, 10000);
  });
  
  async function getData1() {
    // JS engine was waiting for promise to resolved - It is assumed to be waiting here
    // but actually the getData() function is not in the call stack. It will move out of the function and continue further execution of the code
    const val1 = await p1;
    console.log("Namase Javascript 1");
    console.log(val1);
  
    const val2 = await p2;
    console.log("Namase Javascript 2");
    console.log(val2);
  }

  async function getData2() {
    // JS engine was waiting for promise to resolved - It is assumed to be waiting here
    // but actually the getData() function is not in the call stack. It will move out of the function and continue further execution of the code
    const val1 = await p3;
    console.log("Namase Javascript 3");
    console.log(val1);
  }
  
  getData1();

  getData2();
  
  /* 
  Output ->
          Namase Javascript 1 (after 10 sec printed)
          Promise1 resolved value (after 10 sec printed)
          Namase Javascript 2 (after 10 sec printed)
          Promise2 resolved value (after 10 sec printed)
  */
  