import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, FileText, Download } from 'lucide-react'

const DocumentationPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const documents = [
    { id: 1, title: "Guide d'utilisation du CRM", category: "Guide", date: "15 juin 2023", size: "2.4 MB" },
    { id: 2, title: "Procédure de traitement des réclamations", category: "Procédure", date: "10 juin 2023", size: "1.8 MB" },
    { id: 3, title: "Manuel de formation des nouveaux agents", category: "Formation", date: "5 juin 2023", size: "4.2 MB" },
    { id: 4, title: "Politique de confidentialité des données clients", category: "Politique", date: "1 juin 2023", size: "1.1 MB" },
    { id: 5, title: "Guide des bonnes pratiques commerciales", category: "Guide", date: "28 mai 2023", size: "3.5 MB" },
    { id: 6, title: "Procédure d'escalade des problèmes techniques", category: "Procédure", date: "25 mai 2023", size: "1.5 MB" },
    { id: 7, title: "Manuel d'utilisation du système de ticketing", category: "Guide", date: "20 mai 2023", size: "2.8 MB" },
    { id: 8, title: "Procédure de gestion des comptes clients", category: "Procédure", date: "15 mai 2023", size: "2.1 MB" },
    { id: 9, title: "Guide de résolution des problèmes courants", category: "Guide", date: "10 mai 2023", size: "3.2 MB" },
    { id: 10, title: "Politique de sécurité informatique", category: "Politique", date: "5 mai 2023", size: "1.9 MB" },
    { id: 11, title: "Formation sur les nouvelles fonctionnalités", category: "Formation", date: "1 mai 2023", size: "5.1 MB" },
    { id: 12, title: "Procédure de sauvegarde des données", category: "Procédure", date: "28 avril 2023", size: "1.3 MB" }
  ]

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || doc.category.toLowerCase() === selectedCategory.toLowerCase()
    return matchesSearch && matchesCategory
  })

  const categories = ['all', ...new Set(documents.map(doc => doc.category))]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Documentation</h1>
        <p className="mt-2 text-lg text-gray-600">
          Accédez à tous les documents, guides et procédures dont vous avez besoin.
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
              placeholder="Rechercher un document..."
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

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Document
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Catégorie
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Taille
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDocuments.map((document) => (
                <tr key={document.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-gray-400 mr-3" />
                      <div>
                        <Link to={`/documentation/${document.id}`} className="text-sm font-medium text-indigo-600 hover:text-indigo-900">
                          {document.title}
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                      {document.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {document.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {document.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link to={`/documentation/${document.id}`} className="text-indigo-600 hover:text-indigo-900 mr-4">
                      Voir
                    </Link>
                    <button className="text-indigo-600 hover:text-indigo-900 inline-flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      Télécharger
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredDocuments.length === 0 && (
          <div className="px-6 py-12 text-center">
            <p className="text-gray-500 text-lg">Aucun document ne correspond à votre recherche.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default DocumentationPage
