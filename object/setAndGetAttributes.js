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
