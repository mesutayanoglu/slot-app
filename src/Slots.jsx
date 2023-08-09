export default function Slots() {
  //   const isWinner = a === b && a === c;
  const arr = ["🍌", "🥝", "🍓"];
  const a = Math.floor(Math.random() * arr.length);
  const b = Math.floor(Math.random() * arr.length);
  const c = Math.floor(Math.random() * arr.length);
  const isWinner = a === b && a === c;
  return (
    <div>
      <h1>
        {arr[a]} {arr[b]} {arr[c]}
      </h1>
      <h2 style={{ color: isWinner ? "green" : "red" }}>
        {isWinner ? "You win!" : "You lose :("}
      </h2>
    </div>
  );
}
