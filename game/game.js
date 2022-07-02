
//----------main varibles------------------//

let speed  = 10
let gameBoard = document.getElementById('_board')
let scoreBoard = document.getElementById('_title')
let snakePos = [{x:15 , y:15}]
let inputDirection = { x : 0  , y: 0}
let lastInputDrection = {x: 0 , y: 0}
let foodPos = [{ x:getRandomNUmber() , y:getRandomNUmber()}]
let snakeTail = 0
let loseState = false
let counter = 0
let gameOverBoard  = document.getElementById("_over")
gameOverBoard.style.display= "none"
let score =0
let timeOut =0





//----------------------------------------//



//--------main animation function---------//

function mainZone(){

setTimeout(mainZone, 1000/speed)

let result = loseCheck()

//---------game over--------------//
if(result){
  gameBoard.style.display= "none"
  let yourXP= document.getElementById("_score")
  yourXP.innerHTML="your score:"+score
  yourXP.classList.add("score")
  gameOverBoard.style.display = ""

    return
} 
//------------------------------//
draw()
update()


}

mainZone()

//----------------------------------------//
console


//-------------draw function-------------//

function draw(){
 
 gameBoard.innerHTML=''   
 snakePos.forEach(element => {
  const snakeBody  = document.createElement("div")
  snakeBody.style.gridRowStart = element.x
  snakeBody.style.gridColumnStart = element.y
  snakeBody.classList.add("snake")
  gameBoard.appendChild(snakeBody)  
 });
 
}

//----------------------------------------//




//-------------update function------------//

function update(){
 loseCheck()
if(loseState){
  
}
else{
//MOVE PART    

moveSnake()
for( let i = snakePos.length - 2 ; i >= 0 ; i --){
    snakePos[i+1] = {...snakePos[i]}
 }
snakePos[0].x +=inputDirection.x
snakePos[0].y +=inputDirection.y
//
foodGenerate()
eatCheck()
scoreBoard.innerHTML="score:"+ score

}
 console.log(timeOut)
}

//----------------------------------------//



//-----------snake move------------------//

 function moveSnake(){
    
    window.addEventListener('keydown', e =>{
    switch(e.key){
   case 'ArrowUp':
       if(lastInputDrection.x !== 0 )break
       inputDirection = { x:-1, y:0}
       break
    case 'ArrowDown':
        if( lastInputDrection.x  !== 0)break
        inputDirection = {x :1 , y:0}
        break
    case 'ArrowLeft':
        if(lastInputDrection.y !== 0) break
        inputDirection = {x: 0 , y:-1}
        break
    case 'ArrowRight':
        if(lastInputDrection.y !== 0) break
        inputDirection = { x:0, y:1}
        break

    }

})
 lastInputDrection = inputDirection
 return inputDirection
 }

//---------------------------------------------//



//--------------generate food------------------//

function foodGenerate(){
   if(counter % 5 == 0 && counter != 0 && timeOut != 40  ){
     
   
    foodPos.forEach(element => {
        let doubleXP = document.createElement('div')
        doubleXP.style.gridRowStart = element.x
        doubleXP.style.gridColumnStart = element.y
        doubleXP.classList.add('doubleFood')
        gameBoard.appendChild(doubleXP)    
        });
       timeOut++
       
     if (snakePos[0].x == foodPos[0].x && snakePos[0].y == foodPos[0].y)  
 {
     score += 3
 }
    } 
   else{
   
  foodPos.forEach(element => {
  let foodBody = document.createElement('div')
  foodBody.style.gridRowStart = element.x
  foodBody.style.gridColumnStart = element.y
  foodBody.classList.add('food')
  gameBoard.appendChild(foodBody)    
  });}

}
 //-------------------------------------------------//



//--------------GET RANDOME NUMBER------------------//
function getRandomNUmber(){
    let randomNumber =  Math.floor(Math.random()* 30)+1 
    return randomNumber
 
 }
 //-------------------------------------------------//



 function eatCheck(){
  if (snakePos[0].x == foodPos[0].x && snakePos[0].y == foodPos[0].y)  
  {  
      foodPos[0].x = getRandomNUmber()
      foodPos[0].y = getRandomNUmber()
      timeOut = 0
      for( let t = 0 ;  t <=snakeTail  ; t++){
          snakePos.push(snakePos[snakePos.length-1])
          score++
          counter++}
          speed += 0.5
          
  } 

    
  
 }



function loseCheck(){
  
    if(snakePos[0].x <= -1 || snakePos[0].x  >= 31 || snakePos[0].y  >= 31 ||  snakePos[0].y  <= -1)
  {        
      return loseState = true
  }
  else if( counter >= 1){
    let head =snakePos[0]
    for ( let t = 3 ; t < snakePos.length ; t++){
    
         if(head.x === snakePos[t].x && head.y == snakePos[t].y){
         
            return loseState = true

         }
       
     }
  }

}

function action(){

   location.reload(); 
}



//---------------BUTTONS-------------//

function up()
{    if(lastInputDrection.x === 0){
    inputDirection = { x:-1, y:0}
    lastInputDrection = inputDirection
    
    }
    return inputDirection
     
}

function down(){
    
    if(lastInputDrection.x ==0){
        inputDirection = { x:1, y:0}
        lastInputDrection = inputDirection
        return inputDirection}
}
function left(){
    if(lastInputDrection.y ==0){
        inputDirection = { x:0, y:-1}
        lastInputDrection = inputDirection
        return inputDirection}
}
function right(){
    if(lastInputDrection.y ==0){
        inputDirection = { x:0, y:1}
        lastInputDrection = inputDirection
        return inputDirection}
}
//--------------------------------------//
window.addEventListener('click' ,()=>{

    document.getElementById('backgroundMusic').play()
})