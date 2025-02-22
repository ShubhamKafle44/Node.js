import chalk from "chalk";
import yargs from "yargs/yargs";
import Notes from "./notes.js";
import { hideBin } from "yargs/helpers";
const myNotes = new Notes();
yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Add a new note",
    builder: {
      title: {
        describe: "Note Title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "Body",
        demandOption: true,
        type: "string",
        default: "",
      },
    },
    handler: function (argv) {
      myNotes.addNotes(argv.title, argv.body);
    },
  })
  .command({
    command: "read",
    describe: "Read notes",
    handler: function () {
      console.log(chalk.hex("#FFA500")(myNotes.getNotes()));
    },
  })
  .command({
    command: "remove",
    describe: "Remove a note",
    handler: function (argv) {
      myNotes.removeNotes(argv.title);
    },
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
  })
  .parse();
