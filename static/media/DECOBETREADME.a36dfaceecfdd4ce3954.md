# 🧩DECOBET(Third-WEB-Project)
**주니어 개발자를 위한 코드 번역 웹 사이트트**

## 📅 제작 기간 
- **2024.12.11 ~ 2025.01.24** (조기 종료 - 미완성)

## 📌 프로젝트 소개
- **DECOBET**은 **주니어 개발자들의 코드 이해를 돕고 학습 효율성을 향상**시키기 위해 제작된 웹 애플리케이션
- `Java`, `Spring Security`, `JWT`, `React` 기술 스택을 활용하여 개발되었으며, **안전하고 사용자 친화적인 번역 경험을 제공**을 목표로 제작0
- 사용자가 **입력하거나 첨부한 소스코드**를 코드 형식을 유지하면서 **기본 자료형, 메소드, 상수** 등을 **이해하기 쉬운 언어**로 번역
- `REST API`를 활용하여 클라이언트와 서버 간 데이터 교환을 간소화하였으며, **표준화된 설계를 통해 유지보수성과 확장성**을 고려

### ⭐ 프로젝트 팀원
- **팀장: 김광훈 | 팀원 : 최서진, 김현규 |**

---

### 담당 기능
#### 🙋‍♂️ 김광훈
- **데이터베이스 설계**: 프로젝트 핵심 데이터 관리 및 번역 데이터 구축
- **Spring Security 설정 & JWT 구현**: 인증 및 권한 관리를 위한 기초 서버 환경 구성
- **코드 번역 API(공동작업)**: 입력된 코드 형식을 유지하며 기본 자료형, 메소드, 상수를 변환
- **파일 업로드**: 코드 파일 업로드를 통해 번역 편의성 제공
- **번역 히스토리 관리**: 이전 번역 기록 조회, 저장, 다운로드 기능 구현
- **1:1 문의**: 사용자 - 작성/수정/삭제, 관리자 - 답변 작성 및 조회 기능 구현
- **관리자 코드 관리**: 번역 데이터 수정 및 신규 코드 추가 API 설계
- **코드 검색**: 키워드 기반 번역 결과 검색 기능 제공


#### 🙋‍♀️ 최서진 
- **데이터베이스 설계**: 프로젝트 핵심 데이터 관리 및 번역 데이터 구축.
- **Spring Security 설정 & JWT 구현**: 강화된 Security (accessToken,refreshToken) 
- **코드 번역 API(공동작업)**: 입력된 코드 형식을 유지하며 기본 자료형, 메소드, 상수를 변환.
- **FAQ**: 작성/수정/삭제/페이지네이션
- **IP**:IP 기반 비회원의 번역기능 요청 제한 API구현
- **디자인**: 로고 디자인 및 메인 페이지 프론트 작업

#### 🙋‍♂️ 김현규 
- **회원가입**: 아이디, 이메일 중복검사 및 비밀번호 일치여부 확인 후 회원가입 기능
- **로그인**: 입력된 아이디, 비밀번호를 통한 로그인 기능
- **로그아웃**: 토큰 초기화, 로컬 스토리지 초기화
- **마이페이지**: 회원정보 수정, 회원탈퇴 

---

## 🛠️ Stacks
**백엔드**
![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring%20Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)
![JSW](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![JPA](https://img.shields.io/badge/JPA-59666C?style=for-the-badge&logo=jpa&logoColor=white)

**프론트엔드**
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**기타**
![VSCode](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![Postman](https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![discord](https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)

---

# 기능설명
### 🖼️ 메인 페이지 - 코드 번역
![메인페이지](https://github.com/user-attachments/assets/d16cb807-17f1-44eb-87d2-394500fafb71)

**기능 구현**
- **코드 번역 기능**: 사용자가 입력하거나 업로드한 소스 코드의 원래 형식올 보존하며 **기본 자료형, 메소드, 상수 등을 분석하여 한글로 변환**
- **번역기록 조회**: 사용자의 번역 기록을 세션 스토리지에 저장하여 **이전 번역내역 조회**
- **번역기록 저장**: **특정 번역 결과를 데이터베이스에 저장**하여 재사용할 수 있도록 지원
- **번역 결과 다운로드**: 번역된 코드 및 원본 코드를 **TXT 파일** 형식으로 다운로드 가능

---

## 🚫 미완료 기능
- 📝 **OAuth 2.0 인증 로그인**
  - 사용자 계정의 안전성을 확보하기 위해 SMS 인증 API를 활용한 기능 추가
- 📝 **결제 시스템 강화**
  - 프리미엄 회원(기능제한 해제) 상품 결제 API 기능 추가

---

## 🔔보완할 점
- ✅ **OAuth 2.0 인증 로그인 **
  - 구글, 네이버, 카카오 등을 통한 로그인이 가능하게 개방형 표준 프로토콜 적용
- ✅ **결제 시스템 강화**
  - 예약 시 결제 처리를 위해 결제 API를 추가
- ✅ **프론트엔드 CSS 보완**
  - ROUTE별 컴포넌트 CSS 추가작업 필요
- ✅ **Security, JWT RTR 전략 후 추가적인 보안조치**
  - 악성 사용자의 Refresh Token 탈취 시 보안강화 조치 필요