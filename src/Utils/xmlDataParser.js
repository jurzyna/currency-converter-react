export const parseXmlData = (data) => {
  let parser = new DOMParser(),
    xmlDoc = parser.parseFromString(data, 'text/xml');
  const currencyNodes = xmlDoc.querySelectorAll('Cube[currency]');
  return Array.from(currencyNodes).reduce((currObj, currency) => {
    const currencyCode = currency.getAttribute('currency');
    const currencyRate = currency.getAttribute('rate');
    currObj[currencyCode] = Number(currencyRate);
    return currObj;
  }, {});
};
