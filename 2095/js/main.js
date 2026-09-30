fetch("./data/movie.txt")
    .then(response=>response.text())
    .then(data=>{
        const movieList = document.querySelector(".movie-list");

        const movies=data
            .trim()
            .split(/\r?\n\s*\r?\n/);

        movies.forEach(movie =>{
            const lines = movie.split(/\r?\n/);

            const movieData = {};

            lines.forEach(line=>{
                const[key, ...value] = line.split(":");

                movieData[key.trim()] = value.join(":").trim();
            });

            const li = document.createElement("li");

            li.classList.add("movie");

            li.innerHTML = `
                <img src="./img/${movieData.img}" alt=${movieData.title}">
                <p>${movieData.title}<hr>
                ${movieData.genre}<br>
                ${movieData.director}<br>
                ${movieData.runningTime}분<br>
                <button>찜</button>
                </p>
            `;

            movieList.appendChild(li);
        });
    });