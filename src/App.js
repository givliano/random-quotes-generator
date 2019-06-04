import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      author: '',
      color: undefined,
      quote: '',
    };
  };

  randomQuote = () => {
    return Math.floor(Math.random() * 10);
  }

  componentDidMount =  async () => {
    try {
      const quoteResponse = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
      const quotesJSON = await quoteResponse.json();
      const randomNumber =  Math.floor(Math.random() * quotesJSON.quotes.length);
      const randomQuote = quotesJSON.quotes[randomNumber];
      this.setState({
        active: true,
        author: randomQuote.author,
        quote: randomQuote.quote
      })
    } catch (e) {
      console.log(e);
    }
    this.randomColorPicker();
  }
  
   newQuoteHandler = async () => {
    try {
      const quoteResponse = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
      const quotesJSON = await quoteResponse.json();
      const randomNumber =  Math.floor(Math.random() * quotesJSON.quotes.length);
      const randomQuote = quotesJSON.quotes[randomNumber];
      this.setState({
        active: true,
        author: randomQuote.author,
        quote: randomQuote.quote
      })
    } catch (e) {
      console.log(e);
    }
    this.randomColorPicker();
  };

  randomColorPicker = () => {
    const colors = ['#A6E1FF', '#74E879', '#F1C2FF', '#EBB09B', '#FFEB8B',
                    '#7C78B3', '#FFC6A3', '#C9C4FF', '#AACCA5', '#83BD7B'];
    const randomNum = Math.floor((Math.random() * colors.length));
    const randomColor = colors[randomNum];
    const container = document.querySelector('.container');
    const newQuote = document.getElementById('new-quote');
    const tweetQuote = document.getElementById('tweet-quote');
    container.style.backgroundColor = randomColor;
    newQuote.style.background = randomColor;
    tweetQuote.style.backgroundColor = randomColor;
  }
  

  render () {
    return (
      <div className="container">
        <div id="quote-box">
          {this.state.active && <p id="text">"{this.state.quote}"</p>}
          {this.state.active && <p id="author">- {this.state.author}</p>}
          <div className="box-bottom">
            <a id="tweet-quote" href="twitter.com/intent/tweet">Tweet</a>
            <button id="new-quote" onClick={this.newQuoteHandler}>New Quote</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
