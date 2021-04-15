import * as fs from "fs";
import * as _ from "lodash";
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: object[];
  constructor() {
    this.data = [];
  }
  load() {
    const dataJson = fs.readFileSync(__dirname + "/contacts.json").toString();
    const contacts = JSON.parse(dataJson);
    this.data = contacts;
  }
  getAll() {
    return this.data;
  }
  addOne(contact) {
    this.data.push(contact);
  }
  save() {
    const dataString = JSON.stringify(this.data);
    console.log(dataString);
    fs.writeFileSync(__dirname + "/contacts.json", dataString);
  }
  getOneById(id) {
    return _.find(this.data, { id: id });
  }
}
export { ContactsCollection };
