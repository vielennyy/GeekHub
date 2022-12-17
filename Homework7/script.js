class Tomagochi {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.saturation = 100;
        this.strength = 100;
        this.happiness = 100;
        this.isAlive = true;
    }

    feed() {
        this.health += 10;
        this.strength += 10;
        this.saturation += 10;
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
              this.isAlive = false;
            }
            else {
              this.saturation --;
              this.strength --;
              }
        }, 3000)
    }

    setPlay () {
        setInterval(() => {
            if (this.happiness > 0) {
              this.happiness --;
              }
        }, 3000)
    }

    setSleep () {
        setInterval(() => {
            if (this.health <= 0 ) {
              this.isAlive = false;
            } else if (this.health >= 0) {
              this.health --;
              }
        }, 3000)

    }
}

let feed = document.querySelector('.feed')
let play = document.querySelector('.play')
let walk = document.querySelector('.walk')
let sleep = document.querySelector('.sleep')


let pet = new Tomagochi('Tom');



let petName = document.querySelector('.name-value')
let petHealth = document.querySelector('.health-value')
let petSaturation = document.querySelector('.saturation-value')
let petStrength = document.querySelector('.strength-value')
let petHappiness = document.querySelector('.happiness-value')

petName.innerHTML = pet.name;

function startGame () {
    
    pet.setFeed();
    pet.setPlay();
    pet.setSleep();

    let petFeed = pet.feed.bind(pet)
    let petSleep = pet.sleep.bind(pet)
    let petPlay = pet.play.bind(pet)
    let petWalk = pet.walk.bind(pet)

    feed.addEventListener('click', () => {
        petFeed();
        petHealth.innerHTML = pet.health;
        petSaturation.innerHTML = pet.saturation;
        petStrength.innerHTML = pet.strength;
        petHappiness.innerHTML = pet.happiness;
    });
    sleep.addEventListener('click', () => {
        petSleep();
        petHealth.innerHTML = pet.health;
        petSaturation.innerHTML = pet.saturation;
        petStrength.innerHTML = pet.strength;
        petHappiness.innerHTML = pet.happiness;
    });
    play.addEventListener('click', () => {
        petPlay();
        petHealth.innerHTML = pet.health;
        petSaturation.innerHTML = pet.saturation;
        petStrength.innerHTML = pet.strength;
        petHappiness.innerHTML = pet.happiness;
    });
    walk.addEventListener('click', () => {
        petWalk();
        petHealth.innerHTML = pet.health;
        petSaturation.innerHTML = pet.saturation;
        petStrength.innerHTML = pet.strength;
        petHappiness.innerHTML = pet.happiness;
    });

    setInterval(() => {
        petHealth.innerHTML = pet.health;
        petSaturation.innerHTML = pet.saturation;
        petStrength.innerHTML = pet.strength;
        petHappiness.innerHTML = pet.happiness;
    },1000)
    
    
}

let startWindow = document.querySelector('.game-start')
let startBTN = document.querySelector('.start')
let gameWindow = document.querySelector('.game-wrapper')
startBTN.addEventListener('click', () => {
    startWindow.style.display = 'none';
    gameWindow.style.display = 'block';
    startGame();
})
