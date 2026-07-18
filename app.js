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
            "명리학적 관점에서 볼 때, 오늘은 모든 기운이 귀하의 편에 서는 매우 길한 날입니다. 오랫동안 고민해온 일이나 중요한 계약을 체결하기에 최적의 시기이며, 특히 오전 시간에 긍정적인 결정을 내리시면 좋은 결과를 얻으실 수 있습니다. ✨",
            "사주 원국의 흐름이 매우 조화로우며 에너지가 최고조에 달하는 하루입니다. 새로운 인연을 만나거나 새로운 프로젝트를 시작하기에 더없이 좋은 날로, 오늘 맺어지는 귀인이 향후 큰 도움을 줄 수 있는 운세입니다. 🌈",
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
            "전반적인 오행의 기운이 순조롭게 흘러가는 무난하고 평탄한 하루입니다. 무리한 확장보다는 현재의 자리에서 내실을 다지며 나아가면 긍정적인 결실을 맺을 수 있습니다. 오후 늦은 시간에 기쁜 소식이 당도할 수 있습니다. 💫",
            "밝고 긍정적인 운기가 맴도는 하루로, 평소 주저하던 일에 대해 한 걸음 내딛어 보시길 권해드립니다. 진심 어린 소통과 배려가 귀하의 덕을 높이고 주변에 좋은 평판을 가져다줄 것입니다. 🍀",
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
            "운기의 변동성이 적고 잔잔한 하루가 될 것입니다. 이러한 시기에는 무리한 변화를 도모하기보다, 내면을 성찰하고 향후의 큰 도약을 위해 준비하는 시간을 가지는 것이 이롭습니다. 매사를 차분하게 풀어가시길 바랍니다. 🌿",
            "특별한 길흉 없이 평탄함이 유지되는 날입니다. 오늘은 새로운 시도보다는 현재 맡은 바 임무에 충실하고, 익숙한 환경 속에서 안정감을 찾는 것이 현명한 선택입니다. 소소한 일상에서 행복을 발견해보세요. ☕",
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
            "운기가 다소 정체되어 신중함이 요구되는 하루입니다. 중대한 결정이나 금전적인 투자는 잠시 보류하시는 것이 좋으며, 주위 사람과의 마찰을 피하기 위해 언행에 각별히 유의하시길 권해드립니다. 🛡️",
            "사소한 실수나 착오가 발생하기 쉬운 운세입니다. 독단적인 판단보다는 주변의 조언을 귀담아듣고, 매사를 한 번 더 꼼꼼히 점검하는 지혜가 필요합니다. 무리하지 마시고 심신의 휴식을 취하세요. 💪",
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
const userDobInput = document.getElementById('user-dob');
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
function generateSeed(name, dob, cardElement) {
    const today = new Date();
    const dateStr = `${today.getFullYear()}${today.getMonth()}${today.getDate()}`;
    let hash = 0;
    const str = name + dob + dateStr + selectedMood + cardElement;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

// --- Generate ---
function generateFortune(cardElement) {
    const name = userNameInput.value.trim() || '행운이';
    const dob = userDobInput.value || '알수없음';
    const seed = generateSeed(name, dob, cardElement);
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

    // Generate 5 elements balance scores (20 to 100)
    const woodScore = Math.floor(seededRandom(seed+10) * 80) + 20;
    const fireScore = Math.floor(seededRandom(seed+11) * 80) + 20;
    const earthScore = Math.floor(seededRandom(seed+12) * 80) + 20;
    const metalScore = Math.floor(seededRandom(seed+13) * 80) + 20;
    const waterScore = Math.floor(seededRandom(seed+14) * 80) + 20;

    // Elements remedy list
    const elements = [
        { name: '목 (木) - 나무', score: woodScore, remedy: '오늘 부족한 나무의 기운을 보완하기 위해 녹색 의상이나 소품을 활용하고, 신선한 샐러드를 섭취하거나 식물이 가득한 야외 공원에서 산책을 해보세요. 추천 게임인 <a href="https://store.steampowered.com/app/413150/Stardew_Valley/" target="_blank" style="color: var(--pink); text-decoration: underline;">Stardew Valley</a>처럼 대지에서 작물을 키우는 따뜻한 기운이 큰 활력을 불어넣어 줄 것입니다. 🌳' },
        { name: '화 (火) - 불', score: fireScore, remedy: '오늘 부족한 불의 기운을 보완하기 위해 붉은색 계열의 포인트 의상을 코디하고, 따뜻하거나 매콤한 음식을 드셔보세요. 추천 게임인 <a href="https://store.steampowered.com/app/1145360/Hades/" target="_blank" style="color: var(--pink); text-decoration: underline;">Hades</a>처럼 에너지를 불태우는 시원한 액션 장르를 플레이하는 것이 내면의 추진력을 충전하는 데 도움이 됩니다. 🔥' },
        { name: '토 (土) - 흙', score: earthScore, remedy: '오늘 부족한 흙의 기운을 보완하기 위해 황색/브라운 톤 소품을 사용하거나 땅을 디디며 천천히 걷는 시간을 추천합니다. 추천 게임인 <a href="https://store.steampowered.com/app/1657630/Slime_Rancher_2/" target="_blank" style="color: var(--pink); text-decoration: underline;">Slime Rancher 2</a>처럼 귀여운 생명체들을 대지 위에 방목하며 자연스러운 여유를 즐겨보는 것도 훌륭한 처방입니다. ⛰️' },
        { name: '금 (金) - 쇠/금속', score: metalScore, remedy: '오늘 부족한 금(쇠)의 기운을 보완하기 위해 세련된 실버/화이트 액세서리를 착용하거나 마음을 가라앉히는 차분한 음악을 감상해 보세요. 추천 게임인 <a href="https://store.steampowered.com/app/367520/Hollow_Knight/" target="_blank" style="color: var(--pink); text-decoration: underline;">Hollow Knight</a>처럼 집중력을 모으고 절도 있게 나아가는 태도가 행운을 가져다줄 것입니다. 🪙' },
        { name: '수 (水) - 물', score: waterScore, remedy: '오늘 부족한 물의 기운을 보완하기 위해 블루 계열 컬러 소품을 착용하고, 충분한 수분 섭취를 해주세요. 추천 게임인 <a href="https://store.steampowered.com/app/1868140/DAVE_THE_DIVER/" target="_blank" style="color: var(--pink); text-decoration: underline;">Dave the Diver</a>처럼 푸른 바다 깊은 곳을 유유히 탐험하며 깊고 유연한 사고의 에너지를 충전하는 것을 권해 드립니다. 🌊' }
    ];

    // Sort to find the weakest element
    elements.sort((a, b) => a.score - b.score);
    const weakestElement = elements[0];

    return { 
        name, fortune, fortuneKey, score, message, character, game, luckyNum,
        woodScore, fireScore, earthScore, metalScore, waterScore, weakestElement 
    };
}

// --- Stars ---
function renderStars(count) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        html += `<span class="star ${i <= count ? 'active' : ''}">★</span>`;
    }
    return html;
}
function getReceiptStars(count) {
    return '★'.repeat(count) + '☆'.repeat(5 - count);
}

// --- Radar Chart point helper ---
function getRadarPoint(index, score) {
    const angleMap = [
        -Math.PI / 2,                    // Wood
        -Math.PI / 2 + (2 * Math.PI / 5), // Fire
        -Math.PI / 2 + (4 * Math.PI / 5), // Earth
        -Math.PI / 2 + (6 * Math.PI / 5), // Metal
        -Math.PI / 2 + (8 * Math.PI / 5)  // Water
    ];
    // R = 75 is max outer circle radius
    const r = (score / 100) * 75;
    const x = 100 + r * Math.cos(angleMap[index]);
    const y = 100 + r * Math.sin(angleMap[index]);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
}

// --- Display ---
function displayFortune(data) {
    const { name, fortune, score, message, character, game, luckyNum, woodScore, fireScore, earthScore, metalScore, waterScore, weakestElement } = data;

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

    // Render SVG Radar Chart
    const polygon = document.getElementById('radar-polygon');
    const pWood = getRadarPoint(0, woodScore);
    const pFire = getRadarPoint(1, fireScore);
    const pEarth = getRadarPoint(2, earthScore);
    const pMetal = getRadarPoint(3, metalScore);
    const pWater = getRadarPoint(4, waterScore);
    polygon.setAttribute('points', `${pWood} ${pFire} ${pEarth} ${pMetal} ${pWater}`);

    // Update prescription
    document.getElementById('prescription-content').innerHTML = weakestElement.remedy;

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

    // Update Lucky Receipt Content
    document.getElementById('receipt-date').textContent = today.toLocaleDateString('ko-KR', { year:'numeric', month:'2-digit', day:'2-digit' }).replace(/\. /g, '.').replace(/\.$/, '');
    document.getElementById('receipt-name').textContent = name;
    document.getElementById('receipt-score').textContent = `${score} PTS`;
    
    // Receipt Category Stars (Love, Work, Wealth, Health, Social)
    document.getElementById('receipt-star-love').textContent = getReceiptStars(fortune.categories[0].stars);
    document.getElementById('receipt-star-work').textContent = getReceiptStars(fortune.categories[1].stars);
    document.getElementById('receipt-star-wealth').textContent = getReceiptStars(fortune.categories[2].stars);
    document.getElementById('receipt-star-health').textContent = getReceiptStars(fortune.categories[3].stars);
    document.getElementById('receipt-star-social').textContent = getReceiptStars(fortune.categories[4].stars);

    // Receipt extras
    document.getElementById('receipt-color').textContent = lc.name.toUpperCase();
    document.getElementById('receipt-number').textContent = luckyNum;
    document.getElementById('receipt-animal').textContent = `${character.emoji} ${character.name.toUpperCase()}`;
    document.getElementById('receipt-stamp-emoji').textContent = character.emoji;

    // Barcode Number
    const barcodeDateStr = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}${String(today.getDate()).padStart(2,'0')}`;
    document.getElementById('receipt-barcode-number').textContent = `SAJU-${barcodeDateStr}-${score}`;

    // Show result
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior:'smooth', block:'start' });
}

// --- Flow control ---
let isProcessingTarot = false;

// DOM references for Tarot Section
const tarotSection = document.getElementById('tarot-section');
const tarotCards = document.querySelectorAll('.tarot-card');
const downloadReceiptBtn = document.getElementById('download-receipt-btn');
const adModal = document.getElementById('adModal');
const timerCount = document.getElementById('timerCount');

function handleFortuneSubmit() {
    const name = userNameInput.value.trim();
    if (!name) {
        alert('이름을 입력해 주세요! 🔮');
        userNameInput.focus();
        return;
    }
    
    // Reset cards flipping state
    tarotCards.forEach(card => card.classList.remove('flipped'));
    isProcessingTarot = false;

    // Transition from Input Section to Tarot Selection Section
    inputSection.style.display = 'none';
    tarotSection.style.display = 'block';
    tarotSection.scrollIntoView({ behavior:'smooth', block:'start' });
}

// Attach Tarot Card Click Handlers
tarotCards.forEach(card => {
    card.addEventListener('click', () => {
        if (isProcessingTarot || card.classList.contains('flipped')) return;
        isProcessingTarot = true;

        // Reveal card (add flipped class)
        card.classList.add('flipped');
        const element = card.dataset.element;

        // Generate fortune data based on clicked card's element
        const data = generateFortune(element);

        // Transition from Tarot card to loading section
        setTimeout(() => {
            tarotSection.style.display = 'none';
            loadingSection.style.display = 'block';
            loadingSection.scrollIntoView({ behavior:'smooth', block:'start' });

            // Transition from loading section to result section after AdSense/cosmic delay
            setTimeout(() => {
                loadingSection.style.display = 'none';
                displayFortune(data);
                isProcessingTarot = false;
            }, 1800);
        }, 1200);
    });
});

// Download Lucky Receipt as PNG Image with Ad Loading Delay
downloadReceiptBtn.addEventListener('click', () => {
    const captureArea = document.getElementById('receipt-capture-wrapper');
    const name = document.getElementById('receipt-name').textContent || 'saju';
    
    // 1. Show Ad Loading Modal
    adModal.style.display = 'flex';
    let timeLeft = 5;
    timerCount.textContent = timeLeft;
    
    // Disable download button to prevent duplicate clicks during count
    downloadReceiptBtn.disabled = true;
    
    // 2. Clear any existing timer and run countdown
    const countdownInterval = setInterval(() => {
        timeLeft -= 1;
        timerCount.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            // 3. Hide Modal
            adModal.style.display = 'none';
            downloadReceiptBtn.disabled = false;
            
            // 4. Trigger actual canvas download
            html2canvas(captureArea, {
                backgroundColor: '#0b0b12',
                scale: 2, // 2x high resolution
                useCORS: true,
                logging: false
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = `saju-receipt-${name}.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
            }).catch(err => {
                console.error('Receipt download error:', err);
                alert('영수증 이미지 다운로드에 실패했습니다. 다시 시도해 주세요.');
            });
        }
    }, 1000);
});

fortuneBtn.addEventListener('click', handleFortuneSubmit);
userNameInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleFortuneSubmit(); });
retryBtn.addEventListener('click', () => {
    resultSection.style.display = 'none';
    inputSection.style.display = 'block';
    inputSection.scrollIntoView({ behavior:'smooth', block:'start' });
});

// --- Share Functions ---
const shareKakaoBtn = document.getElementById('share-kakao');
const shareTgBtn = document.getElementById('share-tg');
const shareLinkBtn = document.getElementById('share-link');

function getShareText() {
    return `[Saju Day by Day] ${document.getElementById('fortune-user-name').textContent}\n운세 점수: ${document.getElementById('score-number').textContent}점\n행운의 색: ${document.getElementById('lucky-color-name').textContent}\n지금 바로 확인해보세요! 👉 ${window.location.href}`;
}

shareKakaoBtn.addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: '오늘의 운세 | Saju Day by Day',
                text: getShareText(),
                url: window.location.href
            });
        } catch (err) {
            console.log('Share canceled or failed', err);
        }
    } else {
        alert('현재 브라우저에서는 기본 공유 기능을 지원하지 않습니다. 링크 복사를 이용해주세요!');
    }
});

shareTgBtn.addEventListener('click', () => {
    const text = encodeURIComponent(getShareText());
    window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${text}`, '_blank');
});

shareLinkBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(getShareText()).then(() => {
        alert('운세 결과가 클립보드에 복사되었습니다! 🔗');
    }).catch(err => {
        alert('링크 복사에 실패했습니다.');
    });
});

    // --- Cookie Consent Checker ---
    const consent = localStorage.getItem('cookie-consent');
    const banner = document.getElementById('cookie-banner');
    if (consent === 'accepted' && banner) {
        banner.style.display = 'none';
    } else if (banner) {
        banner.style.display = 'flex';
    }
});

// Global function for Cookie Accept button
window.acceptCookies = function() {
    localStorage.setItem('cookie-consent', 'accepted');
    const banner = document.getElementById('cookie-banner');
    if (banner) {
        banner.style.opacity = '0';
        setTimeout(() => {
            banner.style.display = 'none';
        }, 300);
    }
};

