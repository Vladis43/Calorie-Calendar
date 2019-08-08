import React from "react";
import * as firebase from "firebase";
import { firebaseConfig } from "./config";
import Routes from "./src/Router";

firebase.initializeApp(firebaseConfig);

export default function App() {
  return <Routes/>;
}
