import React from "react"
import TodoContainer from "./components/TodoContainer"
import { createRoot } from 'react-dom/client';

//stylesheet
import "./App.css"

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<TodoContainer />);