import { useEffect, useRef, useState } from "react";
import Score from "./Score";
import "./Type.css";

const LENGTH = 5;

function Type() {
  const [quotes, setQuotes] = useState();
  const [userInput, setUserInput] = useState("");
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState();
  const [score, setScore] = useState(0);
  const [currentQuoteStartTime, setCurrentQuoteStartTime] = useState(
    Date.now()
  );
  const [totalTime, setTotalTime] = useState(0);
  const inputRef = useRef();

  async function fetchAPI(URL) {
    return await (await fetch(URL)).json();
  }

  function getRandomQuotes(quotes, size) {
    const arr = [];
    const used = [];
    while (arr.length != size) {
      const index = Math.floor(Math.random() * quotes.length);
      if (used.includes(index)) continue;
      arr.push(quotes[index]);
      used.push(index);
    }
    return arr;
  }

  function handleSubmit(e) {
    setTimeout(() => {
      setIndex(index + 1);
      inputRef.current.disabled = false;
      inputRef.current.focus();
      inputRef.current.className = "";
      setStatus("");
      setCurrentQuoteStartTime(Date.now());
    }, 2000);

    const timeTaken = Date.now() - currentQuoteStartTime;
    setTotalTime(totalTime + timeTaken);

    if (userInput === quotes[index].text) {
      setStatus("Correct");
      setScore(score + 1);
    } else {
      inputRef.current.className = "error";
      setStatus("Incorrect");
    }
    inputRef.current.disabled = true;
    setUserInput("");
    e.preventDefault();
  }

  useEffect(() => {
    (async () => {
      try {
        const quoteData = await fetchAPI("https://type.fit/api/quotes");
        setQuotes(getRandomQuotes(quoteData, LENGTH));
      } catch (err) {
        alert("Error in fetching quotes");
        console.log(err);
      }
    })();
  }, []);

  if (quotes === undefined) return <div>Loading ...</div>;

  return (
    <div>
      {index === LENGTH ? (
        <Score score={score} totalTime={totalTime} LENGTH={LENGTH} />
      ) : (
        <>
          <p>{quotes[index].text}</p>
          <form onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              placeholder="quote"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
          </form>
          <p>{status}</p>
        </>
      )}
    </div>
  );
}

export default Type;
