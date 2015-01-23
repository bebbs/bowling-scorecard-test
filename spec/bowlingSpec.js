describe("Scorecard", function() {
  
  var scorecard;

  describe("At the start of a game", function() {
    
    it("Has a default score of 0", function() {
      scorecard = new Scorecard();
      expect(scorecard.totalScore).toEqual(0);
    });

  });

});
