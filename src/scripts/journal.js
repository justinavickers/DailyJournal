//Now that you've defined an object whose responsibility
// is to access the data, you need to write code in
//src/scripts/journal.js to use that object and get the data.
// Once you know you have the data, pass it along to the renderJournalEntries
//function that now lives in src/scripts/entriesDom.js.

function getJournal() {
  console.log("get journal running")
  API.getJournalEntries()
    .then(entries => renderJournalEntries(entries))
}
getJournal()

function saveEntry() {
  const date = document.querySelector("#journalDate")
  const concept = document.querySelector("#conceptsCovered")
  const entry = document.querySelector("#journalEntry")
  const mood = document.querySelector("#mood")

  let entryPost = {
  date: "",
  concept: "",
  entry: "",
  mood: ""
}

entryPost.date = (date.value)
entryPost.concept = (concept.value)
entryPost.entry = (entry.value)
entryPost.mood = (mood.value)

  fetch("http://localhost:3000/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entryPost)
  })
}

document.getElementById("recordEntryButton").addEventListener("click", saveEntry)






/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Change the fake variable names below to what they should be
    to get the data and display it.
*/
// objectWithGetterMethod.methodToGetData().then(functionThatRendersData)




