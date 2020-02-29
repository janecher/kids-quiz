const shapes = ["square", "rectangle", "circle", "oval", "triangle", "trapezoid", "parallelogram"];
const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "grey", "black", "white"];
const numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "zero"];
let score = 0;
let numberOfAnswers = 0;

//creating table of elements
const tableOfItems = document.querySelector("table");
const row_elements = document.createElement('tr');
row_elements.className = "row_class";
tableOfItems.appendChild(row_elements);

//creating td of table
const first_td = document.createElement('td');
const second_td = document.createElement('td');
const third_td = document.createElement('td');
const forth_td = document.createElement('td');
const fifth_td = document.createElement('td');

//creating div_table
const first_div = document.createElement('div');
first_div.className = "element";
const second_div = document.createElement('div');
second_div.className = "element";
const third_div = document.createElement('div');
third_div.className = "element";
const forth_div = document.createElement('div');
forth_div.className = "element";
const fifth_div = document.createElement('div');
fifth_div.className = "element";

function fillTable(){
  row_elements.appendChild(first_td);
  row_elements.appendChild(second_td);
  row_elements.appendChild(third_td);
  row_elements.appendChild(forth_td);
  row_elements.appendChild(fifth_td);

  first_td.appendChild(first_div);
  second_td.appendChild(second_div);
  third_td.appendChild(third_div);
  forth_td.appendChild(forth_div);
  fifth_td.appendChild(fifth_div);
}

fillTable();

//question lables
const div_choose = document.querySelector("div.label_click");
const label_question = document.createElement('label');
div_choose.appendChild(label_question);

const label_element = document.createElement('label');
label_element.className = "label_element";
div_choose.appendChild(label_element);

//theme of data array
const selection = document.getElementById('themes');
//array of div elements
const elementArray = document.querySelectorAll("div.element");

//result label
const div_result = document.querySelector("div.result");
const lable_result = document.createElement('label');
div_result.appendChild(lable_result);

//start button
const start = document.querySelector('button.start');

start.addEventListener('click', () => {
  label_question.textContent = "Click on the element for the correct answer: ";
  lable_result.textContent = "";
  score = 0;
  numberOfAnswers = 0;
  elementArray[0].style.visibility="visible";
  elementArray[1].style.visibility="visible";
  elementArray[2].style.visibility="visible";
  elementArray[3].style.visibility="visible";
  elementArray[4].style.visibility="visible";
  lable_result.style.visibility="visible";
  themeChooser();
});

function themeChooser(){
  if(selection.options[selection.selectedIndex].value == "shapes")
  {
    randomElem(shapes);
  }
  if(selection.options[selection.selectedIndex].value == "colors")
  {
    randomElem(colors);
  }
  if(selection.options[selection.selectedIndex].value == "numbers")
  {
    randomElem(numbers);
  }
};

function randomElem(arrayData){
  const arrayResult = randomIndexFromArray(arrayData.length);
  const numEl = rand(5);
  const target = arrayData[arrayResult[numEl]];
  label_element.textContent = target.toString();

  for(let i = 0; i< 5; i++)
  {
    elementArray[i].id = arrayData[arrayResult[i]].toString();
  }
};

function randomIndexFromArray(num){
  let i = 0;
  let arrayResult = [];
  while(i<5)
  {
    let index = rand(num);
    if(arrayResult.includes(index))
    {
      continue;
    }
    else
    {
      arrayResult.push(index);
      i++;
    }
  }
  return arrayResult;
};

function rand(num){
  return Math.floor((Math.random() * num));
};

//creating events on each element
/*function addClickToElements(){
  for(let i = 0; i< elementArray.lenght; i++)
  {
    elementArray[i].addEventListener('click', () => {
      correctAnswer(elementArray[i], label_element.textContent);
      themeChooser();
      numberOfAnswers++;
    });
  }
}
addClickToElements();*/

elementArray[0].addEventListener('click', () => {
  correctAnswer(elementArray[0], label_element.textContent);
  themeChooser();
  numberOfAnswers +=1;
  stopQuestions();
});
elementArray[1].addEventListener('click', () => {
  correctAnswer(elementArray[1], label_element.textContent);
  themeChooser();
  numberOfAnswers +=1;
  stopQuestions();
});
elementArray[2].addEventListener('click', () => {
  correctAnswer(elementArray[2], label_element.textContent);
  themeChooser();
  numberOfAnswers +=1;
  stopQuestions();
});
elementArray[3].addEventListener('click', () => {
  correctAnswer(elementArray[3], label_element.textContent);
  themeChooser();
  numberOfAnswers +=1;
  stopQuestions();
});
elementArray[4].addEventListener('click', () => {
  correctAnswer(elementArray[4], label_element.textContent);
  themeChooser();
  numberOfAnswers +=1;
  stopQuestions();
});

function correctAnswer(divs, answer){
  if(divs.id == answer.toString()){
    score += 1;
    lable_result.textContent = "Your score is: " + score.toString();
  }
  else
  {
    lable_result.textContent = "Your score is: " + score.toString();
  }
};

function stopQuestions(){
  if(numberOfAnswers >= 10)
  {
    elementArray[0].style.visibility="hidden";
    elementArray[1].style.visibility="hidden";
    elementArray[2].style.visibility="hidden";
    elementArray[3].style.visibility="hidden";
    elementArray[4].style.visibility="hidden";
    lable_result.style.visibility="hidden";

    if(score > 7)
    {
      label_question.textContent = "Great job!";
      label_element.textContent = "Your score is: " + score.toString();
    }
    if(score > 4 && score <= 7)
    {
      label_question.textContent = "Some room for inmprovment.";
      label_element.textContent = "Your score is: " + score.toString();
    }
    if(score <=4)
    {
      label_question.textContent = "Keep learning.";
      label_element.textContent = "Your score is: " + score.toString();
    }
  }
};
