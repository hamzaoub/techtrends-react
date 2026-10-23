import { useState } from 'react';
import AjouterTechnologie from './components/AjouterTechnologie';
import CarteTechnologie from './components/CarteTechnologie';
import Header from './components/Header';
import ListePosts from './components/ListePosts';
import ListeTaches from './components/ListeTaches';
import Recherche from './components/Recherche';
import Video from './components/Video';
import { technologies } from './data/technologies';

const videos = [
  { id: 1, titre: 'Introduction à React', dureeEnSecondes: 210 },
  { id: 2, titre: 'Les composants et les props', dureeEnSecondes: 300 },
];

function App() {
  const [recherche, setRecherche] = useState('');
  const [triCroissant, setTriCroissant] = useState(true);

  const technologiesFiltrees = technologies.filter((tech) =>
    tech.nom.toLowerCase().includes(recherche.toLowerCase()),
  );

  const technologiesTriees = [...technologiesFiltrees].sort((a, b) =>
    triCroissant ? a.nom.localeCompare(b.nom) : b.nom.localeCompare(a.nom),
  );

  const nbCartes = technologiesTriees.length;

  return (
    <main>
      <Header
        titre="TechTrends — Galerie des tendances"
        phrase="Les technologies qui font le cours 420-TT4"
      />

      <Recherche valeur={recherche} onChange={setRecherche} />

      <button onClick={() => setTriCroissant(!triCroissant)}>
        Trier ({triCroissant ? 'A → Z' : 'Z → A'})
      </button>

      <p>{nbCartes} technologie(s) affichée(s)</p>

      <section>
        {nbCartes === 0 ? (
          <p>Aucune technologie trouvée.</p>
        ) : (
          technologiesTriees.map((tech) => (
            <CarteTechnologie key={tech.id} tech={tech} />
          ))
        )}
      </section>

      <section>
        <h2>Vidéos</h2>
        {videos.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </section>

      <section>
        <h2>Derniers articles</h2>
        <ListePosts />
      </section>

      <section>
        <h2>Liste de tâches</h2>
        <ListeTaches />
      </section>

      <section>
        <h2>Ajouter une technologie</h2>
        <AjouterTechnologie />
      </section>
    </main>
  );
}

export default App;
