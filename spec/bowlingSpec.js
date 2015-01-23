describe("Scorecard", function() {
  
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  describe("At the start of a game", function() {
    
    it("Has a default score of 0", function() {
      expect(scorecard.totalScore).toEqual(0);
    });

    it("Doesn't have a player", function() {
      expect(scorecard.playerName).toEqual('nil');
    });

    it("Can have a player added", function() {
      scorecard.addPlayer('Josh');
      expect(scorecard.playerName).toEqual('Josh');
    });

  });

});
