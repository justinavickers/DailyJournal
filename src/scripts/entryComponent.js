const makeJournalEntryComponent = (journalEntry) => {
  // Create your own HTML structure for a journal entry
 return `
  <h1>${journalEntry.concept}</h1>
  <h3>${journalEntry.date}</h3>
  <p>${journalEntry.entry}</p>
  <p>${journalEntry.mood}</p>
  `
 }