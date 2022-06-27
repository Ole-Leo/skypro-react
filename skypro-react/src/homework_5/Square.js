export default function Square({ className, onClick }) {
  return <div className={`square ${className}`} onClick={onClick}></div>;
}
