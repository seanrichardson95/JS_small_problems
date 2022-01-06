class One {
  constructor(two) {
    this.greeting = 'hey';
    this.two = two;
  }

  logGreeting = () => {
    // console.log('inside logGreeting');
    // console.log(this);
    console.log(this.greeting);
  }
}

class Two {
  constructor() {}

  bindLogGreeting(func) {
    // console.log('inside bindLogGreeting');
    // console.log(this);
    this.logGreeting = func;
  }
}

let two = new Two()
let one = new One(two);

one.logGreeting() // hey

one.two.bindLogGreeting(one.logGreeting);

one.two.logGreeting(); // 'hey'
two.logGreeting();
let test = one.logGreeting;
test();
