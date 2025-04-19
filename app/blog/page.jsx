'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const allArticles = [
  {
    id: 1,
    title: 'Mon road trip au Nord Cameroun',
    description: 'Un voyage épique à travers le Nord du Cameroun, avec des paysages à couper le souffle, des rencontres inoubliables et des moments uniques à partager.',
    image: '/images/road-trip.jpg',
    link: '/blog/road-trip-nord-cameroun',
  },
  {
    id: 2,
    title: 'Top 5 des plats camerounais à goûter',
    description: 'Découvrez les saveurs authentiques du Cameroun à travers ses plats incontournables. Un voyage culinaire qui ravira vos papilles !',
    image: '/images/plats-camerounais.jpg',
    link: '/blog/plats-camerounais',
  },
  {
    id: 3,
    title: 'Les fêtes traditionnelles du Cameroun',
    description: 'Plongez dans les fêtes traditionnelles camerounaises, des célébrations colorées, pleines de musique, de danse et de rituels ancestraux.',
    image: '/images/fetes-camerounaises.jpg',
    link: '/blog/fetes-camerounaises',
  },
  {
    id: 4,
    title: 'Découverte du Mont Cameroun : Le sommet de l’Afrique centrale',
    description: 'Une aventure unique au sommet du Mont Cameroun, où l’histoire et la nature se rencontrent dans un spectacle incroyable.',
    image: '/images/mont-cameroun.jpg',
    link: '/blog/decouverte-mont-cameroun',
  },
  {
    id: 5,
    title: 'Visite des parcs nationaux du Cameroun : Une immersion dans la faune',
    description: 'Explorez la richesse de la faune camerounaise en visitant les parcs nationaux, un paradis pour les amoureux de la nature.',
    image: '/images/parc-national.jpg',
    link: '/blog/parcs-nationaux-cameroun',
  },
  {
    id: 6,
    title: 'Kribi : Une escapade au bord de la mer',
    description: 'Plongez dans la beauté des plages de Kribi, un lieu parfait pour se détendre et profiter des paysages magnifiques.',
    image: '/images/kribi.jpg',
    link: '/blog/escapade-kribi',
  },
  {
    id: 7,
    title: 'Voyager au Cameroun : 10 conseils pratiques pour les touristes',
    description: 'Voici des conseils pratiques pour rendre votre voyage au Cameroun agréable, de la sécurité aux astuces locales.',
    image: '/images/conseils-voyage.jpg',
    link: '/blog/conseils-voyage-cameroun',
  },
  // Ajoute plus d'articles si nécessaire
];

const articlesPerPage = 6;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculer les articles à afficher en fonction de la page actuelle
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = allArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(allArticles.length / articlesPerPage);

  // Fonction pour changer de page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="py-16 px-6 bg-gray-100 mt-6">
      <div className="max-w-6xl mx-auto">
        {/* Titre de la page */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Blog & Témoignages</h1>

        {/* Introduction */}
        <p className="text-lg text-gray-700 text-center mb-12">
          Explorez nos articles récents, les témoignages de voyageurs, ainsi que des conseils pratiques pour planifier votre voyage au Cameroun. Découvrez des récits inspirants et des astuces pour rendre votre expérience encore plus inoubliable.
        </p>

        {/* Liste des articles de blog */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentArticles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{article.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{article.description}</p>
                <Link href={article.link} className="text-blue-600 hover:text-blue-800 text-sm">
                {"Lire l'article"}
                  
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 text-white rounded-l-lg disabled:bg-gray-400"
          >
            Précédent
          </button>
          {/* Afficher les numéros de page */}
          {[...Array(totalPages).keys()].map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber + 1)}
              className={`px-4 py-2 border ${currentPage === pageNumber + 1 ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'} rounded-md mx-1`}
            >
              {pageNumber + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-600 text-white rounded-r-lg disabled:bg-gray-400"
          >
            Suivant
          </button>
        </div>
      </div>
    </section>
  );
}
