import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, Calendar, Clock, User } from 'lucide-react'

const WebinarsPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const webinars = [
    { 
      id: 1, 
      title: "Nouvelles fonctionnalités du logiciel de gestion", 
      category: "Technique", 
      date: "15 juin 2023", 
      duration: "45 min", 
      presenter: "Marie Dupont",
      thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    { 
      id: 2, 
      title: "Techniques avancées de service client", 
      category: "Formation", 
      date: "2 juin 2023", 
      duration: "60 min", 
      presenter: "Jean Martin",
      thumbnail: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
    },
    { 
      id: 3, 
      title: "Conformité réglementaire : mise à jour 2023", 
      category: "Juridique", 
      date: "28 mai 2023", 
      duration: "50 min", 
      presenter: "Sophie Legrand",
      thumbnail: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
    },
    { 
      id: 4, 
      title: "Optimisation des processus de vente", 
      category: "Commercial", 
      date: "15 mai 2023", 
      duration: "55 min", 
      presenter: "Thomas Petit",
      thumbnail: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    { 
      id: 5, 
      title: "Gestion efficace du temps et des priorités", 
      category: "Formation", 
      date: "5 mai 2023", 
      duration: "40 min", 
      presenter: "Claire Dubois",
      thumbnail: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80"
    },
    { 
      id: 6, 
      title: "Nouveaux outils de communication interne", 
      category: "Technique", 
      date: "28 avril 2023", 
      duration: "35 min", 
      presenter: "Paul Moreau",
      thumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    { 
      id: 7, 
      title: "Stratégies de fidélisation client", 
      category: "Commercial", 
      date: "15 avril 2023", 
      duration: "65 min", 
      presenter: "Émilie Rousseau",
      thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    { 
      id: 8, 
      title: "Sécurité des données et RGPD", 
      category: "Juridique", 
      date: "5 avril 2023", 
      duration: "50 min", 
      presenter: "Nicolas Bernard",
      thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    }
  ]

  const filteredWebinars = webinars.filter(webinar => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || webinar.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  const categories = ['all', ...new Set(webinars.map(webinar => webinar.category))]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Webinaires</h1>
        <p className="mt-2 text-lg text-gray-600">
          Visionnez les enregistrements des webinaires pour rester à jour sur les dernières informations.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Rechercher un webinaire..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <Filter className="h-5 w-5 text-gray-400 mr-2" />
            <select
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'Toutes les catégories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWebinars.map((webinar) => (
          <div key={webinar.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="relative h-48">
              <img 
                src={webinar.thumbnail} 
                alt={webinar.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800">
                  {webinar.category}
                </span>
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                <Link to={`/webinars/${webinar.id}`} className="hover:text-indigo-600">
                  {webinar.title}
                </Link>
              </h3>
              <div className="mt-auto space-y-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{webinar.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{webinar.duration}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{webinar.presenter}</span>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
              <Link 
                to={`/webinars/${webinar.id}`} 
                className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Visionner le webinaire
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredWebinars.length === 0 && (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <p className="text-gray-500 text-lg">Aucun webinaire ne correspond à votre recherche.</p>
        </div>
      )}
    </div>
  )
}

export default WebinarsPage
