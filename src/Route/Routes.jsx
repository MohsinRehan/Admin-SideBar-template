import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from '../pages/Dashboard'
import Staff from '../pages/Staff'
import Users from '../pages/Users'
import Messages from '../pages/Messages'
import Analytics from '../pages/Analytics'
import FileManager from '../pages/FileManager'
import Order from '../pages/Order'
import Saved from '../pages/Saved'
import Setting from '../pages/Setting'

const MainRoutes = () => {
  return (  
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="*" element={<> not found</>} />
        </Routes>     
  )
}

export default MainRoutes
