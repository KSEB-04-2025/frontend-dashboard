import React from 'react';
import './Dashboard.css';
import { Line, Scatter, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

/** ───────────────── KPI 박스 ───────────────── */
const KPI = ({ label, value }) => (
  <div className="kpi">
    <span className="kpi-label">{label}</span>
    <span className="kpi-value">{value}</span>
  </div>
);

/** ───────────────── 대시보드 ───────────────── */
export default function Dashboard() {
  // ── 예시 데이터 (원하는 실시간 데이터로 교체) ──
  const totalOutput = 12540;
  const yieldRate   = 83.7;
  const highCount   = 10495;
  const lowCount    = 2045;

  const scatterData = {
    datasets: [
      {
        label: 'Low-Yield',
        data : Array.from({ length: 30 }, () => ({
          x: 6 + Math.random() * 4,
          y: 30 + Math.random() * 40,
        })),
        backgroundColor: '#e63946',
      },
      {
        label: 'High-Yield',
        data : Array.from({ length: 30 }, () => ({
          x: 10 + Math.random() * 4,
          y: 40 + Math.random() * 60,
        })),
        backgroundColor: '#2a9d8f',
      },
    ],
  };

  const lineData = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        data: Array.from({ length: 30 }, () => 60 + Math.random() * 30),
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const barData = {
    labels: ['T°', 'pH', 'Speed', 'Pressure'],
    datasets: [
      { label: 'Importance', data: [80, 60, 40, 35], backgroundColor: '#457b9d' },
    ],
  };

  return (
    <div className="dashboard">
      {/* ── 상단 KPI 4개 ── */}
      <KPI label="Total Output"   value={totalOutput.toLocaleString()} />
      <KPI label="Yield Rate"     value={`${yieldRate}%`} />
      <KPI label="High-Yield"     value={highCount.toLocaleString()} />
      <KPI label="Low-Yield"      value={lowCount.toLocaleString()} />

      {/* ── 중앙 Scatter Plot ── */}
      <div className="card scatter">
        <h3>Low-Yield / High-Yield</h3>
        <Scatter data={scatterData} options={{ plugins: { legend: { display: false } } }} />
      </div>

      {/* ── Threshold Criteria ── */}
      <div className="card criteria">
        <h3>Threshold Criteria</h3>
        <ul>
          <li>CE &gt; 80</li>
          <li>EQE &gt; 10 %</li>
        </ul>
      </div>

      {/* ── Feature Importance ── */}
      <div className="card feature">
        <h3>Feature Importance</h3>
        <Bar data={barData} options={{ plugins: { legend: { display: false } } }} />
      </div>

      {/* ── Yield Over Time ── */}
      <div className="card yield">
        <h3>Yield Over Time</h3>
        <Line data={lineData} options={{ plugins: { legend: { display: false } } }} />
      </div>

      {/* ── Downtime Events ── */}
      <div className="card downtime">
        <h3>Downtime Events</h3>
        <Line data={lineData} options={{ plugins: { legend: { display: false } } }} />
      </div>

      {/* ── Sensor Alerts ── */}
      <div className="card sensor">
        <h3>Sensor Alerts</h3>
        <Bar data={barData} options={{ plugins: { legend: { display: false } } }} />
      </div>
    </div>
  );
}