describe("movingScaleDancer", function() {

  var movingScaleDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    movingScaleDancer = new MovingScaleDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(movingScaleDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that resizes its dimensions", function() {
    sinon.spy(movingScaleDancer.$node, 'position');
    movingScaleDancer.step();
    expect(movingScaleDancer.$node.position.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(movingScaleDancer, "step");
      expect(movingScaleDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(movingScaleDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(movingScaleDancer.step.callCount).to.be.equal(2);
    });
  });
});
