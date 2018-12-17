## What is this?

This is a TDD React single page application using Redux for state management. It is test driven using Enzyme and Jest.

It is based on a [tutorial on Udemy](https://www.udemy.com/react-testing-with-jest-and-enzyme/) by [Bonnie Schulkin](https://github.com/flyrightsister) which I thoroughly recommend.

## Learning outcomes

* Testing single page application which loads data from a server
* Using Redux middleware
* Best practices when building a React app (parent and child components)

## The Data for this app
```

key          | Data Type | Description                      | Starting Value   
-------------------------------------------------------------------------------
secretWord   | string    | word the user is trying to guess | word from server 
success      | boolean   | word guessed correctly or not    | false            
guessedWords | array     | array of objects: {              | []               
                             guessedWord: string,                              
                            letterMatchCount: number                           
                           }                                                   
-------------------------------------------------------------------------------
```

### Making the first tests

We write the tests and stub out functions in the code to achieve bare minimum necessary for tests to return relevant feedback.