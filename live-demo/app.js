const apiKeyInput = document.getElementById('apiKey');
const countrySelect = document.getElementById('country');
const dateInput = document.getElementById('date');
const dateFromInput = document.getElementById('dateFrom');
const dateToInput = document.getElementById('dateTo');

const getDataBtn = document.getElementById('getDataBtn');
const copyUrlBtn = document.getElementById('copyUrlBtn');
const requestUrlBox = document.getElementById('requestUrl');
const responseBox = document.getElementById('responseBox');

dateInput.addEventListener('change', function () {
  if (dateInput.value !== '') {
    dateFromInput.value = '';
    dateToInput.value = '';
  }
});

dateFromInput.addEventListener('change', function () {
  if (dateFromInput.value !== '') {
    dateInput.value = '';
  }
});

dateToInput.addEventListener('change', function () {
  if (dateToInput.value !== '') {
    dateInput.value = '';
  }
});

getDataBtn.addEventListener('click', async function () {
  const apiKey = apiKeyInput.value.trim();
  const country = countrySelect.value;
  const date = dateInput.value;
  const dateFrom = dateFromInput.value;
  const dateTo = dateToInput.value;

  if (apiKey === '') {
    responseBox.textContent = 'Please enter your API key.';
    return;
  }

  if ((dateFrom !== '' && dateTo === '') || (dateFrom === '' && dateTo !== '')) {
    responseBox.textContent = 'Please specify both Date From and Date To.';
    return;
  }

  if (dateFrom !== '' && dateTo !== '') {
    const from = new Date(dateFrom);
    const to = new Date(dateTo);

    if (to < from) {
      responseBox.textContent = 'Date To must be greater than or equal to Date From.';
      return;
    }

    const diffTime = to.getTime() - from.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    if (diffDays > 90) {
      responseBox.textContent = 'The maximum date range is 90 days.';
      return;
    }
  }

  let url =
    'https://apidata.fin2dev.com/v1/macrocalendar' +
    '?key=' + encodeURIComponent(apiKey) +
    '&country=' + encodeURIComponent(country);

  if (date !== '') {
    url += '&date=' + encodeURIComponent(date);
  } else if (dateFrom !== '' && dateTo !== '') {
    url += '&date_from=' + encodeURIComponent(dateFrom);
    url += '&date_to=' + encodeURIComponent(dateTo);
  }

  requestUrlBox.textContent = url;
  responseBox.textContent = 'Loading...';

  try {
    const response = await fetch(url);
    const data = await response.json();

    responseBox.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    responseBox.textContent = 'Request failed: ' + error.message;
  }
});

copyUrlBtn.addEventListener('click', async function () {
  const url = requestUrlBox.textContent.trim();

  if (url === '' || url === 'Request URL will appear here') {
    return;
  }

  try {
    await navigator.clipboard.writeText(url);

    const oldText = copyUrlBtn.textContent;
    copyUrlBtn.textContent = 'Copied!';

    setTimeout(function () {
      copyUrlBtn.textContent = oldText;
    }, 1500);
  } catch (error) {
    responseBox.textContent = 'Unable to copy the URL.';
  }
  
});
