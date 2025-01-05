import React, { useState } from "react";
import CreateStoryForm from "../components/CreateStoryForm/CreateStoryForm";
import "./Home.css"

const Home: React.FC = () => {

  const [stories, setStories] = useState<{ title: string, content: string, category: string }[]>([]);

  const handleCreateStory = (title: string, content: string, category: string) => {
    setStories([...stories, { title, content, category }]);
  }

  return (
    <div className="home">
      <header className="home-header">
        <h1 className="homepage-title">Bienvenidx a StoryWeave</h1>
      </header>

      <main className="home-main">

        <section className="create-story-section">
          <h2 className="create-story-title">Crea tu propia historia</h2>
          <CreateStoryForm onSubmit={handleCreateStory} />
        </section>

        <section className="stories-list-section">
          <h2 className="created-histories-title">Historias creadas:</h2>
          <ul className="stories-list">
            {stories.map((story, index) => (
              <li key={index} className="story-item">
                <h3 className="story-title">{story.title}</h3>
                <p className="story-content">{story.content}</p>
                <small className="story-category">{story.category}</small>
              </li>
            ))}
          </ul>
        </section>

        <section className="sample-story-section">
          <h2 className="sample-story-title">La sombra de Userhaus</h2>
          <p className="sample-story-content">
            En la sombría mansión de Userhaus, Armand, un erudito obsesionado con lo prohibido, invoca una sombra que lo persigue, reflejando su propia culpa y condena. La oscuridad, alimentada por su desesperación, espera eterna en los rincones de la mansión.
          </p>
        </section>
      </main>

      <footer className="home-footer">
        <p>&copy; 2025 StoryWeave</p>
      </footer>    
    </div>
  );
};

export default Home;
