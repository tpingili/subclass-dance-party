describe("rotatingGrowDancer", function() {

  var rotatingGrowDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rotatingGrowDancer = new RotatingGrowDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(rotatingGrowDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that resizes its dimensions", function() {
    sinon.spy(rotatingGrowDancer.$node, 'css');
    rotatingGrowDancer.step();
    expect(rotatingGrowDancer.$node.css.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(rotatingGrowDancer, "step");
      expect(rotatingGrowDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rotatingGrowDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rotatingGrowDancer.step.callCount).to.be.equal(2);
    });
  });
});
