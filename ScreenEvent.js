/**
 * Created by Mick on 09.11.16.
 */

ScreenEvent = function(startHour,startMinute,duration,color) {
    this.startHour = startHour;
    this.startMinute = startMinute;
    this.duration = duration;
    this.color = color;

    this.numberOfParallelConflict = 1; //meaning he is alone
    this.isParrallelConflictNumber = 0;
    this.numberOfOverLapConflict = 0; //meaning he is alone
    this.isOverLapConflictNumber = 0;

};
ScreenEvent.prototype = {};

ScreenEvent.prototype.show = function(width,height){
    var heightOneMinute = height/1440;
    var topBorder = heightOneMinute*this.startHour*60;
    var widthEvent = width/this.numberOfParallelConflict;
    var heightEvent = heightOneMinute*this.duration;

    $('#day').append('<div class = "event" style ="top:'+topBorder+'px;width:'+widthEvent+'px;height:'+heightEvent+'px;background:'+this.color+'"> <div>');

};

ScreenEvent.prototype.getStartHour = function(){
    return this.startHour;
};
ScreenEvent.prototype.setStartHour = function(startHour){
    this.startHour = startHour;
};