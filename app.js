// SAJU DAY BY DAY - app.js v2.0
document.addEventListener('DOMContentLoaded', () => {

// --- CHARACTERS (행운의 동물) ---
const CHARACTERS = [
    { emoji:'🦦', name:'수달', tip:'수달처럼 오늘도 즐겁게! 작은 것에서 행복을 찾는 하루가 될 거예요.' },
    { emoji:'🐼', name:'판다', tip:'판다처럼 여유롭게, 하지만 하고 싶은 건 끝까지! 차분한 집중력이 빛날 거예요.' },
    { emoji:'🦊', name:'여우', tip:'영리한 여우처럼 재치 있는 한마디가 큰 기회를 만들어 줄 거예요.' },
    { emoji:'🐱', name:'고양이', tip:'고양이처럼 당당하고 자신감 있게! 오늘 당신의 매력이 눈을 사로잡을 거예요.' },
    { emoji:'🐧', name:'펭귄', tip:'함께할 때 더 강해지는 펭귄! 동료나 친구와 함께하는 시간이 큰 힘이 됩니다.' },
    { emoji:'🦙', name:'알파카', tip:'알파카처럼 푹신하고 따뜻한 하루! 주변 사람들에게 따뜻한 말 한마디를 건네보세요.' },
    { emoji:'🐨', name:'코알라', tip:'코알라처럼 깊이 쉬어가는 하루! 충분한 휴식을 통해 에너지를 충전하세요.' },
    { emoji:'🐸', name:'개구리', tip:'개구리처럼 큰 도약을 준비하는 날! 지금의 노력이 놀라운 점프로 이어질 거예요.' },
    { emoji:'🦔', name:'고슴도치', tip:'경계를 조금 낮추면 더 좋은 인연이 생겨요. 부드러운 면을 보여줄 때예요.' },
    { emoji:'🐰', name:'토끼', tip:'토끼처럼 빠르고 민첩하게! 기회가 왔을 때 망설이지 말고 빠르게 잡으세요.' },
];

// --- GAMES (스팀/웹게임 추천 + 캐릭터) ---
const GAMES = [
    {
        title: 'Hades', platform: 'Steam', genre: '⚔️ 로그라이크 액션',
        url: 'https://store.steampowered.com/app/1145360/Hades/',
        charEmoji: '⚡', charName: '자그레우스', charFace: '(ง •̀_•́)ง', color: '#f97316',
        moods: ['great'],
        matchReason: '오늘 당신의 에너지는 최고조! 자그레우스처럼 지옥에서도 포기하지 않는 열정으로 도전해보세요.',
        tip: '죽어도 다시 강해지는 자그레우스처럼, 오늘의 실패는 내일의 성장 데이터예요. 끝없이 도전!'
    },
    {
        title: 'Hollow Knight', platform: 'Steam', genre: '🗡️ 메트로배니아 액션',
        url: 'https://store.steampowered.com/app/367520/Hollow_Knight/',
        charEmoji: '🐛', charName: '나이트', charFace: '(・・;)ゞ', color: '#818cf8',
        moods: ['great', 'good'],
        matchReason: '조용하지만 강인한 나이트처럼 오늘 당신도 내면의 강인함을 발견할 수 있어요.',
        tip: '아무 말 없이 묵묵히 나아가는 나이트처럼, 오늘은 말보다 행동으로 보여주는 날이에요!'
    },
    {
        title: 'Celeste', platform: 'Steam', genre: '🏔️ 플랫포머',
        url: 'https://store.steampowered.com/app/504230/Celeste/',
        charEmoji: '🍓', charName: '마들린', charFace: '(˘◡˘ )', color: '#ec4899',
        moods: ['great', 'good'],
        matchReason: '마들린처럼 포기하지 않고 산 꼭대기를 향해! 오늘의 도전도 반드시 완수할 수 있어요.',
        tip: '불안해도 괜찮아요. 마들린도 그랬으니까요. 한 걸음씩 나아가면 어느새 정상에 있을 거예요.'
    },
    {
        title: 'Dave the Diver', platform: 'Steam', genre: '🌊 어드벤처',
        url: 'https://store.steampowered.com/app/1868140/DAVE_THE_DIVER/',
        charEmoji: '🤿', charName: '데이브', charFace: '(•̀ᴗ•́)و', color: '#0ea5e9',
        moods: ['good'],
        matchReason: '바다 깊숙이 탐험하는 통통한 데이브처럼, 오늘 새로운 것을 발견하는 설레는 하루가 될 거예요!',
        tip: '데이브처럼 낮엔 바다를 탐험하고 밤엔 스시집을 운영해요. 오늘은 뭐든 척척 잘 되는 날이에요!'
    },
    {
        title: 'Stardew Valley', platform: 'Steam', genre: '🌾 농장 시뮬레이션',
        url: 'https://store.steampowered.com/app/413150/Stardew_Valley/',
        charEmoji: '👨‍🌾', charName: '스타듀 파머', charFace: '( ´ ▽ ` )ﾉ', color: '#22c55e',
        moods: ['average'],
        matchReason: '오늘은 천천히, 자기 페이스대로! 스타듀 밸리의 농부처럼 꾸준한 일상이 최고의 행복이에요.',
        tip: '씨앗 하나가 작물 하나가 되듯, 오늘의 작은 노력이 나중에 큰 수확이 돼요. 서두르지 마세요!'
    },
    {
        title: 'Slime Rancher 2', platform: 'Steam', genre: '🫧 오픈월드 어드벤처',
        url: 'https://store.steampowered.com/app/1657630/Slime_Rancher_2/',
        charEmoji: '🟢', charName: '베아트릭스', charFace: '(*•̀ᴗ•́*)و', color: '#84cc16',
        moods: ['good', 'average'],
        matchReason: '귀여운 슬라임들을 돌보는 베아트릭스처럼 오늘은 주변을 보살피는 따뜻한 하루예요!',
        tip: '슬라임들은 항상 통통 튀어요. 오늘도 베아트릭스처럼 긍정적인 에너지로 세상을 가득 채워봐요!'
    },
    {
        title: 'Vampire Survivors', platform: 'Steam', genre: '🧛 생존 로그라이크',
        url: 'https://store.steampowered.com/app/1794680/Vampire_Survivors/',
        charEmoji: '🧄', charName: '안토니오', charFace: '( ͠° ͟ʖ ͡°)', color: '#a855f7',
        moods: ['average'],
        matchReason: '스스로 알아서 싸우는 생존자처럼, 오늘은 자동으로 좋은 일들이 굴러올 거예요!',
        tip: '레벨만 올리면 혼자 다 알아서 싸우는 뱀서라이크처럼, 오늘은 흐름에 맡기는 게 최고 전략!'
    },
    {
        title: 'Spiritfarer', platform: 'Steam', genre: '⛵ 힐링 어드벤처',
        url: 'https://store.steampowered.com/app/972660/Spiritfarer/',
        charEmoji: '🐱', charName: '스텔라', charFace: '(っ˘ω˘ς )', color: '#f59e0b',
        moods: ['caution', 'average'],
        matchReason: '영혼들을 따뜻하게 보내주는 스텔라처럼, 오늘은 주변 사람에게 온기를 전하는 날이에요.',
        tip: '스피릿페어러는 이별을 아름답게 그려내요. 오늘 어떤 마무리가 필요하다면 용기 내 보세요.'
    },
    {
        title: 'A Short Hike', platform: 'Steam', genre: '🦅 평화로운 탐험',
        url: 'https://store.steampowered.com/app/1055540/A_Short_Hike/',
        charEmoji: '🦆', charName: '클레어', charFace: '(•ᴗ• )✨', color: '#34d399',
        moods: ['caution'],
        matchReason: '산꼭대기까지 느긋하게 올라가는 클레어처럼, 오늘은 서두르지 말고 천천히 나아가요.',
        tip: '1-2시간이면 완주하는 이 작은 게임이 마음 깊은 곳을 따뜻하게 채워줄 거예요. 오늘 딱이에요!'
    },
    {
        title: 'Undertale', platform: 'Steam', genre: '💀 인디 RPG',
        url: 'https://store.steampowered.com/app/391540/UNDERTALE/',
        charEmoji: '💀', charName: '산스', charFace: '( ͡° ͜ʖ ͡°)', color: '#64748b',
        moods: ['caution'],
        matchReason: '산스처럼 "뭐 어때~ 결국엔 다 괜찮아질 거야"라는 마음으로 오늘 하루를 보내봐요.',
        tip: '"하고 싶지 않으면 안 하면 되지"라는 산스의 철학이 오늘 당신에게 필요한 말일지도 몰라요!'
    },
    {
        title: '2048 (웹게임)', platform: 'Web', genre: '🔢 퍼즐',
        url: 'https://play2048.co/',
        charEmoji: '🟦', charName: '2048이', charFace: '( ་ ⌄ ་ )', color: '#60a5fa',
        moods: ['average', 'caution'],
        matchReason: '작은 숫자들이 합쳐져 거대한 숫자가 되듯, 오늘의 작은 노력들이 쌓여 큰 결과를 만들어요.',
        tip: '포기하지 않고 합치다 보면 2048이 돼요. 오늘도 그렇게, 하나씩 해나가면 됩니다!'
    },
    {
        title: 'Neko Atsume (웹)', platform: 'Web', genre: '🐈 고양이 수집',
        url: 'https://nekoatsume.com/',
        charEmoji: '🐈', charName: '야마다 냥이', charFace: '=^● ⋏ ●^=', color: '#fb7185',
        moods: ['caution', 'average'],
        matchReason: '고양이들이 알아서 놀러 오는 네코아츠메처럼, 오늘은 억지로 뭔가 하려 하지 말고 기다려봐요.',
        tip: '참치캔 하나 놓으면 고양이들이 줄 서서 와요. 작은 친절이 큰 인연을 불러오는 날이에요!'
    },
];

// --- FORTUNES ---
const FORTUNES = {
    great: {
        label: '대길 🌟', scoreRange: [85, 99],
        luckyColor: { name: '골드', hex: '#fbbf24' },
        luckyNumber: () => [3,7,8][Math.floor(Math.random()*3)],
        luckyDirection: '동쪽 ☀️',
        luckyKeyword: '도전',
        messages: [
            "오늘은 모든 것이 당신의 편! 오래 고민해온 일에 과감히 도전해보세요. 우주가 당신을 응원하고 있습니다. 특히 오전 시간대에 중요한 결정을 내리면 최상의 결과를 얻을 수 있어요. ✨",
            "당신의 에너지가 최고조에 달하는 하루! 새로운 사람을 만나거나 새로운 일을 시작하기에 더없이 좋은 날이에요. 오늘 만나는 사람이 당신 인생의 귀인이 될 수도 있어요. 🌈",
        ],
        categories: [
            { icon:'💕', name:'애정운', stars:5, text:'인연의 꽃이 활짝 피는 날' },
            { icon:'💼', name:'직장운', stars:5, text:'리더십이 빛나는 하루' },
            { icon:'💰', name:'재물운', stars:4, text:'뜻밖의 수입이 생길 수도' },
            { icon:'🌱', name:'건강운', stars:5, text:'몸과 마음 모두 최상 컨디션' },
            { icon:'🤝', name:'인간관계', stars:5, text:'귀인을 만날 가능성이 높아요' },
        ]
    },
    good: {
        label: '길 😊', scoreRange: [65, 84],
        luckyColor: { name: '민트', hex: '#34d399' },
        luckyNumber: () => [2,5,9][Math.floor(Math.random()*3)],
        luckyDirection: '남쪽 🌿',
        luckyKeyword: '소통',
        messages: [
            "전반적으로 순탄한 하루가 예상돼요. 무리하게 욕심내지 않고 꾸준히 나아가면 원하는 결과에 가까워질 수 있어요. 오후에 좋은 소식이 기다리고 있을지도 몰라요. 💫",
            "긍정적인 에너지가 흐르는 하루! 평소 망설이던 연락을 먼저 해보는 것도 좋아요. 진심을 담은 작은 행동 하나가 큰 결실로 돌아올 수 있답니다. 🍀",
        ],
        categories: [
            { icon:'💕', name:'애정운', stars:4, text:'따뜻한 교류가 기다려요' },
            { icon:'💼', name:'직장운', stars:4, text:'착실한 노력이 빛을 발해요' },
            { icon:'💰', name:'재물운', stars:3, text:'필요한 것에만 집중하세요' },
            { icon:'🌱', name:'건강운', stars:4, text:'가벼운 운동으로 활력 UP!' },
            { icon:'🤝', name:'인간관계', stars:4, text:'솔직한 말이 관계를 깊게 해요' },
        ]
    },
    average: {
        label: '평 😐', scoreRange: [45, 64],
        luckyColor: { name: '하늘색', hex: '#60a5fa' },
        luckyNumber: () => [1,4,6][Math.floor(Math.random()*3)],
        luckyDirection: '서쪽 🌙',
        luckyKeyword: '인내',
        messages: [
            "오늘은 평범하게 흘러가는 하루! 하지만 평범한 날이야말로 내면을 충전하고 다음 도약을 준비하는 소중한 시간이에요. 서두르지 말고 하나씩 차근차근 해나가세요. 🌿",
            "크게 기대하지도, 너무 걱정하지도 않아도 되는 날이에요. 오늘은 새로운 것보다는 익숙한 것에 집중하는 게 현명해요. 소소한 행복을 발견하는 것이 오늘의 미션! ☕",
        ],
        categories: [
            { icon:'💕', name:'애정운', stars:3, text:'솔직한 대화가 관계를 살려요' },
            { icon:'💼', name:'직장운', stars:3, text:'꼼꼼하게 체크하고 진행하세요' },
            { icon:'💰', name:'재물운', stars:3, text:'지출을 조금 줄여보는 하루' },
            { icon:'🌱', name:'건강운', stars:3, text:'충분한 수면이 최고의 보약' },
            { icon:'🤝', name:'인간관계', stars:3, text:'기존 관계를 소중히 여겨요' },
        ]
    },
    caution: {
        label: '주의 ⚡', scoreRange: [25, 44],
        luckyColor: { name: '라벤더', hex: '#a78bfa' },
        luckyNumber: () => [0,3,7][Math.floor(Math.random()*3)],
        luckyDirection: '북쪽 ⭐',
        luckyKeyword: '휴식',
        messages: [
            "오늘은 신중함이 키워드! 중요한 결정이나 큰 투자는 잠시 미루는 게 좋아요. 대신 평소 미뤄왔던 정리나 준비를 하기에 딱 좋은 날이에요. 내일을 위해 오늘을 아껴요. 🛡️",
            "작은 실수에 주의가 필요한 날이에요. 이런 날일수록 주변 사람들과 함께하면 큰 힘이 됩니다. 혼자 끙끙 앓지 말고 가까운 사람에게 털어놓아 보세요. 💪",
        ],
        categories: [
            { icon:'💕', name:'애정운', stars:2, text:'오해가 생기지 않도록 주의' },
            { icon:'💼', name:'직장운', stars:3, text:'결재 전 한 번 더 확인!' },
            { icon:'💰', name:'재물운', stars:2, text:'충동구매 자제, 저축하는 날' },
            { icon:'🌱', name:'건강운', stars:3, text:'무리한 운동은 피하세요' },
            { icon:'🤝', name:'인간관계', stars:2, text:'오늘은 듣는 역할에 충실하게' },
        ]
    }
};

// --- DOM ---
const fortuneBtn = document.getElementById('fortune-btn');
const retryBtn = document.getElementById('retry-btn');
const inputSection = document.getElementById('input-section');
const loadingSection = document.getElementById('loading-section');
const resultSection = document.getElementById('result-section');
const moodBtns = document.querySelectorAll('.mood-btn');
const userNameInput = document.getElementById('user-name');
let selectedMood = 'happy';

moodBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        moodBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedMood = btn.dataset.mood;
    });
});

// --- Seeded Random ---
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

// --- Generate ---
function generateFortune() {
    const name = userNameInput.value.trim() || '행운이';
    const seed = generateSeed(name);
    const fortuneTypes = Object.keys(FORTUNES);
    const fortuneKey = fortuneTypes[Math.floor(seededRandom(seed) * fortuneTypes.length)];
    const fortune = FORTUNES[fortuneKey];
    const [min, max] = fortune.scoreRange;
    const score = Math.floor(seededRandom(seed+1) * (max - min + 1)) + min;
    const message = fortune.messages[Math.floor(seededRandom(seed+2) * fortune.messages.length)];
    const charIdx = Math.floor(seededRandom(seed+3) * CHARACTERS.length);
    const character = CHARACTERS[charIdx];

    // Pick game matching fortune mood
    const matchedGames = GAMES.filter(g => g.moods.includes(fortuneKey));
    const gamePool = matchedGames.length > 0 ? matchedGames : GAMES;
    const gameIdx = Math.floor(seededRandom(seed+5) * gamePool.length);
    const game = gamePool[gameIdx];

    const luckyNum = fortune.luckyNumber();
    return { name, fortune, fortuneKey, score, message, character, game, luckyNum };
}

// --- Stars ---
function renderStars(count) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        html += `<span class="star ${i <= count ? 'active' : ''}">★</span>`;
    }
    return html;
}

// --- Display ---
function displayFortune(data) {
    const { name, fortune, score, message, character, game, luckyNum } = data;

    // Date
    const today = new Date();
    const dateStr = today.toLocaleDateString('ko-KR', { year:'numeric', month:'long', day:'numeric', weekday:'long' });
    document.getElementById('fortune-date').textContent = dateStr;
    document.getElementById('fortune-user-name').textContent = `✨ ${name}님의 운세`;

    // Score ring
    document.getElementById('score-number').textContent = score;
    document.getElementById('score-ring').style.setProperty('--score-pct', `${score}%`);

    // Lucky extras
    const lc = fortune.luckyColor;
    document.getElementById('lucky-color-dot').style.background = lc.hex;
    document.getElementById('lucky-color-name').textContent = lc.name;
    document.getElementById('lucky-number').textContent = luckyNum;
    document.getElementById('lucky-direction').textContent = fortune.luckyDirection;
    document.getElementById('lucky-keyword').textContent = fortune.luckyKeyword;

    // Category grid
    const grid = document.getElementById('fortune-grid');
    grid.innerHTML = '';
    fortune.categories.forEach((cat, i) => {
        const el = document.createElement('div');
        el.className = 'category-item';
        el.style.animationDelay = `${i * 0.08}s`;
        el.innerHTML = `
            <div class="cat-header"><span class="cat-icon">${cat.icon}</span><span class="cat-name">${cat.name}</span></div>
            <div class="cat-stars">${renderStars(cat.stars)}</div>
            <p class="cat-text">${cat.text}</p>`;
        grid.appendChild(el);
    });

    // Fortune message
    document.getElementById('fortune-message').textContent = message;

    // Lucky character
    document.getElementById('lucky-character').textContent = character.emoji;
    document.getElementById('lucky-character-name').textContent = character.name;
    document.getElementById('lucky-tip').textContent = `💡 ${character.tip}`;

    // Game recommendation
    const gameCard = document.getElementById('game-char-card');
    document.getElementById('game-char-emoji').textContent = game.charEmoji;
    document.getElementById('game-char-face').textContent = game.charFace;
    document.getElementById('game-char-name').textContent = game.charName;
    document.getElementById('game-title').textContent = game.title;
    document.getElementById('game-genre').textContent = game.genre;
    document.getElementById('game-platform').textContent = game.platform;
    document.getElementById('game-match-reason').textContent = game.matchReason;
    document.getElementById('game-char-tip').textContent = `🎮 ${game.tip}`;
    const playBtn = document.getElementById('game-play-btn');
    playBtn.href = game.url;
    playBtn.textContent = game.platform === 'Steam' ? '▶ Steam에서 보기' : '▶ 바로 플레이하기';
    gameCard.style.setProperty('--game-color', game.color);

    // Show
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior:'smooth', block:'start' });
}

function handleFortuneSubmit() {
    const data = generateFortune();
    
    // Hide input, show loading
    inputSection.style.display = 'none';
    loadingSection.style.display = 'block';
    loadingSection.scrollIntoView({ behavior:'smooth', block:'start' });

    // Simulate 2 seconds loading for AdSense interstitial and anticipation
    setTimeout(() => {
        loadingSection.style.display = 'none';
        displayFortune(data);
    }, 2000);
}

fortuneBtn.addEventListener('click', handleFortuneSubmit);
userNameInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleFortuneSubmit(); });
retryBtn.addEventListener('click', () => {
    resultSection.style.display = 'none';
    inputSection.style.display = 'block';
    inputSection.scrollIntoView({ behavior:'smooth', block:'start' });
});

});
