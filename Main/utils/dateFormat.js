

  const dateObj = new Date(timestamp);
  const formattedMonth = months[dateObj.getMonth()];

  const dayOfMonth = dateSuffix
    ? addDateSuffix(dateObj.getDate())
    : dateObj.getDate();

  const year = dateObj.getFullYear();
  let hour =
    dateObj.getHours() > 12
      ? Math.floor(dateObj.getHours() - 12)
      : dateObj.getHours();

  // if hour is 0 (12:00am), change it to 12
  if (hour === 0) {
    hour = 12;
  }

  
  
  const minutes = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();

  // set `am` or `pm`
  const periodOfDay = dateObj.getHours() >= 12 ? 'pm' : 'am';

  const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;
  return formattedTimeStamp;
};
