// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
  this.assignID();
};

Dancer.prototype.step = function() {
  var stepper = this.step.bind(this);
  setTimeout(stepper, this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  this.setPosition(this.top, 10);
};

Dancer.prototype.assignID = function() {
  this.$node.attr('id', window.dancers.length);
}
