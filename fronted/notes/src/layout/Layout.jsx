import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from '../pages/Notes';
import List from '../pages/list';
import Update from '../pages/update/Update';

const Layout = () => {
  return (
    <Routes>
      <Route path="/notes" element={<Notes />} />
      <Route path="/" element={<List />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  )
}

export default Layout