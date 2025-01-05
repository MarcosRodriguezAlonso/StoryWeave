import React, { useState } from "react";
import CreateStoryForm from "../components/CreateStoryForm/CreateStoryForm";

const Home: React.FC = () => {

  const [stories, setStories] = useState<{ title: string, content: string, category: string }[]>([]);

  const handleCreateStory = (title: string, content: string, category: string) => {

    setStories([...stories, {title, content, category}]);
  }

  return (
    <div className="home">
      <header>
        <h1>Bienvenidx a StoryWeave</h1>
      </header>

      <main>

        <section className="create-story-form">
          <h2>Crea tu propia historia</h2>
          <CreateStoryForm onSubmit={handleCreateStory} />
        </section>

        <section className="stories-list">
          <h2>Historias creadas:</h2>
          <ul>
            {stories.map((story, index) => (
              <li key={index}>
                <h3>{story.title}</h3>
                <p>{story.content}</p>
                <small>{story.category}</small>
              </li>
            ))}
          </ul>
        </section>

        <section className="sample-card">
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
