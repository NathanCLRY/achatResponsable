import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, Video, TrendingUp, Clock } from 'lucide-react'

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-indigo-700 rounded-xl shadow-xl overflow-hidden mb-8">
        <div className="px-6 py-12 md:px-12 text-center md:text-left">
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Bienvenue sur le portail des agents
          </h1>
          <p className="mt-4 text-xl text-indigo-100 max-w-3xl">
            Accédez à toute la documentation et aux webinaires enregistrés pour améliorer vos compétences et rester informé.
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
            <Link
              to="/documentation"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
            >
              <FileText className="w-5 h-5 mr-2" />
              Parcourir la documentation
            </Link>
            <Link
              to="/webinars"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600"
            >
              <Video className="w-5 h-5 mr-2" />
              Voir les webinaires
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-indigo-600" />
              <h2 className="ml-3 text-xl font-semibold text-gray-900">Documents populaires</h2>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { id: 1, title: "Guide d'utilisation du CRM", category: "Guide", views: 1245 },
                { id: 2, title: "Procédure de traitement des réclamations", category: "Procédure", views: 987 },
                { id: 3, title: "Manuel de formation des nouveaux agents", category: "Formation", views: 856 },
                { id: 4, title: "Politique de confidentialité des données clients", category: "Politique", views: 742 }
              ].map(doc => (
                <Link key={doc.id} to={`/documentation/${doc.id}`} className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{doc.title}</h3>
                      <p className="text-sm text-gray-500">{doc.category}</p>
                    </div>
                    <span className="text-xs text-gray-500">{doc.views} vues</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link to="/documentation" className="text-indigo-600 hover:text-indigo-500 font-medium">
                Voir tous les documents →
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-indigo-600" />
              <h2 className="ml-3 text-xl font-semibold text-gray-900">Webinaires récents</h2>
            </div>
            <div className="mt-6 space-y-4">
              {[
                { id: 1, title: "Nouvelles fonctionnalités du logiciel de gestion", date: "15 juin 2023", duration: "45 min" },
                { id: 2, title: "Techniques avancées de service client", date: "2 juin 2023", duration: "60 min" },
                { id: 3, title: "Conformité réglementaire : mise à jour 2023", date: "28 mai 2023", duration: "50 min" },
                { id: 4, title: "Optimisation des processus de vente", date: "15 mai 2023", duration: "55 min" }
              ].map(webinar => (
                <Link key={webinar.id} to={`/webinars/${webinar.id}`} className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{webinar.title}</h3>
                    <div className="flex justify-between mt-1">
                      <p className="text-sm text-gray-500">{webinar.date}</p>
                      <p className="text-sm text-gray-500">{webinar.duration}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <Link to="/webinars" className="text-indigo-600 hover:text-indigo-500 font-medium">
                Voir tous les webinaires →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Catégories populaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Guides pratiques", count: 24, icon: FileText },
              { name: "Procédures", count: 18, icon: FileText },
              { name: "Formations", count: 15, icon: Video },
              { name: "Webinaires techniques", count: 12, icon: Video }
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <div className="flex flex-col items-center text-center">
                  <category.icon className="h-8 w-8 text-indigo-600 mb-2" />
                  <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} éléments</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
