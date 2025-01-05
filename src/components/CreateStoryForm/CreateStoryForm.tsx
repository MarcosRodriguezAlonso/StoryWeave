import React, { useState } from "react";
import "./CreateStoryForm.css"

interface CreateStoryFormProps {
  onSubmit: (title: string, content: string, category: string) => void;
}

const CreateStoryForm: React.FC<CreateStoryFormProps> = ({ onSubmit }) => {
  
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit(title, content, category);

    setTitle("");
    setContent("");
    setCategory("");

  };

  return (
    <form onSubmit={handleSubmit} className="create-story-form">
      <div>
        <label htmlFor="title">Título</label>
        <input 
          type="text" 
          id="title" 
          placeholder="Story title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Contenido</label>
        <textarea  
          id="content" 
          placeholder="Story content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Crear historia</button>
    </form>
  );
};

export default CreateStoryForm;
