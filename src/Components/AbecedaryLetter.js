const AbecedaryLetter = ({ letter, actionOnClick }) => {
  return (
    <li className="letter">
      {/* <a href={letter.toLowerCase()} onClick={actionOnClick}> */}
      <a onClick={actionOnClick}>{letter}</a>
    </li>
  );
};

export default AbecedaryLetter;
