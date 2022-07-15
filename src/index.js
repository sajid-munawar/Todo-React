import React from "react"
import { createRoot } from 'react-dom/client';
import TodoContainer from "./functionBased/components/TodoContainer"

//stylesheet
import "./functionBased/App.css"

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<TodoContainer />);