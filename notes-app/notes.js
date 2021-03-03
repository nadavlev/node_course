const fs = require('fs');
const FILE_NAME = 'NOTES.txt';
const loggerObject = require('./logger.js');

const logger = loggerObject.createLogger('Notes');

const addNote = function(title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);
    if (!duplicateNote) {
        notes.push({title, body});
        saveNotes(notes);
        logger(loggerObject.logOk(`New Note Added ${JSON.stringify(notes)}`));
    }
    else {
        logger(loggerObject.logWarn(`no Note taken`));
    }
}

const removeNote = function(title) {
    logger(loggerObject.logWarn(`try to remove ${title}`));
    let notes = loadNotes();
    const noteToRemove = notes.find(note => note.title === title);
    if (noteToRemove) {
        notes.splice(noteToRemove);
        saveNotes(notes);
        logger(loggerObject.logWarn(`Note with title: ${title}, was remove`));
    }
    else {
        logger(loggerObject.logWarn(`Note with title ${title} not found`));
    }
}

const readNote = function(title) {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);
    if (note) {
        console.log(note);
    }
    else {
        console.log(loggerObject.logWarn(`Note with title ${title} was not found`))
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(`The list of notes:`);
    notes.forEach(note => console.log(note.title));
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync(FILE_NAME);
        return JSON.parse(dataBuffer.toString());
    }catch (e) {
        return [];
    }
}

const saveNotes = notes => {
    fs.writeFileSync(FILE_NAME, JSON.stringify(notes));
}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
};
