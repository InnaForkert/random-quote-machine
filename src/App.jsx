import { useEffect, useState } from "react";
import "./App.css";
import { fetchQuote } from "./utils/fetchQuote";
import {
  Author,
  Button,
  Quote,
  QuoteBox,
  Tweet,
  Backdrop,
  Marks,
} from "./App.styled";
import { AiFillTwitterCircle } from "react-icons/ai";

function App() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    newQuote();
  }, []);

  function newQuote() {
    fetchQuote().then(setQuote);
  }

  if (!quote) {
    return null;
  }

  return (
    <Backdrop>
      <QuoteBox id="quote-box">
        <Quote id="text">
          <Marks>``</Marks>
          {quote.quote}
        </Quote>
        <Author id="author">{quote.author}</Author>
        <Button id="new-quote" onClick={newQuote}>
          New quote
        </Button>
        <Tweet
          id="tweet-quote"
          href={`http://twitter.com/intent/tweet?text=${
            quote.quote + " " + quote.author
          }`}
          target="top"
        >
          <AiFillTwitterCircle size={30} />
        </Tweet>
      </QuoteBox>
    </Backdrop>
  );
}

export default App;
