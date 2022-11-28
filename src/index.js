import { gsap, ScrollTrigger } from "gsap/all";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
gsap.registerPlugin(ScrollTrigger);
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
