const makeJournalEntryComponent = (journalEntry) => {
  // Create your own HTML structure for a journal entry
  return `
  <div class="journalCard">
  <h3>${journalEntry.date}</h3>
  <h3>${journalEntry.concepts}</h3>
  <h3>${journalEntry.entry}</h3>
  <h3>${journalEntry.mood}</h3>
  </div>
  `
}
