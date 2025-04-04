window.onload = function(){
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = ["before the class", "when I was sleeping", "while I was exercising", "during my lunch", "while I was praying"];

    var quien = Math.floor(Math.random() * who.length);
    var accion = Math.floor(Math.random() * action.length);
    var que = Math.floor(Math.random() * what.length);
    var cuando = Math.floor(Math.random() * when.length);

    document.querySelector("#frase").innerHTML = who[quien] + action[accion] + what[que] + when[cuando]
   
}
