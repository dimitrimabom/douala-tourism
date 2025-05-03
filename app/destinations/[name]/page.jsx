"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

const destinationDetails = {
  kribi: {
    title: "Kribi",
    description: "Plages paradisiaques et chutes d’eau à couper le souffle.",
    content:
      "Kribi est célèbre pour ses plages immaculées et les majestueuses chutes de la Lobé qui se jettent directement dans l’océan Atlantique. C’est l’endroit idéal pour se détendre, pratiquer des activités nautiques ou partir en excursion.",
    image: "/imgs/Pirogue-des-pecheurs-8.jpg",
  },
  "mont-cameroun": {
    title: "Mont Cameroun",
    description: "Ascension du plus grand sommet d’Afrique Centrale.",
    content:
      "L’ascension du Mont Cameroun est un défi incontournable pour les amoureux de la montagne et les aventuriers. Avec ses paysages variés, des forêts tropicales aux crêtes volcaniques, l’expérience est unique.",
    image: "/imgs/Mont-Kamerun-slider.jpg",
  },
  rhumsiki: {
    title: "Rhumsiki",
    description: "Un village fascinant au pied des montagnes volcaniques.",
    content:
      "Rhumsiki est un village de montagne célèbre pour ses formations géologiques spectaculaires. Les montagnes volcaniques de la région sont parmi les plus impressionnantes d’Afrique.",
    image:
      "/imgs/143039-region-de-l-extreme-nord-village-dans-les-monts-mandara.webp",
  },
};

export default function DestinationDetail() {
  const { name } = useParams();

  const destination = destinationDetails[name];

  if (!destination) {
    return <div>Destination non trouvée.</div>;
  }

  return (
    <section className="pt-6 px-6 pb-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <Image
          src={destination.image}
          alt={destination.title}
          width={2000}
          height={2000}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {destination.title}
        </h1>
        <p className="text-xl text-gray-600 mb-6">{destination.description}</p>
        <p className="text-lg text-gray-700">{destination.content}</p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23552.622529765446!2d9.900700739807858!3d2.9388867278370956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1062fd787fba5b3b%3A0x15523ec96fcf7000!2sKribi!5e0!3m2!1sfr!2scm!4v1746278801111!5m2!1sfr!2scm"
        width="100%"
        height="100%"
        loading="lazy"
        className="border-0"
      ></iframe>
    </section>
  );
}
