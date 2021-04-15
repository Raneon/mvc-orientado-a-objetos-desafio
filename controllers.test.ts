import test from "ava";
import { ContactsController } from "./controllers";
import * as jsonfile from "jsonfile";

test("Testeo el constructor del controller", (t) => {
  const model = new ContactsController();
  const fileContent = jsonfile.readFileSync(__dirname + "/contacts.json");
  t.deepEqual(fileContent, model.contacts);
});

test("Testeo el método processOptions", (t) => {
  const model = new ContactsController();
  const fileContent = jsonfile.readFileSync(__dirname + "/contacts.json");
  const mockOptions = {
    action: "get",
    params: 0,
  };
  t.deepEqual(model.processOptions(mockOptions), fileContent);
});
