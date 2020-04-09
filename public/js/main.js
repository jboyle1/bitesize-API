// Information needed to reach the API
const apiKey = '548af96918134a059652040c9d8071d6';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// Ajax async await function
const shortenUrl = async () => {
    const urlToShorten = inputField.value;
    const data = JSON.stringify({destination: urlToShorten});
    try {
        const response = await fetch(url, {
            method: "POST",
            body: data,
            headers: {
                'Content-type': 'application/json',
                'apikey': apiKey
            }
        });
        if (response.ok) {
            const jsonResponse = await response.json();
            renderResponse(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
    event.preventDefault();
    while(responseField.firstChild){
      responseField.removeChild(responseField.firstChild);
    }
    shortenUrl();
  }
  
  shortenButton.addEventListener('click', displayShortUrl);