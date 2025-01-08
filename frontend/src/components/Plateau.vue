<template>
  <aside class="sidebar">
      <div>
          <div class="logo">
              <img src="/public/icon.png" alt="Logo Maths à la maison" />
          </div>
          <nav class="menu">
              <ul>
                <li><a href="/accueil" class="menu-link">Accueil</a></li>
                <li><a href="/regle" class="menu-link">Règles</a></li>
                <li><a href="/classement" class="menu-link">Classement</a></li>
              </ul>
          </nav>
      </div>
      <div class="bottom-menu">
        <nav class="menu">
          <ul>
            <li><a href="/monCompte" class="menu-link">Mon Compte</a></li>
            <li><a href="/inscription" class="menu-link">Déconnexion</a></li>
          </ul>
        </nav>
      </div>
  </aside>
  <section class="main-contentt">
    <div class="centered-plateau">
      <div class="plateau">
        <div class="plateau-container">
          <img src="/public/plateau.png" alt="Plateau de jeu" class="plateau-image" />
          <div v-for="(caseInfo, index) in cases" 
              :key="index" 
              :style="getCaseStyle(caseInfo)"
              class="case"
              @click="handleCaseClick(index)">
          </div>
          <div :style="playerPositionStyle" class="pion"></div>
        </div>
        <div id="button1">
          <button @click="testerDeplacement">Lancer le dé</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cases: [
        //Départ
        { x: 46.5, y: 47.2, width: 5, height: 5, rotation: 0},

        //diag 1
        { x: 37, y: 41, width: 9, height: 2.8, rotation: 48},
        { x: 33.8, y: 45.3, width: 9, height: 2.8, rotation: 18},
        { x: 33.5, y: 50.4, width: 9, height: 2.8, rotation: 349},
        { x: 36, y: 55.2, width: 9, height: 2.8, rotation: 318},
        { x: 41, y: 58, width: 9, height: 2.8, rotation: 289},
        { x: 47, y: 58.3, width: 9, height: 2.8, rotation: 259},
        { x: 52.2, y: 56, width: 9, height: 2.8, rotation: 229},
        { x: 55.7, y: 51.7, width: 9, height: 2.8, rotation: 199},
        { x: 56, y: 46.5, width: 9, height: 2.8, rotation: 169},
        { x: 53.2, y: 41.8, width: 9, height: 2.8, rotation: 139},
        { x: 48.3, y: 39, width: 9, height: 2.8, rotation: 108.5},
        { x: 42.4, y: 38.6, width: 9, height: 2.8, rotation: 79},

        //diag 2
        { x: 30, y: 34, width: 9, height: 2.8, rotation: 48},
        { x: 24, y: 42.3, width: 9, height: 2.8, rotation: 18},
        { x: 23, y: 52.3, width: 9, height: 2.8, rotation: 349},
        { x: 28.2, y: 61.2, width: 9, height: 2.8, rotation: 319},    
        { x: 37.7, y: 66.5, width: 9, height: 2.8, rotation: 289},    
        { x: 49, y: 67.3, width: 9, height: 2.8, rotation: 259},
        { x: 59, y: 62.8, width: 9, height: 2.8, rotation: 229},
        { x: 65.5, y: 54.7, width: 9, height: 2.8, rotation: 199}, 
        { x: 66.3, y: 44.7, width: 9, height: 2.8, rotation: 169},  
        { x: 61.1, y: 35.8, width: 9, height: 2.8, rotation: 139},   
        { x: 51.7, y: 30.2, width: 9, height: 2.8, rotation: 108.5},
        { x: 40.4, y: 29.6, width: 9, height: 2.8, rotation: 79},

        //diag 3
        { x: 21.3, y: 26.3, width: 11, height: 2.8, rotation: 48},
        { x: 11.8, y: 39.2, width: 11, height: 2.8, rotation: 18},
        { x: 10.8, y: 54.2, width: 11, height: 2.8, rotation: 348},
        { x: 18.3, y: 68, width: 11, height: 2.8, rotation: 318},
        { x: 32.7, y: 76.5, width: 11, height: 2.8, rotation: 289},
        { x: 50, y: 77.3, width: 11, height: 2.8, rotation: 259},
        { x: 65.5, y: 70.5, width: 11, height: 2.8, rotation: 229},
        { x: 75.2, y: 57.8, width: 11, height: 2.8, rotation: 199},
        { x: 76.5, y: 42.6, width: 11, height: 2.8, rotation: 169},
        { x: 68.8, y: 28.9, width: 11, height: 2.8, rotation: 139},
        { x: 54.1, y: 20.8, width: 11, height: 2.8, rotation: 108.5},
        { x: 36.9, y: 19.5, width: 11, height: 2.8, rotation: 79},
          

        ////////////////////// Cercle /////////////////////////

        { x: 18, y: 28, width: 11, height: 3.8, rotation: 43},
        { x: 15.5, y: 31.5, width: 11, height: 3.8, rotation: 33},
        { x: 13, y: 35, width: 11, height: 3.8, rotation: 23},

        { x: 10, y: 42, width: 11, height: 3.8, rotation: 12},
        { x: 10, y: 46.2, width: 11, height: 3.8, rotation: 5},
        { x: 10.3, y: 50.2, width: 11, height: 3.8, rotation: 354},

        { x: 11.2, y: 57.3, width: 11, height: 3.8, rotation: 342},
        { x: 13.5, y: 61, width: 11, height: 3.8, rotation: 335},
        { x: 15.8, y: 64.5, width: 11, height: 3.8, rotation: 325},

        { x: 21.3, y: 69.7, width: 11, height: 3.8, rotation: 314},
        { x: 25, y: 72.5, width: 11, height: 3.8, rotation: 305},
        { x: 29, y: 74.5, width: 11, height: 3.8, rotation: 293},

        { x: 36.7, y: 76.9, width: 11, height: 3.8, rotation: 284},
        { x: 41.4, y: 77.4, width: 11, height: 3.8, rotation: 274},
        { x: 46, y: 77.4, width: 11, height: 3.8, rotation: 263},
        
        { x: 54, y: 76, width: 11, height: 3.8, rotation: 254},
        { x: 58.5, y: 74.5, width: 11, height: 3.8, rotation: 245},
        { x: 62.5, y: 72.5, width: 11, height: 3.8, rotation: 233},

        { x: 68.5, y: 67.5, width: 11, height: 3.8, rotation: 224},
        { x: 71.3, y: 64.2, width: 11, height: 3.8, rotation: 215},
        { x: 74, y: 60.8, width: 11, height: 3.8, rotation: 203},
        
        { x: 76.5, y: 54, width: 11, height: 3.8, rotation: 192},
        { x: 77, y: 49.8, width: 11, height: 3.8, rotation: 184},
        { x: 77, y: 45.5, width: 11, height: 3.8, rotation: 175},
        
        { x: 75.3, y: 38.7, width: 11, height: 3.8, rotation: 164},
        { x: 73.5, y: 34.8, width: 11, height: 3.8, rotation: 154},
        { x: 71, y: 31.5, width: 11, height: 3.8, rotation: 143},
        
        { x: 65.8, y: 26, width: 11, height: 3.8, rotation: 134},
        { x: 62, y: 23.5, width: 11, height: 3.8, rotation: 124},
        { x: 58, y: 21.2, width: 11, height: 3.8, rotation: 114},

        { x: 50.3, y: 19, width: 11, height: 3.8, rotation: 104},
        { x: 45.6, y: 18.5, width: 11, height: 3.8, rotation: 93},
        { x: 40.8, y: 18.5, width: 11, height: 3.8, rotation: 84},
        
        { x: 33, y: 20 , width: 11, height: 3.8, rotation: 73},
        { x: 28.5, y: 21.5 , width: 11, height: 3.8, rotation: 63},
        { x: 24.5, y: 23.8 , width: 11, height: 3.8, rotation: 55},       
      ],
      chemins: {
        0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

        //diag1
        1: [0, 13],
        2: [0, 14],
        3: [0, 15],
        4: [0, 16],
        5: [0, 17],
        6: [0, 18],
        7: [0, 19],
        8: [0, 20],
        9: [0, 21],
        10: [0, 22],
        11: [0, 23],
        12: [0, 24],
        
        //diag2
        13: [1, 25],
        14: [2, 26],
        15: [3, 27],
        16: [4, 28],
        17: [5, 29],
        18: [6, 30],
        19: [7, 31],
        20: [8, 32],
        21: [9, 33],
        22: [10, 34],
        23: [11, 35],
        24: [12, 36],

        //diag3
        25: [13, 37, 72],
        26: [14, 39, 40],
        27: [15, 42, 43],
        28: [16, 45, 46],
        29: [17, 48, 49],
        30: [18, 51, 52],
        31: [19, 54, 55],
        32: [20, 57, 58],
        33: [21, 60, 61],
        34: [22, 63, 64],
        35: [23, 66, 67],
        36: [24, 69, 70],

        37: [25, 38],
        38: [37, 39],
        39: [38, 26],

        40: [26, 41],
        41: [40, 42],
        42: [41, 27],

        43: [27, 44],
        44: [43, 45],
        45: [44, 28],

        46: [28, 47],
        47: [46, 48],
        48: [47, 29],

        49: [29, 50],
        50: [49, 51],
        51: [50, 30],

        52: [30, 53],
        53: [52, 54],
        54: [53, 31],

        55: [31, 56],
        56: [55, 57],
        57: [56, 32],

        58: [32, 59],
        59: [58, 60],
        60: [59, 33],

        61: [33, 62],
        62: [61, 63],
        63: [62, 34],

        64: [34, 65],
        65: [64, 66],
        66: [65, 35],

        67: [35, 68],
        68: [67, 69],
        69: [68, 36],

        70: [36, 71],
        71: [70, 72],
        72: [71, 25],
      },
      playerPosition: 0 // Position initiale du pion
    };
  },
  computed: {
    playerPositionStyle() {
      const caseInfo = this.cases[this.playerPosition];
      return {
        top: `${caseInfo.y}%`,
        left: `${caseInfo.x}%`,
        position: "absolute",
        zIndex: 10,
        backgroundImage: 'url("/public/pion.png")', // Assurez-vous que l'image est bien transparente
        backgroundSize: 'cover',
        width: '50px',
        height: '50px'
      };
    }
  },
  methods: {
    getCaseStyle(caseInfo) {
      return {
        position: 'absolute',
        left: `${caseInfo.x}%`,
        top: `${caseInfo.y}%`,
        width: `${caseInfo.width}%`,
        height: `${caseInfo.height}%`,
        transform: `rotate(${caseInfo.rotation}deg)`,
      };
    },
    lancerDe() {
        const de1 = Math.floor(Math.random() * 6) + 1;
        const de2 = Math.floor(Math.random() * 6) + 1;
        let somme = de1 + de2;
        console.log("Somme des dés :", somme);
        return somme;
    },

    deplacerPion(positionActuelle, nombreDe) {
      let position = positionActuelle;
      let dernierDeplacement = -1; // Une variable pour suivre la dernière position (initialisée à -1 pour éviter une erreur)

      // Affiche un message d'instruction initiale
      console.log(`Vous êtes à la position ${position}. Vous allez vous déplacer de ${nombreDe} cases.`);

      for (let i = 0; i < nombreDe; i++) {
        let voisins = this.chemins[position];

        // Filtrer les voisins pour éviter de revenir à la dernière position
        voisins = voisins.filter(voisin => voisin !== dernierDeplacement);

        if (voisins.length > 0) {
          // Afficher les voisins disponibles et demander au joueur de choisir
          console.log(`Voisins disponibles : ${voisins.join(", ")}`);
          let choix = this.demanderChoix(voisins); // Ici, on suppose que vous avez une fonction demanderChoix qui gère l'entrée du joueur

          if (choix !== null && voisins.includes(choix)) {
            dernierDeplacement = position; // Mémoriser la position actuelle avant le déplacement
            position = choix; // Le joueur choisit la direction
            console.log(`Vous avez choisi de vous déplacer vers la position ${position}.`);
          } else {
            console.log("Choix invalide, vous restez sur la même case.");
          }
        } else {
          console.log("Aucun voisin valide, vous restez sur la même case.");
          break; // Si pas de voisin valide, on arrête de déplacer
        }
      }

      // Retourne la nouvelle position après le déplacement
      return position;
    },

    // Méthode pour demander au joueur son choix (peut-être une saisie au clavier ou autre méthode selon l'interface)
    demanderChoix(voisins) {
            
      let choix = prompt(`Choisissez un voisin parmi : ${voisins.join(", ")}`);
      let choice = false;

      while(choice != true){
        if (choix != null){
          choice = true;
        }
        else{
          choix = prompt(`Vous avez entrée aucune réponse, veuillez faire un choix : ${voisins.join(", ")}`);
        }
      }
      return voisins.includes(Number(choix));
    },


    testerDeplacement() {
      let nb = this.lancerDe();
      console.log("Lancer du dé:", nb);

      let nouvellePosition = this.deplacerPion(0, nb);
      console.log("Nouvelle position du pion:", nouvellePosition);

      this.playerPosition = nouvellePosition;
    }

  }
};
</script>

<style>
.main-contentt {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.plateau {
  position: relative;
  margin-left: 15%;
}
.plateau-container {
  position: relative;
  display: flex;
  justify-content: center;
}
.plateau-image {
  width: 80%;
  height: auto;
  margin-bottom: 10px;
}
.pion {
  position: absolute;
  width: 50px;
  height: 50px;
  background-size: cover;
  border-radius: 50%;
}
.case {
  position: absolute;
  opacity: 0%;
}

/* bouton lancé de dé*/
#button1{
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  position: absolute;
  margin-top: -14%;
}
#button1 button{
  width: 10%;
  padding: 15px;
}
#button1 :hover{
  opacity: 50%;
  cursor: pointer;
}

</style>
