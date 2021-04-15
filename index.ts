import { ContactsController, ContactsControllerOptions } from "./controllers";
import * as minimist from "minimist";
function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const parsed = minimist(argv);
  const action = parsed.action;
  console.log("aaa");
  if (parsed.hasOwnProperty("params")) {
    return {
      action: action,
      params: JSON.parse(parsed.params),
    };
  } else {
    return { action: action, params: false };
  }
}

function main() {
  const controller = new ContactsController();
  const params = parseaParams(process.argv.slice(2));
  const resultado = controller.processOptions(params);
  console.log(resultado);
}
main();
