#  💊HealScope(PACS)
**의료영상 API연동 하여 의료이미지를 시각화한 프로젝트**

## 📅 제작 기간 
- **2024.10.07 ~ 2024.11.25**

## 📌 프로젝트 소개
- DICOM 데이터를 효율적으로 관리하고 의료 영상을 시각화하는 시스템 개발
- cornerstone.js 라이브러리를 활용하여 DICOM 이미지를 로드 및 시각화
- 환자 CT 및 X-ray 이미지 뷰어, 검색 및 필터링, 보고서 작성 기능 제공
- Spring Boot, Thymeleaf, Oracle DB를 사용하여 안정적이고 직관적인 UI 구현
- 의료 데이터 관리 효율성과 사용 편의성을 크게 향상

### ⭐ 프로젝트 팀원
- **팀장: 현민환 | 팀원 : 김광훈, 박혜연, 유병수, 김승욱 |**

### 담당 기능
- **DICOM 이미지 출력**: 환자의 의료 영상 데이터 출력
- **이미지 조작**: 흑백반전, 스크롤 줌, 플레이 클립 등 10여개의 영상 조작기능 지원
- **시리즈 비교**: 동적 그리드, 이미지 조작 툴 개별 지원
- **다운로드**: 단일 이미지(JPG)와 시리즈(dcm-zip) 파일 저장기능 지원

---

## 🛠️ Stacks

**백엔드**
![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring%20Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white)
![JPA](https://img.shields.io/badge/JPA-59666C?style=for-the-badge&logo=jpa&logoColor=white)
![Thymeleaf](https://img.shields.io/badge/Thymeleaf-005F0F?style=for-the-badge&logo=thymeleaf&logoColor=white)
![Oracle](https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white)

**프론트엔드**
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**기타**
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

---

# 기능설명
### 🖼️ DICOM 이미지 출력
![DICOM 이미지](https://github.com/user-attachments/assets/9ba8107e-f886-4e7d-9ae2-73bb0edbfb63)

**기능구현**
- `DICOM-Parser`, `Cornerstone-wado-image-loader`를 사용하여 **DICOM 이미지 시각화**
- **휠 이벤트**를 통한 이미지 탐색(이전/다음 이미지 로드)
- 선택한 `studyKey`를 기반으로 서버에서 이미지 데이터를 가져와 뷰어에 로드

---

### 🚨개발 이슈 해결
#### **🛠️ 이슈 1 - 대규모 의료 데이터 처리**
- **발견🔍**
  - CT, MRI 등 **대규모 의료 데이터 로드 시 메모리 과부하 & 처리 속도 저하** 발생
- **과정🛠️**
  - **ORM 프레임워크**를 사용 시 메모리 과부하 & 처리 속도 저하 발생
  - 효율적인 데이터 로드를 위해 대규모 **데이터 최적화** 방법 모색
- **해결✅**
  - 데이터 처리 속도를 개선하고 메모리 사용량을 줄이는 시도 중 `ArrayList<String>`으로 가공 시 유의미한 성과 확인
  - **네이티브 쿼리**(Native Query)를 적용하여 데이터 가공 및 속도 개선

#### **🛠️ 이슈 2 - 휠 이벤트 이미지 로드 문제**
- **발견🔍**
  - `CornerstoneTools`의 `StackScrollTool`이 휠 이벤트를 정상적으로 지원하지 않음
- **과정🛠️**: 
  - **휠 이벤트**를 통해 이미지를 전환하고, **클릭 이벤트**로 도구(Tool)를 적용하는 과정 중 문제 확인
  - `StackScrollMouseWheelTool`에서 휠 이벤트를 지원하는 것을 확인했지만 **시리즈 비교 기능과 충돌** 발생  
- **해결✅**: 
  - **커스텀 휠 이벤트**를 직접 구현하여 문제 해결  
  - 시리즈 비교 기능에서도 안정적으로 작동

---

### 🎛️ 이미지 조작
![이미지 조작](https://github.com/user-attachments/assets/ecab8665-b43d-4da1-862c-2c60101b30fe)

**기능구현**
- 사용자가 선택한 시리즈 이미지에 **명도 조절, 회전, 확대/축소** 등 17개 기능 추가
- 주석 도구(Annotation Tool) 활성화 상태에서 **비활성화 관리** 적용 

---

### 🚨개발 이슈 해결
#### **🛠️ 이슈 - CornerstoneTool 적용**
- **발견🔍**: 주석 도구(Annotation Tool) 사용 시 **CornerstoneTool API 미작동**
- **과정🛠️**: 공식 문서 사용법과 GitHub 레포지토리를 확인 결과 **초기값 설정** 누락이 문제임을 확인
- **해결✅**: 라이브러리에 작성된 각 도구의 초기 설정 코드를 분석 후 주석 도구의 **초기값을 직접 추가**한 이후 정상적으로 적용

---

### 📋 시리즈 비교 (동적 그리드)
![시리즈 비교](https://github.com/user-attachments/assets/4f31afba-d3a5-4964-b88d-6e9cf5cedca2)

**기능구현**
- 비교할 과거 검사 기록 선택 시 **사용자가 설정한 레이아웃(행/열)에 따라 동적 그리드 생성**  
- 데이터가 많을 경우 **페이지네이션 적용**하여 메모리 사용 최적화  

---

### 🚨개발 이슈 해결
#### **🛠️ 이슈 - 시리즈 데이터 로드**
- **발견🔍**
  - 기존 API을 재활용하려 했으나, 서버가 **4개의 시리즈 단위**로만 데이터를 로드하도록 설정되어 있어 **유연한 그리드 생성**을 구현하는데 제약이 발생
- **과정🛠️**
  - 사용자가 지정한 Row와 Col 값으로 생성된 그리드의 셀 수가 기존 설정(4개)보다 많을 경우 **기존 데이터에 추가하는 방식**을 시도했으나 실패
- **해결✅**:
  - `RESTful API`를 통해 스터디의 모든 시리즈 **데이터를 동적으로 로드**하고, **선택된 레이아웃**에 맞춰 데이터 처리
  - 동적 페이지네이션을 적용하여 **메모리 사용량을 최적화**하면서 대규모 데이터를 관리

---

### 📖 시리즈 비교 (이미지 조작 툴 개별 적용)
![시리즈 비교](https://github.com/user-attachments/assets/3f8e0219-789f-4045-8100-31aab79011ba)

**기능 구현**
- 과거 검사 이력과 비교할 수 있도록 **두 개의 뷰어를 생성하여 개별적으로 관리**
- 각 뷰어에 **독립적으로 이미지 조작 기능(명도 조절, 회전, 확대/축소 등) 적용**
- 시리즈 비교 시 불필요한 도구 버튼은 비활성화해 사용자 경험을 개선

---

### 🚨개발 이슈 해결
#### **🛠️ 이슈 - 다중 뷰어 사용 시 이미지 조작**
- **발견🔍**
  - 캡슐화한 이미지 조작 함수에 `시리즈 비교` 기능이 포함되어 있어 **시리즈 비교 활성 상태에서 이미지 조작 시 충돌**이 일어나는 문제 확인
- **과정🛠️**
  - 시리즈 비교 함수를 분리하는 시도 중 코드 유지보수성과 일관성 문제를 확인
- **해결✅**
  - **다중 뷰어용 조작 함수**와 **단일 뷰어용 조작 함수**를 분리 구현하여 독립적인 관리가 가능하도록 개선

---

### 📥 시리즈 다운로드 (단일 이미지, 전체 이미지)
![다운로드](https://github.com/user-attachments/assets/8d6fddca-80a2-4041-b8e4-cf5f149a9b3f)

**기능 구현**
- `다운로드` 버튼 클릭 시 **다운로드 유형(현재 페이지/시리즈 전체)을 선택**하여 원하는 형식 다운로드 지원
- **현재 페이지 선택 시** 현재 로드된 이미지를 **JPG 형식**으로 변환하여 다운로드
- **시리즈 선택 시** 현재 시리즈 이미지 전체를 **ZIP 파일**로 압축하여 일괄 다운로드

---

### 🚨개발 이슈 해결
#### **🛠️ 이슈 - 시리즈 다운로드 dcm 파일 인식 오류**
- **발견🔍**
  - `dcm4che` 라이브러리를 사용하여 시리즈 다운로드 기능을 구현하려 했으나, **DICOM 파일(dcm) 인식 오류 발생**
- **과정🛠️**
  - **경로와 파일명을 설정**하는 등의 방법을 시도했으나 실패
- **해결✅**: 
  - **Java 기본 라이브러리를 사용**해 DICOM 파일을 확인 및 처리, `InputStreamResource`와 `ZipOutputStream`을 활용해 ZIP 파일을 생성 후 반환
  - ZIP 파일 생성에 사용한 **임시 디렉토리를 작업 완료 후 삭제하여 서버 자원 누수 방지**

---

### 🎛️ 이미지 조작 추가 기능설명
![도구구 조작](https://github.com/user-attachments/assets/2c661bc1-4ab3-40b1-8cb7-abb61f640d93)

**기능 구현**
#### 1. 윈도우 레벨 조정 (windowLevel.js)
- 밝기와 대비를 조정하여 DICOM 이미지를 사용자 선호에 맞게 조정합니다.
- `cornerstoneTools`를 사용해 도구를 활성화하고 비활성화할 수 있습니다.
- 버튼 상태(활성/비활성)와 도구 상태를 실시간으로 확인할 수 있습니다.

#### 2. 흑백 반전 (invert.js)
- 이미지를 흑백으로 반전하여 병변이나 구조물을 강조합니다.
- DICOM 이미지의 `viewport` 속성을 변경하여 반전 효과를 적용합니다.

#### 3. 이미지 이동 (drag.js)
- 이미지의 위치를 이동하여 관심 영역을 확대하거나 재배치할 수 있습니다.
- `cornerstoneTools`의 `Pan` 도구를 활성화하여 드래그 기능을 구현합니다.
- 멀티 뷰어 모드에서도 각각의 뷰어에서 독립적으로 드래그를 활성화할 수 있습니다.

#### 5. 줌 조정 (scrollZoom.js)
- 이미지를 확대/축소하여 세부 사항을 정밀하게 관찰할 수 있습니다.
- `cornerstoneTools`의 `Zoom` 도구를 활성화하여 줌 기능을 제공합니다.
- 멀티 뷰어 모드에서 각각의 뷰어에서 독립적으로 줌을 활성화할 수 있습니다.

#### 6. 초기화 (reset.js)
- DICOM 뷰어를 초기 상태로 복원합니다.
- 모든 도구를 비활성화하고 기본 뷰로 재설정합니다.
- 멀티 뷰어 모드에서도 모든 뷰어를 일괄 초기화할 수 있습니다.

---

![주석 도구 조작](https://github.com/user-attachments/assets/ea19396e-16c5-4a28-bdce-15ccd3023593)

**기능 구현**
### 1. 길이 측정 (length.js)
- 이미지 상에서 두 점 사이의 거리를 측정하여 정확한 수치를 제공합니다.
- `cornerstoneTools`의 `Length` 도구를 활용하여 사용자가 직관적으로 시작점과 끝점을 선택할 수 있습니다.
- 측정된 거리는 실시간으로 화면에 표시되며 저장 및 재사용이 가능합니다.
  
#### 2. 화살표 주석 추가 (arrow.js)
- 특정 이미지 영역을 강조하기 위해 화살표와 텍스트 주석을 추가합니다. 
- `cornerstoneTools`의 `ArrowAnnotate` 도구를 활용해 화살표의 시작점과 끝점을 정의할 수 있습니다.
- 텍스트 크기, 색상 및 위치는 사용자 요구에 따라 조정 가능하며 추가된 주석은 수정 및 이동이 가능합니다. 


#### 3. 각도 측정 (angle.js)
- 이미지 상에서 두 선분 사이의 각도를 측정하여 분석에 활용할 수 있습니다. 
- `cornerstoneTools`의 `Angle` 도구를 사용해 두 직선의 교차점 기준 각도를 실시간으로 계산합니다.
- 측정된 각도는 화면에 표시되며 저장 및 공유가 가능합니다.

#### 4. 주석 지우기 (eraser.js)
- 추가된 모든 주석(길이, 화살표, 각도 등)을 선택적으로 삭제할 수 있습니다.
- `cornerstoneTools`의 `Eraser` 도구를 활용해 원하는 주석만 제거하거나 이미지 상의 모든 주석을 한 번에 초기화할 수 있습니다.
- 오류 방지를 위해 삭제 전 확인 메시지를 표시합니다.

#### 5. 클립 재생 (playClip.js)
- DICOM 이미지 스택을 연속적으로 재생하여 동영상처럼 확인할 수 있는 기능입니다.
- `CornerstoneTools`의 `playClip` 및 `stopClip` 기능을 활용하여 재생 및 정지 기능을 구현합니다.
- FPS(초당 프레임 수)를 사용자 입력으로 조정하여 재생 속도를 변경할 수 있습니다.
- 재생 컨트롤 인터페이스를 통해 재생, 정지 및 속도 설정이 가능하며, 관련 버튼은 상호작용 중 적절히 활성화/비활성화됩니다.

---

### 🚨개발 이슈
#### **🛠️ 이슈 - 이미지 조작 도구 활성/비활성 상태 관리**
- **발견🔍**
  - DICOM 뷰어에서 도구를 활성화/비활성화할 때, **버튼 상태와 실제 도구 상태가 일치하지 않는 문제**가 발생
- **과정🛠️**
  - 각 도구와 버튼 상태를 수동으로 관리하려다 보니, 비활성화된 도구의 버튼이 활성화 상태로 남거나, 다중 뷰어 간 **도구 상태가 동기화되지 않는 문제** 확인
- **해결✅**
  - `deactivateAllTools` 함수를 만들어, 모든 도구를 비활성화하고 **버튼의 활성 상태 초기화**하도록 구현

---

## 🔔보완할 점
- ✅ **주석 저장 및 불러오기 기능**
  - 주석 기능(길이, 각도, 화살표 등)이 즉시 적용되지만, 저장 후 다시 불러올 수 있는 기능이 추가되면 사용자 편의성이 향상
- ✅ **리포트 공유 및 출력 기능**
  - 리포트 내용을 PDF로 저장하거나 이메일 등으로 공유할 수 있는 기능 추가
- ✅ **DICOM 데이터 업로드 기능**
  - 외부에서 가져온 DICOM 파일을 시스템에 업로드하여 뷰어에서 즉시 확인할 수 있는 기능 추가