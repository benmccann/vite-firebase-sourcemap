import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";

function app() {
  return initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  });
}

export function functions() {
  return getFunctions(app());
}
