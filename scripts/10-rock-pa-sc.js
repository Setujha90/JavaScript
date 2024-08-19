let score =JSON.parse(localStorage.getItem
    ('score')) || {
         wins:0,
        losses:0,
         ties:0 
    };
   
   updateScoreElement();
   /* if(!score or we can write score===null){
     score={
        wins:0,
       losses:0,
        ties:0 
      };
    } */ 
 
   
 
 
  function playGame(playerMove){
   const computerMove= pickComputerMove();
 
     // console.log(computerMove);
     let result='';
 
     if(playerMove==='Scissors'){
 
         if(computerMove==='rock'){
             // alert('tie');
             result='You lose.';
         }
         else if(computerMove==='paper'){
             // alert('lose');
             result='You win.';
         }
         else{
             // alert('Win');
             result='Tie.';
     }
 
     }
 
     else if(playerMove==='paper'){
         if(computerMove==='rock'){
             // alert('tie');
             result='You win.';
         }
         else if(computerMove==='paper'){
             // alert('lose');
             result='Tie.';
         }
         else if(computerMove==='Scissors'){
             // alert('Win');
             result='You lose.';
         }
 
     }
 
     else if(playerMove==='rock'){
         if(computerMove==='rock'){
             // alert('tie');
             result='Tie.';
         }
         else if(computerMove==='paper'){
             // alert('lose');
             result='You lose.';
         }
         else if(computerMove==='Scissors'){
             // alert('Win');
             result='You win.';
         }
     
     }
     if(result==='You win.'){
          score.wins+=1;
     }
     else if(result==='You lose.'){
         score.losses+=1;
 
     }
     else if(result==='Tie.'){
         score.ties+=1;
     }
 
     localStorage.setItem( 'score',JSON.stringify(score));
 
      updateScoreElement();
 
      document.querySelector('.js-result').
      innerHTML=result;
 
      document.querySelector('.js-moves').
      innerHTML = `  You
       <img src="images/${playerMove}-emoji.png" alt="" class="move-icon">
       <img src="images/${computerMove}-emoji.png" alt="" class="move-icon">
       Computer`;
 
       //  alert(`You picked ${playerMove}. Computer picked ${computerMove}.${result}
  //Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`);
 
             }
 
         function updateScoreElement(){
             document.querySelector('.js-score')
             .innerHTML=`Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;
         }
 
         function pickComputerMove(){
                 const randomNumber=Math.random();
                 let computerMove='';
             
                 if(randomNumber>=0 && randomNumber<1/3){
                 computerMove='rock';
                 }
             else if(randomNumber>=1/3 && randomNumber<2/3){
                 computerMove='paper';
             }
             else if(randomNumber>=2/3 && randomNumber <1){
                 computerMove='Scissors';
             }
             return computerMove;
         }