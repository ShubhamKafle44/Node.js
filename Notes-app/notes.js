import chalk from "chalk";
import fs from "fs";
class Notes {
  loadNotes = () => {
    try {
      const data = fs.readFileSync("notes.json");
      const dataJSON = data.toString();
      const parsedData = JSON.parse(dataJSON);
      console.log(chalk.red(parsedData));
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
    notes.push({
      title: title,
      body: msg,
    });
    this.saveNotes(notes);
  }
  saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes));
  };
}

export default Notes;
