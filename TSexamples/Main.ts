//TS exmples. Visit localhost:3000/playground to see the slogs
const main = (log:any):void=>{

type level = 'shitty' | 'superPlayer' | 'god'; 

interface Player{
   name:string,
   shirtnumber: number
   age: number,
   level: level
}
type PlayerPreveiw = Pick<Player, "name" | "level">; //define a new type with name and level properties



const toString =(player: Partial<Player>)=>{
return player.name +' - '+player.shirtnumber;
} 
const printPartialPlayer = (p: Partial<Player>) =>{
   log(p.name+', age: '+p.age)
}

const player1:Partial<Player> = {name:'Messi', level:'god', shirtnumber:10}; //Partial utility types if only parts of the object are required
const prevPlayer: PlayerPreveiw = {name:"Xavi",level:'god'};
printPartialPlayer({name: 'Test', age:1});
log(toString(player1));


}
export {main}