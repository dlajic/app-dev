////////////////////////////////////////////////////////////////////////////////
// Welcome to the 1st exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// Note: this code is relevant for the editor Visual Studio Code.

// All the text that follows a double "slash", that is //, is a comment.
// Whatever follows the double slash on the same line is ignored by
// the computer, it is just for you to read.

// Empty lines are also ignore, obviously.

// Comments are perhaps the most important
// What do programmers write in these comments?
// Imagine yourself opening this file in 2 years. What would you
// like to know in the most concise way possible?

// In this file, comments contain the instructions for the exercises
// as well as useful hints.

// Enough said. Let's begin with understanding how to move around
// in the Visual Studio Code editor.

// I hope you don't get bored. If so, just continue with the exercises
// in the next file at your own pace. You will find the solutions in the
// folder called solutions. Who would expect this?

// EXERCISE 1 Indentation.
//////////////////////////

// a. Select all the code below and press the combination of keys to 
// correctly indent your code. What combination? It depends on your 
// operating system! 
// On Windows : Shift + Alt + F
// On Mac : Shift + Option + F
// On Linux : Ctrl + Shift + I

let a = 1234;
a++;
if (a > 123) {
    a--;
}
else a++
console.log(a);

// Nothing happened? 
// If so, your code (technically my code, if you just cloned it)
//  might have some errors. VS Code is a bit picky here, and 
// does not touch code with errors. You will have to do Exercise 2 first,
// fix the errors, and come back here. Do it, it's worthy.

// b. Why is it still different from the code indented on the slide?
// Automatic indentation simply adjustes the space on the left-hand
// side of your code. It neither adds missing parentheses nor trims
// white space between words. That is up to you to do it.
// Do it, does it read better? Can you grasp what the code is doing?


// EXERCISE 2 Linting.
//////////////////////
// Linting can spot your code errors on the fly. As you type them.
// It can also gives you suggestions about to better format and organize
// your code. Pretty useful, isn't it?

// But why this weird name? "Linting?" lint was the name originally given
// to a particular program that flagged some suspicious and non-portable
// constructs (likely to be bugs) in C language code.

// Below is some code with some errors and warnings. Below the error
// there should be a red line. If you hover over the line, you will
// get additional information about the error. In addition, all the
// errors are available in a separate panel at the bottom of the page 
// (bottom left, look for an x inside a circle).

// Start fixing the first error, more errors might pop up, because the first
// error was blocking the execution of the code inspection 
// (and of the auto-formatting).

// If you don't know how to fix an error, just comment out the line with //.
// However, for some errors you will find a link with additional
// information about how to fix inside the tooltip, and for others you can
// simply click a "Fix" button.

// Hint: follow the pattern.
a = 1
b = 2
c= 3

// Hint: This function has no name following the word function.
function myfunction () {
    console.log('Hello!');
}

// EXERCISE 3. Autocompletion.
//////////////////////////////
// VS Code comes with snippet auto-completion. Cool! But what is a "snippet" ?
// A snippet is simply a portion of code that you can reuse.
// We haven't learn the syntax of JavaScript, but this is just to show off
// some useful features of the editor.

// a. Auto complete for console.log, On the next line, start typing log.
// A popup window will show up with suggestion, pick the first one.

// b. Auto complete for a personal note to fix this line of code. Start typing
// fix.

// c. What are all the other suggestions? VS Code collects and indexes all the
// words in the projects and suggest them to you as you type. Sometimes
// annoying, sometimes useful.

// EXERCISE 3. Shorcuts.
////////////////////////
// Proficient programmers use the mouse as little as possible, and try
// to do everything with the keyboard. It is actually possible to code
// without using the mouse at all, but we are still far from that point.
// Here we learn just a couple of useful shortcuts.

// a. Close this project. Ok, here is the catch 22, you have to do it
// with the mouse. Right click on the name "app-dev" and
// select "Remove Project Folder." Don't worry it won't delete it from
// the file system, just from VS Code. Then reopen it using the shortcut
// Ctrl-Shift-A.

// b. Comment out useless code with Ctrl-/. Notice if you applied the
// command multiple times, it will uncomment/comment/uncomment... it.
let uselessCode = 'I am useles';

// c. Cool. What other shorcuts are available? Here is a shortcut to find
// them all. Ctrl-Shift-P. Some Look around and remember how to get here,
// we will use it later.


// EXERCISE 4. Bracket Matching.
////////////////////////////////
// JavaScript wraps blocks of codes in curly brackets: { SOME CODE }.
//
// A common rookie mistake is to forget to open or close a parenthesis,
// causing an error. Unfortunately, these common mistakes are surprisingly
// difficult to catch for the untrained eye and may cause acute distress
// in the joung JavaScript programmer. To prevent or mitigate this outcome,
// get familiar with the VS Code built-in "Bracket Matcher" utility.

// a. Position yourself after the closing curly bracket of the following
// if statement (it is the second parenthesis). Does the opening curly 
// bracket get highlighted?


if (true) {
    console.log("Hei!");
}

// b. That was easy. In more complicated cases, you might want to use a
// keyboard shortcut. Yes, but which one? You can search for "Go to bracket"
// in the menu of all VS Code commands. How do you open that menu? If you don't 
// remember, go back to exercise 3.c.

// EXERCISE 5. Git.
///////////////////
// You made good progress. It is time to look back at when you started
// this exercise. You were a different person, and so this was a different
// file.

// a. Open the Git pane on the left (usually it is the third icon from the
// top, it should have a blue badge with a number on it).

// b. Visualize the changes in this file, and if you are happy with them
// your chages, "stage" them, i.e., add them to the git index.
// Note: in VS Code you may stage and commmit at once, so that is steps b.
// and c. together.

// c. Add a proper "commit" message to describe your changes. Be concise.

// d. Good! Your changes are saved. If you have the permissions, you will 
// be able to push your code online, otherwise you may have to do a 
// "pull request". We will learn about "pull requests" later.
// To push now look for the a push icon at the bottom-right and click it.

// EXERCISE 6. Code Runner.
///////////////////////////
// This is the final obstacle between you and beginning Part 1.

// You got to have the Code Runner extension installed. 
// If you haven't done it yet, what are you waiting for then? 
// Open the Extensions pane on the left (usually, fourth icon from the top) and
// search for "Code Runner". Install it

// a. Try to execute the following code by highlighting it, and then
// pressing Ctrl-Alt-N. (You can also do, Right Click and then select the 
// "Run Code" from the context menu).

let outcome = 'Yes, I made it!';
console.log(outcome);

// b. Did it work? If so, try the following:

console.log('I want to say it 10 times:');
for (let i = 0; i < 10; i++) {
    console.log(i + 1 + ': ' + outcome);
}
console.log('Mike drop.');

// Did you get this error:
// ReferenceError: outcome is not defined
// Code runner does not remember the code previously executed, so
// you need to highlight also the code that contains the definition of
// the variable outcome at 6.a.

// Congrats. You can now advance to the next exercise!
