# 1. Guessing game 🤔

- Objective: usage of a random number

## The Mission

Hungry? No?
If you really were not, then look at this picture for five minutes straight and come back.

![](images/pasteis.jpg)

It's typical Portuguese pastry.
Unfortunately, there is only one left... we will make a little game to decide who will get it.
If a player guesses a secret number, he or she wins it!

> Okay, if you still pretend not to be hungry - the game goal will be to guess the _wrong_ number

### Must-have features

- [ ] A secret number will be generated. To make things fair, the number should be between 1 and (learners in the class)
- [x] A user can enter a guess (what html element can be useful for this?)
- [ ] When he or she pushes the "play" button, the number will be compared to the secret number
- [ ] Depending on the outcome, an alert box will show:
  - Awesome! You number (actual number) was correct. You can be named many things, hungry not being one of them.
  - Bummer... You guessed (guess) and the secret number was (secret number).

### Nice-to-have features

> Show fun text: When a guess was just one number from the secret number, show another message: "So close, but you just missed it! Are you in a class that started on the thirteenth or what?"

> Limit guessing turns: See if you can guess it in 10 turns or fewer. and show the correct answer in the end

> Give hints: We'll tell you if your guess was too high or too low.

> Color: give color to text depending on whether she is right: green, or wrong: red

> Keep guessing until correct answer

> Show game over and start new game buttons, or clear game-board

> Show user guesses

> [Other guessing games?](https://games4esl.com/guessing-games-for-kids/)

# 2. Rock paper scissors 🗿📃✂️

## Learning objectives

- Select a random element
- Conditional statements (if)

## The Mission

You decide that kids these days only know about Fortnite and Tik Tok, but have no clue about great old games like a rock-paper-scissors game.
Time to build the next viral (retro) game!

### Must-have features: phase 1

- [x] Have three buttons that the player can press to pick their weapon of choice (feel free to use emoji's for this)
- [x] Have a play button to have the computer pick one randomly
- [x] Announce the winner -[ ] No alert box, add a message to your html. What does this mean is ... -[x] Possible outcomes: draw (when both chose the same thing) or player won/lost

[//]: # 'Coach note: below is a Github style spoiler'

<details>
    <summary>Step by step guidance (up to you if you want it)</summary>

    1. Create the HTML you need
        - Three buttons for the player to choose from
        - Player button to trigger the computer's turn
        - A message we can use to show the result. Put some temporary content ([a random message]()http://www.cupcakeipsum.com) there to test the styling
    2. Add some *basic* styling for those
    3. Figure out a way to know when the "play" button was clicked (tip: you'll need `events` in JavaScript for that, and you'll need to `handle` those)
    4. Next up, we want to determine the computer's choice
        - How many choices does the computer have? What can be a suitable datatype to store multiple things?
        - How can you select a random element from these choices? The math options in JavaScript might help you here
    5. Determine the payers result: draw / win / lose. It's okay if this involves a lot of conditional statements (if)
    6. Depending on the result, change the `inner html` (hint hint) of the message to congratulate or comfort the player

</details>

### Must-have features: phase 2

- Show a play again button after a game ended
- Nice graphics
- Different end message styling depending on the outcome (hint: you might need to add or remove classes via JavaScript for this)
- If you want, you can add a fun factor by changing the three choices
- Clean your code
  - Delete unused code or out of date comments
  - Try to write hard to understand parts in a way that's easier to understand for other developers
  - Can you use functions to make your code easier to read or reuse?

### Nice-to-have features

- Add extra options for the player: lizard & spock
- Keep track of the score after multiple games
- Show what the player picked by highlighting the correct button
- Add more options for a player to choose from (example: a risky option that awards more points but has a higher chance of losing)
- Add even more options (but avoid using 100 if statements)
- Can you make a player win 100% of the games? Or win 75%? (not to raise any suspicion)

![You've got this!](http://78.media.tumblr.com/f9247799ae2fe6613f643957020101c6/tumblr_inline_n80n8u8pSz1sbdww6.gif)
