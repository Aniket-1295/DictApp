import React, { useState } from 'react';

function XDictionary() {
  // Initialize the dictionary state
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');

  // Function to handle the search
  const handleSearch = () => {
    const foundEntry = dictionary.find(
      entry => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundEntry) {
      setDefinition(foundEntry.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        placeholder="Search for a word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <h2>Definition:</h2>
      <p>{definition}</p>
    </div>
  );
}

export default XDictionary;
