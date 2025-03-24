import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import DocumentationPage from './pages/DocumentationPage'
import WebinarsPage from './pages/WebinarsPage'
import WebinarDetailPage from './pages/WebinarDetailPage'
import DocumentDetailPage from './pages/DocumentDetailPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/documentation" element={<DocumentationPage />} />
              <Route path="/documentation/:id" element={<DocumentDetailPage />} />
              <Route path="/webinars" element={<WebinarsPage />} />
              <Route path="/webinars/:id" element={<WebinarDetailPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
