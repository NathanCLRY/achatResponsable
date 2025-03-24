import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, Video, Star, Clock, BookmarkIcon, HelpCircle } from 'lucide-react'

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-64 bg-white shadow-sm border-r border-gray-200">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li>
            <div className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider">
              Documentation
            </div>
            <Link to="/documentation" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <FileText className="w-5 h-5 text-gray-500" />
              <span className="ml-3">Tous les documents</span>
            </Link>
            <Link to="/documentation?category=guides" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <BookmarkIcon className="w-5 h-5 text-gray-500" />
              <span className="ml-3">Guides pratiques</span>
            </Link>
            <Link to="/documentation?category=procedures" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <FileText className="w-5 h-5 text-gray-500" />
              <span className="ml-3">Procédures</span>
            </Link>
          </li>
          <li>
            <div className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider mt-6">
              Webinaires
            </div>
            <Link to="/webinars" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <Video className="w-5 h-5 text-gray-500" />
              <span className="ml-3">Tous les webinaires</span>
            </Link>
            <Link to="/webinars?category=recent" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <Clock className="w-5 h-5 text-gray-500" />
              <span className="ml-3">Récents</span>
            </Link>
            <Link to="/webinars?category=popular" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <Star className="w-5 h-5 text-gray-500" />
              <span className="ml-3">Populaires</span>
            </Link>
          </li>
          <li className="mt-auto">
            <div className="px-4 py-2 text-xs text-gray-500 uppercase tracking-wider mt-6">
              Support
            </div>
            <Link to="/help" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
              <HelpCircle className="w-5 h-5 text-gray-500" />
              <span className="ml-3">Aide</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
