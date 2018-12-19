## What is this?

This is a TDD React single page application using Redux for state management. It is test driven using Enzyme and Jest.

It is based on a [tutorial on Udemy](https://www.udemy.com/react-testing-with-jest-and-enzyme/) by [Bonnie Schulkin](https://github.com/flyrightsister) which I thoroughly recommend.

## Learning outcomes

* Testing single page application which loads data from a server
* Using Redux middleware
* Best practices when building a React app (parent and child components)

## Process

Plan, test, code, refactor.

## What it will look like

#### Guessed Words Table

```
Guess | Matching Letters
-------------------------
agile | 1
train | 3
party | 5
```

## App state
```
key          | Data Type | Description                      | Starting Value   
-------------------------------------------------------------------------------
secretWord   | string    | word the user is trying to guess | word from server 
success      | boolean   | word guessed correctly or not    | false            
guessedWords | array     | array of objects: {              | []               
                             guessedWord: string,                              
                            letterMatchCount: number                           
                           }                                                   
```

#### Redux
The 'success' state in our application is 'false' by default, and 'success' is also the name of the reducer which makes the new state calculation on this piece of state. The success reducer will take the old state (or current state, however you want to look at it) and the action, and then make a calculation which will determine the new state (either returning the old state untouched or else returning a new changed state). This is updated in the store and the new state flows down through props.

The success state can be flipped to true with the CORRECT_GUESS action. This action will only be sent if the word has been correctly guessed. This is sent to the reducer by way of an action creator. Action creators are just plain JavaScript functions, so they can be tested like any other. In this case, the action creator takes an optional input and returns an output (which is an object which represents the action itself).

## Making the first tests

We write the tests and stub out functions in the code to achieve bare minimum necessary for tests to return relevant feedback.

Makes sure the specs are met, rather than implementation detail. What, not how.

Separate the tests with 'describe' for context.


