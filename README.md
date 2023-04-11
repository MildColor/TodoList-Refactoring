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

## 스텍 선정 이유

- react-query

  - 상태를 서버 상태와 클라이언트 상태로 관심사를 분리를 도와주는 라이브러리로 api 통신을 용이하게 사용할수 있는 기능을 제공해 단순한 코드만으로 다양한 기능을 제공해주어 선택하였다.
  - 과거 redux와 redux thunk를 통해 상태를 관리한 경우, 보일러플레이트가 증가하였고 클라이언트와 서버 상태를 관리하기 복잡해진 경험이 발생 
  - react-query는 서버와 클라이언트 상태를 분리해주고 api 통신에 유리한 
  

- styled-components


  - CSS in JS로 css의 재사용성, 유지보수, 추상화 정도 높여줄수 있었기 때문에 선택하였다.


- typescript

  
  - 컴파일 단계에서 오류를 발견할수 있고 IDE의 타입 추론 기능을 통해서 가독성 및 생산성을 높일수 있어서 선택하였다.
  
  



## :sparkles: 개발기간

2022/03 ~ 2022/04 


<br/>

## :sparkles: 프로젝트 구현 기능

### 로그인 및 회원가입 페이지
- [x] 이메일 및 비밀번호 유효성 검사
  - [x] 이메일 형식(`@`,`.`)이 포함되어 있어야함
  - [x] 비밀번호 형식 (8자리 이상 문자 숫자 각 하나이상씩 포함)이 포함되어 있어야함
  
### Todo List 페이지
- [x] todoList CRUD구현
- [x] 게시글 삭제,수정,작성시 react-query의 optimistic update를 사용
- [x] 로그인 되었을시 로그인 및 회원가입창 접근 불가
- [x] 뒤로가기 클릭시 접속한 todo 순서대로 뒤로가기가 처리됨
- [x] todo list부분의 제목 클릭시 상세 todo 접근 가능
- [x] 로그인 되지 않았을시(localstorage에 token이 없을시) 로그인 창으로 이동
- [x] 로그아웃시 토큰을 지우고 로그인창으로 이동


<br/>


## :open_file_folder: 파일구조

- 대분류) 기능 (api, constant page등)

- 중분류) 페이지 경로 (Main, SignUp, SignIn)

- 소분류) 기타

```tsx

```

<br/>

## :page_facing_up: 페이지

### 게시글 작성


<img width=600px src="https://user-images.githubusercontent.com/49224104/212609740-7d7b225b-ff8f-4983-a22c-158f307fd64f.gif"/>

<br/>

### 게시글 수정
<img width=600px src="https://user-images.githubusercontent.com/49224104/212610175-9cf8f851-e183-4669-9865-6e0d9bb38e1b.gif"/>

<br/>

### 게시글 삭제
<img width=600px src="https://user-images.githubusercontent.com/49224104/212610223-782393ca-0eb2-4e46-8529-783cdcbb9074.gif"/>

<br/>

### 회원가입
<img width=600px src="https://user-images.githubusercontent.com/49224104/212610247-8895587c-fe2d-436e-a946-251e41d80fc0.gif"/>

<br/>

### 로그인
<img width=600px src="https://user-images.githubusercontent.com/49224104/212610311-c3b0ff89-a639-4beb-afe9-4649735ffd47.gif"/>

<br/>


## 고민한 부분





## :notebook: 과제1
[간단한 정리]
