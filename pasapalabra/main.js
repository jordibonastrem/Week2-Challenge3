const questionsN1 = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"} ];

const questionsN2 = [
    { letter: "a", answer: "ala", status: 0, question: "CON LA A. Parte del cuerpo de algunos animales que les permite volar"},
    { letter: "b", answer: "botella", status: 0, question: "CON LA B. Recipiente de cuello estrecho que contiene líquidos"},
    { letter: "c", answer: "camisa", status: 0, question: "CON LA C. Prenda de vestis con botones"},
    { letter: "d", answer: "decena", status: 0, question: "CON LA D. Conjunto de diez unidades"},
    { letter: "e", answer: "electricista", status: 0, question: "CON LA E. Persona que arregla o pone la electricidad"},
    { letter: "f", answer: "favorito", status: 0, question: "CON LA F. Sinonimo de preferido"},
    { letter: "g", answer: "canguro", status: 0, question: "CONTIENE LA G. Mamífero que se desplaza saltando, típico en Australia"},
    { letter: "h", answer: "helicoptero", status: 0, question: "CON LA H. Vehículo que vuela movido por hélices grandes que tiene arriba"},
    { letter: "i", answer: "imposible", status: 0, question: "CON LA I. Antonimo de posible"},
    { letter: "j", answer: "jarabe", status: 0, question: "CON LA J. Medicina que tomamos cuándo estamos enfermos"},
    { letter: "k", answer: "ketchup", status: 0, question: "CON LA K. Salsa de color rojo que echamos al frankfurt"},
    { letter: "l", answer: "lenteja", status: 0, question: "CON LA L. Legumbre pequeñita y de color marrón"},
    { letter: "m", answer: "cama", status: 0, question: "CONTIENE LA M. Mueble para descansar y dormir"},
    { letter: "n", answer: "moneda", status: 0, question: "CONTIENE LA N. Con lo que pagamos"},
    { letter: "ñ", answer: "leña", status: 0, question: "CONTIENE LA Ñ. Troncos y ramas secas que sirven para hacer fuego"},
    { letter: "o", answer: "olfato", status: 0, question: "CON LA O. Sentido por el que se perciben los olores"},
    { letter: "p", answer: "pizza", status: 0, question: "CON LA P. La respuesta es pizza :) "},
    { letter: "q", answer: "peluquero", status: 0, question: "CONTIENE LA Q. Persona que corta pelo"},
    { letter: "r", answer: "regar", status: 0, question: "CON LA R. Echar agua a una planta o terreno"},
    { letter: "s", answer: "salir", status: 0, question: "CON LA S. Antónimo de entrar"},
    { letter: "t", answer: "silbato", status: 0, question: "CONTIENE LA T. Pito con el que producimos sonido"},
    { letter: "u", answer: "urna", status: 0, question: "CON LA U. Caja o recipiente usado para votar"},
    { letter: "v", answer: "verano", status: 0, question: "CON LA V. Estación del año en la que vivimos"},
    { letter: "w", answer: "warzone", status: 0, question: "CON LA W. Juego al que he viciado mucho desde la pandémia."},
    { letter: "x", answer: "sexto", status: 0, question: "CONTIENE LA X. En una fila, el que va detrás del quinto"},
    { letter: "y", answer: "yema", status: 0, question: "CON LA Y. Parte amarilla del huevo"},
    { letter: "z", answer: "buzon", status: 0, question: "CONTIENE LA Z. Objeto dónde se echan las cartas para el correo"} ];

let questions = newQuestions(questionsN1,questionsN2);

let changePreguntaBackground = null; /* set interval del background */
let timer = null;  /* set interval del timer */ 
let timeout = null; /* timeout */ 

let end = false; 
let start = false; 
let currentQuestion = -1; 

let pregunta = document.getElementById("container1");
let answer = document.getElementById("answer");

const teclasId = ['ok','pasapa','start'];
const teclas = [];

createLetterDivs(); /* crea el "ROSCO" html */

/* Afegeix element DOM al array */
teclasId.forEach(function(tecla){
    teclas.push(document.getElementById(tecla));
  })

let assignEvents = (tecla) =>{
    tecla.onmousedown = teclaMouseDown;
    tecla.onmouseup = teclaMouseUp;
    tecla.onmouseover = teclaMouseOver;
    tecla.onmouseout = teclaMouseOut;
    tecla.onclick = teclaMouseClick;
  }

let teclaMouseDown = (e) => {
    if (e.target.id !== "start"){
        e.target.style.backgroundColor = "brown";
    }
}
  
let teclaMouseUp = (e) => {
    if (e.target.id !== "start"){
        e.target.style.backgroundColor = "";
    }
}

let teclaMouseOver = (e) => {
    if (e.target.id !== "start"){
        e.target.style.backgroundColor = "rgb(240, 171, 24)";
    }
}
  
let teclaMouseOut = (e) => {
    if (e.target.id !== "start"){
        e.target.style.backgroundColor = "";
    }
}

let teclaMouseClick = (e) => {

let pressedKeyOrButton;

if (e.type === "click"){
    pressedKeyOrButton = e.target.id; 
} else{
    pressedKeyOrButton = e.keyCode;
}

switch (pressedKeyOrButton) {
    case "start":
        if (!start) { 
            resetAll();
            nextQuestion();
        } else { 
            gameFinished();
        }
    break;
    case "pasapa": case 16:
        if (start){
            pasapalabra(); 
        }
    break;    

    case "ok": case 13: 
        if (start){
            checkAnswer();
        }
    break;
    default:
    break;
}
}

/* afegeix el temporitzador amb un setTimeout que crida a acabar al passar 3 mins i un setInterval que l'actualitza cada segon */
function addTimer(){
    let time = 179;
    let minutes = Math.floor(time / 60);
    let seconds = time - (minutes*60)

    timeout = setTimeout(gameFinished, 180000);
    
    timer = setInterval(function(){ 
        let minutes = Math.floor(time / 60);
        let seconds = time - (minutes*60)
        time--;
        if (seconds < 10) {
            document.getElementById("timer").innerHTML = "0" + minutes + ":0" + seconds; 
        } else {
            document.getElementById("timer").innerHTML = "0" + minutes + ":" + seconds; 
        }
      
      },1000,"JavaScript");


}

/* Move to next question doing nothing cause it's psapalabra */
function pasapalabra() {    

    document.getElementById(questions[currentQuestion].letter).className = "noAnswer";

    nextQuestion();
}

/* Move to next question */
function nextQuestion(){
    let nextQuestion = null; 
    for(let i = currentQuestion+1; i< questions.length; i++){
        if (questions[i].status === 0) {
            nextQuestion = i; 
            break; 
        }
    }
    
    if (nextQuestion === null){
        for(let i = 0; i< questions.length; i++){
            if (questions[i].status === 0) {
                nextQuestion = i; 
                break; 
            }
        }

    }

    currentQuestion = nextQuestion; 

    if (currentQuestion === null){
        gameFinished();
    } else {
        pregunta.innerHTML = questions[currentQuestion].question; 
        document.getElementById(questions[currentQuestion].letter).className = "currentLetter";
    }

    answer.value = "";
    
}

/* Check if answer is right or wrong and move to the next */
function checkAnswer(){
    let userAnsw = answer.value;
    

    userAnsw = userAnsw.normalize("NFD")
                    .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1") /* elimina diacrítics excepte ñ */
                    .normalize().toLowerCase(); 

    if (userAnsw === questions[currentQuestion].answer){
        questions[currentQuestion].status = 1; 
        document.getElementById(questions[currentQuestion].letter).className = "rightLetter";
        document.getElementById("right").innerHTML++; 
        nextQuestion();
    } else if (userAnsw !== ""){
        questions[currentQuestion].status = 2; 
        document.getElementById(questions[currentQuestion].letter).className = "wrongLetter";
        document.getElementById("wrong").innerHTML++; 
        nextQuestion();
    }
}

/* Finish game and show stats */
function gameFinished(){
    let rightAnswer = 0; 
    let wrongAnswer = 0; 

    if (timer !== null) { 
        clearInterval(timer); 
        timer = null;  
        clearTimeout(timeout);
        timeout = null;
    };

    start = false;
    document.getElementById("start").style.backgroundColor = "rgb(15, 230, 15)";
    document.getElementById("start").innerHTML = "- - START GAME - -";

    for( let i = 0; i<questions.length; i++){
        if (questions[i].status === 1) { rightAnswer ++; };       
        if (questions[i].status === 2) { wrongAnswer ++; };           
    }

    pregunta.innerHTML = "RESULTADO FINAL <br> Correct answers: " + rightAnswer + "<br> Wrong answers: " + wrongAnswer;

    /* Funció xorra per modificar el backcolor de las estadistiques cada x temps */
    changePreguntaBackground = setInterval(function(){

        switch (Math.floor(Math.random() * 3) + 1) {
          case 1:
            pregunta.style.backgroundColor = "yellow";
            break;
          case 2:
            pregunta.style.backgroundColor = "orange";
            break;
          case 3:
            pregunta.style.backgroundColor = "pink";
            break;
          default:
            break;
        }
      
      },1300,"JavaScript");

}

/* start game from 0 */ 
function resetAll(){
    if (changePreguntaBackground !== null) { clearInterval(changePreguntaBackground) };
    pregunta.style.backgroundColor = "";
    document.getElementById("start").style.backgroundColor = "red";
    document.getElementById("start").innerHTML = "- - END GAME - -";
    document.getElementById("right").innerHTML = 0;  
    document.getElementById("wrong").innerHTML = 0; 
    start = true; 
    currentQuestion = -1; 
    questions = newQuestions(questionsN1,questionsN2);
    questions.forEach(function(q){
        q.status = 0; 
        document.getElementById(q.letter).className = "noAnswer";
      })
    addTimer();
      
}

/* For each letter, create a div under the div .container*/
function createLetterDivs(){
    questions.forEach(function(q){
        let newDiv = document.createElement('div');
        newDiv.id = q.letter; 
        newDiv.className = 'noAnswer';
        newDiv.innerHTML = q.letter.toUpperCase();
        document.getElementById('container').appendChild(newDiv);
      })

}

/* Get a new array with random questions from two different arrays */
function newQuestions(q1,q2) {
    let q3 = [];
    for(let i = 0; i < 27; i++){
        if (getRandom() > 0.5)  {
            q3.push(q1[i]);
        } else {
            q3.push(q2[i]);
        }
    }
    return q3;     
}

/* Classic get random number from 0 to 0.9999999* */ 
function getRandom() {
    return Math.random();
}

/* checking for user interaction */
teclas.forEach(assignEvents); /* mouse events on designed buttons */
document.onkeydown = teclaMouseClick; /* keydown events from the keyboard */

