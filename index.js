const canvas = document.querySelector('canvas');
// La méthode HTMLCanvasElement.getContext() retourne un contexte de dessin sur le canevas, ou null si l'identificateur de contexte n'est pas supporté.
const c = canvas.getContext('2d');

canvas.width = 64 * 16 // 1024;
canvas.height = 64 * 9 // 576;

const player = new Player();

// let bottom = y + 100;

function animate(){
    // La méthode window.requestAnimationFrame() indique au navigateur qu'on souhaite exécuter une animation et demande que celui-ci exécute une fonction spécifique de mise à jour de l'animation, avant le prochain rafraîchissement à l'écran du navigateur. Cette méthode prend comme argument une fonction de rappel qui sera appelée avant le rafraîchissement du navigateur.
    window.requestAnimationFrame(animate);
    // spécifie une couleur
    c.fillStyle = "black";
    // La méthode CanvasRenderingContext2D.fillRect() de l'API 2D des Canvas dessine un rectangle plein aux coordonnées (x, y), aux dimensions déterminées par largeur et hauteur et au style déterminé par l'attribut fillStyle.
    c.fillRect(0, 0, canvas.width, canvas.height);

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