import { useState } from "react";
import "./App.css";
import GuessedLetters from "./Components/GuessedLetters/GuessedLetters";
import UsedLetters from "./Components/UsedLetters/UsedLetters";

function App() {
  const [word, setWord] = useState([
    "E",
    "S",
    "T",
    "E",
    "P",
    "I",
    "C",
    "U",
    "R",
    "S",
    "O",
    "R",
  ]);

  return (
    <>
      <div className="hangman-container">
        <svg className="hangman" viewBox="0 0 96 96" width="300" height="300">
          <line className="stage11" x1="62" y1="70" x2="56" y2="56"></line>
          <line className="stage10" x1="50" y1="70" x2="56" y2="56"></line>
          <line className="stage9" x1="68" y1="46" x2="56" y2="40"></line>
          <line className="stage8" x1="44" y1="46" x2="56" y2="40"></line>
          <line className="stage7" x1="56" y1="40" x2="56" y2="56"></line>
          <circle
            className="stage6"
            cx="56"
            cy="34"
            r="6"
            fill="#bee5eb"
          ></circle>
          <line className="stage5" x1="56" y1="16" x2="56" y2="28"></line>
          <line className="stage4" x1="24" y1="24" x2="32" y2="16"></line>
          <line className="stage3" x1="21" y1="16" x2="60" y2="16"></line>
          <line className="stage2" x1="24" y1="80" x2="24" y2="16"></line>
          <line className="stage1" x1="16" y1="80" x2="32" y2="80"></line>
        </svg>
      </div>
      <ul className="guess-letters">
        {word.map((letter) => (
          <GuessedLetters className={"guess-letter empty"} letter={""} />
        ))}
      </ul>
      <section className="used-letters-container">
        <h2>Used letters</h2>
        <ul className="used-letters">
          <UsedLetters list="A, B, C" />
        </ul>
      </section>
      <section className="game-result">You're dead!</section>
      <ul className="letters">
        <li class="letter">
          <a href="a">A</a>
        </li>
        <li class="letter">
          <a href="b">B</a>
        </li>
        <li class="letter">
          <a href="c">C</a>
        </li>
        <li class="letter">
          <a href="d">D</a>
        </li>
        <li class="letter">
          <a href="e">E</a>
        </li>
        <li class="letter">
          <a href="f">F</a>
        </li>
        <li class="letter">
          <a href="g">G</a>
        </li>
        <li class="letter">
          <a href="h">H</a>
        </li>
        <li class="letter">
          <a href="i">I</a>
        </li>
        <li class="letter">
          <a href="j">J</a>
        </li>
        <li class="letter">
          <a href="k">K</a>
        </li>
        <li class="letter">
          <a href="l">L</a>
        </li>
        <li class="letter">
          <a href="m">M</a>
        </li>
        <li class="letter">
          <a href="n">N</a>
        </li>
        <li class="letter">
          <a href="ñ">Ñ</a>
        </li>
        <li class="letter">
          <a href="o">O</a>
        </li>
        <li class="letter">
          <a href="p">P</a>
        </li>
        <li class="letter">
          <a href="q">Q</a>
        </li>
        <li class="letter">
          <a href="r">R</a>
        </li>
        <li class="letter">
          <a href="s">S</a>
        </li>
        <li class="letter">
          <a href="t">T</a>
        </li>
        <li class="letter">
          <a href="u">U</a>
        </li>
        <li class="letter">
          <a href="v">V</a>
        </li>
        <li class="letter">
          <a href="w">W</a>
        </li>
        <li class="letter">
          <a href="x">X</a>
        </li>
        <li class="letter">
          <a href="y">Y</a>
        </li>
        <li class="letter">
          <a href="z">Z</a>
        </li>
      </ul>
    </>
  );
}

export default App;
