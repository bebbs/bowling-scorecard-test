var Scorecard = function() {
  this.totalScore = 0;
  this.playerName = 'nil';
};

Scorecard.prototype.addPlayer = function(name) {
  this.playerName = name;
};