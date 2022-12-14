export class Tomagochi {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.saturation = 100;
        this.strength = 100;
        this.happiness = 100;
        this.isDead = false;
    }

    feed() {
        this.saturation += 10;
        this.strength += 10;
    }

    play() {
        this.saturation -= 10;
        this.strength -= 10;
        this.happiness +=10;
    }

    walk() {
        this.health += 5;
        this.saturation -= 5;
        this.strength -=5;
        this.happiness += 5; 
    }

    sleep() {
        this.health += 10;
        this.saturation -= 10;
        this.strength += 10;
        this.happiness += 5;
    }

    setFeed () {
        setInterval(() => {
            if (this.saturation <= 0 ) {
              this.isDead = true;
            } else {
              this.isDead = false;
            }
            if (this.saturation >= 0) {
              this.saturation --;
              }
        }, 3000)
    }

    setPlay () {
        setInterval(() => {
            if (this.happiness >= 0) {
              this.happiness --;
              }
        }, 3000)
    }

    setSleep () {
        setInterval(() => {
            if (this.health <= 0 ) {
              this.isDead = true;
            } else if (this.health >= 0) {
              this.health --;
              }
        }, 3000)

    }
}