// ===========================
// CARTÕES "EU TE AMO"
// ===========================

const lista = document.querySelector(".lista");

if(lista){

for(let i=1;i<=100;i++){

let item=document.createElement("div");

item.className="item";

item.innerHTML=`❤️ Eu te amo ${i}% ❤️`;

lista.appendChild(item);

}

}

// ===========================
// CORAÇÕES CAINDO
// ===========================

function criarCoracao(){

const coracao=document.createElement("div");

coracao.className="coracao";

coracao.innerHTML="❤️";

coracao.style.left=Math.random()*100+"vw";

coracao.style.animationDuration=(Math.random()*4+4)+"s";

coracao.style.fontSize=(Math.random()*25+20)+"px";

document.body.appendChild(coracao);

setTimeout(()=>{

coracao.remove();

},8000);

}

setInterval(criarCoracao,250);

// ===========================
// ESTRELAS BRILHANTES
// ===========================

function criarEstrela(){

const estrela=document.createElement("div");

estrela.innerHTML="✨";

estrela.style.position="fixed";

estrela.style.left=Math.random()*100+"vw";

estrela.style.top=Math.random()*100+"vh";

estrela.style.opacity=Math.random();

estrela.style.fontSize=(Math.random()*15+10)+"px";

estrela.style.pointerEvents="none";

estrela.style.transition="2s";

document.body.appendChild(estrela);

setTimeout(()=>{

estrela.style.opacity=0;

},100);

setTimeout(()=>{

estrela.remove();

},2500);

}

setInterval(criarEstrela,400);

// ===========================
// ANIMAÇÃO AO ROLAR
// ===========================

const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity=0;

card.style.transform="translateY(100px)";

card.style.transition="1s";

observer.observe(card);

});

// ===========================
// TEXTO DIGITANDO
// ===========================

function escrever(elemento){

const texto=elemento.innerHTML;

elemento.innerHTML="";

let i=0;

const intervalo=setInterval(()=>{

elemento.innerHTML+=texto.charAt(i);

i++;

if(i>=texto.length){

clearInterval(intervalo);

}

},40);

}

document.querySelectorAll("h2").forEach(escrever);

// ===========================
// BOTÃO VOLTAR AO TOPO
// ===========================

const botao=document.createElement("button");

botao.innerHTML="❤️";

botao.style.position="fixed";

botao.style.bottom="20px";

botao.style.right="20px";

botao.style.width="60px";

botao.style.height="60px";

botao.style.borderRadius="50%";

botao.style.border="none";

botao.style.fontSize="28px";

botao.style.cursor="pointer";

botao.style.boxShadow="0 0 20px pink";

botao.style.display="none";

document.body.appendChild(botao);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

botao.style.display="block";

}else{

botao.style.display="none";

}

});

botao.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
// ============================
// PÉTALAS
// ============================

function criarPetala(){

const p=document.createElement("div");

p.className="petala";

p.innerHTML="🌸";

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=(Math.random()*5+6)+"s";

p.style.fontSize=(Math.random()*20+18)+"px";

document.body.appendChild(p);

setTimeout(()=>{

p.remove();

},11000);

}

setInterval(criarPetala,350);

// ============================
// ESTRELAS
// ============================

for(let i=0;i<120;i++){

const estrela=document.createElement("div");

estrela.className="estrela";

estrela.style.left=Math.random()*100+"vw";

estrela.style.top=Math.random()*100+"vh";

estrela.style.animationDelay=Math.random()*2+"s";

document.body.appendChild(estrela);

}

// ============================
// BOTÃO SURPRESA
// ============================

const surpresa=document.getElementById("surpresa");

if(surpresa){

surpresa.onclick=()=>{

alert("❤️ Você é o maior presente que Deus colocou na minha vida.\n\nEu vou te amar para sempre. ♾️❤️");

};

}
