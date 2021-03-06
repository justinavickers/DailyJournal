function getJournal() {
  API.getJournalEntries()
    .then(entries => renderJournalEntries(entries))
}
getJournal()

const recordEntryButton = document.querySelector("#recordEntryButton")

recordEntryButton.addEventListener("click", (e) => {
  e.preventDefault()
  console.log(e)
  if (document.getElementById("journalDate").checkValidity() && document.getElementById("conceptsCovered").checkValidity()
  && document.getElementById("journalEntry").checkValidity() && document.getElementById("moodSelect").checkValidity()){

 const saveEntry = {
   date: document.getElementById("journalDate").value,
   concepts: document.getElementById("conceptsCovered").value,
   entry: document.getElementById("journalEntry").value,
   mood: document.getElementById("moodSelect").value
 }
 console.log(saveEntry)
 API.saveJournalEntry(saveEntry)
 .then( (data) => {
   API.getJournalEntries(data).then(renderJournalEntries)
 })}
 else {
  alert("You need to fill this out :)")
 }
})

document.querySelector("#journalDate")
