import { Language, LevelInfo, Question } from '../types/quiz';

export const LANGUAGES: Language[] = [
  {
    id: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    speechLang: 'es-ES',
    accentColor: 'from-amber-500 to-rose-500',
    description: 'Learn Castilian and Latin American vocabulary from beginner greetings to expressive idioms.'
  },
  {
    id: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    speechLang: 'fr-FR',
    accentColor: 'from-blue-500 to-indigo-600',
    description: 'Master everyday French vocabulary, pronunciation nuances, culinary terms, and conversational finesse.'
  },
  {
    id: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵',
    speechLang: 'ja-JP',
    accentColor: 'from-rose-500 to-pink-600',
    description: 'Practice essential Kanji, Kana, daily verbs, keigo honorifics, and travel phrases with romaji guides.'
  },
  {
    id: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    speechLang: 'de-DE',
    accentColor: 'from-yellow-500 to-amber-700',
    description: 'Conquer compound words, essential gendered nouns (der/die/das), and authentic German expressions.'
  },
  {
    id: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    flag: '🇮🇹',
    speechLang: 'it-IT',
    accentColor: 'from-emerald-500 to-teal-600',
    description: 'Immerse in lyrical phrases, dining culture, emotional vocabulary, and Italian communicative flair.'
  },
  {
    id: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷',
    speechLang: 'ko-KR',
    accentColor: 'from-cyan-500 to-blue-600',
    description: 'Learn Hangul basics, polite speech forms, modern expressions, and popular everyday idioms.'
  }
];

export const LEVEL_INFOS: LevelInfo[] = [
  {
    level: 1,
    title: 'Beginner Essentials',
    subtitle: 'Greetings, Core Nouns & First Numbers',
    minAccuracyToUnlockNext: 70,
    iconName: 'Compass',
    description: 'Build your foundation with fundamental greetings, daily items, and polite basics.'
  },
  {
    level: 2,
    title: 'Elementary Life',
    subtitle: 'Food, Places & Daily Routines',
    minAccuracyToUnlockNext: 70,
    iconName: 'Coffee',
    description: 'Navigate restaurants, describe your day, and learn essential action verbs.'
  },
  {
    level: 3,
    title: 'Intermediate Explorer',
    subtitle: 'Travel, Directions & Emotions',
    minAccuracyToUnlockNext: 75,
    iconName: 'MapPin',
    description: 'Handle travel situations, book transport, and express feelings and opinions with confidence.'
  },
  {
    level: 4,
    title: 'Upper-Intermediate',
    subtitle: 'Culture, Work & Media',
    minAccuracyToUnlockNext: 80,
    iconName: 'BookOpen',
    description: 'Discuss current events, professional settings, social culture, and descriptive nuances.'
  },
  {
    level: 5,
    title: 'Advanced Mastery',
    subtitle: 'Idioms, Metaphors & Subtleties',
    minAccuracyToUnlockNext: 85,
    iconName: 'Award',
    description: 'Master nuanced figurative phrases, rare vocabulary, and native colloquialisms.'
  }
];

export const QUESTIONS_DATABASE: Question[] = [
  // ===================== SPANISH (es) =====================
  // Level 1: Beginner
  {
    id: 'es_1_1',
    languageId: 'es',
    level: 1,
    category: 'Greetings',
    prompt: "What does 'Buenos días' mean?",
    targetWord: 'Buenos días',
    phonetic: '[BWEH-nohs DEE-ahs]',
    options: ['Good morning', 'Good night', 'See you later', 'Please'],
    correctIndex: 0,
    explanation: "'Buenos días' literally translates to 'Good days' and is used as the standard greeting throughout the morning until midday.",
    exampleSentence: {
      foreign: '¡Buenos días! ¿Cómo amaneciste hoy?',
      english: 'Good morning! How did you wake up today?'
    }
  },
  {
    id: 'es_1_2',
    languageId: 'es',
    level: 1,
    category: 'Politeness',
    prompt: "Which word means 'Thank you very much'?",
    targetWord: 'Muchas gracias',
    phonetic: '[MOO-chahs GRAH-syahs]',
    options: ['De nada', 'Muchas gracias', 'Por favor', 'Lo siento'],
    correctIndex: 1,
    explanation: "'Muchas gracias' combines 'muchas' (many/much) with 'gracias' (thanks). 'De nada' means you are welcome.",
    exampleSentence: {
      foreign: 'Muchas gracias por tu amable ayuda.',
      english: 'Thank you very much for your kind help.'
    }
  },
  {
    id: 'es_1_3',
    languageId: 'es',
    level: 1,
    category: 'Core Nouns',
    prompt: "What is the meaning of 'el agua'?",
    targetWord: 'el agua',
    phonetic: '[el AH-gwah]',
    options: ['The bread', 'The water', 'The fire', 'The air'],
    correctIndex: 1,
    explanation: "Even though 'agua' is a feminine noun ending in -a, it takes the masculine article 'el' in singular to avoid cacophony with the stressed initial 'a'.",
    exampleSentence: {
      foreign: 'Por favor, quisiera un vaso de agua fresca.',
      english: 'Please, I would like a glass of fresh water.'
    }
  },
  {
    id: 'es_1_4',
    languageId: 'es',
    level: 1,
    category: 'Numbers & Time',
    prompt: "Which number corresponds to 'cuatro'?",
    targetWord: 'cuatro',
    phonetic: '[KWAH-troh]',
    options: ['Three', 'Four', 'Five', 'Seven'],
    correctIndex: 1,
    explanation: "'Cuatro' is 4. 'Tres' is 3, 'cinco' is 5, and 'siete' is 7 in Spanish.",
    exampleSentence: {
      foreign: 'Compré cuatro manzanas en el mercado.',
      english: 'I bought four apples at the market.'
    }
  },
  {
    id: 'es_1_5',
    languageId: 'es',
    level: 1,
    category: 'Core Nouns',
    prompt: "What does 'la casa' mean?",
    targetWord: 'la casa',
    phonetic: '[lah KAH-sah]',
    options: ['The school', 'The store', 'The house', 'The street'],
    correctIndex: 2,
    explanation: "'La casa' is feminine and means 'the house' or 'home'. Common expression: 'Mi casa es tu casa'.",
    exampleSentence: {
      foreign: 'Bienvenidos a nuestra casa.',
      english: 'Welcome to our house.'
    }
  },

  // Level 2: Elementary
  {
    id: 'es_2_1',
    languageId: 'es',
    level: 2,
    category: 'Food & Dining',
    prompt: "What does 'el desayuno' refer to?",
    targetWord: 'el desayuno',
    phonetic: '[el deh-sah-YOO-noh]',
    options: ['Lunch', 'Dinner', 'Breakfast', 'Afternoon snack'],
    correctIndex: 2,
    explanation: "'El desayuno' literally means 'breaking the fast' (des-ayuno), just like the English word 'breakfast'.",
    exampleSentence: {
      foreign: 'Tomamos café y tostadas en el desayuno.',
      english: 'We had coffee and toast for breakfast.'
    }
  },
  {
    id: 'es_2_2',
    languageId: 'es',
    level: 2,
    category: 'Daily Routine',
    prompt: "What does the verb 'despertarse' mean?",
    targetWord: 'despertarse',
    phonetic: '[des-per-TAHR-seh]',
    options: ['To go to sleep', 'To wake up', 'To get dressed', 'To take a shower'],
    correctIndex: 1,
    explanation: "'Despertarse' is a reflexive verb meaning to wake up. It undergoes a stem-change: 'yo me despierto'.",
    exampleSentence: {
      foreign: 'Suelo despertarme a las siete de la mañana.',
      english: 'I usually wake up at seven in the morning.'
    }
  },
  {
    id: 'es_2_3',
    languageId: 'es',
    level: 2,
    category: 'Places & City',
    prompt: "Where would you be if you visit 'la panadería'?",
    targetWord: 'la panadería',
    phonetic: '[lah pah-nah-deh-REE-ah]',
    options: ['Bakery', 'Pharmacy', 'Bookstore', 'Butcher shop'],
    correctIndex: 0,
    explanation: "From 'pan' (bread) + suffix '-ería' (store/shop). A 'panadería' is where artisanal bread and pastries are sold.",
    exampleSentence: {
      foreign: 'El pan recién horneado de la panadería huele delicioso.',
      english: 'The freshly baked bread from the bakery smells delicious.'
    }
  },
  {
    id: 'es_2_4',
    languageId: 'es',
    level: 2,
    category: 'Time & Weather',
    prompt: "How do you say 'It's sunny' in Spanish?",
    targetWord: 'Hace sol',
    phonetic: '[AH-seh sohl]',
    options: ['Está lloviendo', 'Hace sol', 'Hace frío', 'Hay niebla'],
    correctIndex: 1,
    explanation: "Spanish uses the verb 'hacer' (to make/do) for most weather conditions: 'hace sol', 'hace calor', 'hace viento'.",
    exampleSentence: {
      foreign: 'Hoy hace sol, así que vamos al parque.',
      english: 'Today is sunny, so let us go to the park.'
    }
  },
  {
    id: 'es_2_5',
    languageId: 'es',
    level: 2,
    category: 'Descriptions',
    prompt: "What is the opposite of 'pequeño' (small)?",
    targetWord: 'grande',
    phonetic: '[GRAHN-deh]',
    options: ['rápido', 'antiguo', 'grande', 'estrecho'],
    correctIndex: 2,
    explanation: "'Grande' means large or big, while 'pequeño' means small. 'Rápido' means fast and 'antiguo' means ancient.",
    exampleSentence: {
      foreign: 'Vivimos en una ciudad bastante grande.',
      english: 'We live in quite a large city.'
    }
  },

  // Level 3: Intermediate
  {
    id: 'es_3_1',
    languageId: 'es',
    level: 3,
    category: 'Travel & Transport',
    prompt: "What does 'un billete de ida y vuelta' mean?",
    targetWord: 'un billete de ida y vuelta',
    phonetic: '[oon bee-YEH-teh deh EE-dah ee VWEHL-tah]',
    options: ['One-way ticket', 'Round-trip ticket', 'Boarding pass', 'Luggage tag'],
    correctIndex: 1,
    explanation: "'Ida' is departure/going and 'vuelta' is return. In Latin America, 'un boleto de ida y vuelta' is also commonly used.",
    exampleSentence: {
      foreign: 'Compré un billete de ida y vuelta a Barcelona.',
      english: 'I bought a round-trip ticket to Barcelona.'
    }
  },
  {
    id: 'es_3_2',
    languageId: 'es',
    level: 3,
    category: 'Emotions & Health',
    prompt: "If someone says 'Estoy agotado/a', how do they feel?",
    targetWord: 'agotado',
    phonetic: '[ah-goh-TAH-doh]',
    options: ['Excited', 'Exhausted', 'Confused', 'Enthusiastic'],
    correctIndex: 1,
    explanation: "'Agotado' comes from 'agotar' (to drain or deplete completely). It denotes being utterly worn out physically or mentally.",
    exampleSentence: {
      foreign: 'Después del maratón, me sentí completamente agotado.',
      english: 'After the marathon, I felt completely exhausted.'
    }
  },
  {
    id: 'es_3_3',
    languageId: 'es',
    level: 3,
    category: 'Directions & City',
    prompt: "What instruction is given by 'Gira a la izquierda'?",
    targetWord: 'Gira a la izquierda',
    phonetic: '[HEE-rah ah lah ees-KYEHR-dah]',
    options: ['Turn right', 'Go straight ahead', 'Turn left', 'Cross the bridge'],
    correctIndex: 2,
    explanation: "'Izquierda' means left, and 'derecha' means right. 'Girar' or 'doblar' means to turn.",
    exampleSentence: {
      foreign: 'En el semáforo, gira a la izquierda y verás el museo.',
      english: 'At the traffic light, turn left and you will see the museum.'
    }
  },
  {
    id: 'es_3_4',
    languageId: 'es',
    level: 3,
    category: 'Social Interaction',
    prompt: "What does the expression '¡Ojalá!' communicate?",
    targetWord: '¡Ojalá!',
    phonetic: '[oh-hah-LAH]',
    options: ['Never mind!', 'I hope so / If only!', 'Be careful!', 'What a shame!'],
    correctIndex: 1,
    explanation: "Derived from Arabic 'insh'Allah' (God willing), 'ojalá' triggers the subjunctive and conveys hopeful yearning or wishing.",
    exampleSentence: {
      foreign: '¡Ojalá no llueva durante nuestro viaje!',
      english: 'Hopefully it will not rain during our trip!'
    }
  },
  {
    id: 'es_3_5',
    languageId: 'es',
    level: 3,
    category: 'Work & Studies',
    prompt: "What does 'el plazo de entrega' mean?",
    targetWord: 'el plazo de entrega',
    phonetic: '[el PLAH-zoh deh en-TREH-gah]',
    options: ['The budget limit', 'The delivery deadline', 'The meeting agenda', 'The job interview'],
    correctIndex: 1,
    explanation: "'Plazo' is term/time limit, and 'entrega' is delivery or handover. It translates directly to deadline.",
    exampleSentence: {
      foreign: 'Debemos cumplir con el plazo de entrega este viernes.',
      english: 'We must meet the delivery deadline this Friday.'
    }
  },

  // Level 4: Upper-Intermediate
  {
    id: 'es_4_1',
    languageId: 'es',
    level: 4,
    category: 'Culture & Nature',
    prompt: "What does 'la sobremesa' describe in Hispanic culture?",
    targetWord: 'la sobremesa',
    phonetic: '[lah soh-breh-MEH-sah]',
    options: ['The tablecloth decoration', 'Lingering conversation at table after eating', 'The appetizer course', 'Paying the shared restaurant bill'],
    correctIndex: 1,
    explanation: "'Sobremesa' is a treasured cultural tradition of staying at the dining table after a meal to chat, debate, and bond with family or companions.",
    exampleSentence: {
      foreign: 'Nuestra sobremesa duró más de dos horas entre risas y café.',
      english: 'Our after-meal chat lasted more than two hours amidst laughter and coffee.'
    }
  },
  {
    id: 'es_4_2',
    languageId: 'es',
    level: 4,
    category: 'Abstract Concepts',
    prompt: "What does the adjective 'efímero' mean?",
    targetWord: 'efímero',
    phonetic: '[eh-FEE-meh-roh]',
    options: ['Long-lasting', 'Ephemeral / fleeting', 'Heavy and dense', 'Predictable'],
    correctIndex: 1,
    explanation: "'Efímero' originates from Greek 'ephēmeros' (lasting only a day), indicating something transient or passing quickly.",
    exampleSentence: {
      foreign: 'La belleza de los cerezos en flor es maravillosa pero efímera.',
      english: 'The beauty of cherry blossoms is marvelous but fleeting.'
    }
  },
  {
    id: 'es_4_3',
    languageId: 'es',
    level: 4,
    category: 'Idioms',
    prompt: "What does 'costar un ojo de la cara' mean figuratively?",
    targetWord: 'costar un ojo de la cara',
    phonetic: '[kohs-TAHR oon OH-hoh deh lah KAH-rah]',
    options: ['To be surprisingly easy', 'To cost an arm and a leg / very expensive', 'To require physical bravery', 'To be counterfeit'],
    correctIndex: 1,
    explanation: "Equivalent to the English idiom 'to cost an arm and a leg', literally meaning 'to cost an eye from the face'.",
    exampleSentence: {
      foreign: 'Ese reloj de lujo le costó un ojo de la cara.',
      english: 'That luxury watch cost him an arm and a leg.'
    }
  },
  {
    id: 'es_4_4',
    languageId: 'es',
    level: 4,
    category: 'Nuance & Synonyms',
    prompt: "How does 'darse cuenta de' differ from 'realizar'?",
    targetWord: 'darse cuenta de',
    phonetic: '[DAHR-seh KWEHN-tah deh]',
    options: ['It means to carry out an experiment', 'It means to realize / become conscious of something', 'It means to calculate mathematical sums', 'It means to introduce someone'],
    correctIndex: 1,
    explanation: "A famous false friend: 'realizar' means to fulfill, accomplish, or make. 'Darse cuenta de' is to realize cognitively.",
    exampleSentence: {
      foreign: 'De repente me di cuenta de que había olvidado mis llaves.',
      english: 'Suddenly I realized that I had forgotten my keys.'
    }
  },
  {
    id: 'es_4_5',
    languageId: 'es',
    level: 4,
    category: 'Advanced Verbs',
    prompt: "What does 'desenlace' mean in literature and storytelling?",
    targetWord: 'el desenlace',
    phonetic: '[el deh-sen-LAH-seh]',
    options: ['The introduction', 'The climax', 'The outcome / resolution / denouement', 'The protagonist archetype'],
    correctIndex: 2,
    explanation: "'Desenlace' is untying the knot (des-enlazar), referring to the denouement or concluding resolution of a plot or crisis.",
    exampleSentence: {
      foreign: 'La novela tuvo un desenlace completamente inesperado.',
      english: 'The novel had a completely unexpected resolution.'
    }
  },

  // Level 5: Advanced Mastery
  {
    id: 'es_5_1',
    languageId: 'es',
    level: 5,
    category: 'Advanced Idioms',
    prompt: "What does the Spanish idiom 'dar gato por liebre' mean?",
    targetWord: 'dar gato por liebre',
    phonetic: '[dahr GAH-toh pohr LYEH-breh]',
    options: ['To give someone a great discount', 'To deceive someone by substituting an inferior item', 'To adopt wild animals', 'To speak without thinking'],
    correctIndex: 1,
    explanation: "Literally 'to give cat for hare', historically referring to dishonest medieval tavern keepers selling cheaper cat meat disguised as hare.",
    exampleSentence: {
      foreign: 'Revisa bien el contrato para que no te den gato por liebre.',
      english: 'Check the contract carefully so they do not pull a fast one on you.'
    }
  },
  {
    id: 'es_5_2',
    languageId: 'es',
    level: 5,
    category: 'Stylistic Nuance',
    prompt: "What does the noun 'perspicacia' signify?",
    targetWord: 'la perspicacia',
    phonetic: '[lah pehr-spee-KAH-syah]',
    options: ['Audacity', 'Perspicacity / keen mental insight', 'Stubbornness', 'Eloquence'],
    correctIndex: 1,
    explanation: "'Perspicacia' describes keen acumen, sharp perception, and the faculty to grasp subtle intricacies quickly.",
    exampleSentence: {
      foreign: 'Su perspicacia para los negocios le permitió anticipar la crisis.',
      english: 'Her business perspicacity allowed her to anticipate the downturn.'
    }
  },
  {
    id: 'es_5_3',
    languageId: 'es',
    level: 5,
    category: 'Advanced Phrases',
    prompt: "When something happens 'por antonomasia', it is...",
    targetWord: 'por antonomasia',
    phonetic: '[pohr ahn-toh-noh-MAH-syah]',
    options: ['Accidental and random', 'Par excellence / quintessential', 'Incomplete', 'Illegally done'],
    correctIndex: 1,
    explanation: "'Por antonomasia' signifies that someone or something embodies the supreme, quintessential example of that category.",
    exampleSentence: {
      foreign: 'París es la ciudad del amor por antonomasia.',
      english: 'Paris is the city of love par excellence.'
    }
  },
  {
    id: 'es_5_4',
    languageId: 'es',
    level: 5,
    category: 'Metaphorical Verbs',
    prompt: "What does the literary verb 'vislumbrar' mean?",
    targetWord: 'vislumbrar',
    phonetic: '[vees-loom-BRAHR]',
    options: ['To glimpse / discern faintly', 'To ignite or burn fiercely', 'To shout loudly', 'To erase completely'],
    correctIndex: 0,
    explanation: "'Vislumbrar' means seeing something dimly or catching a faint glimpse, both visually in dim light and intellectually as an intuition.",
    exampleSentence: {
      foreign: 'A través de la niebla logramos vislumbrar la silueta del faro.',
      english: 'Through the fog we managed to glimpse the silhouette of the lighthouse.'
    }
  },
  {
    id: 'es_5_5',
    languageId: 'es',
    level: 5,
    category: 'Proverbs & Wisdom',
    prompt: "What is conveyed by 'A quien madruga, Dios le ayuda'?",
    targetWord: 'A quien madruga, Dios le ayuda',
    phonetic: '[ah KYEHN mah-DROO-gah, DYOHS leh ah-YOO-dah]',
    options: ['The early bird catches the worm', 'Patience is a virtue', 'Better late than never', 'Silence is golden'],
    correctIndex: 0,
    explanation: "This classic proverb states that initiative and prompt diligence are rewarded; 'madrugar' means to wake up very early.",
    exampleSentence: {
      foreign: 'Empecemos temprano el proyecto: a quien madruga, Dios le ayuda.',
      english: 'Let us start the project early: the early bird catches the worm.'
    }
  },

  // ===================== FRENCH (fr) =====================
  // Level 1: Beginner
  {
    id: 'fr_1_1',
    languageId: 'fr',
    level: 1,
    category: 'Greetings',
    prompt: "What does 'Bonjour' mean?",
    targetWord: 'Bonjour',
    phonetic: '[bohn-ZHOOR]',
    options: ['Good evening', 'Hello / Good day', 'Goodbye', 'Please'],
    correctIndex: 1,
    explanation: "'Bonjour' is formed from 'bon' (good) and 'jour' (day). It is the universal French daytime greeting.",
    exampleSentence: {
      foreign: 'Bonjour madame, comment allez-vous ?',
      english: 'Hello ma’am, how are you?'
    }
  },
  {
    id: 'fr_1_2',
    languageId: 'fr',
    level: 1,
    category: 'Politeness',
    prompt: "How do you say 'Please' politely in French?",
    targetWord: "S'il vous plaît",
    phonetic: '[seel voo PLEH]',
    options: ['Merci beaucoup', "S'il vous plaît", 'De rien', 'Pardon'],
    correctIndex: 1,
    explanation: "'S’il vous plaît' literally translates to 'if it pleases you' and is the standard formal/polite way to say please.",
    exampleSentence: {
      foreign: 'Un café noir, s’il vous plaît.',
      english: 'A black coffee, please.'
    }
  },
  {
    id: 'fr_1_3',
    languageId: 'fr',
    level: 1,
    category: 'Core Nouns',
    prompt: "What does 'la pomme' mean?",
    targetWord: 'la pomme',
    phonetic: '[lah PUHM]',
    options: ['The pear', 'The apple', 'The potato', 'The peach'],
    correctIndex: 1,
    explanation: "'La pomme' is the apple. 'Pomme de terre' (apple of the earth) means potato in French.",
    exampleSentence: {
      foreign: 'Je mange une pomme rouge chaque matin.',
      english: 'I eat a red apple every morning.'
    }
  },
  {
    id: 'fr_1_4',
    languageId: 'fr',
    level: 1,
    category: 'Numbers',
    prompt: "Which number is 'sept' in French?",
    targetWord: 'sept',
    phonetic: '[SEHT]',
    options: ['Six', 'Seven', 'Eight', 'Nine'],
    correctIndex: 1,
    explanation: "'Sept' is 7 (the 'p' is silent in pronunciation). 6 is 'six', 8 is 'huit', and 9 is 'neuf'.",
    exampleSentence: {
      foreign: 'Il y a sept jours dans une semaine.',
      english: 'There are seven days in a week.'
    }
  },
  {
    id: 'fr_1_5',
    languageId: 'fr',
    level: 1,
    category: 'Core Verbs',
    prompt: "What does the verb 'aimer' mean?",
    targetWord: 'aimer',
    phonetic: '[eh-MAY]',
    options: ['To like / love', 'To sleep', 'To travel', 'To build'],
    correctIndex: 0,
    explanation: "'Aimer' means to like or to love. When used with people directly (e.g. 'je t'aime'), it conveys deep romantic love.",
    exampleSentence: {
      foreign: 'J’aime lire des livres en français.',
      english: 'I love reading books in French.'
    }
  },

  // Level 2: Elementary
  {
    id: 'fr_2_1',
    languageId: 'fr',
    level: 2,
    category: 'Food & Dining',
    prompt: "What is 'l’addition' in a French bistro?",
    targetWord: "l'addition",
    phonetic: '[lah-dee-SYOHN]',
    options: ['The daily special', 'The check / bill', 'The appetizer', 'The wine list'],
    correctIndex: 1,
    explanation: "When you finish your meal, ask the server: 'L’addition, s’il vous plaît' to request the check.",
    exampleSentence: {
      foreign: 'Garçon, l’addition s’il vous plaît.',
      english: 'Waiter, the bill please.'
    }
  },
  {
    id: 'fr_2_2',
    languageId: 'fr',
    level: 2,
    category: 'Daily Routine',
    prompt: "What does 'se brosser les dents' mean?",
    targetWord: 'se brosser les dents',
    phonetic: '[seh broh-SAY lay DAHN]',
    options: ['To comb hair', 'To brush one’s teeth', 'To wash hands', 'To iron clothes'],
    correctIndex: 1,
    explanation: "A reflexive daily hygiene verb: 'dents' means teeth and 'brosser' means to brush.",
    exampleSentence: {
      foreign: 'Les enfants doivent se brosser les dents avant de dormir.',
      english: 'The children must brush their teeth before sleeping.'
    }
  },
  {
    id: 'fr_2_3',
    languageId: 'fr',
    level: 2,
    category: 'Places & Transit',
    prompt: "What does 'la gare' signify in a French town?",
    targetWord: 'la gare',
    phonetic: '[lah GAHR]',
    options: ['The airport', 'The train station', 'The town hall', 'The post office'],
    correctIndex: 1,
    explanation: "'La gare' refers to a railway / train station. For an airport, French uses 'l'aéroport'.",
    exampleSentence: {
      foreign: 'Le TGV pour Lyon part de la gare de Lyon.',
      english: 'The high-speed train to Lyon departs from Gare de Lyon.'
    }
  },
  {
    id: 'fr_2_4',
    languageId: 'fr',
    level: 2,
    category: 'Time & Calendar',
    prompt: "Which day of the week is 'mercredi'?",
    targetWord: 'mercredi',
    phonetic: '[mair-kruh-DEE]',
    options: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    correctIndex: 1,
    explanation: "Named after the Roman god Mercury: lundi (Monday), mardi (Tuesday), mercredi (Wednesday), jeudi (Thursday).",
    exampleSentence: {
      foreign: 'Nous avons cours de dessin chaque mercredi après-midi.',
      english: 'We have drawing class every Wednesday afternoon.'
    }
  },
  {
    id: 'fr_2_5',
    languageId: 'fr',
    level: 2,
    category: 'Weather',
    prompt: "What weather is indicated by 'Il pleut'?",
    targetWord: 'Il pleut',
    phonetic: '[eel PLUH]',
    options: ['It is snowing', 'It is raining', 'It is foggy', 'It is windy'],
    correctIndex: 1,
    explanation: "'Il pleut' comes from the impersonal verb 'pleuvoir' (to rain). 'La pluie' is rain.",
    exampleSentence: {
      foreign: 'Prends un parapluie car il pleut dehors.',
      english: 'Take an umbrella because it is raining outside.'
    }
  },

  // Level 3: Intermediate
  {
    id: 'fr_3_1',
    languageId: 'fr',
    level: 3,
    category: 'Travel & Lodging',
    prompt: "What does 'compris' mean on a hotel booking?",
    targetWord: 'compris',
    phonetic: '[kohm-PREE]',
    options: ['Extra charge', 'Included', 'Cancelled', 'Unavailable'],
    correctIndex: 1,
    explanation: "'Compris' means included or understood. 'Petit-déjeuner compris' means breakfast is included.",
    exampleSentence: {
      foreign: 'Le tarif de la chambre est de 90 euros, service compris.',
      english: 'The room rate is 90 euros, service included.'
    }
  },
  {
    id: 'fr_3_2',
    languageId: 'fr',
    level: 3,
    category: 'Emotions & Sensations',
    prompt: "What does 'avoir le mal du pays' describe?",
    targetWord: 'le mal du pays',
    phonetic: '[luh MAHL dyoo peh-EE]',
    options: ['Motion sickness', 'Homesickness', 'Altitude dizziness', 'Jet lag'],
    correctIndex: 1,
    explanation: "Literally 'the ache of the country', expressing homesickness when living or traveling abroad.",
    exampleSentence: {
      foreign: 'Pendant sa première année d’études à l’étranger, elle avait le mal du pays.',
      english: 'During her first year studying abroad, she felt homesick.'
    }
  },
  {
    id: 'fr_3_3',
    languageId: 'fr',
    level: 3,
    category: 'Opinions & Speech',
    prompt: "What does 'à mon avis' introduce?",
    targetWord: 'à mon avis',
    phonetic: '[ah mohn ah-VEE]',
    options: ['In my opinion', 'According to the law', 'Without doubt', 'On the contrary'],
    correctIndex: 0,
    explanation: "'À mon avis' is an essential conversational phrase meaning 'in my opinion' or 'as I see it'.",
    exampleSentence: {
      foreign: 'À mon avis, cette solution est la plus durable.',
      english: 'In my opinion, this solution is the most sustainable.'
    }
  },
  {
    id: 'fr_3_4',
    languageId: 'fr',
    level: 3,
    category: 'Work & Professional',
    prompt: "What is 'un stage' in a French career path?",
    targetWord: 'un stage',
    phonetic: '[oon STAHZH]',
    options: ['A theatrical stage', 'An internship / training period', 'A retirement plan', 'A wage deduction'],
    correctIndex: 1,
    explanation: "In French professional and academic life, 'un stage' is an internship or practical training placement.",
    exampleSentence: {
      foreign: 'Julien effectue un stage de six mois dans une maison d’édition.',
      english: 'Julien is doing a six-month internship at a publishing house.'
    }
  },
  {
    id: 'fr_3_5',
    languageId: 'fr',
    level: 3,
    category: 'Conjunctions',
    prompt: "What does the connector 'cependant' signify?",
    targetWord: 'cependant',
    phonetic: '[suh-pahn-DAHN]',
    options: ['Consequently', 'However / nevertheless', 'Because', 'Immediately'],
    correctIndex: 1,
    explanation: "'Cependant' is an elegant transition word meaning however, nonetheless, or yet.",
    exampleSentence: {
      foreign: 'Le projet était complexe, cependant nous l’avons terminé à temps.',
      english: 'The project was complex; however, we finished it on time.'
    }
  },

  // Level 4: Upper-Intermediate
  {
    id: 'fr_4_1',
    languageId: 'fr',
    level: 4,
    category: 'Culture & Idioms',
    prompt: "What does 'avoir le coup de foudre' mean?",
    targetWord: 'le coup de foudre',
    phonetic: '[luh koo duh FOOD-ruh]',
    options: ['To be struck by bad luck', 'Love at first sight', 'A sudden anger outburst', 'To lose electrical power'],
    correctIndex: 1,
    explanation: "Literally 'a thunderbolt', poetically describing the instant, electrifying feeling of falling in love.",
    exampleSentence: {
      foreign: 'Dès qu’ils se sont rencontrés, ce fut le coup de foudre.',
      english: 'As soon as they met, it was love at first sight.'
    }
  },
  {
    id: 'fr_4_2',
    languageId: 'fr',
    level: 4,
    category: 'Social Concepts',
    prompt: "What is 'le flâneur' in French literature and urban life?",
    targetWord: 'le flâneur',
    phonetic: '[luh flah-NUHR]',
    options: ['An aimless stroller / curious city wanderer', 'A harsh literary critic', 'An antique book merchant', 'A clock tower keeper'],
    correctIndex: 0,
    explanation: "Popularized by Baudelaire, 'le flâneur' is one who leisurely strolls through the city, keenly observing life and architecture.",
    exampleSentence: {
      foreign: 'Baudelaire a immortalisé la figure du flâneur arpentant les boulevards parisiens.',
      english: 'Baudelaire immortalized the figure of the flâneur roaming the Parisian boulevards.'
    }
  },
  {
    id: 'fr_4_3',
    languageId: 'fr',
    level: 4,
    category: 'Colloquial Expressions',
    prompt: "What does 'poser un lapin' mean colloquially?",
    targetWord: 'poser un lapin',
    phonetic: '[poh-ZAY oon lah-PAN]',
    options: ['To adopt a rabbit', 'To stand someone up / not show up', 'To run very quickly', 'To perform a magic trick'],
    correctIndex: 1,
    explanation: "Literally 'to place a rabbit', it is the colloquial French expression for standing someone up for an appointment or date.",
    exampleSentence: {
      foreign: 'Je l’ai attendu au café pendant une heure, mais il m’a posé un lapin.',
      english: 'I waited for him at the café for an hour, but he stood me up.'
    }
  },
  {
    id: 'fr_4_4',
    languageId: 'fr',
    level: 4,
    category: 'Subtle Distinctions',
    prompt: "What is the meaning of 'dépaysant'?",
    targetWord: 'dépaysant',
    phonetic: '[day-pay-ee-ZAHN]',
    options: ['Exotic and refreshingly disorienting', 'Extremely boring and repetitive', 'Economically depressed', 'Familiar like home'],
    correctIndex: 0,
    explanation: "A unique French concept with no single English word: experiencing a complete, delightful change of scenery or culture.",
    exampleSentence: {
      foreign: 'Ce petit village breton offre un cadre particulièrement dépaysant.',
      english: 'This little Breton village offers an especially refreshing change of scenery.'
    }
  },
  {
    id: 'fr_4_5',
    languageId: 'fr',
    level: 4,
    category: 'Advanced Vocabulary',
    prompt: "What does 'éphémère' denote?",
    targetWord: 'éphémère',
    phonetic: '[ay-fay-MAIR]',
    options: ['Eternal', 'Fleeting / ephemeral', 'Fragile glass', 'Subterranean'],
    correctIndex: 1,
    explanation: "Borrowed from Greek, meaning short-lived or transitory.",
    exampleSentence: {
      foreign: 'L’aurore boréale offrait un spectacle éphémère d’une rare intensité.',
      english: 'The northern lights offered an ephemeral display of rare intensity.'
    }
  },

  // Level 5: Advanced Mastery
  {
    id: 'fr_5_1',
    languageId: 'fr',
    level: 5,
    category: 'Literary Nuance',
    prompt: "What does 'la nostalgie d’un temps non vécu' or 'anémia' relate to?",
    targetWord: 'la mélancolie',
    phonetic: '[lah may-lahn-koh-LEE]',
    options: ['Melancholy / reflective wistfulness', 'Uncontrollable rage', 'Sudden joy', 'Physical fatigue'],
    correctIndex: 0,
    explanation: "'La mélancolie' occupies a central role in French romantic literature, denoting sweet, contemplative sadness.",
    exampleSentence: {
      foreign: 'Une douce mélancolie enveloppait le vieux château au crépuscule.',
      english: 'A gentle melancholy enveloped the old castle at dusk.'
    }
  },
  {
    id: 'fr_5_2',
    languageId: 'fr',
    level: 5,
    category: 'Native Idioms',
    prompt: "If someone says 'tirer des plans sur la comète', what are they doing?",
    targetWord: 'tirer des plans sur la comète',
    phonetic: '[tee-RAY day plahn syoor lah koh-MET]',
    options: ['Studying astronomy', 'Making unrealistic or premature plans', 'Shooting fireworks', 'Analyzing financial data'],
    correctIndex: 1,
    explanation: "Literally 'drawing plans on a comet', meaning building castles in the air or counting chickens before they hatch.",
    exampleSentence: {
      foreign: 'Attendons les résultats officiels avant de tirer des plans sur la comète.',
      english: 'Let us await the official results before counting our chickens.'
    }
  },
  {
    id: 'fr_5_3',
    languageId: 'fr',
    level: 5,
    category: 'Intellectual Nuance',
    prompt: "What does 'un esprit d’escalier' mean?",
    targetWord: 'l’esprit d’escalier',
    phonetic: '[leh-spree dess-kah-LYAY]',
    options: ['Architectural talent', 'Thinking of the perfect witty comeback too late', 'Claustrophobia in staircases', 'Rapid decision making'],
    correctIndex: 1,
    explanation: "Coined by philosopher Denis Diderot: thinking of the ideal retort only after leaving the room and walking down the staircase.",
    exampleSentence: {
      foreign: 'Victime de l’esprit d’escalier, j’ai trouvé la réplique idéale dix minutes trop tard.',
      english: 'A victim of staircase wit, I came up with the perfect retort ten minutes too late.'
    }
  },
  {
    id: 'fr_5_4',
    languageId: 'fr',
    level: 5,
    category: 'Philosophical Nuance',
    prompt: "What does 'la quintessence' mean?",
    targetWord: 'la quintessence',
    phonetic: '[lah kan-teh-SAHNS]',
    options: ['The purest and most concentrated essence', 'A numerical fifth fraction', 'A sudden paradox', 'An ancient myth'],
    correctIndex: 0,
    explanation: "Historically the 'fifth element' in alchemy, now meaning the ultimate, most refined embodiment of a quality.",
    exampleSentence: {
      foreign: 'Cette symphonie représente la quintessence du romantisme musical.',
      english: 'This symphony represents the quintessence of musical romanticism.'
    }
  },
  {
    id: 'fr_5_5',
    languageId: 'fr',
    level: 5,
    category: 'Advanced Vocabulary',
    prompt: "What does the verb 'édulcorer' signify?",
    targetWord: 'édulcorer',
    phonetic: '[ay-dool-koh-RAY]',
    options: ['To tone down / sugarcoat / water down', 'To intensify', 'To legally forbid', 'To clarify logically'],
    correctIndex: 0,
    explanation: "Literally to sweeten, figuratively to soften, tone down, or censor unpleasant truths.",
    exampleSentence: {
      foreign: 'Le rapport a été édulcoré pour ne pas froisser la direction.',
      english: 'The report was toned down so as not to offend executive management.'
    }
  },

  // ===================== JAPANESE (ja) =====================
  // Level 1: Beginner
  {
    id: 'ja_1_1',
    languageId: 'ja',
    level: 1,
    category: 'Greetings',
    prompt: "What does 'ありがとう' (Arigatou) mean?",
    targetWord: 'ありがとう (Arigatou)',
    phonetic: '[ah-ree-GAH-toh]',
    options: ['Goodbye', 'Thank you', 'Excuse me', 'Good morning'],
    correctIndex: 1,
    explanation: "'Arigatou' is 'thank you'. For formal gratitude, add 'gozaimasu' (Arigatou gozaimasu).",
    exampleSentence: {
      foreign: '手伝ってくれてありがとうございます。',
      english: 'Thank you very much for helping me.'
    }
  },
  {
    id: 'ja_1_2',
    languageId: 'ja',
    level: 1,
    category: 'Politeness & Apology',
    prompt: "What does 'すみません' (Sumimasen) mean?",
    targetWord: 'すみません (Sumimasen)',
    phonetic: '[soo-mee-mah-SEN]',
    options: ['Excuse me / I am sorry', 'See you tomorrow', 'You are welcome', 'Congratulations'],
    correctIndex: 0,
    explanation: "'Sumimasen' is a versatile phrase used to apologize, get someone's attention (e.g. calling a waiter), or show gratitude.",
    exampleSentence: {
      foreign: 'すみません、駅はどこですか？',
      english: 'Excuse me, where is the station?'
    }
  },
  {
    id: 'ja_1_3',
    languageId: 'ja',
    level: 1,
    category: 'Core Nouns',
    prompt: "What does '水' (Mizu) mean?",
    targetWord: '水 (Mizu)',
    phonetic: '[mee-ZOO]',
    options: ['Tea', 'Rice', 'Water', 'Bread'],
    correctIndex: 2,
    explanation: "'Mizu' (水) specifically means cold or ambient water. Hot water for tea or baths is called 'o-yu' (お湯).",
    exampleSentence: {
      foreign: 'お水を一杯お願いします。',
      english: 'A glass of water, please.'
    }
  },
  {
    id: 'ja_1_4',
    languageId: 'ja',
    level: 1,
    category: 'Nouns & Nature',
    prompt: "What does '猫' (Neko) mean?",
    targetWord: '猫 (Neko)',
    phonetic: '[NEH-koh]',
    options: ['Dog', 'Cat', 'Bird', 'Fish'],
    correctIndex: 1,
    explanation: "'Neko' (猫) is cat. 'Inu' (犬) is dog, 'tori' (鳥) is bird, and 'sakana' (魚) is fish.",
    exampleSentence: {
      foreign: '庭に白い猫がいます。',
      english: 'There is a white cat in the garden.'
    }
  },
  {
    id: 'ja_1_5',
    languageId: 'ja',
    level: 1,
    category: 'Numbers',
    prompt: "Which number is '三' (San)?",
    targetWord: '三 (San)',
    phonetic: '[SAHN]',
    options: ['One', 'Two', 'Three', 'Five'],
    correctIndex: 2,
    explanation: "'Ichi' (一) is 1, 'ni' (二) is 2, 'san' (三) is 3, 'yon/shi' (四) is 4, and 'go' (五) is 5.",
    exampleSentence: {
      foreign: 'リンゴを三個買いました。',
      english: 'I bought three apples.'
    }
  },

  // Level 2: Elementary
  {
    id: 'ja_2_1',
    languageId: 'ja',
    level: 2,
    category: 'Food & Dining',
    prompt: "What phrase do Japanese people say before eating?",
    targetWord: 'いただきます (Itadakimasu)',
    phonetic: '[ee-tah-dah-KEE-mahs]',
    options: ['Gochisousama', 'Itadakimasu', 'Okaeri', 'Tadaima'],
    correctIndex: 1,
    explanation: "'Itadakimasu' expresses humble gratitude to the ingredients, farmers, and cook before starting a meal.",
    exampleSentence: {
      foreign: '手を合わせて「いただきます」と言いました。',
      english: 'Putting hands together, we said "Itadakimasu".'
    }
  },
  {
    id: 'ja_2_2',
    languageId: 'ja',
    level: 2,
    category: 'Places & Transit',
    prompt: "What does '駅' (Eki) signify?",
    targetWord: '駅 (Eki)',
    phonetic: '[EH-kee]',
    options: ['Airport', 'Train station', 'Hospital', 'Library'],
    correctIndex: 1,
    explanation: "'Eki' (駅) is train station. 'Kūkō' (空港) is airport, and 'toshokan' (図書館) is library.",
    exampleSentence: {
      foreign: '東京駅で友達と待ち合わせをしました。',
      english: 'I met with my friend at Tokyo Station.'
    }
  },
  {
    id: 'ja_2_3',
    languageId: 'ja',
    level: 2,
    category: 'Daily Verbs',
    prompt: "What does '食べる' (Taberu) mean?",
    targetWord: '食べる (Taberu)',
    phonetic: '[tah-BEH-roo]',
    options: ['To drink', 'To eat', 'To buy', 'To walk'],
    correctIndex: 1,
    explanation: "'Taberu' (食べる) is an ichidan verb meaning to eat. Polite form is 'tabemasu'. 'Nomu' (飲む) is to drink.",
    exampleSentence: {
      foreign: '昼休みにラーメンを食べました。',
      english: 'I ate ramen during lunch break.'
    }
  },
  {
    id: 'ja_2_4',
    languageId: 'ja',
    level: 2,
    category: 'Time',
    prompt: "What time is '今日' (Kyou)?",
    targetWord: '今日 (Kyou)',
    phonetic: '[KYOH]',
    options: ['Yesterday', 'Today', 'Tomorrow', 'Next week'],
    correctIndex: 1,
    explanation: "'Kyou' (今日) is today. 'Kinou' (昨日) is yesterday, and 'ashita' (明日) is tomorrow.",
    exampleSentence: {
      foreign: '今日は天気がとてもいいです。',
      english: 'The weather is very nice today.'
    }
  },
  {
    id: 'ja_2_5',
    languageId: 'ja',
    level: 2,
    category: 'Adjectives',
    prompt: "What does '美味しい' (Oishii) mean?",
    targetWord: '美味しい (Oishii)',
    phonetic: '[oh-ee-SHEE]',
    options: ['Expensive', 'Delicious / tasty', 'Spicy', 'Cold'],
    correctIndex: 1,
    explanation: "'Oishii' (美味しい) is the standard adjective for delicious or tasty.",
    exampleSentence: {
      foreign: 'この抹茶アイスはとても美味しいですね。',
      english: 'This matcha ice cream is very delicious, isn’t it?'
    }
  },

  // Level 3: Intermediate
  {
    id: 'ja_3_1',
    languageId: 'ja',
    level: 3,
    category: 'Travel & Convenience',
    prompt: "What is '切符' (Kippu)?",
    targetWord: '切符 (Kippu)',
    phonetic: '[KIP-poo]',
    options: ['Suitcase', 'Ticket', 'Passport', 'Souvenir'],
    correctIndex: 1,
    explanation: "'Kippu' (切符) is a transport ticket (for trains, ferries, etc.).",
    exampleSentence: {
      foreign: '新幹線の指定席切符を予約しました。',
      english: 'I reserved a bullet train reserved-seat ticket.'
    }
  },
  {
    id: 'ja_3_2',
    languageId: 'ja',
    level: 3,
    category: 'Daily Culture',
    prompt: "What does 'お疲れ様' (Otsukaresama) convey?",
    targetWord: 'お疲れ様 (Otsukaresama)',
    phonetic: '[oh-tsoo-kah-reh-SAH-mah]',
    options: ['Congratulations on your marriage', 'Thank you for your hard work / great effort', 'Welcome to our home', 'Good luck on the exam'],
    correctIndex: 1,
    explanation: "A quintessential Japanese workplace and social phrase acknowledging mutual hard work at the end of a shift or meeting.",
    exampleSentence: {
      foreign: '今日も一日お疲れ様でした！',
      english: 'Thank you for your hard work today!'
    }
  },
  {
    id: 'ja_3_3',
    languageId: 'ja',
    level: 3,
    category: 'Feelings & Health',
    prompt: "What does '懐かしい' (Natsukashii) mean?",
    targetWord: '懐かしい (Natsukashii)',
    phonetic: '[nah-tsoo-kah-SHEE]',
    options: ['Boring', 'Nostalgic / fondly remembered', 'Frightening', 'Complicated'],
    correctIndex: 1,
    explanation: "'Natsukashii' describes warm nostalgia brought on by a familiar smell, melody, place, or childhood memory.",
    exampleSentence: {
      foreign: 'この童謡を聴くと、子供の頃が懐かしくなります。',
      english: 'Listening to this nursery song brings back fond nostalgia of childhood.'
    }
  },
  {
    id: 'ja_3_4',
    languageId: 'ja',
    level: 3,
    category: 'Society & Nature',
    prompt: "What is '四季' (Shiki)?",
    targetWord: '四季 (Shiki)',
    phonetic: '[SHEE-kee]',
    options: ['The four seasons', 'The four cardinal directions', 'The four instruments', 'The four elements'],
    correctIndex: 0,
    explanation: "'Shiki' (四季) refers to the four distinct seasons (haru, natsu, aki, fuyu) deeply celebrated in Japanese aesthetics.",
    exampleSentence: {
      foreign: '日本の四季折々の風景はとても魅力的です。',
      english: 'Japan’s seasonal scenery across the four seasons is very charming.'
    }
  },
  {
    id: 'ja_3_5',
    languageId: 'ja',
    level: 3,
    category: 'Communication',
    prompt: "What does '遠慮' (Enryo) mean?",
    targetWord: '遠慮 (Enryo)',
    phonetic: '[en-RYOH]',
    options: ['Curiosity', 'Restraint / hesitation / holding back out of politeness', 'Anger', 'Selfishness'],
    correctIndex: 1,
    explanation: "'Enryo' (遠慮) is considerate social reserve: refraining or hesitating to avoid inconveniencing others.",
    exampleSentence: {
      foreign: 'どうぞ遠慮なくお召し上がりください。',
      english: 'Please do not hesitate and help yourself (to the food).'
    }
  },

  // Level 4: Upper-Intermediate
  {
    id: 'ja_4_1',
    languageId: 'ja',
    level: 4,
    category: 'Cultural Philosophy',
    prompt: "What concept does '木漏れ日' (Komorebi) describe?",
    targetWord: '木漏れ日 (Komorebi)',
    phonetic: '[koh-moh-reh-BEE]',
    options: ['Falling autumn leaves', 'Sunlight filtering through tree leaves', 'A sudden mountain rain shower', 'Morning dew on moss'],
    correctIndex: 1,
    explanation: "'Komorebi' (木漏れ日) captures the poetic visual of sunlight dappling and filtering through the canopy of trees.",
    exampleSentence: {
      foreign: '静かな森の中を歩きながら、美しい木漏れ日を楽しみました。',
      english: 'While walking in the quiet forest, I enjoyed the beautiful dappled sunlight.'
    }
  },
  {
    id: 'ja_4_2',
    languageId: 'ja',
    level: 4,
    category: 'Cultural Aesthetics',
    prompt: "What is '侘び寂び' (Wabi-Sabi)?",
    targetWord: '侘び寂び (Wabi-Sabi)',
    phonetic: '[wah-bee SAH-bee]',
    options: ['The pursuit of flawless symmetry', 'Finding beauty in impermanence and imperfection', 'Technological futurism', 'Extravagant gold decoration'],
    correctIndex: 1,
    explanation: "'Wabi-Sabi' is the traditional worldview centered on the acceptance of transience and finding grace in aged, weathered simplicity.",
    exampleSentence: {
      foreign: 'ひび割れた陶器を修復する金継ぎには、侘び寂びの精神が宿っています。',
      english: 'Kintsugi, repairing cracked ceramics with gold, embodies the spirit of wabi-sabi.'
    }
  },
  {
    id: 'ja_4_3',
    languageId: 'ja',
    level: 4,
    category: 'Yojijukugo (4-kanji idioms)',
    prompt: "What does '一期一会' (Ichigo Ichie) mean?",
    targetWord: '一期一会 (Ichigo Ichie)',
    phonetic: '[ee-chee-goh ee-chee-EH]',
    options: ['Once in a lifetime encounter / treasure every meeting', 'Rome was not built in a day', 'Survival of the fittest', 'Action speaks louder than words'],
    correctIndex: 0,
    explanation: "Originating from tea ceremony master Sen no Rikyu, reminding practitioners to cherish every encounter as unique and unrepeatable.",
    exampleSentence: {
      foreign: '旅先での出会いはまさに一期一会ですね。',
      english: 'Encounters while traveling are truly once-in-a-lifetime treasures.'
    }
  },
  {
    id: 'ja_4_4',
    languageId: 'ja',
    level: 4,
    category: 'Nuance',
    prompt: "What does '本音' (Honne) refer to in contrast with '建前' (Tatemae)?",
    targetWord: '本音 (Honne)',
    phonetic: '[hohn-NEH]',
    options: ['Public formal stance', 'True personal feelings / genuine inner thoughts', 'Official business statement', 'Written documentation'],
    correctIndex: 1,
    explanation: "'Honne' (本音) is a person's real, unfiltered thoughts and feelings, whereas 'tatemae' (建前) is the public facade maintained for social harmony.",
    exampleSentence: {
      foreign: '親しい友人同士だからこそ、本音で話し合うことができます。',
      english: 'Precisely because we are close friends, we can speak from the heart.'
    }
  },
  {
    id: 'ja_4_5',
    languageId: 'ja',
    level: 4,
    category: 'Advanced Kanji & Idioms',
    prompt: "What does '十人十色' (Jūnin Toiro) mean?",
    targetWord: '十人十色 (Jūnin Toiro)',
    phonetic: '[joo-neen toh-EE-roh]',
    options: ['Ten people, ten colors / to each their own', 'A rainbow after rainfall', 'Working as ten unified minds', 'Crowded commuter train'],
    correctIndex: 0,
    explanation: "Literally 'ten people, ten colors', expressing that everyone has distinct tastes, values, and perspectives.",
    exampleSentence: {
      foreign: '趣味や好みが異なるのは当然で、まさに十人十色です。',
      english: 'It is natural for hobbies and tastes to differ; to each their own.'
    }
  },

  // Level 5: Advanced Mastery
  {
    id: 'ja_5_1',
    languageId: 'ja',
    level: 5,
    category: 'Advanced Yojijukugo',
    prompt: "What does '臨機応変' (Rinki Ōhen) describe?",
    targetWord: '臨機応変 (Rinki Ōhen)',
    phonetic: '[reen-kee OH-hen]',
    options: ['Adapting flexibly to changing circumstances', 'Rigid adherence to protocols', 'Procrastinating until the last minute', 'Sudden burst of anger'],
    correctIndex: 0,
    explanation: "'Rinki Ōhen' represents adaptability: adjusting actions dynamically according to the requirements of the situation.",
    exampleSentence: {
      foreign: '不測の事態にも臨機応変に対応することが求められます。',
      english: 'One is required to respond flexibly and adaptively to unforeseen events.'
    }
  },
  {
    id: 'ja_5_2',
    languageId: 'ja',
    level: 5,
    category: 'Aesthetic Concepts',
    prompt: "What does '幽玄' (Yūgen) mean in traditional Japanese aesthetics?",
    targetWord: '幽玄 (Yūgen)',
    phonetic: '[YOO-ghen]',
    options: ['Loud celebration', 'Subtle, profound mystery and hidden grace', 'Mathematical exactitude', 'Modern minimalism'],
    correctIndex: 1,
    explanation: "'Yūgen' refers to a profound grace and subtle mystery beyond what can be verbally expressed or overtly depicted.",
    exampleSentence: {
      foreign: '能楽の舞台には、幽玄の美が漂っています。',
      english: 'The Noh theater stage radiates a subtle, profound mysterious beauty.'
    }
  },
  {
    id: 'ja_5_3',
    languageId: 'ja',
    level: 5,
    category: 'Advanced Proverb',
    prompt: "What is the meaning of '猿も木から落ちる' (Saru mo ki kara ochiru)?",
    targetWord: '猿も木から落ちる',
    phonetic: '[sah-roo moh kee kah-rah oh-CHEE-roo]',
    options: ['Even monkeys fall from trees / Even experts make mistakes', 'Animals should be protected', 'Do not climb trees in autumn', 'Climb higher for a better view'],
    correctIndex: 0,
    explanation: "Equivalent to 'Even Homer nods'; reminds us that even someone exceptionally skilled in a craft can occasionally slip up.",
    exampleSentence: {
      foreign: 'ベテランのシェフでも焦がすことがある。猿も木から落ちるだね。',
      english: 'Even a veteran chef burns food occasionally. Even monkeys fall from trees.'
    }
  },
  {
    id: 'ja_5_4',
    languageId: 'ja',
    level: 5,
    category: 'Philosophical Verbs',
    prompt: "What does '研鑽を積む' (Kensan o tsumu) mean?",
    targetWord: '研鑽を積む (Kensan o tsumu)',
    phonetic: '[ken-SAHN oh TSOO-moo]',
    options: ['To accumulate debt', 'To diligently study and polish one’s skills', 'To build stone walls', 'To negotiate contracts'],
    correctIndex: 1,
    explanation: "'Kensan' literally means grinding/polishing knowledge through dedicated training, study, or artistic discipline.",
    exampleSentence: {
      foreign: '彼は世界大会を目指して日々研鑽を積んでいます。',
      english: 'He is diligently honing his skills every day aiming for the world championship.'
    }
  },
  {
    id: 'ja_5_5',
    languageId: 'ja',
    level: 5,
    category: 'Idiomatic Nuance',
    prompt: "What does '杞憂' (Kiyū) mean?",
    targetWord: '杞憂 (Kiyū)',
    phonetic: '[kee-YOO]',
    options: ['Groundless worry / unnecessary anxiety', 'Genuine catastrophe', 'Deep joy', 'Sudden flash of intuition'],
    correctIndex: 0,
    explanation: "Originating from an ancient Chinese parable of a man from the State of Qi who worried the sky might fall down.",
    exampleSentence: {
      foreign: '心配していたトラブルも起きず、まったくの杞憂に終わりました。',
      english: 'The trouble we worried about never happened, ending as completely baseless anxiety.'
    }
  },

  // ===================== GERMAN (de) =====================
  // Level 1: Beginner
  {
    id: 'de_1_1',
    languageId: 'de',
    level: 1,
    category: 'Greetings',
    prompt: "What does 'Guten Tag' mean?",
    targetWord: 'Guten Tag',
    phonetic: '[GOO-ten TAHK]',
    options: ['Good evening', 'Good day / Hello', 'Goodbye', 'Good morning'],
    correctIndex: 1,
    explanation: "'Guten Tag' is the standard polite German greeting during daytime hours.",
    exampleSentence: {
      foreign: 'Guten Tag, wie kann ich Ihnen helfen?',
      english: 'Good day, how can I help you?'
    }
  },
  {
    id: 'de_1_2',
    languageId: 'de',
    level: 1,
    category: 'Politeness',
    prompt: "Which word means 'Thank you' in German?",
    targetWord: 'Danke',
    phonetic: '[DAHN-kuh]',
    options: ['Bitte', 'Danke', 'Hallo', 'Tschüss'],
    correctIndex: 1,
    explanation: "'Danke' means thanks. 'Danke schön' means thank you very much, while 'Bitte' means please / you are welcome.",
    exampleSentence: {
      foreign: 'Vielen Dank für Ihre Hilfe.',
      english: 'Thank you very much for your help.'
    }
  },
  {
    id: 'de_1_3',
    languageId: 'de',
    level: 1,
    category: 'Core Nouns',
    prompt: "What is 'das Buch' in English?",
    targetWord: 'das Buch',
    phonetic: '[dahs BOOKH]',
    options: ['The pen', 'The book', 'The table', 'The chair'],
    correctIndex: 1,
    explanation: "'Das Buch' is a neuter noun meaning the book. Plural is 'die Bücher'.",
    exampleSentence: {
      foreign: 'Ich lese gerade ein spannendes Buch.',
      english: 'I am currently reading an exciting book.'
    }
  },
  {
    id: 'de_1_4',
    languageId: 'de',
    level: 1,
    category: 'Numbers',
    prompt: "Which number corresponds to 'fünf'?",
    targetWord: 'fünf',
    phonetic: '[FOONF]',
    options: ['Four', 'Five', 'Six', 'Eight'],
    correctIndex: 1,
    explanation: "'Eins' (1), 'zwei' (2), 'drei' (3), 'vier' (4), 'fünf' (5).",
    exampleSentence: {
      foreign: 'In fünf Minuten fängt der Film an.',
      english: 'The movie starts in five minutes.'
    }
  },
  {
    id: 'de_1_5',
    languageId: 'de',
    level: 1,
    category: 'Core Nouns',
    prompt: "What does 'das Wasser' mean?",
    targetWord: 'das Wasser',
    phonetic: '[dahs VAH-ser]',
    options: ['The milk', 'The water', 'The juice', 'The beer'],
    correctIndex: 1,
    explanation: "'Das Wasser' is water. Sparkling mineral water in Germany is commonly called 'Sprudelwasser' or 'Mineralwasser mit Kohlensäure'.",
    exampleSentence: {
      foreign: 'Ein Glas stilles Wasser, bitte.',
      english: 'A glass of still water, please.'
    }
  },

  // Level 2: Elementary
  {
    id: 'de_2_1',
    languageId: 'de',
    level: 2,
    category: 'Food & Dining',
    prompt: "What is 'das Frühstück' in Germany?",
    targetWord: 'das Frühstück',
    phonetic: '[dahs FREW-shtook]',
    options: ['Dinner', 'Breakfast', 'Dessert', 'Midnight snack'],
    correctIndex: 1,
    explanation: "'Früh' (early) + 'Stück' (piece/morsel), meaning the early morning meal.",
    exampleSentence: {
      foreign: 'Zum Frühstück esse ich Brötchen mit Käse.',
      english: 'For breakfast I eat bread rolls with cheese.'
    }
  },
  {
    id: 'de_2_2',
    languageId: 'de',
    level: 2,
    category: 'Places & Transit',
    prompt: "What does 'der Bahnhof' refer to?",
    targetWord: 'der Bahnhof',
    phonetic: '[dair BAHN-hohf]',
    options: ['The bus stop', 'The railway station', 'The city hall', 'The airport'],
    correctIndex: 1,
    explanation: "'Bahn' (track/rail) + 'Hof' (court/yard). The main central station is 'der Hauptbahnhof' (Hbf).",
    exampleSentence: {
      foreign: 'Wir treffen uns um 14 Uhr am Hauptbahnhof.',
      english: 'We meet at 2 PM at the central railway station.'
    }
  },
  {
    id: 'de_2_3',
    languageId: 'de',
    level: 2,
    category: 'Daily Routine',
    prompt: "What does the separable verb 'einkaufen' mean?",
    targetWord: 'einkaufen',
    phonetic: '[AYN-kow-fen]',
    options: ['To go shopping', 'To sell goods', 'To cook meals', 'To clean the house'],
    correctIndex: 0,
    explanation: "A separable prefix verb: 'kaufen' (to buy) + 'ein-' (in). Sentence: 'Ich kaufe im Supermarkt ein.'",
    exampleSentence: {
      foreign: 'Samstags gehe ich immer frisches Gemüse einkaufen.',
      english: 'On Saturdays I always go shopping for fresh vegetables.'
    }
  },
  {
    id: 'de_2_4',
    languageId: 'de',
    level: 2,
    category: 'Time & Calendar',
    prompt: "Which day is 'Freitag'?",
    targetWord: 'Freitag',
    phonetic: '[FRY-tahk]',
    options: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
    correctIndex: 1,
    explanation: "'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'.",
    exampleSentence: {
      foreign: 'Am Freitagabend gehen wir ins Kino.',
      english: 'On Friday evening we are going to the cinema.'
    }
  },
  {
    id: 'de_2_5',
    languageId: 'de',
    level: 2,
    category: 'Adjectives',
    prompt: "What is the meaning of 'gemütlich'?",
    targetWord: 'gemütlich',
    phonetic: '[guh-MEWT-likh]',
    options: ['Cold and industrial', 'Cozy / comfortable / homelike', 'Noisy and crowded', 'Extremely difficult'],
    correctIndex: 1,
    explanation: "A famous untranslatable German concept of warm comfort, coziness, and pleasant unhurried atmosphere.",
    exampleSentence: {
      foreign: 'Das Café hat eine sehr gemütliche Atmosphäre.',
      english: 'The café has a very cozy atmosphere.'
    }
  },

  // Level 3: Intermediate
  {
    id: 'de_3_1',
    languageId: 'de',
    level: 3,
    category: 'Travel & Transport',
    prompt: "What does 'die Verspätung' mean on a train display?",
    targetWord: 'die Verspätung',
    phonetic: '[dee fehr-SHPAY-toong]',
    options: ['Cancellation', 'Delay', 'Platform change', 'Express arrival'],
    correctIndex: 1,
    explanation: "'Verspätung' means delay (from 'spät', late). '10 Minuten Verspätung' means a 10-minute delay.",
    exampleSentence: {
      foreign: 'Der ICE hat leider zwanzig Minuten Verspätung.',
      english: 'Unfortunately, the ICE train has a twenty-minute delay.'
    }
  },
  {
    id: 'de_3_2',
    languageId: 'de',
    level: 3,
    category: 'Feelings & Psychology',
    prompt: "What is 'Fernweh' in German?",
    targetWord: 'das Fernweh',
    phonetic: '[dahs FEHRN-vay]',
    options: ['Homesickness', 'Wanderlust / longing to travel far away', 'Fear of heights', 'Headache'],
    correctIndex: 1,
    explanation: "The direct opposite of 'Heimweh' (homesickness): 'Fern' (distant) + 'Weh' (pain/longing) — an ache to see distant places.",
    exampleSentence: {
      foreign: 'Beim Betrachten der alten Weltkarte packte ihn das Fernweh.',
      english: 'Looking at the old world map, wanderlust seized him.'
    }
  },
  {
    id: 'de_3_3',
    languageId: 'de',
    level: 3,
    category: 'Work & Professional',
    prompt: "What does 'die Besprechung' signify in an office?",
    targetWord: 'die Besprechung',
    phonetic: '[dee buh-SHPREH-khoong]',
    options: ['Lunch break', 'Meeting / conference', 'Paycheck receipt', 'Job interview test'],
    correctIndex: 1,
    explanation: "From 'besprechen' (to discuss): a work meeting or team consultation.",
    exampleSentence: {
      foreign: 'Wir haben morgen eine wichtige Besprechung mit dem Kunden.',
      english: 'We have an important meeting tomorrow with the client.'
    }
  },
  {
    id: 'de_3_4',
    languageId: 'de',
    level: 3,
    category: 'Social Interaction',
    prompt: "What does 'Mach’s gut!' mean as a goodbye?",
    targetWord: "Mach’s gut!",
    phonetic: '[mahkhs GOOT]',
    options: ['Do it again!', 'Take care / All the best!', 'Hurry up!', 'Watch out!'],
    correctIndex: 1,
    explanation: "A warm, informal farewell equivalent to 'Take care!' The typical response is 'Du auch!' (You too!).",
    exampleSentence: {
      foreign: 'Schönes Wochenende und mach’s gut!',
      english: 'Have a nice weekend and take care!'
    }
  },
  {
    id: 'de_3_5',
    languageId: 'de',
    level: 3,
    category: 'Conjunctions',
    prompt: "What does 'obwohl' mean in a subordinate clause?",
    targetWord: 'obwohl',
    phonetic: '[ohp-VOHL]',
    options: ['Because', 'Although / even though', 'Whenever', 'Therefore'],
    correctIndex: 1,
    explanation: "'Obwohl' introduces a concessive clause and sends the conjugated verb to the very end of the sentence.",
    exampleSentence: {
      foreign: 'Wir gingen spazieren, obwohl es stark regnete.',
      english: 'We went for a walk although it was raining hard.'
    }
  },

  // Level 4: Upper-Intermediate
  {
    id: 'de_4_1',
    languageId: 'de',
    level: 4,
    category: 'Compound Words',
    prompt: "What does 'Schadenfreude' mean?",
    targetWord: 'die Schadenfreude',
    phonetic: '[dee SHAH-den-froy-duh]',
    options: ['Sympathy for a stranger', 'Pleasure derived from another’s misfortune', 'Regret over an error', 'Excitement for a holiday'],
    correctIndex: 1,
    explanation: "'Schaden' (damage/harm) + 'Freude' (joy): finding secret satisfaction or amusement in another's mishap.",
    exampleSentence: {
      foreign: 'Er konnte seine Schadenfreude kaum verbergen, als der Rivale verlor.',
      english: 'He could barely conceal his schadenfreude when his rival lost.'
    }
  },
  {
    id: 'de_4_2',
    languageId: 'de',
    level: 4,
    category: 'Idioms',
    prompt: "If someone says 'Ich verstehe nur Bahnhof', what do they mean?",
    targetWord: 'nur Bahnhof verstehen',
    phonetic: '[noor BAHN-hohf fehr-SHTAY-en]',
    options: ['They are buying a train ticket', 'It is all Greek to me / I understand nothing', 'The train is loud', 'They want to go home'],
    correctIndex: 1,
    explanation: "A famous colloquial German idiom meaning 'I don't understand a single word of what you are saying'.",
    exampleSentence: {
      foreign: 'Bei dieser technischen Erklärung verstehe ich nur Bahnhof.',
      english: 'With this technical explanation, it is all Greek to me.'
    }
  },
  {
    id: 'de_4_3',
    languageId: 'de',
    level: 4,
    category: 'Cultural Psychology',
    prompt: "What is 'der Feierabend'?",
    targetWord: 'der Feierabend',
    phonetic: '[dair FY-er-ah-bent]',
    options: ['A festive public holiday', 'The end of the working day / time to relax', 'New Year’s Eve celebration', 'Weekend barbecue'],
    correctIndex: 1,
    explanation: "The cherished transition marking the completion of work hours: 'Schönen Feierabend!' means have a great evening after work.",
    exampleSentence: {
      foreign: 'Um 17 Uhr mache ich heute Feierabend.',
      english: 'At 5 PM today, I am clocking off for the evening.'
    }
  },
  {
    id: 'de_4_4',
    languageId: 'de',
    level: 4,
    category: 'Nuance & Compound Nouns',
    prompt: "What does 'das Fingerspitzengefühl' describe?",
    targetWord: 'das Fingerspitzengefühl',
    phonetic: '[dahs FING-er-spit-sen-guh-fewl]',
    options: ['Tingling fingers in winter', 'Tact, sensitivity, and intuitive diplomacy', 'Typing speed', 'Medical surgery expertise'],
    correctIndex: 1,
    explanation: "Literally 'fingertip feeling': having exceptional finesse, intuition, and diplomatic tact when dealing with sensitive issues.",
    exampleSentence: {
      foreign: 'Diese heikle Verhandlung verlangt großes Fingerspitzengefühl.',
      english: 'This delicate negotiation demands great tact and sensitivity.'
    }
  },
  {
    id: 'de_4_5',
    languageId: 'de',
    level: 4,
    category: 'Advanced Compound Nouns',
    prompt: "What does 'der Weltschmerz' mean?",
    targetWord: 'der Weltschmerz',
    phonetic: '[dair VELT-shmairts]',
    options: ['Global warming', 'World-weariness / existential melancholy', 'International diplomacy', 'Geographical knowledge'],
    correctIndex: 1,
    explanation: "Coined by romantic author Jean Paul: a deep, melancholy feeling that reality will never satisfy the demands of the spirit.",
    exampleSentence: {
      foreign: 'Viele Dichter der Romantik litten unter tiefem Weltschmerz.',
      english: 'Many romantic poets suffered from deep existential world-weariness.'
    }
  },

  // Level 5: Advanced Mastery
  {
    id: 'de_5_1',
    languageId: 'de',
    level: 5,
    category: 'Advanced Idioms',
    prompt: "What does 'jemandem die Daumen drücken' mean?",
    targetWord: 'die Daumen drücken',
    phonetic: '[dee DOW-men DREW-ken]',
    options: ['To put physical pressure on someone', 'To cross fingers for someone / wish good luck', 'To challenge to arm wrestling', 'To scold someone harshly'],
    correctIndex: 1,
    explanation: "Literally 'to press thumbs', the German equivalent of crossing fingers to wish someone success.",
    exampleSentence: {
      foreign: 'Ich drücke dir für deine Prüfung morgen ganz fest die Daumen!',
      english: 'I will keep my fingers firmly crossed for your exam tomorrow!'
    }
  },
  {
    id: 'de_5_2',
    languageId: 'de',
    level: 5,
    category: 'Philosophical Vocabulary',
    prompt: "What does 'die Vorahnung' mean?",
    targetWord: 'die Vorahnung',
    phonetic: '[dee FOHR-ah-noong]',
    options: ['Hindsight', 'Presentiment / foreboding intuition', 'Complete certainty', 'False accusation'],
    correctIndex: 1,
    explanation: "'Vorahnung' is an intuitive anticipation or gut feeling of what is about to happen before any concrete evidence appears.",
    exampleSentence: {
      foreign: 'Ich hatte eine dunkle Vorahnung, dass der Plan scheitern würde.',
      english: 'I had a dark foreboding intuition that the plan would fail.'
    }
  },
  {
    id: 'de_5_3',
    languageId: 'de',
    level: 5,
    category: 'Idiomatic Nuance',
    prompt: "What does 'Das ist mir Wurst' mean figuratively?",
    targetWord: 'Das ist mir Wurst',
    phonetic: '[dahs ist meer VOORST]',
    options: ['I want a sausage', 'It makes no difference to me / I do not care', 'It is very delicious', 'It is expired food'],
    correctIndex: 1,
    explanation: "A colloquial German expression meaning 'it's all the same to me' or 'I don't mind either way'.",
    exampleSentence: {
      foreign: 'Ob wir italienisch oder mexikanisch essen gehen, ist mir völlig Wurst.',
      english: 'Whether we go for Italian or Mexican food is completely all the same to me.'
    }
  },
  {
    id: 'de_5_4',
    languageId: 'de',
    level: 5,
    category: 'Linguistic Gems',
    prompt: "What does 'das Kopfkino' describe?",
    targetWord: 'das Kopfkino',
    phonetic: '[dahs KOHPF-kee-noh]',
    options: ['A headache', 'Vivid mental cinema / imagining scenarios in your mind', 'Virtual reality goggles', 'A film documentary'],
    correctIndex: 1,
    explanation: "'Kopf' (head) + 'Kino' (cinema): when your imagination starts playing out vivid, often absurd or dramatic mental scenes.",
    exampleSentence: {
      foreign: 'Als er die mysteriöse Nachricht las, begann sofort sein Kopfkino.',
      english: 'When he read the mysterious message, his imagination immediately started playing out scenes.'
    }
  },
  {
    id: 'de_5_5',
    languageId: 'de',
    level: 5,
    category: 'Mastery & Nuance',
    prompt: "What does 'unerschöpflich' mean in intellectual discourse?",
    targetWord: 'unerschöpflich',
    phonetic: '[oon-air-SHUHPF-likh]',
    options: ['Exhaustible and finite', 'Inexhaustible / boundless', 'Completely incomprehensible', 'Fragile and weak'],
    correctIndex: 1,
    explanation: "'Unerschöpflich' describes a source of inspiration, energy, or knowledge that never runs dry.",
    exampleSentence: {
      foreign: 'Goethes Werk ist eine unerschöpfliche Quelle der Inspiration.',
      english: 'Goethe’s body of work is an inexhaustible source of inspiration.'
    }
  },

  // ===================== ITALIAN (it) =====================
  // Level 1: Beginner
  {
    id: 'it_1_1',
    languageId: 'it',
    level: 1,
    category: 'Greetings',
    prompt: "What does 'Ciao' mean in Italian?",
    targetWord: 'Ciao',
    phonetic: '[CHOW]',
    options: ['Only Hello', 'Only Goodbye', 'Both Hello and Goodbye (informal)', 'Thank you'],
    correctIndex: 2,
    explanation: "'Ciao' is the classic informal greeting used both when meeting friends and when parting ways.",
    exampleSentence: {
      foreign: 'Ciao Marco, come stai oggi?',
      english: 'Hello Marco, how are you today?'
    }
  },
  {
    id: 'it_1_2',
    languageId: 'it',
    level: 1,
    category: 'Politeness',
    prompt: "How do you say 'Thank you very much' in Italian?",
    targetWord: 'Grazie mille',
    phonetic: '[GRAHT-syeh MEEL-leh]',
    options: ['Prego', 'Grazie mille', 'Scusa', 'Piacere'],
    correctIndex: 1,
    explanation: "Literally 'a thousand thanks', 'grazie mille' is the standard enthusiastic Italian expression of gratitude.",
    exampleSentence: {
      foreign: 'Grazie mille per il tuo prezioso aiuto!',
      english: 'A thousand thanks for your precious help!'
    }
  },
  {
    id: 'it_1_3',
    languageId: 'it',
    level: 1,
    category: 'Core Nouns',
    prompt: "What does 'il pane' mean?",
    targetWord: 'il pane',
    phonetic: '[eel PAH-neh]',
    options: ['The water', 'The bread', 'The cheese', 'The wine'],
    correctIndex: 1,
    explanation: "'Il pane' is bread. Freshly baked bread is a staple of every traditional Italian lunch and dinner table.",
    exampleSentence: {
      foreign: 'Il pane fresco di giornata profuma di buono.',
      english: 'The fresh bread of the day smells wonderful.'
    }
  },
  {
    id: 'it_1_4',
    languageId: 'it',
    level: 1,
    category: 'Numbers',
    prompt: "Which number is 'otto'?",
    targetWord: 'otto',
    phonetic: '[OHT-toh]',
    options: ['Six', 'Seven', 'Eight', 'Ten'],
    correctIndex: 2,
    explanation: "'Sei' (6), 'sette' (7), 'otto' (8), 'nove' (9), 'dieci' (10).",
    exampleSentence: {
      foreign: 'La cena sarà pronta alle otto.',
      english: 'Dinner will be ready at eight o’clock.'
    }
  },
  {
    id: 'it_1_5',
    languageId: 'it',
    level: 1,
    category: 'Core Nouns',
    prompt: "What does 'la luna' mean?",
    targetWord: 'la luna',
    phonetic: '[lah LOO-nah]',
    options: ['The sun', 'The moon', 'The star', 'The sky'],
    correctIndex: 1,
    explanation: "'La luna' is the moon. 'Il sole' is the sun, and 'le stelle' are stars.",
    exampleSentence: {
      foreign: 'Stanotte la luna piena illumina il mare.',
      english: 'Tonight the full moon illuminates the sea.'
    }
  },

  // Level 2: Elementary
  {
    id: 'it_2_1',
    languageId: 'it',
    level: 2,
    category: 'Food & Dining',
    prompt: "What is 'il conto' in an Italian restaurant?",
    targetWord: 'il conto',
    phonetic: '[eel KOHN-toh]',
    options: ['The menu', 'The bill / check', 'The chef’s special', 'The table reservation'],
    correctIndex: 1,
    explanation: "Ask: 'Il conto, per favore' to request the bill when you have finished dining.",
    exampleSentence: {
      foreign: 'Cameriere, ci porta il conto, per favore?',
      english: 'Waiter, could you bring us the bill, please?'
    }
  },
  {
    id: 'it_2_2',
    languageId: 'it',
    level: 2,
    category: 'Places & City',
    prompt: "What is 'la piazza' in Italian urban life?",
    targetWord: 'la piazza',
    phonetic: '[lah PYAHT-tsah]',
    options: ['The airport', 'The public square / town plaza', 'The subway station', 'The seaport dock'],
    correctIndex: 1,
    explanation: "'La piazza' is the beating heart of social life in Italian towns, where locals take an evening stroll and meet friends.",
    exampleSentence: {
      foreign: 'Ci vediamo in piazza alle sei per l’aperitivo.',
      english: 'We meet in the square at six for an aperitif.'
    }
  },
  {
    id: 'it_2_3',
    languageId: 'it',
    level: 2,
    category: 'Adjectives',
    prompt: "What does 'bellissimo' mean?",
    targetWord: 'bellissimo',
    phonetic: '[bel-LEES-see-moh]',
    options: ['Very small', 'Extremely beautiful / gorgeous', 'Terribly slow', 'Quite inexpensive'],
    correctIndex: 1,
    explanation: "The absolute superlative of 'bello' (beautiful) created by adding the suffix '-issimo'.",
    exampleSentence: {
      foreign: 'Il tramonto sulla costiera amalfitana è bellissimo.',
      english: 'The sunset over the Amalfi Coast is utterly gorgeous.'
    }
  },
  {
    id: 'it_2_4',
    languageId: 'it',
    level: 2,
    category: 'Daily Routine',
    prompt: "What does 'andare a letto' mean?",
    targetWord: 'andare a letto',
    phonetic: '[ahn-DAH-reh ah LET-toh]',
    options: ['To go to work', 'To go to bed', 'To read a letter', 'To set the table'],
    correctIndex: 1,
    explanation: "'Letto' is bed, so 'andare a letto' means to go to sleep or go to bed.",
    exampleSentence: {
      foreign: 'Sono stanco e vado a letto presto stasera.',
      english: 'I am tired and going to bed early tonight.'
    }
  },
  {
    id: 'it_2_5',
    languageId: 'it',
    level: 2,
    category: 'Time & Weather',
    prompt: "What does 'Che tempo fa?' ask?",
    targetWord: 'Che tempo fa?',
    phonetic: '[keh TEM-poh fah]',
    options: ['What time is it?', 'How is the weather?', 'How long have you waited?', 'Are you in a hurry?'],
    correctIndex: 1,
    explanation: "'Che tempo fa?' is the idiomatic Italian phrase to ask about current weather conditions.",
    exampleSentence: {
      foreign: 'Che tempo fa a Roma oggi? Fa caldo?',
      english: 'How is the weather in Rome today? Is it warm?'
    }
  },

  // Level 3: Intermediate
  {
    id: 'it_3_1',
    languageId: 'it',
    level: 3,
    category: 'Travel & Navigation',
    prompt: "What does 'il binario' mean at an Italian train station?",
    targetWord: 'il binario',
    phonetic: '[eel bee-NAH-ryoh]',
    options: ['Luggage locker', 'Platform / track', 'Ticket counter', 'Waiting room'],
    correctIndex: 1,
    explanation: "Train announcements will say: 'Il treno per Milano è in partenza dal binario 4' (departing from platform 4).",
    exampleSentence: {
      foreign: 'Il Frecciarossa per Firenze arriva al binario 3.',
      english: 'The high-speed train to Florence arrives at platform 3.'
    }
  },
  {
    id: 'it_3_2',
    languageId: 'it',
    level: 3,
    category: 'Culture & Routine',
    prompt: "What is 'la passeggiata' in Italian culture?",
    targetWord: 'la passeggiata',
    phonetic: '[lah pahs-sehj-JAH-tah]',
    options: ['A rigorous mountain hike', 'A leisurely evening stroll through town', 'A cooking marathon', 'A classical opera performance'],
    correctIndex: 1,
    explanation: "A cherished evening ritual where Italians dress up nicely and take an unhurried walk to see and be seen.",
    exampleSentence: {
      foreign: 'La domenica pomeriggio facciamo sempre una passeggiata sul lungomare.',
      english: 'On Sunday afternoons we always take a stroll along the promenade.'
    }
  },
  {
    id: 'it_3_3',
    languageId: 'it',
    level: 3,
    category: 'Emotions',
    prompt: "If someone is 'innamorato/a', what is their state?",
    targetWord: 'innamorato',
    phonetic: '[een-nah-moh-RAH-toh]',
    options: ['Furious', 'In love', 'Exhausted', 'Suspicious'],
    correctIndex: 1,
    explanation: "'Innamorato' means deeply in love, from 'amore' (love).",
    exampleSentence: {
      foreign: 'È perdutamente innamorato di quella ragazza.',
      english: 'He is hopelessly in love with that girl.'
    }
  },
  {
    id: 'it_3_4',
    languageId: 'it',
    level: 3,
    category: 'Expressions',
    prompt: "What does the conversational filler 'Magari!' mean?",
    targetWord: 'Magari!',
    phonetic: '[mah-GAH-ree]',
    options: ['Never!', 'I wish! / If only!', 'Perhaps later', 'What a disaster!'],
    correctIndex: 1,
    explanation: "'Magari!' expresses an ardent wish, equivalent to 'I wish that were true!' or 'If only!'.",
    exampleSentence: {
      foreign: '— Vinceremo la lotteria? — Magari!',
      english: '— Will we win the lottery? — If only!'
    }
  },
  {
    id: 'it_3_5',
    languageId: 'it',
    level: 3,
    category: 'Conjunctions',
    prompt: "What does 'tuttavia' mean in written Italian?",
    targetWord: 'tuttavia',
    phonetic: '[toot-tah-VEE-ah]',
    options: ['Furthermore', 'Nevertheless / however', 'Because', 'Immediately'],
    correctIndex: 1,
    explanation: "'Tuttavia' is an adversarial coordinator expressing contrast or concession.",
    exampleSentence: {
      foreign: 'Il percorso era impegnativo, tuttavia siamo arrivati alla vetta.',
      english: 'The route was challenging; nevertheless, we reached the summit.'
    }
  },

  // Level 4: Upper-Intermediate
  {
    id: 'it_4_1',
    languageId: 'it',
    level: 4,
    category: 'Cultural Philosophy',
    prompt: "What is 'il dolce far niente'?",
    targetWord: 'il dolce far niente',
    phonetic: '[eel DOHL-cheh fahr NYEN-teh]',
    options: ['A traditional dessert', 'The sweet art of doing nothing', 'A difficult task', 'A morning workout'],
    correctIndex: 1,
    explanation: "Literally 'the sweet doing nothing', celebrated in Italian life as the art of savoring restful, unhurried idle moments.",
    exampleSentence: {
      foreign: 'In vacanza abbiamo riscoperto il dolce far niente sotto il sole.',
      english: 'On vacation we rediscovered the sweet joy of doing nothing under the sun.'
    }
  },
  {
    id: 'it_4_2',
    languageId: 'it',
    level: 4,
    category: 'Idioms',
    prompt: "What does 'in bocca al lupo' wish to someone?",
    targetWord: 'in bocca al lupo',
    phonetic: '[een BOHK-kah ahl LOO-poh]',
    options: ['Watch out for wolves!', 'Good luck! (Break a leg)', 'Have a great meal!', 'Stay quiet!'],
    correctIndex: 1,
    explanation: "Literally 'into the wolf's mouth', the traditional Italian good luck wish. The proper response is 'Crepi il lupo!' (May the wolf die!).",
    exampleSentence: {
      foreign: 'In bocca al lupo per il tuo concerto di stasera!',
      english: 'Good luck (break a leg) for your concert tonight!'
    }
  },
  {
    id: 'it_4_3',
    languageId: 'it',
    level: 4,
    category: 'Expressive Idioms',
    prompt: "What does 'avere le mani in pasta' mean?",
    targetWord: 'avere le mani in pasta',
    phonetic: '[ah-VEH-reh leh MAH-nee een PAH-stah]',
    options: ['To make homemade tagliatelle', 'To be deeply involved / have a finger in the pie', 'To be clumsy with hands', 'To run out of ingredients'],
    correctIndex: 1,
    explanation: "Literally 'to have one's hands in the dough', meaning to be heavily involved or influential in an affair or business.",
    exampleSentence: {
      foreign: 'Quell’imprenditore ha le mani in pasta in molti settori economici.',
      english: 'That entrepreneur has a finger in the pie in many economic sectors.'
    }
  },
  {
    id: 'it_4_4',
    languageId: 'it',
    level: 4,
    category: 'Nuance & Art',
    prompt: "What does 'il chiaroscuro' mean in painting and expression?",
    targetWord: 'il chiaroscuro',
    phonetic: '[eel kyah-roh-SKOO-roh]',
    options: ['Bright monochrome', 'Dramatic contrast between light and dark', 'Watercolor wash', 'Faded fresco'],
    correctIndex: 1,
    explanation: "'Chiaro' (clear/light) + 'scuro' (dark): the artistic technique mastered by Caravaggio using stark contrasts to produce dramatic volume.",
    exampleSentence: {
      foreign: 'Caravaggio usava il chiaroscuro per dare intensa teatralità ai suoi dipinti.',
      english: 'Caravaggio used chiaroscuro to give intense drama to his paintings.'
    }
  },
  {
    id: 'it_4_5',
    languageId: 'it',
    level: 4,
    category: 'Nuance',
    prompt: "What does 'mozzafiato' describe?",
    targetWord: 'mozzafiato',
    phonetic: '[moht-tsah-FYAH-toh]',
    options: ['Suffocating smoke', 'Breathtaking / stunning', 'Whispering softly', 'Extremely spicy'],
    correctIndex: 1,
    explanation: "'Mozzare' (to chop/sever) + 'fiato' (breath): literally something so majestic it cuts your breath away.",
    exampleSentence: {
      foreign: 'Dalla cima della torre si gode una vista mozzafiato su tutta la città.',
      english: 'From the top of the tower one enjoys a breathtaking view over the entire city.'
    }
  },

  // Level 5: Advanced Mastery
  {
    id: 'it_5_1',
    languageId: 'it',
    level: 5,
    category: 'Advanced Metaphors',
    prompt: "What does 'arrampicarsi sugli specchi' mean?",
    targetWord: 'arrampicarsi sugli specchi',
    phonetic: '[ahr-rahm-pee-KAHR-see SOOL-yee SPEHK-kee]',
    options: ['To clean windows with difficulty', 'To grasp at straws / make desperate, improbable arguments', 'To perform acrobatics', 'To admire oneself too much'],
    correctIndex: 1,
    explanation: "Literally 'to climb on mirrors', meaning to attempt the impossible by inventing absurd excuses when clearly wrong.",
    exampleSentence: {
      foreign: 'Invece di ammettere l’errore, ha continuato ad arrampicarsi sugli specchi.',
      english: 'Instead of admitting his mistake, he kept grasping at straws.'
    }
  },
  {
    id: 'it_5_2',
    languageId: 'it',
    level: 5,
    category: 'Literary Gems',
    prompt: "What does 'la sprezzatura' signify in classic Italian manners?",
    targetWord: 'la sprezzatura',
    phonetic: '[lah spreht-tsah-TOO-rah]',
    options: ['Open disdain', 'Studied nonchalance / making effortless grace look easy', 'Rigid military discipline', 'Loud boastfulness'],
    correctIndex: 1,
    explanation: "Defined by Castiglione in 'The Book of the Courtier': the art of acting with effortless ease, concealing all effort and calculation.",
    exampleSentence: {
      foreign: 'Ha risposto a tutte le domande complesse con ammirevole sprezzatura.',
      english: 'He answered all the complex questions with admirable effortless nonchalance.'
    }
  },
  {
    id: 'it_5_3',
    languageId: 'it',
    level: 5,
    category: 'Advanced Lexicon',
    prompt: "What does 'ineccepibile' mean?",
    targetWord: 'ineccepibile',
    phonetic: '[ee-nehc-cheh-PEE-bee-leh]',
    options: ['Flawless / unexceptionable / beyond reproach', 'Questionable and vague', 'Easily broken', 'Temporary'],
    correctIndex: 0,
    explanation: "'Ineccepibile' describes an argument, conduct, or piece of craftsmanship so accurate that no objection can be raised.",
    exampleSentence: {
      foreign: 'Il professore ha presentato un’argomentazione logica assolutamente ineccepibile.',
      english: 'The professor presented an absolutely unexceptionable logical argument.'
    }
  },
  {
    id: 'it_5_4',
    languageId: 'it',
    level: 5,
    category: 'Expressive Proverb',
    prompt: "What wisdom is found in 'Chi va piano va sano e va lontano'?",
    targetWord: 'Chi va piano va sano e va lontano',
    phonetic: '[kee vah PYA-noh vah SAH-noh eh vah lohn-TAH-noh]',
    options: ['Slow and steady wins the race', 'He who hesitates is lost', 'Time waits for no one', 'Silence solves everything'],
    correctIndex: 0,
    explanation: "Literally 'He who goes slowly goes safely and goes far', celebrating measured pacing, persistence, and sustainability over frantic rush.",
    exampleSentence: {
      foreign: 'Non avere fretta di finire: chi va piano va sano e va lontano.',
      english: 'Do not rush to finish: slow and steady wins the race.'
    }
  },
  {
    id: 'it_5_5',
    languageId: 'it',
    level: 5,
    category: 'Philosophical Nuance',
    prompt: "What does 'la serendipità' refer to?",
    targetWord: 'la serendipità',
    phonetic: '[lah seh-ren-dee-pee-TAH]',
    options: ['Pessimism', 'Fortunate discovery made by happy accident', 'Careful mathematical deduction', 'A solemn vow'],
    correctIndex: 1,
    explanation: "The faculty of discovering valuable or agreeable things while looking for something completely different.",
    exampleSentence: {
      foreign: 'Molte scoperte scientifiche epocali sono avvenute per pura serendipità.',
      english: 'Many epochal scientific discoveries occurred by pure serendipity.'
    }
  },

  // ===================== KOREAN (ko) =====================
  // Level 1: Beginner
  {
    id: 'ko_1_1',
    languageId: 'ko',
    level: 1,
    category: 'Greetings',
    prompt: "What does '안녕하세요' (Annyeonghaseyo) mean?",
    targetWord: '안녕하세요 (Annyeonghaseyo)',
    phonetic: '[ahn-nyung-hah-seh-yoh]',
    options: ['Goodbye', 'Hello / How are you', 'Thank you', 'Please'],
    correctIndex: 1,
    explanation: "'Annyeong' means peace/wellness. 'Annyeonghaseyo' is the standard polite Korean greeting for all times of day.",
    exampleSentence: {
      foreign: '선생님, 안녕하세요!',
      english: 'Hello, teacher!'
    }
  },
  {
    id: 'ko_1_2',
    languageId: 'ko',
    level: 1,
    category: 'Politeness',
    prompt: "Which phrase means 'Thank you' formally in Korean?",
    targetWord: '감사합니다 (Gamsahamnida)',
    phonetic: '[gahm-sah-hahm-nee-dah]',
    options: ['죄송합니다', '감사합니다', '천만에요', '실례합니다'],
    correctIndex: 1,
    explanation: "'Gamsahamnida' is the formal and respectful way to express gratitude in Korean.",
    exampleSentence: {
      foreign: '도와주셔서 진심으로 감사합니다.',
      english: 'Thank you sincerely for helping me.'
    }
  },
  {
    id: 'ko_1_3',
    languageId: 'ko',
    level: 1,
    category: 'Core Nouns',
    prompt: "What does '물' (Mul) mean?",
    targetWord: '물 (Mul)',
    phonetic: '[MOOL]',
    options: ['Fire', 'Water', 'Tree', 'Wind'],
    correctIndex: 1,
    explanation: "'Mul' (물) is water. In restaurants, you can ask for 'mul jom juseyo' (water please).",
    exampleSentence: {
      foreign: '시원한 물 한 잔 주세요.',
      english: 'Please give me a glass of cold water.'
    }
  },
  {
    id: 'ko_1_4',
    languageId: 'ko',
    level: 1,
    category: 'Numbers',
    prompt: "Which Sino-Korean number is '삼' (Sam)?",
    targetWord: '삼 (Sam)',
    phonetic: '[SAHM]',
    options: ['One', 'Two', 'Three', 'Four'],
    correctIndex: 2,
    explanation: "In Sino-Korean numbers: Il (1), I (2), Sam (3), Sa (4), O (5).",
    exampleSentence: {
      foreign: '사무실은 건물 삼층에 있습니다.',
      english: 'The office is on the third floor of the building.'
    }
  },
  {
    id: 'ko_1_5',
    languageId: 'ko',
    level: 1,
    category: 'Core Nouns',
    prompt: "What is '친구' (Chingu)?",
    targetWord: '친구 (Chingu)',
    phonetic: '[CHEEN-goo]',
    options: ['Teacher', 'Friend (same age peer)', 'Doctor', 'Neighbor'],
    correctIndex: 1,
    explanation: "Traditionally in Korean, 'chingu' refers to a friend of the exact same age with whom you can use comfortable casual speech.",
    exampleSentence: {
      foreign: '주말에 친한 친구를 만났어요.',
      english: 'I met a close friend over the weekend.'
    }
  },

  // Level 2: Elementary
  {
    id: 'ko_2_1',
    languageId: 'ko',
    level: 2,
    category: 'Food & Dining',
    prompt: "What does '맛있어요' (Masisseoyo) mean?",
    targetWord: '맛있어요 (Masisseoyo)',
    phonetic: '[mah-shee-ssuh-yoh]',
    options: ['It is spicy', 'It is delicious', 'It is salty', 'It is hot'],
    correctIndex: 1,
    explanation: "From 'mat' (taste/flavor) + 'issda' (to exist). Literally 'flavor exists' = delicious!",
    exampleSentence: {
      foreign: '이 비빔밥 정말 맛있어요!',
      english: 'This bibimbap is really delicious!'
    }
  },
  {
    id: 'ko_2_2',
    languageId: 'ko',
    level: 2,
    category: 'Daily Routine',
    prompt: "What does '밥 먹었어요?' (Bap meogeosseoyo?) ask literally and culturally?",
    targetWord: '밥 먹었어요?',
    phonetic: '[bahp muh-guh-ssuh-yoh]',
    options: ['Did you cook dinner?', 'Did you eat? / How are you doing?', 'Where is the supermarket?', 'Is the food ready?'],
    correctIndex: 1,
    explanation: "Literally 'Did you eat rice?', this is a classic Korean greeting demonstrating warmth and concern for someone's well-being.",
    exampleSentence: {
      foreign: '오랜만이에요! 밥 먹었어요?',
      english: 'Long time no see! Have you eaten?'
    }
  },
  {
    id: 'ko_2_3',
    languageId: 'ko',
    level: 2,
    category: 'Places',
    prompt: "What is '지하철' (Jihacheol)?",
    targetWord: '지하철 (Jihacheol)',
    phonetic: '[jee-hah-chuhl]',
    options: ['Airport shuttle', 'Subway / metro train', 'Bicycle lane', 'Taxi stand'],
    correctIndex: 1,
    explanation: "'Jiha' (underground) + 'cheol' (steel/iron rail). Seoul boasts one of the world's most extensive subway networks.",
    exampleSentence: {
      foreign: '지하철 이호선을 타고 시청으로 갑니다.',
      english: 'I take Subway Line 2 to go to City Hall.'
    }
  },
  {
    id: 'ko_2_4',
    languageId: 'ko',
    level: 2,
    category: 'Time',
    prompt: "What day is '내일' (Naeil)?",
    targetWord: '내일 (Naeil)',
    phonetic: '[neh-EEL]',
    options: ['Yesterday', 'Today', 'Tomorrow', 'Last night'],
    correctIndex: 2,
    explanation: "'Eoje' is yesterday, 'oneul' is today, and 'naeil' is tomorrow.",
    exampleSentence: {
      foreign: '내일 아침 일찍 시험이 있어요.',
      english: 'I have an exam early tomorrow morning.'
    }
  },
  {
    id: 'ko_2_5',
    languageId: 'ko',
    level: 2,
    category: 'Descriptions',
    prompt: "What is the meaning of '예뻐요' (Yeppeoyo)?",
    targetWord: '예뻐요 (Yeppeoyo)',
    phonetic: '[yeh-ppuh-yoh]',
    options: ['It is cheap', 'It is pretty / cute', 'It is loud', 'It is dangerous'],
    correctIndex: 1,
    explanation: "From 'yeppuda' (to be pretty or lovely). Used to describe scenery, people, clothes, and charming things.",
    exampleSentence: {
      foreign: '봄에 피는 벚꽃이 정말 예뻐요.',
      english: 'The cherry blossoms blooming in spring are truly pretty.'
    }
  },

  // Level 3: Intermediate
  {
    id: 'ko_3_1',
    languageId: 'ko',
    level: 3,
    category: 'Emotions & Sensations',
    prompt: "What emotional state is described by '설레다' (Seolleda)?",
    targetWord: '설레다 (Seolleda)',
    phonetic: '[suhl-leh-dah]',
    options: ['To feel deep dread', 'To flutter with happy excitement / heart fluttering', 'To be bored to tears', 'To feel jealousy'],
    correctIndex: 1,
    explanation: "Captures the delightful fluttering, tingling anticipation before a first date, an exciting trip, or a fresh beginning.",
    exampleSentence: {
      foreign: '비행기 표를 예매하니 마음이 설레기 시작했어요.',
      english: 'Booking the flight ticket, my heart fluttered with excitement.'
    }
  },
  {
    id: 'ko_3_2',
    languageId: 'ko',
    level: 3,
    category: 'Daily Culture',
    prompt: "What does '파이팅' / '화이팅' (Fighting/Hwaiting) mean?",
    targetWord: '파이팅 (Fighting)',
    phonetic: '[pah-ee-teeng]',
    options: ['Let’s fight physically', 'You can do it! / Cheer up! / Let’s go!', 'Game over', 'Stop talking'],
    correctIndex: 1,
    explanation: "A famous Konglish cheer used universally to encourage friends, colleagues, or athletes before a challenge.",
    exampleSentence: {
      foreign: '오늘 면접 잘 보세요, 파이팅!',
      english: 'Do well on your interview today, you can do it!'
    }
  },
  {
    id: 'ko_3_3',
    languageId: 'ko',
    level: 3,
    category: 'Travel & Convenience',
    prompt: "What is '환승' (Hwanseung) in Korean transit?",
    targetWord: '환승 (Hwanseung)',
    phonetic: '[hwahn-seung]',
    options: ['Refund', 'Transfer (between bus/subway)', 'Express skip', 'Lost and found'],
    correctIndex: 1,
    explanation: "When you tap your T-money card from subway to bus within 30 minutes, you receive a free 'hwanseung' transfer discount.",
    exampleSentence: {
      foreign: '여기서 사호선으로 환승할 수 있습니다.',
      english: 'You can transfer to Line 4 here.'
    }
  },
  {
    id: 'ko_3_4',
    languageId: 'ko',
    level: 3,
    category: 'Social Interaction',
    prompt: "What does '수고하셨습니다' (Sugohasyeossseumnida) mean?",
    targetWord: '수고하셨습니다',
    phonetic: '[soo-goh-hah-syuh-ssum-nee-dah]',
    options: ['Welcome to Korea', 'Thank you for your hard work / Well done', 'Excuse my clumsiness', 'Enjoy the meal'],
    correctIndex: 1,
    explanation: "Expressed at the end of a workday, shoot, project, or event to honor everyone's diligent effort.",
    exampleSentence: {
      foreign: '프로젝트를 마치며 팀원들에게 수고하셨습니다라고 인사했습니다.',
      english: 'Concluding the project, I greeted the team with "Thank you for your hard work".'
    }
  },
  {
    id: 'ko_3_5',
    languageId: 'ko',
    level: 3,
    category: 'Expressions',
    prompt: "What does '대박' (Daebak) express in modern slang?",
    targetWord: '대박 (Daebak)',
    phonetic: '[deh-BAHK]',
    options: ['Terrible disaster', 'Jackpot! / Amazing! / Wow!', 'Delicious food', 'Silent quietness'],
    correctIndex: 1,
    explanation: "Originally meaning a huge jackpot or windfall, now ubiquitous among youth as an exclamation of awe: 'Awesome!' or 'No way!'",
    exampleSentence: {
      foreign: '콘서트 티켓 예매에 성공하다니 대박이다!',
      english: 'Managing to book concert tickets is totally epic!'
    }
  },

  // Level 4: Upper-Intermediate
  {
    id: 'ko_4_1',
    languageId: 'ko',
    level: 4,
    category: 'Cultural Psychology',
    prompt: "What cultural concept is '정' (Jeong)?",
    targetWord: '정 (Jeong)',
    phonetic: '[JUNG]',
    options: ['Formal business etiquette', 'Deep affection, emotional warmth, and bonded loyalty', 'Fierce competition', 'Monetary compensation'],
    correctIndex: 1,
    explanation: "A core Korean cultural bond: profound empathy, warmth, mutual care, and closeness that grows over shared time and experience.",
    exampleSentence: {
      foreign: '오래 알고 지낸 이웃 사이에 따뜻한 정이 넘쳐납니다.',
      english: 'Warm affection and bonded care overflow between long-time neighbors.'
    }
  },
  {
    id: 'ko_4_2',
    languageId: 'ko',
    level: 4,
    category: 'Social Intuition',
    prompt: "What is '눈치' (Nunchi)?",
    targetWord: '눈치 (Nunchi)',
    phonetic: '[NOON-chee]',
    options: ['Eye surgery technique', 'The subtle art of reading the room and other people’s moods', 'Speed reading books', 'Staring contest'],
    correctIndex: 1,
    explanation: "'Nunchi' is the intuitive ability to gauge the atmosphere, perceive unsaid feelings, and act with harmony.",
    exampleSentence: {
      foreign: '그는 눈치가 빨라서 분위기를 금방 파악해요.',
      english: 'He has quick nunchi and immediately senses the room’s atmosphere.'
    }
  },
  {
    id: 'ko_4_3',
    languageId: 'ko',
    level: 4,
    category: 'Idioms',
    prompt: "What does '발이 넓다' mean figuratively?",
    targetWord: '발이 넓다 (Bari neolda)',
    phonetic: '[bah-ree nuhl-dah]',
    options: ['To have big shoe size', 'To have a wide network of acquaintances / well-connected', 'To run very slowly', 'To travel everywhere on foot'],
    correctIndex: 1,
    explanation: "Literally 'feet are wide', an idiom describing someone who knows many people across various industries.",
    exampleSentence: {
      foreign: '그 기자는 각계각층에 발이 넓기로 유명합니다.',
      english: 'That journalist is famous for having a wide network across all walks of life.'
    }
  },
  {
    id: 'ko_4_4',
    languageId: 'ko',
    level: 4,
    category: 'Sensory Words',
    prompt: "What sensation is described by '시원섭섭하다' (Siwon-seopseophada)?",
    targetWord: '시원섭섭하다',
    phonetic: '[shee-wohn-suhp-suhp-hah-dah]',
    options: ['Burning hot and painful', 'Bittersweet (relieved yet sad to say goodbye)', 'Bitter and sour', 'Terrified and freezing'],
    correctIndex: 1,
    explanation: "Blends 'siwonhada' (refreshing/relieved) with 'seopseophada' (sad/regretful) — feelings felt at graduations or finishing long projects.",
    exampleSentence: {
      foreign: '졸업식을 마치니 시원섭섭한 기분이 들었어요.',
      english: 'Finishing graduation, I felt bittersweet relief and sadness.'
    }
  },
  {
    id: 'ko_4_5',
    languageId: 'ko',
    level: 4,
    category: 'Proverbs',
    prompt: "What does '시작이 반이다' mean?",
    targetWord: '시작이 반이다 (Sijagi banida)',
    phonetic: '[shee-jah-gee bah-nee-dah]',
    options: ['Starting is half the battle', 'Half of everything is lost', 'Start at midnight', 'Never start without money'],
    correctIndex: 0,
    explanation: "A famous Korean proverb encouraging action: taking the first step already accomplishes half the journey.",
    exampleSentence: {
      foreign: '어려워 보여도 도전해보세요. 시작이 반이잖아요!',
      english: 'Even if it looks hard, give it a try. Starting is half the battle!'
    }
  },

  // Level 5: Advanced Mastery
  {
    id: 'ko_5_1',
    languageId: 'ko',
    level: 5,
    category: 'Four-Character Idioms (Sajaseong-eo)',
    prompt: "What does '고진감래' (Gojin Gamrae) teach?",
    targetWord: '고진감래 (Gojin Gamrae)',
    phonetic: '[goh-jeen gahm-reh]',
    options: ['Sweetness comes after bitterness / No pain, no gain', 'Money brings sorrow', 'Speed guarantees success', 'Nature heals all wounds'],
    correctIndex: 0,
    explanation: "'Bitter exhaust, sweet come' — endurance through arduous hardship ultimately brings fruitful joy and triumph.",
    exampleSentence: {
      foreign: '오랜 수험 생활 끝에 합격했으니 고진감래라 할 수 있습니다.',
      english: 'Passing after years of study, one can truly say sweetness followed bitterness.'
    }
  },
  {
    id: 'ko_5_2',
    languageId: 'ko',
    level: 5,
    category: 'Cultural Sentiment',
    prompt: "What historical and cultural sentiment is '한' (Han)?",
    targetWord: '한 (Han)',
    phonetic: '[HAHN]',
    options: ['Temporary irritation', 'Collective sorrow, resilient endurance, and unfulfilled longing', 'Childish excitement', 'Pride in wealth'],
    correctIndex: 1,
    explanation: "A deeply resonant Korean emotion representing sorrow, injustice, and longing transformed into creative resilience and soul.",
    exampleSentence: {
      foreign: '한국의 전통 판소리 가락에는 민중의 한이 서려 있습니다.',
      english: 'The melodies of traditional Korean pansori are imbued with the collective sorrow and resilience of the people.'
    }
  },
  {
    id: 'ko_5_3',
    languageId: 'ko',
    level: 5,
    category: 'Advanced Sajaseong-eo',
    prompt: "What does '역지사지' (Yeokji Saji) urge one to do?",
    targetWord: '역지사지 (Yeokji Saji)',
    phonetic: '[yuhk-jee sah-jee]',
    options: ['Put oneself in another’s shoes / consider their perspective', 'Memorize historical dates', 'Exercise twice a day', 'Invest in real estate'],
    correctIndex: 0,
    explanation: "'Exchange places and think' — the golden virtue of empathy, seeing the situation from the other person's standpoint.",
    exampleSentence: {
      foreign: '갈등을 해결하려면 역지사지의 마음가짐이 필요합니다.',
      english: 'To resolve conflict, an empathetic mindset of putting oneself in the other’s shoes is necessary.'
    }
  },
  {
    id: 'ko_5_4',
    languageId: 'ko',
    level: 5,
    category: 'Nuanced Vocabulary',
    prompt: "What does '심금을 울리다' (Simgeumeul ullida) describe?",
    targetWord: '심금을 울리다',
    phonetic: '[sheem-geum-eul ool-lee-dah]',
    options: ['To ring a metal bell', 'To strike a chord in one’s heart / touch deeply', 'To cause ear ringing', 'To break an instrument'],
    correctIndex: 1,
    explanation: "Literally 'to strike the heartstrings' (like a gayageum or harp), meaning to move someone deeply with emotion.",
    exampleSentence: {
      foreign: '그 영화의 마지막 장면은 관객들의 심금을 울렸습니다.',
      english: 'The final scene of the film struck a deep emotional chord in the audience.'
    }
  },
  {
    id: 'ko_5_5',
    languageId: 'ko',
    level: 5,
    category: 'Mastery Expressions',
    prompt: "What does '일취월장' (Ilchwi Woljang) celebrate?",
    targetWord: '일취월장 (Ilchwi Woljang)',
    phonetic: '[eel-chwee wohl-jahng]',
    options: ['Making rapid, continuous progress day by day, month by month', 'Sun and moon eclipse', 'Moving house every year', 'Counting calendar days'],
    correctIndex: 0,
    explanation: "'Daily progress, monthly advance' — making remarkable, relentless advancement in skill or scholarship over time.",
    exampleSentence: {
      foreign: '꾸준히 연습한 결과 그녀의 언어 실력이 일취월장했습니다.',
      english: 'As a result of consistent practice, her language proficiency progressed by leaps and bounds.'
    }
  }
];

export function getQuestionsForQuiz(languageId: string, level: number, count = 5): Question[] {
  const filtered = QUESTIONS_DATABASE.filter(
    q => q.languageId === languageId && q.level === level
  );
  if (filtered.length === 0) {
    // Fallback if specific level isn't found
    return QUESTIONS_DATABASE.filter(q => q.languageId === languageId).slice(0, count);
  }
  // Shuffle options order for replayability while updating correctIndex
  const shuffledQuestions = [...filtered].sort(() => Math.random() - 0.5).slice(0, count);

  return shuffledQuestions.map(q => {
    const originalCorrectOption = q.options[q.correctIndex];
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    const newCorrectIndex = shuffledOptions.indexOf(originalCorrectOption);

    return {
      ...q,
      options: shuffledOptions,
      correctIndex: newCorrectIndex
    };
  });
}
