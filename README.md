# 🎬 SSAFY Frontend Practice

> **SSAFY 웹 프론트엔드 핵심 실습 및 영화 관리 웹 애플리케이션 프로젝트 저장소**  
> HTML5 시맨틱 마크업, CSS Flexbox 레이아웃, Fetch API & XMLHttpRequest(AJAX)를 통한 비동기 데이터 통신, 이벤트 위임(Event Delegation), LocalStorage를 활용한 상태 관리를 단계별로 학습하고 구현한 프로젝트입니다.

<br>

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/SSAFY-007ACC?style=for-the-badge&logo=ssafy&logoColor=white" alt="SSAFY" />
</div>

---

## 📌 목차
- [🎬 SSAFY Frontend Practice](#-ssafy-frontend-practice)
  - [📌 목차](#-목차)
  - [📖 프로젝트 개요](#-프로젝트-개요)
  - [🚀 영화 관리 웹 프로젝트 발전 과정](#-영화-관리-웹-프로젝트-발전-과정)
  - [📁 디렉터리 구조](#-디렉터리-구조)
  - [🔍 실습 및 과제별 상세 내용](#-실습-및-과제별-상세-내용)
    - [1. 3155 - 자동차 정보 사이트 마크업](#1-3155---자동차-정보-사이트-마크업)
    - [2. 3157 - HTML Form 입력 요소 실습](#2-3157---html-form-입력-요소-실습)
    - [3. 2095 - 영화 관리 웹 (Fetch \& 동적 DOM 렌더링)](#3-2095---영화-관리-웹-fetch--동적-dom-렌더링)
    - [4. 2109 - 영화 관리 웹 (LocalStorage 기반 찜 기능)](#4-2109---영화-관리-웹-localstorage-기반-찜-기능)
    - [5. 2116 - 영화 관리 웹 (AJAX 통신 \& 이벤트 위임)](#5-2116---영화-관리-웹-ajax-통신--이벤트-위임)
  - [🛠 주요 기술 스택 및 개념](#-주요-기술-스택-및-개념)
  - [🚀 실행 방법](#-실행-방법)

---

## 📖 프로젝트 개요

본 저장소는 SSAFY 프론트엔드 과정에서 진행된 실습 과제들을 체계적으로 정리한 공간입니다.  
기본적인 HTML 시맨틱 태그 구조화부터 자바스크립트의 비동기 통신(`fetch`, `XMLHttpRequest`), 이벤트 위임(Event Delegation) 패턴, 브라우저 로컬 저장소(`localStorage`)를 활용한 데이터 영속화까지 단계별 기능 구현 및 최적화 과정을 포함하고 있습니다.

---

## 🚀 영화 관리 웹 프로젝트 발전 과정

영화 관리 웹 애플리케이션(`2095` ➡️ `2109` ➡️ `2116`)은 기능 확장 및 코드 최적화 과정을 단계별로 거치며 발전했습니다.

| 단계       | 실습 번호 | 데이터 통신             | 데이터 포맷                | 이벤트 처리 방식               | 상태 관리                            |
| :--------- | :-------- | :---------------------- | :------------------------- | :----------------------------- | :----------------------------------- |
| **Step 1** | **2095**  | `fetch()`               | `movie.txt` (Text Parsing) | 개별 버튼 참조                 | 없음                                 |
| **Step 2** | **2109**  | `fetch()`               | `movie.txt` (Text Parsing) | 카드별 개별 리스너 등록        | `LocalStorage` (찜 추가 / 중복 방지) |
| **Step 3** | **2116**  | `XMLHttpRequest` (AJAX) | `movie.json` (JSON)        | **이벤트 위임** (`data-index`) | `LocalStorage` (찜 추가 / 중복 방지) |

---

## 📁 디렉터리 구조

```text
SSAFY_Frontend_practice/
├── 2095/                     # 영화 관리 웹 Step 1 (Fetch & DOM 동적 렌더링)
│   ├── css/
│   │   └── main.css          # Flexbox 기반 2단 레이아웃 스타일
│   ├── data/
│   │   └── movie.txt         # 영화 정보 텍스트 데이터셋
│   ├── img/                  # 영화 포스터 이미지 리소스
│   ├── js/
│   │   └── main.js           # Fetch API & 텍스트 파싱 스크립트
│   └── index.html
│
├── 2109/                     # 영화 관리 웹 Step 2 (LocalStorage 찜 기능)
│   ├── css/
│   │   └── main.css          # 레이아웃 및 컴포넌트 스타일
│   ├── data/
│   │   └── movie.txt         # 영화 정보 텍스트 데이터셋
│   ├── img/                  # 영화 포스터 이미지 리소스
│   ├── js/
│   │   └── main.js           # LocalStorage 연동 및 중복 방지 로직
│   └── index.html
│
├── 2116/                     # 영화 관리 웹 Step 3 (AJAX 통신 & 이벤트 위임)
│   ├── css/
│   │   └── main.css          # 레이아웃 및 컴포넌트 스타일
│   ├── data/
│   │   └── movie.json        # 영화 정보 JSON 데이터셋
│   ├── img/                  # 영화 포스터 이미지 리소스
│   ├── js/
│   │   └── main.js           # XHR 통신, JSON 파싱, 이벤트 위임 기반 찜 로직
│   └── index.html
│
├── 3155/                     # HTML 시맨틱 마크업 실습
│   └── 3155.html             # 자동차 정보 사이트 기본 레이아웃 구성
│
├── 3157/                     # HTML Form 태그 실습
│   └── 3157.html             # 다양한 input 및 폼 컨트롤 태그 활용
│
└── README.md
```

---

## 🔍 실습 및 과제별 상세 내용

### 1. 3155 - 자동차 정보 사이트 마크업
* **주제**: HTML5 시맨틱 태그를 활용한 웹 페이지 구조 설계
* **주요 내용**:
  * `<header>`, `<nav>`, `<section>`, `<main>`, `<summary>`, `<footer>` 등 시맨틱 태그를 활용한 웹 표준 구조 작성
  * 상단 네비게이션, 자동차 검색 폼, 차량 목록 카드 레이아웃 및 찜 리스트 영역 구조화

### 2. 3157 - HTML Form 입력 요소 실습
* **주제**: 사용자 입력을 처리하기 위한 다양한 Form 관련 태그 및 속성 학습
* **주요 내용**:
  * 단일 텍스트 입력(`input[type="text"]`) 및 비밀번호(`input[type="password"]`)
  * 단일 선택 라디오 버튼(`input[type="radio"]`)과 `<label>` 태그의 `for`-`id` 바인딩
  * 다중 선택 체크박스(`input[type="checkbox"]`)의 `name` 그룹화
  * 장문 텍스트 작성을 위한 `<textarea>`
  * 드롭다운 목록 생성을 위한 `<select>`, `<option>`

### 3. 2095 - 영화 관리 웹 (Fetch & 동적 DOM 렌더링)
* **주제**: 외부 텍스트 파일 비동기 로딩 및 화면 동적 렌더링
* **주요 기능**:
  * **비동기 데이터 통신**: `fetch("./data/movie.txt")`를 이용해 영화 데이터 파일을 비동기로 로드
  * **데이터 파싱**: 줄바꿈 및 콜론(`:`) 구분자 기준으로 텍스트 데이터를 JavaScript Object 배열 형태로 가공
  * **동적 DOM 조작**: 가공된 데이터를 바탕으로 `<li>` 요소를 생성하여 영화 포스터, 제목, 장르, 감독, 러닝타임 및 찜 버튼을 화면에 출력
  * **Flexbox 레이아웃**: 네비게이션 바, 메인 영역(영화 목록 3열 그리드 + 사이드바), 푸터를 CSS Flexbox로 유연하게 배치

### 4. 2109 - 영화 관리 웹 (LocalStorage 기반 찜 기능)
* **주제**: 브라우저 로컬 저장소(`LocalStorage`)를 활용한 상태 관리 및 찜 기능 구현
* **주요 기능**:
  * **찜 목록 영속화**: 영화 카드의 '찜' 버튼 클릭 시 `localStorage`에 JSON 포맷(`JSON.stringify`)으로 저장
  * **중복 찜 검증**: `Array.prototype.some` 메서드를 활용해 이미 추가된 영화일 경우 경고창(`alert`) 출력 및 중복 추가 방지
  * **화면 즉시 갱신 (`showWishList`)**: 찜 추가 시 사이드바의 찜 목록을 실시간으로 다시 렌더링
  * **데이터 유지**: 새로고침 및 재접속 시에도 기존에 저장된 찜 목록을 불러와 표시

### 5. 2116 - 영화 관리 웹 (AJAX 통신 & 이벤트 위임)
* **주제**: `XMLHttpRequest` 기반 AJAX 통신, JSON 데이터 처리 및 이벤트 위임(Event Delegation) 패턴 적용
* **주요 기능**:
  * **AJAX(XHR) 통신**: `XMLHttpRequest` 객체를 활용해 `./data/movie.json` 데이터를 비동기로 요청하고 상태(`readyState`, `status`) 확인 후 처리
  * **표준 JSON 파싱**: 텍스트 파싱 대신 `JSON.parse(xhr.responseText)`를 통해 구조화된 영화 객체 데이터(`response.movies`) 직접 활용
  * **이벤트 위임 (Event Delegation)**:
    * 동적으로 생성되는 각 영화 카드의 찜 버튼마다 이벤트 리스너를 개별 등록하지 않고, 상위 부모 요소인 `.movie-list`에 단일 이벤트 리스너 등록
    * `e.target.classList.contains("wish-btn")`로 클릭된 대상을 판별하고, HTML5 커스텀 데이터 속성(`data-index="${index}"`)을 통해 클릭된 영화 데이터를 정확하게 식별 및 처리
    * 메모리 사용량 절감 및 DOM 이벤트 성능 최적화 달성
  * **LocalStorage 찜 기능 유지**: 기존 2109의 중복 검사 및 사이드바 실시간 렌더링 로직을 결합하여 완결성 있는 웹 애플리케이션 완성

---

## 🛠 주요 기술 스택 및 개념

| 구분              | 사용 기술 / 개념   | 상세 내용                                                                                  |
| :---------------- | :----------------- | :----------------------------------------------------------------------------------------- |
| **Markup**        | HTML5 Semantic Web | `header`, `nav`, `main`, `section`, `aside`, `footer`                                      |
| **Style**         | CSS3, Flexbox      | `display: flex`, `flex-wrap: wrap`, 반응형 정렬, `object-fit`                              |
| **Script (ES6+)** | JavaScript         | DOM 조작, Template Literals, Arrow Function, Array Methods (`some`, `forEach`)             |
| **Asynchronous**  | Fetch API & AJAX   | `fetch()`, `XMLHttpRequest` (`open`, `send`, `onreadystatechange`, `readyState`, `status`) |
| **Optimization**  | Event Delegation   | 상위 컨테이너 단일 리스너 등록, `e.target`, `data-*` (Dataset) 속성 활용 최적화            |
| **Data Format**   | Text & JSON        | 줄바꿈/콜론 텍스트 파싱, `JSON.parse` / `JSON.stringify`                                   |
| **Storage**       | Web Storage API    | `localStorage.getItem`, `setItem`을 통한 브라우저 영속 데이터 관리                         |

---

## 🚀 실행 방법

각 실습은 브라우저에서 바로 실행하거나 로컬 웹 서버 환경(예: VSCode Live Server)을 통해 구동할 수 있습니다.

> [!NOTE]
> `2095`, `2109`, `2116` 실습은 비동기 통신(`fetch()`, `XMLHttpRequest`)을 통해 로컬 리소스를 요청하므로, 브라우저의 CORS 및 보안 정책 제한(`file://` 프로토콜 제한)을 방지하기 위해 **VS Code Live Server** 등의 로컬 서버 환경에서 실행해야 정상적으로 동작합니다.

1. 저장소 클론:
   ```bash
   git clone https://github.com/canotlivewithoutyou/SSAFY_Frontend_practice.git
   ```
2. VS Code에서 프로젝트 폴더 열기
3. 실행하려는 폴더의 `index.html` (또는 `.html` 파일) 우클릭 ➡️ **Open with Live Server** 실행