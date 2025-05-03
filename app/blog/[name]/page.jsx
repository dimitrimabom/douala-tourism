"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

const Articles = [
  {
    id: 1,
    title: "Mon road trip au Nord Cameroun",
    description:
      "Un voyage épique à travers le Nord du Cameroun, avec des paysages à couper le souffle, des rencontres inoubliables et des moments uniques à partager.",
    image: "/imgs/road-trip.png",
    link: "/blog/road-trip-nord-cameroun",
    content: `De Garoua à Maroua en passant par Poli et Mokolo, mon road trip à travers le Nord du Cameroun a été une succession de découvertes inattendues. J’ai exploré les paysages arides du Sahel, rencontré les peuples peuls et tchamba, assisté à des marchés colorés et goûté à des mets locaux comme le kilichi. Ce voyage a révélé un Cameroun authentique, où nature et culture se mêlent dans une harmonie surprenante.`,
  },
  {
    id: 2,
    title: "Top 5 des plats camerounais à goûter",
    description:
      "Découvrez les saveurs authentiques du Cameroun à travers ses plats incontournables. Un voyage culinaire qui ravira vos papilles !",
    image: "/imgs/plats-camerounais.jpg",
    link: "/blog/plats-camerounais",
    content: `La cuisine camerounaise est un véritable festin pour les sens. Parmi les incontournables : le Ndolé, plat à base de feuilles amères et de pâte d’arachide ; le Poulet DG, savoureux mélange de poulet frit et de plantains mûrs ; le Koki, gâteau de haricots très prisé à l’ouest ; le Eru, spécialité du Sud-Ouest à base de légumes et de viande fumée ; et enfin le Poisson braisé, incontournable des soirées conviviales à Douala ou Kribi.`,
  },
  {
    id: 3,
    title: "Les fêtes traditionnelles du Cameroun",
    description:
      "Plongez dans les fêtes traditionnelles camerounaises, des célébrations colorées, pleines de musique, de danse et de rituels ancestraux.",
    image: "/imgs/fete.jpg",
    link: "/blog/fetes-camerounaises",
    content:
      "Voici le contenu détaillé de l'article sur les fêtes traditionnelles.",
  },
  {
    id: 4,
    title: "Découverte du Mont Cameroun : Le sommet de l’Afrique centrale",
    description:
      "Une aventure unique au sommet du Mont Cameroun, où l’histoire et la nature se rencontrent dans un spectacle incroyable.",
    image: "/imgs/mont-cameroun.jpg",
    link: "/blog/decouverte-mont-cameroun",
    content: `Le Cameroun vibre toute l’année au rythme de fêtes traditionnelles. Le Ngondo chez les Sawa, célébration spirituelle sur les rives du Wouri ; la fête du Nguon chez les Bamoun, qui mêle royauté et symbolisme ancestral ; ou encore le Nyem-Nyem dans l’Adamaoua, rendant hommage aux résistances historiques. Ces fêtes sont des moments de partage culturel où les traditions, les danses, les costumes et les croyances sont à l’honneur.`,
  },
  {
    id: 5,
    title:
      "Visite des parcs nationaux du Cameroun : Une immersion dans la faune",
    description:
      "Explorez la richesse de la faune camerounaise en visitant les parcs nationaux, un paradis pour les amoureux de la nature.",
    image: "/imgs/parc-national.jpg",
    link: "/blog/parcs-nationaux-cameroun",
    content: `Le Cameroun compte plus de 20 parcs et réserves naturelles. Le parc de Waza, au Nord, est un joyau de la savane où vivent éléphants, girafes, lions et antilopes. Dans le parc de Lobéké, en pleine forêt équatoriale, on peut observer des gorilles et des éléphants de forêt. Le parc de Korup abrite quant à lui des plantes médicinales rares et des espèces endémiques. Un paradis pour les éco-touristes et les photographes animaliers.`,
  },
  {
    id: 6,
    title: "Kribi : Une escapade au bord de la mer",
    description:
      "Plongez dans la beauté des plages de Kribi, un lieu parfait pour se détendre et profiter des paysages magnifiques.",
    image: "/imgs/kribi.webp",
    link: "/blog/escapade-kribi",
    content: `Kribi, surnommée la perle de l’Atlantique, est la destination balnéaire par excellence. Ses plages de sable doré bordées de cocotiers invitent à la détente. À quelques kilomètres se trouvent les impressionnantes chutes de la Lobé, uniques au monde pour se jeter directement dans la mer. Kribi offre aussi une gastronomie marine fraîche et savoureuse, ainsi que des excursions vers les villages pygmées ou les mangroves en pirogue.`,
  },
  {
    id: 7,
    title: "Voyager au Cameroun : 10 conseils pratiques pour les touristes",
    description:
      "Voici des conseils pratiques pour rendre votre voyage au Cameroun agréable, de la sécurité aux astuces locales.",
    image: "/imgs/conseils-voyage.webp",
    link: "/blog/conseils-voyage-cameroun",
    content: `1. Obtenez votre visa à l’avance. 2. Prévoyez une assurance santé internationale. 3. Évitez l’eau du robinet. 4. Utilisez des taxis officiels ou des VTC. 5. Informez-vous sur les régions à éviter (surtout proche des zones de conflit). 6. Ayez toujours du cash (le paiement mobile n’est pas généralisé). 7. Apprenez quelques mots de français ou d’anglais. 8. Respectez les cultures locales. 9. Prévoyez un adaptateur de prise. 10. N’oubliez pas un anti-moustique puissant.`,
  },
  {
    id: 8,
    title: "L'artisanat camerounais : entre tradition et créativité",
    description:
      "Découvrez la richesse de l’artisanat camerounais, où savoir-faire ancestral et expression moderne se rencontrent à travers des objets uniques.",
    image: "/imgs/artisanat.jpg",
    link: "/blog/artisanat-camerounais",
    content: `L’artisanat au Cameroun est le reflet d’une culture vivante et diversifiée. Du nord au sud, les artisans perpétuent des techniques anciennes dans le travail du bois, du cuir, des perles ou de l’argile. À Foumban, ville emblématique de l’art royal bamoun, on trouve des sculptures, masques et trônes richement décorés. À l’ouest, les tissus ndop aux motifs symboliques sont tissés à la main pour des cérémonies traditionnelles. Dans les grandes villes comme Douala ou Yaoundé, de jeunes créateurs réinventent cet héritage avec des pièces contemporaines : bijoux, vêtements, décoration. Que ce soit dans les marchés ou les galeries, l’artisanat camerounais est un trésor à découvrir.`,
  },
  {
    id: 9,
    title: "Faune et flore du Cameroun : une biodiversité exceptionnelle",
    description:
      "Explorez la richesse naturelle du Cameroun, un pays où savane, forêt et montagne abritent une incroyable variété d’espèces animales et végétales.",
    image: "/imgs/faune-flore.png",
    link: "/blog/faune-flore-cameroun",
    content: `Le Cameroun est souvent surnommé « l’Afrique en miniature » en raison de sa diversité écologique. Des forêts équatoriales du Sud aux savanes du Nord, en passant par les hauts plateaux de l’Ouest, le pays offre une mosaïque de paysages abritant une biodiversité impressionnante. On y trouve plus de 900 espèces d’oiseaux, des gorilles, chimpanzés, éléphants, panthères, buffles et hippopotames. La flore n’est pas en reste : figuiers géants, raffias, palmiers, lianes médicinales et essences rares composent les forêts denses. Le Cameroun est un véritable sanctuaire naturel, protégé par plusieurs parcs nationaux et réserves, à découvrir avec respect et émerveillement.`,
  },
];

export default function DestinationDetail() {
  const { name } = useParams();

  const article = Articles.find((article) => article.link === `/blog/${name}`);

  if (!article) {
    return <div>Article non trouvé.</div>;
  }

  return (
    <section className="bg-white pt-6 px-6 pb-16">
      <div className="max-w-4xl mx-auto">
        <Image
          src={article.image}
          alt={article.title}
          width={2000}
          height={2000}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {article.title}
        </h1>
        <p className="text-xl text-gray-600 mb-6">{article.description}</p>
        <p className="text-lg text-gray-700">{article.content}</p>
      </div>
    </section>
  );
}
