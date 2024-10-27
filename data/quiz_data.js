const questions = [
  // History and Religion (1-10)
  {
    question: "Which city is considered holy by both Jewish and Muslim people?",
    answers: ["Mecca", "Jerusalem", "Cairo", "Tel Aviv"],
    rightAnswer: "Jerusalem",
    hint: "This city contains the Western Wall and Al-Aqsa Mosque.",
    explanation:
      "Jerusalem is a sacred city for Judaism, housing the Western Wall, a remnant of the Second Temple. For Muslims, it is home to the Al-Aqsa Mosque, which is one of the holiest sites in Islam.",
    category: "History and Religion",
  },
  {
    question:
      "Which prophet is considered the father of both Judaism and Islam?",
    answers: ["Isaac", "Noah", "Abraham", "Moses"],
    rightAnswer: "Abraham",
    hint: "He is the father of both Ishmael and Isaac.",
    explanation:
      "Abraham is a key figure in both religious traditions, recognized as a patriarch. He is regarded as the father of Isaac (the father of the Jewish people) and Ishmael (the father of the Arab people).",
    category: "History and Religion",
  },
  {
    question: "Which religious text is written in Hebrew?",
    answers: ["Torah", "Quran", "The New Testament", "Hadith"],
    rightAnswer: "Torah",
    hint: "This is the foundational text of Judaism.",
    explanation:
      "The Torah is the central reference of the religious Judaic tradition, consisting of the first five books of the Hebrew Bible. It contains laws, teachings, and the history of the Jewish people.",
    category: "History and Religion",
  },
  {
    question:
      "Which religious structure is significant in both Jewish and Islamic worship, located in Jerusalem?",
    answers: [
      "Dome of the Rock",
      "Western Wall",
      "Temple of Solomon",
      "Masada",
    ],
    rightAnswer: "Dome of the Rock",
    hint: "This Islamic shrine has a golden dome.",
    explanation:
      "The Dome of the Rock is an iconic Islamic shrine in Jerusalem that holds great significance in both faiths. It is believed to be the site where the Prophet Muhammad ascended to heaven and is also linked to Jewish traditions.",
    category: "History and Religion",
  },
  {
    question:
      "Which major event in 1948 shaped the modern relationship between Jewish and Arab people?",
    answers: [
      "World War II",
      "Creation of Israel",
      "Camp David Accords",
      "Six-Day War",
    ],
    rightAnswer: "Creation of Israel",
    hint: "This led to the Arab-Israeli conflict.",
    explanation:
      "The creation of Israel in 1948 marked a significant turning point in the history of the Middle East, leading to ongoing tensions and conflicts between Jewish and Arab populations.",
    category: "History and Religion",
  },
  {
    question:
      "Which biblical figure is revered as a prophet in both Jewish and Islamic traditions?",
    answers: ["Solomon", "David", "Elijah", "Joshua"],
    rightAnswer: "Solomon",
    hint: "He is known for his wisdom and building the First Temple.",
    explanation:
      "Solomon is celebrated in both traditions for his wisdom and for constructing the First Temple in Jerusalem, symbolizing divine presence in Judaism and respected as a wise ruler in Islam.",
    category: "History and Religion",
  },
  {
    question:
      "What is the traditional day of rest observed weekly in both Judaism and Islam?",
    answers: [
      "Shabbat (Judaism) and Jumu'ah (Islam)",
      "Eid and Yom Kippur",
      "Hanukkah and Eid al-Fitr",
      "Purim and Mawlid",
    ],
    rightAnswer: "Shabbat (Judaism) and Jumu'ah (Islam)",
    hint: "One begins on Friday at sunset, and the other occurs on Friday.",
    explanation:
      "Shabbat is the Jewish day of rest beginning at sunset on Friday, while Jumu'ah is the Islamic congregational prayer on Friday, both serving as spiritual reprieves in their respective traditions.",
    category: "History and Religion",
  },
  {
    question:
      "Which ancient city, located in the southern West Bank, is important to both Jews and Muslims?",
    answers: ["Jericho", "Hebron", "Nazareth", "Gaza"],
    rightAnswer: "Hebron",
    hint: "It’s home to the Cave of the Patriarchs.",
    explanation:
      "Hebron is significant in both Jewish and Islamic traditions, as it is believed to be the burial place of the patriarchs and matriarchs, including Abraham, Isaac, and Jacob.",
    category: "History and Religion",
  },
  {
    question:
      "Which holiday celebrates the Exodus of the Israelites from Egypt?",
    answers: ["Hanukkah", "Purim", "Passover", "Yom Kippur"],
    rightAnswer: "Passover",
    hint: "This is commemorated by eating unleavened bread (matzah).",
    explanation:
      "Passover, or Pesach, is a Jewish holiday commemorating the Exodus from Egypt, marked by the Seder meal and the eating of matzah, symbolizing the haste of their departure.",
    category: "History and Religion",
  },
  {
    question:
      "Which major battle in 1948 displaced many Arabs and established the State of Israel?",
    answers: ["Arab-Israeli War", "Six-Day War", "Yom Kippur War", "Gulf War"],
    rightAnswer: "Arab-Israeli War",
    hint: "It was the first Arab-Israeli conflict.",
    explanation:
      "The Arab-Israeli War of 1948, also known as the War of Independence or the Nakba, resulted in the establishment of Israel and the displacement of a significant number of Palestinians, shaping the modern political landscape.",
    category: "History and Religion",
  },
  // Food and Cuisine (11-20)

  {
    question:
      "Which dish made from ground chickpeas is common in both Jewish and Arabic cuisines?",
    answers: ["Shawarma", "Falafel", "Matzah", "Baba Ghanoush"],
    rightAnswer: "Falafel",
    hint: "This deep-fried ball or patty is often served in pita bread.",
    explanation:
      "Falafel is a popular street food made from ground chickpeas (or fava beans) that is deep-fried and typically served in pita bread with vegetables and sauces, making it a staple in both Jewish and Arabic cuisines.",
    category: "Food and Cuisine",
  },
  {
    question:
      "What dessert made from filo pastry and nuts is common in both Jewish and Arabic cultures?",
    answers: ["Baklava", "Sufganiyot", "Ma'amoul", "Halva"],
    rightAnswer: "Baklava",
    hint: "It’s a sweet layered pastry soaked in syrup.",
    explanation:
      "Baklava is a rich dessert made of layers of filo pastry filled with chopped nuts and sweetened with syrup or honey, enjoyed in both Jewish and Arabic cultures, often served at festive occasions.",
    category: "Food and Cuisine",
  },
  {
    question:
      "What is the fermented yogurt drink enjoyed in both Jewish and Arabic communities?",
    answers: ["Tea", "Laben", "Coffee", "Pomegranate Juice"],
    rightAnswer: "Laben",
    hint: "It’s creamy and often served as a spread or drink.",
    explanation:
      "Laben is a traditional fermented yogurt drink that is popular in both Jewish and Arabic cuisines. It can be enjoyed as a refreshing drink or used as a base for dips and sauces.",
    category: "Food and Cuisine",
  },
  {
    question:
      "Which bread is traditionally eaten during Jewish Passover and is similar to unleavened bread in Arab cultures?",
    answers: ["Pita", "Challah", "Matzah", "Focaccia"],
    rightAnswer: "Matzah",
    hint: "This bread has no yeast and is eaten for a week.",
    explanation:
      "Matzah is unleavened bread that is traditionally eaten during Passover in Jewish culture. It resembles similar unleavened breads found in Arab cuisine, symbolizing the haste of the Exodus.",
    category: "Food and Cuisine",
  },
  {
    question:
      "What is the popular dip made from mashed chickpeas and tahini in both Jewish and Arab cuisines?",
    answers: ["Hummus", "Baba Ghanoush", "Tabbouleh", "Matzah Ball Soup"],
    rightAnswer: "Hummus",
    hint: "Often served with olive oil and warm pita bread.",
    explanation:
      "Hummus is a creamy dip made from blended chickpeas, tahini, lemon juice, and garlic. It is a staple in both Jewish and Arabic cuisines, commonly served with pita bread.",
    category: "Food and Cuisine",
  },
  {
    question:
      "Which dish made from stuffed grape leaves is common to both Jewish and Arabic cuisines?",
    answers: ["Latkes", "Dolma", "Kugel", "Bourekas"],
    rightAnswer: "Dolma",
    hint: "The leaves are filled with rice, meat, and spices.",
    explanation:
      "Dolma refers to stuffed grape leaves, which are filled with rice, meat, and various spices. This dish is enjoyed across Jewish and Arabic cultures, often served at celebrations.",
    category: "Food and Cuisine",
  },
  {
    question:
      "Which sweet dessert made from semolina and soaked in syrup is enjoyed in both Jewish and Arab communities?",
    answers: ["Basbousa", "Halva", "Baklava", "Kunafa"],
    rightAnswer: "Basbousa",
    hint: "Also known as Hareeseh in some Arab regions.",
    explanation:
      "Basbousa is a semolina cake that is soaked in syrup and often garnished with almonds or coconut. It is enjoyed in both Jewish and Arab cultures, known by different names in various regions.",
    category: "Food and Cuisine",
  },
  {
    question:
      "What common Jewish dish involves apples and nuts, served during Passover and eaten in some Arab homes too?",
    answers: ["Tzimmes", "Charoset", "Labneh", "Tabbouleh"],
    rightAnswer: "Charoset",
    hint: "It symbolizes the mortar used by Jewish slaves in Egypt.",
    explanation:
      "Charoset is a sweet mixture of apples, nuts, wine, and spices served during Passover. It represents the mortar used by the Israelites while building in Egypt, and it is also enjoyed in some Arab households.",
    category: "Food and Cuisine",
  },
  {
    question:
      "What traditional Jewish bread is similar to a large, round flatbread made in Arab homes?",
    answers: ["Challah", "Matzo", "Pita", "Bourekas"],
    rightAnswer: "Pita",
    hint: "This bread is often used in wraps and sandwiches.",
    explanation:
      "Pita is a type of flatbread that is common in both Jewish and Arab cuisines, often used for wraps and sandwiches. It has a pocket that makes it ideal for holding various fillings.",
    category: "Food and Cuisine",
  },
  {
    question:
      "Which spice blend, common in both Mizrahi Jewish and Arabic cooking, typically contains sesame, sumac, and thyme?",
    answers: ["Za'atar", "Hawaij", "Baharat", "Harissa"],
    rightAnswer: "Za'atar",
    hint: "Often sprinkled on bread with olive oil.",
    explanation:
      "Za'atar is a versatile spice blend that includes herbs like thyme, sesame seeds, and sumac. It is popular in both Mizrahi Jewish and Arabic cuisines, often used as a seasoning for bread, meats, and vegetables.",
    category: "Food and Cuisine",
  },
  // Languages and Shared Words (21-30)

  {
    question: "Which word meaning 'peace' is shared in both Hebrew and Arabic?",
    answers: ["Shalom/Salaam", "Ahava/Hubb", "Lev/Qalb", "Neshamah/Ruh"],
    rightAnswer: "Shalom/Salaam",
    hint: "It’s used as a greeting in both cultures.",
    explanation:
      "Shalom in Hebrew and Salaam in Arabic both mean 'peace' and are commonly used as greetings, symbolizing harmony and goodwill.",
    category: "Languages and Shared Words",
  },
  {
    question:
      "Which shared Semitic root word means 'heart' in both Hebrew and Arabic?",
    answers: ["Lev/Qalb", "Or/Nur", "Chai/Hayat", "Adam/Adem"],
    rightAnswer: "Lev/Qalb",
    hint: "You feel emotions here.",
    explanation:
      "Lev in Hebrew and Qalb in Arabic both translate to 'heart', emphasizing the importance of this organ in emotions and feelings in both cultures.",
    category: "Languages and Shared Words",
  },
  {
    question:
      "What shared Semitic root word means 'light' in both Hebrew and Arabic?",
    answers: ["Or/Nur", "Chai/Hayat", "Lev/Qalb", "Ruach/Ruh"],
    rightAnswer: "Or/Nur",
    hint: "It’s often used in names and symbolizes enlightenment.",
    explanation:
      "Or in Hebrew and Nur in Arabic mean 'light', representing illumination, both literally and metaphorically, often found in names and religious contexts.",
    category: "Languages and Shared Words",
  },
  {
    question: "Which word meaning 'truth' is shared in both Hebrew and Arabic?",
    answers: ["Emet/Haq", "Shemesh/Shams", "Tzedek/Adl", "Ahava/Hubb"],
    rightAnswer: "Emet/Haq",
    hint: "It’s a core concept in both cultures' religious teachings.",
    explanation:
      "Emet in Hebrew and Haq in Arabic both signify 'truth', a fundamental principle in the teachings of both Judaism and Islam.",
    category: "Languages and Shared Words",
  },
  {
    question:
      "Which religious term meaning 'teacher' is used in both Jewish and Arabic cultures?",
    answers: ["Rabbi/Sheik", "Cohen/Imam", "Dayan/Qadi", "Rosh/Sultan"],
    rightAnswer: "Rabbi/Sheik",
    hint: "In Judaism, it refers to a religious leader, and in Islam, it often refers to a respected elder or scholar.",
    explanation:
      "Rabbi in Hebrew and Sheik in Arabic both denote 'teacher' or 'leader', representing significant educational roles within their respective communities.",
    category: "Languages and Shared Words",
  },
  {
    question: "What word in Hebrew and Arabic refers to a messenger of God?",
    answers: ["Navi/Nabi", "Cohen/Sheik", "Melach/Malik", "Rosh/Emir"],
    rightAnswer: "Navi/Nabi",
    hint: "This term is commonly used for prophets.",
    explanation:
      "Navi in Hebrew and Nabi in Arabic both translate to 'prophet' or 'messenger', indicating individuals chosen by God to convey messages to people.",
    category: "Languages and Shared Words",
  },
  {
    question: "What shared word means 'life' in both Hebrew and Arabic?",
    answers: ["Chai/Hayat", "Shalom/Salaam", "Lev/Qalb", "Or/Nur"],
    rightAnswer: "Chai/Hayat",
    hint: "Often used in Jewish jewelry, symbolizing vitality.",
    explanation:
      "Chai in Hebrew and Hayat in Arabic mean 'life', representing existence and vitality, often used in cultural symbols and jewelry.",
    category: "Languages and Shared Words",
  },
  {
    question: "What shared word means 'book' in both Hebrew and Arabic?",
    answers: ["Sefer/Kitab", "Torah/Quran", "Megillah/Sunnah", "Tanakh/Hadith"],
    rightAnswer: "Sefer/Kitab",
    hint: "It’s also used in reference to religious texts.",
    explanation:
      "Sefer in Hebrew and Kitab in Arabic both translate to 'book', commonly used to refer to religious texts and literature.",
    category: "Languages and Shared Words",
  },
  {
    question:
      "Which root word for 'holy' is similar in both Hebrew and Arabic?",
    answers: ["Kadosh/Qudus", "Tzedek/Adl", "Emunah/Iman", "Shalom/Salaam"],
    rightAnswer: "Kadosh/Qudus",
    hint: "It describes something sacred in religious contexts.",
    explanation:
      "Kadosh in Hebrew and Qudus in Arabic mean 'holy', signifying something sacred and revered in both religious traditions.",
    category: "Languages and Shared Words",
  },
  {
    question: "Which Hebrew and Arabic word for 'day' is phonetically similar?",
    answers: ["Yom/Yaum", "Or/Nur", "Lev/Qalb", "Adam/Adem"],
    rightAnswer: "Yom/Yaum",
    hint: "It refers to a unit of time.",
    explanation:
      "Yom in Hebrew and Yaum in Arabic both mean 'day', referring to a unit of time in both cultures.",
    category: "Languages and Shared Words",
  },
  // Traditions and Holidays (31-40)
  {
    question:
      "Which holiday in both Jewish and Muslim cultures involves fasting?",
    answers: [
      "Yom Kippur and Ramadan",
      "Hanukkah and Eid al-Fitr",
      "Sukkot and Mawlid",
      "Rosh Hashanah and Eid al-Adha",
    ],
    rightAnswer: "Yom Kippur and Ramadan",
    hint: "Both holidays focus on self-reflection and atonement.",
    explanation:
      "Yom Kippur in Judaism and Ramadan in Islam are significant periods of fasting, emphasizing spiritual reflection, prayer, and seeking forgiveness.",
    category: "Traditions and Holidays",
  },
  {
    question:
      "Which Jewish festival commemorates the wandering in the desert, celebrated at the same time as Eid al-Adha?",
    answers: ["Sukkot", "Passover", "Yom Kippur", "Purim"],
    rightAnswer: "Sukkot",
    hint: "Temporary shelters are built to symbolize the Israelites’ journey.",
    explanation:
      "Sukkot commemorates the Israelites' 40 years of wandering in the desert, marked by the construction of temporary shelters, similar to the timing of Eid al-Adha.",
    category: "Traditions and Holidays",
  },
  {
    question:
      "What is the shared custom at Jewish and Arabic weddings where the bride and groom are decorated?",
    answers: [
      "Henna Ceremony",
      "Sword Dance",
      "Ketubah Signing",
      "Tallit Presentation",
    ],
    rightAnswer: "Henna Ceremony",
    hint: "It involves intricate patterns applied to the hands and feet.",
    explanation:
      "The Henna Ceremony is a traditional practice in both Jewish and Arabic weddings, where henna is applied to the bride and sometimes the groom, symbolizing beauty and joy.",
    category: "Traditions and Holidays",
  },
  {
    question: "Which holiday celebrates the end of fasting in Islam?",
    answers: [
      "Yom Kippur and Eid al-Fitr",
      "Passover and Mawlid",
      "Sukkot and Eid al-Adha",
      "Hanukkah and Ramadan",
    ],
    rightAnswer: "Yom Kippur and Eid al-Fitr",
    hint: "One celebrates the end of Ramadan, and the other concludes Yom Kippur.",
    explanation:
      "Eid al-Fitr marks the end of Ramadan, while Yom Kippur is the Day of Atonement, concluding the fast for Jewish people, both celebrating a return to communal and spiritual life.",
    category: "Traditions and Holidays",
  },
  {
    question:
      "Which shared religious practice involves giving charity to help the less fortunate in both Judaism and Islam?",
    answers: [
      "Tzedakah/Zakat",
      "Teshuvah/Hajj",
      "Sadaqah/Mincha",
      "Havdalah/Asr",
    ],
    rightAnswer: "Tzedakah/Zakat",
    hint: "This practice is obligatory in both religions.",
    explanation:
      "Tzedakah in Judaism and Zakat in Islam are forms of obligatory charity aimed at helping those in need, reflecting a fundamental principle of both faiths.",
    category: "Traditions and Holidays",
  },
  {
    question:
      "Which holiday involves eating symbolic foods such as dates in Arabic cultures?",
    answers: [
      "Passover and Ramadan",
      "Hanukkah and Eid al-Adha",
      "Purim and Eid al-Fitr",
      "Yom Kippur and Mawlid",
    ],
    rightAnswer: "Passover and Ramadan",
    hint: "One is the Jewish festival of freedom, and the other is a Muslim month of fasting.",
    explanation:
      "Passover celebrates Jewish freedom from slavery, while Ramadan is a holy month of fasting in Islam, both involving symbolic foods like dates.",
    category: "Traditions and Holidays",
  },
  {
    question:
      "Which day of rest in Judaism begins at sunset on Friday, similar to Jumu’ah in Islam?",
    answers: ["Shabbat", "Yom Kippur", "Rosh Hashanah", "Sukkot"],
    rightAnswer: "Shabbat",
    hint: "It marks a weekly holy day of prayer and family gatherings.",
    explanation:
      "Shabbat is the Jewish day of rest, starting at sunset on Friday, similar to Jumu’ah, the congregational prayer on Friday in Islam.",
    category: "Traditions and Holidays",
  },
  {
    question:
      "What is the traditional shared greeting in both Jewish and Arabic cultures meaning 'peace be upon you'?",
    answers: [
      "Shalom Aleichem/As-Salaam-Alaikum",
      "Baruch Haba/Marhaba",
      "Boker Tov/Sabah Al-Khair",
      "Lehitraot/Ma’a As-Salama",
    ],
    rightAnswer: "Shalom Aleichem/As-Salaam-Alaikum",
    hint: "This greeting is used to wish peace and goodwill.",
    explanation:
      "Shalom Aleichem in Hebrew and As-Salaam-Alaikum in Arabic both mean 'peace be upon you', used as greetings in both cultures to promote goodwill.",
    category: "Traditions and Holidays",
  },
  {
    question:
      "Which Jewish festival celebrates the biblical story of Esther and is celebrated with costumes, similar to how Arabs celebrate Eid?",
    answers: ["Purim", "Hanukkah", "Yom Kippur", "Passover"],
    rightAnswer: "Purim",
    hint: "It’s a festive celebration involving masquerades.",
    explanation:
      "Purim commemorates the story of Esther, involving festivities, costumes, and celebrations similar to the joyful aspects of Eid in Arab cultures.",
    category: "Traditions and Holidays",
  },
  {
    question:
      "Which traditional fast-breaking meal is celebrated at the end of both Yom Kippur and Ramadan?",
    answers: [
      "Iftar and Break Fast",
      "Seder and Suhoor",
      "Seudat Mitzvah and Sehri",
      "Kiddush and Tashlich",
    ],
    rightAnswer: "Iftar and Break Fast",
    hint: "It involves gathering for a special feast after fasting.",
    explanation:
      "Iftar in Islam and Break Fast in Judaism mark the meals to end the fasts during Ramadan and Yom Kippur, respectively, often involving family gatherings.",
    category: "Traditions and Holidays",
  },
  //  Modern Culture and Influence (41-50)

  {
    question:
      "Which city in Israel is home to significant populations of both Jewish and Arab people?",
    answers: ["Haifa", "Tel Aviv", "Jaffa", "Hebron"],
    rightAnswer: "Haifa",
    hint: "It’s known for its cultural diversity and coexistence.",
    explanation:
      "Haifa is recognized for its mixed population and efforts toward coexistence between Jewish and Arab communities.",
    category: "Modern Culture and Influence",
  },
  {
    question:
      "Which Nobel Prize-winning Israeli Prime Minister signed the Oslo Accords with a Palestinian leader?",
    answers: ["Yitzhak Rabin", "Golda Meir", "Menachem Begin", "Ehud Barak"],
    rightAnswer: "Yitzhak Rabin",
    hint: "He was assassinated after a peace rally in Tel Aviv.",
    explanation:
      "Yitzhak Rabin signed the Oslo Accords in 1993, aimed at achieving peace with the Palestinians, and was tragically assassinated in 1995.",
    category: "Modern Culture and Influence",
  },
  {
    question:
      "Which Egyptian president won the Nobel Peace Prize for his efforts to negotiate peace with Israel?",
    answers: [
      "Anwar Sadat",
      "Gamal Abdel Nasser",
      "Yasser Arafat",
      "King Hussein",
    ],
    rightAnswer: "Anwar Sadat",
    hint: "He signed a peace treaty with Menachem Begin in 1979.",
    explanation:
      "Anwar Sadat was awarded the Nobel Peace Prize in 1978 for his role in establishing peace with Israel through the Camp David Accords.",
    category: "Modern Culture and Influence",
  },
  {
    question:
      "Which Nobel Peace Prize winner worked toward peace in the Middle East alongside Israeli and Arab leaders?",
    answers: [
      "Yasser Arafat",
      "Mahmoud Abbas",
      "Hosni Mubarak",
      "Benjamin Netanyahu",
    ],
    rightAnswer: "Yasser Arafat",
    hint: "He shared the prize with Rabin and Peres for their efforts in the Oslo Accords.",
    explanation:
      "Yasser Arafat was awarded the Nobel Peace Prize in 1994 for his efforts in the peace process with Israel, notably the Oslo Accords.",
    category: "Modern Culture and Influence",
  },
  {
    question:
      "Which shared tradition in both Jewish and Arabic cultures involves offering sweets and tea or coffee to guests?",
    answers: [
      "Hospitality",
      "Respect for Elders and Family",
      "Education and Knowledge",
      "Bar-Mitzva",
    ],
    rightAnswer: "Hospitality",
    hint: "It is a core value, and this is a common practice in the Middle East.",
    explanation:
      "Hospitality is a cherished tradition in both cultures, symbolizing warmth and friendship through the offering of food and drink.",
    category: "Modern Culture and Influence",
  },
  {
    question:
      "Which Israeli Prime Minister, known for his peace efforts with Arab nations, was awarded the Nobel Peace Prize in 1994?",
    answers: ["Shimon Peres", "Ariel Sharon", "Golda Meir", "Ehud Olmert"],
    rightAnswer: "Shimon Peres",
    hint: "He worked on the Oslo Accords and shared the prize with Rabin and Arafat.",
    explanation:
      "Shimon Peres was awarded the Nobel Peace Prize in 1994 for his significant role in the peace negotiations that led to the Oslo Accords.",
    category: "Modern Culture and Influence",
  },
  {
    question:
      "Which shared cultural festival celebrates harvests in both Jewish and Arabic traditions?",
    answers: [
      "Sukkot and Eid al-Adha",
      "Passover and Eid al-Fitr",
      "Hanukkah and Mawlid",
      "Rosh Hashanah and Ramadan",
    ],
    rightAnswer: "Sukkot and Eid al-Adha",
    hint: "One involves building temporary huts, and the other marks the end of the Hajj.",
    explanation:
      "Both festivals are harvest celebrations, with Sukkot featuring the construction of temporary booths and Eid al-Adha commemorating the sacrifice.",
    category: "Modern Culture and Influence",
  },
  {
    question:
      "Which language, commonly spoken by both Jewish and Arab communities, is a Semitic language?",
    answers: [
      "Hebrew and Arabic",
      "Yiddish and French",
      "Ladino and Persian",
      "Aramaic and Turkish",
    ],
    rightAnswer: "Hebrew and Arabic",
    hint: "Both languages are related to each other linguistically.",
    explanation:
      "Hebrew and Arabic are both Semitic languages, sharing linguistic roots and cultural significance in the region.",
    category: "Modern Culture and Influence",
  },
  {
    question:
      "Which Middle Eastern dish, enjoyed by both Jewish and Arab communities, is made from roasted eggplants?",
    answers: ["Baba Ghanoush", "Matzah Ball Soup", "Tabbouleh", "Falafel"],
    rightAnswer: "Baba Ghanoush",
    hint: "It’s often served as a dip with pita bread.",
    explanation:
      "Baba Ghanoush is a popular dish made from roasted eggplants, commonly served as a dip in both Jewish and Arab cuisines.",
    category: "Modern Culture and Influence",
  },
  {
    question:
      "Which cultural practice involves the ritual washing of hands before a meal in both Jewish and Arab communities?",
    answers: [
      "Netilat Yadayim and Wudu",
      "Kiddush and Suhoor",
      "Havdalah and Sehri",
      "Seder and Tashlich",
    ],
    rightAnswer: "Netilat Yadayim and Wudu",
    hint: "It’s a symbolic act of purification before eating.",
    explanation:
      "Netilat Yadayim (the Jewish practice) and Wudu (the Islamic practice) both symbolize purification before meals.",
    category: "Modern Culture and Influence",
  },
  // Shared History and Culture (1-10)
  {
    question:
      "Which town in Israel is known for its Arab-Jewish coexistence and features a mixed population with cultural exchange events?",
    answers: ["Acre", "Neve Shalom", "Ashkelon", "Safed"],
    rightAnswer: "Neve Shalom",
    hint: "This town's name means 'Oasis of Peace.'",
    explanation:
      "Neve Shalom is a unique community that embodies Jewish-Arab coexistence and actively promotes cultural exchange.",
    category: "Shared History and Culture",
  },
  {
    question:
      "What is the name of the shared Arab-Jewish village in Israel that was founded on principles of cooperation and equality?",
    answers: [
      "Kiryat Shmona",
      "Neve Shalom",
      "Beit She’an",
      "Kibbutz Ramat Rachel",
    ],
    rightAnswer: "Neve Shalom",
    hint: "The village was built to foster Arab-Jewish coexistence.",
    explanation:
      "Neve Shalom, also known as Nahiye, is a cooperative village founded in 1970, dedicated to promoting equality and mutual respect between Jewish and Arab communities.",
    category: "Shared History and Culture",
  },
  {
    question:
      "Which city in Israel is often called the 'city of coexistence' due to its Arab-Jewish population living together in harmony?",
    answers: ["Haifa", "Nazareth", "Jaffa", "Tel Aviv"],
    rightAnswer: "Haifa",
    hint: "This city is known for its peaceful, mixed population.",
    explanation:
      "Haifa is celebrated for its Arab-Jewish coexistence, featuring diverse neighborhoods and cultural integration among its residents.",
    category: "Shared History and Culture",
  },
  {
    question:
      "Which shared cultural event in Israel celebrates the rich history of Arab-Jewish music and dance?",
    answers: [
      "The Oud Festival",
      "The Jerusalem Symphony",
      "Tel Aviv Marathon",
      "Karmiel Dance Festival",
    ],
    rightAnswer: "The Oud Festival",
    hint: "The festival is centered around the Oud, a traditional instrument.",
    explanation:
      "The Oud Festival showcases the musical heritage of both Arab and Jewish cultures, featuring performances that highlight the importance of the Oud in their traditions.",
    category: "Shared History and Culture",
  },
  {
    question:
      "What is the name of the joint Jewish-Arab soccer team that promotes unity through sports?",
    answers: [
      "Bnei Sakhnin",
      "Hapoel Haifa",
      "Maccabi Tel Aviv",
      "Beitar Jerusalem",
    ],
    rightAnswer: "Bnei Sakhnin",
    hint: "This team is based in an Arab city in the Galilee.",
    explanation:
      "Bnei Sakhnin, based in Sakhnin, is known for being a joint team that fosters Arab-Jewish collaboration and has gained national recognition in Israeli football.",
    category: "Shared History and Culture",
  },
  {
    question:
      "Which Jewish-Arab organization in Israel promotes peace through collaborative business ventures?",
    answers: [
      "The Peres Center for Peace",
      "Seeds of Peace",
      "Shatil",
      "Hand in Hand",
    ],
    rightAnswer: "The Peres Center for Peace",
    hint: "This organization was founded by a former Israeli president.",
    explanation:
      "Founded by Shimon Peres, the Peres Center for Peace focuses on fostering economic cooperation between Jewish and Arab communities through business initiatives.",
    category: "Shared History and Culture",
  },
  {
    question:
      "Which Arab-Jewish theater group in Israel is dedicated to promoting coexistence through the arts?",
    answers: [
      "Jaffa Theatre",
      "Habima Theatre",
      "The Khan Theatre",
      "Cameri Theatre",
    ],
    rightAnswer: "Jaffa Theatre",
    hint: "This theater is located in a historic port city.",
    explanation:
      "Jaffa Theatre, located in Jaffa, promotes Jewish-Arab coexistence by producing plays and performances that explore shared narratives and cultural expressions.",
    category: "Shared History and Culture",
  },
  {
    question:
      "Which shared Arab-Jewish culinary festival in Israel promotes cultural exchange through food?",
    answers: [
      "A Taste of Peace",
      "The Jerusalem Food Festival",
      "Tel Aviv Eat",
      "The Galilee Gourmet Fest",
    ],
    rightAnswer: "A Taste of Peace",
    hint: "This event encourages unity through shared meals.",
    explanation:
      "A Taste of Peace festival brings together chefs and food enthusiasts from both communities to celebrate their culinary traditions and promote understanding through food.",
    category: "Shared History and Culture",
  },
  {
    question:
      "Which shared Arab-Jewish environmental project focuses on water conservation across communities in Israel?",
    answers: [
      "EcoPeace Middle East",
      "Green Israel Initiative",
      "Israel Nature and Parks Authority",
      "Desert Bloom",
    ],
    rightAnswer: "EcoPeace Middle East",
    hint: "This project connects Jewish and Arab communities through water conservation.",
    explanation:
      "EcoPeace Middle East works to promote environmental cooperation between Jewish and Arab communities in Israel, particularly focusing on shared water resources.",
    category: "Shared History and Culture",
  },
  {
    question:
      "Which organization brings together Arab and Jewish youth in Israel to build bridges through sports?",
    answers: [
      "Peace Players International",
      "Soccer for Peace",
      "Seeds of Peace",
      "Coexistence Youth League",
    ],
    rightAnswer: "Peace Players International",
    hint: "This organization uses basketball as a tool for unity.",
    explanation:
      "Peace Players International utilizes basketball as a platform for Arab and Jewish youth to interact, foster friendships, and break down social barriers.",
    category: "Shared History and Culture",
  },

  // Education and Cooperation (11-20)
  {
    question:
      "Which Arab-Jewish school system in Israel promotes bilingual education and coexistence?",
    answers: [
      "Hand in Hand Schools",
      "Neve Shalom School",
      "Seeds of Peace Academy",
      "Unity Through Learning",
    ],
    rightAnswer: "Hand in Hand Schools",
    hint: "This school system operates with both Hebrew and Arabic as the main languages.",
    explanation:
      "Hand in Hand Schools offer a unique bilingual education model where Jewish and Arab students learn together, promoting coexistence and mutual understanding.",
    category: "Education and Cooperation",
  },
  {
    question:
      "Which Israeli university is known for having one of the highest percentages of Arab students, fostering diversity?",
    answers: [
      "University of Haifa",
      "Hebrew University",
      "Ben-Gurion University",
      "Weizmann Institute of Science",
    ],
    rightAnswer: "University of Haifa",
    hint: "It’s located in a city famous for peaceful coexistence.",
    explanation:
      "The University of Haifa has a diverse student body, with a significant percentage of Arab students, reflecting the city's commitment to coexistence.",
    category: "Education and Cooperation",
  },
  {
    question:
      "Which Arab-Jewish youth camp focuses on peacebuilding and mutual understanding in Israel?",
    answers: [
      "Seeds of Peace",
      "Camp Yachad",
      "Peace Camp Israel",
      "Hand in Hand Peace Camp",
    ],
    rightAnswer: "Seeds of Peace",
    hint: "This international camp brings together youth from conflict areas.",
    explanation:
      "Seeds of Peace is an international camp that focuses on bringing together youth from various conflict areas to foster peace and understanding.",
    category: "Education and Cooperation",
  },
  {
    question:
      "Which Arab-Jewish high school in Israel promotes educational equality and coexistence through shared learning programs?",
    answers: [
      "Max Rayne Hand in Hand School",
      "Herzliya Gymnasium",
      "The Galilee School",
      "Arab-Israeli Education Center",
    ],
    rightAnswer: "Max Rayne Hand in Hand School",
    hint: "This school is part of the Hand in Hand network.",
    explanation:
      "Max Rayne Hand in Hand School is part of a network that emphasizes bilingual education and cultural understanding among Jewish and Arab students.",
    category: "Education and Cooperation",
  },
  {
    question:
      "Which shared community library in Israel offers resources in both Hebrew and Arabic, promoting literacy among Jews and Arabs?",
    answers: [
      "Neve Shalom Library",
      "Yad Vashem Library",
      "Tel Aviv Public Library",
      "Nazareth Cultural Center",
    ],
    rightAnswer: "Neve Shalom Library",
    hint: "This library is located in the 'Oasis of Peace.'",
    explanation:
      "The Neve Shalom Library provides resources in both languages, aiming to foster literacy and cultural exchange between Jewish and Arab communities.",
    category: "Education and Cooperation",
  },
  {
    question:
      "Which organization helps foster cooperation between Jewish and Arab entrepreneurs in Israel’s startup ecosystem?",
    answers: [
      "Hybrid",
      "Start-Up Nation Central",
      "Israel Venture Network",
      "Tech4Peace",
    ],
    rightAnswer: "Hybrid",
    hint: "This accelerator specifically helps bridge gaps between communities.",
    explanation:
      "Hybrid is an organization that connects Jewish and Arab entrepreneurs to promote cooperation and innovation in Israel's startup landscape.",
    category: "Education and Cooperation",
  },
  {
    question:
      "Which Arab-Jewish initiative in Israel supports collaborative academic research between universities?",
    answers: [
      "The Abraham Fund",
      "Academic Peace Network",
      "The Israeli Coexistence Initiative",
      "Bridging Universities",
    ],
    rightAnswer: "The Abraham Fund",
    hint: "This fund supports joint projects that foster peace and coexistence.",
    explanation:
      "The Abraham Fund provides financial support for collaborative academic research projects between Jewish and Arab universities to promote coexistence.",
    category: "Education and Cooperation",
  },
  {
    question:
      "Which educational program in Israel brings together Arab and Jewish students to explore each other's cultures through art?",
    answers: [
      "Yad B’Yad Program",
      "Creative Coexistence",
      "Bridging Cultures",
      "The Art of Peace",
    ],
    rightAnswer: "Creative Coexistence",
    hint: "This initiative uses art as a tool for cultural understanding.",
    explanation:
      "Creative Coexistence is an educational program that encourages Arab and Jewish students to learn about each other's cultures through artistic expression.",
    category: "Education and Cooperation",
  },
  {
    question:
      "Which Jewish-Arab organization focuses on breaking down stereotypes by educating teachers about coexistence in Israel?",
    answers: [
      "Givat Haviva",
      "The Peace School",
      "Peace Education Israel",
      "Coexistence Academy",
    ],
    rightAnswer: "Givat Haviva",
    hint: "This organization has been working on peace education since 1949.",
    explanation:
      "Givat Haviva has been promoting peace education and coexistence since its founding, providing training for teachers to address stereotypes and biases.",
    category: "Education and Cooperation",
  },
  {
    question:
      "Which joint Arab-Jewish school in the Galilee offers a bilingual and multicultural education to foster peace?",
    answers: [
      "The Galilee Multicultural School",
      "Negev School of Peace",
      "Nazareth Peace School",
      "Hand in Hand Galilee",
    ],
    rightAnswer: "The Galilee Multicultural School",
    hint: "This school is a part of a larger coexistence initiative.",
    explanation:
      "The Galilee Multicultural School provides a bilingual and multicultural education, emphasizing coexistence and understanding between Jewish and Arab students.",
    category: "Education and Cooperation",
  },
  // Modern Culture and Influence (21-30)
  {
    question:
      "Which shared art gallery in Israel features both Arab and Jewish artists, promoting dialogue through art?",
    answers: [
      "The Art of Peace Gallery",
      "Tel Aviv Contemporary Arts Center",
      "Jaffa Museum of Art",
      "Nazareth Art Studio",
    ],
    rightAnswer: "The Art of Peace Gallery",
    hint: "This gallery focuses on art as a medium for coexistence.",
    explanation:
      "The Art of Peace Gallery showcases the work of both Arab and Jewish artists, using art as a tool for promoting dialogue and understanding.",
    category: "Modern Culture and Influence",
  },
  {
    question:
      "Which festival in Israel brings together Jewish and Arab musicians to celebrate peace through music?",
    answers: [
      "The Jerusalem Sacred Music Festival",
      "Tel Aviv Jazz Festival",
      "Jaffa Music Fest",
      "The Galilee Folk Music Festival",
    ],
    rightAnswer: "The Jerusalem Sacred Music Festival",
    hint: "This festival is known for promoting religious and cultural harmony.",
    explanation:
      "The Jerusalem Sacred Music Festival unites musicians from both communities, celebrating diversity and promoting peace through music.",
    category: "Modern Culture and Influence",
  },
  {
    question:
      "Which mixed Arab-Jewish town in the Galilee is known for its strong tradition of coexistence, hosting joint cultural events?",
    answers: ["Nazareth", "Nof HaGalil", "Acre", "Jaffa"],
    rightAnswer: "Nof HaGalil",
    hint: "This town was formerly known as Nazareth Illit.",
    explanation:
      "Nof HaGalil is recognized for its commitment to coexistence, hosting various joint cultural events and initiatives between Jewish and Arab residents.",
    category: "Modern Culture and Influence",
  },
  {
    question:
      "Which Arab-Jewish media project in Israel focuses on creating content that promotes mutual respect and understanding?",
    answers: [
      "Kulna",
      "Bridges TV",
      "Unity Network",
      "Israel-Arab Media Initiative",
    ],
    rightAnswer: "Kulna",
    hint: "This project involves both Jews and Arabs creating content for broadcast.",
    explanation:
      "Kulna is a media initiative that fosters collaboration between Jewish and Arab content creators to produce programming that promotes mutual respect.",
    category: "Modern Culture and Influence",
  },
  {
    question:
      "Which Arab-Israeli singer, known for blending Arabic and Hebrew music, has become a symbol of peace through her songs?",
    answers: [
      "Mira Awad",
      "Dana International",
      "Netta Barzilai",
      "Sarit Hadad",
    ],
    rightAnswer: "Mira Awad",
    hint: "She performed in Eurovision alongside Noa in 2009.",
    explanation:
      "Mira Awad is known for her unique fusion of Arabic and Hebrew music, and she uses her platform to advocate for peace and understanding between cultures.",
    category: "Modern Culture and Influence",
  },
  {
    question:
      "Which museum in Israel features exhibits on both Jewish and Arab history, promoting understanding of shared heritage?",
    answers: [
      "The Museum of Coexistence",
      "The Israel Museum",
      "Yad Vashem",
      "The Palmach Museum",
    ],
    rightAnswer: "The Museum of Coexistence",
    hint: "This museum focuses on the shared cultural history of the region.",
    explanation:
      "The Museum of Coexistence highlights the intertwined histories of Jewish and Arab communities in Israel, promoting dialogue and understanding.",
    category: "Modern Culture and Influence",
  },
  {
    question:
      "Which culinary TV show in Israel brings together Jewish and Arab chefs to promote peace through cooking?",
    answers: [
      "Peace Through Food",
      "The Gourmet Show",
      "Cooking for Unity",
      "Flavors of Israel",
    ],
    rightAnswer: "Peace Through Food",
    hint: "The show features chefs from both communities collaborating in the kitchen.",
    explanation:
      "Peace Through Food showcases the culinary talents of both Jewish and Arab chefs, promoting peace and unity through the joy of cooking.",
    category: "Modern Culture and Influence",
  },
  {
    question:
      "Which organization refracts the Israeli-Palestinian conflict, and its resolution, through a gendered lens?",
    answers: [
      "Women Create Peace",
      "Feminist Art for Peace",
      "Shared Visions",
      "Machsom Watch",
    ],
    rightAnswer: "Women Create Peace",
    hint: "Founded in 2014, with full representation of women, with the aim of ending the Israeli-Palestinian conflict.",
    explanation:
      "Women Create Peace focuses on women's roles in resolving the Israeli-Palestinian conflict, advocating for gendered perspectives in peacebuilding efforts.",
    category: "Modern Culture and Influence",
  },
  {
    question:
      "Which Arab-Jewish music group in Israel is known for blending traditional Arabic and Jewish melodies, promoting unity through music?",
    answers: [
      "The Andalus Ensemble",
      "The Israeli Symphony",
      "Jerusalem Strings",
      "Tel Aviv Voices",
    ],
    rightAnswer: "The Andalus Ensemble",
    hint: "The group’s name reflects the region of Southern Spain known for its cultural coexistence.",
    explanation:
      "The Andalus Ensemble blends traditional Arabic and Jewish melodies, celebrating the rich cultural heritage of coexistence in the Andalusian region.",
    category: "Modern Culture and Influence",
  },
  {
    question:
      "Which Arab-Israeli actor has been praised for his roles in both Hebrew and Arabic language films, symbolizing cultural cooperation?",
    answers: ["Makram Khoury", "Sasson Gabai", "Saleh Bakri", "Mohammad Bakri"],
    rightAnswer: "Makram Khoury",
    hint: "He is the first Arab actor to win the Israel Prize.",
    explanation:
      "Makram Khoury is celebrated for his significant contributions to both Hebrew and Arabic cinema, exemplifying cultural cooperation and artistic expression.",
    category: "Modern Culture and Influence",
  },
];
console.log("hello");
console.log(questions.length);
