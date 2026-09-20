// Liste d'exemples de contenus pour les blocs (images + texte)
const blockContents = [
    { title: "Projet Alpha", desc: "Un jeu expérimental en HTML5.", img: "https://via.placeholder.com/200x200/ff6b6b/ffffff?text=Alpha" },
    { title: "Artwork 1", desc: "Illustration digitale.", img: "https://via.placeholder.com/200x200/4ecdc4/ffffff?text=Art1" },
    { title: "Musique", desc: "Bande-son originale.", img: "https://via.placeholder.com/200x200/45b7d1/ffffff?text=Music" },
    { title: "Projet Beta", desc: "Un jeu de plateforme.", img: "https://via.placeholder.com/200x200/96ceb4/ffffff?text=Beta" },
    { title: "Artwork 2", desc: "Design de personnage.", img: "https://via.placeholder.com/200x200/ffeaa7/000000?text=Art2" },
    { title: "Tutoriel", desc: "Apprendre le JavaScript.", img: "https://via.placeholder.com/200x200/dda0dd/ffffff?text=JS" },
    { title: "Projet Gamma", desc: "Un jeu de puzzle.", img: "https://via.placeholder.com/200x200/98d8c8/ffffff?text=Gamma" },
    { title: "Logo", desc: "Design de logo.", img: "https://via.placeholder.com/200x200/f7dc6f/000000?text=Logo" }
];

// Fonction pour créer un bloc
function createBlock(content, column) {
    const block = document.createElement("div");
    block.className = "feed-block";

    // Ajouter une image si disponible
    if (content.img) {
        const img = document.createElement("img");
        img.src = content.img;
        img.alt = content.title;
        block.appendChild(img);
    }

    // Ajouter le titre
    const title = document.createElement("h3");
    title.textContent = content.title;
    block.appendChild(title);

    // Ajouter la description
    const desc = document.createElement("p");
    desc.textContent = content.desc;
    block.appendChild(desc);

    // Position initiale du bloc (en bas de la colonne)
    block.style.bottom = "-220px"; // Hauteur du bloc + margin

    // Ajouter le bloc à la colonne
    column.appendChild(block);

    // Animation de défilement
    const speed = 5 + Math.random() * 10; // Vitesse aléatoire entre 5 et 15 secondes
    block.style.animation = `scrollUp ${speed}s linear infinite`;

    // Supprimer le bloc après l'animation pour éviter la surcharge
    setTimeout(() => {
        block.remove();
    }, speed * 1000);
}

// Fonction pour générer des blocs aléatoires dans une colonne
function generateRandomBlocks(column, count = 10) {
    for (let i = 0; i < count; i++) {
        // Sélectionner un contenu aléatoire
        const randomIndex = Math.floor(Math.random() * blockContents.length);
        const content = blockContents[randomIndex];

        // Créer un bloc avec un délai aléatoire
        setTimeout(() => {
            createBlock(content, column);
        }, Math.random() * 5000); // Délai aléatoire entre 0 et 5 secondes
    }
}

// Initialiser les colonnes
document.addEventListener("DOMContentLoaded", () => {
    const columns = [
        document.getElementById("column-1"),
        document.getElementById("column-2"),
        document.getElementById("column-3"),
        document.getElementById("column-4"),
        document.getElementById("column-5"),
        document.getElementById("column-6"),
        document.getElementById("column-7")
    ];

    // Générer des blocs pour chaque colonne
    columns.forEach(column => {
        generateRandomBlocks(column, 15); // 15 blocs par colonne
    });

    // Générer de nouveaux blocs toutes les 2 secondes (pour un effet infini)
    setInterval(() => {
        columns.forEach(column => {
            const randomIndex = Math.floor(Math.random() * blockContents.length);
            createBlock(blockContents[randomIndex], column);
        });
    }, 2000);
});