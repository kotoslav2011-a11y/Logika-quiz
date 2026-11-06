document.addEventListener('DOMContentLoaded', () => {
    const imageAssets = {
        correct: 'Правильно.png',
        wrong: 'Неправильно.png',
        almost: 'Майже правильно.png'
    };
    const identifyImages = {
        'Базилік': 'https://cdn.phototourl.com/member/2026-11-06-06f11c17-e347-4018-8877-3722ab906f32.png',
        'Кропива': 'https://cdn.phototourl.com/member/2026-11-06-a3cd5010-6db8-47b2-9544-ed0aef204cf0.png',
        'Ромашка': 'https://cdn.phototourl.com/member/2026-11-06-da1f8d4b-4515-4462-8a10-7d750179ce6c.png',
        'Чебрець': 'https://cdn.phototourl.com/member/2026-11-06-25aa8b21-ca76-4eca-b4d7-bd66540c0342.png',
        'Лаванда': 'https://cdn.phototourl.com/member/2026-11-06-560b484e-995f-43a1-ae22-d6df5ac025dd.png',
        'Календула': 'https://cdn.phototourl.com/member/2026-11-06-1b6cb149-700d-4024-ae32-3cbfb88bc737.png',
        'Алое': 'https://cdn.phototourl.com/member/2026-11-06-7a723b8c-806c-4fd7-a4d0-324029891020.png',
        'М’ята': 'https://cdn.phototourl.com/member/2026-11-06-d5773ce6-e7c9-4978-814d-3070b6e38bfa.png',
        'Кульбаба': 'https://cdn.phototourl.com/member/2026-11-06-c5ad5330-44ff-4e74-9e95-3514ed50cb0d.png',
        'Подорожник': 'https://cdn.phototourl.com/member/2026-11-06-d4fc7f87-2f42-48fd-9e4b-e53edf8dce6d.png'
    };
    const completionImage = 'https://cdn.phototourl.com/member/2026-11-06-8fbd343a-a641-41e3-af3b-768239357a0b.png';

    const levels = {
        easy: {
            time: 30, title: 'Легко',
            questions: [
                ['Яку частину ромашки збирають для чаю?', 'Квітки', ['Листя', 'Стебла'], ['Коріння']],
                ['Яка трава має прохолодний аромат і часто додається до чаю?', 'М’ята', ['Меліса', 'Базилік'], ['Кропива']],
                ['Яка рослина має колючі листки й прозорий гель?', 'Алое', ['Кактус', 'Агава'], ['Папороть']],
                ['Яка запашна трава часто використовується в кулінарії?', 'Базилік', ['М’ята', 'Материнка'], ['Болиголов']],
                ['Яку частину кульбаби легко впізнати за жовтим кольором?', 'Квітку', ['Листок', 'Стебло'], ['Корінь']],
                ['Яка рослина має фіолетові запашні квіти?', 'Лаванда', ['Ромашка', 'Чебрець'], ['Кропива']],
                ['З якої рослини отримують волокно льон?', 'Льон', ['Коноплі', 'Кропива'], ['Шавлія']],
                ['Яка рослина відома пекучими волосками на листках?', 'Кропива', ['Меліса', 'М’ята'], ['Подорожник']],
                ['Яка лісова ягода зазвичай темно-синя?', 'Чорниця', ['Малина', 'Суниця'], ['Шипшина']],
                ['Яка рослина має білі квіти з жовтою серединкою?', 'Ромашка', ['Календула', 'Лаванда'], ['Кропива']]
            ]
        },
        normal: {
            time: 20, title: 'Нормально',
            questions: [
                ['Яку частину м’яти зазвичай сушать для настою?', 'Листя', ['Квітки', 'Верхівки пагонів'], ['Коріння']],
                ['Яка рослина традиційно має помаранчеві квітки-корзинки?', 'Календула', ['Ромашка', 'Нагідки дикого виду'], ['Наперстянка']],
                ['Який аромат має меліса?', 'Лимонний', ['М’ятний', 'Квітково-медовий'], ['Перцевий']],
                ['Що допомагає сушеним травам не запліснявіти?', 'Добре просушити й зберігати сухими', ['Зберігати в сухому провітрюваному місці', 'Тримати в щільно закритій сухій тарі'], ['Покласти у вологу тканину']],
                ['У якій частині подорожника найчастіше зосереджене насіння?', 'У колосоподібному суцвітті', ['На верхівці квітконоса', 'У сухій насіннєвій коробочці'], ['У кореневищі']],
                ['Яка з цих трав має характерний пряний запах і вузьке листя?', 'Чебрець', ['Материнка', 'Шавлія'], ['Болиголов']],
                ['Яка рослина розкриває квіти вранці й часто закриває їх у похмуру погоду?', 'Кульбаба', ['Цикорій', 'Нагідки'], ['Блекота']],
                ['Що означає «зібрати траву під час цвітіння»?', 'Зібрати надземну частину, коли рослина цвіте', ['Зібрати квіти й листя в період цвітіння', 'Зібрати верхівки пагонів із квітами'], ['Викопати корінь після цвітіння']],
                ['Яка частина імбиру використовується як пряність?', 'Кореневище', ['Підземне стебло', 'Потовщене кореневище'], ['Листя']],
                ['Яка рослина має насіння, що утворює слиз у воді?', 'Льон', ['Подорожник блошиний', 'Чіа'], ['Наперстянка']]
            ]
        },
        hard: {
            time: 12, title: 'Складно',
            questions: [
                ['Яку частину валеріани зазвичай використовують у фітопрепаратах?', 'Корені та кореневища', ['Кореневища', 'Корінці'], ['Листки', 'Плоди']],
                ['Який пігмент надає листкам зелений колір?', 'Хлорофіл', ['Хлорофіл a', 'Хлорофіл b'], ['Антоціан', 'Каротин']],
                ['Як називається процес втрати води рослиною через листки?', 'Транспірація', ['Випаровування', 'Випаровування води'], ['Фотосинтез', 'Дихання']],
                ['Яка рослина відповідає латинській назві Salvia officinalis?', 'Шавлія лікарська', ['Шавлія лучна', 'Шавлія мускатна'], ['Ромашка лікарська', 'Подорожник великий']],
                ['Яку форму суцвіття має соняшник?', 'Кошик', ['Складний кошик', 'Квіткова головка'], ['Зонтик', 'Колос']],
                ['Що таке ефірна олія рослини?', 'Суміш летких ароматичних сполук', ['Леткі запашні речовини рослини', 'Природна суміш ароматичних сполук'], ['Жир, що утворюється з насіння', 'Водний сік листка']],
                ['Яка умова найважливіша для безпечного збору дикорослих трав?', 'Точно визначити вид і місце збору', ['Упевнено визначити рослину', 'Уникати забруднених місць'], ['Збирати будь-яку схожу рослину', 'Збирати біля жвавої дороги']],
                ['Яке суцвіття характерне для ехінацеї пурпурової?', 'Кошик із колючкуватим конічним центром', ['Кошик', 'Кошик із трубчастими квітками'], ['Зонтик', 'Колос']],
                ['Яка рослинна тканина проводить воду від кореня вгору?', 'Ксилема', ['Судини ксилеми', 'Трахеїди'], ['Флоема', 'Епідерміс']],
                ['Що відбувається з більшістю рослинних ферментів за надмірного нагрівання?', 'Вони денатурують і втрачають активність', ['Їхня структура змінюється', 'Їхня активність знижується'], ['Вони стають вітамінами', 'Вони утворюють хлорофіл']]
            ]
        },
        hardcore: {
            time: 8, title: 'Хардкорно',
            questions: [
                ['Який клас сполук є основним складником ефірної олії перцевої м’яти?', 'Монотерпени та їхні похідні', ['Терпеноїди', 'Монотерпенові сполуки'], ['Алкалоїди', 'Полісахариди']],
                ['Який тип жилкування найчастіше мають листки однодольних рослин?', 'Паралельне або дугове', ['Паралельне', 'Дугове'], ['Сітчасте', 'Пальчасте']],
                ['Як називається наука про розпізнавання лікарської рослинної сировини?', 'Фармакогнозія', ['Фармакогностичний аналіз', 'Ботанічна ідентифікація сировини'], ['Фармакокінетика', 'Токсикологія']],
                ['Яка сполука надає гвоздиці характерного запаху?', 'Евгенол', ['Евгенол у складі ефірної олії', 'Фенольний компонент олії'], ['Ментол', 'Капсаїцин']],
                ['Як називається розміщення листків по одному на вузлі зі зміною боків стебла?', 'Почергове', ['Спіральне', 'Альтернативне'], ['Супротивне', 'Мутовчасте']],
                ['Який алкалоїд є рацемічною сумішшю гіосціаміну та його дзеркального ізомеру?', 'Атропін', ['Гіосціамін', 'Скополамін'], ['Рутин', 'Евгенол']],
                ['Яка структура квітки формує пилок у покритонасінних?', 'Пиляк тичинки', ['Пилкові гнізда пиляка', 'Мікроспорангії'], ['Приймочка маточки', 'Зав’язь']],
                ['Що характеризує фармакопейна стаття на рослинну сировину?', 'Вимоги до її якості, ідентифікації та чистоти', ['Методи контролю якості', 'Нормативи для конкретної сировини'], ['Лише народні назви', 'Тільки спосіб вирощування']],
                ['Яка сполука є характерним гірким компонентом полину гіркого?', 'Абсинтин', ['Сесквітерпеновий лактон', 'Гіркі лактони'], ['Гліциризин', 'Саліцин']],
                ['Який механізм допомагає насінню кульбаби поширюватися вітром?', 'Чубок із тонких волосків', ['Папус', 'Повітряна волосиста структура'], ['Гачки на насінні', 'М’ясистий привабливий плід']]
            ]
        }
    };

    const herbFacts = {
        'Квітки': 'Ромашковий чай зазвичай готують із висушених квіткових кошиків.',
        'М’ята': 'М’ята містить ароматичні сполуки; її часто додають до напоїв і страв.',
        'Алое': 'Алое — сукулент, що запасає воду у своїх м’ясистих листках.',
        'Базилік': 'Базилік належить до родини ясноткових, як і м’ята та шавлія.',
        'Квітку': 'Яскраві квіти кульбаби згодом перетворюються на пухнасті насіннєві головки.',
        'Лаванда': 'Лаванду легко впізнати за запашними фіолетовими квітами.',
        'Льон': 'Волокна льону отримують зі стебел цієї культурної рослини.',
        'Кропива': 'Пекучі волоски кропиви слугують рослині захистом.',
        'Чорниця': 'Темно-синій колір чорниці зумовлений природними пігментами-антоціанами.',
        'Ромашка': 'Ромашкове суцвіття — це кошик із багатьох дрібних квіток.',
        'Листя': 'Листя м’яти містить запашні речовини, які переходять у настій.',
        'Календула': 'Календула, або нагідки, має яскраві жовті чи помаранчеві суцвіття.',
        'Лимонний': 'Лимонний аромат меліси дав їй назву, пов’язану з грецьким словом «бджола».',
        'Добре просушити й зберігати сухими': 'Низька вологість допомагає запобігти псуванню та появі плісняви.',
        'У колосоподібному суцвітті': 'У подорожника дрібні квітки зібрані у видовжене колосоподібне суцвіття.',
        'Чебрець': 'Чебрець — запашна рослина з родини ясноткових.',
        'Кульбаба': 'Квіти кульбаби реагують на освітлення й можуть закриватися за похмурої погоди.',
        'Зібрати надземну частину, коли рослина цвіте': 'Час збору залежить від виду рослини та частини, яку заготовляють.',
        'Кореневище': 'Імбирна «рука» — це кореневище, тобто видозмінене підземне стебло.',
        'Льон': 'Насіння льону містить слизоутворювальні речовини та рослинні олії.',
        'Корені та кореневища': 'У валеріани заготовляють підземні органи; їхній склад залежить від виду й стандарту.',
        'Хлорофіл': 'Хлорофіл поглинає світло й допомагає рослині здійснювати фотосинтез.',
        'Транспірація': 'Транспірація — випаровування води рослиною, переважно через листки.',
        'Шавлія': 'Шавлія, м’ята й чебрець належать до родини ясноткових.',
        'Кошик': 'Соняшник має суцвіття-кошик, утворене багатьма дрібними квітками.',
        'Суміш летких ароматичних сполук': 'Ефірні олії — леткі ароматичні суміші, склад яких відрізняється у різних рослин.',
        'Точно визначити вид і місце збору': 'Дикорослі рослини можна збирати лише після надійного визначення виду й оцінки чистоти місця.',
        'Шавлія лікарська': 'Salvia officinalis — латинська назва шавлії лікарської.',
        'Кошик із колючкуватим конічним центром': 'У ехінацеї пурпурової кошик має помітний опуклий конічний центр.',
        'Ксилема': 'Ксилема проводить воду й розчинені мінеральні речовини від коренів угору.',
        'Вони денатурують і втрачають активність': 'Нагрівання може змінити структуру ферментів і знизити їхню активність.',
        'Монотерпени та їхні похідні': 'Склад ефірної олії м’яти різниться, але часто містить монотерпеноїди.',
        'Паралельне або дугове': 'У багатьох однодольних рослин жилки листка розташовані паралельно або дугоподібно.',
        'Фармакогнозія': 'Фармакогнозія вивчає лікарську сировину природного походження.',
        'Евгенол': 'Евгенол — ароматична сполука, що надає гвоздичній олії характерного запаху.',
        'Почергове': 'За почергового розміщення на кожному вузлі стебла є один листок.',
        'Атропін': 'Беладона містить тропанові алкалоїди; рослина отруйна й небезпечна для самостійного використання.',
        'Пиляк тичинки': 'Пилок у покритонасінних утворюється в пиляках тичинок.',
        'Вимоги до її якості, ідентифікації та чистоти': 'Фармакопейні вимоги визначають, як підтвердити особу та якість рослинної сировини.',
        'Абсинтин': 'Абсинтин — один із гірких компонентів полину гіркого.',
        'Чубок із тонких волосків': 'Пухнастий чубок кульбаби працює як парашут і допомагає насінню переноситися вітром.'
    };

    const plantGuide = [
        { name: 'Ромашка', icon: '🌼', description: 'Суцвіття ромашки — кошик із багатьох дрібних квіток; його часто сушать для трав’яного настою.' },
        { name: 'М’ята', icon: '🌿', description: 'Запашна рослина, листя якої часто додають до напоїв і страв.' },
        { name: 'Алое', icon: '🪴', description: 'Сукулент із м’ясистими листками, у яких рослина запасає воду.' },
        { name: 'Базилік', icon: '🌱', description: 'Запашна кулінарна рослина з родини ясноткових.' },
        { name: 'Кульбаба', icon: '🌞', description: 'Яскраве суцвіття згодом перетворюється на пухнасту насіннєву головку.' },
        { name: 'Лаванда', icon: '🪻', description: 'Запашна рослина з фіолетовими квітами, які зібрані у видовжені суцвіття.' },
        { name: 'Кропива', icon: '🍃', description: 'Деякі види мають пекучі волоски, що захищають рослину.' },
        { name: 'Календула', icon: '🏵️', description: 'Нагідки мають яскраві жовті або помаранчеві квіткові кошики.' },
        { name: 'Чебрець', icon: '🍀', description: 'Невисока запашна рослина, яку використовують як кулінарну приправу.' },
        { name: 'Подорожник', icon: '🌾', description: 'Його дрібні квітки зібрані у видовжене колосоподібне суцвіття.' }
    ];

    const locales = {
        uk: {
            flag: '🇺🇦', name: 'Українська', menu: 'Меню', chooseLanguage: 'Оберіть мову', kicker: 'АПТЕКАРСЬКІ ЗАПИСИ',
            welcome: '🌿Вітаємо у квізі!🌿', intro: '🌻Перевір свої знання з Травництва🌻', chooseLevel: 'Обери рівень складності',
            easy: 'Легко', normal: 'Нормально', hard: 'Складно', hardcore: 'Хардкорно', start: 'Почати квіз',
            time: 'Час', score: 'Бали', correct: 'Правильно!', wrong: 'Неправильно!', almost: 'Майже правильно!',
            timeout: 'Час вийшов!', resultKicker: 'АПТЕКАРСЬКІ ЗАПИСИ', finished: 'Квіз завершено!',
            again: 'Спробувати ще', home: 'На головну', question: 'Запитання', of: 'з', result: 'Результат', duration: 'с · 10 запитань',
            perfect: 'Чудово! Ти справжній знавець трав.', good: 'Гарна робота! Продовжуй досліджувати рослини.',
            keepGoing: 'Добрий початок! Спробуй ще раз і дізнайся більше.',
            loading: 'Перекладаємо запитання…', translationError: 'Не вдалося перекласти. Варіанти показано українською.',
            profileTitle: 'Знайомство', nameLabel: 'Ім’я (необов’язково)', namePlaceholder: 'Як тебе звати?',
            addressLabel: 'Як до тебе звертатися?', addressNeutral: 'Нейтрально', addressMasculine: 'Він / його',
            addressFeminine: 'Вона / її', privacyNote: 'Ім’я зберігається лише в цьому браузері. Вік не потрібен.',
            streak: 'Серія', didYouKnow: 'Цікавий факт', mistakeTitle: 'Запитання для повторення',
            retryMistakes: 'Повторити помилки', mistakes: 'Помилки', yourAnswer: 'Твоя відповідь',
            correctAnswer: 'Правильна відповідь', unanswered: 'Без відповіді', bestScore: 'Рекорд рівня',
            newRecord: 'Новий рекорд!', badgesTitle: 'Відзнаки', badgeFirst: 'Перший гербарій',
            badgeExpert: 'Знавець трав', badgeMaster: 'Майстер травництва', badgeStreak3: 'Серія ×3',
            badgeStreak5: 'Серія ×5', badgeStreak10: 'Серія ×10', muted: 'Увімкнути звуки',
            unmuted: 'Вимкнути звуки', perfectM: 'Чудово! Ти справжній знавець трав.',
            perfectF: 'Чудово! Ти справжня знавчиня трав.', perfectN: 'Чудово! Твої знання про трави вражають.',
            goodM: 'Гарна робота! Ти добре знаєшся на травах.', goodF: 'Гарна робота! Ти добре знаєшся на травах.',
            goodN: 'Гарна робота! Твої знання про рослини міцнішають.',
            keepGoingM: 'Добрий початок! Продовжуй вивчати трави.',
            keepGoingF: 'Добрий початок! Продовжуй вивчати трави.',
            keepGoingN: 'Добрий початок! Продовжуй відкривати світ рослин.'
        },
        en: {
            flag: '🇬🇧', name: 'English', menu: 'Menu', chooseLanguage: 'Choose a language', kicker: 'APOTHECARY NOTES',
            welcome: 'Welcome to the quiz!', intro: 'Test your knowledge of herbalism', chooseLevel: 'Choose a difficulty',
            easy: 'Easy', normal: 'Normal', hard: 'Hard', hardcore: 'Hardcore', start: 'Start quiz',
            time: 'Time', score: 'Score', correct: 'Correct!', wrong: 'Incorrect!', almost: 'Almost right!',
            timeout: 'Time is up!', resultKicker: 'APOTHECARY NOTES', finished: 'Quiz complete!',
            again: 'Try again', home: 'Home', question: 'Question', of: 'of', result: 'Result', duration: 's · 10 questions',
            perfect: 'Wonderful! You are a true herb expert.', good: 'Well done! Keep exploring plants.',
            keepGoing: 'A good start! Try again and learn more.',
            loading: 'Translating the question…', translationError: 'Translation unavailable. The question is shown in Ukrainian.',
            profileTitle: 'A little introduction', nameLabel: 'Name (optional)', namePlaceholder: 'Your name',
            addressLabel: 'How should we address you?', addressNeutral: 'Neutral', addressMasculine: 'He / him',
            addressFeminine: 'She / her', privacyNote: 'Your name stays in this browser. Age is not needed.',
            streak: 'Streak', didYouKnow: 'Did you know?', mistakeTitle: 'Questions to review',
            retryMistakes: 'Retry missed questions', mistakes: 'Missed', yourAnswer: 'Your answer',
            correctAnswer: 'Correct answer', unanswered: 'No answer', bestScore: 'Level best',
            newRecord: 'New record!', badgesTitle: 'Badges', badgeFirst: 'First Herbarium',
            badgeExpert: 'Herb Expert', badgeMaster: 'Herbal Master', badgeStreak3: '3 in a row',
            badgeStreak5: '5 in a row', badgeStreak10: '10 in a row', muted: 'Turn sounds on',
            unmuted: 'Turn sounds off', perfectM: 'Wonderful! You are a true herb expert.',
            perfectF: 'Wonderful! You are a true herb expert.', perfectN: 'Wonderful! Your plant knowledge is impressive.',
            goodM: 'Well done! You know your herbs.', goodF: 'Well done! You know your herbs.',
            goodN: 'Well done! Your plant knowledge is growing.',
            keepGoingM: 'A good start! Keep learning about herbs.',
            keepGoingF: 'A good start! Keep learning about herbs.',
            keepGoingN: 'A good start! Keep discovering the plant world.'
        },
        de: {
            flag: '🇩🇪', name: 'Deutsch', menu: 'Menü', chooseLanguage: 'Sprache wählen', kicker: 'NOTIZEN DER APOTHEKERIN',
            welcome: 'Willkommen beim Quiz!', intro: 'Teste dein Wissen über Heilkräuter', chooseLevel: 'Schwierigkeitsgrad wählen',
            easy: 'Leicht', normal: 'Normal', hard: 'Schwer', hardcore: 'Extrem', start: 'Quiz starten',
            time: 'Zeit', score: 'Punkte', correct: 'Richtig!', wrong: 'Falsch!', almost: 'Fast richtig!',
            timeout: 'Die Zeit ist um!', resultKicker: 'NOTIZEN DER APOTHEKERIN', finished: 'Quiz beendet!',
            again: 'Noch einmal', home: 'Startseite', question: 'Frage', of: 'von', result: 'Ergebnis', duration: 's · 10 Fragen',
            perfect: 'Wunderbar! Du kennst dich mit Kräutern aus.', good: 'Gut gemacht! Entdecke weiter die Pflanzenwelt.',
            keepGoing: 'Ein guter Anfang! Versuche es noch einmal.',
            loading: 'Frage wird übersetzt…', translationError: 'Übersetzung nicht verfügbar. Die Frage wird auf Ukrainisch angezeigt.',
            profileTitle: 'Lerne uns kennen', nameLabel: 'Name (optional)', namePlaceholder: 'Dein Name',
            addressLabel: 'Wie sollen wir dich ansprechen?', addressNeutral: 'Neutral', addressMasculine: 'Er / ihm',
            addressFeminine: 'Sie / ihr', privacyNote: 'Dein Name bleibt in diesem Browser. Das Alter ist nicht nötig.',
            streak: 'Serie', didYouKnow: 'Schon gewusst?', mistakeTitle: 'Fragen zum Wiederholen',
            retryMistakes: 'Falsche Fragen wiederholen', mistakes: 'Falsch', yourAnswer: 'Deine Antwort',
            correctAnswer: 'Richtige Antwort', unanswered: 'Keine Antwort', bestScore: 'Bestwert',
            newRecord: 'Neuer Rekord!', badgesTitle: 'Abzeichen', badgeFirst: 'Erstes Herbarium',
            badgeExpert: 'Kräuterkenner', badgeMaster: 'Kräutermeister', badgeStreak3: '3er-Serie',
            badgeStreak5: '5er-Serie', badgeStreak10: '10er-Serie', muted: 'Ton einschalten',
            unmuted: 'Ton ausschalten', perfectM: 'Wunderbar! Du kennst dich mit Kräutern aus.',
            perfectF: 'Wunderbar! Du kennst dich mit Kräutern aus.', perfectN: 'Wunderbar! Dein Pflanzenwissen ist beeindruckend.',
            goodM: 'Gut gemacht! Du kennst dich mit Kräutern aus.', goodF: 'Gut gemacht! Du kennst dich mit Kräutern aus.',
            goodN: 'Gut gemacht! Dein Pflanzenwissen wächst.',
            keepGoingM: 'Ein guter Anfang! Lerne weiter über Kräuter.',
            keepGoingF: 'Ein guter Anfang! Lerne weiter über Kräuter.',
            keepGoingN: 'Ein guter Anfang! Entdecke weiter die Pflanzenwelt.'
        },
        it: {
            flag: '🇮🇹', name: 'Italiano', menu: 'Menu', chooseLanguage: 'Scegli la lingua', kicker: 'APPUNTI DI SPEZIERIA',
            welcome: 'Benvenuto al quiz!', intro: 'Metti alla prova le tue conoscenze sulle erbe', chooseLevel: 'Scegli la difficoltà',
            easy: 'Facile', normal: 'Normale', hard: 'Difficile', hardcore: 'Estremo', start: 'Inizia il quiz',
            time: 'Tempo', score: 'Punti', correct: 'Corretto!', wrong: 'Sbagliato!', almost: 'Quasi giusto!',
            timeout: 'Tempo scaduto!', resultKicker: 'APPUNTI DI SPEZIERIA', finished: 'Quiz completato!',
            again: 'Riprova', home: 'Home', question: 'Domanda', of: 'di', result: 'Risultato', duration: 's · 10 domande',
            perfect: 'Magnifico! Sei un vero esperto di erbe.', good: 'Ben fatto! Continua a esplorare le piante.',
            keepGoing: 'Un buon inizio! Riprova e impara ancora.',
            loading: 'Traduzione della domanda…', translationError: 'Traduzione non disponibile. La domanda è mostrata in ucraino.',
            profileTitle: 'Presentiamoci', nameLabel: 'Nome (facoltativo)', namePlaceholder: 'Il tuo nome',
            addressLabel: 'Come preferisci essere chiamato?', addressNeutral: 'Neutro', addressMasculine: 'Lui',
            addressFeminine: 'Lei', privacyNote: 'Il nome resta in questo browser. L’età non è necessaria.',
            streak: 'Serie', didYouKnow: 'Lo sapevi?', mistakeTitle: 'Domande da ripassare',
            retryMistakes: 'Riprova gli errori', mistakes: 'Errori', yourAnswer: 'La tua risposta',
            correctAnswer: 'Risposta corretta', unanswered: 'Nessuna risposta', bestScore: 'Record livello',
            newRecord: 'Nuovo record!', badgesTitle: 'Distintivi', badgeFirst: 'Primo erbario',
            badgeExpert: 'Esperto di erbe', badgeMaster: 'Maestro delle erbe', badgeStreak3: 'Serie ×3',
            badgeStreak5: 'Serie ×5', badgeStreak10: 'Serie ×10', muted: 'Attiva i suoni',
            unmuted: 'Disattiva i suoni', perfectM: 'Magnifico! Sei un vero esperto di erbe.',
            perfectF: 'Magnifico! Sei una vera esperta di erbe.', perfectN: 'Magnifico! Le tue conoscenze sulle piante sono notevoli.',
            goodM: 'Ben fatto! Conosci bene le erbe.', goodF: 'Ben fatto! Conosci bene le erbe.',
            goodN: 'Ben fatto! Le tue conoscenze botaniche crescono.',
            keepGoingM: 'Un buon inizio! Continua a imparare sulle erbe.',
            keepGoingF: 'Un buon inizio! Continua a imparare sulle erbe.',
            keepGoingN: 'Un buon inizio! Continua a scoprire il mondo vegetale.'
        },
        es: {
            flag: '🇪🇸', name: 'Español', menu: 'Menú', chooseLanguage: 'Elige un idioma', kicker: 'NOTAS DE BOTICARIA',
            welcome: '¡Te damos la bienvenida!', intro: 'Pon a prueba tus conocimientos sobre hierbas', chooseLevel: 'Elige la dificultad',
            easy: 'Fácil', normal: 'Normal', hard: 'Difícil', hardcore: 'Extremo', start: 'Empezar el quiz',
            time: 'Tiempo', score: 'Puntos', correct: '¡Correcto!', wrong: '¡Incorrecto!', almost: '¡Casi!',
            timeout: '¡Se acabó el tiempo!', resultKicker: 'NOTAS DE BOTICARIA', finished: '¡Quiz terminado!',
            again: 'Intentar de nuevo', home: 'Inicio', question: 'Pregunta', of: 'de', result: 'Resultado', duration: 's · 10 preguntas',
            perfect: '¡Estupendo! Sabes mucho sobre hierbas.', good: '¡Bien hecho! Sigue explorando las plantas.',
            keepGoing: '¡Buen comienzo! Inténtalo otra vez.',
            loading: 'Traduciendo la pregunta…', translationError: 'Traducción no disponible. La pregunta se muestra en ucraniano.',
            profileTitle: 'Conozcámonos', nameLabel: 'Nombre (opcional)', namePlaceholder: 'Tu nombre',
            addressLabel: '¿Cómo prefieres que nos dirijamos a ti?', addressNeutral: 'Neutral', addressMasculine: 'Él',
            addressFeminine: 'Ella', privacyNote: 'Tu nombre solo se guarda en este navegador. No hace falta la edad.',
            streak: 'Racha', didYouKnow: '¿Sabías que…?', mistakeTitle: 'Preguntas para repasar',
            retryMistakes: 'Repetir errores', mistakes: 'Errores', yourAnswer: 'Tu respuesta',
            correctAnswer: 'Respuesta correcta', unanswered: 'Sin respuesta', bestScore: 'Récord del nivel',
            newRecord: '¡Nuevo récord!', badgesTitle: 'Insignias', badgeFirst: 'Primer herbario',
            badgeExpert: 'Experto en hierbas', badgeMaster: 'Maestro de las hierbas', badgeStreak3: 'Racha ×3',
            badgeStreak5: 'Racha ×5', badgeStreak10: 'Racha ×10', muted: 'Activar sonidos',
            unmuted: 'Desactivar sonidos', perfectM: '¡Estupendo! Eres un experto en hierbas.',
            perfectF: '¡Estupendo! Eres una experta en hierbas.', perfectN: '¡Estupendo! Tus conocimientos sobre plantas impresionan.',
            goodM: '¡Bien hecho! Conoces bien las hierbas.', goodF: '¡Bien hecho! Conoces bien las hierbas.',
            goodN: '¡Bien hecho! Tus conocimientos sobre plantas siguen creciendo.',
            keepGoingM: '¡Buen comienzo! Sigue aprendiendo sobre hierbas.',
            keepGoingF: '¡Buen comienzo! Sigue aprendiendo sobre hierbas.',
            keepGoingN: '¡Buen comienzo! Sigue descubriendo el mundo vegetal.'
        },
        fr: {
            flag: '🇫🇷', name: 'Français', menu: 'Menu', chooseLanguage: 'Choisissez une langue', kicker: 'NOTES D’APOTHICAIRE',
            welcome: 'Bienvenue au quiz !', intro: 'Teste tes connaissances sur les plantes médicinales', chooseLevel: 'Choisis la difficulté',
            easy: 'Facile', normal: 'Normal', hard: 'Difficile', hardcore: 'Extrême', start: 'Commencer le quiz',
            time: 'Temps', score: 'Points', correct: 'Correct !', wrong: 'Incorrect !', almost: 'Presque !',
            timeout: 'Le temps est écoulé !', resultKicker: 'NOTES D’APOTHICAIRE', finished: 'Quiz terminé !',
            again: 'Réessayer', home: 'Accueil', question: 'Question', of: 'sur', result: 'Résultat', duration: 's · 10 questions',
            perfect: 'Formidable ! Tu connais bien les plantes.', good: 'Bien joué ! Continue à explorer les plantes.',
            keepGoing: 'Bon début ! Réessaie pour en apprendre davantage.',
            loading: 'Traduction de la question…', translationError: 'Traduction indisponible. La question est affichée en ukrainien.',
            profileTitle: 'Faisons connaissance', nameLabel: 'Nom (facultatif)', namePlaceholder: 'Ton prénom',
            addressLabel: 'Comment préfères-tu que l’on s’adresse à toi ?', addressNeutral: 'Neutre', addressMasculine: 'Il / lui',
            addressFeminine: 'Elle', privacyNote: 'Ton nom reste dans ce navigateur. L’âge est inutile.',
            streak: 'Série', didYouKnow: 'Le savais-tu ?', mistakeTitle: 'Questions à revoir',
            retryMistakes: 'Réviser les erreurs', mistakes: 'Erreurs', yourAnswer: 'Ta réponse',
            correctAnswer: 'Bonne réponse', unanswered: 'Sans réponse', bestScore: 'Record du niveau',
            newRecord: 'Nouveau record !', badgesTitle: 'Badges', badgeFirst: 'Premier herbier',
            badgeExpert: 'Expert en plantes', badgeMaster: 'Maître des plantes', badgeStreak3: 'Série ×3',
            badgeStreak5: 'Série ×5', badgeStreak10: 'Série ×10', muted: 'Activer le son',
            unmuted: 'Couper le son', perfectM: 'Formidable ! Tu es un expert en plantes.',
            perfectF: 'Formidable ! Tu es une experte en plantes.', perfectN: 'Formidable ! Tes connaissances botaniques sont impressionnantes.',
            goodM: 'Bien joué ! Tu connais bien les plantes.', goodF: 'Bien joué ! Tu connais bien les plantes.',
            goodN: 'Bien joué ! Tes connaissances botaniques progressent.',
            keepGoingM: 'Bon début ! Continue à découvrir les plantes.',
            keepGoingF: 'Bon début ! Continue à découvrir les plantes.',
            keepGoingN: 'Bon début ! Continue à explorer le monde végétal.'
        },
        pl: {
            flag: '🇵🇱', name: 'Polski', menu: 'Menu', chooseLanguage: 'Wybierz język', kicker: 'ZAPISKI APTEKARSKIE',
            welcome: 'Witaj w quizie!', intro: 'Sprawdź swoją wiedzę o ziołach', chooseLevel: 'Wybierz poziom trudności',
            easy: 'Łatwy', normal: 'Normalny', hard: 'Trudny', hardcore: 'Ekspert', start: 'Rozpocznij quiz',
            time: 'Czas', score: 'Punkty', correct: 'Dobrze!', wrong: 'Źle!', almost: 'Prawie dobrze!',
            timeout: 'Czas minął!', resultKicker: 'ZAPISKI APTEKARSKIE', finished: 'Quiz ukończony!',
            again: 'Spróbuj ponownie', home: 'Strona główna', question: 'Pytanie', of: 'z', result: 'Wynik', duration: 's · 10 pytań',
            perfect: 'Wspaniale! Znasz się na ziołach.', good: 'Dobra robota! Odkrywaj dalej świat roślin.',
            keepGoing: 'Dobry początek! Spróbuj ponownie i dowiedz się więcej.',
            loading: 'Tłumaczenie pytania…', translationError: 'Tłumaczenie niedostępne. Pytanie jest wyświetlane po ukraińsku.',
            profileTitle: 'Poznajmy się', nameLabel: 'Imię (opcjonalnie)', namePlaceholder: 'Twoje imię',
            addressLabel: 'Jak się do Ciebie zwracać?', addressNeutral: 'Neutralnie', addressMasculine: 'On / jego',
            addressFeminine: 'Ona / jej', privacyNote: 'Imię jest zapisywane tylko w tej przeglądarce. Wiek nie jest wymagany.',
            streak: 'Seria', didYouKnow: 'Czy wiesz, że…?', mistakeTitle: 'Pytania do powtórki',
            retryMistakes: 'Powtórz błędne odpowiedzi', mistakes: 'Błędy', yourAnswer: 'Twoja odpowiedź',
            correctAnswer: 'Prawidłowa odpowiedź', unanswered: 'Brak odpowiedzi', bestScore: 'Rekord poziomu',
            newRecord: 'Nowy rekord!', badgesTitle: 'Odznaki', badgeFirst: 'Pierwszy zielnik',
            badgeExpert: 'Znawca ziół', badgeMaster: 'Mistrz zielarstwa', badgeStreak3: 'Seria ×3',
            badgeStreak5: 'Seria ×5', badgeStreak10: 'Seria ×10', muted: 'Włącz dźwięk',
            unmuted: 'Wyłącz dźwięk', perfectM: 'Wspaniale! Znasz się na ziołach.',
            perfectF: 'Wspaniale! Znasz się na ziołach.', perfectN: 'Wspaniale! Twoja wiedza o roślinach robi wrażenie.',
            goodM: 'Dobra robota! Dobrze znasz zioła.', goodF: 'Dobra robota! Dobrze znasz zioła.',
            goodN: 'Dobra robota! Twoja wiedza o roślinach stale rośnie.',
            keepGoingM: 'Dobry początek! Ucz się dalej o ziołach.',
            keepGoingF: 'Dobry początek! Ucz się dalej o ziołach.',
            keepGoingN: 'Dobry początek! Odkrywaj dalej świat roślin.'
        },
        id: {
            flag: '🇮🇩', name: 'Indonesia', menu: 'Menu', chooseLanguage: 'Pilih bahasa', kicker: 'CATATAN APOTEKER',
            welcome: 'Selamat datang di kuis!', intro: 'Uji pengetahuanmu tentang tanaman herbal', chooseLevel: 'Pilih tingkat kesulitan',
            easy: 'Mudah', normal: 'Normal', hard: 'Sulit', hardcore: 'Ekstrem', start: 'Mulai kuis',
            time: 'Waktu', score: 'Skor', correct: 'Benar!', wrong: 'Salah!', almost: 'Hampir benar!',
            timeout: 'Waktu habis!', resultKicker: 'CATATAN APOTEKER', finished: 'Kuis selesai!',
            again: 'Coba lagi', home: 'Beranda', question: 'Pertanyaan', of: 'dari', result: 'Hasil', duration: 'd · 10 pertanyaan',
            perfect: 'Hebat! Kamu ahli tanaman herbal.', good: 'Bagus! Terus jelajahi dunia tanaman.',
            keepGoing: 'Awal yang baik! Coba lagi dan pelajari lebih banyak.',
            loading: 'Menerjemahkan pertanyaan…', translationError: 'Terjemahan tidak tersedia. Pertanyaan ditampilkan dalam bahasa Ukraina.',
            profileTitle: 'Perkenalan', nameLabel: 'Nama (opsional)', namePlaceholder: 'Namamu',
            addressLabel: 'Bagaimana kami menyapamu?', addressNeutral: 'Netral', addressMasculine: 'Dia (laki-laki)',
            addressFeminine: 'Dia (perempuan)', privacyNote: 'Nama hanya disimpan di browser ini. Usia tidak diperlukan.',
            streak: 'Rentetan', didYouKnow: 'Tahukah kamu?', mistakeTitle: 'Pertanyaan untuk diulang',
            retryMistakes: 'Ulangi jawaban yang salah', mistakes: 'Kesalahan', yourAnswer: 'Jawabanmu',
            correctAnswer: 'Jawaban benar', unanswered: 'Tidak dijawab', bestScore: 'Rekor level',
            newRecord: 'Rekor baru!', badgesTitle: 'Lencana', badgeFirst: 'Herbarium Pertama',
            badgeExpert: 'Ahli Herbal', badgeMaster: 'Master Herbal', badgeStreak3: 'Rentetan ×3',
            badgeStreak5: 'Rentetan ×5', badgeStreak10: 'Rentetan ×10', muted: 'Nyalakan suara',
            unmuted: 'Matikan suara', perfectM: 'Hebat! Kamu ahli tanaman herbal.',
            perfectF: 'Hebat! Kamu ahli tanaman herbal.', perfectN: 'Hebat! Pengetahuan tanamanmu mengesankan.',
            goodM: 'Bagus! Kamu mengenal tanaman herbal dengan baik.', goodF: 'Bagus! Kamu mengenal tanaman herbal dengan baik.',
            goodN: 'Bagus! Pengetahuan tanamanmu semakin berkembang.',
            keepGoingM: 'Awal yang baik! Terus pelajari tanaman herbal.',
            keepGoingF: 'Awal yang baik! Terus pelajari tanaman herbal.',
            keepGoingN: 'Awal yang baik! Terus jelajahi dunia tumbuhan.'
        },
        ja: {
            flag: '🇯🇵', name: '日本語', menu: 'メニュー', chooseLanguage: '言語を選択', kicker: '薬屋の記録',
            welcome: 'クイズへようこそ！', intro: '薬草の知識を試してみましょう', chooseLevel: '難易度を選択',
            easy: 'かんたん', normal: 'ふつう', hard: 'むずかしい', hardcore: '超難問', start: 'クイズ開始',
            time: '時間', score: '得点', correct: '正解！', wrong: '不正解！', almost: 'おしい！',
            timeout: '時間切れ！', resultKicker: '薬屋の記録', finished: 'クイズ終了！',
            again: 'もう一度', home: 'ホーム', question: '問題', of: '/', result: '結果', duration: '秒 · 10 問',
            perfect: 'すばらしい！薬草にとても詳しいですね。', good: 'よくできました！植物の世界を探求しましょう。',
            keepGoing: 'いいスタートです！もう一度挑戦しましょう。',
            loading: '問題を翻訳しています…', translationError: '翻訳できません。問題はウクライナ語で表示されます。',
            profileTitle: '自己紹介', nameLabel: '名前（任意）', namePlaceholder: 'お名前',
            addressLabel: '呼び方を選んでください', addressNeutral: '中立', addressMasculine: '男性形',
            addressFeminine: '女性形', privacyNote: '名前はこのブラウザー内に保存されます。年齢は不要です。',
            streak: '連続正解', didYouKnow: '豆知識', mistakeTitle: '復習する問題',
            retryMistakes: '間違いをもう一度', mistakes: '間違い', yourAnswer: 'あなたの回答',
            correctAnswer: '正解', unanswered: '未回答', bestScore: 'レベル記録',
            newRecord: '新記録！', badgesTitle: 'バッジ', badgeFirst: '初めての植物標本',
            badgeExpert: '薬草博士', badgeMaster: '薬草の達人', badgeStreak3: '3連続正解',
            badgeStreak5: '5連続正解', badgeStreak10: '10連続正解', muted: '音をオンにする',
            unmuted: '音をオフにする', perfectM: 'すばらしい！薬草にとても詳しいですね。',
            perfectF: 'すばらしい！薬草にとても詳しいですね。', perfectN: 'すばらしい！植物の知識が豊富ですね。',
            goodM: 'よくできました！薬草に詳しいですね。', goodF: 'よくできました！薬草に詳しいですね。',
            goodN: 'よくできました！植物の知識が増えていますね。',
            keepGoingM: 'いいスタートです！薬草を学び続けましょう。',
            keepGoingF: 'いいスタートです！薬草を学び続けましょう。',
            keepGoingN: 'いいスタートです！植物の世界を探求しましょう。'
        },
        ko: {
            flag: '🇰🇷', name: '한국어', menu: '메뉴', chooseLanguage: '언어 선택', kicker: '약방의 기록',
            welcome: '퀴즈에 오신 것을 환영합니다!', intro: '약초 지식을 확인해 보세요', chooseLevel: '난이도 선택',
            easy: '쉬움', normal: '보통', hard: '어려움', hardcore: '매우 어려움', start: '퀴즈 시작',
            time: '시간', score: '점수', correct: '정답!', wrong: '오답!', almost: '아깝네요!',
            timeout: '시간 초과!', resultKicker: '약방의 기록', finished: '퀴즈 완료!',
            again: '다시 도전', home: '홈으로', question: '문제', of: '/', result: '결과', duration: '초 · 10문항',
            perfect: '훌륭해요! 약초 전문가시네요.', good: '잘했어요! 식물에 대해 계속 알아보세요.',
            keepGoing: '좋은 시작이에요! 다시 도전해 보세요.',
            loading: '문제를 번역하는 중…', translationError: '번역할 수 없습니다. 문제는 우크라이나어로 표시됩니다.',
            profileTitle: '자기소개', nameLabel: '이름 (선택 사항)', namePlaceholder: '이름을 입력하세요',
            addressLabel: '어떤 호칭을 원하시나요?', addressNeutral: '중립', addressMasculine: '남성형',
            addressFeminine: '여성형', privacyNote: '이름은 이 브라우저에만 저장됩니다. 나이는 필요하지 않습니다.',
            streak: '연속 정답', didYouKnow: '알고 계셨나요?', mistakeTitle: '복습할 문제',
            retryMistakes: '틀린 문제 다시 풀기', mistakes: '오답', yourAnswer: '내 답변',
            correctAnswer: '정답', unanswered: '답변 없음', bestScore: '최고 기록',
            newRecord: '신기록!', badgesTitle: '배지', badgeFirst: '첫 식물 도감',
            badgeExpert: '약초 전문가', badgeMaster: '약초의 달인', badgeStreak3: '3연속 정답',
            badgeStreak5: '5연속 정답', badgeStreak10: '10연속 정답', muted: '소리 켜기',
            unmuted: '소리 끄기', perfectM: '훌륭해요! 약초 전문가시네요.',
            perfectF: '훌륭해요! 약초 전문가시네요.', perfectN: '훌륭해요! 식물에 대한 지식이 대단해요.',
            goodM: '잘했어요! 약초를 잘 알고 있네요.', goodF: '잘했어요! 약초를 잘 알고 있네요.',
            goodN: '잘했어요! 식물 지식이 점점 늘고 있어요.',
            keepGoingM: '좋은 시작이에요! 약초 공부를 계속해 보세요.',
            keepGoingF: '좋은 시작이에요! 약초 공부를 계속해 보세요.',
            keepGoingN: '좋은 시작이에요! 식물의 세계를 계속 탐험해 보세요.'
        },
        zh: {
            flag: '🇨🇳', name: '中文', menu: '菜单', chooseLanguage: '选择语言', kicker: '药铺手记',
            welcome: '欢迎参加知识问答！', intro: '测试你对草药的了解', chooseLevel: '选择难度',
            easy: '简单', normal: '普通', hard: '困难', hardcore: '极难', start: '开始答题',
            time: '时间', score: '得分', correct: '正确！', wrong: '错误！', almost: '差一点！',
            timeout: '时间到！', resultKicker: '药铺手记', finished: '答题结束！',
            again: '再试一次', home: '返回首页', question: '问题', of: '/', result: '结果', duration: '秒 · 10 题',
            perfect: '太棒了！你真是草药达人。', good: '做得好！继续探索植物世界。',
            keepGoing: '开局不错！再试一次，学到更多。',
            loading: '正在翻译问题…', translationError: '暂时无法翻译，问题将以乌克兰语显示。',
            profileTitle: '自我介绍', nameLabel: '姓名（选填）', namePlaceholder: '你的名字',
            addressLabel: '希望如何称呼你？', addressNeutral: '中性', addressMasculine: '男性称呼',
            addressFeminine: '女性称呼', privacyNote: '姓名仅保存在此浏览器中。不需要填写年龄。',
            streak: '连续答对', didYouKnow: '你知道吗？', mistakeTitle: '复习题目',
            retryMistakes: '重做错题', mistakes: '错题', yourAnswer: '你的答案',
            correctAnswer: '正确答案', unanswered: '未作答', bestScore: '本级最佳',
            newRecord: '新纪录！', badgesTitle: '徽章', badgeFirst: '初次植物图鉴',
            badgeExpert: '草药专家', badgeMaster: '草药大师', badgeStreak3: '连续答对×3',
            badgeStreak5: '连续答对×5', badgeStreak10: '连续答对×10', muted: '开启声音',
            unmuted: '关闭声音', perfectM: '太棒了！你真是草药达人。',
            perfectF: '太棒了！你真是草药达人。', perfectN: '太棒了！你的植物知识令人佩服。',
            goodM: '做得好！你很了解草药。', goodF: '做得好！你很了解草药。',
            goodN: '做得好！你的植物知识越来越丰富。',
            keepGoingM: '开局不错！继续学习草药知识。',
            keepGoingF: '开局不错！继续学习草药知识。',
            keepGoingN: '开局不错！继续探索植物世界。'
        }
    };
    Object.assign(locales, {
        pt: {
            ...locales.en,
            flag: '🇧🇷', name: 'Português (Brasil)', menu: 'Menu', chooseLanguage: 'Escolha um idioma',
            kicker: 'ANOTAÇÕES DA BOTICÁRIA', welcome: '🌿Boas-vindas ao quiz!🌿',
            intro: '🌻Teste seus conhecimentos sobre plantas medicinais🌻', chooseLevel: 'Escolha a dificuldade',
            easy: 'Fácil', normal: 'Normal', hard: 'Difícil', hardcore: 'Muito difícil', start: 'Começar o quiz',
            time: 'Tempo', score: 'Pontos', correct: 'Correto!', wrong: 'Incorreto!', almost: 'Quase certo!',
            timeout: 'O tempo acabou!', resultKicker: 'ANOTAÇÕES DA BOTICÁRIA', finished: 'Quiz concluído!',
            again: 'Tentar novamente', home: 'Início', question: 'Pergunta', of: 'de', result: 'Resultado',
            duration: 's · 10 perguntas', perfect: 'Excelente! Você entende muito de plantas.',
            good: 'Muito bem! Continue explorando o mundo das plantas.',
            keepGoing: 'Bom começo! Tente novamente e aprenda mais.',
            loading: 'Traduzindo a pergunta…', translationError: 'Tradução indisponível. A pergunta será exibida em ucraniano.',
            profileTitle: 'Vamos nos conhecer', nameLabel: 'Nome (opcional)', namePlaceholder: 'Seu nome',
            addressLabel: 'Como devemos nos dirigir a você?', addressNeutral: 'Neutro',
            addressMasculine: 'Masculino', addressFeminine: 'Feminino',
            privacyNote: 'Seu nome fica salvo apenas neste navegador. Não é necessário informar a idade.',
            streak: 'Sequência', didYouKnow: 'Você sabia?', mistakeTitle: 'Perguntas para revisar',
            retryMistakes: 'Refazer respostas erradas', mistakes: 'Erros', yourAnswer: 'Sua resposta',
            correctAnswer: 'Resposta correta', unanswered: 'Sem resposta', bestScore: 'Recorde do nível',
            newRecord: 'Novo recorde!', badgesTitle: 'Conquistas', badgeFirst: 'Primeiro herbário',
            badgeExpert: 'Especialista em ervas', badgeMaster: 'Mestre das ervas', badgeStreak3: 'Sequência ×3',
            badgeStreak5: 'Sequência ×5', badgeStreak10: 'Sequência ×10', muted: 'Ativar sons',
            unmuted: 'Desativar sons', perfectM: 'Excelente! Você entende muito de plantas.',
            perfectF: 'Excelente! Você entende muito de plantas.', perfectN: 'Excelente! Seu conhecimento sobre plantas impressiona.',
            goodM: 'Muito bem! Você conhece bastante as plantas.', goodF: 'Muito bem! Você conhece bastante as plantas.',
            goodN: 'Muito bem! Seu conhecimento sobre plantas está crescendo.',
            keepGoingM: 'Bom começo! Continue aprendendo sobre plantas.',
            keepGoingF: 'Bom começo! Continue aprendendo sobre plantas.',
            keepGoingN: 'Bom começo! Continue descobrindo o mundo das plantas.'
        },
        nl: {
            ...locales.en,
            flag: '🇳🇱', name: 'Nederlands', menu: 'Menu', chooseLanguage: 'Kies een taal',
            kicker: 'AANTEKENINGEN VAN DE APOTHEKER', welcome: '🌿Welkom bij de quiz!🌿',
            intro: '🌻Test je kennis van kruiden🌻', chooseLevel: 'Kies een moeilijkheidsgraad',
            easy: 'Makkelijk', normal: 'Normaal', hard: 'Moeilijk', hardcore: 'Zeer moeilijk', start: 'Quiz starten',
            time: 'Tijd', score: 'Punten', correct: 'Goed!', wrong: 'Fout!', almost: 'Bijna goed!',
            timeout: 'De tijd is om!', resultKicker: 'AANTEKENINGEN VAN DE APOTHEKER', finished: 'Quiz afgerond!',
            again: 'Opnieuw proberen', home: 'Startpagina', question: 'Vraag', of: 'van', result: 'Resultaat',
            duration: 'sec · 10 vragen', perfect: 'Geweldig! Je weet veel over kruiden.',
            good: 'Goed gedaan! Blijf de plantenwereld ontdekken.',
            keepGoing: 'Een goed begin! Probeer het opnieuw en leer meer.',
            loading: 'Vraag wordt vertaald…', translationError: 'Vertaling niet beschikbaar. De vraag wordt in het Oekraïens getoond.',
            profileTitle: 'Even kennismaken', nameLabel: 'Naam (optioneel)', namePlaceholder: 'Je naam',
            addressLabel: 'Hoe mogen we je aanspreken?', addressNeutral: 'Neutraal',
            addressMasculine: 'Mannelijk', addressFeminine: 'Vrouwelijk',
            privacyNote: 'Je naam wordt alleen in deze browser opgeslagen. Je leeftijd is niet nodig.',
            streak: 'Reeks', didYouKnow: 'Wist je dat?', mistakeTitle: 'Vragen om te herhalen',
            retryMistakes: 'Foute antwoorden opnieuw doen', mistakes: 'Fouten', yourAnswer: 'Jouw antwoord',
            correctAnswer: 'Juiste antwoord', unanswered: 'Niet beantwoord', bestScore: 'Beste score',
            newRecord: 'Nieuw record!', badgesTitle: 'Insignes', badgeFirst: 'Eerste herbarium',
            badgeExpert: 'Kruidenkenner', badgeMaster: 'Kruidenmeester', badgeStreak3: 'Reeks ×3',
            badgeStreak5: 'Reeks ×5', badgeStreak10: 'Reeks ×10', muted: 'Geluid aanzetten',
            unmuted: 'Geluid uitzetten', perfectM: 'Geweldig! Je weet veel over kruiden.',
            perfectF: 'Geweldig! Je weet veel over kruiden.', perfectN: 'Geweldig! Je plantenkennis is indrukwekkend.',
            goodM: 'Goed gedaan! Je kent je kruiden.', goodF: 'Goed gedaan! Je kent je kruiden.',
            goodN: 'Goed gedaan! Je plantenkennis groeit.',
            keepGoingM: 'Een goed begin! Blijf kruiden leren kennen.',
            keepGoingF: 'Een goed begin! Blijf kruiden leren kennen.',
            keepGoingN: 'Een goed begin! Ontdek verder de plantenwereld.'
        },
        cs: {
            ...locales.en,
            flag: '🇨🇿', name: 'Čeština', menu: 'Nabídka', chooseLanguage: 'Vyberte jazyk',
            kicker: 'LÉKÁRNICKÉ ZÁPISKY', welcome: '🌿Vítejte v kvízu!🌿',
            intro: '🌻Ověřte si své znalosti bylin🌻', chooseLevel: 'Vyberte obtížnost',
            easy: 'Lehká', normal: 'Střední', hard: 'Těžká', hardcore: 'Velmi těžká', start: 'Spustit kvíz',
            time: 'Čas', score: 'Body', correct: 'Správně!', wrong: 'Špatně!', almost: 'Téměř správně!',
            timeout: 'Čas vypršel!', resultKicker: 'LÉKÁRNICKÉ ZÁPISKY', finished: 'Kvíz dokončen!',
            again: 'Zkusit znovu', home: 'Domů', question: 'Otázka', of: 'z', result: 'Výsledek',
            duration: 's · 10 otázek', perfect: 'Výborně! Bylinám opravdu rozumíte.',
            good: 'Dobrá práce! Objevujte dál svět rostlin.',
            keepGoing: 'Dobrý začátek! Zkuste to znovu a dozvíte se víc.',
            loading: 'Překládám otázku…', translationError: 'Překlad není dostupný. Otázka se zobrazuje ukrajinsky.',
            profileTitle: 'Seznamme se', nameLabel: 'Jméno (nepovinné)', namePlaceholder: 'Vaše jméno',
            addressLabel: 'Jak vás máme oslovovat?', addressNeutral: 'Neutrálně',
            addressMasculine: 'Mužský rod', addressFeminine: 'Ženský rod',
            privacyNote: 'Jméno se ukládá pouze v tomto prohlížeči. Věk není potřeba.',
            streak: 'Série', didYouKnow: 'Věděli jste, že…?', mistakeTitle: 'Otázky k opakování',
            retryMistakes: 'Zopakovat chybné odpovědi', mistakes: 'Chyby', yourAnswer: 'Vaše odpověď',
            correctAnswer: 'Správná odpověď', unanswered: 'Bez odpovědi', bestScore: 'Rekord úrovně',
            newRecord: 'Nový rekord!', badgesTitle: 'Odznaky', badgeFirst: 'První herbář',
            badgeExpert: 'Znalec bylin', badgeMaster: 'Mistr bylin', badgeStreak3: 'Série ×3',
            badgeStreak5: 'Série ×5', badgeStreak10: 'Série ×10', muted: 'Zapnout zvuky',
            unmuted: 'Vypnout zvuky', perfectM: 'Výborně! Bylinám opravdu rozumíte.',
            perfectF: 'Výborně! Bylinám opravdu rozumíte.', perfectN: 'Výborně! Vaše znalosti rostlin jsou působivé.',
            goodM: 'Dobrá práce! Bylinám dobře rozumíte.', goodF: 'Dobrá práce! Bylinám dobře rozumíte.',
            goodN: 'Dobrá práce! Vaše znalosti rostlin se rozšiřují.',
            keepGoingM: 'Dobrý začátek! Pokračujte ve studiu bylin.',
            keepGoingF: 'Dobrý začátek! Pokračujte ve studiu bylin.',
            keepGoingN: 'Dobrý začátek! Objevujte dál svět rostlin.'
        },
        ro: {
            ...locales.en,
            flag: '🇷🇴', name: 'Română', menu: 'Meniu', chooseLanguage: 'Alege limba',
            kicker: 'ÎNSEMNĂRILE FARMACISTEI', welcome: '🌿Bine ai venit la quiz!🌿',
            intro: '🌻Testează-ți cunoștințele despre plante🌻', chooseLevel: 'Alege nivelul de dificultate',
            easy: 'Ușor', normal: 'Normal', hard: 'Dificil', hardcore: 'Foarte dificil', start: 'Începe quizul',
            time: 'Timp', score: 'Puncte', correct: 'Corect!', wrong: 'Greșit!', almost: 'Aproape corect!',
            timeout: 'Timpul a expirat!', resultKicker: 'ÎNSEMNĂRILE FARMACISTEI', finished: 'Quiz încheiat!',
            again: 'Încearcă din nou', home: 'Acasă', question: 'Întrebarea', of: 'din', result: 'Rezultat',
            duration: 's · 10 întrebări', perfect: 'Minunat! Te pricepi la plante.',
            good: 'Bravo! Continuă să descoperi lumea plantelor.',
            keepGoing: 'Un început bun! Încearcă din nou și află mai multe.',
            loading: 'Se traduce întrebarea…', translationError: 'Traducerea nu este disponibilă. Întrebarea este afișată în ucraineană.',
            profileTitle: 'Să ne cunoaștem', nameLabel: 'Nume (opțional)', namePlaceholder: 'Numele tău',
            addressLabel: 'Cum dorești să ți ne adresăm?', addressNeutral: 'Neutru',
            addressMasculine: 'Masculin', addressFeminine: 'Feminin',
            privacyNote: 'Numele este salvat doar în acest browser. Vârsta nu este necesară.',
            streak: 'Serie', didYouKnow: 'Știai că…?', mistakeTitle: 'Întrebări de repetat',
            retryMistakes: 'Reia răspunsurile greșite', mistakes: 'Greșeli', yourAnswer: 'Răspunsul tău',
            correctAnswer: 'Răspuns corect', unanswered: 'Fără răspuns', bestScore: 'Recordul nivelului',
            newRecord: 'Record nou!', badgesTitle: 'Insigne', badgeFirst: 'Primul ierbar',
            badgeExpert: 'Expert în plante', badgeMaster: 'Maestru al plantelor', badgeStreak3: 'Serie ×3',
            badgeStreak5: 'Serie ×5', badgeStreak10: 'Serie ×10', muted: 'Activează sunetele',
            unmuted: 'Dezactivează sunetele', perfectM: 'Minunat! Te pricepi la plante.',
            perfectF: 'Minunat! Te pricepi la plante.', perfectN: 'Minunat! Cunoștințele tale despre plante impresionează.',
            goodM: 'Bravo! Cunoști bine plantele.', goodF: 'Bravo! Cunoști bine plantele.',
            goodN: 'Bravo! Cunoștințele tale despre plante cresc.',
            keepGoingM: 'Un început bun! Continuă să înveți despre plante.',
            keepGoingF: 'Un început bun! Continuă să înveți despre plante.',
            keepGoingN: 'Un început bun! Descoperă în continuare lumea plantelor.'
        },
        tr: {
            ...locales.en,
            flag: '🇹🇷', name: 'Türkçe', menu: 'Menü', chooseLanguage: 'Dil seçin',
            kicker: 'ECZACI NOTLARI', welcome: '🌿Bilgi yarışmasına hoş geldin!🌿',
            intro: '🌻Şifalı bitkiler hakkındaki bilgini sına🌻', chooseLevel: 'Zorluk seviyesini seç',
            easy: 'Kolay', normal: 'Orta', hard: 'Zor', hardcore: 'Çok zor', start: 'Yarışmayı başlat',
            time: 'Süre', score: 'Puan', correct: 'Doğru!', wrong: 'Yanlış!', almost: 'Neredeyse doğru!',
            timeout: 'Süre doldu!', resultKicker: 'ECZACI NOTLARI', finished: 'Yarışma tamamlandı!',
            again: 'Tekrar dene', home: 'Ana sayfa', question: 'Soru', of: '/', result: 'Sonuç',
            duration: 'sn · 10 soru', perfect: 'Harika! Bitkiler hakkında çok şey biliyorsun.',
            good: 'Aferin! Bitkiler dünyasını keşfetmeye devam et.',
            keepGoing: 'Güzel bir başlangıç! Tekrar dene ve daha fazlasını öğren.',
            loading: 'Soru çevriliyor…', translationError: 'Çeviri kullanılamıyor. Soru Ukraynaca gösteriliyor.',
            profileTitle: 'Tanışalım', nameLabel: 'İsim (isteğe bağlı)', namePlaceholder: 'Adın',
            addressLabel: 'Sana nasıl hitap edelim?', addressNeutral: 'Nötr',
            addressMasculine: 'Eril', addressFeminine: 'Dişil',
            privacyNote: 'İsmin yalnızca bu tarayıcıda saklanır. Yaş bilgisi gerekmez.',
            streak: 'Seri', didYouKnow: 'Biliyor muydun?', mistakeTitle: 'Tekrar edilecek sorular',
            retryMistakes: 'Yanlış cevapları tekrar et', mistakes: 'Hatalar', yourAnswer: 'Cevabın',
            correctAnswer: 'Doğru cevap', unanswered: 'Cevaplanmadı', bestScore: 'Seviye rekoru',
            newRecord: 'Yeni rekor!', badgesTitle: 'Rozetler', badgeFirst: 'İlk herbaryum',
            badgeExpert: 'Bitki uzmanı', badgeMaster: 'Bitki ustası', badgeStreak3: 'Seri ×3',
            badgeStreak5: 'Seri ×5', badgeStreak10: 'Seri ×10', muted: 'Sesleri aç',
            unmuted: 'Sesleri kapat', perfectM: 'Harika! Bitkiler hakkında çok şey biliyorsun.',
            perfectF: 'Harika! Bitkiler hakkında çok şey biliyorsun.', perfectN: 'Harika! Bitki bilgin etkileyici.',
            goodM: 'Aferin! Bitkileri iyi tanıyorsun.', goodF: 'Aferin! Bitkileri iyi tanıyorsun.',
            goodN: 'Aferin! Bitki bilgin gelişiyor.',
            keepGoingM: 'Güzel bir başlangıç! Bitkileri öğrenmeye devam et.',
            keepGoingF: 'Güzel bir başlangıç! Bitkileri öğrenmeye devam et.',
            keepGoingN: 'Güzel bir başlangıç! Bitkiler dünyasını keşfetmeye devam et.'
        }
    });
    Object.assign(locales, {
        hi: {
            ...locales.en,
            flag: '🇮🇳', name: 'हिन्दी', menu: 'मेन्यू', chooseLanguage: 'भाषा चुनें',
            kicker: 'औषधालय की टिप्पणियाँ', welcome: '🌿क्विज़ में आपका स्वागत है!🌿',
            intro: '🌻औषधीय पौधों के बारे में अपना ज्ञान परखें🌻', chooseLevel: 'कठिनाई चुनें',
            easy: 'आसान', normal: 'सामान्य', hard: 'कठिन', hardcore: 'बहुत कठिन', start: 'क्विज़ शुरू करें',
            time: 'समय', score: 'अंक', correct: 'सही!', wrong: 'गलत!', almost: 'लगभग सही!',
            timeout: 'समय समाप्त!', resultKicker: 'औषधालय की टिप्पणियाँ', finished: 'क्विज़ पूरा हुआ!',
            again: 'फिर से कोशिश करें', home: 'मुखपृष्ठ', question: 'प्रश्न', of: 'में से', result: 'परिणाम',
            duration: 'सेकंड · 10 प्रश्न', perfect: 'शानदार! आपको पौधों की अच्छी जानकारी है।',
            good: 'बहुत अच्छा! पौधों की दुनिया को खोजते रहें।',
            keepGoing: 'अच्छी शुरुआत! फिर कोशिश करें और कुछ नया सीखें।',
            loading: 'प्रश्न का अनुवाद हो रहा है…', translationError: 'अनुवाद उपलब्ध नहीं है। प्रश्न यूक्रेनी में दिखाया गया है।',
            profileTitle: 'परिचय', nameLabel: 'नाम (ज़रूरी नहीं)', namePlaceholder: 'आपका नाम',
            addressLabel: 'आपको किस तरह संबोधित करें?', addressNeutral: 'तटस्थ',
            addressMasculine: 'पुल्लिंग', addressFeminine: 'स्त्रीलिंग',
            streak: 'लगातार सही', didYouKnow: 'क्या आप जानते हैं?', mistakeTitle: 'दोहराने के प्रश्न',
            retryMistakes: 'गलत उत्तर फिर से करें', mistakes: 'गलतियाँ', yourAnswer: 'आपका उत्तर',
            correctAnswer: 'सही उत्तर', unanswered: 'उत्तर नहीं दिया', bestScore: 'स्तर का रिकॉर्ड',
            newRecord: 'नया रिकॉर्ड!', badgesTitle: 'बैज', badgeFirst: 'पहला हर्बेरियम',
            badgeExpert: 'जड़ी-बूटी विशेषज्ञ', badgeMaster: 'वनस्पति गुरु', badgeStreak3: 'लगातार ×3',
            badgeStreak5: 'लगातार ×5', badgeStreak10: 'लगातार ×10', muted: 'ध्वनि चालू करें',
            unmuted: 'ध्वनि बंद करें', perfectM: 'शानदार! आपको पौधों की अच्छी जानकारी है।',
            perfectF: 'शानदार! आपको पौधों की अच्छी जानकारी है।', perfectN: 'शानदार! पौधों के बारे में आपका ज्ञान प्रभावशाली है।',
            goodM: 'बहुत अच्छा! आप पौधों को अच्छी तरह जानते हैं।', goodF: 'बहुत अच्छा! आप पौधों को अच्छी तरह जानती हैं।',
            goodN: 'बहुत अच्छा! पौधों के बारे में आपका ज्ञान बढ़ रहा है।',
            keepGoingM: 'अच्छी शुरुआत! पौधों के बारे में सीखते रहें।',
            keepGoingF: 'अच्छी शुरुआत! पौधों के बारे में सीखती रहें।',
            keepGoingN: 'अच्छी शुरुआत! पौधों की दुनिया खोजते रहें।'
        },
        vi: {
            ...locales.en,
            flag: '🇻🇳', name: 'Tiếng Việt', menu: 'Menu', chooseLanguage: 'Chọn ngôn ngữ',
            kicker: 'GHI CHÉP DƯỢC THẢO', welcome: '🌿Chào mừng đến với câu đố!🌿',
            intro: '🌻Kiểm tra kiến thức về cây thuốc của bạn🌻', chooseLevel: 'Chọn độ khó',
            easy: 'Dễ', normal: 'Bình thường', hard: 'Khó', hardcore: 'Rất khó', start: 'Bắt đầu',
            time: 'Thời gian', score: 'Điểm', correct: 'Chính xác!', wrong: 'Sai rồi!', almost: 'Gần đúng!',
            timeout: 'Hết giờ!', resultKicker: 'GHI CHÉP DƯỢC THẢO', finished: 'Hoàn thành câu đố!',
            again: 'Thử lại', home: 'Trang chủ', question: 'Câu hỏi', of: '/', result: 'Kết quả',
            duration: 'giây · 10 câu hỏi', perfect: 'Tuyệt vời! Bạn rất am hiểu về cây thuốc.',
            good: 'Làm tốt lắm! Hãy tiếp tục khám phá thế giới thực vật.',
            keepGoing: 'Khởi đầu tốt! Hãy thử lại để tìm hiểu thêm.',
            loading: 'Đang dịch câu hỏi…', translationError: 'Không thể dịch. Câu hỏi được hiển thị bằng tiếng Ukraina.',
            profileTitle: 'Làm quen', nameLabel: 'Tên (không bắt buộc)', namePlaceholder: 'Tên của bạn',
            addressLabel: 'Chúng tôi nên xưng hô với bạn thế nào?', addressNeutral: 'Trung tính',
            addressMasculine: 'Nam', addressFeminine: 'Nữ',
            streak: 'Chuỗi đúng', didYouKnow: 'Bạn có biết?', mistakeTitle: 'Câu hỏi cần ôn tập',
            retryMistakes: 'Làm lại câu trả lời sai', mistakes: 'Câu sai', yourAnswer: 'Câu trả lời của bạn',
            correctAnswer: 'Đáp án đúng', unanswered: 'Chưa trả lời', bestScore: 'Kỷ lục cấp độ',
            newRecord: 'Kỷ lục mới!', badgesTitle: 'Huy hiệu', badgeFirst: 'Bộ sưu tập đầu tiên',
            badgeExpert: 'Chuyên gia cây thuốc', badgeMaster: 'Bậc thầy thảo mộc', badgeStreak3: 'Chuỗi ×3',
            badgeStreak5: 'Chuỗi ×5', badgeStreak10: 'Chuỗi ×10', muted: 'Bật âm thanh',
            unmuted: 'Tắt âm thanh', perfectM: 'Tuyệt vời! Bạn rất am hiểu về cây thuốc.',
            perfectF: 'Tuyệt vời! Bạn rất am hiểu về cây thuốc.', perfectN: 'Tuyệt vời! Kiến thức thực vật của bạn thật ấn tượng.',
            goodM: 'Làm tốt lắm! Bạn hiểu biết về cây thuốc.', goodF: 'Làm tốt lắm! Bạn hiểu biết về cây thuốc.',
            goodN: 'Làm tốt lắm! Kiến thức thực vật của bạn ngày càng phong phú.',
            keepGoingM: 'Khởi đầu tốt! Hãy tiếp tục tìm hiểu về cây thuốc.',
            keepGoingF: 'Khởi đầu tốt! Hãy tiếp tục tìm hiểu về cây thuốc.',
            keepGoingN: 'Khởi đầu tốt! Hãy tiếp tục khám phá thế giới thực vật.'
        },
        sw: {
            ...locales.en,
            flag: '🇰🇪', name: 'Kiswahili', menu: 'Menyu', chooseLanguage: 'Chagua lugha',
            kicker: 'MAKUMBUSHO YA MGANGA', welcome: '🌿Karibu kwenye chemsha bongo!🌿',
            intro: '🌻Jaribu ujuzi wako kuhusu mimea ya dawa🌻', chooseLevel: 'Chagua kiwango cha ugumu',
            easy: 'Rahisi', normal: 'Wastani', hard: 'Ngumu', hardcore: 'Ngumu sana', start: 'Anza chemsha bongo',
            time: 'Muda', score: 'Alama', correct: 'Sahihi!', wrong: 'Si sahihi!', almost: 'Karibu sahihi!',
            timeout: 'Muda umeisha!', resultKicker: 'MAKUMBUSHO YA MGANGA', finished: 'Jaribio limekamilika!',
            again: 'Jaribu tena', home: 'Mwanzo', question: 'Swali', of: 'kati ya', result: 'Matokeo',
            duration: 'sek · maswali 10', perfect: 'Hongera! Unajua mengi kuhusu mimea.',
            good: 'Vizuri sana! Endelea kuchunguza ulimwengu wa mimea.',
            keepGoing: 'Mwanzo mzuri! Jaribu tena na ujifunze zaidi.',
            loading: 'Swali linatafsiriwa…', translationError: 'Tafsiri haipatikani. Swali linaonyeshwa kwa Kiukreni.',
            profileTitle: 'Tufahamiane', nameLabel: 'Jina (si lazima)', namePlaceholder: 'Jina lako',
            addressLabel: 'Tukuitaje?', addressNeutral: 'Jina lisiloegemea jinsia',
            addressMasculine: 'Jina la kiume', addressFeminine: 'Jina la kike',
            streak: 'Mfululizo', didYouKnow: 'Je, wajua?', mistakeTitle: 'Maswali ya kurudia',
            retryMistakes: 'Rudia majibu yasiyo sahihi', mistakes: 'Makosa', yourAnswer: 'Jibu lako',
            correctAnswer: 'Jibu sahihi', unanswered: 'Halijajibiwa', bestScore: 'Rekodi ya kiwango',
            newRecord: 'Rekodi mpya!', badgesTitle: 'Beji', badgeFirst: 'Mkusanyo wa kwanza',
            badgeExpert: 'Mtaalamu wa mimea', badgeMaster: 'Bingwa wa mimea', badgeStreak3: 'Mfululizo ×3',
            badgeStreak5: 'Mfululizo ×5', badgeStreak10: 'Mfululizo ×10', muted: 'Washa sauti',
            unmuted: 'Zima sauti', perfectM: 'Hongera! Unajua mengi kuhusu mimea.',
            perfectF: 'Hongera! Unajua mengi kuhusu mimea.', perfectN: 'Hongera! Ujuzi wako wa mimea unavutia.',
            goodM: 'Vizuri sana! Unaifahamu mimea.', goodF: 'Vizuri sana! Unaifahamu mimea.',
            goodN: 'Vizuri sana! Ujuzi wako wa mimea unaongezeka.',
            keepGoingM: 'Mwanzo mzuri! Endelea kujifunza kuhusu mimea.',
            keepGoingF: 'Mwanzo mzuri! Endelea kujifunza kuhusu mimea.',
            keepGoingN: 'Mwanzo mzuri! Endelea kuchunguza ulimwengu wa mimea.'
        },
        af: {
            ...locales.en,
            flag: '🇿🇦', name: 'Afrikaans', menu: 'Kieslys', chooseLanguage: 'Kies ’n taal',
            kicker: 'AANTEKENINGE VAN DIE APTEKER', welcome: '🌿Welkom by die vasvra!🌿',
            intro: '🌻Toets jou kennis van medisinale plante🌻', chooseLevel: 'Kies ’n moeilikheidsgraad',
            easy: 'Maklik', normal: 'Gemiddeld', hard: 'Moeilik', hardcore: 'Baie moeilik', start: 'Begin die vasvra',
            time: 'Tyd', score: 'Punte', correct: 'Reg!', wrong: 'Verkeerd!', almost: 'Amper reg!',
            timeout: 'Tyd is verby!', resultKicker: 'AANTEKENINGE VAN DIE APTEKER', finished: 'Vasvra voltooi!',
            again: 'Probeer weer', home: 'Tuisblad', question: 'Vraag', of: 'van', result: 'Uitslag',
            duration: 'sek · 10 vrae', perfect: 'Uitstekend! Jy weet baie van plante.',
            good: 'Goed gedoen! Verken die plantwêreld verder.',
            keepGoing: '’n Goeie begin! Probeer weer en leer nog meer.',
            loading: 'Vraag word vertaal…', translationError: 'Vertaling is nie beskikbaar nie. Die vraag word in Oekraïens vertoon.',
            profileTitle: 'Kom ons maak kennis', nameLabel: 'Naam (opsioneel)', namePlaceholder: 'Jou naam',
            addressLabel: 'Hoe moet ons jou aanspreek?', addressNeutral: 'Neutraal',
            addressMasculine: 'Manlik', addressFeminine: 'Vroulik',
            streak: 'Reeks', didYouKnow: 'Het jy geweet?', mistakeTitle: 'Vrae om te hersien',
            retryMistakes: 'Probeer verkeerde antwoorde weer', mistakes: 'Foute', yourAnswer: 'Jou antwoord',
            correctAnswer: 'Korrekte antwoord', unanswered: 'Nie beantwoord nie', bestScore: 'Beste telling',
            newRecord: 'Nuwe rekord!', badgesTitle: 'Kentekens', badgeFirst: 'Eerste herbarium',
            badgeExpert: 'Kruiekenner', badgeMaster: 'Kruiemeester', badgeStreak3: 'Reeks ×3',
            badgeStreak5: 'Reeks ×5', badgeStreak10: 'Reeks ×10', muted: 'Skakel klank aan',
            unmuted: 'Skakel klank af', perfectM: 'Uitstekend! Jy weet baie van plante.',
            perfectF: 'Uitstekend! Jy weet baie van plante.', perfectN: 'Uitstekend! Jou plantkennis is indrukwekkend.',
            goodM: 'Goed gedoen! Jy ken jou plante.', goodF: 'Goed gedoen! Jy ken jou plante.',
            goodN: 'Goed gedoen! Jou plantkennis groei.',
            keepGoingM: '’n Goeie begin! Hou aan om oor plante te leer.',
            keepGoingF: '’n Goeie begin! Hou aan om oor plante te leer.',
            keepGoingN: '’n Goeie begin! Verken die plantwêreld verder.'
        },
        mi: {
            ...locales.en,
            flag: '🇳🇿', name: 'Te reo Māori', menu: 'Tahua', chooseLanguage: 'Kōwhiria he reo',
            kicker: 'NGĀ TUHINGA RONGOĀ', welcome: '🌿Nau mai ki te kēmu pātai!🌿',
            intro: '🌻Whakamātauria tō mōhio ki ngā otaota rongoā🌻', chooseLevel: 'Kōwhiria te taumata uaua',
            easy: 'Māmā', normal: 'Wawaenga', hard: 'Uaua', hardcore: 'Tino uaua', start: 'Tīmata te kēmu',
            time: 'Wā', score: 'Tohu', correct: 'Ka tika!', wrong: 'Kei te hē!', almost: 'Tata tonu!',
            timeout: 'Kua pau te wā!', resultKicker: 'NGĀ TUHINGA RONGOĀ', finished: 'Kua oti te kēmu!',
            again: 'Ngana anō', home: 'Kāinga', question: 'Pātai', of: 'o', result: 'Hua',
            duration: 'hēkona · 10 pātai', perfect: 'Ka rawe! He nui ō mōhiotanga ki ngā otaota.',
            good: 'Ka pai! Tūhuratia tonutia te ao tipu.',
            keepGoing: 'He tīmatanga pai! Ngana anō kia ako i ētahi atu mea.',
            loading: 'Kei te whakamāoritia te pātai…', translationError: 'Kāore he whakamāoritanga. Kei te whakaaturia te pātai ki te reo Iukereiniana.',
            profileTitle: 'Kia mōhio tātou ki a tātou', nameLabel: 'Ingoa (kāore e herea)', namePlaceholder: 'Tō ingoa',
            addressLabel: 'Me pēhea tā mātou karanga i a koe?', addressNeutral: 'Kupu kūpapa',
            addressMasculine: 'Kupu tāne', addressFeminine: 'Kupu wahine',
            streak: 'Raupapa', didYouKnow: 'I mōhio rānei koe?', mistakeTitle: 'Ngā pātai hei arotake',
            retryMistakes: 'Whakahokia ngā whakautu hē', mistakes: 'Ngā hapa', yourAnswer: 'Tāu whakautu',
            correctAnswer: 'Te whakautu tika', unanswered: 'Kāore i whakautua', bestScore: 'Rekoata taumata',
            newRecord: 'He rekoata hou!', badgesTitle: 'Ngā tohu', badgeFirst: 'Herbarium tuatahi',
            badgeExpert: 'Mātanga otaota', badgeMaster: 'Tohunga otaota', badgeStreak3: 'Raupapa ×3',
            badgeStreak5: 'Raupapa ×5', badgeStreak10: 'Raupapa ×10', muted: 'Whakakāngia te oro',
            unmuted: 'Whakawetohia te oro', perfectM: 'Ka rawe! He nui ō mōhiotanga ki ngā otaota.',
            perfectF: 'Ka rawe! He nui ō mōhiotanga ki ngā otaota.', perfectN: 'Ka rawe! He whakamīharo ō mōhiotanga ki ngā tipu.',
            goodM: 'Ka pai! E mōhio ana koe ki ngā otaota.', goodF: 'Ka pai! E mōhio ana koe ki ngā otaota.',
            goodN: 'Ka pai! Kei te tipu haere ō mōhiotanga ki ngā tipu.',
            keepGoingM: 'He tīmatanga pai! Ako tonu mō ngā otaota.',
            keepGoingF: 'He tīmatanga pai! Ako tonu mō ngā otaota.',
            keepGoingN: 'He tīmatanga pai! Tūhuratia tonutia te ao tipu.'
        }
    });

    const additionalTranslations = {
        uk: {
            profileTitle: 'Знайомство', nameLabel: 'Ім’я (необов’язково)', namePlaceholder: 'Як тебе звати?',
            addressLabel: 'Як до тебе звертатися?', addressNeutral: 'Нейтрально', addressMasculine: 'Він / його',
            addressFeminine: 'Вона / її', privacyNote: 'Ім’я зберігається лише в цьому браузері. Вік не потрібен.',
            streak: 'Серія', didYouKnow: 'Цікавий факт', mistakeTitle: 'Запитання для повторення',
            retryMistakes: 'Повторити помилки', mistakes: 'Помилки', yourAnswer: 'Твоя відповідь',
            correctAnswer: 'Правильна відповідь', unanswered: 'Без відповіді', bestScore: 'Рекорд рівня',
            newRecord: 'Новий рекорд!', badgesTitle: 'Відзнаки', badgeFirst: 'Перший гербарій',
            badgeExpert: 'Знавець трав', badgeMaster: 'Майстер травництва', badgeStreak3: 'Серія ×3',
            badgeStreak5: 'Серія ×5', badgeStreak10: 'Серія ×10', muted: 'Увімкнути звуки',
            unmuted: 'Вимкнути звуки', perfectM: 'Чудово! Ти справжній знавець трав.',
            perfectF: 'Чудово! Ти справжня знавчиня трав.', perfectN: 'Чудово! Твої знання про трави вражають.',
            goodM: 'Гарна робота! Ти добре знаєшся на травах.', goodF: 'Гарна робота! Ти добре знаєшся на травах.',
            goodN: 'Гарна робота! Твої знання про рослини міцнішають.',
            keepGoingM: 'Добрий початок! Продовжуй вивчати трави.',
            keepGoingF: 'Добрий початок! Продовжуй вивчати трави.',
            keepGoingN: 'Добрий початок! Продовжуй відкривати світ рослин.'
        },
        en: {
            profileTitle: 'A little introduction', nameLabel: 'Name (optional)', namePlaceholder: 'Your name',
            addressLabel: 'How should we address you?', addressNeutral: 'Neutral', addressMasculine: 'He / him',
            addressFeminine: 'She / her', privacyNote: 'Your name stays in this browser. Age is not needed.',
            streak: 'Streak', didYouKnow: 'Did you know?', mistakeTitle: 'Questions to review',
            retryMistakes: 'Retry missed questions', mistakes: 'Missed', yourAnswer: 'Your answer',
            correctAnswer: 'Correct answer', unanswered: 'No answer', bestScore: 'Level best',
            newRecord: 'New record!', badgesTitle: 'Badges', badgeFirst: 'First Herbarium',
            badgeExpert: 'Herb Expert', badgeMaster: 'Herbal Master', badgeStreak3: '3 in a row',
            badgeStreak5: '5 in a row', badgeStreak10: '10 in a row', muted: 'Turn sounds on', unmuted: 'Turn sounds off',
            perfectM: locales.en.perfect, perfectF: locales.en.perfect, perfectN: 'Wonderful! Your plant knowledge is impressive.',
            goodM: locales.en.good, goodF: locales.en.good, goodN: 'Well done! Your plant knowledge is growing.',
            keepGoingM: locales.en.keepGoing, keepGoingF: locales.en.keepGoing, keepGoingN: 'A good start! Keep discovering the plant world.'
        },
        de: {
            profileTitle: 'Lerne uns kennen', nameLabel: 'Name (optional)', namePlaceholder: 'Dein Name',
            addressLabel: 'Wie sollen wir dich ansprechen?', addressNeutral: 'Neutral', addressMasculine: 'Er / ihm',
            addressFeminine: 'Sie / ihr', privacyNote: 'Dein Name bleibt in diesem Browser. Das Alter ist nicht nötig.',
            streak: 'Serie', didYouKnow: 'Schon gewusst?', mistakeTitle: 'Fragen zum Wiederholen',
            retryMistakes: 'Falsche Fragen wiederholen', mistakes: 'Falsch', yourAnswer: 'Deine Antwort',
            correctAnswer: 'Richtige Antwort', unanswered: 'Keine Antwort', bestScore: 'Bestwert',
            newRecord: 'Neuer Rekord!', badgesTitle: 'Abzeichen', badgeFirst: 'Erstes Herbarium',
            badgeExpert: 'Kräuterkenner', badgeMaster: 'Kräutermeister', badgeStreak3: '3er-Serie',
            badgeStreak5: '5er-Serie', badgeStreak10: '10er-Serie', muted: 'Ton einschalten', unmuted: 'Ton ausschalten',
            perfectM: locales.de.perfect, perfectF: locales.de.perfect, perfectN: 'Wunderbar! Dein Pflanzenwissen ist beeindruckend.',
            goodM: locales.de.good, goodF: locales.de.good, goodN: 'Gut gemacht! Dein Pflanzenwissen wächst.',
            keepGoingM: locales.de.keepGoing, keepGoingF: locales.de.keepGoing, keepGoingN: 'Ein guter Anfang! Entdecke weiter die Pflanzenwelt.'
        },
        it: {
            profileTitle: 'Presentiamoci', nameLabel: 'Nome (facoltativo)', namePlaceholder: 'Il tuo nome',
            addressLabel: 'Come preferisci essere chiamato?', addressNeutral: 'Neutro', addressMasculine: 'Lui',
            addressFeminine: 'Lei', privacyNote: 'Il nome resta in questo browser. L’età non è necessaria.',
            streak: 'Serie', didYouKnow: 'Lo sapevi?', mistakeTitle: 'Domande da ripassare',
            retryMistakes: 'Riprova gli errori', mistakes: 'Errori', yourAnswer: 'La tua risposta',
            correctAnswer: 'Risposta corretta', unanswered: 'Nessuna risposta', bestScore: 'Record livello',
            newRecord: 'Nuovo record!', badgesTitle: 'Distintivi', badgeFirst: 'Primo erbario',
            badgeExpert: 'Esperto di erbe', badgeMaster: 'Maestro delle erbe', badgeStreak3: 'Serie ×3',
            badgeStreak5: 'Serie ×5', badgeStreak10: 'Serie ×10', muted: 'Attiva i suoni', unmuted: 'Disattiva i suoni',
            perfectM: locales.it.perfect, perfectF: 'Magnifico! Sei una vera esperta di erbe.', perfectN: 'Magnifico! Le tue conoscenze sulle piante sono notevoli.',
            goodM: locales.it.good, goodF: locales.it.good, goodN: 'Ben fatto! Le tue conoscenze botaniche crescono.',
            keepGoingM: locales.it.keepGoing, keepGoingF: locales.it.keepGoing, keepGoingN: 'Un buon inizio! Continua a scoprire il mondo vegetale.'
        },
        es: {
            profileTitle: 'Conozcámonos', nameLabel: 'Nombre (opcional)', namePlaceholder: 'Tu nombre',
            addressLabel: '¿Cómo prefieres que nos dirijamos a ti?', addressNeutral: 'Neutral', addressMasculine: 'Él',
            addressFeminine: 'Ella', privacyNote: 'Tu nombre solo se guarda en este navegador. No hace falta la edad.',
            streak: 'Racha', didYouKnow: '¿Sabías que…?', mistakeTitle: 'Preguntas para repasar',
            retryMistakes: 'Repetir errores', mistakes: 'Errores', yourAnswer: 'Tu respuesta',
            correctAnswer: 'Respuesta correcta', unanswered: 'Sin respuesta', bestScore: 'Récord del nivel',
            newRecord: '¡Nuevo récord!', badgesTitle: 'Insignias', badgeFirst: 'Primer herbario',
            badgeExpert: 'Experto en hierbas', badgeMaster: 'Maestro de las hierbas', badgeStreak3: 'Racha ×3',
            badgeStreak5: 'Racha ×5', badgeStreak10: 'Racha ×10', muted: 'Activar sonidos', unmuted: 'Desactivar sonidos',
            perfectM: locales.es.perfect, perfectF: '¡Estupendo! Eres una experta en hierbas.', perfectN: '¡Estupendo! Tus conocimientos sobre plantas impresionan.',
            goodM: locales.es.good, goodF: locales.es.good, goodN: '¡Bien hecho! Tus conocimientos sobre plantas siguen creciendo.',
            keepGoingM: locales.es.keepGoing, keepGoingF: locales.es.keepGoing, keepGoingN: '¡Buen comienzo! Sigue descubriendo el mundo vegetal.'
        },
        fr: {
            profileTitle: 'Faisons connaissance', nameLabel: 'Nom (facultatif)', namePlaceholder: 'Ton prénom',
            addressLabel: 'Comment préfères-tu que l’on s’adresse à toi ?', addressNeutral: 'Neutre', addressMasculine: 'Il / lui',
            addressFeminine: 'Elle', privacyNote: 'Ton nom reste dans ce navigateur. L’âge est inutile.',
            streak: 'Série', didYouKnow: 'Le savais-tu ?', mistakeTitle: 'Questions à revoir',
            retryMistakes: 'Réviser les erreurs', mistakes: 'Erreurs', yourAnswer: 'Ta réponse',
            correctAnswer: 'Bonne réponse', unanswered: 'Sans réponse', bestScore: 'Record du niveau',
            newRecord: 'Nouveau record !', badgesTitle: 'Badges', badgeFirst: 'Premier herbier',
            badgeExpert: 'Expert en plantes', badgeMaster: 'Maître des plantes', badgeStreak3: 'Série ×3',
            badgeStreak5: 'Série ×5', badgeStreak10: 'Série ×10', muted: 'Activer le son', unmuted: 'Couper le son',
            perfectM: locales.fr.perfect, perfectF: 'Formidable ! Tu es une experte en plantes.', perfectN: 'Formidable ! Tes connaissances botaniques sont impressionnantes.',
            goodM: locales.fr.good, goodF: locales.fr.good, goodN: 'Bien joué ! Tes connaissances botaniques progressent.',
            keepGoingM: locales.fr.keepGoing, keepGoingF: locales.fr.keepGoing, keepGoingN: 'Bon début ! Continue à explorer le monde végétal.'
        },
        id: {
            profileTitle: 'Perkenalan', nameLabel: 'Nama (opsional)', namePlaceholder: 'Namamu',
            addressLabel: 'Bagaimana kami menyapamu?', addressNeutral: 'Netral', addressMasculine: 'Dia (laki-laki)',
            addressFeminine: 'Dia (perempuan)', privacyNote: 'Nama hanya disimpan di browser ini. Usia tidak diperlukan.',
            streak: 'Rentetan', didYouKnow: 'Tahukah kamu?', mistakeTitle: 'Pertanyaan untuk diulang',
            retryMistakes: 'Ulangi jawaban yang salah', mistakes: 'Kesalahan', yourAnswer: 'Jawabanmu',
            correctAnswer: 'Jawaban benar', unanswered: 'Tidak dijawab', bestScore: 'Rekor level',
            newRecord: 'Rekor baru!', badgesTitle: 'Lencana', badgeFirst: 'Herbarium Pertama',
            badgeExpert: 'Ahli Herbal', badgeMaster: 'Master Herbal', badgeStreak3: 'Rentetan ×3',
            badgeStreak5: 'Rentetan ×5', badgeStreak10: 'Rentetan ×10', muted: 'Nyalakan suara', unmuted: 'Matikan suara',
            perfectM: locales.id.perfect, perfectF: locales.id.perfect, perfectN: 'Hebat! Pengetahuan tanamanmu mengesankan.',
            goodM: locales.id.good, goodF: locales.id.good, goodN: 'Bagus! Pengetahuan tanamanmu semakin berkembang.',
            keepGoingM: locales.id.keepGoing, keepGoingF: locales.id.keepGoing, keepGoingN: 'Awal yang baik! Terus jelajahi dunia tumbuhan.'
        },
        ja: {
            profileTitle: '自己紹介', nameLabel: '名前（任意）', namePlaceholder: 'お名前',
            addressLabel: '呼び方を選んでください', addressNeutral: '中立', addressMasculine: '男性形',
            addressFeminine: '女性形', privacyNote: '名前はこのブラウザー内に保存されます。年齢は不要です。',
            streak: '連続正解', didYouKnow: '豆知識', mistakeTitle: '復習する問題',
            retryMistakes: '間違いをもう一度', mistakes: '間違い', yourAnswer: 'あなたの回答',
            correctAnswer: '正解', unanswered: '未回答', bestScore: 'レベル記録',
            newRecord: '新記録！', badgesTitle: 'バッジ', badgeFirst: '初めての植物標本',
            badgeExpert: '薬草博士', badgeMaster: '薬草の達人', badgeStreak3: '3連続正解',
            badgeStreak5: '5連続正解', badgeStreak10: '10連続正解', muted: '音をオンにする', unmuted: '音をオフにする',
            perfectM: locales.ja.perfect, perfectF: locales.ja.perfect, perfectN: 'すばらしい！植物の知識が豊富ですね。',
            goodM: locales.ja.good, goodF: locales.ja.good, goodN: 'よくできました！植物の知識が増えていますね。',
            keepGoingM: locales.ja.keepGoing, keepGoingF: locales.ja.keepGoing, keepGoingN: 'いいスタートです！植物の世界を探求しましょう。'
        },
        ko: {
            profileTitle: '자기소개', nameLabel: '이름 (선택 사항)', namePlaceholder: '이름을 입력하세요',
            addressLabel: '어떤 호칭을 원하시나요?', addressNeutral: '중립', addressMasculine: '남성형',
            addressFeminine: '여성형', privacyNote: '이름은 이 브라우저에만 저장됩니다. 나이는 필요하지 않습니다.',
            streak: '연속 정답', didYouKnow: '알고 계셨나요?', mistakeTitle: '복습할 문제',
            retryMistakes: '틀린 문제 다시 풀기', mistakes: '오답', yourAnswer: '내 답변',
            correctAnswer: '정답', unanswered: '답변 없음', bestScore: '최고 기록',
            newRecord: '신기록!', badgesTitle: '배지', badgeFirst: '첫 식물 도감',
            badgeExpert: '약초 전문가', badgeMaster: '약초의 달인', badgeStreak3: '3연속 정답',
            badgeStreak5: '5연속 정답', badgeStreak10: '10연속 정답', muted: '소리 켜기', unmuted: '소리 끄기',
            perfectM: locales.ko.perfect, perfectF: locales.ko.perfect, perfectN: '훌륭해요! 식물에 대한 지식이 대단해요.',
            goodM: locales.ko.good, goodF: locales.ko.good, goodN: '잘했어요! 식물 지식이 점점 늘고 있어요.',
            keepGoingM: locales.ko.keepGoing, keepGoingF: locales.ko.keepGoing, keepGoingN: '좋은 시작이에요! 식물의 세계를 계속 탐험해 보세요.'
        },
        zh: {
            profileTitle: '自我介绍', nameLabel: '姓名（选填）', namePlaceholder: '你的名字',
            addressLabel: '希望如何称呼你？', addressNeutral: '中性', addressMasculine: '男性称呼',
            addressFeminine: '女性称呼', privacyNote: '姓名仅保存在此浏览器中。不需要填写年龄。',
            streak: '连续答对', didYouKnow: '你知道吗？', mistakeTitle: '复习题目',
            retryMistakes: '重做错题', mistakes: '错题', yourAnswer: '你的答案',
            correctAnswer: '正确答案', unanswered: '未作答', bestScore: '本级最佳',
            newRecord: '新纪录！', badgesTitle: '徽章', badgeFirst: '初次植物图鉴',
            badgeExpert: '草药专家', badgeMaster: '草药大师', badgeStreak3: '连续答对×3',
            badgeStreak5: '连续答对×5', badgeStreak10: '连续答对×10', muted: '开启声音', unmuted: '关闭声音',
            perfectM: locales.zh.perfect, perfectF: locales.zh.perfect, perfectN: '太棒了！你的植物知识令人佩服。',
            goodM: locales.zh.good, goodF: locales.zh.good, goodN: '做得好！你的植物知识越来越丰富。',
            keepGoingM: locales.zh.keepGoing, keepGoingF: locales.zh.keepGoing, keepGoingN: '开局不错！继续探索植物世界。'
        },
        pl: {
            profileTitle: 'Poznajmy się', nameLabel: 'Imię (opcjonalnie)', namePlaceholder: 'Jak masz na imię?',
            addressLabel: 'Jak się do Ciebie zwracać?', addressNeutral: 'Neutralnie', addressMasculine: 'On / jego',
            addressFeminine: 'Ona / jej', privacyNote: 'Imię jest zapisywane tylko w tej przeglądarce. Wiek nie jest wymagany.',
            streak: 'Seria', didYouKnow: 'Czy wiesz, że…?', mistakeTitle: 'Pytania do powtórki',
            retryMistakes: 'Powtórz błędne odpowiedzi', mistakes: 'Błędy', yourAnswer: 'Twoja odpowiedź',
            correctAnswer: 'Prawidłowa odpowiedź', unanswered: 'Brak odpowiedzi', bestScore: 'Rekord poziomu',
            newRecord: 'Nowy rekord!', badgesTitle: 'Odznaki', badgeFirst: 'Pierwszy zielnik',
            badgeExpert: 'Znawca ziół', badgeMaster: 'Mistrz zielarstwa', badgeStreak3: 'Seria ×3',
            badgeStreak5: 'Seria ×5', badgeStreak10: 'Seria ×10', muted: 'Włącz dźwięk',
            unmuted: 'Wyłącz dźwięk', perfectM: locales.pl.perfect, perfectF: locales.pl.perfect,
            perfectN: 'Wspaniale! Twoja wiedza o roślinach robi wrażenie.',
            goodM: locales.pl.good, goodF: locales.pl.good, goodN: 'Dobra robota! Twoja wiedza o roślinach stale rośnie.',
            keepGoingM: locales.pl.keepGoing, keepGoingF: locales.pl.keepGoing,
            keepGoingN: 'Dobry początek! Odkrywaj dalej świat roślin.'
        }
    };

    const featureTranslations = {
        uk: {
            studyMode: '📖 Навчання', encyclopedia: '🌿 Енциклопедія', identifyPlants: '🔎 Впізнай рослину',
            statistics: '📊 Статистика', soundSettings: '🔊 Звук', identifyPrompt: 'Яку рослину зображено?',
            encyclopediaIntro: 'Короткі нотатки про рослини з квізу.',
            plantSafety: 'Навчальна довідка. Не вживай дикорослі рослини без точного визначення та поради фахівця.',
            volumeLabel: 'Гучність ефектів', hoverSound: 'Звук при наведенні',
            volumeNote: 'Гучність налаштовується для звуків сайту; системний рівень пристрою не змінюється.',
            testSound: 'Перевірити звук', resetStats: 'Скинути статистику', roundsPlayed: 'Зіграно раундів',
            questionsAnswered: 'Відповідей дано', correctAnswers: 'Правильні відповіді', accuracy: 'Точність',
            levelRecords: 'Рекорди рівнів', noStats: 'Поки немає зіграних раундів.',
            identifyCorrect: 'Правильно!', identifyWrong: 'Не зовсім. Правильна відповідь:',
            identifyFinished: 'Раунд завершено!', identifyScore: 'Правильно', confirmResetStats: 'Скинути всю статистику?',
            toolNav: 'Інструменти квізу', close: 'Закрити'
        },
        en: {
            studyMode: '📖 Study mode', encyclopedia: '🌿 Plant guide', identifyPlants: '🔎 Identify a plant',
            statistics: '📊 Statistics', soundSettings: '🔊 Sound', identifyPrompt: 'Which plant is shown?',
            encyclopediaIntro: 'Quick notes about plants featured in the quiz.',
            plantSafety: 'For learning only. Never eat wild plants unless identified with certainty and approved by an expert.',
            volumeLabel: 'Effects volume', hoverSound: 'Hover sound',
            volumeNote: 'This adjusts website sounds only; it does not change your device volume.',
            testSound: 'Test sound', resetStats: 'Reset statistics', roundsPlayed: 'Rounds played',
            questionsAnswered: 'Questions answered', correctAnswers: 'Correct answers', accuracy: 'Accuracy',
            levelRecords: 'Level records', noStats: 'No completed rounds yet.',
            identifyCorrect: 'Correct!', identifyWrong: 'Not quite. The correct answer:',
            identifyFinished: 'Round complete!', identifyScore: 'Correct', confirmResetStats: 'Reset all statistics?',
            toolNav: 'Quiz tools', close: 'Close'
        },
        de: {
            studyMode: '📖 Lernmodus', encyclopedia: '🌿 Pflanzenlexikon', identifyPlants: '🔎 Pflanze erkennen',
            statistics: '📊 Statistik', soundSettings: '🔊 Ton', identifyPrompt: 'Welche Pflanze ist abgebildet?',
            encyclopediaIntro: 'Kurze Notizen zu Pflanzen aus dem Quiz.',
            plantSafety: 'Nur zu Lernzwecken. Wildpflanzen niemals ohne sichere Bestimmung und fachlichen Rat essen.',
            volumeLabel: 'Effektlautstärke', hoverSound: 'Ton beim Darüberfahren',
            volumeNote: 'Regelt nur Website-Töne, nicht die Lautstärke des Geräts.',
            testSound: 'Ton testen', resetStats: 'Statistik zurücksetzen', roundsPlayed: 'Gespielte Runden',
            questionsAnswered: 'Beantwortete Fragen', correctAnswers: 'Richtige Antworten', accuracy: 'Genauigkeit',
            levelRecords: 'Bestwerte je Stufe', noStats: 'Noch keine Runde abgeschlossen.',
            identifyCorrect: 'Richtig!', identifyWrong: 'Nicht ganz. Die richtige Antwort:',
            identifyFinished: 'Runde abgeschlossen!', identifyScore: 'Richtig', confirmResetStats: 'Gesamte Statistik zurücksetzen?',
            toolNav: 'Quiz-Werkzeuge', close: 'Schließen'
        },
        it: {
            studyMode: '📖 Modalità studio', encyclopedia: '🌿 Enciclopedia', identifyPlants: '🔎 Riconosci la pianta',
            statistics: '📊 Statistiche', soundSettings: '🔊 Suono', identifyPrompt: 'Quale pianta è raffigurata?',
            encyclopediaIntro: 'Brevi note sulle piante del quiz.',
            plantSafety: 'Solo a scopo didattico. Non mangiare piante selvatiche senza identificazione certa e parere esperto.',
            volumeLabel: 'Volume effetti', hoverSound: 'Suono al passaggio',
            volumeNote: 'Regola solo i suoni del sito, non il volume del dispositivo.',
            testSound: 'Prova il suono', resetStats: 'Azzera statistiche', roundsPlayed: 'Round giocati',
            questionsAnswered: 'Risposte date', correctAnswers: 'Risposte corrette', accuracy: 'Precisione',
            levelRecords: 'Record per livello', noStats: 'Nessun round completato.',
            identifyCorrect: 'Corretto!', identifyWrong: 'Non proprio. La risposta corretta:',
            identifyFinished: 'Round completato!', identifyScore: 'Corrette', confirmResetStats: 'Azzerare tutte le statistiche?',
            toolNav: 'Strumenti del quiz', close: 'Chiudi'
        },
        es: {
            studyMode: '📖 Modo de estudio', encyclopedia: '🌿 Enciclopedia', identifyPlants: '🔎 Identifica la planta',
            statistics: '📊 Estadísticas', soundSettings: '🔊 Sonido', identifyPrompt: '¿Qué planta aparece?',
            encyclopediaIntro: 'Notas breves sobre las plantas del cuestionario.',
            plantSafety: 'Solo con fines educativos. No comas plantas silvestres sin identificarlas con certeza y consultar a un experto.',
            volumeLabel: 'Volumen de efectos', hoverSound: 'Sonido al pasar',
            volumeNote: 'Ajusta solo los sonidos del sitio, no el volumen del dispositivo.',
            testSound: 'Probar sonido', resetStats: 'Restablecer estadísticas', roundsPlayed: 'Rondas jugadas',
            questionsAnswered: 'Preguntas respondidas', correctAnswers: 'Respuestas correctas', accuracy: 'Precisión',
            levelRecords: 'Récords por nivel', noStats: 'Aún no hay rondas completadas.',
            identifyCorrect: '¡Correcto!', identifyWrong: 'No exactamente. La respuesta correcta:',
            identifyFinished: '¡Ronda completada!', identifyScore: 'Correctas', confirmResetStats: '¿Restablecer todas las estadísticas?',
            toolNav: 'Herramientas del cuestionario', close: 'Cerrar'
        },
        fr: {
            studyMode: '📖 Mode apprentissage', encyclopedia: '🌿 Encyclopédie', identifyPlants: '🔎 Reconnaître la plante',
            statistics: '📊 Statistiques', soundSettings: '🔊 Son', identifyPrompt: 'Quelle plante est représentée ?',
            encyclopediaIntro: 'Quelques notes sur les plantes du quiz.',
            plantSafety: 'À but éducatif uniquement. Ne consomme jamais de plante sauvage sans identification certaine et avis expert.',
            volumeLabel: 'Volume des effets', hoverSound: 'Son au survol',
            volumeNote: 'Règle uniquement les sons du site, pas le volume de l’appareil.',
            testSound: 'Tester le son', resetStats: 'Réinitialiser les statistiques', roundsPlayed: 'Manches jouées',
            questionsAnswered: 'Questions répondues', correctAnswers: 'Bonnes réponses', accuracy: 'Précision',
            levelRecords: 'Records par niveau', noStats: 'Aucune manche terminée.',
            identifyCorrect: 'Correct !', identifyWrong: 'Pas tout à fait. La bonne réponse :',
            identifyFinished: 'Manche terminée !', identifyScore: 'Bonnes réponses', confirmResetStats: 'Réinitialiser toutes les statistiques ?',
            toolNav: 'Outils du quiz', close: 'Fermer'
        },
        id: {
            studyMode: '📖 Mode belajar', encyclopedia: '🌿 Ensiklopedia', identifyPlants: '🔎 Kenali tanaman',
            statistics: '📊 Statistik', soundSettings: '🔊 Suara', identifyPrompt: 'Tanaman apa yang ditampilkan?',
            encyclopediaIntro: 'Catatan singkat tentang tanaman dalam kuis.',
            plantSafety: 'Hanya untuk belajar. Jangan memakan tanaman liar tanpa identifikasi pasti dan saran ahli.',
            volumeLabel: 'Volume efek', hoverSound: 'Suara saat diarahkan',
            volumeNote: 'Hanya mengatur suara situs, bukan volume perangkat.',
            testSound: 'Uji suara', resetStats: 'Atur ulang statistik', roundsPlayed: 'Babak dimainkan',
            questionsAnswered: 'Pertanyaan dijawab', correctAnswers: 'Jawaban benar', accuracy: 'Akurasi',
            levelRecords: 'Rekor tiap level', noStats: 'Belum ada babak yang selesai.',
            identifyCorrect: 'Benar!', identifyWrong: 'Belum tepat. Jawaban yang benar:',
            identifyFinished: 'Babak selesai!', identifyScore: 'Benar', confirmResetStats: 'Atur ulang semua statistik?',
            toolNav: 'Alat kuis', close: 'Tutup'
        },
        ja: {
            studyMode: '📖 学習モード', encyclopedia: '🌿 植物図鑑', identifyPlants: '🔎 植物を見分ける',
            statistics: '📊 統計', soundSettings: '🔊 音', identifyPrompt: 'この植物は何でしょう？',
            encyclopediaIntro: 'クイズに登場する植物のメモです。',
            plantSafety: '学習目的の情報です。確実な識別と専門家の助言なしに野草を食べないでください。',
            volumeLabel: '効果音の音量', hoverSound: 'ホバー時の音',
            volumeNote: 'サイトの効果音だけを調整します。端末の音量は変わりません。',
            testSound: '音を試す', resetStats: '統計をリセット', roundsPlayed: 'プレイしたラウンド',
            questionsAnswered: '回答した問題', correctAnswers: '正解数', accuracy: '正答率',
            levelRecords: '難易度別記録', noStats: '完了したラウンドはありません。',
            identifyCorrect: '正解！', identifyWrong: '惜しい！正解は：',
            identifyFinished: 'ラウンド終了！', identifyScore: '正解', confirmResetStats: 'すべての統計をリセットしますか？',
            toolNav: 'クイズツール', close: '閉じる'
        },
        ko: {
            studyMode: '📖 학습 모드', encyclopedia: '🌿 식물 도감', identifyPlants: '🔎 식물 알아보기',
            statistics: '📊 통계', soundSettings: '🔊 소리', identifyPrompt: '어떤 식물일까요?',
            encyclopediaIntro: '퀴즈에 나오는 식물에 대한 간단한 정보입니다.',
            plantSafety: '학습용 정보입니다. 확실히 식별하고 전문가의 조언을 받기 전에는 야생 식물을 먹지 마세요.',
            volumeLabel: '효과음 크기', hoverSound: '마우스 오버 사운드',
            volumeNote: '사이트 효과음만 조절하며 기기 볼륨은 바꾸지 않습니다.',
            testSound: '소리 테스트', resetStats: '통계 초기화', roundsPlayed: '플레이한 라운드',
            questionsAnswered: '답변한 문제', correctAnswers: '정답 수', accuracy: '정확도',
            levelRecords: '난이도별 기록', noStats: '완료한 라운드가 없습니다.',
            identifyCorrect: '정답!', identifyWrong: '아쉽네요. 정답:',
            identifyFinished: '라운드 완료!', identifyScore: '정답', confirmResetStats: '모든 통계를 초기화할까요?',
            toolNav: '퀴즈 도구', close: '닫기'
        },
        zh: {
            studyMode: '📖 学习模式', encyclopedia: '🌿 植物图鉴', identifyPlants: '🔎 识别植物',
            statistics: '📊 统计', soundSettings: '🔊 声音', identifyPrompt: '图中是什么植物？',
            encyclopediaIntro: '测验中植物的简要介绍。',
            plantSafety: '仅供学习。未经准确辨认并咨询专家，请勿食用野生植物。',
            volumeLabel: '音效音量', hoverSound: '悬停时播放声音',
            volumeNote: '仅调节网站音效，不会更改设备音量。',
            testSound: '测试声音', resetStats: '重置统计', roundsPlayed: '完成回合',
            questionsAnswered: '已答题目', correctAnswers: '正确答案', accuracy: '正确率',
            levelRecords: '各难度纪录', noStats: '还没有完成的回合。',
            identifyCorrect: '正确！', identifyWrong: '不太对。正确答案是：',
            identifyFinished: '回合结束！', identifyScore: '正确数', confirmResetStats: '要重置所有统计吗？',
            toolNav: '答题工具', close: '关闭'
        },
        pl: {
            studyMode: '📖 Nauka', encyclopedia: '🌿 Encyklopedia', identifyPlants: '🔎 Rozpoznaj roślinę',
            statistics: '📊 Statystyki', soundSettings: '🔊 Dźwięk', identifyPrompt: 'Jaka roślina jest na obrazku?',
            encyclopediaIntro: 'Krótkie informacje o roślinach z quizu.',
            plantSafety: 'Materiał edukacyjny. Nie spożywaj dzikich roślin bez pewnej identyfikacji i porady specjalisty.',
            volumeLabel: 'Głośność efektów', hoverSound: 'Dźwięk po najechaniu',
            volumeNote: 'Reguluje tylko dźwięki strony, nie zmienia głośności urządzenia.',
            testSound: 'Sprawdź dźwięk', resetStats: 'Wyczyść statystyki', roundsPlayed: 'Rozegrane rundy',
            questionsAnswered: 'Udzielone odpowiedzi', correctAnswers: 'Prawidłowe odpowiedzi', accuracy: 'Skuteczność',
            levelRecords: 'Rekordy poziomów', noStats: 'Nie rozegrano jeszcze żadnej rundy.',
            identifyCorrect: 'Dobrze!', identifyWrong: 'Nie całkiem. Prawidłowa odpowiedź:',
            identifyFinished: 'Runda ukończona!', identifyScore: 'Prawidłowe', confirmResetStats: 'Wyczyścić wszystkie statystyki?',
            toolNav: 'Narzędzia quizu', close: 'Zamknij'
        },
        pt: {
            studyMode: '📖 Aprender', encyclopedia: '🌿 Enciclopédia', identifyPlants: '🔎 Identifique a planta',
            statistics: '📊 Estatísticas', soundSettings: '🔊 Som', identifyPrompt: 'Qual planta aparece na imagem?',
            encyclopediaIntro: 'Notas breves sobre as plantas do quiz.',
            plantSafety: 'Material educativo. Não consuma plantas silvestres sem identificação segura e orientação especializada.',
            volumeLabel: 'Volume dos efeitos', hoverSound: 'Som ao passar o cursor',
            volumeNote: 'Ajusta apenas os sons do site, não o volume do dispositivo.',
            testSound: 'Testar som', resetStats: 'Limpar estatísticas', roundsPlayed: 'Rodadas concluídas',
            questionsAnswered: 'Respostas dadas', correctAnswers: 'Respostas corretas', accuracy: 'Precisão',
            levelRecords: 'Recordes por nível', noStats: 'Nenhuma rodada concluída ainda.',
            identifyCorrect: 'Correto!', identifyWrong: 'Quase. A resposta correta é:',
            identifyFinished: 'Rodada concluída!', identifyScore: 'Corretas', confirmResetStats: 'Limpar todas as estatísticas?',
            toolNav: 'Ferramentas do quiz', close: 'Fechar'
        },
        nl: {
            studyMode: '📖 Leren', encyclopedia: '🌿 Plantenencyclopedie', identifyPlants: '🔎 Herken de plant',
            statistics: '📊 Statistieken', soundSettings: '🔊 Geluid', identifyPrompt: 'Welke plant staat op de afbeelding?',
            encyclopediaIntro: 'Korte informatie over planten uit de quiz.',
            plantSafety: 'Alleen bedoeld om te leren. Eet geen wilde planten zonder zekere identificatie en deskundig advies.',
            volumeLabel: 'Effectvolume', hoverSound: 'Geluid bij aanwijzen',
            volumeNote: 'Regelt alleen de geluiden van de website, niet het volume van je apparaat.',
            testSound: 'Geluid testen', resetStats: 'Statistieken wissen', roundsPlayed: 'Gespeelde rondes',
            questionsAnswered: 'Beantwoorde vragen', correctAnswers: 'Goede antwoorden', accuracy: 'Nauwkeurigheid',
            levelRecords: 'Records per niveau', noStats: 'Er zijn nog geen rondes gespeeld.',
            identifyCorrect: 'Goed!', identifyWrong: 'Niet helemaal. Het juiste antwoord is:',
            identifyFinished: 'Ronde afgerond!', identifyScore: 'Goed', confirmResetStats: 'Alle statistieken wissen?',
            toolNav: 'Quizhulpmiddelen', close: 'Sluiten'
        },
        cs: {
            studyMode: '📖 Studium', encyclopedia: '🌿 Encyklopedie', identifyPlants: '🔎 Poznejte rostlinu',
            statistics: '📊 Statistiky', soundSettings: '🔊 Zvuk', identifyPrompt: 'Jaká rostlina je na obrázku?',
            encyclopediaIntro: 'Stručné poznámky o rostlinách z kvízu.',
            plantSafety: 'Pouze pro vzdělávání. Nejezte plané rostliny bez jistého určení a rady odborníka.',
            volumeLabel: 'Hlasitost efektů', hoverSound: 'Zvuk při najetí',
            volumeNote: 'Upravuje pouze zvuky webu, nikoli hlasitost zařízení.',
            testSound: 'Vyzkoušet zvuk', resetStats: 'Vymazat statistiky', roundsPlayed: 'Odehraná kola',
            questionsAnswered: 'Zodpovězené otázky', correctAnswers: 'Správné odpovědi', accuracy: 'Úspěšnost',
            levelRecords: 'Rekordy úrovní', noStats: 'Zatím nebylo odehráno žádné kolo.',
            identifyCorrect: 'Správně!', identifyWrong: 'Ne tak docela. Správná odpověď:',
            identifyFinished: 'Kolo dokončeno!', identifyScore: 'Správně', confirmResetStats: 'Vymazat všechny statistiky?',
            toolNav: 'Nástroje kvízu', close: 'Zavřít'
        },
        ro: {
            studyMode: '📖 Învățare', encyclopedia: '🌿 Enciclopedie', identifyPlants: '🔎 Identifică planta',
            statistics: '📊 Statistici', soundSettings: '🔊 Sunet', identifyPrompt: 'Ce plantă este în imagine?',
            encyclopediaIntro: 'Note scurte despre plantele din quiz.',
            plantSafety: 'Doar în scop educativ. Nu consuma plante sălbatice fără identificare sigură și sfatul unui specialist.',
            volumeLabel: 'Volumul efectelor', hoverSound: 'Sunet la trecerea cursorului',
            volumeNote: 'Reglează doar sunetele site-ului, nu volumul dispozitivului.',
            testSound: 'Testează sunetul', resetStats: 'Șterge statisticile', roundsPlayed: 'Runde jucate',
            questionsAnswered: 'Răspunsuri date', correctAnswers: 'Răspunsuri corecte', accuracy: 'Precizie',
            levelRecords: 'Recorduri pe nivel', noStats: 'Nu a fost încheiată nicio rundă.',
            identifyCorrect: 'Corect!', identifyWrong: 'Nu chiar. Răspunsul corect este:',
            identifyFinished: 'Rundă încheiată!', identifyScore: 'Corecte', confirmResetStats: 'Ștergi toate statisticile?',
            toolNav: 'Instrumentele quizului', close: 'Închide'
        },
        tr: {
            studyMode: '📖 Öğrenme', encyclopedia: '🌿 Bitki ansiklopedisi', identifyPlants: '🔎 Bitkiyi tanı',
            statistics: '📊 İstatistikler', soundSettings: '🔊 Ses', identifyPrompt: 'Resimde hangi bitki var?',
            encyclopediaIntro: 'Yarışmadaki bitkiler hakkında kısa notlar.',
            plantSafety: 'Yalnızca eğitim amaçlıdır. Kesin olarak tanımadan ve uzmana danışmadan yabani bitkileri tüketmeyin.',
            volumeLabel: 'Efekt sesi düzeyi', hoverSound: 'Üzerine gelince ses',
            volumeNote: 'Yalnızca sitenin ses düzeyini ayarlar; cihazın sesini değiştirmez.',
            testSound: 'Sesi dene', resetStats: 'İstatistikleri sıfırla', roundsPlayed: 'Tamamlanan turlar',
            questionsAnswered: 'Yanıtlanan sorular', correctAnswers: 'Doğru yanıtlar', accuracy: 'Başarı oranı',
            levelRecords: 'Seviye rekorları', noStats: 'Henüz tamamlanmış tur yok.',
            identifyCorrect: 'Doğru!', identifyWrong: 'Tam değil. Doğru yanıt:',
            identifyFinished: 'Tur tamamlandı!', identifyScore: 'Doğru', confirmResetStats: 'Tüm istatistikler sıfırlansın mı?',
            toolNav: 'Yarışma araçları', close: 'Kapat'
        },
        hi: {
            studyMode: '📖 सीखें', encyclopedia: '🌿 पौधों का विश्वकोश', identifyPlants: '🔎 पौधे को पहचानें',
            statistics: '📊 आँकड़े', soundSettings: '🔊 ध्वनि', identifyPrompt: 'चित्र में कौन-सा पौधा है?',
            encyclopediaIntro: 'क्विज़ के पौधों के बारे में संक्षिप्त जानकारी।',
            plantSafety: 'केवल सीखने के लिए। सही पहचान और विशेषज्ञ की सलाह के बिना जंगली पौधे न खाएँ।',
            volumeLabel: 'ध्वनि प्रभाव का स्तर', hoverSound: 'होवर ध्वनि',
            volumeNote: 'यह केवल वेबसाइट की ध्वनि बदलता है, आपके उपकरण की आवाज़ नहीं।',
            testSound: 'ध्वनि जाँचें', resetStats: 'आँकड़े रीसेट करें', roundsPlayed: 'खेले गए दौर',
            questionsAnswered: 'उत्तर दिए गए प्रश्न', correctAnswers: 'सही उत्तर', accuracy: 'सटीकता',
            levelRecords: 'स्तर के रिकॉर्ड', noStats: 'अभी तक कोई दौर पूरा नहीं हुआ।',
            identifyCorrect: 'सही!', identifyWrong: 'पूरी तरह सही नहीं। सही उत्तर:',
            identifyFinished: 'दौर पूरा हुआ!', identifyScore: 'सही', confirmResetStats: 'सभी आँकड़े रीसेट करें?',
            toolNav: 'क्विज़ उपकरण', close: 'बंद करें'
        },
        vi: {
            studyMode: '📖 Học tập', encyclopedia: '🌿 Bách khoa cây thuốc', identifyPlants: '🔎 Nhận biết cây',
            statistics: '📊 Thống kê', soundSettings: '🔊 Âm thanh', identifyPrompt: 'Đây là cây gì?',
            encyclopediaIntro: 'Ghi chú ngắn về các loài cây trong câu đố.',
            plantSafety: 'Chỉ dùng để học tập. Không ăn cây dại nếu chưa xác định chắc chắn và hỏi ý kiến chuyên gia.',
            volumeLabel: 'Âm lượng hiệu ứng', hoverSound: 'Âm thanh khi di chuột',
            volumeNote: 'Chỉ điều chỉnh âm thanh của trang web, không thay đổi âm lượng thiết bị.',
            testSound: 'Kiểm tra âm thanh', resetStats: 'Đặt lại thống kê', roundsPlayed: 'Số lượt đã chơi',
            questionsAnswered: 'Số câu đã trả lời', correctAnswers: 'Số câu đúng', accuracy: 'Độ chính xác',
            levelRecords: 'Kỷ lục theo cấp độ', noStats: 'Chưa có lượt chơi nào hoàn thành.',
            identifyCorrect: 'Chính xác!', identifyWrong: 'Chưa đúng. Đáp án chính xác là:',
            identifyFinished: 'Đã hoàn thành lượt chơi!', identifyScore: 'Đúng', confirmResetStats: 'Đặt lại toàn bộ thống kê?',
            toolNav: 'Công cụ câu đố', close: 'Đóng'
        },
        sw: {
            studyMode: '📖 Jifunze', encyclopedia: '🌿 Kamusi ya mimea', identifyPlants: '🔎 Tambua mmea',
            statistics: '📊 Takwimu', soundSettings: '🔊 Sauti', identifyPrompt: 'Ni mmea gani unaoonekana?',
            encyclopediaIntro: 'Maelezo mafupi kuhusu mimea katika chemsha bongo.',
            plantSafety: 'Kwa ajili ya kujifunza pekee. Usile mimea ya porini bila kuitambua kwa uhakika na kupata ushauri wa mtaalamu.',
            volumeLabel: 'Kiwango cha sauti', hoverSound: 'Sauti unapopitisha kishale',
            volumeNote: 'Hurekebisha sauti za tovuti pekee, si sauti ya kifaa chako.',
            testSound: 'Jaribu sauti', resetStats: 'Futa takwimu', roundsPlayed: 'Mizunguko iliyochezwa',
            questionsAnswered: 'Maswali yaliyojibiwa', correctAnswers: 'Majibu sahihi', accuracy: 'Usahihi',
            levelRecords: 'Rekodi za viwango', noStats: 'Bado hakuna mzunguko uliokamilika.',
            identifyCorrect: 'Sahihi!', identifyWrong: 'Si hivyo kabisa. Jibu sahihi ni:',
            identifyFinished: 'Mzunguko umekamilika!', identifyScore: 'Sahihi', confirmResetStats: 'Ufute takwimu zote?',
            toolNav: 'Zana za chemsha bongo', close: 'Funga'
        },
        af: {
            studyMode: '📖 Leer', encyclopedia: '🌿 Plante-ensiklopedie', identifyPlants: '🔎 Identifiseer die plant',
            statistics: '📊 Statistiek', soundSettings: '🔊 Klank', identifyPrompt: 'Watter plant is op die prent?',
            encyclopediaIntro: 'Kort aantekeninge oor plante in die vasvra.',
            plantSafety: 'Slegs vir leerdoeleindes. Moenie wilde plante eet sonder seker identifikasie en deskundige advies nie.',
            volumeLabel: 'Effekvolume', hoverSound: 'Klank wanneer jy daaroor beweeg',
            volumeNote: 'Verstel net die webwerf se klanke, nie jou toestel se volume nie.',
            testSound: 'Toets klank', resetStats: 'Herstel statistiek', roundsPlayed: 'Rondtes gespeel',
            questionsAnswered: 'Vrae beantwoord', correctAnswers: 'Regte antwoorde', accuracy: 'Akkuraatheid',
            levelRecords: 'Rekords per vlak', noStats: 'Geen rondtes is nog voltooi nie.',
            identifyCorrect: 'Reg!', identifyWrong: 'Nie heeltemal nie. Die regte antwoord is:',
            identifyFinished: 'Rondte voltooi!', identifyScore: 'Reg', confirmResetStats: 'Herstel alle statistiek?',
            toolNav: 'Vasvra-nutsgoed', close: 'Sluit'
        },
        mi: {
            studyMode: '📖 Ako', encyclopedia: '🌿 Pukapuka tipu', identifyPlants: '🔎 Tautuhia te tipu',
            statistics: '📊 Tatauranga', soundSettings: '🔊 Oro', identifyPrompt: 'He aha tēnei tipu?',
            encyclopediaIntro: 'He kōrero poto mō ngā tipu kei roto i te kēmu pātai.',
            plantSafety: 'Hei ako anake. Kaua e kai i ngā tipu mohoao ki te kore e tino mōhiotia, ā, kia whiwhi tohutohu tohunga.',
            volumeLabel: 'Te kaha oro', hoverSound: 'Oro ina whakaparo',
            volumeNote: 'Ka whakarerekē i ngā oro o te paetukutuku anake, kaua i te kaha oro o tō pūrere.',
            testSound: 'Whakamātauria te oro', resetStats: 'Tautuhi anō i ngā tatauranga', roundsPlayed: 'Ngā kēmu kua oti',
            questionsAnswered: 'Ngā pātai kua whakautua', correctAnswers: 'Ngā whakautu tika', accuracy: 'Tika',
            levelRecords: 'Ngā rekoata taumata', noStats: 'Kāore anō kia oti tētahi kēmu.',
            identifyCorrect: 'Ka tika!', identifyWrong: 'Kāore i tino tika. Ko te whakautu tika:',
            identifyFinished: 'Kua oti te kēmu!', identifyScore: 'Tika', confirmResetStats: 'Tautuhi anō i ngā tatauranga katoa?',
            toolNav: 'Ngā taputapu kēmu pātai', close: 'Katia'
        }
    };

    Object.entries(additionalTranslations).forEach(([code, additions]) => {
        Object.assign(locales[code], additions);
    });
    Object.entries(featureTranslations).forEach(([code, additions]) => {
        Object.assign(locales[code], additions);
    });
    const finishTranslations = {
        uk: { finishQuiz: 'Завершити квіз', finishStudy: 'Завершити навчання', finishShort: 'Завершити' },
        en: { finishQuiz: 'Finish quiz', finishStudy: 'Finish learning', finishShort: 'Finish' },
        de: { finishQuiz: 'Quiz beenden', finishStudy: 'Lernen beenden', finishShort: 'Beenden' },
        it: { finishQuiz: 'Termina il quiz', finishStudy: 'Termina lo studio', finishShort: 'Termina' },
        es: { finishQuiz: 'Terminar el cuestionario', finishStudy: 'Terminar el aprendizaje', finishShort: 'Terminar' },
        fr: { finishQuiz: 'Terminer le quiz', finishStudy: 'Terminer l’apprentissage', finishShort: 'Terminer' },
        pl: { finishQuiz: 'Zakończ quiz', finishStudy: 'Zakończ naukę', finishShort: 'Zakończ' },
        id: { finishQuiz: 'Selesaikan kuis', finishStudy: 'Selesaikan pembelajaran', finishShort: 'Selesai' },
        ja: { finishQuiz: 'クイズを終了', finishStudy: '学習を終了', finishShort: '終了' },
        ko: { finishQuiz: '퀴즈 종료', finishStudy: '학습 종료', finishShort: '종료' },
        zh: { finishQuiz: '结束答题', finishStudy: '结束学习', finishShort: '结束' },
        pt: { finishQuiz: 'Encerrar o quiz', finishStudy: 'Encerrar o aprendizado', finishShort: 'Encerrar' },
        nl: { finishQuiz: 'Quiz beëindigen', finishStudy: 'Leren beëindigen', finishShort: 'Beëindigen' },
        cs: { finishQuiz: 'Ukončit kvíz', finishStudy: 'Ukončit učení', finishShort: 'Ukončit' },
        ro: { finishQuiz: 'Încheie quizul', finishStudy: 'Încheie învățarea', finishShort: 'Încheie' },
        tr: { finishQuiz: 'Yarışmayı bitir', finishStudy: 'Öğrenmeyi bitir', finishShort: 'Bitir' },
        hi: { finishQuiz: 'क्विज़ समाप्त करें', finishStudy: 'सीखना समाप्त करें', finishShort: 'समाप्त करें' },
        vi: { finishQuiz: 'Kết thúc câu đố', finishStudy: 'Kết thúc học tập', finishShort: 'Kết thúc' },
        sw: { finishQuiz: 'Maliza chemsha bongo', finishStudy: 'Maliza kujifunza', finishShort: 'Maliza' },
        af: { finishQuiz: 'Voltooi die vasvra', finishStudy: 'Voltooi die leerwerk', finishShort: 'Voltooi' },
        mi: { finishQuiz: 'Whakaotia te kēmu pātai', finishStudy: 'Whakaotia te ako', finishShort: 'Whakaotia' }
    };
    Object.entries(finishTranslations).forEach(([code, additions]) => {
        Object.assign(locales[code], additions);
    });

    const levelLabels = { easy: 'easy', normal: 'normal', hard: 'hard', hardcore: 'hardcore' };
    const languageFlagCodes = {
        uk: 'ua', en: 'gb', de: 'de', it: 'it', es: 'es', fr: 'fr', pl: 'pl',
        id: 'id', ja: 'jp', ko: 'kr', zh: 'cn', pt: 'br', nl: 'nl', cs: 'cz', ro: 'ro', tr: 'tr',
        hi: 'in', vi: 'vn', sw: 'ke', af: 'za', mi: 'nz'
    };
    const languageRegions = {
        Europe: ['uk', 'en', 'de', 'it', 'es', 'fr', 'pl', 'nl', 'cs', 'ro'],
        Asia: ['id', 'ja', 'ko', 'zh', 'tr', 'hi', 'vi'],
        Africa: ['sw', 'af'],
        Americas: ['pt'],
        Oceania: ['mi']
    };
    const regionNames = {
        uk: ['Європа', 'Азія', 'Африка', 'Америка', 'Океанія'],
        en: ['Europe', 'Asia', 'Africa', 'Americas', 'Oceania'],
        de: ['Europa', 'Asien', 'Afrika', 'Amerika', 'Ozeanien'],
        it: ['Europa', 'Asia', 'Africa', 'Americhe', 'Oceania'],
        es: ['Europa', 'Asia', 'África', 'América', 'Oceanía'],
        fr: ['Europe', 'Asie', 'Afrique', 'Amériques', 'Océanie'],
        pl: ['Europa', 'Azja', 'Afryka', 'Ameryki', 'Oceania'],
        id: ['Eropa', 'Asia', 'Afrika', 'Amerika', 'Oseania'],
        ja: ['ヨーロッパ', 'アジア', 'アフリカ', '南北アメリカ', 'オセアニア'],
        ko: ['유럽', '아시아', '아프리카', '아메리카', '오세아니아'],
        zh: ['欧洲', '亚洲', '非洲', '美洲', '大洋洲'],
        pt: ['Europa', 'Ásia', 'África', 'Américas', 'Oceania'],
        nl: ['Europa', 'Azië', 'Afrika', 'Amerika', 'Oceanië'],
        cs: ['Evropa', 'Asie', 'Afrika', 'Amerika', 'Oceánie'],
        ro: ['Europa', 'Asia', 'Africa', 'Americi', 'Oceania'],
        tr: ['Avrupa', 'Asya', 'Afrika', 'Amerika', 'Okyanusya'],
        hi: ['यूरोप', 'एशिया', 'अफ़्रीका', 'अमेरिका', 'ओशिनिया'],
        vi: ['Châu Âu', 'Châu Á', 'Châu Phi', 'Châu Mỹ', 'Châu Đại Dương'],
        sw: ['Ulaya', 'Asia', 'Afrika', 'Amerika', 'Oceania'],
        af: ['Europa', 'Asië', 'Afrika', 'Amerikas', 'Oseanië'],
        mi: ['Ūropi', 'Āhia', 'Āwherika', 'Amerika', 'Ōhinemutu']
    };
    const menuToggle = document.querySelector('#menu-toggle');
    const themeToggle = document.querySelector('#theme-toggle');
    const themeIcon = document.querySelector('#theme-icon');
    const soundToggle = document.querySelector('#sound-toggle');
    const soundIcon = document.querySelector('#sound-icon');
    const languageMenu = document.querySelector('#language-menu');
    const languageOptions = document.querySelector('#language-options');
    const startScreen = document.querySelector('#start-screen');
    const quizScreen = document.querySelector('#quiz-screen');
    const resultScreen = document.querySelector('#result-screen');
    const identifyScreen = document.querySelector('#identify-screen');
    const reaction = document.querySelector('#reaction');
    const reactionImage = document.querySelector('#reaction-image');
    const reactionLabel = document.querySelector('#reaction-label');
    const questionText = document.querySelector('#question-text');
    const answersElement = document.querySelector('#answers');
    const factBox = document.querySelector('#fact-box');
    const factText = document.querySelector('#fact-text');
    const timerElement = document.querySelector('#timer');
    const timerFill = document.querySelector('#timer-fill');
    const scoreElement = document.querySelector('#score');
    const questionCount = document.querySelector('#question-count');
    const progressFill = document.querySelector('#progress-fill');
    const levelChip = document.querySelector('#level-chip');
    const hint = document.querySelector('#hint');

    const profileNameInput = document.querySelector('#player-name');
    const addressForm = document.querySelector('#address-form');
    const encyclopediaDialog = document.querySelector('#encyclopedia-dialog');
    const statsDialog = document.querySelector('#stats-dialog');
    const soundDialog = document.querySelector('#sound-dialog');
    const volumeRange = document.querySelector('#volume-range');
    const volumeValue = document.querySelector('#volume-value');
    const hoverSoundToggle = document.querySelector('#hover-sound-toggle');
    let language = localStorage.getItem('herbalQuizLanguage') || 'uk';
    let selectedLevel = 'easy';
    let questionIndex = 0;
    let score = 0;
    let currentStreak = 0;
    let bestStreakThisRound = 0;
    let roundQuestions = [];
    let answerHistory = [];
    let reviewMode = false;
    let currentExplanation = '';
    let currentExplanationSource = '';
    let remainingTime = 0;
    let timerId;
    let transitionId;
    let transitionCallback = null;
    let transitionDueAt = 0;
    let transitionRemainingMs = 0;
    let locked = false;
    let lastResult = null;
    let currentOptions = [];
    let renderVersion = 0;
    let questionTimerStarted = false;
    let questionReady = false;
    let studyMode = false;
    let identifyQuestions = [];
    let identifyIndex = 0;
    let identifyScore = 0;
    let identifyAnswerHistory = [];
    let identifyReviewMode = false;
    let identifyCurrentStreak = 0;
    let identifyBestStreak = 0;
    let identifyLocked = false;
    let identifyVersion = 0;
    const translationCache = new Map();
    const phraseTranslationCache = new Map();
    const languageWarmups = new Map();
    const playerProfile = JSON.parse(localStorage.getItem('herbalQuizProfile') || '{"name":"","address":"neutral"}');
    let bestScores = JSON.parse(localStorage.getItem('herbalQuizBestScores') || '{}');
    let unlockedBadges = JSON.parse(localStorage.getItem('herbalQuizBadges') || '[]');
    let soundEnabled = localStorage.getItem('herbalQuizSound') !== 'off';
    let soundVolume = Math.min(1, Math.max(0, Number(localStorage.getItem('herbalQuizVolume') ?? 80) / 100));
    let hoverSoundEnabled = localStorage.getItem('herbalQuizHover') !== 'off';
    let quizStats = JSON.parse(localStorage.getItem('herbalQuizStats') || '{"rounds":0,"questions":0,"correct":0}');
    let audioContext;
    let newRecordThisRound = false;
    profileNameInput.value = typeof playerProfile.name === 'string' ? playerProfile.name : '';
    addressForm.value = ['neutral', 'masculine', 'feminine'].includes(playerProfile.address) ? playerProfile.address : 'neutral';
    volumeRange.value = String(Math.round(soundVolume * 100));
    hoverSoundToggle.checked = hoverSoundEnabled;
    const themeLabels = {
        uk: { dark: 'Увімкнути темну тему', light: 'Увімкнути світлу тему' },
        en: { dark: 'Switch to dark theme', light: 'Switch to light theme' },
        de: { dark: 'Dunkles Design aktivieren', light: 'Helles Design aktivieren' },
        it: { dark: 'Attiva il tema scuro', light: 'Attiva il tema chiaro' },
        es: { dark: 'Activar tema oscuro', light: 'Activar tema claro' },
        fr: { dark: 'Activer le thème sombre', light: 'Activer le thème clair' },
        pl: { dark: 'Włącz ciemny motyw', light: 'Włącz jasny motyw' },
        id: { dark: 'Aktifkan tema gelap', light: 'Aktifkan tema terang' },
        ja: { dark: 'ダークテーマに切り替え', light: 'ライトテーマに切り替え' },
        ko: { dark: '어두운 테마로 전환', light: '밝은 테마로 전환' },
        zh: { dark: '切换到深色主题', light: '切换到浅色主题' },
        pt: { dark: 'Ativar tema escuro', light: 'Ativar tema claro' },
        nl: { dark: 'Donker thema inschakelen', light: 'Licht thema inschakelen' },
        cs: { dark: 'Zapnout tmavý motiv', light: 'Zapnout světlý motiv' },
        ro: { dark: 'Activează tema întunecată', light: 'Activează tema luminoasă' },
        tr: { dark: 'Koyu temayı aç', light: 'Açık temayı aç' },
        hi: { dark: 'डार्क थीम चालू करें', light: 'लाइट थीम चालू करें' },
        vi: { dark: 'Bật giao diện tối', light: 'Bật giao diện sáng' },
        sw: { dark: 'Washa mandhari meusi', light: 'Washa mandhari meupe' },
        af: { dark: 'Skakel donker tema aan', light: 'Skakel ligte tema aan' },
        mi: { dark: 'Whakakā te āhua pōuri', light: 'Whakakā te āhua mārama' }
    };

    function translate(key) {
        return locales[language][key] || locales.uk[key] || key;
    }

    function renderLanguages() {
        languageOptions.replaceChildren();
        const headings = regionNames[language] || regionNames.en;
        Object.entries(languageRegions).forEach(([region, codes], regionIndex) => {
            const availableCodes = codes.filter((code) => locales[code]);
            if (!availableCodes.length) return;
            const group = document.createElement('section');
            group.className = 'language-region';
            const heading = document.createElement('h2');
            heading.className = 'language-region-title';
            heading.textContent = headings[regionIndex];
            const options = document.createElement('div');
            options.className = 'language-region-options';
            availableCodes.forEach((code) => {
                const locale = locales[code];
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'language-option';
                button.dataset.language = code;
                button.setAttribute('aria-pressed', String(code === language));
                const flag = document.createElement('img');
                flag.className = 'language-flag';
                flag.src = `https://flagcdn.com/w40/${languageFlagCodes[code]}.png`;
                flag.alt = '';
                flag.width = 20;
                flag.height = 15;
                flag.loading = 'lazy';
                button.append(flag, document.createTextNode(locale.name));
                button.addEventListener('click', () => {
                    language = code;
                    localStorage.setItem('herbalQuizLanguage', language);
                    document.documentElement.lang = language;
                    applyTranslations();
                    renderLanguages();
                    warmTranslations(language);
                    languageMenu.hidden = true;
                    menuToggle.setAttribute('aria-expanded', 'false');
                    if (!quizScreen.hidden) {
                        if (!reaction.hidden) {
                            reactionLabel.textContent = locked && remainingTime === 0
                                ? translate('timeout')
                                : translate(reaction.dataset.status);
                            translateTexts([currentExplanationSource], language, `fact:${language}:${selectedLevel}:${questionIndex}`)
                                .then(([translatedFact]) => {
                                    if (!reaction.hidden) factText.textContent = translatedFact;
                                })
                                .catch((error) => console.error('Unable to translate the plant fact.', error));
                        } else if (!locked) {
                            if (questionTimerStarted) {
                                clearInterval(timerId);
                                timerId = undefined;
                                questionTimerStarted = false;
                                questionReady = false;
                            }
                            renderQuestion();
                        }
                    } else if (!resultScreen.hidden && lastResult) {
                        renderResults();
                    }
                    if (!identifyScreen.hidden) {
                        if (identifyLocked) renderIdentifyResults();
                        else renderIdentifyQuestion();
                    }
                    if (encyclopediaDialog.open) renderEncyclopedia();
                    if (statsDialog.open) renderStatistics();
                });
                options.append(button);
            });
            group.append(heading, options);
            languageOptions.append(group);
        });
    }

    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach((element) => {
            element.textContent = translate(element.dataset.i18n);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
            element.placeholder = translate(element.dataset.i18nPlaceholder);
        });
        document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
            element.setAttribute('aria-label', translate(element.dataset.i18nAriaLabel));
        });
        document.querySelectorAll('.difficulty-option').forEach((button) => {
            button.querySelector('.level-name').textContent = translate(levelLabels[button.dataset.difficulty]);
        });
        document.querySelectorAll('.level-time').forEach((element) => {
            element.textContent = `${element.dataset.time} ${translate('duration')}`;
        });
        document.querySelector('.difficulty-options').setAttribute('aria-label', translate('chooseLevel'));
        document.querySelector('#language-menu').setAttribute('aria-label', translate('chooseLanguage'));
        document.querySelector('.feature-nav').setAttribute('aria-label', translate('toolNav'));
        document.documentElement.lang = language;
        updateThemeControl();
        updateSoundControl();
        updateVolumeControl();
    }

    function updateThemeControl() {
        const isDark = document.body.dataset.theme === 'dark';
        const label = themeLabels[language][isDark ? 'light' : 'dark'];
        themeIcon.textContent = isDark ? '☀️' : '🌙';
        themeToggle.setAttribute('aria-label', label);
        themeToggle.title = label;
    }

    function setTheme(theme) {
        document.body.dataset.theme = theme;
        localStorage.setItem('herbalQuizTheme', theme);
        document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#1f2b23' : '#264b3a';
        updateThemeControl();
    }

    function saveProfile() {
        const name = profileNameInput.value.trim().slice(0, 24);
        const address = addressForm.value;
        if (!['neutral', 'masculine', 'feminine'].includes(address)) {
            throw new Error('Choose a valid form of address.');
        }
        playerProfile.name = name;
        playerProfile.address = address;
        localStorage.setItem('herbalQuizProfile', JSON.stringify(playerProfile));
    }

    function getExplanation(question) {
        return herbFacts[question[1]] || 'Кожна рослина має власні ознаки. Визначай її за кількома характеристиками, а не лише за однією.';
    }

    function translateTexts(texts, targetLanguage, cacheKey) {
        if (targetLanguage === 'uk') return Promise.resolve(texts);
        if (translationCache.has(cacheKey)) return Promise.resolve(translationCache.get(cacheKey));

        const missingTexts = [...new Set(texts.filter((text) => !phraseTranslationCache.has(`${targetLanguage}:${text}`)))];
        if (missingTexts.length === 0) {
            const translated = texts.map((text) => phraseTranslationCache.get(`${targetLanguage}:${text}`));
            translationCache.set(cacheKey, translated);
            return Promise.resolve(translated);
        }

        const query = missingTexts.join('\n');
        const languageCode = targetLanguage === 'zh' ? 'zh-CN' : targetLanguage;
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=uk&tl=${languageCode}&dt=t&q=${encodeURIComponent(query)}`;
        const controller = new AbortController();
        const timeoutId = window.setTimeout(() => controller.abort(), 9000);

        return fetch(url, { signal: controller.signal })
            .then((response) => {
                if (!response.ok) throw new Error(`Translation service returned ${response.status}`);
                return response.json();
            })
            .then((data) => {
                const translatedLines = data[0].map((segment) => segment[0]).join('').split('\n');
                if (translatedLines.length !== missingTexts.length) {
                    throw new Error('Translation service returned an unexpected response');
                }
                missingTexts.forEach((text, index) => {
                    phraseTranslationCache.set(`${targetLanguage}:${text}`, translatedLines[index]);
                });
                const translated = texts.map((text) => phraseTranslationCache.get(`${targetLanguage}:${text}`));
                translationCache.set(cacheKey, translated);
                return translated;
            })
            .finally(() => window.clearTimeout(timeoutId));
    }

    function warmTranslations(targetLanguage) {
        if (targetLanguage === 'uk' || languageWarmups.has(targetLanguage)) return languageWarmups.get(targetLanguage) || Promise.resolve();
        const sources = new Set(plantGuide.flatMap((plant) => [plant.name, plant.description]));
        Object.values(levels).forEach((level) => {
            level.questions.forEach((question) => {
                question.flat().forEach((text) => sources.add(text));
                sources.add(getExplanation(question));
            });
        });
        const chunks = [];
        const allSources = [...sources];
        for (let index = 0; index < allSources.length; index += 20) {
            chunks.push(allSources.slice(index, index + 20));
        }
        const warmup = Promise.allSettled(chunks.map((chunk, index) =>
            translateTexts(chunk, targetLanguage, `warmup:${targetLanguage}:${index}`)
        )).then((results) => {
            results.forEach((result) => {
                if (result.status === 'rejected') console.error(`Unable to preload translations for ${targetLanguage}.`, result.reason);
            });
        });
        languageWarmups.set(targetLanguage, warmup);
        return warmup;
    }

    function updateSoundControl() {
        const audible = soundEnabled && soundVolume > 0;
        soundIcon.textContent = audible ? '🔊' : '🔇';
        const label = translate(audible ? 'unmuted' : 'muted');
        soundToggle.setAttribute('aria-label', label);
        soundToggle.title = label;
    }

    function updateVolumeControl() {
        volumeRange.value = String(Math.round(soundVolume * 100));
        volumeValue.value = `${Math.round(soundVolume * 100)}%`;
        volumeValue.textContent = volumeValue.value;
        updateSoundControl();
    }

    function persistQuizStats() {
        localStorage.setItem('herbalQuizStats', JSON.stringify(quizStats));
    }

    function playSound(status) {
        if (!soundEnabled || soundVolume === 0 || (status === 'hover' && !hoverSoundEnabled)) return;
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;

        if (!audioContext) audioContext = new AudioContextClass();
        if (audioContext.state === 'suspended') {
            audioContext.resume().catch((error) => console.error('Unable to resume audio playback.', error));
        }

        const notes = status === 'streak' ? [660, 880, 1100]
            : status === 'correct' ? [660, 880]
                : status === 'almost' ? [520, 620]
                    : status === 'hover' ? [440]
                        : status === 'click' ? [880] : [260];
        const duration = status === 'hover' || status === 'click' ? 0.1 : 0.2;
        const volume = soundVolume * (status === 'hover' ? 0.3 : status === 'click' ? 0.48 : 0.85);
        notes.forEach((frequency, index) => {
            const oscillator = audioContext.createOscillator();
            const gain = audioContext.createGain();
            const startAt = audioContext.currentTime + index * 0.12;
            oscillator.type = 'sine';
            oscillator.frequency.value = frequency;
            gain.gain.setValueAtTime(0.0001, startAt);
            gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration - 0.02);
            oscillator.connect(gain);
            gain.connect(audioContext.destination);
            oscillator.start(startAt);
            oscillator.stop(startAt + duration);
        });
    }

    function closeMenu() {
        languageMenu.hidden = true;
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    function selectLevel(key) {
        selectedLevel = key;
        document.querySelectorAll('.difficulty-option').forEach((button) => {
            const selected = button.dataset.difficulty === key;
            button.classList.toggle('is-selected', selected);
            button.setAttribute('aria-pressed', String(selected));
        });
    }

    function isFeatureDialogOpen() {
        return [encyclopediaDialog, statsDialog, soundDialog].some((dialog) => dialog.open);
    }

    function isTestActive() {
        return !quizScreen.hidden || (!identifyScreen.hidden && !identifyLocked);
    }

    function updateTestNavigation() {
        const blocked = isTestActive();
        document.querySelector('#study-mode-btn').disabled = blocked;
        document.querySelector('#identify-btn').disabled = blocked;
    }

    function runScheduledTransition() {
        if (!transitionCallback || isFeatureDialogOpen()) return;
        transitionDueAt = Date.now() + transitionRemainingMs;
        transitionId = window.setTimeout(() => {
            const callback = transitionCallback;
            transitionCallback = null;
            transitionId = undefined;
            transitionRemainingMs = 0;
            callback();
        }, transitionRemainingMs);
    }

    function scheduleTransition(callback, delay) {
        clearTimeout(transitionId);
        transitionCallback = callback;
        transitionRemainingMs = delay;
        runScheduledTransition();
    }

    function pauseTransition() {
        if (transitionId === undefined) return;
        clearTimeout(transitionId);
        transitionId = undefined;
        transitionRemainingMs = Math.max(0, transitionDueAt - Date.now());
    }

    function clearScheduledTransition() {
        clearTimeout(transitionId);
        transitionId = undefined;
        transitionCallback = null;
        transitionRemainingMs = 0;
    }

    function resumeTestClock() {
        if (isFeatureDialogOpen()) return;
        if (!quizScreen.hidden && !locked) startQuestionTimer();
        runScheduledTransition();
    }

    function goHome() {
        clearInterval(timerId);
        timerId = undefined;
        clearScheduledTransition();
        renderVersion += 1;
        identifyVersion += 1;
        locked = true;
        identifyLocked = true;
        questionTimerStarted = false;
        questionReady = false;
        [encyclopediaDialog, statsDialog, soundDialog].forEach((dialog) => {
            if (dialog.open) dialog.close();
        });
        quizScreen.hidden = true;
        resultScreen.hidden = true;
        identifyScreen.hidden = true;
        reaction.hidden = true;
        quizScreen.classList.remove('is-study-mode');
        document.querySelector('#study-chip').hidden = true;
        startScreen.hidden = false;
        updateTestNavigation();
    }

    function startGame(questionSet = levels[selectedLevel].questions, isReview = false, isStudy = false) {
        clearScheduledTransition();
        clearInterval(timerId);
        timerId = undefined;
        saveProfile();
        questionIndex = 0;
        score = 0;
        currentStreak = 0;
        bestStreakThisRound = 0;
        answerHistory = [];
        roundQuestions = questionSet;
        reviewMode = isReview;
        studyMode = isStudy;
        newRecordThisRound = false;
        scoreElement.textContent = '0';
        document.querySelector('#streak').textContent = '0';
        document.querySelector('#earned-badges').replaceChildren();
        startScreen.hidden = true;
        resultScreen.hidden = true;
        identifyScreen.hidden = true;
        quizScreen.hidden = false;
        quizScreen.classList.toggle('is-study-mode', studyMode);
        document.querySelector('#study-chip').hidden = !studyMode;
        const finishKey = studyMode ? 'finishStudy' : 'finishQuiz';
        const finishButton = document.querySelector('#quiz-finish-btn');
        finishButton.querySelector('span').dataset.i18n = finishKey;
        finishButton.dataset.i18nAriaLabel = finishKey;
        finishButton.setAttribute('aria-label', translate(finishKey));
        finishButton.querySelector('span').textContent = translate(finishKey);
        reaction.hidden = true;
        levelChip.textContent = translate(levelLabels[selectedLevel]);
        updateTestNavigation();
        showQuestion();
    }

    function startMistakeReview() {
        const missedQuestions = answerHistory
            .filter((answer) => answer.status !== 'correct')
            .map((answer) => answer.item);
        if (missedQuestions.length > 0) {
            startGame(missedQuestions, true);
        }
    }

    function showQuestion() {
        locked = false;
        reaction.hidden = true;
        const level = levels[selectedLevel];
        const item = roundQuestions[questionIndex];
        progressFill.style.width = `${(questionIndex / roundQuestions.length) * 100}%`;

        const isAdvanced = selectedLevel === 'hard' || selectedLevel === 'hardcore';
        const nearAnswers = isAdvanced ? item[2].slice(0, 1) : item[2].slice(0, 2);
        const wrongAnswers = isAdvanced
            ? item[2].slice(1).concat(item[3]).slice(0, 2)
            : item[3].slice(0, 1);
        currentOptions = [
            { text: item[1], status: 'correct' },
            ...nearAnswers.map((text) => ({ text, status: 'almost' })),
            ...wrongAnswers.map((text) => ({ text, status: 'wrong' }))
        ].sort(() => Math.random() - 0.5);

        remainingTime = studyMode ? 0 : level.time;
        timerElement.textContent = studyMode ? '∞' : String(remainingTime);
        timerFill.style.width = '100%';
        timerFill.classList.remove('is-low');
        clearInterval(timerId);
        timerId = undefined;
        questionTimerStarted = false;
        questionReady = false;
        renderQuestion();
    }

    function startQuestionTimer() {
        if (studyMode || locked || !questionReady || quizScreen.hidden || isFeatureDialogOpen()) return;
        questionTimerStarted = true;
        if (timerId !== undefined) return;
        const level = levels[selectedLevel];
        timerId = window.setInterval(() => {
            remainingTime -= 1;
            timerElement.textContent = String(remainingTime);
            timerFill.style.width = `${(remainingTime / level.time) * 100}%`;
            timerFill.classList.toggle('is-low', remainingTime <= Math.min(5, level.time / 3));
            if (remainingTime <= 0) {
                clearInterval(timerId);
                timerId = undefined;
                submitAnswer('wrong', true);
            }
        }, 1000);
    }

    async function getTranslatedQuestion(item, options, targetLanguage) {
        const explanation = getExplanation(item);
        const source = [item[0], ...options.map((option) => option.text), explanation];
        const cacheKey = `${targetLanguage}:${selectedLevel}:${questionIndex}:${source.join('|')}`;
        return translateTexts(source, targetLanguage, cacheKey);
    }

    async function renderQuestion() {
        const version = ++renderVersion;
        const item = roundQuestions[questionIndex];
        const buttons = [];
        questionReady = false;
        currentExplanationSource = getExplanation(item);

        questionCount.textContent = `${translate('question')} ${String(questionIndex + 1).padStart(2, '0')} / ${roundQuestions.length}`;
        levelChip.textContent = translate(levelLabels[selectedLevel]);
        questionText.textContent = item[0];
        hint.textContent = language === 'uk' ? '' : translate('loading');
        factBox.hidden = true;
        answersElement.replaceChildren();

        currentOptions.forEach((option, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'answer-btn';
            button.textContent = `${String.fromCharCode(65 + index)}. ${option.text}`;
            button.disabled = language !== 'uk';
            button.addEventListener('click', () => submitAnswer(option.status, false, option.text));
            answersElement.append(button);
            buttons.push(button);
        });

        if (language === 'uk') {
            currentExplanation = currentExplanationSource;
            questionReady = true;
            startQuestionTimer();
            return;
        }

        try {
            const translated = await getTranslatedQuestion(item, currentOptions, language);
            if (version !== renderVersion || locked || quizScreen.hidden) return;
            questionText.textContent = translated[0];
            buttons.forEach((button, index) => {
                button.textContent = `${String.fromCharCode(65 + index)}. ${translated[index + 1]}`;
                button.disabled = false;
            });
            currentExplanation = translated[translated.length - 1];
            hint.textContent = '';
            questionReady = true;
            startQuestionTimer();
        } catch (error) {
            if (version !== renderVersion || locked || quizScreen.hidden) return;
            hint.textContent = translate('translationError');
            buttons.forEach((button) => { button.disabled = false; });
            console.error('Unable to translate the current quiz question.', error);
            currentExplanation = getExplanation(item);
            questionReady = true;
            startQuestionTimer();
        }
    }

    function submitAnswer(status, timedOut = false, selectedAnswer = null) {
        if (locked) return;
        locked = true;
        clearInterval(timerId);
        timerId = undefined;
        questionTimerStarted = false;
        questionReady = false;
        answersElement.querySelectorAll('button').forEach((button) => { button.disabled = true; });

        const item = roundQuestions[questionIndex];
        const outcome = timedOut ? 'wrong' : status;
        if (outcome === 'correct') {
            score += 2;
            currentStreak += 1;
            bestStreakThisRound = Math.max(bestStreakThisRound, currentStreak);
        } else {
            if (outcome === 'almost') score += 1;
            currentStreak = 0;
        }
        answerHistory.push({ item, status: outcome, selectedAnswer, explanation: getExplanation(item) });
        scoreElement.textContent = String(score);
        document.querySelector('#streak').textContent = String(currentStreak);
        if (outcome === 'correct' && [3, 5, 10].includes(currentStreak)) {
            playSound('streak');
        } else {
            playSound(outcome);
        }

        reaction.dataset.status = outcome;
        reactionImage.src = imageAssets[outcome];
        reactionImage.alt = '';
        reactionLabel.textContent = timedOut ? translate('timeout') : translate(outcome);
        factText.textContent = currentExplanation;
        factBox.hidden = false;
        reaction.hidden = false;
        hint.textContent = timedOut ? translate('timeout') : '';
        scheduleTransition(nextQuestion, 2600);
    }

    function nextQuestion() {
        questionIndex += 1;
        if (questionIndex >= roundQuestions.length) {
            showResults();
        } else {
            showQuestion();
        }
    }

    function showResults() {
        clearInterval(timerId);
        timerId = undefined;
        questionTimerStarted = false;
        reaction.hidden = true;
        quizScreen.hidden = true;
        resultScreen.hidden = false;
        updateTestNavigation();
        progressFill.style.width = '100%';
        const maxScore = roundQuestions.length * 2;
        const percent = maxScore === 0 ? 0 : Math.round((score / maxScore) * 100);
        const missed = answerHistory.filter((answer) => answer.status !== 'correct');
        newRecordThisRound = false;

        if (!reviewMode && !studyMode) {
            const previousBest = Number(bestScores[selectedLevel]) || 0;
            if (score > previousBest) {
                bestScores[selectedLevel] = score;
                localStorage.setItem('herbalQuizBestScores', JSON.stringify(bestScores));
                newRecordThisRound = true;
            }
        }

        lastResult = {
            score,
            maxScore,
            percent,
            level: selectedLevel,
            missed,
            reviewMode,
            bestStreak: bestStreakThisRound
        };
        if (!reviewMode && !studyMode) updateBadges(lastResult);
        if (!reviewMode) {
            quizStats.rounds += 1;
            quizStats.questions += answerHistory.length;
            quizStats.correct += answerHistory.filter((answer) => answer.status === 'correct').length;
            persistQuizStats();
        }
        renderResults();
    }

    function updateBadges(result) {
        if (result.reviewMode) return;
        const earned = [{ id: 'badgeFirst', icon: '🌱', condition: true }];
        earned.push({ id: 'badgeExpert', icon: '🌿', condition: result.percent >= 70 });
        earned.push({ id: 'badgeMaster', icon: '🌟', condition: result.percent >= 90 });
        earned.push({ id: 'badgeStreak3', icon: '🔥', condition: result.bestStreak >= 3 });
        earned.push({ id: 'badgeStreak5', icon: '🔥', condition: result.bestStreak >= 5 });
        earned.push({ id: 'badgeStreak10', icon: '💎', condition: result.bestStreak >= 10 });

        earned.forEach((badge) => {
            if (badge.condition && !unlockedBadges.includes(badge.id)) {
                unlockedBadges.push(badge.id);
            }
        });
        localStorage.setItem('herbalQuizBadges', JSON.stringify(unlockedBadges));
    }

    function renderBadges(containerSelector = '#earned-badges') {
        const earned = [
            { id: 'badgeFirst', icon: '🌱' },
            { id: 'badgeExpert', icon: '🌿' },
            { id: 'badgeMaster', icon: '🌟' },
            { id: 'badgeStreak3', icon: '🔥' },
            { id: 'badgeStreak5', icon: '🔥' },
            { id: 'badgeStreak10', icon: '💎' }
        ];
        const badgeContainer = document.querySelector(containerSelector);
        badgeContainer.replaceChildren();
        const unlocked = earned.filter((badge) => unlockedBadges.includes(badge.id));
        if (unlocked.length === 0) return;
        const title = document.createElement('h3');
        title.textContent = translate('badgesTitle');
        badgeContainer.append(title);
        const list = document.createElement('div');
        list.className = 'badge-list';
        unlocked.forEach((badge) => {
            const item = document.createElement('span');
            item.className = 'achievement-badge';
            item.textContent = `${badge.icon} ${translate(badge.id)}`;
            list.append(item);
        });
        badgeContainer.append(list);
    }

    function renderResults() {
        if (!lastResult) return;
        const { score: resultScore, maxScore, percent, level, missed, reviewMode: isReview } = lastResult;
        const message = percent >= 90 ? 'perfect' : percent >= 60 ? 'good' : 'keepGoing';
        const profileName = playerProfile.name ? `${playerProfile.name}, ` : '';
        const messageKey = `${message}${playerProfile.address === 'feminine' ? 'F' : playerProfile.address === 'masculine' ? 'M' : 'N'}`;
        document.querySelector('#result-summary').textContent = `${profileName}${translate(levelLabels[level])} · ${translate('result')}: ${resultScore} / ${maxScore}`;
        document.querySelector('#final-score').textContent = `${resultScore} / ${maxScore}`;
        document.querySelector('#final-percent').textContent = `${percent}%`;
        document.querySelector('#streak-summary').textContent = `${translate('streak')}: ${lastResult.bestStreak}`;
        document.querySelector('#result-message').textContent = translate(messageKey);
        document.querySelector('#final-percent').setAttribute('aria-label', `${percent}%`);
        renderBadges();
        const record = Number(bestScores[level]) || 0;
        const recordMessage = document.querySelector('#record-message');
        if (isReview) {
            recordMessage.textContent = translate('mistakeTitle');
        } else if (newRecordThisRound) {
            recordMessage.textContent = `${translate('newRecord')} ${translate('bestScore')}: ${resultScore}`;
        } else if (record > 0) {
            recordMessage.textContent = `${translate('bestScore')}: ${record}`;
        } else {
            recordMessage.textContent = '';
        }

        const review = document.querySelector('#mistake-review');
        const reviewButton = document.querySelector('#retry-mistakes-btn');
        review.hidden = missed.length === 0;
        reviewButton.hidden = missed.length === 0;
        renderMistakeList(missed);
    }

    async function renderMistakeList(missed) {
        const list = document.querySelector('#mistake-list');
        list.replaceChildren();
        const version = ++renderVersion;
        const labels = `${translate('yourAnswer')}: `;
        const correctLabel = `${translate('correctAnswer')}: `;

        for (const [index, entry] of missed.entries()) {
            const item = document.createElement('li');
            item.className = 'mistake-item';
            const question = document.createElement('strong');
            const yourAnswer = document.createElement('span');
            const correctAnswer = document.createElement('span');
            const explanation = document.createElement('small');
            const sources = [
                entry.item[0],
                entry.selectedAnswer || 'Без відповіді',
                entry.item[1],
                entry.explanation
            ];
            let translated = sources;

            if (language !== 'uk') {
                try {
                    translated = await translateTexts(sources, language, `review:${language}:${selectedLevel}:${index}:${sources.join('|')}`);
                } catch (error) {
                    console.error('Unable to translate a review item.', error);
                }
            }
            if (version !== renderVersion || !resultScreen.isConnected) return;

            question.textContent = translated[0];
            yourAnswer.textContent = `${labels}${translated[1]}`;
            correctAnswer.textContent = `${correctLabel}${translated[2]}`;
            explanation.textContent = translated[3];
            item.append(question, yourAnswer, correctAnswer, explanation);
            list.append(item);
        }
    }

    function showDialog(dialog) {
        if (dialog.open) return;
        clearInterval(timerId);
        timerId = undefined;
        pauseTransition();
        dialog.showModal();
    }

    async function renderEncyclopedia() {
        const container = document.querySelector('#encyclopedia-list');
        const version = ++identifyVersion;
        const texts = plantGuide.flatMap((plant) => [plant.name, plant.description]);
        let translated = texts;

        if (language !== 'uk') {
            try {
                translated = await translateTexts(texts, language, `encyclopedia:${language}`);
            } catch (error) {
                console.error('Unable to translate the plant encyclopedia.', error);
            }
        }
        if (version !== identifyVersion || !encyclopediaDialog.open) return;

        container.replaceChildren();
        plantGuide.forEach((plant, index) => {
            const card = document.createElement('article');
            card.className = 'plant-card';
            const icon = document.createElement('span');
            icon.className = 'plant-card-icon';
            icon.setAttribute('aria-hidden', 'true');
            icon.textContent = plant.icon;
            const title = document.createElement('h3');
            title.textContent = translated[index * 2];
            const description = document.createElement('p');
            description.textContent = translated[index * 2 + 1];
            card.append(icon, title, description);
            container.append(card);
        });
    }

    function renderStatistics() {
        const container = document.querySelector('#stats-content');
        container.replaceChildren();
        const answered = Number(quizStats.questions) || 0;
        const correct = Number(quizStats.correct) || 0;
        const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
        const metrics = [
            [translate('roundsPlayed'), Number(quizStats.rounds) || 0],
            [translate('questionsAnswered'), answered],
            [translate('correctAnswers'), correct],
            [translate('accuracy'), `${accuracy}%`]
        ];

        if (metrics[0][1] === 0 && answered === 0) {
            const empty = document.createElement('p');
            empty.className = 'empty-stats';
            empty.textContent = translate('noStats');
            container.append(empty);
        } else {
            metrics.forEach(([label, value]) => {
                const card = document.createElement('div');
                card.className = 'stat-card';
                const metric = document.createElement('strong');
                metric.textContent = String(value);
                const caption = document.createElement('span');
                caption.textContent = String(label);
                card.append(metric, caption);
                container.append(card);
            });
        }

        const heading = document.createElement('h3');
        heading.className = 'records-heading';
        heading.textContent = translate('levelRecords');
        const records = document.createElement('div');
        records.className = 'level-records';
        Object.entries(levels).forEach(([key, level]) => {
            const row = document.createElement('p');
            const label = document.createElement('span');
            label.textContent = translate(levelLabels[key]);
            const value = document.createElement('strong');
            value.textContent = `${Number(bestScores[key]) || 0} / 20`;
            row.append(label, value);
            records.append(row);
        });
        container.append(heading, records);
    }

    function shuffle(items) {
        return [...items].sort(() => Math.random() - 0.5);
    }

    function startIdentifyQuiz(plantSet = plantGuide, isReview = false) {
        if (isTestActive()) return;
        clearInterval(timerId);
        timerId = undefined;
        clearScheduledTransition();
        quizScreen.hidden = true;
        resultScreen.hidden = true;
        startScreen.hidden = true;
        identifyScreen.hidden = false;
        identifyQuestions = shuffle(plantSet).map((plant) => ({
            plant,
            options: shuffle([plant, ...shuffle(plantGuide.filter((entry) => entry !== plant)).slice(0, 3)])
        }));
        identifyIndex = 0;
        identifyScore = 0;
        identifyAnswerHistory = [];
        identifyReviewMode = isReview;
        identifyCurrentStreak = 0;
        identifyBestStreak = 0;
        identifyLocked = false;
        document.querySelector('#identify-result-actions').hidden = true;
        document.querySelector('#identify-finish-btn').hidden = false;
        document.querySelector('#identify-mistake-review').hidden = true;
        document.querySelector('#identify-mistake-list').replaceChildren();
        document.querySelector('#identify-earned-badges').replaceChildren();
        updateTestNavigation();
        renderIdentifyQuestion();
    }

    async function renderIdentifyQuestion() {
        if (identifyScreen.hidden) return;
        const version = ++identifyVersion;
        const item = identifyQuestions[identifyIndex];
        const image = document.querySelector('#identify-illustration');
        const prompt = document.querySelector('#identify-prompt');
        const answers = document.querySelector('#identify-answers');
        const feedback = document.querySelector('#identify-feedback');

        if (!item) return;
        document.querySelector('#identify-count').textContent = `${identifyIndex + 1} / ${identifyQuestions.length}`;
        const plantImage = document.createElement('img');
        plantImage.src = identifyImages[item.plant.name] || '';
        plantImage.alt = '';
        plantImage.addEventListener('error', () => {
            console.error(`Unable to load the identification image for ${item.plant.name}.`);
            plantImage.remove();
            image.textContent = item.plant.icon;
        }, { once: true });
        image.replaceChildren(plantImage);
        prompt.textContent = translate('identifyPrompt');
        feedback.textContent = '';
        reaction.hidden = true;
        factBox.hidden = true;
        answers.replaceChildren();
        const buttons = item.options.map((plant) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'answer-btn identify-answer';
            button.dataset.plantName = plant.name;
            button.textContent = `${plant.icon} ${plant.name}`;
            button.disabled = identifyLocked;
            button.addEventListener('click', () => submitIdentifyAnswer(plant, button));
            answers.append(button);
            return button;
        });

        if (language === 'uk') return;
        try {
            const translated = await translateTexts(
                [translate('identifyPrompt'), ...item.options.map((plant) => plant.name)],
                language,
                `identify:${language}:${item.plant.name}:${item.options.map((plant) => plant.name).join('|')}`
            );
            if (version !== identifyVersion || identifyScreen.hidden) return;
            prompt.textContent = translated[0];
            buttons.forEach((button, index) => {
                button.textContent = `${item.options[index].icon} ${translated[index + 1]}`;
            });
        } catch (error) {
            console.error('Unable to translate the plant identification question.', error);
        }
    }

    function submitIdentifyAnswer(plant, selectedButton) {
        if (identifyLocked) return;
        identifyLocked = true;
        const item = identifyQuestions[identifyIndex];
        const isCorrect = plant === item.plant;
        identifyAnswerHistory.push({
            plant: item.plant,
            selectedAnswer: plant,
            isCorrect,
            explanation: item.plant.description
        });
        if (isCorrect) {
            identifyScore += 1;
            identifyCurrentStreak += 1;
            identifyBestStreak = Math.max(identifyBestStreak, identifyCurrentStreak);
        } else {
            identifyCurrentStreak = 0;
        }
        document.querySelectorAll('.identify-answer').forEach((button) => { button.disabled = true; });
        selectedButton.classList.add(isCorrect ? 'is-correct' : 'is-wrong');
        document.querySelectorAll('.identify-answer').forEach((button) => {
            if (button.dataset.plantName === item.plant.name) {
                button.classList.add('is-correct');
            }
        });
        const feedback = document.querySelector('#identify-feedback');
        const correctButton = [...document.querySelectorAll('.identify-answer')]
            .find((button) => button.dataset.plantName === item.plant.name);
        const displayedCorrectName = correctButton ? correctButton.textContent.replace(/^\S+\s*/, '') : item.plant.name;
        feedback.textContent = isCorrect
            ? translate('identifyCorrect')
            : `${translate('identifyWrong')} ${displayedCorrectName}`;
        playSound(isCorrect ? 'correct' : 'wrong');
        reaction.dataset.status = isCorrect ? 'correct' : 'wrong';
        reactionImage.src = imageAssets[reaction.dataset.status];
        reactionImage.alt = '';
        reactionLabel.textContent = translate(reaction.dataset.status);
        factText.textContent = item.plant.description;
        factBox.hidden = false;
        reaction.hidden = false;
        const answerIndex = identifyIndex;
        if (language !== 'uk') {
            translateTexts(
                [item.plant.description],
                language,
                `identify-fact:${language}:${item.plant.name}`
            ).then(([translatedFact]) => {
                if (!reaction.hidden && identifyIndex === answerIndex) factText.textContent = translatedFact;
            }).catch((error) => console.error('Unable to translate the plant identification fact.', error));
        }
        scheduleTransition(() => {
            reaction.hidden = true;
            identifyIndex += 1;
            if (identifyIndex === identifyQuestions.length) {
                finishIdentifyQuiz();
            } else {
                identifyLocked = false;
                renderIdentifyQuestion();
            }
        }, 1200);
    }

    function startIdentifyMistakeReview() {
        const missed = identifyAnswerHistory
            .filter((answer) => !answer.isCorrect)
            .map((answer) => answer.plant);
        if (missed.length) startIdentifyQuiz(missed, true);
    }

    function finishIdentifyQuiz() {
        const missed = identifyAnswerHistory.filter((answer) => !answer.isCorrect);
        if (!identifyReviewMode) {
            quizStats.rounds += 1;
            quizStats.questions += identifyQuestions.length;
            quizStats.correct += identifyScore;
            persistQuizStats();
            const percent = Math.round((identifyScore / identifyQuestions.length) * 100);
            updateBadges({ percent, bestStreak: identifyBestStreak, reviewMode: false });
        }
        identifyLocked = true;
        const completion = document.createElement('img');
        completion.className = 'identify-completion-image';
        completion.src = completionImage;
        completion.alt = '';
        completion.addEventListener('error', () => {
            console.error('Unable to load the plant identification completion image.');
            completion.remove();
            document.querySelector('#identify-illustration').textContent = '🌱';
        }, { once: true });
        document.querySelector('#identify-illustration').replaceChildren(completion);
        renderIdentifyResults();
        updateTestNavigation();
    }

    function renderIdentifyResults() {
        const missed = identifyAnswerHistory.filter((answer) => !answer.isCorrect);
        const percent = identifyQuestions.length
            ? Math.round((identifyScore / identifyQuestions.length) * 100)
            : 0;
        document.querySelector('#identify-count').textContent = `${identifyQuestions.length} / ${identifyQuestions.length}`;
        reaction.hidden = true;
        document.querySelector('#identify-prompt').textContent = translate('identifyFinished');
        document.querySelector('#identify-answers').replaceChildren();
        document.querySelector('#identify-feedback').textContent =
            `${translate('identifyScore')}: ${identifyScore} / ${identifyQuestions.length} · ${percent}% · ${translate('streak')}: ${identifyBestStreak}`;
        document.querySelector('#identify-finish-btn').hidden = true;
        document.querySelector('#identify-result-actions').hidden = false;
        const mistakeReview = document.querySelector('#identify-mistake-review');
        mistakeReview.hidden = missed.length === 0;
        document.querySelector('#identify-retry-mistakes-btn').hidden = missed.length === 0;
        renderBadges('#identify-earned-badges');
        renderIdentifyMistakes(missed);
    }

    async function renderIdentifyMistakes(missed) {
        const list = document.querySelector('#identify-mistake-list');
        list.replaceChildren();
        const version = ++identifyVersion;
        const labels = `${translate('yourAnswer')}: `;
        const correctLabel = `${translate('correctAnswer')}: `;
        for (const [index, entry] of missed.entries()) {
            let translated = [entry.plant.name, entry.selectedAnswer.name, entry.explanation];
            if (language !== 'uk') {
                try {
                    translated = await translateTexts(
                        translated,
                        language,
                        `identify-review:${language}:${index}:${entry.plant.name}:${entry.selectedAnswer.name}`
                    );
                } catch (error) {
                    console.error('Unable to translate a plant identification review item.', error);
                }
            }
            if (version !== identifyVersion || identifyScreen.hidden) return;
            const item = document.createElement('li');
            item.className = 'mistake-item';
            const question = document.createElement('strong');
            question.textContent = `${translate('identifyPrompt')} ${translated[0]}`;
            const yourAnswer = document.createElement('span');
            yourAnswer.textContent = `${labels}${translated[1]}`;
            const correctAnswer = document.createElement('span');
            correctAnswer.textContent = `${correctLabel}${translated[0]}`;
            const explanation = document.createElement('small');
            explanation.textContent = translated[2];
            item.append(question, yourAnswer, correctAnswer, explanation);
            list.append(item);
        }
    }

    document.querySelectorAll('.difficulty-option').forEach((button) => {
        button.addEventListener('click', () => selectLevel(button.dataset.difficulty));
    });
    document.querySelector('#study-mode-btn').addEventListener('click', () => {
        if (isTestActive()) return;
        startGame(levels[selectedLevel].questions, false, true);
    });
    document.querySelector('#encyclopedia-btn').addEventListener('click', () => {
        showDialog(encyclopediaDialog);
        renderEncyclopedia();
    });
    document.querySelector('#identify-btn').addEventListener('click', () => startIdentifyQuiz());
    document.querySelector('#stats-btn').addEventListener('click', () => {
        renderStatistics();
        showDialog(statsDialog);
    });
    document.querySelector('#sound-settings-btn').addEventListener('click', () => {
        updateVolumeControl();
        showDialog(soundDialog);
    });
    document.querySelectorAll('[data-close-dialog]').forEach((button) => {
        button.addEventListener('click', () => button.closest('dialog').close());
    });
    [encyclopediaDialog, statsDialog, soundDialog].forEach((dialog) => {
        dialog.addEventListener('click', (event) => {
            if (event.target === dialog) dialog.close();
        });
        dialog.addEventListener('close', () => {
            resumeTestClock();
            if (!identifyScreen.hidden && !identifyLocked) renderIdentifyQuestion();
        });
    });
    volumeRange.addEventListener('input', () => {
        soundVolume = Number(volumeRange.value) / 100;
        localStorage.setItem('herbalQuizVolume', volumeRange.value);
        updateVolumeControl();
    });
    hoverSoundToggle.addEventListener('change', () => {
        hoverSoundEnabled = hoverSoundToggle.checked;
        localStorage.setItem('herbalQuizHover', hoverSoundEnabled ? 'on' : 'off');
    });
    document.querySelector('#sound-test-btn').addEventListener('click', () => playSound('streak'));
    document.querySelector('#identify-restart-btn').addEventListener('click', () => startIdentifyQuiz());
    document.querySelector('#identify-retry-mistakes-btn').addEventListener('click', startIdentifyMistakeReview);
    document.querySelector('#identify-home-btn').addEventListener('click', goHome);
    document.querySelector('#reset-stats-btn').addEventListener('click', () => {
        if (!window.confirm(translate('confirmResetStats'))) return;
        quizStats = { rounds: 0, questions: 0, correct: 0 };
        bestScores = {};
        unlockedBadges = [];
        localStorage.removeItem('herbalQuizBestScores');
        localStorage.removeItem('herbalQuizBadges');
        persistQuizStats();
        renderStatistics();
    });
    document.querySelector('#identify-finish-btn').addEventListener('click', goHome);
    document.querySelector('#quiz-finish-btn').addEventListener('click', goHome);
    document.querySelectorAll('[data-home]').forEach((button) => {
        button.addEventListener('click', goHome);
    });
    document.querySelector('#start-btn').addEventListener('click', () => startGame());
    document.querySelector('#restart-btn').addEventListener('click', () => startGame());
    document.querySelector('#retry-mistakes-btn').addEventListener('click', startMistakeReview);
    profileNameInput.addEventListener('change', saveProfile);
    addressForm.addEventListener('change', saveProfile);
    document.querySelector('#home-btn').addEventListener('click', () => {
        goHome();
    });
    menuToggle.addEventListener('click', () => {
        languageMenu.hidden = !languageMenu.hidden;
        menuToggle.setAttribute('aria-expanded', String(!languageMenu.hidden));
    });
    themeToggle.addEventListener('click', () => {
        setTheme(document.body.dataset.theme === 'dark' ? 'light' : 'dark');
    });
    soundToggle.addEventListener('click', () => {
        if (soundEnabled) {
            soundEnabled = false;
            localStorage.setItem('herbalQuizSound', 'off');
            updateSoundControl();
            return;
        }
        soundEnabled = true;
        localStorage.setItem('herbalQuizSound', soundEnabled ? 'on' : 'off');
        updateSoundControl();
        playSound('click');
    });
    document.addEventListener('pointerover', (event) => {
        if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return;
        if (!(event.target instanceof Element)) return;
        const target = event.target.closest('button:not(:disabled), a[href], [role="button"], .profile-box');
        if (!target || (event.relatedTarget instanceof Node && target.contains(event.relatedTarget))) return;
        playSound('hover');
    });
    document.addEventListener('click', (event) => {
        if (!(event.target instanceof Element)) return;
        const control = event.target.closest('button:not(:disabled), a[href], [role="button"]');
        if (!control || control.matches('.answer-btn, #sound-toggle, #sound-test-btn')) return;
        playSound('click');
    });
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.menu-wrap')) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });

    selectLevel(selectedLevel);
    setTheme(localStorage.getItem('herbalQuizTheme') === 'dark' ? 'dark' : 'light');
    applyTranslations();
    renderLanguages();
    updateTestNavigation();
    warmTranslations(language);
});
