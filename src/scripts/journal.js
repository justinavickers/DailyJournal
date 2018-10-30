
/*
  Purpose: To create, and return, a string template that
  represents a single journal entry object as HTML

  Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntry) => {
  // Create your own HTML structure for a journal entry
  return `
  <h3>${journalEntry.date}</h3>
  <h3>${journalEntry.concept}</h3>
  <h3>${journalEntry.entry}</h3>
  <h3>${journalEntry.mood}</h3>
  `
}

function renderJournalEntries(journalEntries) {
  journalEntries.forEach(journalEntry => {
    article.innerHTML += makeJournalEntryComponent(journalEntry);
  });
}

const article = document.querySelector(".entryLog")




// Invoke the render function


fetch("http://localhost:3000/journalEntries") // Fetch from the API
    .then( journalEntries => journalEntries.json())  // Parse as JSON
    .then( journalEntries => {
     renderJournalEntries(journalEntries)// What should happen when we finally have the array?
    })


    // fetch("https://api.songkick.com/api/3.0/metro_areas/11104/calendar.json?apikey=p8YGjn0x2SYsMtkJ&page=1&min_date=2018-10-29&max_date=2018-10-29") //gets data
    // .then(resultsPage => resultsPage.json())      //transforms to json
    // .then(resultsPage => {     //
    //   document.querySelector(".searchResultTable").innerHTML = `<h3>Here are your results</h3>`;   //this sets the search reults back to nothing
    //   return resultsPage
    // }) //returns empty box
    // .then(resultsData => {   
