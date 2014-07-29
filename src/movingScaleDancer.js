var MovingScaleDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("movingScaleDancer");
};

MovingScaleDancer.prototype = Object.create(ScaleDancer.prototype);
MovingScaleDancer.prototype.constructor = MovingScaleDancer;
MovingScaleDancer.prototype.step = function() {
  // debugger;
  ScaleDancer.prototype.step.call(this);
  var leftPos = this.$node.position().left;
  var topPos = this.$node.position().top;
  if (this.checkPosition(topPos, leftPos)) {
    this.setPosition(++leftPos, ++topPos);
  }
};
MovingScaleDancer.prototype.checkPosition = function(top, left){
  var maxLeft = $(window).width() - this.$node.width();
  var maxTop = $(window).height() - this.$node.height();
  return (top < maxTop && left < maxLeft);
}
// MovingScaleDancer.prototype.lineUp = function() {};
