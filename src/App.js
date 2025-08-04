// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [status, setStatus] = useState('');
  const [data, setData] = useState(null);

  const fetchWeeklyStats = async () => {
    try {
      const res = await fetch('/api/admin/statistics/weekly', {
        method: 'GET',
        credentials: 'include'      
      });
      setStatus(`✅ 상태 코드: ${res.status}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      setStatus(`❌ 에러: ${err.message}`);
      setData(null);
    }
  };

  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>주별 통계 API 테스트</h1>
      <button
        onClick={fetchWeeklyStats}
        style={{ padding: '0.5rem 1rem', marginBottom: '1rem' }}
      >
        GET /api/admin/statistics/weekly
      </button>
      <div>
        <p>{status}</p>
        {data && (
          <pre
            style={{
              textAlign: 'left',
              background: '#f6f6f6',
              padding: '1rem',
              borderRadius: '4px'
            }}
          >
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}

export default App;
