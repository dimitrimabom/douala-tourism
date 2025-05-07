import Link from "next/link";
import { DM_Serif_Text } from "next/font/google";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

const dMSerifText = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
});

const destinations = [
  {
    id: "kribi",
    nom: "Kribi",
    image: "/imgs/Pirogue-des-pecheurs-8.jpg",
    description:
      "Station balnéaire populaire, connue pour ses plages de sable fin et les chutes de la Lobé se jetant directement dans l'océan Atlantique.",
    localisation: "Région du Sud, Cameroun",
    lien: "/destinations/kribi",
  },
  {
    id: "mont-cameroun",
    nom: "Mont Cameroun",
    image: "/imgs/Mont-Kamerun-slider.jpg",
    description:
      "Le plus haut sommet d'Afrique centrale, idéal pour les amateurs de randonnée et de trekking dans un paysage volcanique.",
    localisation: "Région du Sud-Ouest, Cameroun",
    lien: "/destinations/mont-cameroun",
  },
  {
    id: "rhumsiki",
    nom: "Rhumsiki",
    image:
      "/imgs/143039-region-de-l-extreme-nord-village-dans-les-monts-mandara.webp",
    description:
      "Village pittoresque niché dans les montagnes de Mandara, célèbre pour ses paysages lunaires et sa culture traditionnelle.",
    localisation: "Région de l'Extrême-Nord, Cameroun",
    lien: "/destinations/rhumsiki",
  },
];

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col">
      {/* Hero Banner */}
      <section className="relative w-full h-full py-64 bg-[url(/imgs/Momument-de-la-reunification.jpg)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="flex flex-col gap-6">
            <h1
              className={`${dMSerifText.className} text-4xl md:text-6xl font-bold mb-4`}
            >
              Découvrez le Cameroun, <br /> l’Afrique en miniature.
            </h1>
            <Link href="/destinations">
              <span className="inline-block bg-yellow-500 hover:bg-yellow-600 transition-all delay-150 text-white py-4 px-8 rounded-full text-xl">
                Explorer les destinations
              </span>
            </Link>
          </div>
        </div>
      </section>
      <Breadcrumb />

      {/* Destinations populaires */}
      <section className="w-full pb-10 px-4 bg-gray-100 flex items-center justify-center pt-6">
        <div className="max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-8">
            Destinations populaires
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={destination.image}
                  alt={destination.nom}
                  width={2000}
                  height={2000}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{destination.nom}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {destination.localisation}
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    {destination.description}
                  </p>
                  <Link href={destination.lien}>
                    <span className="text-blue-500 text-sm mt-2 inline-block hover:underline">
                      Voir plus
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/destinations">
              <span className="text-lg text-blue-600">
                Voir toutes les destinations
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Culture & Nature */}
      <section className=" pb-14 px-4 flex items-center justify-center  pt-12">
        <div className="max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-8">
            Culture & Nature
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col items-center justify-center md:items-start md:justify-start">
              <p className="text-lg text-gray-700 text-center md:text-left">
                Découvrez la richesse de la culture camerounaise à travers sa
                gastronomie, ses artisanats, et ses fêtes traditionnelles, sans
                oublier ses parcs naturels exceptionnels.
              </p>
              <Link href="/culture">
                <span className="inline-block bg-yellow-500 hover:bg-yellow-600 transition-all delay-150 text-white py-2 px-8 rounded-full text-lg mt-4">
                  Explorer la culture
                </span>
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/imgs/ekom-nkam-waterfalls.jpg"
                alt="Culture et nature"
                width={2000}
                height={2000}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog & Témoignages */}
      <section className=" py-20 px-6 md:px-4 bg-gray-100 w-full flex items-center justify-center">
        <div className="max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Blog & Témoignages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Mon road trip au Nord Cameroun
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Un voyage inoubliable à travers les paysages du Nord, entre
                savanes, traditions et découvertes humaines uniques...
              </p>
              <Link href="/blog/road-trip-nord-cameroun">
                <span className="text-blue-600 text-sm font-medium hover:underline">
                  {"Lire l'article →"}
                </span>
              </Link>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Top 5 des plats camerounais à goûter
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Découvrez les saveurs uniques du Cameroun à travers ses plats
                traditionnels emblématiques comme le ndolé, le poisson braisé,
                et plus encore...
              </p>
              <Link href="/blog/top-plats-camerounais">
                <span className="text-blue-600 text-sm font-medium hover:underline">
                  {"Lire l'article →"}
                </span>
              </Link>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Fête du Ngondo : entre tradition et spiritualité
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Plongez dans cette fête traditionnelle Sawa célébrée à Douala :
                rites, danses, symboles et héritage culturel...
              </p>
              <Link href="/blog/ngondo-tradition">
                <span className="text-blue-600 text-sm font-medium hover:underline">
                  {"Lire l'article →"}
                </span>
              </Link>
            </div>
          </div>

          {/* Lien vers tous les articles */}
          <div className="text-center mt-12">
            <Link href="/blog">
              <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-500 transition-colors">
                Voir tous les articles
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Appel à l'action */}
      {/* <section className="py-20 bg-yellow-500 text-white text-center flex items-center justify-center w-full">
        <div className="max-w-7xl">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4">
              Prêt à partir à l’aventure ?
            </h2>
            <p className="text-lg mb-8">
              Découvrez des paysages uniques, des cultures riches et une
              hospitalité chaleureuse. Le Cameroun vous attend !
            </p>
            <Link href="/planifier">
              <span className="inline-block bg-blue-700 hover:bg-blue-800 transition-colors duration-200 px-8 py-3 text-lg rounded-full font-semibold shadow-lg">
                Planifier votre voyage
              </span>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Carte du Cameroun integrer avec gg Map */}
      <div className="relative w-full h-[700px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5032521.198576119!2d9.520815177874155!3d7.304935996083318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613753703e0f21%3A0x2b03c44599829b53!2sCameroun!5e0!3m2!1sfr!2scm!4v1745030139426!5m2!1sfr!2scm"
          width="100%"
          height="100%"
          loading="lazy"
          className="border-0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
