"use strict";
// Find sentence with most words in some text
// sentences end with: . ! or ?
// sentences always begin with a word character.
// words = any sequence of characters that are not spaces or
// sentence-ending characters
// log longest sentence and its word count to console

// Input: string
// Output: log to console the:
// - longest sentence
// - word count

// Algorithm:
// - split the string into sentences
//   - use match to split into sentences /\w[^.?!]+(\.|\?|!)/g
// - count number of words in each sentence
//   - use match to split into words /[^\s.?!]+/g
// - print longest sentence and word count

function longestSentence(text) {
  let sentences = text.match(/\w[^.?!]*[.?!]/g);
  let wordCounts = sentences.map(sentence => {
    return sentence.split(' ').length;
  });

  let indexOfLongest = wordCounts.indexOf(Math.max(...wordCounts));

  console.log(sentences[indexOfLongest]);
  console.log(`\nThe longest sentence has ${wordCounts[indexOfLongest]} words.`);
}

let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

longestSentence(longText);

// console output
// It is rather for us to be here dedicated to the great task remaining before
// us -- that from these honored dead we take increased devotion to that cause
// for which they gave the last full measure of devotion -- that we here highly
// resolve that these dead shall not have died in vain -- that this nation,
// under God, shall have a new birth of freedom -- and that government of the
// people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.


// Assuming the last sentence is removed:
// longText = 'Four score and seven years ago our fathers brought forth' +
//   ' on this continent a new nation, conceived in liberty, and' +
//   ' dedicated to the proposition that all men are created' +
//   ' equal.' +
//   ' Now we are engaged in a great civil war, testing whether' +
//   ' that nation, or any nation so conceived and so dedicated,' +
//   ' can long endure. We are met on a great battlefield of that' +
//   ' war. We have come to dedicate a portion of that field, as' +
//   ' a final resting place for those who here gave their lives' +
//   ' that that nation might live. It is altogether fitting and' +
//   ' proper that we should do this.' +
//   ' But, in a larger sense, we can not dedicate, we can not' +
//   ' consecrate, we can not hallow this ground. The brave' +
//   ' men, living and dead, who struggled here, have' +
//   ' consecrated it, far above our poor power to add or' +
//   ' detract. The world will little note, nor long remember' +
//   ' what we say here, but it can never forget what they' +
//   ' did here. It is for us the living, rather, to be dedicated' +
//   ' here to the unfinished work which they who fought' +
//   ' here have thus far so nobly advanced.';
//
// console.log('--------------------------------------------');
// longestSentence(longText);

// console output
// Four score and seven years ago our fathers brought forth on this continent
// a new nation, conceived in liberty, and dedicated to the proposition that
// all men are created equal.

// The longest sentence has 30 words.
