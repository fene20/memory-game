# Memory Game
[Deployed Project](https://fene20.github.io/memory-game//index.html)

This project was developed as a fun game for children and likely adults too. It's inspiration came from the [SIMON](https://en.wikipedia.org/wiki/Simon_(game)) game which was one of the inspiration suggestions for this assessment. The SIMON game had four buttons while this game has nine buttons - all the same colour. For full user control the player hits the run game button and then a sequence of squares flashes on screen. The player then repeats the sequence and the score is updated. When the player gets a number of sequences correct the game moves to the next level where one extra square is added to the sequence. When the player gets through to the final level there is a congratulations pop up.

## UX
User Stories:
- Users expect clear visual interaction.
- The game must be robust against children pressing boxes at the wrong time.
- Unnecessary game noise can be annoying in a household and distracting in e.g. a car. So to support the game use in these situations it must be quiet.
- The primary device that a child will have access to is an iPad.
- The secondary device that a child will have access to is a mobile phone.
- The player will want some game feedback to stay engaged with the game.
- Children like games with nice visual effects.
- The game must not appear too educational for the player. Children will engage with educational games but will soon move to something else. They are aware when they are being educated and games can no longer feel like fun.
- The player must understand how to play the game.

Initial Game [Wireframe](assets/wireframes/memory_game.pdf).

## Features
### Existing Features
- The Memory Game consists of one page. The Icon can be clicked to reload the page. The Icon matches the look of the game.
- The player game feedback/progress details:- level, correct and incorrect scores are laid out above the game box area. The JS code updates the game level and the scores based on the players response.
- The box area consists of nine boxes. This could easily be scaled up to e.g. 16 boxes. It would be difficult for most players to remember that many boxes though. These boxes change to red during the game sequence. These boxes change to orange during the player sequence. They change back to green at the end of a game-player sequence. Hitting a box calls the JS function getPlayerSequence.
- The Run Game button is under the game boxes area. The border colour of the button changes to match where the player is in the game run. Hitting the Run Game button calls the JS function runGameSequence.
- During a game the player will just want to see the level/scores, the nine boxes and the Run Game button.
- The instructions are laid out under the Run Game button. After the instructions are read it will not matter if the players fingers are on the Run Game button, i.e. blocking the instructions.
- The footer is locked to the bottom of the page. It is narrow. A dummy_footer div was added to allow the full page to scroll above the footer.

### Features Left to Implement
- The JS code could be implemented with a while loop so that the player does not need to hit Run Game button for each sequence. The button could easily be added or removed from the page with JS code. Perhaps instead the Run Game button could be replaced with a pause button by JS code so that the player can halt the game during a run.
- Perhaps Audio could be added with a button to turn off the audio. Or just use the volume control. Parents might be happier with no audio at all though.

## Technologies Used
In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [Balsamiq Wireframes](https://balsamiq.com/wireframes/desktop/)
    - This project used **Balsamiq Wireframes** to generate the wireframe for this project.

- [Fontawesome Icons](https://fontawesome.com/)
    - This project used free **Fontawesome** icons.
    - The icons used were, the buromobelexperte, facebook, instagram and copyright icons.

- [W3C Markup Validation Service](https://validator.w3.org/)
    - This project used the **JS W3C Markup Validation Service** to check for warnings/errors.

- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
    - This project used the **W3C CSS Validation Service** to check for warnings/errors.

- [JS Hint](https://jshint.com/)
    - This project used **JS Hint** version 2.12.0 to check for warnings/errors.
   
- [sweetAlert2](https://sweetalert2.github.io/)
    - This project used **sweetAlert2** to generate a pop up at the end of the game.

- [Am I Responsive](http://ami.responsivedesign.is/)
    - This project used **Am I Responsive** to measure the deployed site.
   
- [Web Dev Measure](https://web.dev/measure/)
    - This project used **Web Dev Measure** to measure the deployed site.
    - This site is powered by Lighthouse.
    - Lighthouse can also be reached from Google - inspect - Lighthouse.


## UX Testing
Users expect clear visual interaction.
- The game boxes were configured as reg, green and orange. Three clear colours.
- The other colours on the page are not used during the game and are not as strong.

The game must be robust against children pressing boxes at the wrong time.
- The game has two major events:
1/ Pressing the Run Game button which generates the game sequence.
2/ Pressing the boxes to enter the player sequence.
- The player sequence could not run before the game sequence. A Lock Out was added to the code so that when the game sequence was run it prevented the user from entering the player sequence until the code was ready - the game sequence of squares had been output.

Unnecessary game noise can be annoying in a household and distracting in e.g. a car. So to support the game use in these situations it must be quiet.
- Audio feedback was purposefully not added to the game.

The primary device that a child will have access to is an iPad.
- The Game was designed to look OK on an iPad.

The secondary device that a child will have access to is a mobile phone.
- The Game was designed to look OK on all the mobile phones on google - inspect.

The player will want some game feedback to stay engaged with the game.
- The scores section gives the user feedback on the game progress.
- A game level indicator was added to give additional game feedback.
- When the run game button is pressed the button border changes to red. This matches the colour of the game box sequence.
- When the game is ready for the player to select their boxes the button border changes to orange. This matches the colour of the player box sequence.
- When a game-player sequence has been run the button border changes back to grey, i.e. the button colour.

Children like games with nice visual effects.
- The colours red, green and yellow were tried out but were changed to red, green and orange as yellow was too bright.
- The colour of less important items like the header, instructions and footer are more muted.
- The colour of the level and score numbers are highlighted in red.
- The game sequence flashes on screen in red. The player sequence is highlighted in orange.
- All boxes are green at the start and at the end of each game run.
- The run game button is below the boxes so that a players finger (on the button) will not obscure the game.
- The scores are above the boxes and will not be obscured by fingers pressing the button or the boxes.
- The game was trialled with a game sequence with two seconds between each red box output. This was too slow and was speeded up to 1 second between each box.
- Each box that turns red in the game sequence stays on while the next box is changed to red. So at the end of the sequence all boxes that were in the sequence stay red. This gives the player (a child) a better chance or remembering the sequence than if the boxes were flashed to the screen.

The game must not appear too educational for the player.
- The boxes were not given letters, numbers or images with cats and dogs etc which may make the game look to much like something from school.

The player must understand how to play the game.
- A set of instructions has been included to explain how the game works.
- The border of the run game button changes colour to match the colour being output and being input. This gives the player feedback on where they are in the game sequence.

Initial Game [Wireframe](assets/wireframes/memory_game.pdf).
- The initial wireframe had the start button at the top. This may have looked nice on the wireframe but would not have been a good UX above the boxes where player fingers would have obscured the nine boxes.
- The initial wireframe had the instructions above the game box area. The instructions may work there (with level/scores, box area and button next) but once read repeat players would not read the instructions again so a better UX was to place them near the end of the page.
 - The initial wireframe had a 2 X 4 box layout. This does not look well on an iPad or mobile. This layout was changed to a 3 x 3 box layout for a better UX.
- The initial scores section was below the boxes but this would not have been good UX as the players fingers would have obscured the scores. It's a better UX with the scores above the boxes.

[IPad](assets/validation/iPad_Google_inspect.jpg) implementation as seeen on Google Inspect

## Testing
The responsivity of the page was verified on all devices on Google inspect.

The JS code was tested during code development. Setting debug_global = true enables the console.log function.
The Run Game button was hit repeatedly to ensure a game sequence was generated.
The JS code was seen to prevent a sequence of numbers containing the same random number.
The boxes were repeatedly pressed to test the getPlayerSequence function.
When these two operations were seen to be robust a playerLockOut_global variable was added to the JS.
This variable effectively gave control of both Events to the runGameSequence as the getPlayerSequence could not run until runGameSequence had ran.

The pop up was verified by changing totalNoBoxes_global = 1.

The game was run on github and worked successfully. The Run Game button was pressed and the boxes were also pressed during the game sequence but were ignored. Only boxes pressed after the game sequence were output were acknowledged by the JS code.
The scores updated correctly for correct and incorrect scores. The level was also successfully updated.
Pressing the Memory Game Icon reloads the HTML.


## Validation

- [index.html](assets/validation/Nu_Html_Checker.pdf)
    - No Errors or Warnings.
- [style.css](assets/validation/W3C_CSS_Validator_results.pdf)
    - Warnings about the button background colour being the same as the border can be ignored as this is by design.
- [script.js](assets/validation/JSHint.pdf)
    - One undefined variable Swal. This error goes away when sweetalert2.all.js code is added to JS Hint.
    - So Swal is declared in the sweetalert2.all.js code.
    - The sweetalert2.all.js code was searched for _global and there was no match.
    - So while the _global variables in script.js are not desirable they will not interact with the sweetalert2.all.js code.
- [Am I Responsive](assets/validation/Am_I_Responsive.jpg)
- [Web Dev Measure](assets/validation/Lighthouse_Report.pdf)


## Deployment
Deployment steps:
- Open the project in guthub.
- Select the settings icon on the top right.
- Select github pages - second last on the left.
- Select none pull down and select the master branch.
- Select save.
- This publishes the site on github pages.
 
## Credits
The First commit was with code from the [Code Institute](https://codeinstitute.net/) Challenge 54_JavaScript_HDE_Working_With_Functions.
The scores section was completed with code from the [Code Institute](https://codeinstitute.net) JavaScript Walkthrough Project.
The page colours were generated with code from the [Code Institute](https://codeinstitute.net) Love Running Project.
The pop up was generated with code from [sweetAlert2](https://sweetalert2.github.io/).

### Content
- There was no text copied to the site from external sources.

### Media
- There wero no images used in this project.

### Acknowledgements
- I received inspiration for this project from the game [SIMON](https://en.wikipedia.org/wiki/Simon_(game)).
- The format of this README file came from the [Code Institute](https://codeinstitute.net).
- The template for this project is the [Code Institute](https://codeinstitute.net) student template for Gitpod.
- The first commit was a direct 100% copy of [Code Institute](https://codeinstitute.net) 54_JavaScript_HDE_Working_With_Functions Challenge.
- I got help with the setTimeout function from [GeeksforGeeks](https://www.geeksforgeeks.org/how-to-add-a-delay-in-a-javascript-loop/).
- The scores section was copied from [Code Institute](https://codeinstitute.net) JS Essentials Project.
- The Game over pop up was developed with code from [sweetAlert2](https://sweetalert2.github.io/).
- Excellence Ilesanmi provided mentor support and feedback on this project.


### Challenges

setTimeout function
- It took a while to figure out how to use setTimeout as a sequential delay.
- Initially all squares were updating at the same time but all a fixed delay later.
- The JS code essentially runs on and cannot be paused but an output can be paused.
- The output delays then need to be multiplied up.
- [GeeksforGeeks](https://www.geeksforgeeks.org/how-to-add-a-delay-in-a-javascript-loop/) had a clear explanation.
- I also got caught out here using strings in mathematical calculations.

Events
- The events were modified to remove JSHint warnings.
- It took a while to figure out the how to capture the actual box that was clicked inside the boxes_section.
- The answer was event.target.getAttribute("id").
- Credit JS essentials project which had this line this.getAttribute("data-type").

Pop up
- I initially tried Overlay code but in the end went with the pop up from [sweetAlert2](https://sweetalert2.github.io/).


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

Removed Top button
- Finger/hand pressing this button would be blocking boxes.
- One button (below boxes) is better.
- Added playerLockOut to force player to wait until game sequence was output.
- 12th May 2021 17:05

Fixed JS, HTML and CSS warnings
- Ran [JS Hint](https://jshint.com/) version 2.12.0 and fixed warnings.
- Ran [HTML Validator](https://validator.w3.org/) and fixed warnings.
- Ran [CSS Validator](https://jigsaw.w3.org/css-validator/) and fixed warnings.
- 12th May 2021 22:02

Centered all contents on page
- 13th May 2021 22:56

Added dummy_footer to HTML
- Changed playerLockOut_global = true on program load.
- Removed square toggle which was copied from Code Institute JS Walkthrough project.
- Deleted box.js and game.js
- Added Game Over to JS.
- Ran [JS Hint](https://jshint.com/) version 2.12.0 and fixed warnings.
- Ran [HTML Validator](https://validator.w3.org/) and fixed warnings.
- Ran [CSS Validator](https://jigsaw.w3.org/css-validator/) and fixed warnings.
- 14th May 2021 15:49

Added sweetAlert2 pop up
- Replaced Overlay with [sweetAlert2](https://sweetalert2.github.io/) pop up on Game Over.
- 14th May 2021 23:13

README Work In Progress
- 15th May 2021 18:25

Pushing files to github to complete validation of deployed site
- 15th May 2021 19:10

Pushing files to github in case of reboot due to system updates
- 15th May 2021 19:45

Updated README file
- 15th May 2021 23:09

Commit README changes
- 15th May 2021 23:45
 