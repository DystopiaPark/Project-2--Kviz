let pitanje1 = {
  tekst: "Koji filozof je bio poznat pod nadimkom 'Mračni'?",
  odgovori: ["Pitagora", "Aristotel", "Heraklit", "Platon"],
  indeksOdgovora: 2,
};
let pitanje2 = {
  tekst:
    "Na ulazu koje drevne škole je pisalo 'Neka ne ulazi onaj ko ne zna geometriju?",
  odgovori: [
    "Aristotelove Likeje",
    "Platonove Akademije",
    "Aleksandrijske Biblioteke",
    "Vavilonske Biblioteke",
  ],
  indeksOdgovora: 1,
};
let pitanje3 = {
  tekst: "Koji od ovih paradoksa je formulisan pre nove ere?",
  odgovori: [
    "Paradoks dihotomije",
    "Paradoks blizanaca",
    "Hilbertov paradoks beskrajnog hotela",
    "Banah-Tarski paradoks",
  ],
  indeksOdgovora: 0,
};
let pitanje4 = {
  tekst:
    "Koji stepen je povisen za poluton u lidijskom muzickom modusu u odnosu na jonski:",
  odgovori: ["sesti", "treci", "sedmi", "cetvrti"],
  indeksOdgovora: 3,
};
let pitanje5 = {
  tekst: "Koja je notacija disjunkcije u formalnoj logici?",
  odgovori: ["x", "i", "v", "n"],
  indeksOdgovora: 2,
};
let pitanje6 = {
  tekst: "Koji je najmanji broj nota koje mogu saciniti akord?",
  odgovori: ["5", "2", "3", "10"],
  indeksOdgovora: 2,
};
let pitanje7 = {
  tekst:
    "Koji tragicni filozof je izgovorio 'Param nebesa i ronim u beskonacnost' na samrti?",
  odgovori: ["Kant", "Dekart", "Rasel", "Bruno"],
  indeksOdgovora: 3,
};
let pitanje8 = {
  tekst: "Koja biljka sadrzi znacajnu kolicinu b12 vitamina?",
  odgovori: ["Kinoa", "Nijedna", "Tikva", "Indijski orah"],
  indeksOdgovora: 1,
};
let pitanje9 = {
  tekst: "Da li nije istina da u ovom pitanju nema dvostruke negacije?",
  odgovori: ["Istina je", "???", "Nije istina", "Mozda :/"],
  indeksOdgovora: 0,
};
let pitanje10 = {
  tekst: "Da li je skup svih skupova skup?",
  odgovori: ["Da", "Da, ali samo petkom popodne", "Ne", "Paradoks"],
  indeksOdgovora: 1,
};

let nizPitanja = [
  pitanje1,
  pitanje2,
  pitanje3,
  pitanje4,
  pitanje5,
  pitanje6,
  pitanje7,
  pitanje8,
  pitanje9,
  pitanje10,
];

var rezultatiSection = document.getElementById("rezultati-section");

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

shuffle(nizPitanja);

let quizForm = document.getElementById("quiz-form");
let n = 4;
for (let j = n; j >= 0; j--) {
  let div = document.createElement("div");
  let paragraph = document.createElement("p");
  quizForm.prepend(div);
  div.appendChild(paragraph);
  paragraph.textContent = `${j + 1}. ${nizPitanja[j].tekst}`;
  for (let i = 0; i < pitanje1.odgovori.length; i++) {
    let span = document.createElement("span");
    let inputCreation = document.createElement("input");
    let radioParagraph = document.createElement("p");
    inputCreation.name = `answers${j + 1}`;
    inputCreation.type = "radio";
    inputCreation.value = nizPitanja[j].odgovori[i];
    if (i == 0) {
      inputCreation.checked = true;
    } else {
      inputCreation.checked = false;
    }
    span.textContent = nizPitanja[j].odgovori[i];
    div.appendChild(radioParagraph);
    radioParagraph.appendChild(inputCreation);
    radioParagraph.appendChild(span);
  }
}

let posaljiBtn = document.getElementById("posalji-btn");

posaljiBtn.addEventListener("click", () => {
  for (let i = 0; i < 5; i++) {
    let inputRadios = document.getElementsByName(`answers${i + 1}`);
    for (let j = 0; j < 4; j++)
      if (inputRadios[j].checked) {
        if (j == nizPitanja[i].indeksOdgovora) {
          let tacnoParagraf = document.createElement("p");
          tacnoParagraf.style.color = `green`;

          tacnoParagraf.textContent = `Tačno ste odgovorili na ${
            i + 1
          }. pitanje`;
          rezultatiSection.appendChild(tacnoParagraf);
        } else {
          let netacnoParagraf = document.createElement("p");
          netacnoParagraf.style.color = `red`;
          netacnoParagraf.textContent = `Netačno ste odgovorili na ${
            i + 1
          }. pitanje`;
          rezultatiSection.appendChild(netacnoParagraf);
        }
      }
  }
  let allInputRadios = document.querySelectorAll("input");
  for (let z = 0; z < allInputRadios.length; z++) {
    allInputRadios[z].disabled = true;
  }
});

let resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", () => {
  location.reload();
});
