API호출 3대장
1. Fetch
2. Ajax
3. Axios

fetch보다 axios가 기능이 더 많다.(axios는 라이브러리 형태)
1. 노드js에서는 fetch를 못씀. 하지만 axios는 백엔드 프론트엔드 둘 다 사용 가능
2. 타임아웃(api가 몇 초 이상 반응이 없으면 끊음)
3. baseUrl 앞의 url 세팅해줌
4. request, response를 보낼때마다 상태보기 가능.(에러를 바로 프린팅해줌. 디버깅하기 수월)

axios는 .http함수

API 사용시 주의사항
1. API는 개발자의 주민번호이기 때문에 공개적인 곳에 노출금지.
2. 바깥쪽에서 .env파일 만들고 그 안에다가 API키넣기.
3. 띄어쓰기도 키로 인정하기 때문에 공백사용 금지.
4. 노드는 API_KEY=""써도 되지만 리액트는 안됨.
5. 앞에다가 REACT_APP_API_KEY="" 리액트앱을 써줘야 한다.
6. 깃허브에 올리고 싶지 않은 파일은 .gitignore에 작성해준다.
7. .env를 설정하고 난 후에 무조건 재시작해야 적용된다.(재시작 안하면 api키값 못가져옴)

1. axios는 항상 data라는 필드 안에 받은 응답을 넣어준다.
2. await(차례 대로 불러오기 때문에)은 서로 연관되어 있을때 or 하나만 부를 때 사용, 
   각자 부르는 api라면 Promise.all을 써서 동시에 부르자.