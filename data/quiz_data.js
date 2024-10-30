const questions = [
  {
    question:
      "Which city is known as one of the oldest continuously inhabited cities in the world, important to both Arab and Jewish histories?",
    answers: ["Athens", "Damascus", "Cairo", "Rome"],
    rightAnswer: "Damascus",
    hint: "It’s known as the “City of Jasmine.",
    explanation:
      "It holds cultural significance in the Middle East, valued by both Arabs and Jews.",
    category: "History",
  },
  {
    question:
      "What was the name of the Jewish scholar who became influential in the Arab world during the Golden Age?",
    answers: ["Ibn Sina", "Rashi", "Maimonides", "Saadi"],
    rightAnswer: "Maimonides",
    hint: "Born in Cordoba, Spain.",
    explanation:
      "Maimonides was a Jewish philosopher whose works influenced Jewish and Arab intellectual traditions.",
    category: "History",
  },
  {
    question:
      "Which Arab empire once ruled over parts of the Iberian Peninsula, creating a rich cultural blend?",
    answers: ["Abbasid", "Ottoman", "Umayyad", "Safavid"],
    rightAnswer: "Umayyad",
    hint: "Had its capital in Damascus.",
    explanation:
      "The Umayyad dynasty ruled over Spain, marking a period where Jewish, Christian, and Muslim communities often coexisted.",
    category: "History",
  },
  {
    question:
      "Which holiday commemorates the Jewish Exodus from Egypt, a story also referenced in Islam?",
    answers: ["Hanukkah", "Sukkot", "Purim", "Passover"],
    rightAnswer: "Passover",
    hint: "It involves avoiding leavened bread.",
    explanation:
      "Passover celebrates liberation, which is similarly respected in Islam’s acknowledgment of Moses.",
    category: "History",
  },
  {
    question:
      "Which historical Jewish figure is also a prophet in Islam, respected by both cultures?",
    answers: ["David", "Solomon", "Moses", "Abraham"],
    rightAnswer: "Moses",
    hint: "He led the Israelites out of Egypt.",
    explanation:
      "Moses is a revered figure in both traditions, known for his leadership.",
    category: "History",
  },
  {
    question:
      "In which city did both Jewish and Arab intellectuals flourish during the Middle Ages, contributing to science, art, and philosophy?",
    answers: ["Baghdad", "Paris", "Jerusalem", "Cairo"],
    rightAnswer: "Baghdad",
    hint: "It was the Abbasid capital.",
    explanation:
      "Baghdad became a center for learning, where Jewish and Arab scholars collaborated.",
    category: "History",
  },
  {
    question:
      "What shared concept in Jewish and Islamic tradition emphasizes charitable giving?",
    answers: ["Zakat/Sadaqah", "Purim Gifts", "Eid al-Fitr Charity", "Waqf"],
    rightAnswer: "Zakat/Sadaqah",
    hint: "Known as tzedakah in Judaism.",
    explanation:
      "Zakat/Sadaqah aligns with Jewish tzedakah, both encouraging charity as a duty.",
    category: "History",
  },
  {
    question:
      "What significant Middle Eastern city is holy to Jews, Christians, and Muslims?",
    answers: ["Cairo", "Jerusalem", "Mecca", "Damascus"],
    rightAnswer: "Jerusalem",
    hint: "Known as the “City of Peace.”",
    explanation:
      "Jerusalem is important for its religious history in Judaism, Christianity, and Islam.",
    category: "History",
  },
  {
    question:
      "Which Jewish holiday is closest to the Islamic Day of Atonement?",
    answers: ["Rosh Hashanah", "Yom Kippur", "Hanukkah", "Purim"],
    rightAnswer: "Yom Kippur",
    hint: "It’s a day of fasting.",
    explanation: "Both Yom Kippur and Ashura involve fasting and reflection.",
    category: "History",
  },
  {
    question:
      "Which philosopher’s works were translated into Arabic and influenced Islamic philosophy?",
    answers: ["Rashi", "Spinoza", "Maimonides", "Freud"],
    rightAnswer: "Maimonides",
    hint: "Known as the Rambam.",
    explanation:
      "Maimonides' philosophical ideas resonated within Islamic thought.",
    category: "History",
  },
  {
    question:
      "Which dish, popular in both cultures, is made from ground meat and often grilled on skewers?",
    answers: ["Kebab", "Falafel", "Shakshuka", "Pizza"],
    rightAnswer: "Kebab",
    hint: "Cooked over an open flame.",
    explanation:
      "Kebab has various versions, loved across the Middle East by Arabs and Jews alike.",
    category: "Food",
  },
  {
    question:
      "What shared dish is made of deep-fried chickpea balls or patties?",
    answers: ["Shawarma", "Falafel", "Biryani", "Moussaka"],
    rightAnswer: "Falafel",
    hint: "Often served in pita bread with vegetables.",
    explanation:
      "Originating from the Middle East, falafel is a beloved street food among both Arabs and Jews.",
    category: "Food",
  },
  {
    question: "Which flatbread is a common staple in both cuisines?",
    answers: ["Pita", "Tortilla", "Naan", "Baguette"],
    rightAnswer: "Pita",
    hint: "Usually served with hummus.",
    explanation: "Pita is widely enjoyed in Middle Eastern cuisine.",
    category: "Food",
  },
  {
    question: "Which sweet pastry soaked in syrup is popular in both cultures?",
    answers: ["Baklava", "Donuts", "Croissant", "Eclairs"],
    rightAnswer: "Baklava",
    hint: "Made with layers of dough and nuts.",
    explanation: "Baklava is a traditional dessert in Middle Eastern cultures.",
    category: "Food",
  },
  {
    question:
      "Which pickled vegetables are commonly served with meals in both Jewish and Arab dishes?",
    answers: ["Pickles", "Kimchi", "Salsa", "Olives"],
    rightAnswer: "Pickles",
    hint: "They are often green.",
    explanation: "Pickles are a staple addition to many Middle Eastern dishes.",
    category: "Food",
  },
  {
    question: "What does “Shalom” in Hebrew and “Salaam” in Arabic mean?",
    answers: ["Goodbye", "Hello", "Peace", "Friend"],
    rightAnswer: "Peace",
    hint: "Indicates harmony.",
    explanation:
      "Both 'Shalom' and 'Salaam' mean 'peace' and are common greetings.",
    category: "Language",
  },
  {
    question: "Which word meaning “house” sounds similar in both languages?",
    answers: ["Akhir", "Bayt", "Roti", "Kalb"],
    rightAnswer: "Bayt",
    hint: "Refers to a home.",
    explanation: "Both languages use “bayt” to refer to a home.",
    category: "Language",
  },
  {
    question:
      "Which Semitic language was historically used by Jewish scholars in the Arab world and has similarities to Arabic?",
    answers: ["Hebrew", "Yiddish", "Aramaic", "Ladino"],
    rightAnswer: "Aramaic",
    hint: "It was spoken around the Levant region.",
    explanation:
      "Aramaic served as a bridge language and influenced both Hebrew and Arabic.",
    category: "Language",
  },
  {
    question:
      "What does the Arabic word 'salam' and Hebrew word 'shalom' imply in addition to peace?",
    answers: ["Happiness", "Wealth", "Well-being", "Freedom"],
    rightAnswer: "Well-being",
    hint: "It’s about overall welfare.",
    explanation: "Both words convey a wish for safety and health.",
    category: "Language",
  },
  {
    question:
      "Which word meaning “teacher” is similar in both Arabic and Hebrew?",
    answers: ["Rabbi", "Ustadh", "Talmid", "Muallem"],
    rightAnswer: "Muallem",
    hint: "It’s a respectful title.",
    explanation:
      "Muallem or Ustadh are similar in both languages for a learned person or teacher.",
    category: "Language",
  },
  {
    question:
      "Which major holiday involves lighting candles over several days in both Jewish and Arab traditions?",
    answers: ["Eid", "Hanukkah", "Passover", "Rosh Hashanah"],
    rightAnswer: "Hanukkah",
    hint: "Commemorates a miracle with oil.",
    explanation:
      "Hanukkah involves candle lighting, similar to some celebrations in other Middle Eastern traditions.",
    category: "Culture and Happy Life",
  },
  {
    question:
      "Which common Middle Eastern instrument is enjoyed in both Jewish and Arab traditional music?",
    answers: ["Guitar", "Oud", "Violin", "Piano"],
    rightAnswer: "Oud",
    hint: "It resembles a lute.",
    explanation:
      "Oud is used in traditional music across the Middle East, cherished by both cultures.",
    category: "Culture and Happy Life",
  },
  {
    question:
      "What shared value in both Arab and Jewish families emphasizes respect for elders?",
    answers: ["Equality", "Individualism", "Filial piety", "Freedom"],
    rightAnswer: "Filial piety",
    hint: "It’s also common in Asian cultures.",
    explanation:
      "Filial piety or respect for elders is a core value in both cultures.",
    category: "Culture and Happy Life",
  },
  {
    question:
      "Which event in both cultures often features traditional dancing as a form of celebration?",
    answers: ["Weddings", "Funerals", "Religious ceremonies", "Job promotions"],
    rightAnswer: "Weddings",
    hint: "It marks a union.",
    explanation:
      "Weddings in both cultures frequently feature music and dancing as essential parts of the celebration.",
    category: "Culture and Happy Life",
  },
  {
    question:
      "Which greeting ritual is common in both cultures, involving either handshakes or cheek kisses?",
    answers: ["Hugging", "Cheek kissing", "Bowing", "Saluting"],
    rightAnswer: "Cheek kissing",
    hint: "It’s done to express warmth.",
    explanation:
      "Cheek kissing or handshakes are common greetings in both cultures.",
    category: "Culture and Happy Life",
  },
  {
    question:
      "What shared aspect of celebrations in both Arab and Jewish traditions involves large gatherings with family and friends?",
    answers: [
      "Music festivals",
      "Game nights",
      "Feasts and communal meals",
      "Fireworks displays",
    ],
    rightAnswer: "Feasts and communal meals",
    hint: "Often involves traditional dishes.",
    explanation: "Celebratory meals are a core aspect of many events.",
    category: "Culture and Happy Life",
  },
  {
    question:
      "Which Mediterranean city was a hub for both Arab and Jewish traders during the medieval period?",
    answers: ["Beirut", "Alexandria", "Tangier", "Tripoli"],
    rightAnswer: "Alexandria",
    hint: "This Egyptian city has a famous ancient library.",
    explanation:
      "Alexandria was a significant center of trade and intellectual exchange for Arab and Jewish merchants.",
    category: "History",
  },
  {
    question:
      "Which empire allowed Jewish communities to thrive within its territories, leading to a flourishing of Jewish scholarship?",
    answers: [
      "Byzantine Empire",
      "Roman Empire",
      "Ottoman Empire",
      "Persian Empire",
    ],
    rightAnswer: "Ottoman Empire",
    hint: "It ruled much of the Middle East until the early 20th century.",
    explanation:
      "The Ottoman Empire allowed religious communities, including Jewish ones, to thrive under a system called the millet.",
    category: "History",
  },
  {
    question:
      "Which traditional celebration in both Jewish and Arab cultures often includes music and dance?",
    answers: ["Birthdays", "Funerals", "Weddings", "Anniversaries"],
    rightAnswer: "Weddings",
    hint: "It’s a ceremony celebrating a union.",
    explanation:
      "Weddings in both cultures frequently feature music and dancing as essential parts of the celebration.",
    category: "Culture and Happy Life",
  },
];
