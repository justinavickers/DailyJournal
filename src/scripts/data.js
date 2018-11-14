// fetch("http://localhost:3000/journalEntries") // Fetch from the API
// .then( journalEntries => journalEntries.json())  // Parse as JSON
// .then( journalEntries => {
//  renderJournalEntries(journalEntries)// What should happen when we finally have the array?
// })

const API = {
  getJournalEntries () {
    console.log("get API")
      return fetch("http://localhost:3000/entries")
          .then(response => response.json())
  }
}

