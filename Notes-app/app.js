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
      console.log(chalk.blue("Note added"));
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
  .parse();
