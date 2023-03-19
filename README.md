# Todo List React App
This is a simple Todo List app built with React. It allows you to add and delete items from your list.

## Usage
* create react app
* clone this file in react app 
* Run the app: npm start

## Features
* Add new todo items
* Remove todo items by clicking the "Delete" button next to each item
* The app uses localStorage to persist data even after refreshing the page
## How it Works
* The app uses React hooks to manage state. useState is used to manage the list of todos and the input value. When the form is submitted, the ** * * handleFormSubmit function adds a new todo item to the list of todos. When the "Delete" button is clicked, the handleTodoDelete function filters out the deleted todo item from the list of todos.

The app also uses useEffect to persist the list of todos using localStorage. When the component mounts, it retrieves the list of todos from localStorage (or an empty array if there are no todos) and sets the initial state. When the list of todos changes, it saves the updated list to localStorage.
