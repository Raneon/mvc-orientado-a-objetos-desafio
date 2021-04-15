import { ContactsCollection } from "./models";

export class ContactsControllerOptions {
  action: "get" | "save";
  params: any;
}

class ContactsController {
  contactsCollection: ContactsCollection;
  constructor() {
    this.contactsCollection = new ContactsCollection();
    this.contactsCollection.load();
  }

  processOptions(options: ContactsControllerOptions) {
    if (options.action == "save" && options.params) {
      this.contactsCollection.addOne(options.params);
      this.contactsCollection.save();
      return this.contactsCollection;
    }
    if (options.action == "get" && options.params.id) {
      return this.contactsCollection.getOneById(options.params.id);
    }
    if (options.action == "get" && !options.params.id) {
      return this.contactsCollection.getAll();
    }
  }
}
export { ContactsController };
