import { WebStorageTemp } from "./WebStorageTemp";

let webStorage = new WebStorageTemp();
let testArray = new Array();
testArray.push(document.getElementById("test"));
webStorage.initListeners(testArray);