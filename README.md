# Living Heritage in Education

![Platform](https://img.shields.io/badge/platform-Web%20%7C%20PWA-success.svg)
![Language](https://img.shields.io/badge/interface-English-blue.svg)
![Stack](https://img.shields.io/badge/stack-Vanilla%20JS%20%7C%20TailwindCSS-orange.svg)

**Living Heritage in Education** is a modular, browser-based learning environment designed to connect observation, experimentation, science, and social learning with living heritage.

The current application contains interactive learning modules for mathematics, physics, biology, chemistry, climate and environment, geography, sensors, mapping, camera-based measurement, and AR-capable workflows. The architecture is intentionally modular so living heritage contexts and ICH-based learning activities can be added without replacing the core learning engine.

🌍 **Live Demo:** https://anggaconni.github.io/EDU-LivingHeritage/

## Learning approach

The platform is built around an inquiry loop:

**Ask → Predict → Calculate → Simulate → Measure → Compare → Reflect**

The goal is not only to provide answers, but to help learners connect concepts with observable phenomena, measurements, experiments, and real-world contexts.

A future ICH layer can use the same structure to connect living heritage with academic concepts—for example, a gong with acoustics and wave physics, or *tepa slira* with social science, empathy, and interpersonal relationships.

## Current capabilities

- Interactive calculators and formula engines
- Physics simulations and graphing
- Statistics and regression
- Camera-based measurement workflows
- Device sensor experiments
- Interactive maps and Haversine distance measurement
- AR / WebXR capability detection with fallbacks
- CSV / JSON experiment data export
- Progressive Web App support
- Offline-first caching through a service worker

## Architecture

The project is intentionally lightweight and serverless:

- HTML5
- Vanilla JavaScript
- Tailwind CSS
- Leaflet
- Chart.js
- Web APIs for camera, motion, orientation, microphone, geolocation, and WebXR
- GitHub Pages for deployment

The module registry separates **what learners study** from **how the application calculates, simulates, measures, or visualizes it**. This makes it possible to add new heritage-learning modules as structured content rather than redesigning the application.

## Repository structure

- `index.html` — application, module registry, learning content, renderers, and interaction logic
- `manifest.json` — PWA metadata
- `sw.js` — service worker and offline cache
- `icon-192.png` / `icon-512.png` — application icons
- `thumbnail.png` — social / preview image
- `thum/` — module supporting images

## Deployment

The application is designed for GitHub Pages and is configured for:

https://anggaconni.github.io/EDU-LivingHeritage/

Because camera, sensors, geolocation, and WebXR require secure browser contexts, use the deployed HTTPS version or a local HTTPS-capable development environment when testing hardware features.

## Status

The LMS interface and public-facing metadata are now in English. The current science-learning modules remain available as the technical learning foundation.

The next development layer is the integration of **Intangible Cultural Heritage (ICH)** and **living heritage-based learning**, including cross-disciplinary examples such as:

**Living Heritage → Observation / Practice → Academic Concept → Experiment / Inquiry → Reflection → Contemporary Application**

