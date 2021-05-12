# Memory Game

One or two paragraphs providing an overview of your project.

Essentially, this part is your sales pitch.
 
## UX
 
[Home Page](assets/wireframes/memory_game.pdf)

This is a memory game targgeted for children. There are eight boxes. Four of them light up in a ramdom order. The user repeats the order by clicking on the boxes.
The score for each sequence is recorded below the game.


Children will not usually have access to a laptop or a desktop.
This game must be iPad first then mobile.
The game must not make noise.



Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to perform an action, so that I can achieve a goal.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included as a pdf file in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

Project started with Code Institute Challenge 54_JavaScript_HDE_Working_With_Functions.
Added scores to HTML from Code Institute JavaScript Walkthrough Project.



### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements
- I received inspiration for this project from X . . . . 
- The first commit was a direct 100% copy of Code Institute 54_JavaScript_HDE_Working_With_Functions Challenge
- Got timeout help from [GeeksforGeeks](https://www.geeksforgeeks.org/how-to-add-a-delay-in-a-javascript-loop/)
- Scores from CodeInstitute JS Essentials Project

### Challenges
- It took a while to figure out how to use setTimeout as a sequential delay.
- Initially all squares were updating at the same time but all a fixed delay later.
- The JS code runs on and cannot be paused but an output can be paused.
- The output delays then need to be multiplied up.
- GeeksforGeeks had a nice explaination.
- [GeeksforGeeks](https://www.geeksforgeeks.org/how-to-add-a-delay-in-a-javascript-loop/)
- Also got caught here using strings in mathematical calculations.



### Revision History

Initial commit. Add Project README and Wireframe.
- Add Code Institute project README from https://github.com/Code-Institute-Solutions/readme-template
- Add wireframe [Home Page](assets/wireframes/memory_game.pdf)
- 4th May 2021 17:52

Add a blank JS file to check out repo functionality.
- Losing files from gitpod.
- 7th May 2021 23:15

Add text to game.js file to check out repo functionality.
- 8th May 2021 13:09

function genSqrSequence to generate random square sequence working
- 8th May 2021 14:41

Add outputSqrSequence function to turn on squares
- 8th May 2021 19:32

sqrOutDelay function to output squares with a delay working
- 9th May 2021 14:47

Added script.js with event listner functionality
- 9th May 2021 18:13

Game running with events
- 9th May 2021 19:25

Code getting id of box clicked
- 9th May 2021 21:04

Added JS pseudo code
- 10th May 2021 00:44

Game is working
- Some nested functions removed
- 10th May 2021 21:57

Removed JSHint warnings and Started CSS styling
- Fixed JS warnings in [JS Hint](https://jshint.com/) version 2.12.0
- 11th May 2021 18:47

Updated page section heights
- 11th May 2021 23:34

Style for all devices
- 12th May 2021 14:22