const getToday = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
};

const getFormattedDate = date => {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
};

const getDateTitle = (date, locale) => {
  const day = date.toLocaleDateString(locale, {
    weekday: 'long',
    // year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return `${day}`;
};

export { getToday, getFormattedDate, getDateTitle };
