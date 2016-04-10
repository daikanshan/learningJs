var book = {
  author : 'lisiur',
  name : 'javascript',
  'main title' : 'how to learn javascript',

}
var author = book.author;
var name = book.name;
var title = book['main title'];

book.edition = 5;
book['main title'] = "ECMScript";

for(var i = 0;i<5;i++){
  book['reader'+i] = 'readerName'+i;
}
var reader = book['reader'+Math.round(Math.random()*5)];



function inherit(p){
  if(p==null) throw TypeError();
  if(Object.create) return Object.create(p);
  var t = typeof p;
  function f(){};
  f.prototype = p;
  return new f();
}
var o = {};
o.x = 1;
var p = inherit(o);
p.y = 2;
var q = inherit(p);
q.z = 3;
var s = q.toString();
q.x + q.y// => 3:x,y分别继承自o,p

var len = book && book.subtitle && book.subtitle.length;

"subtitle" in book;
book.hasOwnProperty('subtitle');
book.propertyIsEnumerable("toString");
Object.keys(book)

Object.getOwnPropertyNames(Object.prototype);

//getter && setter
var o = {
  x:1.0,
  y:1.0,
  get r(){return Math.sqrt(this.x*this.x+this.y*this.y);},
  set r(newValue){
    var oldValue = Math.sqrt(this.x*this.x+this.y*this.y);
    var ratio = newValue/oldValue;
    this.x *= ratio;
    this.y *= ratio;
  },
  get theta(){return Math.atan2(this.y,this.x);}
}

var serialnum = {
   $n : 0,
   get next(){return this.$n++;},
   set next(val){
     if(val>this.$n){
       this.$n = val;
     }else{
       throw '序列号的值不能比当前小';
     }
   },
}

function classof(o){
  if(o===null) return "Null";
  if(o===undefined) return "Undefined";
  return Object.prototype.toString.call(o).slice(8,-1);
}
