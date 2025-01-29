import React, { useState } from 'react';
import { poll_backend } from 'declarations/poll_backend';

function LivePolling() {
  const [sessionId, setSessionId] = useState('');
  const [userId, setUserId] = useState('');

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

  return (
    <div>
      <button onClick={createSession}>Create Session</button>
      <form onSubmit={(e) => { e.preventDefault(); joinSession(sessionId, userId); }}>
        <input type="text" placeholder="Session ID" value={sessionId} onChange={(e) => setSessionId(e.target.value)} />
        <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <button type="submit">Join Session</button>
      </form>
    </div>
  );
}

export default LivePolling;