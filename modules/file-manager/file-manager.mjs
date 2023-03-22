import fs from "fs";
import process from "process";
import path from "path";

let args = process.argv;
let choice = args[2];

function menu() {
  console.log("Menu");
  console.log("1.Create folder (Enter folder name)");
  console.log("2.Create file (Enter path and then file name)");
  console.log("3.Delete folder (write folder name which needs to be deleted)");
  console.log("4.Delete file (Enter path and then file name)");
  console.log(
    "5.Rename File (Enter path and then file's old name then a new name)"
  );
  console.log("Enter your choice\n");
}

function checkOptions() {
  if (choice == "list") {
    menu();
  } else if (choice == 1) {
    let folderName = args[3];
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
      menu();
    }
  } else if (choice == 2) {
    let pathName = args[3];

    let fileName = args[4];

    if (!fs.existsSync(fileName)) {
      fs.writeFileSync(path.join(pathName, fileName), "");
      menu();
    }
  } else if (choice == 3) {
    let folderName = args[3];
    if (fs.existsSync(folderName)) {
      fs.rm(
        folderName,
        {
          recursive: true,
        },
        () => {
          console.log("Folder Deleted!");
        }
      );
    }
    menu();
  } else if (choice == 4) {
    let pathName = args[3];
    let fileName = args[4];
    if (fs.existsSync(path.join(pathName, fileName))) {
      fs.unlinkSync(path.join(pathName, fileName));
    } else {
      console.log("File Does not exist");
    }
    menu();
  } else if (choice == 5) {
    let pathName = args[3];
    let oldName = args[4];
    let newName = args[5];

    fs.renameSync(path.join(pathName, oldName), path.join(pathName, newName));
    menu();
  }
}

checkOptions();
