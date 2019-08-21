import * as affiliations from './affiliations';

class Word {
  constructor(word, id, affiliation = affiliations.NEUTRAL, cardPicked = false) {
    this.word = word;
    this.id = id;
    this.cardPicked = cardPicked;
    this.affiliation = affiliation;
  }
}

const mockGameBoard = [
  new Word('time', 1, affiliations.ASSASSIN),
  new Word('person', 2, affiliations.BLUE_TEAM),
  new Word('year', 3, affiliations.BLUE_TEAM),
  new Word('way', 4, affiliations.BLUE_TEAM),
  new Word('day', 5, affiliations.BLUE_TEAM),
  new Word('thing', 6, affiliations.BLUE_TEAM),
  new Word('man', 7, affiliations.BLUE_TEAM),
  new Word('world', 8, affiliations.BLUE_TEAM),
  new Word('life', 9, affiliations.BLUE_TEAM),
  new Word('hand', 10, affiliations.BLUE_TEAM),
  new Word('part', 11, affiliations.RED_TEAM),
  new Word('child', 12, affiliations.RED_TEAM),
  new Word('eye', 13, affiliations.RED_TEAM),
  new Word('woman', 14, affiliations.RED_TEAM),
  new Word('place', 15, affiliations.RED_TEAM),
  new Word('work', 16, affiliations.RED_TEAM),
  new Word('week', 17, affiliations.RED_TEAM),
  new Word('case', 18, affiliations.RED_TEAM),
  new Word('point', 19, affiliations.NEUTRAL),
  new Word('government', 20, affiliations.NEUTRAL),
  new Word('company', 21, affiliations.NEUTRAL),
  new Word('number', 22, affiliations.NEUTRAL),
  new Word('group', 23, affiliations.NEUTRAL),
  new Word('problem', 24, affiliations.NEUTRAL),
  new Word('fact', 25, affiliations.NEUTRAL),
];

export default mockGameBoard;
