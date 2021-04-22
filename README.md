In this project, I’ll walk you though creating a multi-step JavaScript quiz which you’ll be able to adapt to your needs and add to your own site. If you’d like to see what we’ll be ending up with, you can skip ahead and see [the working quiz](https://adishisood.github.io/Quiz-Module/)

# The Basic Structure of this JavaScript Quiz
Ideally, we want the quiz’s questions and answers to be in our JavaScript code and have our script automatically generate the quiz. That way, we won’t need to write a lot of repetitive markup, and we can add and remove questions easily.

To set up the structure of our JavaScript quiz, we’ll need to start with the following HTML:

- <div> to hold the quiz
- <button> to submit the quiz
- <div> to display the results


# Quiz Module
1) Click on start button to start your quiz
![](Screengrabs/StartQuiz.png)

2) Choose an option
![](Screengrabs/ChooseOption.png)

3) If user clicks on the submit button without selecting any option it will show a prompt saying 'Please choose an option'.
![](Screengrabs/ALert.png)

4) If user gives correct answer, it shows a correct text on screen.
![](Screengrabs/CorrectAnswer.png)

5) If user gives incorrect answer, it shows a incorrect text on screen.
![](Screengrabs/IncorrectAnswer.png)

6) After you finish your quiz, your scores and Correct Answers will be displayed on the screen.
![](Screengrabs/QuizResult.png)


### I have Build a basic quiz module by fulfilling the below User stories

**User story 1:** Design a Quiz page that keeps track of scores.

**User story 2:** Create an Array of objects named questions.

**User story 3:** Interface of the object must contain the question title, array of options, correct answer and score.

**User story 4:** Display questions along with options one by one to user and give a button to go to next question.

**User story 5:** In case user gives correct answer, increment scores by the score of the question and also show a correct text on screen, else move the user to next question.

**User story 6:** After all the questions are attempted by the user, show user their score and display the correct answers to them.

**User story 7:** Also give ability to restart the quiz to the user.

**User story 8:** Add atleast 10 questions to quiz along with 4 options.

**User story 9:** Initially show a submit button to user to submit the answer

**User story 10:** If user clicks the submit button without selecting an option show a prompt saying 'Please select an option'.

**User story 11:** After the user successfully submits a question, show him correct or incorrect status and hide the display button and show the next button to go to next question, also disable the input fields before going to next questio
