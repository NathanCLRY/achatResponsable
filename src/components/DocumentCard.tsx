import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, Download } from 'lucide-react'

interface DocumentCardProps {
  id: number;
  title: string;
  category: string;
  date: string;
  size: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ id, title, category, date, size }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
      <div className="p-5">
        <div className="flex items-center mb-3">
          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
            <FileText className="h-5 w-5 text-indigo-600" />
          </div>
          <div className="ml-3">
            <Link to={`/documentation/${id}`} className="text-lg font-medium text-indigo-600 hover:text-indigo-800">
              {title}
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800">
            {category}
          </span>
          <div className="text-sm text-gray-500">
            {date}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            {size}
          </div>
          <div className="flex space-x-2">
            <Link 
              to={`/documentation/${id}`} 
              className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
            >
              Voir
            </Link>
            <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium inline-flex items-center">
              <Download className="h-4 w-4 mr-1" />
              Télécharger
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DocumentCard
