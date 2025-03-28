export default function Options({ onUpdate, total, resetReviews, keys }) {
  return (
    <div>
      <button onClick={() => onUpdate(keys.good)}>Good</button>

      <button onClick={() => onUpdate(keys.neutral)}>Neutral</button>

      <button onClick={() => onUpdate(keys.bad)}>Bad</button>

      {total === 0 || <button onClick={resetReviews}>Reset</button>}
    </div>
  );
}
