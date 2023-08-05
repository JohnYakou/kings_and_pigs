const canvas = document.querySelector('canvas');
// La méthode HTMLCanvasElement.getContext() retourne un contexte de dessin sur le canevas, ou null si l'identificateur de contexte n'est pas supporté.
const c = canvas.getContext('2d');

canvas.width = 64 * 16 // 1024;
canvas.height = 64 * 9 // 576;

const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: "./img/backgroundLevel1.png",
})

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
    // c.fillStyle = "black";
    // La méthode CanvasRenderingContext2D.fillRect() de l'API 2D des Canvas dessine un rectangle plein aux coordonnées (x, y), aux dimensions déterminées par largeur et hauteur et au style déterminé par l'attribut fillStyle.
    // c.fillRect(0, 0, canvas.width, canvas.height);

    // pour afficher l'image
    backgroundLevel1.draw();

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