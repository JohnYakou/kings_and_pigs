// les class ont toujours une maj
class Player{
    constructor(){
        this.position = {
            x: 100,
            y: 100,
        }

        // gravity
        this.velocity = {
            x: 0,
            y: 0,
        }

        this.width = 100;
        this.height = 100;
        // en rapport avec update()
        this.sides = {
            bottom: this.position.y + this.height
        }
    }

    draw() {
        c.fillStyle = "red";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(){
        // pour que le "bonhomme" aille à gauche et à droite
        this.position.x += this.velocity.x;
        // gravity
        this.position.y += this.velocity.y;
        // pour empecher au "bonhomme" d'être bloqué lorsqu'il saute
        this.sides.bottom = this.position.y + this.height;

        // pour empécher le carré de traverser l'écran
        if(this.sides.bottom + this.velocity.y < canvas.height){
            this.velocity.y += 1;
        }else this.velocity.y = 0;
    }
}