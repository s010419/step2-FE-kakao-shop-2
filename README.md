<details>
<summary>Step-2.-Week-1</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 1주차 클론 과제

</br>

## **과제명**
```
1. 쇼핑몰 웹사이트 탐색을 통한 페이지 구성
2. UI 컴포넌트의 명칭과 사용법 익히기
```
</br>


## ✅**과제 1.**

✅**페이지 구성**

**1. 메인 페이지**

- **핵심기능**
  1) 상품 목록
  2) 검색 기능
  3) 로그인 기능
- **기능 상세 설명**
  1) 상품 상세 정보 : 상품의 상세 정보(사진, 설명, 가격 등을 제공하는) 제공 및 상품 결과 페이지로 이동
  2) 상품 검색 기능 : 사용자가 원하는 상품을 검색할 수 있는 기능. 상품 검색 페이지로 이동
  3) 로그인 기능 : 로그인 페이지로 이동
- **인터페이스 요구사항**
  1) 검색 버튼
  2) 상품 추천 (실시간 인기 상품, 인기 검색어)
  3) 개인화
  4) 상품 카테고리

**2. 로그인 페이지**

- **핵심기능**
  1) 사용자 인증
  2) 계정 관리 (아이디, 비밀번호 찾기 / 회원가입)
- **기능 상세 설명**
  1) 사용자 인증 (로그인) : 사용자의아이디와 비밀번호로 사용자의 신원 확인 및 인증을 하는 기능
  2) 계정 관리 : 페이지에서 회원가입 링크와 아이디 / 비밀번호 찾기 혹은 재설정 링크 제공
- **인터페이스 요구사항**
  1) 아이디(이메일), 비밀번호 입력
  2) 로그인 버튼
  3) 에러 및 안내 메시지 (해결 방법 안내)
  4) 회원 가입 및 비밀번호 재설정 버튼

**3. 회원가입 페이지**

- **핵심기능**
  1) 신규 회원 정보 등록
  2) 약관 동의
- **기능 상세 설명**
  1) 신규 회원 정보 등록 : 가입 양식을 제공하여 새로운 사용자가 회원으로 등록할 수 있는 기능 제공
  2) 약관 동의 : 사용자에게 서비스 이용 약관, 개인정보 처리 방침 등에 대한 정보 및 동의하는 체크박스 제공
- **인터페이스 요구사항**
  1) 약관 및 개인정보 동의
  2) 가입 양식
  3) 아이디, 비밀번호 중복 확인
  4) 비밀번호 보안 요구 사항
  5) 에러 및 안내 메시지 (해결 방법 안내)
  6) 가입 버튼

**4. 상품 검색 페이지**

- **핵심기능**
  1) 상품 목록
  2) 최근 검색 
  3) 인기 키워드
- **기능 상세 설명**
  1) 상품 목록 : 사용자가 입력한 검색어와 관련된 상품들을 나열
  2) 최근 검색 : 최근 검색한 상품들을 나열하여 사용자에게 편의성 제공
  3) 인기 키워드 : 실시간 인기 키워드를 제공해 현 트렌드나 인기 상품에 대한 정보 제공
- **인터페이스 요구사항**
  1) 페이지 상단에 검색창 배치
  2) 상품명, 카테고리, 브랜드 등의 다양한 검색 옵션
  3) 정렬 및 필터링

**5. 개별 상품 페이지**

- **핵심기능**
  1) 상품 세부 정보 제공 (상품 관련 정보, 할인 정보, 리뷰 등)
  2) 옵션 선택 및 구매
  3) 관련 상품 추천
- **기능 상세 설명**
  1) 상품 세부 정보 제공 : 상품에 대한 자세한 정보 표시. 고화질 상품 이미지, 상품 이름, 가격, 할인 정보 등을 제공
  2) 옵션 선택 및 구매 : 사용자에게 상품의 다양한 옵션(개수, 색상 등)을 조절할 수 있는 기능을 제공 (장바구니 기능 포함)
  3) 관련 상품 추천 : 관련 상품이나 유사 상품을 추천
- **인터페이스 요구사항**
  1) 상품 상세 정보
  2) 상품 선택 옵션
  3) 상품 리뷰
  4) 관련, 추천 상품
  5) 장바구니 담기 버튼
  6) 구매하기 버튼

**6. 결제 페이지**

- **핵심기능**
  1) 결제 정보 입력
  2) 결제 수단 선택
- **기능 상세 설명**
  1) 결제 정보 입력 : 사용자가 결제에 필요한 정보를 입력
  2) 결제 수단 선택 : 사용자에게 다양한 결제 수단을 선택할 수 있는 기능 제공 (신용카드, 체크카드, 앱 결제 등)
- **인터페이스 요구사항**
  1) 주문 상품 요약
  2) 결제 정보 입력 (주소, 연락처, 수령인, 결제 수단 등)
  3) 쿠폰, 적립금 적용
  4) 최종 결제 금액 확인 (상품 합산 금액, 할인 금액, 배송비 등 포함)
  5) 결제 버튼

**7. 결제 완료 페이지**

- **핵심기능**
  1) 주문 상세 정보
- **기능 상세 설명**
  1) 주문 상세 정보 : 사용자에게 주문이 성공적으로 완료되었는지 안내, 추가로 주문 번호, 상품 목록, 가격 수량 등 정보 제공
- **인터페이스 요구사항**
  1) 주문 상품 요약
  2) 결제 정보 요약
  3) 주문 상태 안내
  4) 메인 페이지 버튼

**8. 장바구니 페이지**

- **핵심기능**
  1) 상품 추가 및 삭제
  2) 상품 정보, 가격 확인 (할인 정보 제공)
  3) 상품 수량 조절
- **기능 상세 설명**
  1) 상품 추가 및 삭제 : 사용자가 상품을 장바구니에 추가 혹은 삭제할 수 있는 버튼 제공
  2) 상품 정보, 가격 확인 : 장바구니에 담긴 각 상품의 정보와 가격 제공 (총 가격과 쿠폰, 이벤트로 인한 할인 정보 제공)
  3) 상품 수량 조절 : 장바구니 페이지에서 상품의 수량을 조절할 수 있는 버튼 제공
- **인터페이스 요구사항**
  1) 장바구니 목록
  2) 상품 수량 조절 버튼
  3) 할인 적용 가능 여부
  4) 메인 페이지 버튼
  5) 주문하기 버튼

✅**디렉터리 구조**

| 폴더명 | 역할 |
| ----- | ----- |
| public | 프로젝트에서 정적인 파일들을 저장하는 파일 |
| apis | api와 관련된 코드를 포함하는 파일 |
| assets | 프로젝트에서 사용할 리소스 파일 |
| components | 프로젝트에서 사용되는 리액트 컴포넌트를 포함하는 파일 |
| context | context 관련 코드 파일 |
| pages | 각 페이지에 대한 코드 파일 |
| styles | css 파일 |
| utils | 유틸리티 코드와 함수들을 포함하는 파일 |

</br>

✅**과제 2.**
```
프론트 개발자가 다른 프론트 개발자와 소통 및 UI 디자이너와 소통하는데 필수적인 UI 컴포넌트의 명칭과 사용법을 익힙니다.
수업시간에 배운 컴포넌트의 명칭과 사용법 이외에 대표적인 UI 라이브러리 홈페이지를 조사해보면 수많은 컴포넌트가 어떤식으로 동작하는지 확인할 수 있습니다.
리액트 프로젝트를 생성하고, 토스트, 브래드크럼, 캐러셀, 라디오버튼, 토글버튼, 체크리스트를 UI 라이브러리가 아닌 자신만의 방식으로 스타일링하고 상태 관리를 적용해 코드를 작성하세요.
작성된 코드는 레퍼지토리에 업로드하여 멘토님에게 전달해주세요.
```
</br>
✅**과제 3.**
```
각 컴포넌트를 시현해 볼 수 있는 페이지를 만드세요. 
하나의 페이지에 모든 컴포넌트를 둬도 좋고, 각 페이지별로 분리해도 괜찮습니다.
```
</br>
## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**
```
1. README.md 파일은 동료 개발자에게 프로젝트에 쉽게 랜딩하도록 돕는 중요한 소통 수단입니다. 
해당 프로젝트에 대해 아무런 지식이 없는 동료들에게 설명하는 것처럼 쉽고, 간결하게 작성해주세요.
2. 좋은 개발자는 디자이너, 기획자, 마케터 등 여러 포지션에 있는 분들과 소통을 잘합니다. 
UI 컴포넌트의 명칭과 이를 구현하는 능력은 필수적인 커뮤니케이션 스킬이자 필요사항이니 어떤 상황에서 해당 컴포넌트를 사용하면 좋을지 고민하며 코드를 작성해보세요.
```
</br>
## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**
>- PR 제목 : 부산대FE_라이언_1주차 과제

</br>

</div>
</details>

---

<details>
<summary>Step-2.-Week-2</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 2주차 클론 과제
</br>

## **과제명**
```
1. 코드 디자인 패턴과 상태 관리
```
</br>

## **과제 설명**

✅**과제 1. 아토믹 컴포넌트 디자인 패턴 사용** 
```
- 회원가입, 로그인 페이지 개발에 필요한 컴포넌트를 아토믹 디자인 패턴을 사용해 작성하세요.
- 작성한 컴포넌트는 사용의 편의성을 위해 Props에 적절한 주석을 달아주세요.
```

</br>

✅**과제 2. 회원 가입, 로그인 페이지 개발** 

```
- 백엔드 API 문서를 참고하여 회원가입, 로그인 페이지를 개발하세요.
- 각 페이지에는 적합한 값이 입력되도록 하고, 적절하지 않은 값이 들어온 경우 API 요청을 보내기 전에 프론트에서 에러 캐칭을 해주세요.
- 회원가입, 로그인 후에는 메인 페이지로 리다이렉트하세요.
- API 응답 과정에서 로그인이 실패하는 경우, 회원가입이 실패한 경우에 대해서 에러 캐칭도 적용해야 합니다.
```

</br>

✅**과제 3. 상태관리 모듈 적용** 

```
- 로그인 후에 사용자의 정보를 상태관리 모듈을 하나 선정해 저장하고 불러올 수 있도록 코드를 작성하세요.
- 사용자가 로그인 상태일 때는 GNB 영역에 로그인 버튼이 보이면 안됩니다.
- 로그아웃시 상태를 초기화하세요.
- 새로고침 시에도 상태를 잃지 않고 유지해야 합니다.
- 일정한 시간이 지나면 로그인 유지가 끝나도록 설정하세요.(예: 1일)
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**
```
1. 아토믹 컴포넌트를 작성할 때 Atoms, Molecules에 반드시 특정한 컴포넌트가 들어갈 필요는 없습니다. 개발자의 주관이 들어갈 수 있는 부분이니 적절한 뎁스로 나누어보세요.
2. API 요청을 보내고, 응답 받을 때 성공 케이스만 생각해 코드를 작성하는 경우가 많습니다. 숨은 에러 케이스는 없을지 한 번 더 고민해보세요.
3. 상태 관리 모듈은 자신이 써보고 싶은 어떤 모듈이던 상관 없습니다. 모듈을 사용해보면서 모듈에 들어가는 미들웨어나 툴도 사용해보세요.
```
</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_2주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


</div>
</details>

---

<details>
<summary>Step-2.-Week-3</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 3주차 클론 과제
</br>

## **과제명**
```
1. 비동기 통신 활용과 레이아웃
```
</br>

## **과제 설명**

✅**과제 1. 상품 목록 페이지 개발**
```
- 백엔드 API 문서를 참고하여 상품 목록 페이지를 개발하세요.
- 페이지네이션을 이용해 페이지 값을 증가시켜가며 조회될 수 있도록 코드를 작성해주세요. 
- 데이터 로딩 과정에 로더를 구현하세요.
- 데이터 불러오기를 할 때 react-query를 사용해보세요.
```

</br>

✅**과제 2. 스켈레톤과 로더**

```
- 컴포넌트에 props를 전달해 데이터 로딩 중 스켈레톤 또는 로더가 적용될 수 있도록 코드를 작성해보세요.
- 상품 목록 카드에 스켈레톤을 적용하세요.
- 페이지 전체에 대한 로딩이 진행될 때는 글로벌 로더를 적용해보세요.(적절한 모듈을 찾아 적용해도 좋습니다.)
```

</br>

✅**과제 3. 백엔드 상태 코드 반응**

```
- API 응답에 대해 전처리 하는 코드를 작성해보세요.
- 200, 300, 400, 500번 대의 상태 코드별 에러 캐칭이 필요한 경우라면 해당 함수에서 먼저 실행되도록 코드를 작성합니다.
- react-query에서 전처리하는 방식이 있다면 해당 방식을 적용하거나 또는 별도의 함수나 클래스를 만들어 관리를 시도해보면 됩니다.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**
```
1. 스켈레톤과 로더를 바텀부터 만들기보단 Codepen 등을 참고해 구현하고, Props를 통한 실제 적용에 집중해주세요.
2. 과제 3번을 해결할 때 Facade pattern을 참고해보세요.
3. 과제 1번을 해결할 때 react-query를 사용해보되 전체 프로젝트에 react-query를 적용할 필요는 없습니다. 하나 이상의 API 요청에 적용해보세요.
```
</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_3주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


</div>
</details>

---

<details>
<summary>Step-2.-Week-4</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 4주차 클론 과제
</br>

## **과제명**
```
상세 페이지 개발과 라이브러리
```
</br>

## **과제 설명**

✅**과제 1. 상품 상세 페이지 개발**
```
- 백엔드 API 문서를 참고하여 상품 상세 페이지를 개발하세요.
- 한 개의 UI 라이브러리를 선정해 사용해보세요. 
- 적절하지 않은 상품 ID 값이 들어오거나 찾을 수 없는 상품일 때 404 페이지 또는 "상품을 찾을 수 없습니다."라는 메시지가 있는 페이지로 이동될 수 있도록 코드를 작성하세요.
- 데이터 로딩이 완료될 때까지 로더를 적용하세요.
- '장바구니 담기' 버튼과 '구매' 버튼을 나누어 배치하세요.
```

</br>

✅**과제 2. 장바구니 페이지 개발**

```
- 백엔드 API 문서를 참고하여 장바구니 페이지를 개발하세요.
- 담아둔 상품에 대해 조회, 수량 변경, 항목 삭제가 구현되어야 합니다.
- '결제하기' 버튼을 만들고, 클릭시 결제 페이지로 이동될 수 있도록 개발하세요.
- 다른 모든 페이지와 마찬가지로 비동기 데이터 요청이 발생하니 로더 또는 스켈레톤을 통해 장바구니 목록을 불러올 때 로딩 상태를 표시하세요.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**
```
1. UI 라이브러리를 사용할 때 모든 구성요소에 UI 라이브러리의 규칙을 적용할 필요는 없습니다. UI 라이브러리의 사용법을 익히고, 하나 이상의 컴포넌트에 적용해봅니다.
```
</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_4주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


</div>
</details>

---

<details>
<summary>Step-2.-Week-5</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 5주차 클론 과제
</br>

## **과제명**
```
주문 결제 개발 
```
</br>

## **과제 설명**

✅**과제 1. 주문 결제 페이지 개발**
```
- 백엔드 API 문서를 참고하여 주문 결제 페이지를 개발하세요.
- 결제 페이지에서는 결제 전 결제 상세 정보에 대한 데이터를 조회하고, 결제를 확정하는 기능 2가지에 중점을 둡니다.
```

</br>

✅**과제 2. 테스트 결제**

```
- 한 개의 PG 서비스 또는 PG 서비스를 돕는 서드파티 앱을 사용해 개발합니다.
- 테스트 환경에서 결제를 성공해야 합니다.
- 결제가 실패하는 경우(잔고 부족, 결제 정보 불일치 등)에 대해 에러 캐칭을 적용하세요.
- 다양한 에러 상황에 대해 주석으로 에러 상황과 대응 방식을 설명해주세요.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**
```
1. 결제를 구현할 때 새로운 모듈을 학습하는데 있어서 생각보다 시간 소요가 클 것입니다. 또한 몇몇의 PG사에서 제공하는 SDK의 경우 리액트와 호환성이 나쁜 경우도 있습니다. 
2. 테스트 결제시에 실제 비용이 나가는 것처럼 보이는 경우도 있습니다. PG사마다 정책이 다르지만 대부분 테스트 금액은 1일 이내로 환급받는 구조입니다.
3. 결제시에는 생각보다 많은 데이터를 하나의 페이로드에 담아 전달해야 합니다. 이 과정에서 데이터가 적절하지 않은 값이 들어갈 가능성이 높고, 코드가 복잡해질 수 있습니다. 기능 단위를 나누어 함수형 프로그래밍을 시도해보는게 도움이 될 수 있습니다.
```
</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_5주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


</div>
</details>


---


<details>
<summary>Step-2.-Week-6</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 6주차 클론 과제
</br>

## **과제명**
```
프로젝트 마무리
```
</br>

## **과제 설명**

✅**과제 1. 배포**
```
- Netlify를 통해 배포를 진행합니다.
- 계정을 생성하고 자신의 레포지토리를 연결해 배포합니다.
- 배포 레벨에서 사용될 환경 변수는 인스턴스에 적용되도록 직접 설정해줍니다.
- 배포에 사용될 브랜치는 개발 브랜치와 꼭 분리합니다.
```

</br>

✅**과제 2. 프로젝트 마무리**

```
- 모든 핵심 기능이 정상 작동되도록 숨은 버그와 기능을 점검합니다.
- 특정한 파일이 너무 크다면, 코드 내의 함수를 다른 파일로 옮겨 import / export 하는 등 코드 리펙터링을 진행합니다.
- 개발 환경과 배포 환경 모두 버그가 없는지 체크합니다.
```

</br>

✅**과제 3.  README.md 정리**

```
- 배포한 환경에 대해 구체적인 설명을 남겨주세요.
- 포함될 내용은 배포 순서, 배포에 영향 받는 브랜치, 배포시 주의 사항, 배포 환경 등 다른 개발자가 해당 프로젝트를 인수인계 받았을 때 문제가 없도록 꼼꼼히 작성합니다.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**
```
1. 많은 서비스가 개발 레벨에서는 잘 작동하다가도 배포 단계에서 에러를 만나는 경우가 많습니다. 배포 후에 기능을 하나하나 점검해보고, 여러 환경에서 시도해보세요.
2. 배포된 환경을 하나의 브라우저에서만 테스트하지 말고, 최대한 다양한 디바이스와 브라우저에서 테스트해보세요. 삼성 브라우저, 아이폰 사파리, 데스크탑이라면 크롬, 사파리, 파이어폭스 등으로 테스트해보세요.
3. 코드를 시간이 지나서 보면 어떤 목적으로, 왜 만들었는지 알아보기 힘든 경우가 많습니다. 기본적인 내용이라 생각한 부분도 주석을 달아주세요.
```
</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**
**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

>- PR 제목 : 부산대FE_라이언_6주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


</div>
</details>