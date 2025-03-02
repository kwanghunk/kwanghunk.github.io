import { IoCalendarClear, IoCall, IoMail, IoPerson, IoSchool } from "react-icons/io5"

const mainpage = {
	title: "안녕하세요👋, 신입 풀스택 개발자 김광훈입니다!",
	contents: [
		"저는 2024년 05월부터 11월 까지 **6개월간 Java 풀스택 과정 교육**을 이수하며, **실무 중심의 개발 역량**을 길렀습니다,\n수료 후에도 학습을 지속하며, 수강생들과 **토이 프로젝트를 기획/개발하며 팀장 역할**을 수행했습니다.",
		"총 **세 번의 프로젝트**를 통해 **아키텍쳐 설계**와 **소프트웨어 구조**에 깊은 관심을 가지게 되었고,\n**공식 문서를 탐독**하며 시스템 설계에 대한 이해도를 지속적으로 향상시켰습니다.",
		"8년간 **직업군인**으로서 강한 책임감과 조직 내 협업 능력을 길러왔으며,\n이를 기반으로 개발팀에서도 **원활한 소통과 협업**을 기여할 수 있습니다."
	],
	profileInfo: [
			{ icon: <IoPerson />, title: "이름", text: "김광훈" },
			{ icon: <IoCalendarClear />, title: "생년월일", text: "1994.12.17" },
			{ icon: <IoMail />, title: "이메일", text: "hosookkh@gmail.com" },
			{ icon: <IoSchool />, title: "경력", text: "신입" },
			{ icon: <IoCall />, title: "연락처", text: "010-8668-9294" },
			{ icon: <IoSchool />, title: "교육", text: "더조은 강남점 Java 풀스택 6개월" }
	],
}
const home = {
	possessionAbility: [
		{
			title: "Backend Engineering",
			description: [
				"3개의 **협업 프로젝트**에서 백엔드 개발 담당, 설계부터 구현까지 경험",
				"**Spring Framework, JPA**를 활용한 데이터 모델링 및 RESTful API 개발 경험",
				"복잡한 Query 최적화를 위해 **Native Query** 및 **JPQL**을 활용한 데이터 조회 및 조작 경험",
				"**TDD 기반의 개발 프로세스**를 경험하고, JUnit 및 Mockito를 활용한 테스트 수행",
				"CI/CD를 적용하여 **자동 배포 환경 구축** 경험 (GitHub Actions)",
				"**AWS EC2**에 직접 배포 및 운영 경험, 기본적인 서버 관리 가능"
			]
		},
		{
			title: "Software Development",
			description: [
				"**프로젝트 팀장**으로서 요구사항 분석, 기술 스택 선정, 소프트웨어 아키텍처 설계 경험",
				"비즈니스 로직과 관심사의 분리를 위해 **Layered Architecture 적용**",
				"**도메인 주도 설계(DDD) 개념**을 학습하고, 엔티티와 서비스의 역할을 명확하게 분리하여 적용",
				"**Postman, JUnit, Mockito**를 활용한 API 및 단위 테스트 수행 경험"
			]
		}
	],
	github: "https://github.com/kwanghunk",
	call: "010-8668-9294",
	email: "hosookkh@gmail.com"
}

const projects = {
	personalProjects: [
		{
			title: "ECR",
			src: "semiProjectMain.gif",
			short: "방탈출 카페 종합 스마트 스토어",
			description: "제휴업체들의 방탈출 카페 정보를 한 곳에서 확인하고, 예약까지 간편하게 진행할 수 있습니다",
			techDetail: [
				"**Spring Security**와 **Redux**를 활용하여 보안과 상태를 효율적으로 관리",
				"**@transactional**을 사용한 동시성 제어로 **안정적인 예약 시스템** 구현"
			],
			"technologies": [
				"https://img.shields.io/badge/Java-ED8B00?style=for-the-flag&logo=java&logoColor=white",
				"https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-flag&logo=springboot&logoColor=white",
				"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-flag&logo=react&logoColor=%2361DAFB",
				"https://img.shields.io/badge/Oracle-F80000?style=for-the-flag&logo=oracle&logoColor=white"
			],
			github: "https://github.com/kwanghunk/ECR-WEB-PROJECT",
			demo: "git",
		},
		{
			title: "HealScope",
			src:"finalProjectMain.gif",
			short: "PACS(의료영상정보전달시스템)",
			description: "사용자 친화적 PACS 시스템을 구축하여 의료 영상 조회, 조작, 전송을 손쉽게 할 수 있습니다",
			techDetail: [
				"**대규모 의료 데이터**를 페이지네이션 기법으로 최적화하여 조회 성능 향상",
				"**Cornerstone API**를 활용하여 **직관적인 의료 영상 조작 UI/UX** 구현"
			],
			"technologies": [
				"https://img.shields.io/badge/Java-ED8B00?style=for-the-flag&logo=java&logoColor=white",
				"https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-flag&logo=springboot&logoColor=white",
				"https://img.shields.io/badge/Thymeleaf-%23005C0F.svg?style=for-the-flag&logo=Thymeleaf&logoColor=white",
				"https://img.shields.io/badge/Oracle-F80000?style=for-the-flag&logo=oracle&logoColor=white"
			],
			github: "https://github.com/kwanghunk/PACS-WEB-PROJECT",
			demo: "git",
		},
		{
			title: "DECOBET",
			src:"DECOBET.jpg",
			short: "주니어 개발자 코드 번역기(조기 종료)",
			description: "주니어 개발자의 코드 이해를 돕고 학습 효율성을 높이는 웹 애플리케이션입니다",
			techDetail: [
				"Spring Security와 **JWT 인증 기반의 사용자 인증 시스템 구축**",
				"**프로그래밍 언어**를 지원하며, 입력된 코드 형식을 번역하여 반환",
				"REST API 설계를 통해 **표준화된 데이터 교환 및 유지보수성 향상**"
			],
			"technologies": [
				"https://img.shields.io/badge/Java-ED8B00?style=for-the-flag&logo=java&logoColor=white",
				"https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-flag&logo=springboot&logoColor=white",
				"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-flag&logo=react&logoColor=%2361DAFB",
				"https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-flag&logo=mysql&logoColor=white"
			],
			github: "https://github.com/kwanghunk/Third-WEB-Project",
			demo: "",
		},
		{
			title: "DECOBET v2",
			src:"DECOBETV2.gif",
			short: "주니어 개발자 코드 번역기(리빌딩)",
			description: "주니어 개발자의 코드 이해를 돕고 보안 강화 및 기능확장을 목표로 한 리빌딩 프로젝트입니다",
			techDetail: [
				"**Spring Security와 JWT 기반의 Refresh Token Rotation(RTR) 전략 적용**을 통한 보안 강화",
				"**Redis 기반 Refresh Token 검증** 및 세션 만료 처리",
				"비회원 사용자 **IP 기반 기능 제한**"
			],
			"technologies": [
				"https://img.shields.io/badge/Java-ED8B00?style=for-the-flag&logo=java&logoColor=white",
				"https://img.shields.io/badge/SpringSecurity-6DB33F?style=for-the-flag&logo=springsecurity&logoColor=white",
				"https://img.shields.io/badge/json%20web%20tokens-%23000000.svg?&style=for-the-flag&logo=json%20web%20tokens&logoColor=white",
				"https://img.shields.io/badge/Redis-%23DC382D.svg?&style=for-the-flag&logo=redis&logoColor=white",
				"https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-flag&logo=mysql&logoColor=white"
			],
			github: "https://github.com/kwanghunk/TEC-WEB-Project",
			demo: "",
		}
	]
}

const skills = {
	title: "Skills",
	mySkills: [
		{
			subject: "CORE",
			skills: [
				"Java",
				"Spring",
				"Spring Boot",
				"MyBatis",
				"JPA + Native Query + JPQL",
				"Spring Security",
				"JWT",
				"node js"
			]
		},
		{
			subject: "FRONT",
			skills: [
				"HTML",
				"CSS",
				"JavaScript",
				"JQuery",
				"React"
			]
		},
		{
			subject: "SERVER",
			skills: [
				"Apache Web Server",
				"Tomcat"
			]
		},
		{
			subject: "RDBMS",
			skills: [
				"MySQL",
				"Oracle"
			]
		},
		{
			subject: "IDE",
			skills: [
				"Eclipse",
				"STS"
			]
		},
		{
			subject: "OTHER",
			skills: [
				"Amazon EC2",
				"GitHub",
				"VS Code"
			]
		}
	]
}

const contact = {
	title: "kwanghunk",
	content: "Thank you for visiting my portfolio.",
	kakao: "http://pf.kakao.com/_xlFBKn/chat",
	github: "https://github.com/kwanghunk",
	youtube: "https://www.youtube.com/channel/UCJnFBieyKEnZ1pwvsxzFTRA"
}

const floatingbar = {
	kakao: "http://pf.kakao.com/_xlFBKn/chat",
	github: "https://github.com/kwanghunk",
	youtube: "https://www.youtube.com/channel/UCJnFBieyKEnZ1pwvsxzFTRA",
	src: [ "float_kakao", "float_github", "float_youtube" ],
	top: "#MainPage"
}
export { mainpage, home, projects, skills, contact, floatingbar };