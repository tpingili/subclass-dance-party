var ScaleDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("scaleDancer");
};

ScaleDancer.prototype = Object.create(Dancer.prototype);
ScaleDancer.prototype.constructor = ScaleDancer;
ScaleDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass("scaleDancer");
};
