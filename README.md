# 프로젝트 소개

## 설치 및 실행방법
```
1. yarn 
2. yarn start
```

<br/>

## :sparkles: 프로젝트 구현 기능

### 로그인 및 회원가입 페이지
- [x] 이메일 및 비밀번호 유효성 검사
  - [x] 이메일 형식(`@`,`.`)이 포함되어 있어야함
  - [x] 비밀번호 형식 (8자리 이상 문자 숫자 각 하나이상씩 포함)이 포함되어 있어야함
  
### Todo List 페이지
- [x] todoList CRUD구현
- [x] 로그인 되었을시 로그인 및 회원가입창 접근 불가
- [x] 뒤로가기 클릭시 접속한 todo 순서대로 뒤로가기가 처리됨
- [x] todo list부분의 제목 클릭시 상세 todo 접근 가능
- [x] 로그인 되지 않았을시(localstorage에 token이 없을시) 로그인 창으로 이동
  - [x] 로그아웃시 토큰을 지우고 로그인창으로 이동



## :memo: 노션 페이지
https://www.notion.so/TodoList-Refactoring-TS-React-Query-ff026a9688814aa99f366f845be04b36?pvs=4

## :pushpin: 기술 스택

<div>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/styled-component-DB7093?style=for-the-badge&logo=styled-component&logoColor=white">
<img src="https://img.shields.io/badge/react-query-FF4154?style=for-the-badge&logo=react-query&logoColor=white">
<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
</div>
<br/>

## 스택 선정 이유

- react-query
  - 과거 redux와 redux thunk를 통해 상태를 관리한 경우, 보일러플레이트가 증가하였고 클라이언트와 서버 상태를 관리하기 복잡해진 경험이 발생 
  - react-query는 서버와 클라이언트 상태를 분리해주고 상태관리를 단순화 시켜 개발자의 편의성과 생산성에 이점을 줌
  

- styled-components

  - CSS in JS로 동적 스타일링, 조건부 스타일리이 가능하고, 재사용성과 확장성의 이점이 있어 선택


- typescript

  - 컴파일시 발생할 수 있는 오류를 발견 가능하여 안전하다.
  - IDE에 타입 힌트, 추론을 줌으로써 자동완성 기능을 통해 개발자의 생산성을 높여준다.
  
  



## :sparkles: 개발기간

2022/03 ~ 2022/04 (2주)

<br/>


## :open_file_folder: 파일구조

- 대분류) 기능 (api, constant page등)

- 중분류) 페이지 경로 (Main, SignUp, SignIn)

- 소분류) 기타

```tsx

src
 ┣ api // api 설정 및 분리 
 ┣ components // 컴포넌트 폴더 
 ┃ ┣ common // 공통 사용 컴포넌트
 ┃ ┣ Header
 ┃ ┣ HOC 
 ┃ ┣ Layout
 ┃ ┣ Main
 ┃ ┣ SignIn
 ┃ ┗ SignUp
 ┣ constants // 리터럴값을 관리하기 위한 폴더  
 ┣ hooks // custom hooks 폴더
 ┃ ┣ auth // signIn, signUp 관련 hooks 
 ┃ ┣ common // 공통 사용 hooks
 ┃ ┗ queries // react-query custom hooks
 ┣ pages // 페이지별 컴포넌트 집합
 ┣ shared 
 ┣ styles // 스타일 설정 폴더
 ┣ types // 타입 선언 폴더 
 ┣ utils // 편의용 함수 폴더
 ┣ App.tsx
 ┣ index.css
 ┗ index.tsx

```

<br/>

## :page_facing_up: 페이지

### 게시글 작성


<img width=600px src=/>

<br/>

### 게시글 수정
<img width=600px src=/>

<br/>

### 게시글 삭제
<img width=600px src=/>

<br/>

### 회원가입
<img width=600px src=/>

<br/>

### 로그인
<img width=600px src=/>

<br/>


## 고민한 부분





## :notebook: 과제1
[간단한 정리]
