# React App Development Session

**Date:** [Insert Date Here]

## Objective

Build a simple React application that fetches and displays advice from an API, with a counter for the number of pieces of advice fetched.

# React App Live Coding Session Tasks

## Setup and Imports

- [ ] Import necessary React hooks: `useEffect` and `useState`.

## App Component

- [ ] Begin the functional component for the App.
- [ ] Display a simple "Hello World" message.

## Fetching and Managing Advice

- [ ] Implement the `getAdvice` function:
  - [ ] Fetch advice data from the "[https://api.adviceslip.com/advice](https://api.adviceslip.com/advice)" endpoint.
  - [ ] Parse the JSON response and store the advice text.
  - [ ] Update the advice state with the retrieved advice text.
  - [ ] Create a state container for the advice API data.
  - [ ] (Optional) Increment the counter state after fetching new advice.
  - [ ] (Optional) Return the advice data.

## Rendering UI Elements

- [ ] Use a React fragment for better structure.
- [ ] Display a "Today's Advice" heading with styles.
- [ ] Display the advice text in bold and italics (33px font size).
- [ ] Pass the counter to the `Message` component.

## Displaying the Count of Advices

- [ ] Create a counter state.
- [ ] Display the counter value inside a paragraph element using JS mode `{}`.

## Side Effects

- [ ] Create a `useEffect` hook:
  - [ ] Fetch advice when the component mounts (empty dependency array).

## Message Component

- [ ] Define the `Message` component (with `props` parameter):
  - [ ] Move the message from the main component.
  - [ ] Destructure the `counter` prop from the `props` object.
  - [ ] Render the message with formatted count:
    - [ ] Include pluralization for "advice" (singular/plural based on counter value).

## Tasks

- [ ] **Setup Project Environment**
  - [ ] Initialize new React project (`npx create-react-app advice-app`)
  - [ ] Install necessary dependencies, if any
  - [ ] Open project in code editor
- [ ] **Plan Application Structure**
  - [ ] Sketch out the UI layout
  - [ ] Identify components needed (App, Message)
  - [ ] Determine state variables (advice, counter)
- [ ] **Implement Application Logic**
  - [ ] Import `useEffect` and `useState` in `App.jsx`
  - [ ] Define App functional component
  - [ ] Implement `getAdvice` function to fetch advice from API
  - [ ] Create state for storing advice text
  - [ ] Create state for counting advice pieces fetched
  - [ ] Use `useEffect` to fetch advice on component mount
  - [ ] Define Message component for displaying advice count
  - [ ] Pass counter as prop to Message component
  - [ ] Implement pluralization logic for “piece(s) of advice”
- [ ] **Styling and UI Enhancements**
  - [ ] Style “Today’s Advice” heading
  - [ ] Apply bold and italic styling to advice text with 33px font size
  - [ ] Ensure responsive design
- [ ] **Testing and Debugging**
  - [ ] Test fetching and displaying advice
  - [ ] Test counter increment functionality
  - [ ] Debug any issues
- [ ] **Review and Refactor**
  - [ ] Review code for readability and efficiency
  - [ ] Refactor if necessary
- [ ] **Commit and Push Changes**
  - [ ] Commit changes with a meaningful message
  - [ ] Push to repository

## Notes

- Remember to check the API rate limits.
- Consider error handling for the API request.

## Reflection

- What went well?
- What challenges did I encounter?
- How can I improve for next time?
