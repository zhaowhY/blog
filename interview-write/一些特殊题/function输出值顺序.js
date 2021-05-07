// 1.A()输出结果  2. 在// 后标注执行顺序, 未执行写null
var a = 1; // 
function A() {
  function a() { // 
    console.log(3) // 
  }
  function B() { //
    console.log(a); //
  }
  a = 2 //
  B(); //
}

A() //  


// 1,2,3,4,5为执行顺序，主要考察function a()声明会被提升到函数顶部, a=2 在function a()之后运行
var a = 1; // 0
function A() {
  function a() { // 1
    console.log(3)
  }
  function B() { // 2
    console.log(a); // 5
  }
  a = 2 // 3
  B(); // 4
}

A() // 输出2。 