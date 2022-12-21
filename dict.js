const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const search = document.querySelector('.search-btn');
const meaning = document.getElementById('mean');
const sound = document.getElementById('sound');

search.addEventListener('click', () => {
    let word = document.getElementById('inputword').value;
    // console.log(word);
    fetch(`${url}${word}`)
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            meaning.innerHTML = `
            <div class="word">
            <h3>${word}</h3>
            <button onclick="playSound()">
                <i class="fa fa-volume-up"></i>
            </button>
            </div>
            <div class="detail">
                <p>${data[0].meanings[0].partOfSpeech}</p><p>${data[0].phonetics[0].text || ""}</p>
            </div>
            <p class="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="ex">
            ${data[0].meanings[0].definitions[0].example|| " "}
            </p>
        `;
        sound.setAttribute("src",`${data[0].phonetics[0].audio}`);
        console.log(sound);
    })
    .catch(()=>{
        meaning.innerHTML=`
            <h4 class="not" >Oops!! Word not found..</h4>
            <h4 class="not" >Please search on Google 😃</h4>
        `;
    });
});

function playSound(){
    sound.play();
}


