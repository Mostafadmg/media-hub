

# Entertainment Web App — Implementation Plan

## Overview
A dark-themed, responsive entertainment browsing application for movies and TV series, featuring search, bookmarking, and multi-page navigation — built to match the provided Figma-quality designs.

---

## 1. Design System & Theme Setup
- Dark navy/slate color palette matching the designs (background ~`#10141E`, cards ~`#161D2F`)
- Custom typography and spacing system
- SVG icon set for navigation (Home grid, Movies, TV Series, Bookmarks) and the red clapperboard logo

## 2. Layout & Navigation
- **Desktop**: Fixed left sidebar with logo, nav icons (Home, Movies, TV Series, Bookmarks), and user avatar at the bottom
- **Tablet**: Horizontal top bar with logo, nav icons centered, and avatar on the right
- **Mobile**: Same horizontal top bar, more compact
- Active nav icon highlighted in white, inactive in muted blue-gray

## 3. Home Page
- **Search bar** at the top: "Search for movies or TV series"
- **Trending section**: Horizontally scrollable row of larger cards with overlay text (title, year, type, rating) — shows ~3 on desktop, ~2 on tablet
- **Recommended for you**: Grid of smaller cards — 4 columns desktop, 3 tablet, 2 mobile
- Each card shows: thumbnail image, year, media type icon, type label, age rating, title, and a bookmark toggle button

## 4. Movies Page
- Search bar: "Search for movies"
- Grid of all movies (same card style as Recommended section)
- Responsive grid: 4 cols → 3 cols → 2 cols

## 5. TV Series Page
- Search bar: "Search for TV series"
- Grid of all TV series
- Same responsive card grid

## 6. Bookmarked Shows Page
- Search bar: "Search for bookmarked shows"
- Two sections: **Bookmarked Movies** and **Bookmarked TV Series**
- Each section shows its own responsive grid of bookmarked items

## 7. Search Functionality
- Real-time filtering as user types
- Shows result count: "Found X results for 'query'"
- Filters content on the current page only (movies on Movies page, etc.)

## 8. Bookmark Feature
- Toggle bookmark on/off per item (bookmark icon in top-right of card)
- Bookmarked state persisted in local storage
- Filled bookmark icon = bookmarked, outline = not bookmarked

## 9. Card Hover States
- On hover, card shows a semi-transparent overlay with a **Play** button (play icon + "Play" text in a pill)
- Bookmark button hover state changes opacity/color

## 10. Data Layer
- Hardcoded JSON data file with ~25-30 shows (title, year, category, rating, thumbnail URLs, isTrending, isBookmarked)
- React state management for bookmarks with localStorage persistence
- Placeholder images using gradients or Unsplash-style thumbnails

## 11. Responsive Design
- Fully responsive across mobile (375px), tablet (768px), and desktop (1440px)
- Layout shifts for navigation, grid columns, and card sizes at each breakpoint

