import * as fs from "fs";
import * as _ from "lodash";
import * as jsonfile from "jsonfile";
class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    this.data = jsonfile.readFileSync(__dirname + "/contacts.json");
  }
  getAll() {
    return this.data;
  }
  addOne(contact) {
    this.data.push(contact);
  }
  save() {
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.data);
  }
  getOneById(id) {
    return _.find(this.data, { id: id });
  }
}
export { ContactsCollection };
