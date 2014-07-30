var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("blinkyDancer");
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};

BlinkyDancer.prototype.pairDancer = function(){
  var currentLeftPos = this.$node.offset().left;
  var currentTopPos = this.$node.offset().top;
  var minDistance = 9999999;
  var neighborIndex = 0;
  for(var i = 0; i < window.dancers.length; i++){
    var neighborLeftPos = window.dancers[i].$node.offset().left;
    var neighborTopPos = window.dancers[i].$node.offset().top;
    var distance = Math.sqrt(Math.pow((currentLeftPos - neighborLeftPos), 2) +
                   Math.pow((currentTopPos - neighborTopPos), 2));
    if(distance < minDistance && distance > 0){
      minDistance = distance;
      neighborIndex = i;
    }
  }
  window.dancers[neighborIndex].setPosition(currentTopPos, currentLeftPos);
};

