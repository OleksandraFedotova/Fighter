import Fighter from "./fighter";
import fight from "./fight";
import ImprovedFighter from "./improvedFighter";

// create two instances
let fighter = new Fighter("NinjaJa", 1, 100);
let improvedFighter = new ImprovedFighter("KatashiSan", 1, 100);

// call fight function
fight(fighter, improvedFighter, 4,5,3,23,15,10,18);