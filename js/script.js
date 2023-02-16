const address1 = "BOULEVARD MANUEL AVILA CAMACHO NO. 491 COL. PERIODISTAS C.P.11220";
const API_KEY = "AIzaSyA5nNaCbMXLLFjQH9oCSXUUA0QELudSzHY"
// const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(addressWalmart)}&key=${API_KEY}`;
const URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address1)}&key=${API_KEY}`;

fetch(URL)
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.   then(data => {
        const location = data.results[0].geometry.location;
        console.log(`Latitude: ${location.lat}`);
        console.log(`Longitude: ${location.lng}`);
    })
    .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});