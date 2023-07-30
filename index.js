const canvas = document.querySelector('canvas');
// La méthode HTMLCanvasElement.getContext() retourne un contexte de dessin sur le canevas, ou null si l'identificateur de contexte n'est pas supporté.
const c = canvas.getContext('2d');

canvas.width = 64 * 16 // 1024;
canvas.height = 64 * 9 // 576;

// La méthode CanvasRenderingContext2D.fillRect() de l'API 2D des Canvas dessine un rectangle plein aux coordonnées (x, y), aux dimensions déterminées par largeur et hauteur et au style déterminé par l'attribut fillStyle.
c.fillRect(0, 0, canvas.width, canvas.height);
// spécifie une couleur
c.fillStyle = "black";