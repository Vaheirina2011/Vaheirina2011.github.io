// let left = document.querySelector(".left-shift")
let right = document.querySelector(".right-shift")
let letter = document.querySelectorAll("li").value
let click = false
let tivl = false
function upercase(){
    if(click == false){
        click = true
    }else{
        click = false
    }
    uleI.classList.toggle("uppercase");
    uleII.classList.toggle("uppercase");
    ule.classList.toggle("uppercase");
    
}
left.addEventListener("click",()=>{
    upercase()
})
right.addEventListener("click",()=>{
    upercase()
})
function ww(){
    if(click == true){
        write.value = write.value + "W";    
    }else{
        write.value = write.value + "w";
    }

}
function qq(){
    if(click == true){
        write.value = write.value + "Q";    
    }else{
        write.value = write.value + "q";
    }
}
function ee(){
    if(click == true){
        write.value = write.value + "E";    
    }else{
        write.value = write.value + "e";
    }
}
q.addEventListener("click",()=>{
    qq()
})
w.addEventListener("click",()=>{
    ww()
})
e.addEventListener("click",()=>{
    ee()
})
function rr(){
    if(click == true){
        write.value = write.value + "R";    
    }else{
        write.value = write.value + "r";
    }
}
r.addEventListener("click",()=>{
    rr()
})
function tt(){
    if(click == true){
        write.value = write.value + "T";    
    }else{
        write.value = write.value + "t";
    }
}
t.addEventListener("click",()=>{
    tt()
})
function yy(){
    if(click == true){
        write.value = write.value + "Y";    
    }else{
        write.value = write.value + "y";
    }
}
y.addEventListener("click",()=>{
    yy()
})
function uu(){
    if(click == true){
        write.value = write.value + "U";    
    }else{
        write.value = write.value + "u";
    }
}
u.addEventListener("click",()=>{
    uu()
})
function ii(){
    if(click == true){
        write.value = write.value + "I";    
    }else{
        write.value = write.value + "i";
    }
}
i.addEventListener("click",()=>{
    ii()
})
function oo(){
    if(click == true){
        write.value = write.value + "O";    
    }else{
        write.value = write.value + "o";
    }
}
o.addEventListener("click",()=>{
    oo()
})
function pp(){
    if(click == true){
        write.value = write.value + "P";    
    }else{
        write.value = write.value + "p";
    }
}
p.addEventListener("click",()=>{
    pp()
})
// let wr = document.querySelector("#write").value
back.addEventListener("click",()=>{
    var str = document.getElementById('write').value;
    document.getElementById('write').value = str.innerHTML = str.substring(0, str.length-1);

})
a.addEventListener("click",()=>{
    aa()
})
function aa(){
    if(click == true){
        write.value = write.value + "A";    
    }else{
        write.value = write.value + "a";
    }
}
s.addEventListener("click",()=>{
    ss()
})
function ss(){
    if(click == true){
        write.value = write.value + "S";    
    }else{
        write.value = write.value + "s";
    }
}
d.addEventListener("click",()=>{
    dd()
})
function dd(){
    if(click == true){
        write.value = write.value + "D";    
    }else{
        write.value = write.value + "d";
    }
}
f.addEventListener("click",()=>{
    ff()
})
function ff(){
    if(click == true){
        write.value = write.value + "F";    
    }else{
        write.value = write.value + "f";
    }
}
g.addEventListener("click",()=>{
    gg()
})
function gg(){
    if(click == true){
        write.value = write.value + "G";    
    }else{
        write.value = write.value + "g";
    }
}
h.addEventListener("click",()=>{
    hh()
})
function hh(){
    if(click == true){
        write.value = write.value + "H";    
    }else{
        write.value = write.value + "h";
    }
}
j.addEventListener("click",()=>{
    jj()
})
function jj(){
    if(click == true){
        write.value = write.value + "J";    
    }else{
        write.value = write.value + "j";
    }
}
k.addEventListener("click",()=>{
    kk()
})
function kk(){
    if(click == true){
        write.value = write.value + "K";    
    }else{
        write.value = write.value + "k";
    }
}
l.addEventListener("click",()=>{
    ll()
})
function ll(){
    if(click == true){
        write.value = write.value + "L";    
    }else{
        write.value = write.value + "l";
    }
}
ent.addEventListener("click",()=>{
    write.value = write.innerHTML = ""
})
z.addEventListener("click",()=>{
    zz()
})
function zz(){
    if(click == true){
        write.value = write.value + "Z";    
    }else{
        write.value = write.value + "z";
    }
}
x.addEventListener("click",()=>{
    xx()
})
function xx(){
    if(click == true){
        write.value = write.value + "X";    
    }else{
        write.value = write.value + "x";
    }
}
c.addEventListener("click",()=>{
    cc()
})
function cc(){
    if(click == true){
        write.value = write.value + "C";    
    }else{
        write.value = write.value + "c";
    }
}
v.addEventListener("click",()=>{
    vv()
})
function vv(){
    if(click == true){
        write.value = write.value + "V";    
    }else{
        write.value = write.value + "v";
    }
}
b.addEventListener("click",()=>{
    bb()
})
function bb(){
    if(click == true){
        write.value = write.value + "B";    
    }else{
        write.value = write.value + "b";
    }
}
n.addEventListener("click",()=>{
    nn()
})
function nn(){
    if(click == true){
        write.value = write.value + "N";    
    }else{
        write.value = write.value + "n";
    }
}
m.addEventListener("click",()=>{
    mm()
})
function mm(){
    if(click == true){
        write.value = write.value + "M";    
    }else{
        write.value = write.value + "m";
    }
}
arajinpaka.addEventListener("click",()=>{
    write.value = write.value + "<";
})
erkrordpaka.addEventListener("click",()=>{
    write.value = write.value + ">";
})
sp.addEventListener("click",()=>{
    write.value = write.value + " ";
})
mek.addEventListener("click",()=>{
    write.value = write.value + "1";
})
erku.addEventListener("click",()=>{
    write.value = write.value + "2";
})
ereq.addEventListener("click",()=>{
    write.value = write.value + "3";
})
chors.addEventListener("click",()=>{
    write.value = write.value + "4";
})
hing.addEventListener("click",()=>{
    write.value = write.value + "5";
})
vec.addEventListener("click",()=>{
    write.value = write.value + "6";
})
yot.addEventListener("click",()=>{
    write.value = write.value + "7";
})
ut.addEventListener("click",()=>{
    write.value = write.value + "8";
})
inn.addEventListener("click",()=>{
    write.value = write.value + "9";
})
zro.addEventListener("click",()=>{
    write.value = write.value + "0";
})
strim.addEventListener("click",()=>{
    write.value = write.value + "'";
})
stro.addEventListener("click",()=>{
    write.value = write.value + ",";
})
slesher.addEventListener("click",()=>{
    write.value = write.value + "|";
})
ket.addEventListener("click",()=>{
    write.value = write.value + ".";
})
adder.addEventListener("click",()=>{
    
})
let tvery = document.getElementsByClassName("uleI-tiv");
let tarer = document.getElementsByClassName("uleI-tar");
adder.addEventListener("click",()=>{
    for (let elem of tvery) {
        elem.classList.toggle("avelacav");
    }
    for(let index of tarer){
        index.classList.toggle("jnjvec")
    }
});
let smile = document.getElementsByClassName("uleI-smile");
emoji.addEventListener("click",()=>{
    for (let arr of smile) {
        arr.classList.toggle("smileavel");
    }
    for(let ind of tarer){
        ind.classList.toggle("smilejnjel");
    }
});
function smile1(){
    write.value = write.value + "😀"
}
function smile2(){
    write.value = write.value + "😃"
}
function smile3(){
    write.value = write.value + "😁"
}
function smile4(){
    write.value = write.value + "😆"
}
function smile5(){
    write.value = write.value + "😂"
}
function smile6(){
    write.value = write.value + "😇"
}
function smile7(){
    write.value = write.value + "😉"
}
function smile8(){
    write.value = write.value + "😍"
}
function smile9(){
    write.value = write.value + "😘"
}
function smile10(){
    write.value = write.value + "😎"
}
// let kak = document.getElementById("key")
function keybcolor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    key.style.background = `rgb(${r},${g},${b})`;
}