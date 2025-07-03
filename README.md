# Smart Binning Dashboard

이 프로젝트는 React와 순수 CSS를 사용하여 3:2 비율의 "Smart Binning Dashboard" 레이아웃을 구현한 예시입니다. Chart.js를 기반으로 하며, 제공된 예시 데이터를 실제 데이터로 교체하여 실시간 대시보드로 활용할 수 있습니다.

## ✨ 주요 기능

-   **KPI 박스**: 총 생산량, 수율, 고수율/저수율 카운트 등 핵심 성과 지표를 표시합니다.
-   **산점도 (Scatter Plot)**: 저수율 및 고수율 데이터를 시각화합니다.
-   **임계값 기준 (Threshold Criteria)**: 특정 기준값을 표시합니다.
-   **특징 중요도 (Feature Importance)**: 다양한 특징(예: 온도, pH, 속도, 압력)의 중요도를 막대 그래프로 보여줍니다.
-   **시간 경과에 따른 수율 (Yield Over Time)**: 시간 흐름에 따른 수율 변화를 선 그래프로 나타냅니다.
-   **다운타임 이벤트 (Downtime Events)**: 다운타임 이벤트를 선 그래프로 표시합니다.
-   **센서 알림 (Sensor Alerts)**: 센서 알림 데이터를 막대 그래프로 보여줍니다.

## 🛠️ 사용된 기술

-   React
-   Chart.js
-   react-chartjs-2
-   순수 CSS (CSS Grid를 활용한 레이아웃)

## ⚙️ 환경 설정

### 1. Node.js 및 npm 설치

React 애플리케이션을 실행하려면 Node.js와 npm이 시스템에 설치되어 있어야 합니다. Node.js를 설치하면 npm도 함께 설치됩니다.

*   **설치 확인**: 터미널 또는 명령 프롬프트에서 다음 명령어를 실행하여 Node.js와 npm이 설치되어 있는지 확인할 수 있습니다.

    ```bash
    node -v
    npm -v
    ```

    버전 번호가 출력되면 설치되어 있는 것입니다.

*   **설치 방법**: 만약 설치되어 있지 않다면, [Node.js 공식 웹사이트](https://nodejs.org/en/download/)에서 운영체제에 맞는 설치 파일을 다운로드하여 설치하세요. LTS(Long Term Support) 버전을 권장합니다.

## 🚀 시작하기

이 프로젝트를 로컬 환경에서 실행하려면 다음 단계를 따르세요.

### 📦 의존성 설치

프로젝트 디렉토리로 이동하여 필요한 패키지를 설치합니다:

```bash
cd C:\Users\choho\sffront  # 프로젝트 폴더로 이동
npm install
```

### ▶️ 애플리케이션 실행

개발 서버를 시작합니다:

```bash
npm start
```

애플리케이션은 일반적으로 `http://localhost:3000`에서 실행됩니다.

## ⚙️ 데이터 연동

`src/Dashboard.jsx` 파일 내의 차트 데이터(`totalOutput`, `yieldRate`, `scatterData`, `lineData`, `barData` 등)는 예시 데이터입니다. 백엔드(Flask, FastAPI, Node.js 등)에서 실시간으로 데이터를 받아와 `state`로 관리하도록 교체하면 완전한 실시간 대시보드를 구축할 수 있습니다.

```jsx
// 예시 데이터 (원하는 실시간 데이터로 교체)
const totalOutput = 12540;
const yieldRate   = 83.7;
// ...

// 실시간 데이터 연동 예시 (가상의 API 호출)
// import React, { useState, useEffect } from 'react';
// ...
// export default function Dashboard() {
//   const [realtimeData, setRealtimeData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('/api/dashboard-data'); // 실제 API 엔드포인트로 변경
//       const data = await response.json();
//       setRealtimeData(data);
//     };

//     fetchData();
//     const interval = setInterval(fetchData, 5000); // 5초마다 데이터 업데이트
//     return () => clearInterval(interval);
//   }, []);

//   // realtimeData를 사용하여 차트 데이터 구성
//   const totalOutput = realtimeData.totalOutput || 0;
//   // ...
// }
```
