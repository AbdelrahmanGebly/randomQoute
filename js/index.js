document.title = "Qoute of the Day";
let btn = document.querySelector('#btn');
let box = document.querySelector('#qoute');
let auther = document.querySelector('#auther');

let qoutes = [
    "\"Be yourself; everyone else is already taken.\"",
    "\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\"",
    "\"So many books, so little time.\"",
    "\"A room without books is like a body without a soul.\"",
    "\"You only live once, but if you do it right, once is enough.\""
];
let authers = [
    "― Oscar Wilde",
    "― Albert Einstein",
    "― Frank Zappa",
    "― Marcus Tullius Cicero",
    "― Mae West"
];
let s = '';
let oldX;
btn.onclick = function(){
    let x = Math.floor(Math.random()*5);
    if (oldX == x){
        while(true){
            x = Math.floor(Math.random()*5);
            if(x == oldX) continue;
            else {
                oldX = x;
                break;
            }
        }
    }else oldX = x;
    box.innerHTML = qoutes[x];
    auther.innerHTML = authers[x];
}
