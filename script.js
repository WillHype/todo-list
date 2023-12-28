const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Fonction pour ajouter une tâche
function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Fonction pour gérer l'appui sur une touche
function handleKeyPress(event) {
    // Vérifier si la touche pressée est "Enter"
    if (event.key === "Enter") {
        // Appeler la fonction pour ajouter une tâche
        addTask();
    }
}

// Ajouter un écouteur d'événements "keydown" pour le champ de saisie
inputBox.addEventListener("keydown", handleKeyPress);

// Écouteur d'événements sur le conteneur de la liste
listContainer.addEventListener(
    "click",
    function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    },
    false
);

// Fonction pour sauvegarder les données dans le stockage local
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Fonction pour afficher les tâches sauvegardées
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Appeler la fonction pour afficher les tâches au chargement de la page
showTask();
