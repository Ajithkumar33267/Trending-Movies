const mainDiv = document.querySelector('.main');
const date = document.querySelector('#date');

const apiUrl = 'http://api.themoviedb.org/3/trending/movie/week?api_key=9fcf7a3dcf6947a420682da4c7f85220&language=en-US';

const currentDate = new Date().toDateString();

date.innerHTML = currentDate;


document.addEventListener('DOMContentLoaded', () => {



    fetch(apiUrl)
        .then(function (res) {
            if (res.status === 200)
                return res.json();
            else
                throw new Error('Something went Wrong!');
        }).then(function (data) {
            const originalData = data.results;

            const posterPath = 'https://image.tmdb.org/t/p/original';

            originalData.map((value) => {
                const imgSrc = posterPath + value.poster_path;
                mainDiv.innerHTML += `
        <div class="card flex flex-wrap border-2 border-white mx-auto w-full h-full rounded-2xl  p-5 shadow-xl">
            <div class="title text-center mt-2 text-white w-full font-bold text-xl">${value.title}</div>
            <div class="image-div mx-auto ">
                <img class="image w-44 h-44 mx-auto object-fit mt-2 object-fill rounded-xl"
                    src=${imgSrc}
                    alt="image">
            </div>
            <div class="desc text-center w-auto text-white font-bold text-sm text-gray-200 mt-2 pt-4 w-full">${value.overview}</div>
        
    </div>`
            });

        }).catch(function (err) {
            console.log(err.message);
        })
});
