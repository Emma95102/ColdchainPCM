import React from 'react';

export default function Reports() {
  return (
    <div style={pageStyle}>
      <h2>報表與追溯功能</h2>

      <section style={{ marginBottom: 20 }}>
        <h3>📅 每日出車模組配置紀錄</h3>
        <p>系統自動記錄每日模組出車配置，方便追蹤與管理。</p>
      </section>

      <section style={{ marginBottom: 20 }}>
        <h3>📉 冷能使用效能分析</h3>
        <p>分析冷能使用效率，找出節能優化空間。</p>
      </section>

      <section style={{ marginBottom: 20 }}>
        <h3>📈 月度模組使用與失效統計</h3>
        <p>月度統計模組使用狀況與失效情況，提升維護準確度。</p>
      </section>

      <section style={{ marginBottom: 20 }}>
        <h3>🌱 ESG 碳排放報告支援</h3>
        <p>提供環境、社會及治理（ESG）相關碳排放報告支援。</p>
      </section>

      <section>
        <h3>📜 冷鏈安全監管紀錄保存</h3>
        <p>完整保存冷鏈安全監管相關紀錄，確保合規性。</p>
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
