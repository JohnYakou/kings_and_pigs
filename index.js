const canvas = document.querySelector('canvas');
// La méthode HTMLCanvasElement.getContext() retourne un contexte de dessin sur le canevas, ou null si l'identificateur de contexte n'est pas supporté.
const c = canvas.getContext('2d');

canvas.width = 64 * 16 // 1024;
canvas.height = 64 * 9 // 576;

const player = new Player();

// let bottom = y + 100;

const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
}

function animate(){
    // La méthode window.requestAnimationFrame() indique au navigateur qu'on souhaite exécuter une animation et demande que celui-ci exécute une fonction spécifique de mise à jour de l'animation, avant le prochain rafraîchissement à l'écran du navigateur. Cette méthode prend comme argument une fonction de rappel qui sera appelée avant le rafraîchissement du navigateur.
    window.requestAnimationFrame(animate);
    // spécifie une couleur
    c.fillStyle = "black";
    // La méthode CanvasRenderingContext2D.fillRect() de l'API 2D des Canvas dessine un rectangle plein aux coordonnées (x, y), aux dimensions déterminées par largeur et hauteur et au style déterminé par l'attribut fillStyle.
    c.fillRect(0, 0, canvas.width, canvas.height);

    // sans cela, le perso ne s'arrete pas lorsqu'il marche
    player.velocity.x = 0;

    if(keys.d.pressed){
        player.velocity.x = 5;
    }else if (keys.a.pressed){
        player.velocity.x = -5;
    }

    player.draw();
    player.update();
    
    // pour empécher le carré de traverser l'écran
    // if(bottom < canvas.height){
    //     y++;
    //     bottom = y + 100;
    // }
}

// pour activer la function
animate();

// PLAYER MOVEMENT
window.addEventListener("keydown", (event) => {
    switch (event.key){
        // Je saute lorsque j'appui sur W
        case "w":
            // console.log("J'ai appuyer sur W");
            // condition me permettant de sauter qu'une seule fois
            if(player.velocity.y === 0){
                player.velocity.y = -20;
            }
            break

        // je vais à gauche lorsque je clic sur A
        case "a":
            keys.a.pressed = true;
            break
        
        // je vais à droite lorsque je clic sur D
        case "d":
            keys.d.pressed = true;
            break
    }
})

// sans cela, le bonhomme ne s'arrete pas dans sa marche. Après chaque pas, le bonhomme repasse à 0, c'est-à-dire à l'arret.
window.addEventListener("keyup", (event) => {
    switch (event.key){
        case "a":
            keys.a.pressed = false;
            break
        
        case "d":
            keys.d.pressed = false;
            break
    }
})