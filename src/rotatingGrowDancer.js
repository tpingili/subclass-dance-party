var RotatingGrowDancer = function(top, left, timeBetweenSteps) {
  GrowDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("rotatingGrowDancer");
};

RotatingGrowDancer.prototype = Object.create(GrowDancer.prototype);
RotatingGrowDancer.prototype.constructor = RotatingGrowDancer;
RotatingGrowDancer.prototype.step = function() {
  GrowDancer.prototype.step.call(this);
  var angle = 45 * Math.ceil(Math.random() * 8);
  var angleString = "rotate(" + angle + "deg)";
  this.$node.css({
    "transform": angleString,
    "transform-origin":"20% 40%",
    "-ms-transform": angleString, /* IE 9 */
    "-ms-transform-origin":"20% 40%", /* IE 9 */
    "-webkit-transform": angleString, /* Opera, Chrome, and Safari */
    "-webkit-transform-origin":"20% 40%" /* Opera, Chrome, and Safari */
  });
};
