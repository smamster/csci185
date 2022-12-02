const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search(ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks(term) {
    let tracksEndpoint = baseURL + "?";
    tracksEndpoint += "q=" + term + "&type=track";
    console.log(tracksEndpoint);

    document.querySelector('#tracks').innerHTML = "";


    const trackData = await fetch(tracksEndpoint).then(response => response.json());
    console.log(trackData);
    console.log(trackData[0]);
    console.log(trackData[0].name);
 let counter = 0;    
while(counter < 5) {
    const template = `
<section class="track-item preview" onclick="playSong('${trackData[counter].id}')">
<img alt="album cover of ${trackData[counter].name}" src="${trackData[counter].album.image_url}">
<i class="fas fa-play play-track" aria-hidden="true"></i>
<div cla ss="label">
    <h2> ${trackData[counter].name}</h2>
    <p>
     ${trackData[counter].artist.name}
    </p>
</div>
</section>
`;
//document.querySelector('#tracks').innerHTML = template;
document.querySelector('#tracks').insertAdjacentHTML('beforeend',template);
counter++;
}

}
function playSong(id) {
    //let id = '5y8d8RHvxb0KiTa9Nq0xWp';
const template = `
<iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/${id}?utm_source=generator" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"></iframe>
`
document.querySelector('#artist').innerHTML = template;
}

async function getAlbums(term) {
    let albumEndpoint = baseURL + "?";
    albumEndpoint += "q=" + term + "&type=album";
    console.log(albumEndpoint);

    document.querySelector('#albums').innerHTML = "";


    const albumData = await fetch(albumEndpoint).then(response => response.json());
    console.log(albumData);
    console.log(albumData[0].name);

    let counter = 0;
    while(counter < albumData.length) {
        const template = `<section class="album-card" id="${albumData[counter.id]}">
        <div>
            <img alt="album cover of ${albumData[counter].name}" src="${albumData[counter].image_url}">
            <h2>${albumData[counter].name}>
            <div class="footer">
                <a href="${albumData[counter].spotify_url}" target="_blank">
                    view on spotify
                </a>
            </div>
        </div>
    </section>
`;
document.querySelector('#albums').insertAdjacentHTML('beforeend',template);
counter++;
    }
}

async function getArtist(term) {
    let artistEndpoint = baseURL + "?";
    artistEndpoint += "q=" + term + "&type=artist";
    console.log(artistEndpoint);

    const artistData = await fetch(artistEndpoint).then(response => response.json());
    //   console.log(artistData[0]);
    //    console.log(artistData[0]);
    //    console.log(artistData[0].image_url);


    //  document.querySelector('#artist-section h1').innerHTML = artistData[0].name;
    const html = `<img src="${artistData[0].image_url}" />`;
    // console.log(html);

    const artistCard = `   
<section class="artist-card" id="${artistData[0].image_url.id}">
<div>
    <img alt="artist of ${artistData[counter].name}" src="${artistData[0].image_url}">
    <h2>${artistData[0].name} (${artistData[0].popularity})</h2>
    <div class="footer">
        <a href="${artistData[0].spotitfy_url}" target="_blank">
            view on spotify
        </a>
    </div>
</div>
</section>
`;
    //console.log(artistCard);
    document.querySelector('#artist').innerHTML = artistCard;
};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}