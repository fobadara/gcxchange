const getCurrenDateTime = () => {
  const currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  cDay = cDay > 9 ? cDay : `0${cDay}`;
  cMonth = cMonth > 9 ? cMonth : `0${cMonth}`;
  const cYear = currentDate.getFullYear();
  const day = currentDate.getDay();
  const daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday ', 'Thursday', 'Friday', 'Saturday'];
  return (
    {
      day: daylist[day],
      numDay: cDay,
      month: cMonth,
      year: cYear,
    }
  );
};

export default getCurrenDateTime;
