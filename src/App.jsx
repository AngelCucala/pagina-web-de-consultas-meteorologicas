import React from 'react';
import { OptionProvider } from './context/OptionContext';

import Sidebar  from "./components/Sidebar.jsx";
import Content  from "./components/Content.jsx";
import Heading  from "./components/Heading.jsx";

function App() {
  return (
    <OptionProvider>
      <>
    <Heading/>
    <Sidebar/>
    <Content/>
    </>
    </OptionProvider>
  );
}

export default App;