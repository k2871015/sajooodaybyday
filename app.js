// ==============================
// SAJU DAY BY DAY - app.js
// Fortune + Lucky Character/Food
// ==============================

document.addEventListener('DOMContentLoaded', () => {

    // --- DATA: Characters ---
    const CHARACTERS = [
        { emoji: '🦦', name: '수달', tip: '수달은 늘 즐겁게 노는 동물이에요. 오늘 당신도 작은 것에서 행복을 찾아보세요!' },
        { emoji: '🐼', name: '판다', tip: '판다처럼 여유롭게, 하지만 하고 싶은 건 끝까지! 오늘은 차분한 집중력이 빛날 거예요.' },
        { emoji: '🦊', name: '여우', tip: '영리한 여우처럼 오늘은 재치 있는 한마디가 큰 기회를 만들어 줄 수 있어요.' },
        { emoji: '🐱', name: '고양이', tip: '고양이처럼 당당하고 자신감 있게! 오늘 당신의 매력이 누군가의 눈을 사로잡을 거예요.' },
        { emoji: '🐧', name: '펭귄', tip: '함께할 때 더 강해지는 펭귄! 오늘은 동료나 친구와 함께하는 시간이 큰 힘이 됩니다.' },
        { emoji: '🦙', name: '알파카', tip: '알파카처럼 푹신하고 따뜻한 하루! 오늘은 주변 사람들에게 따뜻한 말 한마디를 건네보세요.' },
        { emoji: '🐨', name: '코알라', tip: '코알라처럼 깊이 쉬어가는 하루! 무리하지 말고 충분한 휴식을 통해 에너지를 충전하세요.' },
        { emoji: '🐸', name: '개구리', tip: '개구리처럼 큰 도약을 준비하는 날! 지금의 노력이 놀라운 점프로 이어질 거예요.' },
        { emoji: '🦔', name: '고슴도치', tip: '고슴도치처럼 부드러운 면을 보여줄 때예요. 경계를 조금 낮추면 더 좋은 인연이 생겨요.' },
        { emoji: '🐰', name: '토끼', tip: '토끼처럼 빠르고 민첩하게! 오늘 기회가 왔을 때 망설이지 말고 빠르게 잡으세요.' },
    ];

    // --- DATA: Foods (with cute character persona) ---
    const FOODS = [
        {
            emoji: '🍩', name: '도넛', charName: '도나짱',
            face: '( ˘ᵕ˘ )', color: '#f97316',
            personality: '달달하고 긍정적인 에너지 발산형',
            traits: ['✨ 항상 웃음 가득', '🎵 노래 흥얼거리기 좋아함', '💛 구멍이 있어도 괜찮아 (빈칸은 상상력으로!)'],
            tip: '달콤한 도나짱이 오늘의 친구! 작은 것에도 기뻐하는 도나짱처럼 오늘 하루 소소한 행복을 챙겨보세요!'
        },
        {
            emoji: '🍣', name: '스시', charName: '스시로',
            face: '(ᴗ͈ˬᴗ͈)', color: '#0ea5e9',
            personality: '조용하지만 알찬 내실파 완벽주의자',
            traits: ['🎯 집중력 최고', '🌊 물 좋아하는 바다파', '👑 품격 있는 미식가'],
            tip: '정갈한 스시로처럼 오늘은 핵심만 깔끔하게! 군더더기 없는 행동이 최고의 결과를 만들어요.'
        },
        {
            emoji: '🍕', name: '피자', charName: '피자왕',
            face: '(ﾉ◕ヮ◕)ﾉ', color: '#ef4444',
            personality: '모두와 어울리는 파티 분위기 메이커',
            traits: ['🎉 파티를 좋아해', '🧀 나눌수록 더 행복한 타입', '🔥 열정이 넘쳐흘러'],
            tip: '피자왕처럼 혼자보다 함께가 훨씬 맛있는 날! 오늘은 주변 사람들과 에너지를 나눠보세요.'
        },
        {
            emoji: '🧁', name: '컵케이크', charName: '큐피',
            face: '(◍•ᴗ•◍)', color: '#ec4899',
            personality: '사랑스럽고 화사한 분위기 요정',
            traits: ['🌸 꽃보다 예쁜 존재', '🎀 리본 콜렉터', '💝 선물 주는 걸 좋아함'],
            tip: '큐피처럼 오늘 당신의 존재 자체가 누군가에게 선물이에요. 그냥 있는 것만으로도 충분해요!'
        },
        {
            emoji: '🍜', name: '라멘', charName: '라면군',
            face: '(っ˘ڡ˘ς)', color: '#f59e0b',
            personality: '뜨끈하고 정 많은 국물파 친구',
            traits: ['♨️ 따뜻함이 넘침', '😤 차가운 건 못 참음', '🫂 안아주기 전문'],
            tip: '뜨끈한 라면군처럼 오늘은 따뜻한 한마디가 큰 힘이 돼요. 먼저 연락해 보는 건 어떨까요?'
        },
        {
            emoji: '🍰', name: '케이크', charName: '케키',
            face: '( ˶ˆ꒳ˆ˵ )', color: '#8b5cf6',
            personality: '특별한 날을 만드는 축제 전문가',
            traits: ['🎂 매일이 생일 같은 기분', '🕯️ 소원 들어주는 능력자', '🎊 기쁜 일 찾기 달인'],
            tip: '케키와 함께라면 오늘도 특별한 날! 작은 성취도 크게 기념하는 습관을 만들어 보세요.'
        },
        {
            emoji: '🥑', name: '아보카도', charName: '아보씨',
            face: '(｡•̀ᴗ-)✧', color: '#22c55e',
            personality: '건강하고 지적인 힙스터 건강왕',
            traits: ['🌿 자연주의 라이프', '📚 알고 보면 엄청난 박식가', '🧘 요가 애호가'],
            tip: '건강한 아보씨처럼 오늘은 몸 챙기기 최우선! 좋은 음식, 충분한 수분이 오늘의 행운 열쇠예요.'
        },
        {
            emoji: '🍦', name: '아이스크림', charName: '아이스',
            face: '( ´ ∀ ` *)', color: '#67e8f9',
            personality: '시원하고 달콤한 여름 자유영혼',
            traits: ['❄️ 더위엔 절대 지지 않아', '🌈 맛이 무려 99가지', '☀️ 햇살을 사랑함'],
            tip: '아이스처럼 시원하게 생각하고 달콤하게 행동하는 하루! 복잡한 건 내려두고 즐겨봐요!'
        },
        {
            emoji: '🥐', name: '크루아상', charName: '크루아',
            face: '(ó ̯ò )', color: '#d97706',
            personality: '겹겹이 깊이 있는 세련된 파리지앵',
            traits: ['☕ 커피와 찰떡궁합', '🗼 우아한 것을 사랑', '📖 아침 독서 즐겨함'],
            tip: '크루아처럼 오늘의 노력이 겹겹이 쌓이는 날! 당장 결과가 안 보여도 괜찮아요, 착착 쌓이고 있어요.'
        },
        {
            emoji: '🍓', name: '딸기', charName: '딸기짱',
            face: '(ˊ▽ˋ*)', color: '#f43f5e',
            personality: '새콤달콤 감성 풍부한 매력 덩어리',
            traits: ['🌺 꽃밭에 있으면 제일 행복', '💃 감정 표현 풍부함', '🎶 발라드 좋아함'],
            tip: '딸기짱처럼 오늘은 감정에 솔직해지는 날! 마음을 숨기지 말고 솔직하게 표현해 보세요!'
        },
    ];

    // --- DATA: Fortune Templates ---
    const FORTUNES = {
        great: {
            label: '대길 🌟',
            scoreRange: [85, 99],
            messages: [
                "오늘은 모든 것이 당신의 편! 오래 고민해온 일에 과감히 도전해보세요. 우주가 당신을 응원하고 있습니다. 특히 오전 시간대에 중요한 결정을 내리면 최상의 결과를 얻을 수 있어요. 행운의 방향은 동쪽입니다. ✨",
                "당신의 에너지가 최고조에 달하는 하루! 새로운 사람을 만나거나 새로운 일을 시작하기에 더없이 좋은 날이에요. 오늘 만나는 사람이 당신 인생의 귀인이 될 수도 있어요. 웃음을 잃지 마세요! 🌈",
            ],
            categories: [
                { icon: '💕', name: '애정운', stars: 5, text: '인연의 꽃이 활짝 피는 날' },
                { icon: '💼', name: '직장운', stars: 5, text: '리더십이 빛나는 하루' },
                { icon: '💰', name: '재물운', stars: 4, text: '뜻밖의 수입이 생길 수도' },
                { icon: '🌱', name: '건강운', stars: 5, text: '몸과 마음 모두 최상 컨디션' },
            ]
        },
        good: {
            label: '길 😊',
            scoreRange: [65, 84],
            messages: [
                "전반적으로 순탄한 하루가 예상돼요. 무리하게 욕심내지 않고 꾸준히 나아가면 원하는 결과에 가까워질 수 있어요. 오후에 좋은 소식이 기다리고 있을지도 몰라요. 기대하되 집착은 No! 💫",
                "긍정적인 에너지가 흐르는 하루! 평소 망설이던 연락을 먼저 해보는 것도 좋아요. 진심을 담은 작은 행동 하나가 큰 결실로 돌아올 수 있답니다. 행운의 숫자는 7! 🍀",
            ],
            categories: [
                { icon: '💕', name: '애정운', stars: 4, text: '따뜻한 교류가 기다려요' },
                { icon: '💼', name: '직장운', stars: 4, text: '착실한 노력이 빛을 발해요' },
                { icon: '💰', name: '재물운', stars: 3, text: '필요한 것에만 집중하세요' },
                { icon: '🌱', name: '건강운', stars: 4, text: '가벼운 운동으로 활력 UP!' },
            ]
        },
        average: {
            label: '평 😐',
            scoreRange: [45, 64],
            messages: [
                "오늘은 평범하게 흘러가는 하루! 하지만 평범한 날이야말로 내면을 충전하고 다음 도약을 준비하는 소중한 시간이에요. 서두르지 말고 하나씩 차근차근 해나가세요. 당신의 속도가 맞아요. 🌿",
                "크게 기대하지도, 너무 걱정하지도 않아도 되는 날이에요. 오늘은 새로운 것보다는 익숙한 것에 집중하는 게 현명해요. 소소한 행복을 발견하는 것이 오늘의 미션! ☕",
            ],
            categories: [
                { icon: '💕', name: '애정운', stars: 3, text: '솔직한 대화가 관계를 살려요' },
                { icon: '💼', name: '직장운', stars: 3, text: '꼼꼼하게 체크하고 진행하세요' },
                { icon: '💰', name: '재물운', stars: 3, text: '지출을 조금 줄여보는 하루' },
                { icon: '🌱', name: '건강운', stars: 3, text: '충분한 수면이 최고의 보약' },
            ]
        },
        caution: {
            label: '주의 ⚡',
            scoreRange: [25, 44],
            messages: [
                "오늘은 신중함이 키워드! 중요한 결정이나 큰 투자는 잠시 미루는 게 좋아요. 대신 평소 미뤄왔던 정리나 준비를 하기에 딱 좋은 날이에요. 폭풍 전의 고요함, 내일을 위해 오늘을 아껴요. 🛡️",
                "작은 실수에 주의가 필요한 날이에요. 하지만 걱정 마세요! 이런 날일수록 주변 사람들과 함께하면 큰 힘이 됩니다. 혼자 끙끙 앓지 말고 가까운 사람에게 털어놓아 보세요. 💪",
            ],
            categories: [
                { icon: '💕', name: '애정운', stars: 2, text: '오해가 생기지 않도록 주의' },
                { icon: '💼', name: '직장운', stars: 3, text: '결재 전 한 번 더 확인!' },
                { icon: '💰', name: '재물운', stars: 2, text: '충동구매 자제, 저축하는 날' },
                { icon: '🌱', name: '건강운', stars: 3, text: '무리한 운동은 피하세요' },
            ]
        }
    };

    // --- DOM Elements ---
    const fortuneBtn = document.getElementById('fortune-btn');
    const retryBtn = document.getElementById('retry-btn');
    const inputSection = document.getElementById('input-section');
    const resultSection = document.getElementById('result-section');
    const moodBtns = document.querySelectorAll('.mood-btn');
    const userNameInput = document.getElementById('user-name');

    let selectedMood = 'happy';

    // --- Mood Selector ---
    moodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            moodBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedMood = btn.dataset.mood;
        });
    });

    // --- Seeded Random (based on name + date for consistency) ---
    function seededRandom(seed) {
        let x = Math.sin(seed + 1) * 10000;
        return x - Math.floor(x);
    }

    function generateSeed(name) {
        const today = new Date();
        const dateStr = `${today.getFullYear()}${today.getMonth()}${today.getDate()}`;
        let hash = 0;
        const str = name + dateStr + selectedMood;
        for (let i = 0; i < str.length; i++) {
            hash = ((hash << 5) - hash) + str.charCodeAt(i);
            hash |= 0;
        }
        return Math.abs(hash);
    }

    // --- Main Fortune Logic ---
    function generateFortune() {
        const name = userNameInput.value.trim() || '행운이';
        const seed = generateSeed(name);

        // Pick fortune type
        const fortuneTypes = Object.keys(FORTUNES);
        const fortuneKey = fortuneTypes[Math.floor(seededRandom(seed) * fortuneTypes.length)];
        const fortune = FORTUNES[fortuneKey];

        // Pick score within range
        const [min, max] = fortune.scoreRange;
        const score = Math.floor(seededRandom(seed + 1) * (max - min + 1)) + min;

        // Pick message
        const message = fortune.messages[Math.floor(seededRandom(seed + 2) * fortune.messages.length)];

        // Pick character and food
        const charIdx = Math.floor(seededRandom(seed + 3) * CHARACTERS.length);
        const foodIdx = Math.floor(seededRandom(seed + 4) * FOODS.length);
        const character = CHARACTERS[charIdx];
        const food = FOODS[foodIdx];

        return { name, fortune, score, message, character, food };
    }

    // --- Render Stars ---
    function renderStars(count) {
        let html = '';
        for (let i = 1; i <= 5; i++) {
            html += `<span class="star ${i <= count ? 'active' : ''}">★</span>`;
        }
        return html;
    }

    // --- Display Fortune ---
    function displayFortune(data) {
        const { name, fortune, score, message, character, food } = data;

        // Date display
        const today = new Date();
        const dateStr = today.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
        document.getElementById('fortune-date').textContent = dateStr;
        document.getElementById('fortune-user-name').textContent = `✨ ${name}님의 운세`;

        // Score ring
        document.getElementById('score-number').textContent = score;
        const scorePct = (score / 100) * 100;
        document.getElementById('score-ring').style.setProperty('--score-pct', `${scorePct}%`);

        // Category grid
        const grid = document.getElementById('fortune-grid');
        grid.innerHTML = '';
        fortune.categories.forEach((cat, i) => {
            const el = document.createElement('div');
            el.className = 'category-item';
            el.style.animationDelay = `${i * 0.1}s`;
            el.innerHTML = `
                <div class="cat-header">
                    <span class="cat-icon">${cat.icon}</span>
                    <span class="cat-name">${cat.name}</span>
                </div>
                <div class="cat-stars">${renderStars(cat.stars)}</div>
                <p class="cat-text">${cat.text}</p>
            `;
            grid.appendChild(el);
        });

        // Fortune message
        document.getElementById('fortune-message').textContent = message;

        // Lucky items - character
        document.getElementById('lucky-character').textContent = character.emoji;
        document.getElementById('lucky-character-name').textContent = character.name;
        document.getElementById('lucky-tip').textContent = `💡 ${character.tip}`;

        // Lucky food character card
        const foodCard = document.getElementById('food-character-card');
        document.getElementById('food-char-emoji').textContent = food.emoji;
        document.getElementById('food-char-face').textContent = food.face;
        document.getElementById('food-char-charname').textContent = food.charName;
        document.getElementById('food-char-name').textContent = food.name;
        document.getElementById('food-char-personality').textContent = food.personality;
        const traitsList = document.getElementById('food-char-traits');
        traitsList.innerHTML = food.traits.map(t => `<li>${t}</li>`).join('');
        document.getElementById('food-char-tip').textContent = food.tip;
        foodCard.style.setProperty('--food-color', food.color);

        // Show result
        inputSection.style.display = 'none';
        resultSection.style.display = 'block';
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // --- Event Listeners ---
    fortuneBtn.addEventListener('click', () => {
        const data = generateFortune();
        displayFortune(data);
    });

    userNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const data = generateFortune();
            displayFortune(data);
        }
    });

    retryBtn.addEventListener('click', () => {
        resultSection.style.display = 'none';
        inputSection.style.display = 'block';
        inputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

});
