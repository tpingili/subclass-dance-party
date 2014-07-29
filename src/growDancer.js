var GrowDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("growDancer");
  this.growCalled = false;
};

GrowDancer.prototype = Object.create(Dancer.prototype);
GrowDancer.prototype.constructor = GrowDancer;
GrowDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  if(this.growCalled === false) {
    this.$node.height(40);
    this.$node.width(30);
    this.growCalled = true;
  } else {
    this.$node.height(20);
    this.$node.width(10);
    this.growCalled = false;
  }
  // var nodeHeight = this.$node.height === 20? 40: 20;
  // var nodeWidth = this.$node.width === 10? 30: 10;
  // this.$node.height(nodeHeight);
  // this.$node.width(nodeWidth);
};
