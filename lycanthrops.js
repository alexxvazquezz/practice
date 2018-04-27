let journal = require("./jacques.js") //JOURNAL

//Function that runs the Correlation formula
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) * 
              (table[0] + table[1]) * 
              (table[1] + table[3]) * 
              (table[0] + table[2]) 
    )
}

//Function that grabs the data from the journal data and add it in the correct index of an array

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if(entry.events.includes(event)) index += 1;
        if(entry.squirrel) index += 2;
        table[index] += 1;
     }
     return table;
}

// Function that goes through the array of object and returns all the events

function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for(let event of entry.events) {
            if(!events.includes(event)) {
                events.push(event)
            }
        }
        
    }   
    return events;
}

for (let event of journalEvents(journal)) {
    console.log(phi(tableFor(event, journal)))
}

