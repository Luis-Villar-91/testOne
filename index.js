const sayHello = (times = 1, userName = 'Random') => {
  for(let i = 0; i < times; i++ ) {
    console.log(` ${times} - ${userName} `);
  }

  return 'Stop';
};

sayHello(5, 'Luis Alberto');

console.log(sayHello());