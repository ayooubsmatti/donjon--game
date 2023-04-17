// Définition de la taille de la carte
var mapWidth = 5;
var mapHeight = 5;
var monsterCount = 0; 

// Création de la carte
var map = [];
for (var y = 0; y < mapHeight; y++) {
map[y] = [];
for (var x = 0; x < mapWidth; x++) {
map[y][x] = {
// Chaque tuile est initialisée comme non explorée
explored: false
};
}
}

// Variable pour stocker le nombre total de monstres
var totalMonsters = 0;

// Fonction pour mettre à jour le style d'une tuile
function updateTile(x, y) {
var tile = document.getElementById('tile-' + x + '-' + y);
if (map[y][x].explored) {
tile.className = 'tile explored';
} else {
tile.className = 'tile unexplored';
}
}


show

// Fonction pour explorer une salle
function explore(x, y) {
  if (!map[y][x].explored) {
    map[y][x].explored = true;
    updateTile(x, y);
    // Génération aléatoire de monstres
    if (Math.random() > 0.8) {
      var monster = document.createElement('span');
      monster.innerHTML = '👹';
      var tile = document.getElementById('tile-' + x + '-' + y);
      tile.appendChild(monster);
      monsterCount ++;

    }

    showTotalMonsters();
  }
}

// Fonction pour afficher le nombre total de monstres
function showTotalMonsters() {
alert('Le nombre total de monstres est : ' + monsterCount);
}

// Création des tuiles de la carte
var mapElement = document.getElementById('map');
for (var y = 0; y < mapHeight; y++) {
for (var x = 0; x < mapWidth; x++) {
var tile = document.createElement('div');
tile.id = 'tile-' + x + '-' + y;
tile.className = 'tile unexplored';
tile.innerHTML = ' ';
tile.onclick = (function(x, y) {
return function() {
explore(x, y);
};
})(x, y);
mapElement.appendChild(tile);
}
mapElement.appendChild(document.createElement('br'));
}