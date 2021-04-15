import test from "ava";
import { ContactsCollection } from "./models";
import * as contactsObject from "./contacts.json";
import * as jsonfile from "jsonfile";

test("Testeo el load del modelo", (t) => {
  const model = new ContactsCollection();
  model.load();
  const fileContent = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(fileContent, model.getAll());
});

test("Testeo el addOne del modelo", (t) => {
  const model = new ContactsCollection();
  const mockContact = {
    id: 30,
    name: "Marce",
  };
  console.log(model);
  console.log(mockContact);
  model.addOne(mockContact);
  t.deepEqual(model.getAll(), [mockContact]);
});

test("Testeo el save del modelo", (t) => {
  const model = new ContactsCollection();
  model.load();
  const mockContact = {
    id: 30,
    name: "Marce",
  };
  console.log(model);
  model.addOne(mockContact);
  console.log(model);
  model.save();
  const fileContent = jsonfile.readFileSync("./contacts.json");
  t.deepEqual(fileContent, model.getAll());
});

test("Testeo el getOneById del modelo", (t) => {
  const model = new ContactsCollection();
  const mockContact = {
    id: 31,
    name: "Marce",
  };
  model.addOne(mockContact);
  const one = model.getOneById(31);
  t.deepEqual(one, mockContact);
});
