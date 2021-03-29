const robotchicken = require("robotchicken");
const BTN = D14;
pinMode(BTN, 'input_pulldown');

const playRPS=(r)=>{
  let startRound=(cb)=>{
    switch(Math.floor(Math.random()*(2-0+1)+0)){
      case 0:
        robotchicken.shake(2,0.1,100,cb);
      break;
      case 1:
        robotchicken.flap(1,cb);
      break;
      default:
        robotchicken.wagTail(1,cb);
      break;
    }
  
  };
  
  startRound(()=>{
    setTimeout(()=>{
      robotchicken.rps(()=>{
        setTimeout(()=>{
          if(r>1){
            r--;
            playRPS(r);
          }else{
            robotchicken.button.active=false;
          }
        },1000);
      });
    }, 500);
  });

};

E.on('init', function() {
  robotchicken.init(BTN);
  robotchicken.button.onPress=()=>{ playRPS(3); };
});