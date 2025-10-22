<div align="center">

<img src="assets/favicon.png" width="120" alt="Skunkworks LearnSync Logo"/>

# 🧭 Skunkworks LearnSync Dashboard  
### Unified Analytics for Microsoft Learn • Credly • GitHub • LinkedIn

[![Status](https://img.shields.io/badge/status-active-success.svg)](https://skunkworks.africa)
[![Live Demo](https://img.shields.io/badge/view-online-blue.svg)](https://skunkworks-africa.github.io/learnsync-dashboard/)
[![License](https://img.shields.io/github/license/skunkworks-africa/learnsync-dashboard.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/skunkworks-africa/learnsync-dashboard?style=social)](https://github.com/skunkworks-africa/learnsync-dashboard)
[![Last Commit](https://img.shields.io/github/last-commit/skunkworks-africa/learnsync-dashboard?color=brightgreen)](https://github.com/skunkworks-africa/learnsync-dashboard/commits/main)
[![Code Quality](https://img.shields.io/badge/code_quality-A%2B-brightgreen)](#)
[![Made by Skunkworks](https://img.shields.io/badge/Made%20by-Skunkworks%20Africa-black.svg?logo=github)](https://skunkworks.africa)

</div>

---

## 📘 Overview

**Skunkworks LearnSync** is a unified analytics dashboard designed to evaluate learners, interns, and training participants by integrating data from multiple learning ecosystems:
- 🎓 **Microsoft Learn** — tracks modules, achievements, and certifications  
- 🏅 **Credly** — verifies badges and issuers  
- 🧠 **GitHub** — analyzes coding activity and contributions  
- 💼 **LinkedIn** — scores professional presence and engagement  

This tool was developed for **Skunkworks Africa’s training and mentorship programs** to provide insight into learner growth, engagement, and digital credibility in real-time.

---

## 🧩 Key Features

| Feature | Description |
|----------|-------------|
| 🔹 **Multi-Platform Integration** | Aggregates data from Microsoft Learn, Credly, and GitHub APIs. |
| 🔹 **LinkedIn Profile Scoring** | Rates profile completeness and engagement based on objective metrics. |
| 🔹 **Smart Dashboard** | Auto-calculates KPIs, charts, and readiness stages — no manual input. |
| 🔹 **Interactive Visuals** | Uses Chart.js to illustrate learning trajectories and contributions. |
| 🔹 **Offline Fallbacks** | Displays local data if API access is restricted or offline. |
| 🔹 **Mobile Responsive** | Collapsible sidebar and adaptive grid for all device sizes. |
| 🔹 **Print & Export** | One-click “Print Current” and “Print All” report generation. |

---

## 🛠️ Tech Stack

| Layer | Tools |
|-------|-------|
| **Frontend** | HTML5, CSS3 (modular, responsive), JavaScript (ES Modules) |
| **Charts** | [Chart.js](https://www.chartjs.org/) + [date-fns](https://date-fns.org/) |
| **Data Sources** | Credly API, Microsoft Learn API, GitHub Public API |
| **Hosting** | GitHub Pages |
| **Data Storage** | JSON-driven configuration (`data/profiles.json`) |

---

## 🗂️ File Structure

```plaintext
learnsync-dashboard/
│
├── index.html                # Main responsive dashboard
├── styles.css                # Modular responsive styling
├── scripts.js                # Core dashboard logic + data rendering
├── data/
│   └── profiles.json         # Learner profiles & LinkedIn scores
├── assets/
│   ├── favicon.png           # Logo / Branding icon
│   └── logo.svg              # Optional branding visual
└── README.md                 # Project documentation


⸻

🚀 Deployment

1️⃣ Clone or Fork the Repo

git clone https://github.com/skunkworks-africa/learnsync-dashboard.git
cd learnsync-dashboard

2️⃣ Run Locally

npx serve
# or
python3 -m http.server

Then open:
👉 http://localhost:5000 (or your port number)

3️⃣ Deploy via GitHub Pages
	•	Go to Settings → Pages
	•	Select branch: main, folder: / (root)
	•	Your dashboard will be live at:
https://skunkworks-africa.github.io/learnsync-dashboard/

⸻

🧭 How It Works
	1.	Select a learner from the sidebar (Hamzah, Khutjo, or Nokuthula).
	2.	The dashboard fetches live data from:
	•	Microsoft Learn (/api/learn/users/{user})
	•	Credly (/api/v1/users/{user}/badges)
	•	GitHub (/users/{user}/events/public)
	3.	If live data fails, fallback JSON values display.
	4.	Charts and KPIs update dynamically:
	•	Timeline Chart: cumulative achievements
	•	Issuer Pie Chart: badge sources
	•	GitHub Trends: activity types and frequency
	5.	LinkedIn Evaluation shows pre-calculated scores for each learner.
	6.	Print reports for individual learners or all combined.

⸻

📊 Evaluation Framework

Domain	Description	Weight
Technical Skills	APIs, coding, version control, cloud tools	25%
Project Execution	Agile delivery, documentation, accountability	25%
Collaboration & Comms	Peer teamwork, updates, clarity	20%
Security & Compliance	Data handling, code security	15%
Business Context	Strategic and user alignment	15%

Learner progression is categorized as:
	•	Explorer → Orientation and basic tasks
	•	Builder → Independent execution
	•	Integrator → Strategic contribution and mentoring

⸻

🧮 API Endpoints

Source	Endpoint	Description
Credly	https://www.credly.com/api/v1/users/{user}/badges	Badge metadata and issuer details
Microsoft Learn	https://learn.microsoft.com/api/learn/users/{user}	Training modules and completions
GitHub	https://api.github.com/users/{user}/events/public	User commits, PRs, issues, and events


⸻

🧱 Design Highlights
	•	🌙 Dark Theme with branded color variables
	•	📱 Mobile-First grid layout
	•	🖨️ Print Mode for exportable A4-friendly analytics
	•	💾 Offline Mode for demo and fallback datasets
	•	🧩 JSON-Driven Architecture for scalability (add more learners easily)

⸻

💡 Use Cases
	•	Skunkworks Academy learner evaluation
	•	Internship analytics dashboard
	•	AI-driven training analytics
	•	Corporate learning insight visualization
	•	Certification progress reports

⸻

🧑‍💻 Contributing

We welcome contributions from the Skunkworks community!

Fork, branch, and open a PR:

git checkout -b feature/add-new-learner
git commit -m "Added new learner data"
git push origin feature/add-new-learner

Naming convention:

feature/<functionality>
fix/<bug-description>
docs/<documentation-update>


⸻

📜 License

This project is licensed under the MIT License.
See the LICENSE file for details.

⸻


<div align="center">


💡 Developed with pride by Skunkworks Africa
Empowering digital transformation through AI, Cloud, and Training Innovation

🔗 Skunkworks Academy • Skunkworks Digital
📧 raydo@skunkworks.africa

⸻

#LearnSync • #SkunkworksAcademy • #AIinEducation • #AnalyticsDashboard

</div>
