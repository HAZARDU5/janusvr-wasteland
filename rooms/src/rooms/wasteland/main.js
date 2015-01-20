/**
 * Wasteland Room Main JS script
 *
 * Handles all interactivity for the Wasteland room.
 *
 * @author Michael Andrew (michael@uxvirtual.com)
 */

var room = room;

room.elevators = {
    elevator: new Elevator('elevator',[14.6, 40],20),
    elevator2: new Elevator('elevator2',[30, 74],20)
};

room.log = function(logs){

    var output = '';

    if(typeof logs === 'string'){
        output = logs;
    }else if(Object.prototype.toString.call( logs ) === '[object Array]'){
        for(var i = 0; i < logs.length; i++){
            output += StringTools.pad(logs[i].print(),200,'_',StringTools.STR_PAD_RIGHT);
        }
    }

    room.objects.debugText.text = output;
};


var tween;

Logger.config.maxLogs = 5;



var firstRun = false;

room.firstRun = function(){
    if(!firstRun){



        tween = new TWEEN.Tween( {
            y: room.objects.cubetest.pos.y
        })
            .to( { y: 70 }, 2000 )
            .yoyo(true)
            .repeat(Infinity)
            .easing(TWEEN.Easing.Quadratic.In)
            .onUpdate( function () {
                Logger.log('y: '+this.y);
                room.objects.cubetest.pos.y = this.y;

            } )
            .onStart(function() {
                Logger.log('tween started: ');
            })
            .onStop(function() {
                Logger.log('tween stopped: ');
            })
            .start();

        firstRun = true;
    }
};

/**
 * On Enter
 *
 * Invoked before the first update of the room. Note that this is not when the room is loaded, but when the user first
 * steps into the room.
 *
 * Note: onEnter() appears to be slightly buggy - tweens won't work here. Instead place these tweens inside room.update()
 * and run them once.
 */
room.onEnter = function(){


    Logger.log('Entered room');




};

/**
 * Update
 *
 * Invoked on each frame before the world is drawn.
 *
 * @param dt Time elapsed between this update and the previous update. Useful for ensuring objects move at the same
 * speed regardless of framerate.
 */
room.update = function(dt){

    room.firstRun();

    //Logger.log('update: '+Date.now());



    //room.log('tween length: '+TWEEN._tweens.length);

    //room.log('mep');
    //room.log(['cake','cake2','cake3']);

    for(var elevator in room.elevators){
        room.elevators[elevator].update();
    }


    var tweenSuccess = TWEEN.update();





    //room.log('update: '+Date.now()+' '+tweenSuccess);


    //room.log('tween success: '+tweenSuccess);


    //room.objects.cubetest.pos.y = 40;



    //output currently stored logs to Paragraph in room
    room.log(Logger.get.logsOfLevel(0));

};

/**
 * On Collision
 *
 * Invoked twice when two objects in the room collide with each other: once with the first object as the first argument
 * and the second object as the second argument, and once with the second object as the first argument and the first
 * object as the second argument. Note that both elements need to have a collision radius in order to collide.
 *
 * @param object First object to detect collision against
 * @param other Second object to detect collision against
 */
room.onCollision = function(object,other){

};

/**
 * On Click
 *
 * This function is called when the user left clicks their mouse.
 *
 */
room.onClick = function(){

};