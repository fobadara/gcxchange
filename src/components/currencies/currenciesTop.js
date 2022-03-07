import getCurrenDateTime from '../../common/currentDateTime';

const Top = () => {
  const {
    day, numDay, month, year,
  } = getCurrenDateTime();
  return (
    <article>
      <div className="date-time">
        <h3>
          <div style={{ textAlign: 'right', marginRight: '1.5em' }}>{`Today is: ${day}`}</div>
          <div style={{ textAlign: 'right', marginRight: '1.5em' }}>{`${numDay}/${month}/${year}`}</div>
        </h3>
      </div>
    </article>
  );
};

export default Top;
