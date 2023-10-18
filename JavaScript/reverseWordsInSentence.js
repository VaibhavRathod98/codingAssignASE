function reverseWordsInSentence(sentence) {
    // Split the sentence into words using a space as the delimiter
    const words = sentence.split(' ');

    // Reverse each word
    const reversedWords = words.map(word => {
        // Use split(), reverse(), and join() to reverse the characters in each word
        return word.split('').reverse().join('');
    });

    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

// Get user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter a sentence: ", (input) => {
    const reversedSentence = reverseWordsInSentence(input);
    console.log("Reversed sentence: " + reversedSentence);
    readline.close();
});
