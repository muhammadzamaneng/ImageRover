import {wordsDictionary} from '../../words_structure';

const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

const removeNonAlphabets = (word: string) =>
  word.replace(/[^a-zA-Z]/g, '').toLowerCase();

function getWordsForInput(inputWord: string) {
  const cleanInput = removeNonAlphabets(inputWord);
  const wordLength = cleanInput.length;
  const startsWithConsonant = !vowels.has(cleanInput[0]);
  if (wordLength in wordsDictionary) {
    const wordsByLength = wordsDictionary[wordLength];
    return startsWithConsonant
      ? wordsByLength[cleanInput[0]] || []
      : Object.values(wordsByLength)
          .flat()
          .filter(word => vowels.has(word[0]));
  }
  return [];
}

const replaceVowel = (word: string) =>
  removeNonAlphabets(word)
    .toLowerCase()
    .replace(/[aeiou]/gi, '^');

export const findMatches = (mistypedWord: string): string[] => {
  const cleanInput = removeNonAlphabets(mistypedWord);
  const expectedWords = getWordsForInput(cleanInput).filter(
    word => replaceVowel(word) === replaceVowel(mistypedWord),
  );

  if (expectedWords.includes(cleanInput)) {
    return [
      cleanInput,
      ...expectedWords.filter(w => w !== cleanInput).slice(0, 3),
    ];
  }
  return expectedWords.slice(0, 4);
};
