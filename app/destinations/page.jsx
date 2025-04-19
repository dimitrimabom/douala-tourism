'use client';

import Link from 'next/link';
import { useState } from 'react';

const destinations = [
    {
        "id": "kribi",
        "nom": "Kribi",
        "image": "/imgs/Pirogue-des-pecheurs-8.jpg",
        "description": "Station balnéaire populaire, connue pour ses plages de sable fin et les chutes de la Lobé se jetant directement dans l'océan Atlantique.",
        "localisation": "Région du Sud, Cameroun",
        "lien": "/destinations/kribi",
        category: 'Plages',
    },
    {
        "id": "mont-cameroun",
        "nom": "Mont Cameroun",
        "image": "/imgs/Mont-Kamerun-slider.jpg",
        "description": "Le plus haut sommet d'Afrique centrale, idéal pour les amateurs de randonnée et de trekking dans un paysage volcanique.",
        "localisation": "Région du Sud-Ouest, Cameroun",
        "lien": "/destinations/mont-cameroun",
        category: 'Aventure',
    },
    {
        "id": "rhumsiki",
        "nom": "Rhumsiki",
        "image": "/imgs/143039-region-de-l-extreme-nord-village-dans-les-monts-mandara.webp",
        "description": "Village pittoresque niché dans les montagnes de Mandara, célèbre pour ses paysages lunaires et sa culture traditionnelle.",
        "localisation": "Région de l'Extrême-Nord, Cameroun",
        "lien": "/destinations/rhumsiki",
        category: 'Nature',
    }

];

const categories = ['Toutes', 'Plages', 'Aventure', 'Nature'];

export default function Destinations() {
    const [selectedCategory, setSelectedCategory] = useState('Toutes');

    // Filtrer les destinations par catégorie
    const filteredDestinations = destinations.filter(
        (destination) =>
            selectedCategory === 'Toutes' || destination.category === selectedCategory
    );

    return (
        <section className="py-16 px-6 bg-gray-100 mt-10">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
                Nos Destinations
            </h1>

            {/* Filtres de catégorie */}
            <div className="text-center mb-8">
                <div className="inline-flex gap-6">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`${selectedCategory === category
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-600'
                                } text-lg font-semibold hover:text-blue-600 transition-colors`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Liste des destinations */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {filteredDestinations.map((destination) => (
                    <div key={destination.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src={destination.image} alt={destination.nom} className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{destination.nom}</h3>
                            <p className="text-sm text-gray-700 mt-2">{destination.description}</p>
                            <p className="text-xs text-gray-500 mt-1">{destination.localisation}</p>
                            <Link href={destination.lien}>
                                <span className="text-blue-500 text-sm mt-2 inline-block hover:underline">Voir plus</span>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
