import React, { useState, useEffect } from 'react';

export default function Dispatch() {
  // 模擬配送任務輸入（簡單文字框）
  const [taskInput, setTaskInput] = useState('');

  // 根據任務推薦模組（簡單模擬）
  const [recommendedModule, setRecommendedModule] = useState('');

  // 模擬冷能剩餘百分比
  const [coolingPercent, setCoolingPercent] = useState(65);

  // 出車時間建議（分鐘）
  const [optimizedTime, setOptimizedTime] = useState(30);

  // 警示訊息
  const [alertMessage, setAlertMessage] = useState('');

  // 模擬根據任務輸入推薦模組
  useEffect(() => {
    if (taskInput.trim() === '') {
      setRecommendedModule('');
      setAlertMessage('');
      return;
    }

    // 模擬推薦邏輯
    if (taskInput.toLowerCase().includes('急件')) {
      setRecommendedModule('快速冷能模組 A');
    } else if (taskInput.toLowerCase().includes('長途')) {
      setRecommendedModule('長效冷能模組 B');
    } else {
      setRecommendedModule('標準冷能模組 C');
    }

    // 智能警示根據冷能百分比
    if (coolingPercent < 30) {
      setAlertMessage('⚠️ 冷能不足，請補充或更換模組');
    } else {
      setAlertMessage('');
    }

    // 出車時間最佳化（簡單模擬）
    if (taskInput.toLowerCase().includes('長途')) {
      setOptimizedTime(60);
    } else {
      setOptimizedTime(30);
    }
  }, [taskInput, coolingPercent]);

  // 模擬冷能隨時間減少
  useEffect(() => {
    const interval = setInterval(() => {
      setCoolingPercent(prev => (prev > 0 ? prev - 0.2 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={pageStyle}>
      <h2>出車建議與任務指派</h2>

      <div style={{ marginBottom: 20 }}>
        <label>
          📝 配送任務輸入：
          <input
            type="text"
            value={taskInput}
            onChange={e => setTaskInput(e.target.value)}
            placeholder="輸入任務描述，如「急件」或「長途」"
            style={inputStyle}
          />
        </label>
      </div>

      <div style={{ marginBottom: 20 }}>
        <strong>推薦模組：</strong> {recommendedModule || '尚無推薦'}
      </div>

      <div style={{ marginBottom: 20 }}>
        <strong>冷能剩餘百分比：</strong> {coolingPercent.toFixed(1)}%
      </div>

      {alertMessage && (
        <div style={{ color: 'red', marginBottom: 20, fontWeight: 'bold' }}>
          {alertMessage}
        </div>
      )}

      <div>
        <strong>出車時間最佳化建議：</strong> 約 {optimizedTime} 分鐘
      </div>

      <div style={{ marginTop: 12, fontStyle: 'italic', color: '#555' }}>
        📍 基於冷能與任務時長智能調度，無需 GPS
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
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  fontFamily: 'Arial, sans-serif',
};

const inputStyle = {
  marginLeft: 10,
  padding: 8,
  width: '70%',
  borderRadius: 4,
  border: '1px solid #ccc',
  fontSize: 16,
};
