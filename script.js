let slideIndex = 0;

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2500); // Altere para ajustar a velocidade da transição
}

// Funções para avançar e retroceder slides manualmente
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Inicia a passagem de slides automaticamente
showSlides();

function clickHome(){
    if(menu.style.display == 'flex') {
        menu.style.display = 'none'
    }else {
        menu.style.display = 'flex'
    }
}
//  GALERIA
function clickFoto() {
    if(foto1.style.display == 'flex') {
        foto1.style.display = 'none'
        album2.style.display = 'inline-block'
        album3.style.display = 'inline-block'
    }else {
        foto1.style.display = 'flex'
        album2.style.display = 'none'
        album3.style.display = 'none'
    }
}
function clickFotob() {
    if(foto2.style.display == 'flex') {
        foto2.style.display = 'none'
        album1.style.display = 'inline-block'
        album3.style.display = 'inline-block'
    }else {
        foto2.style.display = 'flex'
        album1.style.display = 'none'
        album3.style.display = 'none'
    }
}
function clickFotoc() {
    if(foto3.style.display == 'flex') {
        foto3.style.display = 'none'
        album2.style.display = 'inline-block'
        album1.style.display = 'inline-block'
    }else {
        foto3.style.display = 'flex'
        album2.style.display = 'none'
        album1.style.display = 'none'
    }
}
// QUIZ
  let currentQuestion = 0;
  let score = 0;

  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";
 questions[currentQuestion].options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsElement.appendChild(button);
    });
  }

  function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("score").textContent = `Você acertou ${score} de ${questions.length} perguntas. Sua pontuação é ${(score / questions.length) * 100}%.`;
   
      const pontuacao = (score / questions.length) * 100;

      // Adicione a verificação da pontuação aqui
      if (pontuacao <= 80) {
        document.getElementById("trofel3").style.display = "block";    
      }
      if(pontuacao <= 60) {
          document.getElementById("trofel5").style.display = "block";    
      }
      if(pontuacao <= 50) {
          document.getElementById("trofel2").style.display = "block";    
      }
      if(pontuacao <= 40) {
          document.getElementById("trofel1").style.display = "block";    
      }
      if(pontuacao <= 90) {
          document.getElementById("trofel4").style.display = "block";    
      }
      if(pontuacao == 100) {
          document.getElementById("trofel").style.display = "block";    
      }
    }
  function nextQuestion() {
    loadQuestion();
  }
