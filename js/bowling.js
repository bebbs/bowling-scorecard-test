var Scorecard = function() {
  this.totalScore = 0;
  this.playerName = 'nil';
  this.gameFrames = 10;
};

Scorecard.prototype.addPlayer = function(name) {
  this.playerName = name;
};