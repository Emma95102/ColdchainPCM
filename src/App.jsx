import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ maxWidth: 600, margin: '20px auto', padding: 20 }}>
      <h1>冷鏈管理系統</h1>
      <nav>
        <ul style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          padding: 0,
          listStyle: 'none'
        }}>
          <li style={buttonStyle}><Link to="/pcm-status" style={linkStyle}>PCM 模組冷能狀態管理</Link></li>
          <li style={buttonStyle}><Link to="/dispatch" style={linkStyle}>出車建議與任務指派</Link></li>
          <li style={buttonStyle}><Link to="/inventory" style={linkStyle}>模組庫存與輪替管理</Link></li>
          <li style={buttonStyle}><Link to="/anomaly" style={linkStyle}>異常紀錄與冷能失效回報</Link></li>
          <li style={buttonStyle}><Link to="/reports" style={linkStyle}>報表與追溯功能</Link></li>
        </ul>
      </nav>
    </div>
  );
}

function PCMStatus() {
  return (
    <div style={pageStyle}>
      <h2>PCM 模組冷能狀態管理</h2>
      <ul>
        <li>🧊 冷能剩餘百分比即時顯示</li>
        <li>⏱️ 預冷完成時間紀錄</li>
        <li>⌛ 保溫效期倒數計時</li>
        <li>🔔 模組使用狀態標記與提醒</li>
      </ul>
    </div>
  );
}

function Dispatch() {
  return (
    <div style={pageStyle}>
      <h2>出車建議與任務指派</h2>
      <ul>
        <li>📝 根據配送任務輸入自動推薦模組</li>
        <li>⚠️ 冷能不足智能警示</li>
        <li>🕒 出車時間最佳化建議</li>
        <li>📍 無需 GPS，基於冷能與任務時長智能調度</li>
      </ul>
    </div>
  );
}

function Inventory() {
  return (
    <div style={pageStyle}>
      <h2>模組庫存與輪替管理</h2>
      <ul>
        <li>📊 模組可用數量實時統計</li>
        <li>🔄 預冷進度標示</li>
        <li>📈 模組使用次數與壽命管理</li>
        <li>📱 QR Code掃碼管理</li>
      </ul>
    </div>
  );
}

function Anomaly() {
  return (
    <div style={pageStyle}>
      <h2>異常紀錄與冷能失效回報</h2>
      <ul>
        <li>⚠️ 開箱時間過長失溫記錄</li>
        <li>🚨 模組提前失效警示</li>
        <li>📊 異常數據分析與回訓練</li>
        <li>🛠️ 路線與操作流程調整建議</li>
      </ul>
    </div>
  );
}

function Reports() {
  return (
    <div style={pageStyle}>
      <h2>報表與追溯功能</h2>
      <ul>
        <li>📅 每日出車模組配置紀錄</li>
        <li>📉 冷能使用效能分析</li>
        <li>📈 月度模組使用與失效統計</li>
        <li>🌱 ESG 碳排放報告支援</li>
        <li>📜 冷鏈安全監管紀錄保存</li>
      </ul>
    </div>
  );
}

const buttonStyle = {
  flex: '1 1 180px',
  backgroundColor: '#0288d1',
  color: 'white',
  padding: '15px 12px',
  borderRadius: 8,
  textAlign: 'center',
  fontWeight: 'bold',
  cursor: 'pointer',
  userSelect: 'none'
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  display: 'block'
};

const pageStyle = {
  maxWidth: 600,
  margin: '20px auto',
  padding: 20,
  backgroundColor: '#f7f9fc',
  borderRadius: 8,
  boxShadow: '0 0 10px rgba(0,0,0,0.1)'
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pcm-status" element={<PCMStatus />} />
        <Route path="/dispatch" element={<Dispatch />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/anomaly" element={<Anomaly />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
}
