var BananaDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" src="img/banana.gif"></img>');
  this.$node.addClass("bananaDancer");
  this.$node.css({top: top, left: left});
};

BananaDancer.prototype = Object.create(Dancer.prototype);
BananaDancer.prototype.constructor = BananaDancer;
BananaDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};

