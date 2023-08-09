export default function PlayButton() {
  const handleRefresh = () => {
    window.location.reload(); // Sayfayı yenile
  };
  return <button onClick={handleRefresh}>Play Again!</button>;
}
