# Front End Development

Module 3

## Assignment
Assignment 3 - Basic Java script
    - scripting

# Intro
You are an angler, eager to fish in Manitoba's lakes. You will start your adventure with 5 baits. 
Each bait will consist of a trivia question about Manitoba.

# Mechanics
Each bait will ask you a question, if you get the question wrong, upon casting your bait, it will fail to 
catch any fish. If you get a question correctly, your bait will catch a fish.
To win the game, you must get 2 answers right consecutively.

## Story paths

### Path 1:
First bait question:
    - Correct answer => proceed to second bait question
    - Wrong answer => proceed to path 2

Second bait question
    - Correct answer => proceed to third bait question
    - wrong answer => proceed to path 2

### Path 2:
    - Continue answering question until questions (5) depleted.
    - If 2 consecutive correct answers => win the game
    - If unable to answer 2 consecutive correct answers,
        continue to path 3.

### Path 3:
    - If you fail to answer 2 consecutive correct answers, depleting 
    five bait questions, you leave the lake with no fish. 

## Conditions:
Win: answer 2 consecutive answers.
Lose: Use 5 bait questions without getting 2 consecutive answers.

## Author
Ralph Vitug