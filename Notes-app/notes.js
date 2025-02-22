import chalk from "chalk";
import { Console } from "console";
import fs from "fs";
class Notes {
  loadNotes = () => {
    try {
      const data = fs.readFileSync("notes.json");
      const dataJSON = data.toString();
      const parsedData = JSON.parse(dataJSON);
      return parsedData;
    } catch (e) {
      return [];
    }
  };
  getNotes = () => {
    return;
  };

  addNotes(title, msg) {
    let notes = this.loadNotes();
    console.log(notes);
    // let jsonNote = JSON.stringify(note);
    const duplicateNotes = notes.filter(function (note) {
      return note.title === title;
    });
    if (duplicateNotes.length != 0) {
      console.log(chalk.red("Note exists"));
      return;
    } else {
      notes.push({
        title: title,
        body: msg,
      });
      this.saveNotes(notes);
      console.log(chalk.blue("Note added"));
    }
  }
  saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
  };
  removeNotes = (title) => {
    const notes = this.loadNotes();
    const new_notes = notes.filter(function (note) {
      return note.title != title;
    });
    console.log(new_notes);
    this.saveNotes(new_notes);
    console.log(chalk.red("Note Deleted"));
  };
}

export default Notes;
