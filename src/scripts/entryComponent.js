const makeJournalEntryComponent = (journalEntry) => {
  // Create your own HTML structure for a journal entry
  return `
  <h3>${journalEntry.date}</h3>
  <h3>${journalEntry.concept}</h3>
  <h3>${journalEntry.entry}</h3>
  <h3>${journalEntry.mood}</h3>
  `
}
