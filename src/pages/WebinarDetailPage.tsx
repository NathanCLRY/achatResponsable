import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Download, Bookmark, Share2, ThumbsUp, MessageSquare, Eye, User, Calendar, Clock, FileText, Video } from 'lucide-react'

const WebinarDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const [activeTab, setActiveTab] = useState('description')
  
  // Simuler la récupération des données du webinaire
  const webinar = {
    id: parseInt(id || '1'),
    title: "Nouvelles fonctionnalités du logiciel de gestion",
    category: "Technique",
    date: "15 juin 2023",
    duration: "45 min",
    presenter: "Marie Dupont",
    presenterRole: "Responsable Produit",
    views: 328,
    likes: 42,
    comments: 8,
    description: "Ce webinaire présente les dernières fonctionnalités ajoutées au logiciel de gestion et explique comment les utiliser efficacement pour améliorer votre productivité quotidienne.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Exemple d'URL vidéo (à remplacer par une vraie URL)
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    agenda: [
      "Introduction aux nouvelles fonctionnalités",
      "Démonstration du tableau de bord amélioré",
      "Nouveaux rapports et analyses disponibles",
      "Fonctionnalités d'automatisation avancées",
      "Questions et réponses"
    ],
    resources: [
      { name: "Présentation PowerPoint", type: "ppt", size: "3.2 MB" },
      { name: "Guide de référence rapide", type: "pdf", size: "1.5 MB" },
      { name: "Exemples de cas d'utilisation", type: "pdf", size: "2.1 MB" }
    ],
    relatedWebinars: [
      { id: 6, title: "Nouveaux outils de communication interne" },
      { id: 2, title: "Techniques avancées de service client" }
    ]
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <Link to="/webinars" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Retour aux webinaires
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="aspect-w-16 aspect-h-9 bg-gray-200">
          <iframe
            src={webinar.videoUrl}
            title={webinar.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[400px]"
          ></iframe>
        </div>

        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{webinar.title}</h1>
              <div className="mt-2 flex flex-wrap items-center text-sm text-gray-500 gap-4">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800">
                  {webinar.category}
                </span>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{webinar.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{webinar.duration}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{webinar.presenter}, {webinar.presenterRole}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <Download className="h-4 w-4 mr-1" />
                Télécharger
              </button>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <Bookmark className="h-4 w-4 mr-1" />
                Sauvegarder
              </button>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <Share2 className="h-4 w-4 mr-1" />
                Partager
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between py-3 border-y border-gray-200 mb-6">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                <span>{webinar.views} vues</span>
              </div>
              <div className="flex items-center">
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span>{webinar.likes} j'aime</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>{webinar.comments} commentaires</span>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`${
                  activeTab === 'description'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`${
                  activeTab === 'resources'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Ressources
              </button>
              <button
                onClick={() => setActiveTab('comments')}
                className={`${
                  activeTab === 'comments'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Commentaires ({webinar.comments})
              </button>
            </nav>
          </div>

          <div className="py-6">
            {activeTab === 'description' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-2">À propos de ce webinaire</h2>
                  <p className="text-gray-700">{webinar.description}</p>
                </div>
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-2">Programme</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {webinar.agenda.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">Ressources téléchargeables</h2>
                <div className="space-y-4">
                  {webinar.resources.map((resource, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm font-medium text-gray-900">{resource.name}</h3>
                          <p className="text-xs text-gray-500">{resource.size}</p>
                        </div>
                      </div>
                      <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        <Download className="h-4 w-4 mr-1" />
                        Télécharger
                      </button>
                    </div>
                  ))}
                </div>

                <h2 className="text-lg font-medium text-gray-900 mt-8 mb-4">Webinaires associés</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {webinar.relatedWebinars.map((related) => (
                    <Link 
                      key={related.id} 
                      to={`/webinars/${related.id}`} 
                      className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                            <Video className="h-5 w-5 text-indigo-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm font-medium text-gray-900">{related.title}</h3>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'comments' && (
              <div>
                <div className="mb-6">
                  <textarea
                    rows={3}
                    className="shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    placeholder="Ajouter un commentaire..."
                  />
                  <div className="mt-2 flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Commenter
                    </button>
                  </div>
                </div>
                <div className="space-y-6">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="flex space-x-3">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <User className="h-6 w-6 text-gray-500" />
                        </div>
                      </div>
                      <div className="flex-1 bg-gray-50 rounded-lg px-4 py-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900">Utilisateur {index + 1}</h3>
                          <p className="text-sm text-gray-500">{index === 0 ? 'Il y a 1 heure' : index === 1 ? 'Il y a 1 jour' : 'Il y a 2 jours'}</p>
                        </div>
                        <div className="mt-1 text-sm text-gray-700">
                          <p>
                            {index === 0 
                              ? "Merci pour ce webinaire très instructif. La démonstration du tableau de bord était particulièrement utile." 
                              : index === 1 
                              ? "Est-ce que ces fonctionnalités seront disponibles pour tous les utilisateurs ou seulement pour les administrateurs ?"
                              : "Excellent webinaire ! J'ai une question concernant l'intégration avec nos outils existants. Est-ce possible de programmer une session de suivi ?"}
                          </p>
                        </div>
                        <div className="mt-2 text-sm">
                          <button className="text-indigo-600 hover:text-indigo-500 mr-4">Répondre</button>
                          <button className="text-gray-500 hover:text-gray-700">J'aime</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebinarDetailPage
