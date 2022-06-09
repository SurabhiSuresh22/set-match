# SET MATCH APP

This app is made using react js. Multiple states and hooks used for implementing functionalities.
<br/>

## Function
- The field Match Type is a single drop down. the drop down has only 2 options - Friendly and Tournament.
- Page 2 of form changes based on option selected in page 1.
- If tournament is selected then an extra field to add the tournament name is present.
- Able to enter the Start Date & Time and End Date & Time.
- Able to enter comments for the match.

<br/>

## Components
The components made are the different pages.
- Type
- General
- Teams
- Match
<br/><br/>

## Features Included
- Global state 'type' created using ContextAPI so that it could be reused anywhere in the app.
- Storage of each match details on final submit and displays it on a table.
- Onsubmit default is prevented and user is navigated to the Match page(tables)
- Stored to matches array as objects, which is then retrieved in the Match.js file and displayed.
- UseContext, UseNavigate, UseState hooks used for global state, navigation, state management.
- Styles included in the App.css file



