const AlphabetLetter = ({ letter, actionOnClick }) => {
  return (
    <li className="letter">
      <a href={letter.toLowerCase()} onClick={actionOnClick}>
        {letter}
      </a>
    </li>
  );
};

export default AlphabetLetter;
