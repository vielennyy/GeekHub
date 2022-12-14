import { Tomagochi } from "./tomagotchi";

let pet = new Tomagochi('Tom');


while(!pet.isDead){

    pet.setFeed();
    pet.setPlay();
    pet.setSleep();

    
}