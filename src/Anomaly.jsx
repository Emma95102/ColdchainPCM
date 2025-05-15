import React, { useState, useEffect } from 'react';

export default function Anomaly() {
  // 模擬異常紀錄資料
  const [anomalies, setAnomalies] = useState([
    { id: 1, type: '開箱時間過長', detail: '模組A001開箱超過15分鐘', timestamp: '2025-05-10 14:23' },
    { id: 2, type: '模組提前失效', detail: '模組A003冷能失效提早報警', timestamp: '2025-05-12 09:15' },
    { id: 3, type: '數據異常', detail: '溫度感測器數據異常跳動', timestamp: '2025-05-14 11:42' },
  ]);

  // 模擬異常數據分析結果
  const [analysisResult, setAnalysisResult] = useState('異常數據顯示近期開箱時間過長為主要問題，建議優化包裝流程。');

  // 模擬回訓練狀態
  const [retrainingStatus, setRetrainingStatus] = useState('機器學習模型正在更新中...');

  // 模擬路線與流程調整建議
  const [suggestions, setSuggestions] = useState([
    '縮短開箱作業時間',
    '加強冷能監控預警',
    '優化配送路線安排',
  ]);

  // 模擬更新回訓練與建議（每10秒）
  useEffect(() => {
    const interval = setInterval(() => {
      setRetrainingStatus('模型已更新，準備部署新版本');
      setSuggestions(prev => [...prev, '增加人員培訓']);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={pageStyle}>
      <h2>異常紀錄與冷能失效回報</h2>

      <section style={{ marginBottom: 20 }}>
        <h3>⚠️ 異常紀錄</h3>
        <ul>
          {anomalies.map(({ id, type, detail, timestamp }) => (
            <li key={id}>
              <strong>{type}</strong>：{detail} （時間：{timestamp}）
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: 20 }}>
        <h3>📊 異常數據分析</h3>
        <p>{analysisResult}</p>
      </section>

      <section style={{ marginBottom: 20 }}>
        <h3>🚨 冷能失效回訓練狀態</h3>
        <p>{retrainingStatus}</p>
      </section>

      <section>
        <h3>🛠️ 路線與操作流程調整建議</h3>
        <ol>
          {suggestions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </section>
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
