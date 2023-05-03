import React from "react"
import {createRoot} from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./styles/index.css"
import App from "./components/general-layout/App"

let nodeRoot = document.getElementById("root")
let root = createRoot(nodeRoot)
root.render(
<BrowserRouter>
    <App />
</BrowserRouter>
)