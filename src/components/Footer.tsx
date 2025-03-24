import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:justify-start">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-6 w-6 text-indigo-600" />
              <span className="ml-2 text-lg font-bold text-gray-900">AgentPortal</span>
            </Link>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} AgentPortal. Tous droits réservés.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex justify-center space-x-6">
            <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-900">
              Conditions d'utilisation
            </Link>
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
              Politique de confidentialité
            </Link>
            <Link to="/contact" className="text-sm text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
