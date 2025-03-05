# 🧩ECR (방탈출 스마트 스토어)
**공포테마 방탈출 예약과 정보를 효율적으로 관리할 수 있는 통합 서비스**

## 📅 제작 기간 
- **2024.09.02 ~ 2024.09.27**

## 📌 프로젝트 소개
- 포털 사이트 구축과 사용자의 편의성 증대
- 화면에서 다양한 데이터를 볼 수 있도록 통합정보시스템 구축
- 오픈소스 및 오픈 API를 활용한 플랫폼 구성
- 통합 예약 시스템으로 빠르고 보기 쉽게 예약 가능

### ⭐ 프로젝트 팀원
- **팀장: 현민환 | 팀원 : 김광훈, 박혜연, 유병수, 김승욱 |**

### 담당 기능
- **테마 예약**: 선택 날짜의 예약 데이터 로드(비동기적 선택 버튼 비활성화), 동시성 제어(중복예약 방지)
- **예약 확인**: 사용자가 예약한 예약 정보를 제공
- **예약내역조회**: 사용자의 예약 데이터 조회(전체조회 / 날짜별 조회 / 예약번호 조회)
- **관리자 예약관리**: 전체조회 / 날짜별 조회 / 예약상태 조회 / 예약승인 & 취소승인
- **관리자 회원관리**: 회원 삭제 기능

---

## 🛠️ Stacks

**백엔드**
![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![JPA](https://img.shields.io/badge/JPA-59666C?style=for-the-badge&logo=jpa&logoColor=white)
![Oracle](https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white)

**프론트엔드**
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**기타**
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

**API 활용**
![Naver Maps API](https://img.shields.io/badge/Naver%20Maps%20API-03C75A?style=for-the-badge&logo=naver&logoColor=white)
![Naver Geocoding API](https://img.shields.io/badge/Naver%20Geocoding%20API-03C75A?style=for-the-badge&logo=naver&logoColor=white)
![Kakao Address API](https://img.shields.io/badge/Kakao%20Address%20API-FFCD00?style=for-the-badge&logo=kakaotalk&logoColor=black)

---

## 📌 기능 설명

### 🎭 테마 예약
![테마 예약](https://github.com/user-attachments/assets/9824bca1-d3ab-40e6-a3e5-0a3b02b44e02)

**기능 구현**
- 사용자가 선택한 날짜의 테마 예약 데이터를 비동기적으로 로드하여 버튼 활성화/비활성화 적용  
- `useEffect`를 활용해 날짜 선택 시 렌더링하여 기존 버튼 클릭 초기화  
- 트랜잭션을 사용하여 예약 시 중복 확인 후 예약 처리(동시성 제어)  
- 예약 성공 시 해당 테마 데이터와 등록된 예약 데이터를 예약 확인 페이지로 전달  

---

### 🚨개발 이슈 해결
#### **🛠️ 이슈 1 - 중복 예약 문제**
- **발견🔍**: 날짜 변경 시 기존 버튼 상태가 유지되어 중복 예약 발생
- **과정🛠️**: 날짜 변경 시 버튼의 클릭효과를 해제하지 않고 데이터를 비동기 처리하여 발생한 문제임을 확인
- **해결✅**: `useEffect`를 활용해 날짜 변경 시 버튼 상태 초기화

#### **🛠️ 이슈 2 - 다중 사용자 동시 예약 문제**
- **발견🔍**: 다수의 사용자가 이용 시 동시간대 같은 예약을 할 경우 예약 충돌 발생
- **과정🛠️**: 동시성 제어 방법을 검색 중 '낙관적 락', '비관적 락' 등 다양한 DB 충돌 방지 방법을 확인했으나 구현하는 과정에서 코드의 복잡성과 성능 저하 문제가 발생할 가능성을 발견
- **해결✅**: 트랜잭션을 활용하여 예약 시 중복 데이터 검사 후 예약 처리

---

### 📌 예약 확인
![예약 확인](https://github.com/user-attachments/assets/1b4d0bee-7c0a-4ba8-bb05-70e14f08ee3b)

**기능 구현**
- 예약 성공 시 테마의 데이터와 예약 정보를 사용자에게 제공
- '확인하기' 버튼 클릭 시 예약내역조회 페이지로 이동하여 편의성 제공

---

### 📌 관리자 예약 관리 & 예약 내역 조회

#### 예약관리(관리자)
![관리자 예약 관리](https://github.com/user-attachments/assets/83872899-5895-45e6-b642-ddc54ae9c1cc)

**기능 구현**
- 해당 웹 사이트를 통해 이루어지는 모든 예약 데이터 관리
- 전체조회/날짜별 조회/결제상태 조회 3가지 조회 기능 구현
- 결제 상태에 따른 예약승인/취소승인 버튼 활성화를 관리하여 예약관리 시스템 구현
- 20개 단위 페이징 처리로 효율적인 메모리 관리

#### 예약내역조회(사용자)
![사용자 예약내역조회](https://github.com/user-attachments/assets/8143d2de-8f08-4abc-aa8d-af993a60eeef)

**기능 구현**
- 전체조회/날짜별 조회/예약번호 조회 3가지 조회 기능 구현
- 예약 데이터를 출력하여 사용자가 예약 날짜를 쉽게 확인하도록 편의성 제공
- '취소신청' 버튼으로 관리자에게 취소신청을 요청하여 사용자에게 예약관리 권한 일부 제공

---

### 🚨 개발 이슈 해결(공통)
#### **🛠️ 이슈 - 예약 리스트에 데이터 중복**
- **발견🔍**: 날짜별 조회 후 결제상태/예약번호 조회 시 기존 예약 데이터에 추가되어 리스트가 출력되는 문제 발생
- **과정🛠️**: 기존 데이터에 추가 조회한 데이터가 그대로 추가되어 발생하는 문제임을 확인
- **해결✅**: 조회 시 `useState`로 데이터 상태를 관리하며 다른 조회기능 사용 시 상태를 초기화하여 새롭게 데이터를 관리

---

### 📌 일반회원 관리 & 업체회원 관리

**기능 구현**
- 회원타입(일반회원(1), 관계자(2))에 따른 회원 리스트 출력
- '회원삭제' 버튼을 통해 미사용 회원 삭제 기능 구현
- 20개 단위 페이징 처리로 효율적인 메모리 관리

---

## 🔔보완할 점
- ✅ **회원가입 시 SMS 인증 기능 추가**
  - 사용자 계정의 안전성을 확보하기 위해 SMS 인증 API를 활용한 기능 추가
- ✅ **결제 시스템 강화 (결제 API 추가)**
  - 예약 시 결제 처리를 위해 결제 API를 추가
- ✅ **실적 조회 기능 (월별 결제, 취소 통계 추가)**
  - 테마별 이용 횟수, 월별 결제 금액, 취소 신청 횟수 등의 통계를 확인할 수 있는 기능 추가
- ✅ **리뷰 등록 기능 (예약 완료 후 사용자 리뷰 가능)**
  - 사용자가 예약을 완료한 후 리뷰를 등록할 수 있는 기능 추가