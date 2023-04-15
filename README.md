# 프로젝트 소개
- 원티드 프리온보딩 FE 챌린지의 과제
- 개인사로 인해 해당 강의 수강당시에 Refactoring 할 수 없어서 늦게 수행 
- 기존 Todolist 만들기 과제에서 강의자료를 바탕으로 Refactoring

<br/>

## :memo: 노션 페이지
꼭 확인해주세요!<br/>
https://www.notion.so/TodoList-Refactoring-TS-React-Query-ff026a9688814aa99f366f845be04b36?pvs=4

<br/>

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

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [x] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

<br/>

## :pushpin: 기술 스택

<div>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/styled-component-DB7093?style=for-the-badge&logo=styled-component&logoColor=white">
<img src="https://img.shields.io/badge/react-query-FF4154?style=for-the-badge&logo=react-query&logoColor=white">
</div>
<br/>

## 스택 선정 이유

- react-query
  - 과거 redux와 redux thunk를 통해 상태를 관리한 경우, 보일러플레이트가 증가하였고 클라이언트와 서버 상태를 관리하기 복잡해진 경험이 발생 
  - react-query는 서버와 클라이언트 상태를 분리해주고 상태관리를 단순화 시켜 개발자의 편의성과 생산성에 이점을 주어 사용.
  

- styled-components

  - CSS in JS로 동적 스타일링이 가능하고, 선언적인 프로그래밍이 가능.
  - 컴포넌트 기반 스타일링으로 기존 CSS, SCSS 보다 재사용성과 유지보수에 좋다. 


- typescript

  - 컴파일시 발생할 수 있는 오류를 발견 가능하여 안전하다.
  - IDE에 타입 힌트, 추론을 줌으로써 자동완성 기능을 통해 개발자의 생산성을 높여준다.
  
<br/>

## :sparkles: 개발기간

2022/03 ~ 2022/04 (2주)

<br/>


## :open_file_folder: 파일구조

- 대분류) 기능 (api, constant page등)

- 중분류) 페이지 경로 (Main, SignUp, SignIn)

- 소분류) 기타

```tsx

src
 ┣ api // api 설정 및 분리를 위한 폴더 
 ┣ components // 컴포넌트 폴더 
 ┃ ┣ common // 공통 사용 컴포넌트
 ┃ ┣ Header
 ┃ ┣ HOC // 고차컴포넌트 폴더
 ┃ ┣ Layout
 ┃ ┣ Main // 페이지 별 세부 컴포넌트 분류
 ┃ ┣ SignIn // 페이지 별 세부 컴포넌트 분류
 ┃ ┗ SignUp // 페이지 별 세부 컴포넌트 분류
 ┣ constants // 리터럴값을 관리하기 위한 폴더  
 ┣ hooks // custom hooks 폴더
 ┃ ┣ auth // signIn, signUp 관련 hooks 
 ┃ ┣ common // 공통 사용 hooks
 ┃ ┗ queries // react-query custom hooks
 ┣ pages // 페이지별 컴포넌트 집합
 ┣ shared // Router 폴더 
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
<img width=600px src=https://user-images.githubusercontent.com/96479626/232208106-1080a2d9-5fd1-4927-863a-ae54b1b4029f.gif />

<br/>

### 게시글 상세보기
<img width=600px src=https://user-images.githubusercontent.com/96479626/232208065-2bc2df2b-35d8-414f-b0c7-017329a7ded6.gif />

<br/>

### 게시글 수정

<img width=600px src=https://user-images.githubusercontent.com/96479626/232207984-0fbbbf42-444c-471b-bc4a-46942e24115c.gif />

<br/>

### 게시글 삭제
<img width=600px src=https://user-images.githubusercontent.com/96479626/232208037-1fef61ab-8fdf-457e-a7e9-47f823095d4d.gif
/>

<br/>

### 회원가입
<img width=600px src=https://user-images.githubusercontent.com/96479626/232208123-dac88263-1727-4196-9fdc-5b91c604885f.gif />

<br/>

### 로그인
<img width=600px src=https://user-images.githubusercontent.com/96479626/232207825-886f9072-abae-45bb-ac04-0503a7b8d7e7.gif>

<br/>


## 고민한 부분 & 진행과정
https://www.notion.so/TodoList-Refactoring-TS-React-Query-ff026a9688814aa99f366f845be04b36?pvs=4
