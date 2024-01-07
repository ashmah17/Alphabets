function readOut(message){
    const speech = new SpeechSynthesisUtterance();
    // find voices
    // const allVoices = speechSynthesis.getVoices()
    // speech.voice = allVoices[];
    speech.text = message;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
    console.log("speaking out");
}

function hello(){
    readOut("welcome, to what letter's stands for")
}



document.getElementById('a').addEventListener('click', function(){
    document.getElementById('img').src = "./images/A.jpeg";
    document.getElementById('ph').innerHTML = "a is for apple";
    readOut("a, is for apple");
})

document.getElementById('b').addEventListener('click', function(){
    document.getElementById('img').src = "./images/B.jpeg";
    document.getElementById('ph').innerHTML = "b is for ball";
    readOut("b, is for ball");
})

document.getElementById('c').addEventListener('click', function(){
    document.getElementById('img').src = "./images/C.jpeg";
    document.getElementById('ph').innerHTML = "c is for cat";
    readOut("c, is for cat");
})

document.getElementById('d').addEventListener('click', function(){
    document.getElementById('img').src = "./images/D.jpeg";
    document.getElementById('ph').innerHTML = "d is for dog";
    readOut("d, is for dog");
})

document.getElementById('e').addEventListener('click', function(){
    document.getElementById('img').src = "./images/E.jpeg";
    document.getElementById('ph').innerHTML = "e is for elephant";
    readOut("e, is for elephant");
})

document.getElementById('f').addEventListener('click', function(){
    document.getElementById('img').src = "./images/F.png";
    document.getElementById('ph').innerHTML = "f is for fish";
    readOut("f, is for fish");
})

document.getElementById('g').addEventListener('click', function(){
    document.getElementById('img').src = "./images/G.png";
    document.getElementById('ph').innerHTML = "g is for guiter";
    readOut("g, is for guiter");
})

document.getElementById('h').addEventListener('click', function(){
    document.getElementById('img').src = "./images/H.png";
    document.getElementById('ph').innerHTML = "h is for horse";
    readOut("h, is for horse");
})

document.getElementById('i').addEventListener('click', function(){
    document.getElementById('img').src = "./images/I.jpeg";
    document.getElementById('ph').innerHTML = "i is for iron";
    readOut("i, is for iron");
})

document.getElementById('j').addEventListener('click', function(){
    document.getElementById('img').src = "./images/J.jpeg";
    document.getElementById('ph').innerHTML = "j is for juice";
    readOut("j, is for juice");
})

document.getElementById('k').addEventListener('click', function(){
    document.getElementById('img').src = "./images/K.png";
    document.getElementById('ph').innerHTML = "k is for key";
    readOut("k, is for key");
})

document.getElementById('l').addEventListener('click', function(){
    document.getElementById('img').src = "./images/L.jpeg";
    document.getElementById('ph').innerHTML = "l is for lion";
    readOut("l, is for lion");
})

document.getElementById('m').addEventListener('click', function(){
    document.getElementById('img').src = "./images/M.jpeg";
    document.getElementById('ph').innerHTML = "m is for moon";
    readOut("m, is for moon");
})

document.getElementById('n').addEventListener('click', function(){
    document.getElementById('img').src = "./images/N.png";
    document.getElementById('ph').innerHTML = "n is for nurse";
    readOut("n, is for nurse");
})

document.getElementById('o').addEventListener('click', function(){
    document.getElementById('img').src = "./images/O.jpeg";
    document.getElementById('ph').innerHTML = "o is for orange";
    readOut("o, is for orange");
})

document.getElementById('p').addEventListener('click', function(){
    document.getElementById('img').src = "./images/P.jpeg";
    document.getElementById('ph').innerHTML = "p is for pencile";
    readOut("p, is for pencile");
})

document.getElementById('q').addEventListener('click', function(){
    document.getElementById('img').src = "./images/Q.jpg";
    document.getElementById('ph').innerHTML = "q is for queen";
    readOut("q, is for queen");
})

document.getElementById('r').addEventListener('click', function(){
    document.getElementById('img').src = "./images/R.png";
    document.getElementById('ph').innerHTML = "r is for rocket";
    readOut("r, is for rocket");
})

document.getElementById('s').addEventListener('click', function(){
    document.getElementById('img').src = "./images/S.png";
    document.getElementById('ph').innerHTML = "s is for sun";
    readOut("s, is for sun");
})

document.getElementById('t').addEventListener('click', function(){
    document.getElementById('img').src = "./images/T.jpeg";
    document.getElementById('ph').innerHTML = "t is for tiger";
    readOut("t, is for tiger");
})

document.getElementById('u').addEventListener('click', function(){
    document.getElementById('img').src = "./images/U.jpeg";
    document.getElementById('ph').innerHTML = "u is for unicorn";
    readOut("u, is for unicorn");
})

document.getElementById('v').addEventListener('click', function(){
    document.getElementById('img').src = "./images/V.jpeg";
    document.getElementById('ph').innerHTML = "v is for van";
    readOut("v, is for van");
})

document.getElementById('w').addEventListener('click', function(){
    document.getElementById('img').src = "./images/W.jpeg";
    document.getElementById('ph').innerHTML = "w is for watch";
    readOut("w, is for watch");
})

document.getElementById('x').addEventListener('click', function(){
    document.getElementById('img').src = "./images/X.jpeg";
    document.getElementById('ph').innerHTML = "a is for x-ray";
    readOut("x, is for x-ray");
})

document.getElementById('y').addEventListener('click', function(){
    document.getElementById('img').src = "./images/Y.jpeg";
    document.getElementById('ph').innerHTML = "a is for yo-yo";
    readOut("y, is for yo-yo");
})

document.getElementById('z').addEventListener('click', function(){
    document.getElementById('img').src = "./images/Z.png";
    document.getElementById('ph').innerHTML = "z is for zoo";
    readOut("z, is for zoo");
})
