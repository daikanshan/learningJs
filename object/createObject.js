//对象直接量
var object = {
  position_x : 0,
  position_y : 0,
  0 : "number as key",
  1 : 'number1 as key',
  '1' : 'string1 as key',
  1: 'number1 as another key',
 '2': 'string2 as key',
  2 : 'number2 as key',
}
console.log(object.position_x);
/**
 *只有字符串和label可以作为对象的属性的描述
 *在使用``[]``时，会对[]里的值做``.toString()``的隐性转换。
 */
//console.log(object.0); // => error
//console.log(object.1); // => error
console.log(object[1]); // => "string1 as key"
console.log(object['position_y']); // => ''
console.log(object['0']);
console.log(object['1']);
console.log(object['2']);
console.log(object[2]);
/**
 * 猜想：在给对象直接量添加属性时，会自动把`lable`和`number`转换成string。
 * 在后面声明的属性，其转换后若与之前的某个属性相，则覆盖之前的属性值。
 */

//new
console.log("--------------new--------------");
var o = new Object();
var a = new Array();
var d = new Date();
var r = new RegExp();
console.log(o);
console.log(a);
console.log(d);
console.log(r);

//prototype
console.log('-------------prototype----------');
p0 = Object.prototype;
p1 = Date.prototype;
console.log(p0);
console.log(p1);
o0 = new Object();
o1 = new Date();
console.log(o1.constructor==Date);// true
console.log(o0.constructor==Object);// true
console.log(o1.constructor.prototype==p1);// true
/**
 * 皇帝(Object.prototype)是权利中心；
 * 尚书（原型）隶属于皇帝（Object.prototype）管辖，每个尚书有自己的势力范围(构造函数)；
 * 尚书（原型）可以在自己的势力范围(构造函数)里启用自己的人员(对象);
 * 该人员(对象)隶属于其直接上司——尚书（原型）以及该尚书的上司——皇帝（Object.prototype）的管辖；
 * 以此类推。。。
 * 如果皇帝要改年号，则所有的对象都会拥有该年号。（`null`除外，``null``是虚无，不受任何人的限制，也无法影响其他人）；
 */


//Object.create()
console.log('--------------Object.create()------------');
o1 = Object.create(null);
console.log(o1);// 没有原型的对象
o2 = Object.create(Object.prototype);
console.log(o2.constructor.prototype==p0);//true

/**
 * Object.create相当于皇帝挑选钦差大臣，任何人都可以得到提拔(任意对象可继承)。
 */

function inherit(p){
  if(p==null) throw TypeError();
  if(Object.create) return Object.create(p);
  var t = typeof p;
  function f(){};
  f.prototype = p;
  return new f();
}
