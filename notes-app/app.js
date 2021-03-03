const notes = require('./notes.js');
const validator = require('validator');
const chalk = require('chalk');
const debug = require('debug')('app');
const yargs = require('yargs');
const fs = require('fs');
// configure yargs
//add, remove, read, list
yargs.command({
    command: 'add',
    description: "Add a note",
    builder: {
      title: {
          describe: "Note title",
          demandOption: true,
          type: 'string'
      },
      body: {
          describe: "Note body",
          demandOption: true,
          type: 'string'
      }
    },
    handler: (argv) => {
        debug(logBlue(`Creating a note \n 
            Title: ${argv.title} \n 
            Body: ${argv.body}
        `));
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: "remove",
    description: "Remove a task",
    builder: {
        title: {
            describe: "Title is Mandatory",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: "read",
    description: "Read a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        debug(logBlue('read a note'));
        notes.readNote(argv.title);
    }
})

yargs.command({
    command: "list",
    description: "list All notes",
    handler: () => notes.listNotes()
})


// debug('Starting the app file');

// const notes = getNotes();
// console.log(notes);
//
// console.log(validator.isEmail('m@m.com'));
//
// console.log(chalk.red('Red Text'));
// console.log(chalk.bold('Bold'));
// console.log(chalk.underline('Underline'));
// console.log(chalk.inverse('Inverse'));
// console.log(chalk.bgBlue('BG Blue'));
// console.log(chalk.underline.bgBlue('Inverse and Blue'));

// debug(process.argv);
// debug(yargs.argv);
yargs.parse();

function logBlue(msg) {
    return chalk.blue(msg);
}

function logRed(msg) {
    return chalk.red(msg);
}
