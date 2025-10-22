import { PROFILES, FALLBACK } from "./data/profiles.json";

// Sidebar toggle for mobile
document.addEventListener("click", e => {
  if (e.target.matches(".brand::after")) document.querySelector("aside").classList.toggle("open");
});

// Resize handler for charts and UI responsiveness
window.addEventListener("resize", () => {
  if (window.innerWidth < 980) document.querySelector("aside").classList.remove("open");
});

// Core functions like fetchCredly(), fetchLearn(), fetchGitHub(), drawCharts(), loadProfile()
// (copied from previous version but organized into named exports or IIFE modules)
