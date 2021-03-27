const robotchicken = require("robotchicken");
const BTN = D14;
let isPlaying = false;

pinMode(BTN, 'input_pulldown');

let playRound=(r)=>{
  robotchicken.wagTail(3, ()=>{
    setTimeout(()=>{
      robotchicken.rps(()=>{
        setTimeout(()=>{
          if(r>1){
            r--;
            playRound(r);
          }else{
            isPlaying=false;
          }
        },1000);
      });
    }, 500);
  });
  
  
  
};

setWatch(function(e) {
  if(!isPlaying){
    isPlaying=true;
    playRound(3);
  }
  
  
}, BTN, { repeat: true, edge: 'rising',debounce: 100 });

E.on('init', function() {
  robotchicken.home();
});