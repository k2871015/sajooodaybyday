# DESIGN.md

## 1️⃣ Overview
- **브랜드 성격**: 프리미엄(Premium), 신비로움(Mystical), 동적인(Dynamic), 현대적인(Modern)
- **전체 디자인 톤**: 다크 테마 기반의 세련된 글래스모피즘(Glassmorphism) 스타일. 사주, 운세, 게임 추천을 제공하는 신비롭고 고급스러운 분위기.
- **핵심 특징**: 투명도와 블러를 활용한 깊이감(Depth), 생동감 있는 마이크로 애니메이션, 시선을 사로잡는 비비드한 포인트 컬러(Vibrant Colors) 및 은은한 오로라/블롭(Blob) 애니메이션.

## 2️⃣ Colors
모든 색상은 토큰 형태로 관리하며, 다크 테마를 기본으로 합니다.

- **Brand Colors**
  - `{colors.primary}` — `#8A2BE2` (비비드 퍼플, 신비로움 강조)
  - `{colors.secondary}` — `#FF1493` (딥 핑크, 운세/행운 액센트)
  - `{colors.accent}` — `#00FFFF` (시안, 인터랙션 요소)
  - `{colors.game}` — `#F97316` (비비드 오렌지, 게임 캐릭터 카드 전용)
- **Surface Colors (Glassmorphism)**
  - `{colors.surface.base}` — `rgba(25, 25, 35, 0.65)` (반투명 다크 그레이)
  - `{colors.surface.hover}` — `rgba(45, 45, 60, 0.8)`
  - `{colors.surface.active}` — `rgba(60, 60, 80, 0.9)`
  - `{colors.background}` — `#0B0B12` (매우 어두운 네이비/블랙)
- **Text Colors**
  - `{colors.text.primary}` — `#FFFFFF` (순백색, 높은 대비)
  - `{colors.text.secondary}` — `#B4B4C8` (연한 그레이, 보조 텍스트)
  - `{colors.text.muted}` — `#78788C` (비활성 텍스트)
- **Border Colors**
  - `{colors.border.light}` — `rgba(255, 255, 255, 0.12)` (글래스모피즘 테두리)
  - `{colors.border.focus}` — `rgba(138, 43, 226, 0.5)` (포커스 상태)

## 3️⃣ Typography
기본 폰트는 국문 `Noto Sans KR`과 영문 `Outfit`을 혼합하여 사용합니다.

| Token | Font Family | Size | Weight | Line Height | Letter Spacing |
| --- | --- | --- | --- | --- | --- |
| `{typography.h1}` | `Outfit`, sans-serif | `40px` | `900` (Black) | `1.1` | `-0.02em` |
| `{typography.h2}` | `Noto Sans KR`, sans-serif | `28px` | `700` (Bold) | `1.3` | `-0.01em` |
| `{typography.h3}` | `Noto Sans KR`, sans-serif | `20px` | `700` (Bold) | `1.4` | `0em` |
| `{typography.body.lg}` | `Noto Sans KR`, sans-serif | `18px` | `400` (Regular) | `1.6` | `0em` |
| `{typography.body.md}` | `Noto Sans KR`, sans-serif | `16px` | `400` (Regular) | `1.6` | `0em` |
| `{typography.body.sm}` | `Noto Sans KR`, sans-serif | `14px` | `400` (Regular) | `1.5` | `0.01em` |

## 4️⃣ Layout
일관된 스페이싱 체계와 여백 철학을 유지합니다.

- **Spacing Tokens**
  - `{spacing.xs}` — `4px`
  - `{spacing.sm}` — `8px`
  - `{spacing.md}` — `16px`
  - `{spacing.lg}` — `24px`
  - `{spacing.xl}` — `32px`
  - `{spacing.2xl}` — `48px`
- **Grid & Layout**
  - 모바일 중심 레이아웃 (최대 너비 700px).
  - 섹션 간 여백: `{spacing.2xl}`을 사용하여 요소 간 구분을 명확히 함.

## 5️⃣ Elevation & Depth
- **Glassmorphism (Blur)**
  - `{backdrop.blur.sm}` — `blur(8px)` (작은 컴포넌트, 태그)
  - `{backdrop.blur.md}` — `blur(16px)` (운세 카드, 게임 카드)
- **Shadows**
  - `{shadow.sm}` — `0 4px 6px rgba(0, 0, 0, 0.3)`
  - `{shadow.md}` — `0 8px 32px rgba(0, 0, 0, 0.4)` (글래스 카드 기본 그림자)
  - `{shadow.glow.pink}` — `0 0 15px rgba(255, 20, 147, 0.4)`
  - `{shadow.glow.purple}` — `0 0 20px rgba(138, 43, 226, 0.5)`

## 6️⃣ Shapes
- `{radius.sm}` — `12px` (태그, 인풋)
- `{radius.md}` — `20px` (버튼, 카테고리 아이템)
- `{radius.lg}` — `28px` (메인 운세 카드, 게임 캐릭터 카드)
- `{radius.full}` — `9999px` (원형 점수 링, 무드 버튼)

## 7️⃣ Components
- **운세/게임 카드**: `{colors.surface.base}`, `{backdrop.blur.md}`, `{radius.lg}`를 사용하여 유리 같은 질감 유지. 호버 시 Y축 이동과 `{colors.primary}` 또는 `{colors.game}` 테두리 발광.
- **CTA 버튼**: `{colors.primary}`와 `{colors.secondary}` 그라데이션, Shimmer 애니메이션 포함. 호버 시 Y축 상승 및 빛 번짐 그림자.
- **무드/태그 버튼**: 알약 형태(`{radius.full}`), 호버/활성화 시 브랜드 컬러 그라데이션 및 빛 번짐 적용.
- **점수 링(Score Ring)**: Conic-gradient를 활용한 다이나믹한 원형 그래프 디자인.

## 8️⃣ Do’s and Don’ts
**✅ Do's**
- 백그라운드 블롭(Blob) 애니메이션은 CSS `filter: blur(100px)`로 부드럽게 배경을 감싸게 할 것.
- 카드 내 요소 배치 시 `{spacing.md}`와 `{spacing.lg}`를 활용해 여유를 둘 것.
- 다크 모드 대비를 위해 중요 텍스트에는 빛 번짐 또는 그라데이션 텍스트 클리핑을 활용할 것.

**❌ Don’ts**
- 과도한 정보 밀집 방지. 카드를 시각적으로 중첩하지 말 것.
- `rgba`를 통하지 않은 불투명한 원색(예: `#FF0000`) 배경을 카드나 버튼에 사용하지 말 것.

## 9️⃣ Responsive
- 모바일 First 디자인. 모든 터치 타겟(버튼/인풋)은 최소 44px 이상의 높이를 가질 것.
- 화면 크기에 관계없이 중앙 정렬되는 레이아웃 철학 유지.
