import React, { useState,useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import aiBuddy from './assets/aiBuddy.webp';
import jsPDF from 'jspdf';
import html2pdf from 'html2pdf.js';
import './App.css';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [response, setResponse] = useState('');
  const responseRef = useRef();
  const handleInputChange = (e) => {
    setPrompt(e.target.value);
    setResponse('');
    setError('');
  };

  const handleClick = async () => {
    if (!prompt.trim()) {
      setError('Please enter a valid academic problem.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const { data } = await axios.post('http://localhost:3000/ask/gemini/get-response', {
        userInput: prompt,
      });
      setResponse(data.geminiResponse);
    } catch (err) {
      console.error(err);
      setError('Oops! Something went wrong. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = () => {
  const element = responseRef.current;

  const options = {
    margin: 10,
    filename: 'ai-guidance.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(options).from(element).save();
};


  return (
    <main className="app-container">
      <h1>Your AI College Buddy 🎓</h1>

      <div className="input-section">
        <label htmlFor="prompt">Enter Your Academic Problem</label>
        <textarea
          id="prompt"
          name="prompt"
          placeholder="Write message to your buddy"
          value={prompt}
          onChange={handleInputChange}
        />
        <button onClick={handleClick} disabled={loading || !prompt.trim()}>
          {loading ? 'Thinking...' : 'Get Help'}
        </button>
      </div>

      <div className="response-section">
        {error && <h2 className="error">{error}</h2>}

        {loading && <h2>Figuring it out for you... 🤖</h2>}

        {!loading && response && (
          <div className="result">
            <div ref={responseRef}>
              <ReactMarkdown>{response}</ReactMarkdown>
            </div>
            <button onClick={downloadPDF}>📄 Download as PDF</button>
          </div>
        )}

        {!loading && !response && !error && (
          <div className="placeholder">
            <img src={aiBuddy} alt="AI College Buddy" width={300} />
          </div>
        )}
      </div>
    </main>
  );
};

export default App;
