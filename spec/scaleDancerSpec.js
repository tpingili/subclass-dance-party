describe("scaleDancer", function() {

  var scaleDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    scaleDancer = new ScaleDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(scaleDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node change colors", function() {
    sinon.spy(scaleDancer.$node, 'toggleClass');
    scaleDancer.step();
    expect(scaleDancer.$node.toggleClass.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(scaleDancer, "step");
      expect(scaleDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(scaleDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(scaleDancer.step.callCount).to.be.equal(2);
    });
  });
});
