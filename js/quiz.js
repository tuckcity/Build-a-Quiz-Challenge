// 1. Create a multidimensional array to hold quiz questions and answers
const quizQuestions = [
  ['What month is 6?', 'june'],
  ['What month is Xmas in?', 'december'],
  ['What year is it?', '2023']
];

// 2. Store the number of questions answered correctly
let correct = 0;
let right = [];
let wrong = [];

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for (let i = 0; i < quizQuestions.length; i++) {
    let question = quizQuestions[i][0];
    let answer = quizQuestions[i][1];  
    let response = prompt(question); 
    if (response === answer) {
      correct++;
      right.push(question);
    } else {
      wrong.push(question);
    }
} 

function createListItems(arr) {
  let items = '';
  for (let i = 0; i < arr.length; i++) {
      items += `<li> ${arr[i]}</li>`;
  }
  return items;
}

// 4. Display the number of correct answers to the user
let html = `
<h1>You answered ${correct} questions correct.</h1>
<h2>You answered these questions right:</h2>
<ol>${createListItems(right)}</ol>
<h2>You answered these questions wrong:</h2>
<ol>${createListItems(wrong)}</ol>
`;

document.querySelector('main').innerHTML = html;