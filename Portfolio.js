import React from 'react';
const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px',
  width: '300px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};
const imgStyle = {
  width: '100%',
  borderRadius: '4px',
};
function App() {
return (
    <div className="App">
      <div style={cardStyle}>
        <img
          src="project-image.jpg"
          alt="Project"
          style={imgStyle}
        />
        <h2>My Portfolio</h2>
        <p>This is the task provided to create a card in my portfolio page so I have created a card named portfolio using react. I have created a react app using the framework.</p>
      </div>
    </div>
  );
}
export default App;
