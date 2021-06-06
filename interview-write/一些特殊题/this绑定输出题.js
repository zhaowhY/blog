//  考察this绑定规则， 默认绑定 < 隐式绑定 < 显示绑定 < new绑定

var nickname = 'aa';

function Person(name) {
  // this -> Male;
  console.log(this);
  this.nickname = name;
  this.sayHi = function () {
    console.log(this.nickname);
    setTimeout(function () {
      console.log(this.nickname);
    }, 1000);
  };
}

var Male = {
  nickname: 'xiaofang',
  sayHi: () => {
    console.log(this.nickname);
  },

};

var person = new (Person.bind(Male, 'xiaohong'))();
person.sayHi(); // Person {}, xiaohong, aa

// 答案分解
(Person.bind(Male, 'xiaohong'))(); // 1. 显示绑定，this指向 { nickname: 'xiaofang', sayHi: [Function: sayHi] }
new (Person.bind(Male, 'xiaohong'))(); // 2. new绑定，= new Person()

// 3. 默认绑定，setTimeout function写法中，this指向 window
// 4. 隐式绑定， Male.sayHi() 中 this指向Male

