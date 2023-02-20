function Score({ score, totalTime, LENGTH }) {
  function formatTime(time) {
    let finalOutput = "";
    let milliseconds = Math.floor(time % 1000);
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / 1000 / 60) % 60);
    if (minutes) {
      finalOutput += minutes + "m: ";
    }
    finalOutput += `${seconds}.${milliseconds} s`;
    return finalOutput;
  }

  return (
    <div>
      <p>
        <strong>Score: </strong>
        {score}
      </p>
      <p>
        <strong>Total Time: </strong>
        {formatTime(totalTime)}
      </p>
      <p>
        <strong>Average Time: </strong>
        {formatTime(totalTime / LENGTH)}
      </p>
    </div>
  );
}

export default Score;
