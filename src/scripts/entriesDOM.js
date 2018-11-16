const article = document.querySelector(".entryLog");

function renderJournalEntries(journalEntries) {
  journalEntries.forEach(journalEntry => {
    article.innerHTML += makeJournalEntryComponent(journalEntry);
  });
}
