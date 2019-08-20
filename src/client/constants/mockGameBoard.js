
class Word {
  constructor(word, id, team = 'neutral', cardStatus = 'unpicked') {
    this.word = word;
    this.id = id;
    this.cardStatus = cardStatus;
    this.team = team;
  }
}

const mockGameBoard = [
  new Word('time', 1),
  new Word('person', 2),
  new Word('year', 3),
  new Word('way', 4),
  new Word('day', 5),
  new Word('thing', 6),
  new Word('man', 7),
  new Word('world', 8),
  new Word('life', 9),
  new Word('hand', 10),
  new Word('part', 11),
  new Word('child', 12),
  new Word('eye', 13),
  new Word('woman', 14),
  new Word('place', 15),
  new Word('work', 16),
  new Word('week', 17),
  new Word('case', 18),
  new Word('point', 19),
  new Word('government', 20),
  new Word('company', 21),
  new Word('number', 22),
  new Word('group', 23),
  new Word('problem', 24),
  new Word('fact', 25),
];

export default mockGameBoard;
