import { useState } from "react";

const STORAGE_KEY = "bookexpress_ratings";

function getStoredRatings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to parse ratings", e);
  }
  return {};
}

function persistRatings(ratings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings));
}

export function getBookRating(bookId) {
  const ratings = getStoredRatings();
  if (!ratings[bookId]) return null;
  const values = Object.values(ratings[bookId]);
  const sum = values.reduce((a, b) => a + b, 0);
  return {
    average: Number((sum / values.length).toFixed(1)),
    count: values.length,
  };
}

export function addBookRating(bookId, rating) {
  const ratings = getStoredRatings();
  if (!ratings[bookId]) ratings[bookId] = [];
  ratings[bookId].push(rating);
  persistRatings(ratings);
  return getBookRating(bookId);
}

export function ensureDefaultRatings(allBooks) {
  const ratings = getStoredRatings();
  let changed = false;
  allBooks.forEach((book) => {
    if (!ratings[book.id]) {
      ratings[book.id] = [];
      changed = true;
    }
  });
  if (!changed) return ratings;
  persistRatings(ratings);
  return ratings;
}

export default function StarRating({ bookId, readOnly = false, onRate }) {
  const [hover, setHover] = useState(0);
  const rating = getBookRating(bookId);
  const current = hover || (rating ? Math.round(rating.average) : 0);

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        lineHeight: 1,
      }}
      onMouseLeave={() => !readOnly && setHover(0)}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            fontSize: "clamp(14px, 1.8vw, 18px)",
            cursor: readOnly ? "default" : "pointer",
            color: star <= current ? "#fbbf24" : "#cbd5e1",
            transition: "transform 0.15s ease",
            transform: hover === star ? "scale(1.2)" : "scale(1)",
            userSelect: "none",
          }}
          {...(!readOnly && {
            onMouseEnter: () => setHover(star),
            onClick: () => {
              addBookRating(bookId, star);
              if (onRate) onRate(bookId, star);
            },
          })}
        >
          ★
        </span>
      ))}
      {rating && rating.count > 0 && (
        <span
          style={{
            fontSize: "clamp(0.75rem, 1.2vw, 0.85rem)",
            color: "#64748b",
            fontWeight: 600,
            marginLeft: "2px",
          }}
        >
          ({rating.average})
        </span>
      )}
    </div>
  );
}
