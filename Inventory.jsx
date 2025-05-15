import React, { useState, useEffect } from 'react';

export default function Inventory() {
  // 模組可用數量 (模擬初始值)
  const [availableModules, setAvailableModules] = useState(120);

  // 預冷進度百分比 (模擬)
  const [preCoolingProgress, setPreCoolingProgress] = useState(40);

  // 模組使用次數與壽命管理 (模擬數據)
  const [usageData, setUsageData] = useState([
    { id: 'A001', usageCount: 15, lifespan: 50 },
    { id: 'A002', usageCount: 40, lifespan: 50 },
    { id: 'A003', usageCount: 10, lifespan: 50 },
  ]);

  // 模擬預冷進度每秒增加
  useEffect(() => {
    const interval = setInterval(() => {
      setPreCoolingProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 模擬 QR Code 掃碼管理 (簡單展示掃描結果)
  const [scanResult, setScanResult] = useState('');

  function simulateScan() {
    // 模擬掃描到某模組ID
    const scannedId = 'A00' + Math.floor(Math.random() * 10 + 1);
    setScanResult(`掃描到模組 ID: ${scannedId}`);
  }

  return (
    <div style={pageStyle}>
      <h2>模組庫存與輪替管理</h2>

      <div style={{ marginBottom: 20 }}>
        <strong>📊 模組可用數量：</strong> {availableModules}
      </div>

      <div style={{ marginBottom: 20 }}>
        <strong>🔄 預冷進度標示：</strong>
        <div style={progressBarBackground}>
          <div style={{ ...progressBarFill, width: `${preCoolingProgress}%` }} />
        </div>
        <span>{preCoolingProgress}%</span>
      </div>

      <div style={{ marginBottom: 20 }}>
        <strong>📈 模組使用次數與壽命管理：</strong>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>模組ID</th>
              <th>使用次數</th>
              <th>壽命</th>
              <th>狀態</th>
            </tr>
          </thead>
          <tbody>
            {usageData.map(({ id, usageCount, lifespan }) => {
              const usagePercent = (usageCount / lifespan) * 100;
              let status = '正常';
              if (usagePercent > 80) status = '接近壽命末期';
              else if (usagePercent > 50) status = '注意使用';

              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{usageCount}</td>
                  <td>{lifespan}</td>
                  <td style={{ color: status === '正常' ? 'green' : 'orange' }}>{status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div>
        <strong>📱 QR Code掃碼管理：</strong>
        <button onClick={simulateScan} style={buttonStyle}>模擬掃描</button>
        <div style={{ marginTop: 10 }}>{scanResult}</div>
      </div>
    </div>
  );
}

const pageStyle = {
  maxWidth: 700,
  margin: '20px auto',
  padding: 20,
  backgroundColor: '#f7f9fc',
  borderRadius: 8,
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  fontFamily: 'Arial, sans-serif',
};

const progressBarBackground = {
  width: '100%',
  height: 20,
  backgroundColor: '#ddd',
  borderRadius: 10,
  overflow: 'hidden',
  marginTop: 5,
  marginBottom: 5,
};

const progressBarFill = {
  height: '100%',
  backgroundColor: '#0288d1',
  transition: 'width 0.3s ease',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

const buttonStyle = {
  padding: '10px 15px',
  backgroundColor: '#0288d1',
  color: 'white',
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
};
