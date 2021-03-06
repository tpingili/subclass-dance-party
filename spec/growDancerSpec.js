describe("growDancer", function() {

  var growDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    growDancer = new GrowDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(growDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that resizes its dimensions", function() {
    sinon.spy(growDancer.$node, 'height');
    sinon.spy(growDancer.$node, 'width');
    growDancer.step();
    expect(growDancer.$node.height.called).to.be.true;
    expect(growDancer.$node.width.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(growDancer, "step");
      expect(growDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(growDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(growDancer.step.callCount).to.be.equal(2);
    });
  });
});
