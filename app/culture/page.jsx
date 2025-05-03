"use client";

import Image from "next/image";
import Link from "next/link";

export default function CultureAndNature() {
  return (
    <section className="pt-6 px-6 pb-16 bg-gray-100 ">
      <div className="max-w-6xl mx-auto">
        {/* Titre de la page */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Culture & Nature du Cameroun
        </h1>

        {/* Introduction générale */}
        <p className="text-lg text-gray-700 text-center mb-12">
          {
            "Le Cameroun est un véritable carrefour culturel et naturel de l'Afrique. Entre ses multiples ethnies, ses paysages variés et sa faune exceptionnelle, ce pays offre une expérience unique à ceux qui souhaitent découvrir l'Afrique sous toutes ses formes."
          }
        </p>

        {/* Section : Gastronomie */}
        <section className="mb-16">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Gastronomie Camerounaise
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                {
                  'La gastronomie camerounaise est un mélange riche de saveurs influencées par la diversité culturelle du pays. Chaque région possède ses spécialités, comme le "ndolé", "les achu", ou encore le "poulet DG". Les plats sont souvent accompagnés de sauces épicées et de légumes frais cultivés localement.'
                }
              </p>
              <Link
                href="/blog/plats-camerounais"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Découvrir nos recettes traditionnelles
              </Link>
            </div>
            <Image
              src="/imgs/ndole.jpg"
              alt="Plat de Ndolé"
              width={2000}
              height={2000}
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Section : Artisanat */}
        <section className="mb-16">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8">
            <Image
              src="/imgs/artisanat.jpg"
              alt="Sculpture artisanale"
              width={2000}
              height={2000}
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Artisanat Camerounais
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                {
                  "Le Cameroun est célèbre pour son artisanat traditionnel, notamment les sculptures sur bois, les textiles tissés à la main et les objets en cuivre. Ces créations artistiques sont le reflet des différentes cultures du pays, et chaque pièce raconte une histoire ou un mythe lié à la culture locale."
                }
              </p>
              <Link
                href="/blog/artisanat-camerounais"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                {"Explorer l'artisanat camerounais"}
              </Link>
            </div>
          </div>
        </section>

        {/* Section : Faune et flore */}
        <section className="mb-16">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Faune et Flore du Cameroun
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                {
                  "Le Cameroun possède une biodiversité impressionnante. On y trouve des parcs nationaux protégés, tels que le parc national de Waza ou le parc national de Lobéké, qui abritent des espèces rares comme les gorilles, les éléphants, et les chimpanzés. La flore du pays est tout aussi diversifiée, allant des forêts tropicales aux savanes."
                }
              </p>
              <Link
                href="/blog/faune-flore-cameroun"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                En savoir plus sur la faune et la flore
              </Link>
            </div>

            <Image
              src="/imgs/faune-flore.png"
              alt="Faune et flore camerounaises"
              width={2000}
              height={2000}
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Section : Fêtes et Traditions */}
        <section className="mb-16">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8">
            <Image
              src="/imgs/fete.jpg"
              alt="Fête traditionnelle au Cameroun"
              width={2000}
              height={2000}
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Fêtes et Traditions
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                {
                  'Le Cameroun est un pays de célébrations vibrantes. Des fêtes traditionnelles comme le "Ngondo" chez les peuples Sawa ou le "Fête des Masques" à Dschang témoignent de la richesse culturelle du pays. Les événements sont marqués par des danses, des chants et des rituels ancestraux.'
                }
              </p>
              <Link
                href="/blog/fetes-camerounaises"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                Découvrez les fêtes camerounaises
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
