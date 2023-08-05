// création d'un sprite (c'est juste une image)
class Sprite {
    // imageSrc permet de charger d'autres images sans taper leurs chemins dans this.image.src
    constructor({position, imageSrc}){
        this.position = position;
        // pour créer l'image
        this.image = new Image();
        this.image.onload = () => {
            this.loaded = true
        }
        // pour charger l'image
        this.image.src = imageSrc;
        this.loaded = false;
    }
    draw(){
        if(!this.loaded) return
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}