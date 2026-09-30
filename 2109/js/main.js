// ==============================
// 찜리스트 화면 출력
// ==============================

function showWishList() {

    const wishList = document.querySelector("#wish-list");

    wishList.innerHTML = "";

    const data = localStorage.getItem("movies");


    // 저장된 영화가 없을 때
    if (data === null) {

        wishList.innerHTML = "<p>아직 찜한 영화가 없습니다...</p>";

        return;
    }


    const movies = JSON.parse(data);


    if (movies.length === 0) {

        wishList.innerHTML = "<p>아직 찜한 영화가 없습니다...</p>";

        return;
    }


    movies.forEach(movie => {

        const p = document.createElement("p");

        p.innerHTML = `
            ${movie.title} |
            ${movie.genre} |
            ${movie.director} |
            ${movie.runningTime}분
        `;

        wishList.appendChild(p);
    });
}



// ==============================
// 찜 버튼 클릭
// ==============================

function handler(movie) {

    // 기존 찜목록 가져오기
    const data = localStorage.getItem("movies");

    let movies;


    if (data === null) {
        movies = [];
    }

    else {
        movies = JSON.parse(data);
    }

    const isExist = movies.some(item => item.title === movie.title);

    if(isExist){
        alert("이미 찜한 영화입니다.");
        return;
    }

    // 새로운 영화 추가
    movies.push(movie);


    // JSON 형태로 변경
    const jsonData = JSON.stringify(movies);


    // localStorage 저장
    localStorage.setItem("movies", jsonData);


    // 찜리스트 다시 그리기
    showWishList();
}



// ==============================
// 영화 목록 가져오기
// ==============================

fetch("./data/movie.txt")
    .then(response => response.text())
    .then(data => {

        const movieList = document.querySelector(".movie-list");


        // 영화 단위로 분리
        const movies = data
            .trim()
            .split(/\r?\n\s*\r?\n/);


        movies.forEach(movie => {

            const lines = movie.split(/\r?\n/);

            const movieData = {};


            // 영화 정보를 객체로 변환
            lines.forEach(line => {

                const [key, ...value] = line.split(":");

                movieData[key.trim()] = value.join(":").trim();

            });


            // li 생성
            const li = document.createElement("li");

            li.classList.add("movie");


            li.innerHTML = `
                <img src="./img/${movieData.img}" alt="${movieData.title}">

                <p>${movieData.title}</p>
                <p>${movieData.genre}</p>
                <p>${movieData.director}</p>
                <p>${movieData.runningTime}분</p>

                <button class="wish-btn">찜</button>
            `;


            // 찜 버튼
            const button = li.querySelector(".wish-btn");


            button.addEventListener("click", function () {

                handler(movieData);

            });


            movieList.appendChild(li);

        });

    });



// ==============================
// 페이지 처음 실행할 때 찜리스트 출력
// ==============================

showWishList();