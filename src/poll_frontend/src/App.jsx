import React, { useState, useEffect } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { poll_backend } from 'declarations/poll_backend';

function App() {
  const [sessionId, setSessionId] = useState('');
  const [userId, setUserId] = useState('');
  const [canvas, setCanvas] = useState(null);

  const createSession = async () => {
    const newSessionId = await poll_backend.createSession();
    setSessionId(newSessionId);
  };

  const joinSession = async (sessionId, userId) => {
    const success = await poll_backend.joinSession(sessionId, userId);
    if (success) {
      setSessionId(sessionId);
      setUserId(userId);
    } else {
      alert('Failed to join session');
    }
  };

  const saveDrawing = async () => {
    const drawing = canvas.getSaveData();
    const drawingData = drawing.split(',').map(Number); // Convert to list of 16-bit color values
    await poll_backend.updateDrawing(sessionId, userId, drawingData);
  };

  const fetchDrawing = async () => {
    const drawingData = await poll_backend.getDrawing(sessionId);
    if (drawingData && drawingData.length > 0) {
      const userDrawings = drawingData[0][1]; // Assuming single user for simplicity
      const drawingString = userDrawings.join(','); // Convert back to string format
      canvas.loadSaveData(drawingString, true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sessionId) {
        fetchDrawing();
      }
    }, 5000); // Fetch drawing data every 5 seconds

    return () => clearInterval(interval);
  }, [sessionId]);

  return (
    <div>
      <button onClick={createSession}>Create Session</button>
      <form onSubmit={(e) => { e.preventDefault(); joinSession(sessionId, userId); }}>
        <input type="text" placeholder="Session ID" value={sessionId} onChange={(e) => setSessionId(e.target.value)} />
        <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <button type="submit">Join Session</button>
      </form>
      <CanvasDraw ref={canvasDraw => setCanvas(canvasDraw)} onChange={saveDrawing} />
    </div>
  );
}

export default App;