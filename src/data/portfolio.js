const mainpage = {
	title: "안녕하세요👋, 신입 풀스택 개발자 김광훈입니다!",
	contents: [
		"2024년 05월 부터 2024년 11월 까지 Java 풀스택 과정 교육을 수료하고...",
		"수료 후 수강생 대상으로 팀을 꾸려 팀장으로 프로젝트를 진행한 경험이...",
		"아키텍쳐 설계와 api 설계 등의 관심이 많고, 공식사이트에서 모르는 아키텍...",
		"8년간 직업군인으로 일하며 사회생활, 협업 등의 능력이 뛰어나고..."
	],
	name: ["이름", "생년월일", "경력", "연락처", "이메일", "교육"],
	text: ["김광훈", "1994.12.17", "신입", "010-8668-9294", "hosookkh@gmail.com", "더조은 강남점 Java 풀스택 6개월"]
}

const home = {
	possessionAbility: [
		{
			title: "Backend Engineering",
			description: [
				"3개의 협업 프로젝트 개발 경험",
				"Spring framwork, JPA or Query 기반으로 간단한 Backend API 서버 자체 개발 가능",
				"TDD 개발 방식과 CI/CD 자동 배포를 통한 안정적인 서버 관리와 개발 가능 ",
				"자체 AWS 서비스 배포 작업 경험(EC2)"
			]
		},
		{
			title: "Software Development",
			description: [
				"프로젝트 팀장으로 소프트웨어 아키텍처와 소프트웨어 설계 경험",
				"Postman, Mockito 등을 이용한 테스트 수행 경험"
			]
		}
	],
	github: "https://github.com/kwanghunk",
	call: "010-8668-9294",
	email: "hosookkh@gmail.com"
}

const projects = { // 모바일: short | 노트북, 데스크탑: description, techDetail
	personalProjects: [
		{
			title: "ECR",
			src: "semiProjectMain.gif",
			short: "방탈출 카페 종합 스마트 스토어", // 모바일 화면 시 출력
			description: "제휴업체들의 방탈출 카페 정보를 한 사이트에서 확인해보세요", // 노트북, 데스크탑 화면 시 출력
			techDetail: [
				"Spring Security와 Redux를 사용하여 보안과 상태를 관리합니다.",
				"transactional을 사용한 동시성 제어를 통해 안정적인 예약 시스템이 장점입니다."
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
			description: "사용자 친화적 PACS 시스템으로 조회, 영상조작, 전송이 편리합니다.",
			techDetail: [
				"대규모 의료 데이터를 페이지네이션을 사용하여 조회 성능 향상",
				"의료용 API Cornerstone을 사용하여 사용자 친화적 UIUX를 구현"
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
			src:"semiProjectMain.gif",
			short: "주니어 개발자 코드 번역기",
			description: "주니어 개발자의 코드 이해를 돕고 학습 효율성을 향상시키는 웹 애플리케이션입니다. ",
			techDetail: [
				"Spring Security와 JWT의 RTR전략을 사용하여 보안 강화",
				"9개의 프로그래밍 언어를 지원하며 입력된 코드 형식의 번역된 코드를 반환",
				"REST API를 활용하여 데이터 교환을 간소화하였으며, 표준화된 설계로 유지보수성과 확장성을 고려"
			],
			"technologies": [
				"https://img.shields.io/badge/Java-ED8B00?style=for-the-flag&logo=java&logoColor=white",
				"https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-flag&logo=springboot&logoColor=white",
				"https://img.shields.io/badge/react-%2320232a.svg?style=for-the-flag&logo=react&logoColor=%2361DAFB",
				"https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-flag&logo=mysql&logoColor=white"
			],
			github: "https://github.com/kwanghunk/Third-WEB-Project",
			demo: "",
		}
	]
}

const experience = {
	title: "교육과정",
	experiences: [
		{
			title: "의료 API 연동 Java 풀스택 과정(6개월)",
			company: "더조은 아카데미 강남점",
			duration: "2024년 05월 - 2024년 11월",
			description: "Java, React 중심의 RESTful API 풀스택 교육 과정"
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

export { mainpage, home, projects, experience, skills };