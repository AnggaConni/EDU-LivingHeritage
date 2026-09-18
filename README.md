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

## Phase 1 — Learning How to Live

The first learning layer moves beyond factual knowledge into everyday conduct and adaptive behavior.

### 1. Tepa Selira — Think Before You Speak

A Javanese cultural expression used here as a context for perspective-taking: before speaking or acting, consider what the other person may experience, need, afford, or find difficult. The module turns this into practical questions rather than abstract moralizing:

**What am I assuming? → What might be different for them? → Can I offer a choice? → What action preserves dignity?**

One recurring scenario is invitation and spending: having enough money yourself is not evidence that another person has the same resources or comfort level. The educational focus is consideration, not pity or mind-reading. A person’s constraints should be acknowledged without making them feel inferior.

### 2. Kōbō Fude o Erabazu — Learn to Use the Tool

The Japanese proverb **「弘法筆を選ばず」 (Kōbō fude o erabazu)** is commonly explained as the idea that a skilled person can work well without blaming the quality of the tool. See the Japanese dictionary reference at https://kotobank.jp/word/%E5%BC%98%E6%B3%95%E7%AD%86%E3%82%92%E9%81%B8%E3%81%B0%E3%81%9A-2236155 and the Kumano Fude Business Cooperative explanation at https://www.kumanofude.or.jp/quiz/quiz08-explanation/.

The module uses that proverb to teach adaptive agency:

**Observe constraints → learn the controls → change technique → continue.**

The lesson is deliberately not “tools never matter.” Historical commentary notes that Kūkai himself discussed choosing brushes carefully, so the educational interpretation is about adaptability rather than pretending all tools are equal. See Kotobank’s historical note on the expression: https://kotobank.jp/word/%E5%BC%98%E6%B3%95%E7%AD%86%E3%82%92%E9%81%B8%E3%81%B0%E3%81%9A-2236155.

This principle is applied beyond physical tools: motorcycles, kitchens, cameras, maps, spreadsheets, databases, code, AI systems, projects, teams, institutions, and unfamiliar problems.

**Adaptation also has a boundary:** when a limitation is genuinely unsafe, unfair, or structurally damaging, the appropriate response may be a better tool, additional resources, or a system-level change.

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

