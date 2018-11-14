function renderJournalEntries(journalEntries) {
  journalEntries.forEach(journalEntry => {
    article.innerHTML += makeJournalEntryComponent(journalEntry);
  });
}
const article = document.querySelector(".entryLog");