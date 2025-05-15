import React, { useState, useEffect } from "react";

function App() {
  const [module, setModule] = useState({
    id: 1,
    name: "PCM Module 1",
    coldEnergyPercent: 75,
    preCoolingCompleteTs: Date.now() + 1000 * 60 * 5,
    keepWarmExpireTs: Date.now() + 1000 * 60 * 15,
    status: "使用中",
  });

  const [preCoolingCountdown, setPreCoolingCountdown] = useState("");
  const [keepWarmCountdown, setKeepWarmCountdown] = useState("");

  const getCountdownStr = (targetTs) => {
    const diff = targetTs - Date.now();
    if (diff <= 0) return "已完成";
    const minutes = Math.floor(diff / 1000 / 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setPreCoolingCountdown(getCountdownStr(module.preCoolingCompleteTs));
      setKeepWarmCountdown(getCountdownStr(module.keepWarmExpireTs));
    }, 1000);
    return () => clearInterval(timer);
  }, [module.preCoolingCompleteTs, module.keepWarmExpireTs]);

  useEffect(() => {
    const energyTimer = setInterval(() => {
      setModule((prev) => {
        const newPercent = Math.max(prev.coldEnergyPercent - 1, 0);
        return { ...prev, coldEnergyPercent: newPercent };
      });
    }, 5000);
    return () => clearInterval(energyTimer);
  }, []);

  useEffect(() => {
    if (module.preCoolingCompleteTs <= Date.now() && module.status !== "預冷完成") {
      setModule((prev) => ({ ...prev, status: "預冷完成" }));
    }
    if (module.keepWarmExpireTs <= Date.now() && module.status !== "保溫已過期") {
      setModule((prev) => ({ ...prev, status: "保溫已過期" }));
    }
  }, [preCoolingCountdown, keepWarmCountdown]);

  const resetModule = () => {
    const now = Date.now();
    setModule({
      id: 1,
      name: "PCM Module 1",
      coldEnergyPercent: 75,
      preCoolingCompleteTs: now + 1000 * 60 * 5,
      keepWarmExpireTs: now + 1000 * 60 * 15,
      status: "使用中",
    });
  };

  const lowEnergyWarning = module.coldEnergyPercent < 20;

  return (
    <div style={{ maxWidth: 400, margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2>{module.name}</h2>
      <p>
        冷能剩餘：<strong>{module.coldEnergyPercent}%</strong>{" "}
        {lowEnergyWarning && <span style={{ color: "red" }}>⚠️ 冷能過低</span>}
      </p>
      <p>預冷完成倒數：{preCoolingCountdown}</p>
      <p>保溫效期倒數：{keepWarmCountdown}</p>
      <p>
        模組狀態：<strong>{module.status}</strong>
      </p>
      <button onClick={resetModule}>重置模組</button>
    </div>
  );
}

export default App;
