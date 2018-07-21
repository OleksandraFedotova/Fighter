// Create class Fighter
export class Fighter {
    constructor(name, health, power) {
      this.name = name;
      this.health = health;
      this.power = power;
    }
  
    get health() {
      return this.health;
    }
	
    set health(value) {
      this.health = value;
    }
  
    get name() {
      return this.name;
    }
	
	set Name(value) {
      this.name=value;
    }
  
    get power() {
      return this.power;
    }
  
    set powet(value){
		this.power=value;
	}
  
    setDamage(damage) {
      this.health = this.health - damage;
      console.log(this.name, " health = ", this.health + " units ");
    }
	
	hit(enemy, point){
	let damage = point*this.power;
	enemy.setDamage(damage)
	}
	
	knockout(){
		return new Promise((resolve, reject) => {
			console.log("Thime is over!!!")
			setTimeout(() => {
			resolve();
			}, 500)
		});
	}
