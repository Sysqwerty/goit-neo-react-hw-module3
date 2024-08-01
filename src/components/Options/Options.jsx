import css from './Options.module.css';

function Options({ onUpdate, totalFeedback }) {
  return (
    <div className={css.options}>
      <button onClick={() => onUpdate('good')}>Good</button>
      <button onClick={() => onUpdate('neutral')}>Neutral</button>
      <button onClick={() => onUpdate('bad')}>Bad</button>

      {!!totalFeedback && <button onClick={() => onUpdate()}>Reset</button>}
    </div>
  );
}

export default Options;
