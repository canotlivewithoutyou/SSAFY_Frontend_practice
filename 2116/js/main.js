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
// 1. 페이지 로드 시 AJAX 요청 실행
window.addEventListener("DOMContentLoaded", function(){
    showWishList();

    const movieList = document.querySelector(".movie-list");
    let movieDataList = [];

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "./data/movie.json");
    xhr.send();

    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                movieDataList = response.movies;

                movieDataList.forEach((movie, index) =>{
                    const li = document.createElement("li");
                    li.classList.add("movie");

                    li.innerHTML = `
                        <img src="./${movie.img}" alt="${movie.title}">
                        <p>${movie.title}</p>
                        <p>${movie.genre}</p>
                        <p>${movie.director}</p>
                        <p>${movie.runningTime}분</p>
                        <button class="wish-btn" data-index="${index}">찜</button>
                    `;

                    movieList.appendChild(li);
                });
            }else{
                console.error("데이터 불러오기 실패:", xhr.status);
            }
        }
    };

    movieList.addEventListener("click", function(e){
        if(e.target.classList.contains("wish-btn")){
            const movieIndex = e.target.dataset.index;
            const selectedMovie = movieDataList[movieIndex];
            handler(selectedMovie);
        }
    });
});