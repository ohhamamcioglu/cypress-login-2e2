import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login.jsx'
import Success from './components/Success.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}


