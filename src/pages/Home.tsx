import React from "react";

const Home: React.FC = () => {
  return (
    <div className="home">
      <header>
        <h1>Bienvenidx a StoryWeave</h1>
      </header>

      <main>
        <section className="story-card">
          <h2>La sombra de Userhaus</h2>
          <p>
            En la sombría mansión de Userhaus, Armand, un erudito obsesionado con lo prohibido, invoca una sombra que lo persigue, reflejando su propia culpa y condena. La oscuridad, alimentada por su desesperación, espera eterna en los rincones de la mansión.</p>
        </section>
      </main>

      <footer>
        <p>
          &copy; 2025 StoryWeave</p>
      </footer>    
    </div>
  );
};

export default Home;
