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