// Manipulates responseField to render a formatted appropriate message
const renderResponse = (res) => {
    // Displays either message depending on results
    if(res.errors) {
        Response.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
    } else {
        Response.innerHTML = `<p>Your shortened url is: </p><p> ${res.shortUrl} </p>`;
    }
}

