import React, { useState, useEffect } from 'react';

export default function PCMStatus() {
  // 模擬冷能剩餘百分比（初始為 75%）
  const [coolingPercent, setCoolingPercent] = useState(75);

  // 預冷完成時間（倒數秒數）
  const [preCoolingSeconds, setPreCoolingSeconds] = useState(300); // 5分鐘

  // 保溫效期倒數（秒）
  const [keepWarmSeconds, setKeepWarmSeconds] = useState(7200); // 2小時

  // 模組使用狀態
  const [moduleStatus, setModuleStatus] = useState('正常');

  useEffect(() => {
    const interval = setInterval(() => {
      setPreCoolingSeconds(prev => Math.max(prev - 1, 0));
      setKeepWarmSeconds(prev => Math.max(prev - 1, 0));
      setCoolingPercent(prev => (prev > 0 ? prev - 0.1 : 0));
    }, 1000);

    // 根據剩餘冷能更新狀態提醒
    if (coolingPercent < 20) {
      setModuleStatus('冷能不足，請注意更換');
    } else if (coolingPercent < 50) {
      setModuleStatus('冷能中等，建議注意');
    } else {
      setModuleStatus('正常');
    }

    return () => clearInterval(interval);
  }, [coolingPercent]);

  // 秒數轉換成 mm:ss 格式
  function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  return (
    <div style={pageStyle}>
      <h2>PCM 模組冷能狀態管理</h2>

      <div style={{ marginBottom: 20 }}>
        <strong>🧊 冷能剩餘百分比: </strong>
        <span>{coolingPercent.toFixed(1)}%</span>
        <div style={{
          height: 20,
          width: '100%',
          backgroundColor: '#ddd',
          borderRadius: 10,
          overflow: 'hidden',
          marginTop: 5,
        }}>
          <div style={{
            height: '100%',
            width: `${coolingPercent}%`,
            backgroundColor: coolingPercent > 50 ? '#0288d1' : (coolingPercent > 20 ? '#ffa726' : '#d32f2f'),
            transition: 'width 1s linear',
          }} />
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <strong>⏱️ 預冷完成時間倒數: </strong>
        <span>{formatTime(preCoolingSeconds)}</span>
      </div>

      <div style={{ marginBottom: 20 }}>
        <strong>⌛ 保溫效期倒數: </strong>
        <span>{formatTime(keepWarmSeconds)}</span>
      </div>

      <div>
        <strong>🔔 模組使用狀態標記與提醒: </strong>
        <span style={{ color: moduleStatus === '正常' ? 'green' : 'red' }}>{moduleStatus}</span>
      </div>
    </div>
  );
}

const pageStyle = {
  maxWidth: 600,
  margin: '20px auto',
  padding: 20,
  backgroundColor: '#f7f9fc',
  borderRadius: 8,
  boxShadow: '0 0 10px rgba(0,0,0,0.1)'
};
