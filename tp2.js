// Exercice 1 - manipulation et déclaration des objets
const etudiants = [
    {id: 1, nom: "Rakoto", filiere: "GL", moyenne: 12},
    {id: 2, nom: "Rabe", filiere: "GL", moyenne: 9},
    {id: 3, nom: "Mirana", filiere: "IA", moyenne: 8},
    {id: 4, nom: "Rojo", filiere: "GL", moyenne: 10}
]

// 1. les noms des étudiants
console.log("Liste des étudiants:");
etudiants.forEach(etudiant => console.log(etudiant.nom));

console.log("--------------------------------------------------------");

// 2. destructuration
etudiants.forEach(etudiant => {
    const { nom, moyenne } = etudiant;
    console.log(`La moyenne de ${nom} est ${moyenne}/20`)
});

console.log("--------------------------------------------------------");

// Exercice 2 - manipulation des tableaux
// 1. Les étudiants ayant une moyenne ≥ 10
const resultat = etudiants.filter(etudiant => etudiant.moyenne >= 10);
console.log("Les étudiants ayant une moyenne ≥ 10: ", resultat);

console.log("--------------------------------------------------------");

// 2. créer un nouveau tableau contenant uniquement les noms des étudiants
const nouveau = etudiants.map(etudiant => etudiant.nom);
console.log(nouveau);

console.log("--------------------------------------------------------");

// 3. Ajouter 1 point à toutes les moyennes (sans modifier le tableau original)
const nouveau1 = etudiants.map(etudiant => {
    return {
        ...etudiant,
        moyenne: etudiant.moyenne + 1
    };
});
console.log(nouveau1);

console.log("--------------------------------------------------------");

// Exercice 3 - Fonctions fléchées et template litérals
const afficherEtudiant = (etudiant) => {
    console.log(`L'étudiant ${etudiant.nom} de la filière ${etudiant.filiere} a une moyenne de ${etudiant.moyenne}`);
}
afficherEtudiant(etudiants[0]);

// Exercice 4 - Programmation asynchrone (async / await)
function chargerEtudiants() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(etudiants);
        }, 2000);
    });
}

async function recupererEtAfficherEtudiants() {
    try {
        console.log("Chargement des données...");
        
        // On attend que la promesse soit résolue
        const listeEtudiants = await chargerEtudiants();
        
        console.log("Chargement terminé !");
        
        // On utilise notre logique précédente pour afficher
        listeEtudiants.forEach(({ nom, filiere, moyenne }) => {
            console.log(`L’étudiant ${nom} de la filière ${filiere} a une moyenne de ${moyenne}`);
        });

    } catch (erreur) {
        // Si quelque chose se passe mal dans la Promise
        console.error("Erreur lors du chargement :", erreur);
    }
}

// Appels de la fonction
recupererEtAfficherEtudiants();

// Exercice 5
const sommeMoyennes = etudiants.reduce((total, etudiant) => {
    return total + etudiant.moyenne;
}, 0); // 0 est la valeur de départ (le total initial)

const moyenneGenerale = sommeMoyennes / etudiants.length;

console.log(`La moyenne générale de la classe est de ${moyenneGenerale}/20`);