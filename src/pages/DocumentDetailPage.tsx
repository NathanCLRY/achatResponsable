import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Download, Bookmark, Share2, Printer, ThumbsUp, MessageSquare, Eye, FileText, User } from 'lucide-react'

const DocumentDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  
  // Simuler la récupération des données du document
  const document = {
    id: parseInt(id || '1'),
    title: "Guide d'utilisation du CRM",
    category: "Guide",
    date: "15 juin 2023",
    lastUpdate: "20 juin 2023",
    author: "Service IT",
    size: "2.4 MB",
    views: 1245,
    likes: 87,
    comments: 12,
    description: "Ce guide complet explique comment utiliser efficacement le système CRM pour gérer les relations clients, suivre les interactions et optimiser les processus de vente.",
    content: `
      <h2>Introduction au CRM</h2>
      <p>Le CRM (Customer Relationship Management) est un outil essentiel pour la gestion des relations clients. Ce guide vous aidera à comprendre les fonctionnalités principales et à optimiser votre utilisation quotidienne.</p>
      
      <h2>Connexion au système</h2>
      <p>Pour accéder au CRM, utilisez vos identifiants habituels sur la page de connexion. Si vous rencontrez des problèmes d'accès, contactez le support technique.</p>
      
      <h2>Interface principale</h2>
      <p>L'interface du CRM est divisée en plusieurs sections :</p>
      <ul>
        <li>Tableau de bord</li>
        <li>Gestion des contacts</li>
        <li>Suivi des opportunités</li>
        <li>Rapports et analyses</li>
        <li>Administration</li>
      </ul>
      
      <h2>Gestion des contacts</h2>
      <p>Cette section vous permet de créer, modifier et organiser vos contacts clients. Vous pouvez également segmenter votre base de données selon différents critères.</p>
      
      <h2>Suivi des opportunités</h2>
      <p>Le module de suivi des opportunités vous aide à gérer votre pipeline de vente, de la prospection à la conclusion des affaires.</p>
      
      <h2>Rapports et analyses</h2>
      <p>Utilisez les outils d'analyse pour générer des rapports personnalisés sur les performances commerciales, l'activité des clients et l'efficacité de vos campagnes.</p>
      
      <h2>Astuces avancées</h2>
      <p>Pour tirer le meilleur parti du CRM, pensez à utiliser les fonctionnalités d'automatisation, les rappels et les modèles de documents.</p>
      
      <h2>Support et ressources</h2>
      <p>En cas de besoin, n'hésitez pas à consulter la base de connaissances ou à contacter l'équipe de support technique.</p>
    `,
    relatedDocuments: [
      { id: 5, title: "Guide des bonnes pratiques commerciales" },
      { id: 7, title: "Manuel d'utilisation du système de ticketing" },
      { id: 9, title: "Guide de résolution des problèmes courants" }
    ]
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <Link to="/documentation" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Retour à la documentation
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{document.title}</h1>
              <div className="mt-2 flex flex-wrap items-center text-sm text-gray-500 gap-4">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800">
                  {document.category}
                </span>
                <span>Publié le {document.date}</span>
                <span>Mis à jour le {document.lastUpdate}</span>
                <span>Par {document.author}</span>
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
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                <Printer className="h-4 w-4 mr-1" />
                Imprimer
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between py-3 border-y border-gray-200 mb-6">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                <span>{document.views} vues</span>
              </div>
              <div className="flex items-center">
                <ThumbsUp className="h-4 w-4 mr-1" />
                <span>{document.likes} j'aime</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>{document.comments} commentaires</span>
              </div>
            </div>
            <div>
              <span className="text-sm text-gray-500">{document.size}</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-700">{document.description}</p>
          </div>

          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: document.content }} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Documents associés</h2>
          <div className="space-y-4">
            {document.relatedDocuments.map((doc) => (
              <Link 
                key={doc.id} 
                to={`/documentation/${doc.id}`} 
                className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                      <FileText className="h-5 w-5 text-indigo-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{doc.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Commentaires ({document.comments})</h2>
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
                    <p className="text-sm text-gray-500">{index === 0 ? 'Il y a 2 heures' : index === 1 ? 'Il y a 1 jour' : 'Il y a 3 jours'}</p>
                  </div>
                  <div className="mt-1 text-sm text-gray-700">
                    <p>
                      {index === 0 
                        ? "Merci pour ce document très complet. J'ai une question concernant la section sur les rapports personnalisés. Est-il possible d'exporter ces rapports en format Excel ?" 
                        : index === 1 
                        ? "Document très utile pour les nouveaux utilisateurs. Je recommande particulièrement la section sur les astuces avancées."
                        : "Pourriez-vous ajouter plus d'informations sur l'intégration avec les autres outils de l'entreprise ?"}
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
      </div>
    </div>
  )
}

export default DocumentDetailPage
