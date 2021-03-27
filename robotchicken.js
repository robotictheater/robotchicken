exports={
    servo:{
        head:require('servoxt').connect(D5,{range:2}),
        f1:require('servoxt').connect(D4,{range:2}),
        f2:require('servoxt').connect(D3,{range:2}),
        waist:require('servoxt').connect(D31,{range:2}),
        tail:require('servoxt').connect(D30,{range:2}),
        wingRight:require('servoxt').connect(D29,{range:2}),
        wingLeft:require('servoxt').connect(D28,{range:2})
    },

    home:()=>{
        exports.servo.head.move(0.5,1500,500);
        exports.servo.f1.move(0.5,1500,500);
        exports.servo.f2.move(0.5,1500,500);
        exports.servo.waist.move(0.5,1500,500);
        exports.servo.tail.move(0.5,1500,500);
        exports.servo.wingRight.move(0.5,1500,500);
        exports.servo.wingLeft.move(0.5,1500,500);

    },

    f1Activate:(cb)=>{
        exports.servo.f1.move(0,500,1500,()=>{
            exports.servo.f1.move(0.4,500,500,cb);
        });
    },

    f2Activate:(cb)=>{
        exports.servo.f2.move(0,500,1500,()=>{
            exports.servo.f2.move(0.5,500,500,cb);
        });
    }, 

    rps:function(cb){
        let shoot=(cb)=>{
            let choices=['r','p','s'];
  
            switch(choices[Math.floor(Math.random()*3)]){
                case 'r':
                    exports.f1Activate(); exports.f2Activate();
                break;    
                case 's':
                    exports.f1Activate();
                break;
            }
        };
        exports.servo.head.move(0.3,300,200,()=>{
            exports.servo.head.move(0.5,300,200,()=>{
                exports.servo.head.move(0.3,300,200,()=>{
                  exports.servo.head.move(0.5,300,200,()=>{
                    exports.servo.head.move(0.3,300,200,()=>{
                      exports.servo.head.move(0.5,300,200,()=>{    
                        shoot();                      
                        exports.servo.head.move(0.2,300,2000,()=>{
                          exports.servo.head.move(0.5,1700,0,()=>{
                            if(cb){cb()};
                          }); 
                        });
                      });
                    });
                  });
                });
            });
        });
    },
    
    raiseLeft:(t, cb)=>{
        exports.servo.wingLeft.move(1,t,100,()=>{
            if(cb){cb();}
        }); 
    },

    lowerLeft:(t, cb)=>{
        exports.servo.wingLeft.move(0.5,t,100,()=>{
            if(cb){cb();}
        }); 
    },

    raiseRight:(t, cb)=>{
        exports.servo.wingRight.move(0,t,100,()=>{
            if(cb){cb();}
        }); 
    },

    lowerRight:(t, cb)=>{
        exports.servo.wingRight.move(0.5,t,100,()=>{
            if(cb){cb();}
        }); 
    },

    flapLeft:(cb)=>{
        exports.servo.wingLeft.move(1,500,100,()=>{
            exports.servo.wingLeft.move(0.5,500,100,cb);
        }); 
    },

    flapRight:(cb)=>{
        exports.servo.wingRight.move(0,500,100,()=>{
            exports.servo.wingRight.move(0.5,500,100,cb);
        }); 
    },

    flap:(flapTimes, cb, flapped)=>{
        if(!flapped){ flapped=0;}
        if(flapped<flapTimes){
            flapped++;
            exports.flapRight();
            exports.flapLeft(()=>{ exports.flap(flapTimes,cb,flapped); });
        }else if(typeof cb==="function"){cb();}
        
    },

    wagTail:(wagTimes, cb, wagged)=>{
        let wag=(wagCb)=>{
            exports.servo.tail.move(0.7,500,50,()=>{
                exports.servo.tail.move(0.3,500,50,()=>{
                   if(wagCb){wagCb();}                        
                });
            });
        };
        if(!wagged){wagged=0;}
        if(wagged<wagTimes){
            wagged++;
            wag(()=>{ exports.wagTail(wagTimes, cb, wagged); });
        }else{
            exports.servo.tail.move(0.5,500);
            if(typeof cb==="function"){cb();}
        }


    },

    shake:(times, amplitude, speed, cb, shook)=>{
        let _shake=(shakeCb)=>{
            exports.servo.waist.move(E.clip(0.5-amplitude,0,1),speed,0,()=>{
                exports.servo.waist.move(E.clip(0.5+amplitude,0,1),speed,0,()=>{
                    if(shakeCb){shakeCb();}
                });
            });
        };
        if(!shook){shook=0;}
        if(shook<times){
            shook++;
            _shake(()=>{ exports.shake(times, amplitude, speed, cb, shook); });
        }else{
            exports.servo.waist.move(0.5,500);
            if(typeof cb==="function"){cb();}
        }
    },

    yes:(cb)=>{
        exports.servo.head.move(0.3,800,100,()=>{
            exports.servo.head.move(0.5,800,100,()=>{
                exports.servo.head.move(0.3,800,100,()=>{
                    exports.servo.head.move(0.5,800,100,cb);
                });      
            });
        });
    },

    no:(cb)=>{
        exports.servo.head.move(0.3,1500,0,()=>{
            exports.servo.waist.move(0.4,500,0,()=>{
                exports.servo.waist.move(0.6,750,0,()=>{
                    exports.servo.waist.move(0.4,500,0,()=>{
                        exports.servo.waist.move(0.6,750,0,()=>{
                            exports.servo.waist.move(0.5,500,0,()=>{
                                exports.servo.head.move(0.5,1500,0,cb);
                            });
                        });
                    });
                });
            });
        });
    }
};