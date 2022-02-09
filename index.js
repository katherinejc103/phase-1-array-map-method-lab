const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials.map((sentence) => {
//     const splitSentence = sentence.split(' ');
//     splitSentence.map(function (letter){
//       console.log(letter.charAt(0).toUpperCase()) + letter.slice(1) + splitSentence.join(' ')
//     })
//   })}


  const titleCased = () => {
    return tutorials.map((sentence) => {
      const splitSentence = sentence.split(' ');
      //console.log(splitSentence, 'split sentence')
      const words = splitSentence.map(function (word){
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1) 
        //console.log(capitalizedWord, 'this is the capitalized word')
        return capitalizedWord
      })
      const capitalizedSentence = words.join(' ')
      return capitalizedSentence
      // needs to return something 
    })}
    // const numbers = [1,2,3]
    // numbers.map((num) => { 
    //   return num * 2 
    // })
