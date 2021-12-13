// Assessment Problem Definition – Part 1: (1 hour)
// Create the objects that you feel would best model a jungle using your best OO design or functional approach and coding practices based on the following requirements, using Typescript as the language of choice.

// 1. The jungle contains several species of animals; tigers, monkeys and snakes.
// 2. All animals can do three things, make a sound, eat food, and sleep.
// 3. Each species of animal knows how many others of its kind exist.
// 4. By default when an animal's energy level changes, it changes in the following ways: a. -3 for making a sound
// b. +5 for eating food
// c. +10 for sleeping
// 5. The jungle can perform a sound off. This involves all of the animals in the jungle each making their sound, along with reporting their energy level.
// 6. Tigers get +5 energy for sleeping.
// 7. Monkeys get +2 energy for eating and -4 energy for making a sound.
// 8. Some animals have the ability to play.
// 9. Only monkeys can play. When they do they say "Oooo Oooo Oooo" and get -8 energy. If a monkey doesn't have enough energy to play they say "Monkey is too tired".
// 10. The jungle contains several types of food; meat, fish, bugs and grain.
// 11. Tigers can't eat grain because they have sensitive digestive systems.
// 12. Bonus Item: The jungle can have each animal perform a random activity out of the ones possible for that animal. Include Unit tests if you would like to do so.

interface IJungle {
  isSoundOn: boolean;
}

interface IAnimals extends IJungle {
  animalEnergy: number;
  sound: () => string;
  eat: () => string;
  sleep: () => string;
}

interface IAnimalsWhoCanPlayAlso extends IAnimals {
  play: () => string;
}

class Animal implements IAnimals {
  isSoundOn = true;
  animalEnergy: number;
  soundEnergy = -3;
  sleepEnergy = 10;
  eatEnergy = 5;

  constructor(energy = 4) {
    this.animalEnergy = energy;
  }

  sound = () => {
    if (this.isSoundOn) {
      if (this.animalEnergy + this.soundEnergy < 0) {
        return `don't have enough energy to make sound and current energy is ${this.animalEnergy}`;
      } else {
        this.animalEnergy = this.animalEnergy + this.soundEnergy;
        return `made sound and have energy ${this.animalEnergy}`;
      }
    } else return `sound is off by jungle and have energy ${this.animalEnergy}`;
  };
  eat = () => {
    this.animalEnergy = this.animalEnergy + this.eatEnergy;
    return `ate and have energy ${this.animalEnergy}`;
  };
  sleep = () => {
    this.animalEnergy = this.animalEnergy + this.sleepEnergy;
    return `slept and have energy ${this.animalEnergy}`;
  };
}

class Tiger extends Animal {
  sleepEnergy = 5;
}

class Monkey extends Animal implements IAnimalsWhoCanPlayAlso {
  eatEnergy = 2;
  soundEnergy = -4;

  play = () => {
    if (this.animalEnergy - 8 >= 0) {
      this.animalEnergy = this.animalEnergy - 8;
      return `Monkey is too tired to play and have energy ${this.animalEnergy}`;
    } else return "Oooo Oooo Oooo";
  };
}

const snakes = new Animal();
console.log(`Snake ${snakes.sleep()}`);
console.log(`Snake ${snakes.sound()}`);
console.log(`Snake ${snakes.sound()}`);
console.log(`Snake ${snakes.sound()}`);
console.log(`Snake ${snakes.sound()}`);
console.log(`Snake ${snakes.sound()}`);

const monkey = new Monkey();
console.log(`Monkey ${monkey.sleep()}`);
console.log(`Monkey ${monkey.sound()}`);
console.log(`Monkey ${monkey.sound()}`);
console.log(`Monkey ${monkey.sound()}`);
console.log(`Monkey ${monkey.sound()}`);
console.log(`Monkey ${monkey.play()}`);
console.log(`Monkey ${monkey.sound()}`);

const tiger = new Tiger();
console.log(`Tiger ${tiger.sleep()}`);
console.log(`Tiger ${tiger.sound()}`);
console.log(`Tiger ${tiger.sound()}`);
console.log(`Tiger ${tiger.sound()}`);
console.log(`Tiger ${tiger.sound()}`);
console.log(`Tiger ${tiger.sound()}`);

console.log(
  "----------------------------------------------------------------------------"
);

// Assessment Problem Definition – Part 2: (30 minutes)
// [Problem 1] In this problem we are asking for implementation of a function, f, that encodes a String.
// The function f shall accept a String as an input and return the encoded String as a return value.
// The encoding algorithm replaces every character in the string with the letter that has exactly the same position when counting backwards from letter "z" (with alphabet sort order in mind.)
// Non-alphabet characters are ignored.
// Here are three examples:
// [a] Letter "a" is replaced by letter "z" (because "a" is the first letter of alphabet and "z" is the first letter when counted from the end of the alphabet list.)
// [b] Letter "c" is replaced by letter "x" (because "c" is the third letter of alphabet and "x" is the third letter of alphabet when counted backwards from letter "z".)
// [c] Letter "p" is replaced by letter "k" (because "p" is the 16th letter of alphabet and "k" is the 16th letter when counted backwards from letter "z".) Therefore, when string "acp" is encoded, the return value is string "zxk".
// Please write and submit this function with any unit tests that you would like to include.
// What would be the result of encoding the String "Errors in strategy cannot be correct through tactical maneuvers"?

const getEncodedString = (str: string): string => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const encodedString: string[] = [];
  [...str].forEach((char) => {
    const foundAt = alphabets.indexOf(char.toLowerCase());
    if (foundAt >= 0) encodedString.push(alphabets[25 - foundAt]);
  });
  return encodedString.join("");
};

console.log(getEncodedString("abcdwxyz"));

console.log(
  "----------------------------------------------------------------------------"
);
