console.log("test")

masterDiv = document.getElementById("masterDiv")

formSomething = document.createElement("form")
formSomething.setAttribute("onsubmit", "return false")

firstFieldset = document.createElement("fieldset")
secondFieldset = document.createElement("fieldset")
thirdFieldset = document.createElement("fieldset")
fourthFieldset = document.createElement("fieldset")


journalLabel = document.createElement("label")
journalLabel.setAttribute("for", "journalDateEntry")
journalLabel.innerHTML = "Date of Entry"

journalLabelConcept = document.createElement("label")
journalLabelConcept.setAttribute("for", "conceptsCovered")
journalLabelConcept.innerHTML = "Concepts Covered"

journalLabelEntry = document.createElement("label")
journalLabelEntry.setAttribute("for", "journalEntry")
journalLabelEntry.innerHTML = "Journal Entry"

journalLabelMood = document.createElement("label")
journalLabelMood.setAttribute("for", "MoodfortheDay")
journalLabelMood.innerHTML = "Mood For The Day"


journalInput = document.createElement("input")
journalInput.setAttribute("type", "Date")
journalInput.setAttribute("name", "journalDate")
journalInput.setAttribute("id", "journalDate")
journalInput.setAttribute("required", "true")

journalInputConcept = document.createElement("input")
journalInputConcept.setAttribute("type", "text")
journalInputConcept.setAttribute("name", "conceptsCovered")
journalInputConcept.setAttribute("id", "conceptsCovered")
journalInputConcept.setAttribute("required", "true")

journalInputEntry = document.createElement("input")
journalInputEntry.setAttribute("type", "text")
journalInputEntry.setAttribute("required", "true")
journalInputEntry.setAttribute("rows", "1")
journalInputEntry.setAttribute("cols", "20")
journalInputEntry.setAttribute("id", "journalEntry")

journalSelectMood = document.createElement("select")
journalSelectMood.setAttribute("required", "true")
journalSelectMood.setAttribute("id", "moodSelect")

journalSelectMood.innerHTML = `
<option selected disabled hidden>Pick a Mood</option>
<option value="Happy">Happy</option>
<option value="Excited">Excited</option>
<option value="Sad">Sad</option>
<option value="Upset">Upset</option>`


button = document.createElement("button")
button.setAttribute("class", "dailyEntry")
button.setAttribute("id", "recordEntryButton")
button.setAttribute("type", "submit")
button.innerHTML = "Record Your Entry!"


firstFieldset.appendChild(journalLabel)
firstFieldset.appendChild(journalInput)

secondFieldset.appendChild(journalLabelConcept)
secondFieldset.appendChild(journalInputConcept)

thirdFieldset.appendChild(journalLabelEntry)
thirdFieldset.appendChild(journalInputEntry)

journalLabelMood.appendChild(journalSelectMood)
fourthFieldset.appendChild(journalLabelMood)

formSomething.appendChild(firstFieldset)
formSomething.appendChild(secondFieldset)
formSomething.appendChild(thirdFieldset)
formSomething.appendChild(fourthFieldset)
formSomething.appendChild(button)


masterDiv.appendChild(formSomething)