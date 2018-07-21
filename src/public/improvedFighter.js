//import needed classes
import { Fighter } from "./fighter.js";

// Create class ImprovedFighter
	export class ImprovedFighter extends Fighter {
		constructor(_name, _health, _power) {
			super(_name, _health, _power);
  }

	thus.prototype.hit=(enemy, point) {
		let doubleDamage = 2 * point;
		this.hit(enemy, doubleDamage);
  }
}

