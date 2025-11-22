function getMessage (x : string) : Promise <string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  });
}

getMessage("test").then(result => console.log(result));