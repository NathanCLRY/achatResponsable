import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, User } from 'lucide-react'

interface WebinarCardProps {
  id: number;
  title: string;
  category: string;
  date: string;
  duration: string;
  presenter: string;
  thumbnail: string;
}

const WebinarCard: React.FC<WebinarCardProps> = ({ 
  id, 
  title, 
  category, 
  date, 
  duration, 
  presenter, 
  thumbnail 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative h-48">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          <Link to={`/webinars/${id}`} className="hover:text-indigo-600">
            {title}
          </Link>
        </h3>
        <div className="mt-auto space-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2" />
            <span>{presenter}</span>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
        <Link 
          to={`/webinars/${id}`} 
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Visionner le webinaire
        </Link>
      </div>
    </div>
  )
}

export default WebinarCard
