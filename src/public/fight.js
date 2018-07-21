//import needed classes
import Fighter from "./fighter";
import ImprovedFighter from "./improvedFighter";

// create async function fight
async function fight(fighter, improvedFighter, ...points){
        let isFight=true;
        for(let i=0;i<points.length;i++ ){
                if(i%2==0){
                        fighter.hit(improvedFighter,points[i])
                }
                else{
                        improvedFighter.hit(fighter,points[i])
                }
                
                if(fighter.health <= 0){
                        await fighter.knockout()
                        .then(()=> {isFight = false;})
                        .catch(error=>{});
                }
                if(improvedFighter.health <= 0){
                        await improvedFighter.knockout()
                        .then(()=> {isFight = false;})
                        .catch(error=>{});
                }
                if(!isFight){
                        return;
                }		
        }
        console.log('There is no points left for fight!')
}