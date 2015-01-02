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

room.log = function(text){
    //room.objects.debugText.text = text;
};


/**
 * On Enter
 *
 * Invoked before the first update of the room. Note that this is not when the room is loaded, but when the user first
 * steps into the room.
 */
room.onEnter = function(){

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
    for(var elevator in room.elevators){
        room.elevators[elevator].update();
    }
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