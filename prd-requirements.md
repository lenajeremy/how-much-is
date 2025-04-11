# Product Requirements Document: Market Price Watch (Nigeria)

* **Version:** 1.0
* **Date:** April 11, 2025
* **Status:** Draft
* **Author:** Gemini AI (based on user request)
* **Context:** Prices reflect the Nigerian market; the target audience is primarily Nigerian consumers.

## 1. Introduction

Market Price Watch is a web-based application designed to crowdsource and display the current prices of common food items found in markets across Nigeria. The primary problem this product addresses is the lack of accessible, up-to-date, and location-specific price information for everyday consumers, making budgeting and shopping challenging. By allowing users to anonymously share price data, the platform aims to foster price transparency, empower consumers to make informed decisions, and create a valuable dataset reflecting the cost of living.

## 2. Goals & Objectives

* **Primary Goal:** Provide Nigerian consumers with a simple platform to anonymously submit and view current prices of essential food items from various markets.
* **Objective 1:** Achieve 1000+ price submissions per week across all major tracked items within 3 months post-launch.
* **Objective 2:** Provide price data coverage for at least 20 major cities/towns across all 6 geopolitical zones within 3 months post-launch.
* **Objective 3:** Become a commonly referenced source for indicative market prices among the target audience (measured via user feedback/surveys if implemented).
* **Secondary Goal:** Enable visualization of price variations across locations and basic price trends over time.

## 3. Target Audience

* **Primary Users:** Everyday consumers and household managers in Nigeria who purchase food items regularly and are interested in price comparisons and budgeting. Likely access the service via mobile devices.
* **Secondary Audience (Future):** Journalists, researchers, economists interested in aggregated cost-of-living data (access likely via potential future API or data export features).

## 4. Use Cases

* **UC-01 (Submit Price):** A user who just visited Bodija Market, Ibadan, wants to quickly submit the price they paid for a "Paint Bucket" of Garri.
* **UC-02 (Check Price - Specific Item/Location):** A user planning to shop in Wuse Market, Abuja, wants to check the recently reported prices for medium-sized yams and tomatoes ("Small Basket" standard).
* **UC-03 (Browse Prices - Map):** A user wants to explore a map to see which markets near Port Harcourt have recently reported prices and what those prices are.
* **UC-04 (View Trend - Specific Item):** A user is curious about how the average price of a 50kg bag of foreign rice has changed nationally over the past 3 months.

## 5. Features & Requirements (MVP Scope)

### 5.1. Core Feature: Price Submission
* **REQ-01:** Anonymous submission: Users MUST be able to submit prices without creating an account or logging in.
* **REQ-02:** Simple Submission Form: A clear, mobile-first form with the following fields:
    * Item: Dropdown selection from a predefined list (e.g., "Rice - Foreign, Bag (50kg)"). *Required.*
    * Unit: Dropdown selection automatically filtered based on the chosen item (e.g., "Bag (50kg)"). *Implicitly Required.*
    * Price: Numerical input field (Naira). *Required.*
    * Market Name: Text input field with potential autocomplete based on City/State. *Required.*
    * State: Dropdown selection. *Required.*
    * City/Town: Dropdown selection (filtered by State). *Required.*
* **REQ-03:** Input Validation: Basic client-side and server-side validation (e.g., price must be a positive number within a reasonable range, required fields are filled).
* **REQ-04:** Auto-Timestamping: The server MUST automatically record the date and time of submission.
* **REQ-05:** Submission Confirmation: Display a simple success message after submission ("Thanks for contributing!").

### 5.2. Core Feature: Price Viewing & Discovery
* **REQ-06:** List/Search View:
    * Allow users to view a list of recently submitted prices.
    * Provide filtering options by Item, State, and City/Town.
    * Display results clearly: Item Name, Unit, Price (₦), Market Name, City, State, Date Reported (e.g., "2 hours ago", "Yesterday").
    * Allow sorting results by Date Reported (default descending) and Price.
* **REQ-07:** Map View (Leaflet.js):
    * Display an interactive map of Nigeria showing locations (based on City/State geocoding) where prices have been reported recently (e.g., last 7 days).
    * Use markers to represent markets/locations. Cluster markers at high zoom levels if many reports exist in one city.
    * Clicking a marker SHOULD display a popup with Market Name, City, and a summary of recent prices reported there (e.g., last 5 distinct items/prices).
* **REQ-08:** Basic Item Detail View:
    * Allow users to select an item to see more details.
    * Display the calculated average price for the item (e.g., nationwide or filtered by location, based on last 7 days).
    * Display the price range (lowest/highest reported) for the item (e.g., last 7 days).

### 5.3. Data Management & Content
* **REQ-09:** Predefined Item/Unit List: The application MUST launch with a curated list of ~20-40 common Nigerian food items and their *most standard possible* units. This list needs research and clear definition (e.g., specifying brand/type where relevant like "Indomie Noodles - Super Pack").
* **REQ-10:** Location Data: Maintain a list of Nigerian States and major Cities/Towns for dropdowns. Use reliable geocoding for map coordinates.
* **REQ-11:** Basic Data Aggregation: Backend logic to calculate average prices and price ranges efficiently for display.
* **REQ-12:** Simple Outlier Filtering: Implement a basic mechanism during aggregation to exclude submissions with prices significantly deviating (e.g., +/- 3 standard deviations or >5x/<0.2x) from the recent rolling average for that specific item/unit/location, to reduce noise from errors.

## 6. Design & UX Considerations

* **Mobile-First:** Design primarily for smartphone screens, ensuring usability on smaller viewports.
* **Simplicity & Speed:** Prioritize ease of use and speed, especially for the submission process. Minimize clicks/taps required.
* **Performance:** Optimize for fast load times and responsiveness, considering potentially variable network conditions in Nigeria. Use efficient data loading strategies.
* **Clarity:** Ensure data visualizations (lists, maps, numbers) are easy to understand at a glance. Use clear Naira (₦) formatting.
* **Accessibility:** Adhere to basic WCAG 2.1 Level AA guidelines (e.g., sufficient color contrast, keyboard navigation, semantic HTML).

## 7. Non-Functional Requirements

* **Performance:** Target Largest Contentful Paint (LCP) under 2.5 seconds. API response times under 500ms for typical queries.
* **Scalability:** Architecture should handle growth to potentially thousands of daily submissions and concurrent users. Use appropriate database indexing and consider caching strategies.
* **Reliability:** Aim for high availability (e.g., >99.5% uptime). Implement regular automated data backups.
* **Security:** Protect against common web vulnerabilities (OWASP Top 10). Implement measures against spam submissions (e.g., rate limiting per IP, potentially honeypot fields). Ensure data privacy (no collection of personal data beyond what's needed for submission/filtering).
* **Maintainability:** Code should be well-structured, commented, version-controlled (e.g., using Git), and potentially include automated tests for core functionality.

## 8. Release Criteria (MVP)

The MVP is considered ready for public launch when:
* All requirements listed in Section 5 are implemented, tested (unit, integration, E2E), and meet acceptance criteria.
* The application functions correctly and looks acceptable on major mobile and desktop browsers (Chrome, Firefox, Safari).
* The initial list of items/units and locations is populated accurately.
* Performance targets (basic load speed) are met under simulated average network conditions.
* Basic security checks and measures are in place.
* The platform is deployed to a reliable hosting environment and is publicly accessible.
* A basic privacy policy is available.

## 9. Success Metrics

* **User Engagement:**
    * Number of price submissions per day/week.
    * Number of active submitting locations (markets/cities) per week.
* **User Reach:**
    * Number of unique visitors/sessions per day/week.
    * Bounce rate.
* **Data Quality & Coverage:**
    * Number of distinct items with recent (last 7 days) price data.
    * Geographic coverage (number of states/cities with recent data).
    * (Manual assessment) Ratio of seemingly valid vs. invalid/spam submissions.
* **Performance:**
    * Average page load time (LCP).
    * API response times.
    * Server uptime percentage.

## 10. Future Considerations (Post-MVP)

* User accounts (optional): Saving searches, price alerts, contribution history/gamification ("Top Contributor" badges?).
* Historical Trend Charts: Implement interactive line graphs showing price changes over longer periods (months, years).
* Advanced Filtering/Comparison: Compare prices directly between two specific markets or view price difference from national average.
* Data Validation Improvements: Community flagging/voting on price accuracy, more sophisticated outlier detection (e.g., machine learning based).
* Admin Panel: For managing items, units, locations, reviewing flagged submissions, merging duplicate market names.
* API Access: Provide a public API for third-party use (researchers, other apps).
* Adding More Items: Expand beyond food to other essentials (e.g., cooking gas, fuel, basic medications, transport fares).
* Improved Geolocation: Allow users to optionally submit more precise market coordinates via GPS.
* Localization: Potential support for Nigerian Pidgin or other major local languages in the UI.
* Offline Support: Allow drafting submissions offline to be sent when connectivity resumes (PWA features).

## 11. Open Issues

* Finalize the specific list of initial items and their standardized units (Requires detailed market research and potentially user surveys).
* Determine the definitive strategy for handling variations and potential duplicates in user-submitted market names (e.g., initial acceptance + later admin cleanup vs. stricter validation/selection).
* Refine the algorithm and thresholds for MVP outlier detection.
* Select specific hosting provider, database service, and deployment strategy (considering cost, scalability, Nigerian presence if relevant).
* Define the exact data retention policy.
