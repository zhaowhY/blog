function F(name) {
  this.name = name
}

F.prototype.a = 1

const obj = new F(3)

for (var key in obj) {
  console.log(key, obj[key])
  console.log(obj.hasOwnProperty(key))
}