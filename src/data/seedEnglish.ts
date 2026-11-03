import { Topic } from '../types/syllabus.ts';

interface EnglishTopicMeta {
  module: string;
  name: string;
  importance: 'High' | 'Medium' | 'Low';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  estimatedMinutes: number;
  subtopics: {
    name: string;
    tasks: string[];
  }[];
  notes: string;
  practiceQuestions: string[];
}

const ENGLISH_MODULES_RAW: EnglishTopicMeta[] = [
  // Module 1: Grammar (18 topics)
  {
    module: 'Module 1: Grammar',
    name: 'Parts of speech',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'The 8 Fundamental Word Classes', tasks: ['Identify noun, pronoun, verb, adjective, adverb, preposition, conjunction, interjection in live sentences', 'Analyze how word function changes by sentence context'] }
    ],
    notes: 'A single word can function as different parts of speech depending on context (e.g. "fast" as adjective, adverb, or verb).',
    practiceQuestions: ['Identify the part of speech of "well" in: "She speaks English well" vs "He is feeling well" vs "Tears well up".', 'Why is understanding parts of speech essential for constructing grammatically sound spoken sentences?']
  },
  {
    module: 'Module 1: Grammar',
    name: 'Nouns',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Noun Classifications & Pluralization', tasks: ['Differentiate proper, common, abstract, collective, and material nouns', 'Master countable vs uncountable nouns (e.g. information, advice, equipment)'] }
    ],
    notes: 'Uncountable nouns (advice, furniture, luggage, information) never take "a/an" or plural "s". Use "a piece of advice".',
    practiceQuestions: ['Correct the sentence: "He gave me many useful advices and informations."', 'What are collective nouns and what verb agreement rules apply to them?']
  },
  {
    module: 'Module 1: Grammar',
    name: 'Pronouns',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Pronoun Precision in Speech', tasks: ['Master subject (I, he), object (me, him), possessive (mine, his), and reflexive (myself, himself) pronouns', 'Eliminate common spoken errors: "Me and him went" vs "He and I went"'] }
    ],
    notes: 'Use subject pronouns when performing the action: "My manager and I attended the conference", never "Me and my manager".',
    practiceQuestions: ['Explain why "Between you and me" is correct while "Between you and I" is incorrect.', 'When should reflexive pronouns (myself, yourself) be used correctly?']
  },
  {
    module: 'Module 1: Grammar',
    name: 'Adjectives',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Descriptive Precision & Comparisons', tasks: ['Use comparative (-er, more) and superlative (-est, most) forms accurately', 'Learn standard Royal Order of Adjectives: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose'] }
    ],
    notes: 'Royal order of adjectives: "A lovely small old square brown Italian wooden dining table".',
    practiceQuestions: ['Order the adjectives: "table / wooden / round / beautiful / small".', 'Why is "more better" a double comparative error?']
  },
  {
    module: 'Module 1: Grammar',
    name: 'Verbs',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Action, Linking, & Auxiliary Verbs', tasks: ['Differentiate dynamic action verbs from stative verbs (know, believe, understand)', 'Master primary auxiliary verbs (be, do, have) and irregular verb forms'] }
    ],
    notes: 'Stative verbs (love, understand, prefer, belong) are generally not used in continuous (-ing) tenses in standard English.',
    practiceQuestions: ['Why is "I am knowing the answer" ungrammatical in standard English?', 'List the V1, V2, and V3 forms of irregular verbs: arise, choose, freeze, shrink.']
  },
  {
    module: 'Module 1: Grammar',
    name: 'Adverbs',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Modifying Verbs, Adjectives, & Other Adverbs', tasks: ['Position adverbs of frequency (always, often, rarely) before main verb but after "to be"', 'Master adverbs of manner (-ly), place, and time'] }
    ],
    notes: 'Adverbs answer How? When? Where? How often? Frequency adverbs sit before main verbs: "I always review my notes".',
    practiceQuestions: ['Correct the spoken error: "He speaks very quick and clear."', 'Where should "seldom" be positioned in a natural spoken sentence?']
  },
  {
    module: 'Module 1: Grammar',
    name: 'Prepositions',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Time, Place, & Direction Rules', tasks: ['Master in/on/at for time (at 5 PM, on Monday, in June) and place (at home, on the desk, in London)', 'Avoid preposition confusion: discuss about (wrong) vs discuss (right)'] }
    ],
    notes: 'Certain transitive verbs take no preposition: "discuss the issue" (not "discuss about"), "order food" (not "order for food").',
    practiceQuestions: ['Explain the time distinction between "in time" and "on time".', 'Correct the error: "We reached to the airport late."']
  },
  {
    module: 'Module 1: Grammar',
    name: 'Conjunctions',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Coordinating & Subordinating Connectors', tasks: ['Use FANBOYS (For, And, Nor, But, Or, Yet, So) to join clauses', 'Use subordinators (although, because, while, whereas) to build complex sentences'] }
    ],
    notes: 'Conjunctions build natural speech rhythm, transitioning between simple staccato sentences and cohesive flow.',
    practiceQuestions: ['Combine two sentences using "although" and explain comma placement.', 'Why should "because" and "so" not be used together in the same cause-and-effect sentence?']
  },
  {
    module: 'Module 1: Grammar',
    name: 'Articles',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Definite vs Indefinite Articles', tasks: ['Use "a" vs "an" based on vowel sound, not vowel letter (an hour, a university)', 'Master definite article "the" for specific or unique referents'] }
    ],
    notes: '"An" is determined by sound, not spelling: "an MBA", "an honest person", "a European country", "a one-day trip".',
    practiceQuestions: ['Why do we say "a university" but "an umbrella"?', 'When is the definite article "the" omitted before abstract and general plural nouns?']
  },
  {
    module: 'Module 1: Grammar',
    name: 'Tenses',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 75,
    subtopics: [
      { name: 'The 12 English Tenses in Spoken Context', tasks: ['Master Simple Present (habits), Present Continuous (temporary actions), Present Perfect (life experiences with current relevance)', 'Differentiate Simple Past (specific past time) vs Present Perfect (unspecified past time)'] }
    ],
    notes: 'Simple Past requires a specific past time anchor ("I completed it yesterday"); Present Perfect links past to now ("I have completed it").',
    practiceQuestions: ['Explain the situational difference between "I lost my keys" and "I have lost my keys".', 'When do you use Past Perfect ("had done") instead of Simple Past?']
  },
  {
    module: 'Module 1: Grammar',
    name: 'Subject-verb agreement',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Singular and Plural Concord', tasks: ['Ensure third-person singular verbs take "s/es" (He speaks, She creates)', 'Handle intervening prepositional phrases: "The list of items is (not are) ready"'] }
    ],
    notes: 'The verb agrees with the true subject, ignoring prepositional phrases between subject and verb.',
    practiceQuestions: ['Choose the correct verb: "Neither the manager nor the employees (was / were) present."', 'Correct: "Every one of the participants have submitted their assignment."']
  },
  {
    module: 'Module 1: Grammar',
    name: 'Modal verbs',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Nuance of Possibility, Ability, & Obligation', tasks: ['Differentiate can/could, will/would, shall/should, may/might/must', 'Use modal verbs for polite requests: "Could you please clarify?"'] }
    ],
    notes: 'Modal verbs are followed by the bare infinitive (base verb without "to"): "She must go", never "She must to go".',
    practiceQuestions: ['Explain the degrees of certainty between: "It will rain", "It might rain", and "It could rain".', 'How do modal verbs soften direct commands into professional requests?']
  },
  {
    module: 'Module 1: Grammar',
    name: 'Active and passive voice',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Shifting Focus from Actor to Receiver', tasks: ['Transform active voice into passive voice: Subject + be + past participle', 'Use passive voice in business and technical contexts when the actor is unknown or irrelevant'] }
    ],
    notes: 'Spoken English favors active voice for direct energy ("We launched the app"); passive voice is used when diplomatizing errors ("A mistake was made").',
    practiceQuestions: ['Convert: "The development team fixed the critical security vulnerability."', 'Why is passive voice frequently used in scientific reports and news broadcasts?']
  },
  {
    module: 'Module 1: Grammar',
    name: 'Direct and indirect speech',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Reported Speech Mechanics', tasks: ['Backshift tenses when reporting in the past (present simple -> past simple)', 'Shift pronouns and time expressions (now -> then, yesterday -> the previous day)'] }
    ],
    notes: 'Indirect speech removes quotation marks and typically backshifts tenses when the reporting verb is in the past: "He said he was ready".',
    practiceQuestions: ['Convert to indirect speech: "She said, \'I am working on the presentation today.\'"', 'When does tense backshifting NOT occur in reported speech?']
  },
  {
    module: 'Module 1: Grammar',
    name: 'Conditionals',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Hypothetical & Real Scenarios', tasks: ['Zero (universal facts: if it rains, ground gets wet)', 'First (real future: if you study, you will pass)', 'Second (hypothetical present: if I had more time, I would learn)', 'Third (regret/past hypothetical: if I had known, I would have helped)'] }
    ],
    notes: 'Third conditional pattern: If + had + V3, would have + V3. Essential for discussing retrospectives and alternative outcomes.',
    practiceQuestions: ['Construct a Second Conditional sentence about an imaginary career scenario.', 'Correct the error: "If I would have known about the meeting, I would attend."']
  },
  {
    module: 'Module 1: Grammar',
    name: 'Question formation',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Inversion, Wh- Questions, & Question Tags', tasks: ['Apply ASI (Auxiliary + Subject + Infinitive) and QASI (Question Word + Aux + Subject + Inf)', 'Form negative question tags: "You\'re coming, aren\'t you?"'] }
    ],
    notes: 'Spoken questions require subject-auxiliary inversion: "Where do you live?", not "Where you live?".',
    practiceQuestions: ['Formulate polite indirect questions: "Can you tell me where the meeting room is?" vs direct questions.', 'Add the correct question tag: "She has completed the report, _______?"']
  },
  {
    module: 'Module 1: Grammar',
    name: 'Sentence structure',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Simple, Compound, & Complex Sentences', tasks: ['Identify independent and dependent clauses', 'Vary sentence length to avoid monotony and run-on sentences'] }
    ],
    notes: 'Great speakers alternate short punchy simple sentences with nuanced complex sentences to maintain audience interest.',
    practiceQuestions: ['What is a comma splice and how do you fix it?', 'Combine three simple sentences into one cohesive complex sentence.']
  },
  {
    module: 'Module 1: Grammar',
    name: 'Punctuation',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Punctuation as Spoken Pauses', tasks: ['Understand commas as brief micro-pauses and periods as full stop breaths', 'Master apostrophes for possession vs contractions (it\'s vs its)'] }
    ],
    notes: 'In speech, punctuation corresponds to vocal pauses, cadence, and pitch changes.',
    practiceQuestions: ['Explain the grammatical difference between "it\'s" and "its".', 'How does vocal inflection reflect a question mark versus an exclamation point?']
  },

  // Module 2: Vocabulary (10 topics)
  {
    module: 'Module 2: Vocabulary',
    name: 'Daily-use vocabulary',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Everyday Household & Social Lexicon', tasks: ['Master 200 high-frequency conversational nouns and adjectives', 'Describe daily activities, environments, and routines with precision'] }
    ],
    notes: 'Expand beyond basic words (good, bad, nice) to specific adjectives (convenient, exhausting, productive, delightful).',
    practiceQuestions: ['Replace "good" with three expressive conversational synonyms for a meal, a movie, and a colleague.', 'Describe your morning routine using 5 precise action verbs.']
  },
  {
    module: 'Module 2: Vocabulary',
    name: 'Common verbs',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Action Verbs in Conversation', tasks: ['Master high-utility verbs: initiate, facilitate, clarify, accomplish, negotiate, collaborate', 'Replace weak verb-noun phrases ("do an inspection" -> "inspect")'] }
    ],
    notes: 'Strong dynamic verbs make speech engaging and concise.',
    practiceQuestions: ['Replace "make better" and "make bigger" with single strong verbs.', 'Use "collaborate", "facilitate", and "streamline" in conversational sentences.']
  },
  {
    module: 'Module 2: Vocabulary',
    name: 'Synonyms',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Nuance & Degree of Meaning', tasks: ['Explore synonym spectrums (e.g. happy -> cheerful -> ecstatic -> thrilled)', 'Select synonyms matching formal vs casual context'] }
    ],
    notes: 'Synonyms are rarely 100% interchangeable: consider tone, register, and connotations before swapping words.',
    practiceQuestions: ['Compare the connotations of "stubborn" vs "persistent" vs "resolute".', 'Provide two formal synonyms and two casual synonyms for "tired".']
  },
  {
    module: 'Module 2: Vocabulary',
    name: 'Antonyms',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Contrasting Ideas', tasks: ['Use direct antonym pairs to express sharp contrast in speech', 'Use prefixes (un-, in-, dis-, im-, mis-) to generate opposites'] }
    ],
    notes: 'Antonyms clarify arguments through contrast: "It was not an obstacle, but a breakthrough".',
    practiceQuestions: ['What is the antonym of "transparent" in a business communication context?', 'Form antonyms using prefixes for: rational, decisive, competent, legitimate.']
  },
  {
    module: 'Module 2: Vocabulary',
    name: 'Phrasal verbs',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Idiomatic Particle Combinations', tasks: ['Master top 30 conversational phrasal verbs: figure out, look forward to, call off, put up with, carry out', 'Understand separable vs inseparable phrasal verbs'] }
    ],
    notes: 'Native English speakers use phrasal verbs continuously in informal and business conversations rather than Latinate equivalents.',
    practiceQuestions: ['Replace Latinate verbs: "investigate", "cancel", "tolerate" with common phrasal verbs.', 'What is the difference between "bring up" and "bring about"?']
  },
  {
    module: 'Module 2: Vocabulary',
    name: 'Idioms',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Figurative Expressions', tasks: ['Learn common idioms: hit the ground running, touch base, on the same page, bite the bullet, think outside the box', 'Understand when idioms add color vs when they obscure meaning for non-native listeners'] }
    ],
    notes: 'Use idioms naturally in moderation; overusing idioms makes speech sound clichéd and unnatural.',
    practiceQuestions: ['Explain the meaning and context of "blessing in disguise".', 'Use "touch base" and "back to the drawing board" in a brief workplace scenario.']
  },
  {
    module: 'Module 2: Vocabulary',
    name: 'Collocations',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Natural Word Partnerships', tasks: ['Master verb-noun collocations: make a decision (not do a decision), take a break, pay attention', 'Learn adjective-noun pairings: heavy rain (not strong rain), fast food (not quick food)'] }
    ],
    notes: 'Sounding fluent depends heavily on collocations: native speakers immediately notice unnatural word pairings even if grammatically correct.',
    practiceQuestions: ['Do you "make an effort" or "do an effort"? Explain standard collocation rules.', 'List three natural noun collocations for the verb "raise".']
  },
  {
    module: 'Module 2: Vocabulary',
    name: 'Professional vocabulary',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Corporate & Workplace Terminology', tasks: ['Incorporate deliverable, bandwidth, stakeholder, benchmark, scalable, leverage, bottleneck', 'Express complex business concepts concisely'] }
    ],
    notes: 'Professional vocabulary elevates your credibility in meetings and interviews when applied accurately.',
    practiceQuestions: ['Define "bandwidth" and "bottleneck" as used in professional team settings.', 'Use "benchmark" and "leverage" in an explanation of a technical project.']
  },
  {
    module: 'Module 2: Vocabulary',
    name: 'Transition words',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Signposting & Speech Cohesion', tasks: ['Addition: furthermore, in addition', 'Contrast: however, on the other hand', 'Cause/Effect: consequently, therefore', 'Conclusion: in summary, ultimately'] }
    ],
    notes: 'Signposting words act as vocal turn signals, alerting the listener to where your argument is heading.',
    practiceQuestions: ['How do transition words guide an audience through a technical presentation?', 'Give three alternatives to "also" and two alternatives to "but".']
  },
  {
    module: 'Module 2: Vocabulary',
    name: 'Word usage',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Commonly Confused Words', tasks: ['Differentiate affect vs effect, lose vs loose, advise vs advice, complement vs compliment, principle vs principal'] }
    ],
    notes: 'Affect is usually a verb ("it affects us"); effect is usually a noun ("the effect was noticeable").',
    practiceQuestions: ['Explain the difference between "complementary" and "complimentary".', 'Use "advise" and "advice" correctly in two separate sentences.']
  },

  // Module 3: Pronunciation (8 topics)
  {
    module: 'Module 3: Pronunciation',
    name: 'English sounds',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'IPA & Articulation Points', tasks: ['Explore the International Phonetic Alphabet (IPA) for English', 'Practice tricky consonants: /θ/ (think), /ð/ (this), /v/ vs /w/, /ʃ/ vs /s/'] }
    ],
    notes: 'English is not phonetic: spelling does not reliably indicate pronunciation. Use IPA transcription in dictionaries.',
    practiceQuestions: ['What is the difference between voiced /ð/ (the, that) and unvoiced /θ/ (think, through)?', 'Practice pronouncing: "They thought through their theoretical thesis".']
  },
  {
    module: 'Module 3: Pronunciation',
    name: 'Vowels and consonants',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Short vs Long Vowels & Minimal Pairs', tasks: ['Contrast short /ɪ/ (ship) vs long /iː/ (sheep), /ʊ/ (look) vs /uː/ (luke)', 'Practice consonant clusters (str-, spl-, -sts, -lpt)'] }
    ],
    notes: 'Minimal pairs highlight sound differences that change word meanings: confusing "ship" and "sheep" alters the entire sentence.',
    practiceQuestions: ['Practice minimal pairs: beat/bit, leave/live, reach/rich, seek/sick.', 'How does lip positioning change between /w/ and /v/?']
  },
  {
    module: 'Module 3: Pronunciation',
    name: 'Word stress',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Syllabic Emphasis & Schwa /ə/', tasks: ['Identify stressed syllables (louder, longer, higher pitch)', 'Master the Schwa sound /ə/: unstressed reduction in "about", "banana", "photograph"'] }
    ],
    notes: 'English is a stress-timed language: unaccented syllables compress toward the neutral Schwa /ə/ sound.',
    practiceQuestions: ['Mark the stressed syllable in: PHO-to-graph vs pho-TOG-ra-phy vs pho-to-GRAPH-ic.', 'How does noun vs verb stress change in words like "project", "record", and "present"?']
  },
  {
    module: 'Module 3: Pronunciation',
    name: 'Sentence stress',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Content vs Structure Words', tasks: ['Stress content words (nouns, main verbs, adjectives, adverbs)', 'De-stress structure words (articles, prepositions, pronouns, auxiliaries)'] }
    ],
    notes: 'Sentence stress communicates meaning: shifting stress changes the implied message ("I didn\'t say he stole the money").',
    practiceQuestions: ['Read the sentence 5 times, shifting stress to a different word each time and analyze the changing implication.', 'Why does flattening sentence stress make speech sound robotic?']
  },
  {
    module: 'Module 3: Pronunciation',
    name: 'Intonation',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Pitch Contours & Emotion', tasks: ['Falling intonation for statements, commands, and Wh- questions', 'Rising intonation for Yes/No questions and list items before the final item'] }
    ],
    notes: 'Intonation conveys attitude, politeness, and certainty. Up-talk (rising intonation on statements) undermines speaker authority.',
    practiceQuestions: ['Why does rising intonation on statements sound uncertain or apologetic?', 'Demonstrate falling intonation on a definitive executive conclusion.']
  },
  {
    module: 'Module 3: Pronunciation',
    name: 'Connected speech',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Fluid Speech Transitions', tasks: ['Linking (consonant to vowel: "hold on" -> "hol-don")', 'Elision (dropping sounds: "next door" -> "nexdoor")', 'Assimilation (sounds merging: "don\'t you" -> "donchu")'] }
    ],
    notes: 'Connected speech is not sloppy: it is the natural, phonetic economy of fluent English conversation.',
    practiceQuestions: ['Explain the linking sound in: "go out" (intrusive /w/) and "see it" (intrusive /j/).', 'Why does understanding connected speech dramatically improve listening comprehension?']
  },
  {
    module: 'Module 3: Pronunciation',
    name: 'Pronunciation practice',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Tongue Twisters & Drills', tasks: ['Practice tongue twisters targeting specific articulators', 'Warm up facial muscles, tongue tip, and jaw before speaking sessions'] }
    ],
    notes: 'Pronunciation is physical muscle memory. Daily 5-minute vocal warmups train your articulators for crisp English diction.',
    practiceQuestions: ['Recite smoothly 3 times: "Red leather, yellow leather, unique New York."', 'Practice: "She sells seashells by the seashore." Focus on /s/ vs /ʃ/ distinction.']
  },
  {
    module: 'Module 3: Pronunciation',
    name: 'Listening and imitation',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Ear Training', tasks: ['Listen attentively to native speakers (TED talks, podcasts)', 'Identify pitch peaks, pauses, and sound reductions in authentic speech'] }
    ],
    notes: 'You cannot pronounce what your ear cannot perceive: active listening precedes vocal improvement.',
    practiceQuestions: ['How does active listening differ from passive background listening?', 'Transcribe 30 seconds of an audio clip noting every pause and stressed word.']
  },

  // Module 4: Everyday Conversation (12 topics)
  {
    module: 'Module 4: Everyday Conversation',
    name: 'Self-introduction',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'The 30-Second Elevator Pitch', tasks: ['Structure name, role, background, current passion, and forward-looking hook', 'Deliver natural introduction without sounding memorized or robotic'] }
    ],
    notes: 'Structure: Who you are + What you do + Impact/value + Personal touch or engaging hook.',
    practiceQuestions: ['Deliver a 30-second self-introduction for a professional networking meetup.', 'How do you adapt your self-introduction when meeting peers versus executive leadership?']
  },
  {
    module: 'Module 4: Everyday Conversation',
    name: 'Family and friends',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Personal Relationships', tasks: ['Describe family members, relationships, personalities, and shared memories', 'Answer conversational questions about hometown and background naturally'] }
    ],
    notes: 'Use vivid character adjectives (supportive, witty, ambitious, reliable) rather than generic phrases.',
    practiceQuestions: ['Describe your closest friend\'s personality using three distinct adjectives with supporting examples.', 'Answer: "Tell me a bit about where you grew up."']
  },
  {
    module: 'Module 4: Everyday Conversation',
    name: 'Daily routine',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Habits & Time Management', tasks: ['Use simple present tense and adverbs of frequency to describe a typical day', 'Incorporate sequence markers: first, afterwards, concurrently, finally'] }
    ],
    notes: 'Describe your routine by focusing on energy and milestones rather than listing hours like a timetable.',
    practiceQuestions: ['Walk through your ideal morning routine in 60 seconds using varied transition words.', 'How do you handle interruptions to your daily schedule?']
  },
  {
    module: 'Module 4: Everyday Conversation',
    name: 'College life',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Academic Experiences & Growth', tasks: ['Discuss major, coursework, campus activities, group projects, and faculty interactions', 'Reflect on personal transitions from school to university'] }
    ],
    notes: 'Focus on skills learned and collaborative milestones achieved during academic years.',
    practiceQuestions: ['Describe an impactful university course or professor that shaped your thinking.', 'How did participating in college extracurriculars develop your teamwork abilities?']
  },
  {
    module: 'Module 4: Everyday Conversation',
    name: 'Hobbies',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Passions & Downtime', tasks: ['Explain why you enjoy specific hobbies and how you got started', 'Convey enthusiasm using vocal modulation and expressive vocabulary'] }
    ],
    notes: 'Hobbies showcase your personality, curiosity, discipline, and life balance.',
    practiceQuestions: ['Answer: "What do you like to do in your spare time to recharge?"', 'Describe a creative hobby and explain what challenge it presents to you.']
  },
  {
    module: 'Module 4: Everyday Conversation',
    name: 'Shopping',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Retail Transactions & Inquiries', tasks: ['Ask about prices, sizes, discounts, return policies, and warranties', 'Negotiate politely: "Could you offer a better deal on this?"'] }
    ],
    notes: 'Practice polite transactional phrases: "Do you happen to have this in a larger size?"',
    practiceQuestions: ['Roleplay returning a defective electronic item at customer service.', 'How do you politely inquire about price matching or promotional discounts?']
  },
  {
    module: 'Module 4: Everyday Conversation',
    name: 'Travel',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Exploring Destinations', tasks: ['Narrate travel experiences, cultural observations, and unexpected adventures', 'Discuss navigation, airports, hotels, and local cuisines'] }
    ],
    notes: 'Use sensory descriptive vocabulary: picturesque scenery, bustling markets, tranquil beaches, breathtaking vistas.',
    practiceQuestions: ['Describe the most memorable place you have visited and explain what made it unforgettable.', 'Narrate a travel mishap and how you resolved it.']
  },
  {
    module: 'Module 4: Everyday Conversation',
    name: 'Asking questions',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Curiosity & Active Dialogue', tasks: ['Ask open-ended questions (starting with How, What, Why) to keep conversations alive', 'Avoid closed Yes/No interrogation traps'] }
    ],
    notes: 'Good conversationalists listen twice as much as they speak by asking thoughtful open-ended questions.',
    practiceQuestions: ['Transform 3 closed questions ("Did you like the book?") into open-ended questions.', 'What follow-up question keeps a conversation flowing naturally after someone shares an achievement?']
  },
  {
    module: 'Module 4: Everyday Conversation',
    name: 'Giving directions',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Spatial Clarity & Landmarks', tasks: ['Use directional prepositions and imperative action verbs (turn left at the intersection, walk past the fountain, across from the bank)', 'Confirm understanding: "Does that make sense?"'] }
    ],
    notes: 'Anchor directions with prominent landmarks rather than street numbers alone.',
    practiceQuestions: ['Give verbal directions from your room to the nearest transit station or grocery store.', 'What clarifying questions do you ask when receiving ambiguous directions?']
  },
  {
    module: 'Module 4: Everyday Conversation',
    name: 'Expressing feelings',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Emotional Granularity', tasks: ['Differentiate nuanced feelings (frustrated vs overwhelmed, optimistic vs relieved)', 'Express empathy: "I can understand how challenging that must have felt"'] }
    ],
    notes: 'Emotional granularity—naming precise emotions—builds deep rapport and authentic connection.',
    practiceQuestions: ['Express disappointment about a cancelled project constructively and professionally.', 'How do you verbally validate a friend\'s frustration without offering unsolicited advice?']
  },
  {
    module: 'Module 4: Everyday Conversation',
    name: 'Sharing opinions',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Diplomatic Viewpoint Sharing', tasks: ['Introduce views: "In my perspective...", "From what I\'ve observed...", "I\'m inclined to believe..."', 'Disagree politely: "I see your point, however consider..."'] }
    ],
    notes: 'Never say "You\'re wrong". Disagree diplomatically by validating their premise before presenting your alternative perspective.',
    practiceQuestions: ['Express disagreement with a team proposal without sounding confrontational.', 'State your opinion on remote work vs office work with supporting reasons.']
  },
  {
    module: 'Module 4: Everyday Conversation',
    name: 'Telling stories',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Conversational Narrative Arc', tasks: ['Structure Hook -> Context -> Escalating Conflict -> Climax -> Resolution', 'Use narrative tenses (Past Continuous for background, Simple Past for action)'] }
    ],
    notes: 'Start with a hook: "The strangest thing happened on my commute this morning..."',
    practiceQuestions: ['Tell a 90-second story about a funny misunderstanding.', 'How do you keep listeners engaged during a narrative without getting bogged down in minor details?']
  },

  // Module 5: Fluency (11 topics)
  {
    module: 'Module 5: Fluency',
    name: 'Thinking in English',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Eliminating Internal Mental Translation', tasks: ['Narrate your internal thoughts in English throughout the day', 'Label physical objects around you directly in English without native-language bridge'] }
    ],
    notes: 'Translating in your head creates a 2-second lag and unnatural grammatical interference. Direct concept-to-English association is the key to true fluency.',
    practiceQuestions: ['Practice 5 minutes of internal monologue in English describing your immediate sensory environment.', 'What daily habits stop your brain from translating from your mother tongue?']
  },
  {
    module: 'Module 5: Fluency',
    name: 'Speaking without translating',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Automatic Linguistic Retrieval', tasks: ['Practice rapid verbal associations without pausing to translate', 'Learn to paraphrase concepts when a specific vocabulary word escapes you'] }
    ],
    notes: 'Circumlocution: when you forget a word, describe its function, shape, or purpose rather than freezing.',
    practiceQuestions: ['If you forget the word "colander", how do you describe it smoothly without breaking conversation?', 'Practice circumlocution for 3 complex objects.']
  },
  {
    module: 'Module 5: Fluency',
    name: 'One-minute speaking',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Continuous Speech Stamina', tasks: ['Speak continuously for 60 seconds on a random topic without stopping or saying "um"', 'Maintain smooth breathing and steady vocal pace'] }
    ],
    notes: 'The 1-minute drill trains your brain to generate ideas and vocalize simultaneously without stalling.',
    practiceQuestions: ['Speak for exactly 60 seconds on "The value of reading books". Time yourself with a stopwatch.', 'Speak for 60 seconds on "Why breakfast matters".']
  },
  {
    module: 'Module 5: Fluency',
    name: 'Two-minute speaking',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Structured 120-Second Presentation', tasks: ['Follow Introduction (20s) -> 3 Main Points (80s) -> Conclusion (20s)', 'Pace speech to conclude cleanly within the two-minute window'] }
    ],
    notes: 'Common in IELTS Speaking Part 2 and technical interview screens: demonstrate structured stamina.',
    practiceQuestions: ['Speak for 2 minutes on: "A technological breakthrough that transformed society."', 'How do you structure your notes during a 1-minute preparation window?']
  },
  {
    module: 'Module 5: Fluency',
    name: 'Five-minute speaking',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Extended Monologue & Depth', tasks: ['Maintain cohesive argument with transition signposts across 5 minutes', 'Vary vocal pitch, speed, and volume to keep monologue captivating'] }
    ],
    notes: '5 minutes of unscripted speaking builds deep conversational confidence and endurance.',
    practiceQuestions: ['Deliver a 5-minute talk explaining your target career roadmap and learning goals.', 'How do you recover if you lose your train of thought midway through a 5-minute talk?']
  },
  {
    module: 'Module 5: Fluency',
    name: 'Picture description',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Spatial & Observational Narration', tasks: ['Foreground, background, left, right, center description', 'Speculate on moods, actions, and backstories using modal verbs: "They might be celebrating..."'] }
    ],
    notes: 'Systematic observation: Overview -> Main subjects -> Background -> Speculation/inferences.',
    practiceQuestions: ['Pick any photo and describe it aloud for 2 minutes covering foreground, background, and emotional atmosphere.', 'Use "appears to be", "in all likelihood", and "judging by" in picture description.']
  },
  {
    module: 'Module 5: Fluency',
    name: 'Storytelling',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Vocal Animation & Character Voices', tasks: ['Incorporate direct dialogue into stories ("He looked at me and said, \'No way!\'") ', 'Build tension with deliberate pauses before critical reveals'] }
    ],
    notes: 'The pause right before a punchline or climax creates anticipation and draws the listener in.',
    practiceQuestions: ['Tell a personal story about overcoming fear or taking a leap of faith.', 'How do deliberate vocal pauses enhance storytelling dramatic effect?']
  },
  {
    module: 'Module 5: Fluency',
    name: 'Impromptu speaking',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Table Topics & Frameworks', tasks: ['Apply PREP framework (Point, Reason, Example, Point)', 'Apply Past-Present-Future framework to answer unexpected questions instantly'] }
    ],
    notes: 'Never start talking without a framework. PREP ensures you always deliver a structured answer: Point -> Reason -> Example -> Point.',
    practiceQuestions: ['Apply the PREP framework to answer immediately: "Is social media doing more harm than good?"', 'Use Past-Present-Future to answer: "What do you think of artificial intelligence?"']
  },
  {
    module: 'Module 5: Fluency',
    name: 'Conversation practice',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Turn-Taking & Conversational Flow', tasks: ['Master natural conversational turn-taking without interrupting rudely', 'Use conversational fillers gracefully: "That\'s a fascinating point...", "Let me consider that for a moment..."'] }
    ],
    notes: 'Natural conversation is a game of tennis, not golf. Return the conversational ball with an open question.',
    practiceQuestions: ['How do you politely interject into a lively group discussion without talking over someone?', 'What phrases give you 5 seconds to think without awkward dead silence?']
  },
  {
    module: 'Module 5: Fluency',
    name: 'Shadowing',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Speech Synchronization Technique', tasks: ['Listen to native audio and repeat aloud concurrently with a 0.5-second delay', 'Match the speaker\'s exact rhythm, intonation, pitch peaks, and connected speech'] }
    ],
    notes: 'Shadowing is the gold-standard technique used by simultaneous conference interpreters to achieve native-like fluency.',
    practiceQuestions: ['Shadow a 2-minute clip of a TED speaker or podcast host. What was the most challenging aspect?', 'How many minutes of daily shadowing produces noticeable improvements in speaking rhythm?']
  },
  {
    module: 'Module 5: Fluency',
    name: 'Listening comprehension',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Decoding Diverse Accents & Cadences', tasks: ['Expose ear to American, British, Australian, and international English accents', 'Identify implied meaning, sarcasm, and emotional subtext in spoken dialogue'] }
    ],
    notes: 'Global business involves diverse accents: train your ear on international English variations, not just one dialect.',
    practiceQuestions: ['Listen to an Australian or British business podcast and summarize the main thesis.', 'How do you politely ask a foreign speaker with a strong accent to repeat something without causing offense?']
  },

  // Module 6: Confidence and Personality (10 topics)
  {
    module: 'Module 6: Confidence and Personality',
    name: 'Speaking without fear',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Overcoming Glossophobia', tasks: ['Reframe nervous energy as excitement (physiological arousal is identical)', 'Shift mindset from performance anxiety ("Are they judging me?") to contribution mindset ("What value can I give them?")'] }
    ],
    notes: 'Audiences don\'t want you to fail; they want you to succeed. Focus on your message and serving your listeners, not on your ego.',
    practiceQuestions: ['How does shifting from a performance mindset to a service mindset dissolve speaking anxiety?', 'What physical breathing exercise calms pre-speaking adrenaline surges?']
  },
  {
    module: 'Module 6: Confidence and Personality',
    name: 'Reducing hesitation',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Eliminating Speech Blocks', tasks: ['Accept silence: replace panic pauses with calm, measured silence', 'Slow down speaking tempo by 15% to give your brain time to formulate thoughts'] }
    ],
    notes: 'A silent pause sounds thoughtful and confident to listeners, whereas panicked hesitation sounds insecure.',
    practiceQuestions: ['Practice delivering a 1-minute response using silent 2-second pauses instead of rushing.', 'Why do listeners perceive silence as authoritative while the speaker perceives it as terrifying?']
  },
  {
    module: 'Module 6: Confidence and Personality',
    name: 'Reducing filler words',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Eliminating Um, Uh, Like, You Know', tasks: ['Record yourself and count filler word frequency per minute', 'Train yourself to close your mouth and breathe silently when tempted to say "um"'] }
    ],
    notes: 'Filler words are verbal crutches used because we fear silence. Embrace the power of the silent pause.',
    practiceQuestions: ['Record a 2-minute talk and tally every filler word ("um", "like", "you know", "basically").', 'What physical cue (e.g. pinching fingers) can snap your awareness when a filler word approaches?']
  },
  {
    module: 'Module 6: Confidence and Personality',
    name: 'Voice clarity',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Diction & Articulation', tasks: ['Pronounce word endings crisply (e.g. "t", "d", "ed", "s")', 'Open mouth wider and engage diaphragm breath support to eliminate mumbling'] }
    ],
    notes: 'Mumbling happens when speakers drop word endings and don\'t drop their jaw sufficiently. Open your mouth and articulate final consonants.',
    practiceQuestions: ['Read a paragraph aloud exaggerating lip and jaw movements to build articulatory clarity.', 'Why is diaphragmatic breathing essential for vocal projection and stability?']
  },
  {
    module: 'Module 6: Confidence and Personality',
    name: 'Voice modulation',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Pitch, Pace, & Volume Dynamics', tasks: ['Vary pitch (avoid monotonous drone)', 'Adjust pace (slow down for critical points, speed up for energetic stories)', 'Modulate volume for emphasis'] }
    ],
    notes: 'Monotone delivery lulls listeners to sleep. Treat your voice like an instrument with high notes, low notes, and dynamic volume.',
    practiceQuestions: ['Deliver the same sentence in three ways: authoritative, conspiratorial whisper, and enthusiastic celebration.', 'How does slowing down your pace on a key sentence emphasize its importance?']
  },
  {
    module: 'Module 6: Confidence and Personality',
    name: 'Eye contact',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Connecting with Individuals', tasks: ['Hold eye contact with one person for 3-5 seconds (one complete thought) before moving', 'Look directly into camera lens during virtual video calls'] }
    ],
    notes: 'In virtual video calls, looking at people\'s faces looks like you\'re looking away: look directly into the camera lens to project eye contact.',
    practiceQuestions: ['What is the "one thought, one person" eye contact rule for presentations?', 'How do you maintain natural eye contact in a virtual Google Meet or Zoom interview?']
  },
  {
    module: 'Module 6: Confidence and Personality',
    name: 'Body language',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Open Posture & Expressive Gestures', tasks: ['Adopt open posture (shoulders back, chest open, uncrossed arms)', 'Use purposeful hand gestures that align with your spoken message (e.g. framing, counting)'] }
    ],
    notes: 'Body language accounts for over 50% of listener perception. Open expansive posture primes your brain with testosterone and reduces cortisol.',
    practiceQuestions: ['What body language signals defensiveness or disengagement in meetings?', 'Demonstrate 3 effective hand gestures for presenting numerical growth, comparison, and inclusion.']
  },
  {
    module: 'Module 6: Confidence and Personality',
    name: 'Facial expressions',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Warmth & Congruence', tasks: ['Maintain approachable warmth with natural smiling', 'Ensure facial expression matches spoken emotional tone (expressive congruence)'] }
    ],
    notes: 'People can hear a smile through your voice. A warm, expressive face instantly relaxes the listener.',
    practiceQuestions: ['Why is facial congruence important when delivering constructive feedback?', 'How does smiling alter the physical acoustics of your voice?']
  },
  {
    module: 'Module 6: Confidence and Personality',
    name: 'Active listening',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Reflective Listening & Paraphrasing', tasks: ['Listen without formulating your response while the other person is speaking', 'Paraphrase back: "What I\'m hearing is...", "If I understand correctly..."'] }
    ],
    notes: 'Most people do not listen with the intent to understand; they listen with the intent to reply. Active listening transforms communication.',
    practiceQuestions: ['Demonstrate reflective listening by paraphrasing a complex stakeholder complaint.', 'What non-verbal cues indicate that you are actively listening to a speaker?']
  },
  {
    module: 'Module 6: Confidence and Personality',
    name: 'Assertive communication',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Firm, Respectful Boundaries', tasks: ['Balance passive vs aggressive vs assertive communication', 'Use "I" statements to express needs: "I need...", "I recommend...", "I cannot take this on right now"'] }
    ],
    notes: 'Assertiveness is expressing your thoughts, feelings, and boundaries clearly and respectfully without being aggressive or apologetic.',
    practiceQuestions: ['How do you politely but assertively say "No" to a project request that exceeds your team\'s capacity?', 'Compare an aggressive statement with an assertive equivalent in a team meeting.']
  },

  // Module 7: Professional English (12 topics)
  {
    module: 'Module 7: Professional English',
    name: 'Workplace communication',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Professional Etiquette Across Channels', tasks: ['Choose appropriate medium: Slack for quick queries, Email for formal records, Call for complex alignment', 'Maintain constructive, solution-oriented language in all workplace discourse'] }
    ],
    notes: 'Always focus on the solution: instead of "This won\'t work", say "To make this feasible, we would need additional testing time".',
    practiceQuestions: ['How do you determine when a Slack discussion should be escalated to a live 10-minute call?', 'Rephrase: "You failed to send the report on time" into constructive professional phrasing.']
  },
  {
    module: 'Module 7: Professional English',
    name: 'Professional introductions',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Executive & Client Introductions', tasks: ['Introduce colleagues with authority: Name, Role, Key expertise, Context', 'Deliver crisp, credible personal introductions in client meetings'] }
    ],
    notes: 'When introducing others, highlight their specific domain authority to establish immediate credibility.',
    practiceQuestions: ['Introduce a senior engineer to a client executive highlighting their technical expertise.', 'Deliver a 45-second personal introduction on your first day joining a new engineering team.']
  },
  {
    module: 'Module 7: Professional English',
    name: 'Email writing',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'The Perfect Business Email', tasks: ['Write action-oriented subject lines: [Action Required by Friday] Q3 Budget Review', 'Structure body with BLUF (Bottom Line Up Front), bullet points, and explicit call-to-action'] }
    ],
    notes: 'If your email requires more than 3 paragraphs, it should probably be a document or a brief meeting.',
    practiceQuestions: ['Draft a professional email requesting a 1-week deadline extension from a project sponsor.', 'What makes a subject line effective at ensuring immediate executive opening?']
  },
  {
    module: 'Module 7: Professional English',
    name: 'Meeting communication',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Speaking Up in Meetings', tasks: ['Contribute early in meetings (within first 10 minutes) to break personal speaking inertia', 'Build on others\' ideas: "Building on what Sarah mentioned, we could also..."'] }
    ],
    notes: 'Speaking in the first 10 minutes establishes your presence and dramatically reduces anxiety for the remainder of the call.',
    practiceQuestions: ['What phrase can you use to seamlessly enter a fast-moving meeting discussion?', 'How do you summarize discussion consensus and assign action items at the conclusion of a meeting?']
  },
  {
    module: 'Module 7: Professional English',
    name: 'Presentations',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Presentation Architecture & Delivery', tasks: ['Hook -> Agenda -> Core Message -> Supporting Proof -> Q&A -> Call to Action', 'Signpost transitions smoothly between slides'] }
    ],
    notes: 'Never read your slides: slides are visual support for the audience, not a teleprompter for the speaker.',
    practiceQuestions: ['Deliver a 2-minute opening presentation hook for a software architecture proposal.', 'How do you transition between two slides without saying "On this next slide..."?']
  },
  {
    module: 'Module 7: Professional English',
    name: 'Group discussions',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'GD Leadership & Dynamics', tasks: ['Initiate discussions constructively or summarize divergent opinions to create consensus', 'Invite quiet participants into the conversation to demonstrate leadership'] }
    ],
    notes: 'In Group Discussions, moderators evaluate leadership, active listening, and consensus-building, not who shouts the loudest.',
    practiceQuestions: ['How do you bring a quiet participant into a group discussion to demonstrate inclusive leadership?', 'How do you steer a derailed group discussion back to the core topic?']
  },
  {
    module: 'Module 7: Professional English',
    name: 'Job interviews',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Interview Fluency & Presence', tasks: ['Deliver confident, articulate answers with structured pauses', 'Ask insightful questions at the end of the interview that demonstrate strategic thinking'] }
    ],
    notes: 'Interviews are a conversation between peers evaluating mutual fit, not an interrogation. Speak with executive composure.',
    practiceQuestions: ['What three strategic questions should you ask the interviewer when they say "Do you have any questions for us?"', 'How do you handle an unexpected question you don\'t immediately know the answer to?']
  },
  {
    module: 'Module 7: Professional English',
    name: 'HR questions',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Mastering Classic HR Questions', tasks: ['Answer: "Tell me about yourself", "What is your greatest weakness?", "Why this company?", "Where do you see yourself in 5 years?"'] }
    ],
    notes: 'Weakness answer formula: Name a genuine non-fatal skill + Describe concrete proactive steps you are taking to improve + Show recent progress.',
    practiceQuestions: ['Deliver a compelling, authentic answer to: "What is your greatest weakness?"', 'Answer: "Why should we hire you over other qualified candidates?"']
  },
  {
    module: 'Module 7: Professional English',
    name: 'Technical explanations',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Simplifying Complexity (Feynman Technique)', tasks: ['Explain complex technical concepts (e.g. APIs, recursion, caching) in simple, accessible language', 'Use vivid real-world analogies to make abstract concepts concrete'] }
    ],
    notes: '"If you can\'t explain it simply, you don\'t understand it well enough." (Albert Einstein). Master the art of the analogy.',
    practiceQuestions: ['Explain how an API works to a non-technical 10-year-old using a restaurant analogy.', 'Explain database indexing using a textbook index analogy.']
  },
  {
    module: 'Module 7: Professional English',
    name: 'Explaining projects',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Project Storytelling Architecture', tasks: ['Context/Problem -> Architecture/Technology Choices -> Challenges Overcome -> Quantified Business Impact', 'Avoid diving into low-level code details before establishing the high-level business problem'] }
    ],
    notes: 'Lead with the business impact: "I built an automated telemetry system that reduced latency by 35% across 50,000 users".',
    practiceQuestions: ['Walk through a technical project in 90 seconds using Problem -> Solution -> Impact.', 'How do you explain the trade-offs behind a technical decision you made?']
  },
  {
    module: 'Module 7: Professional English',
    name: 'Giving feedback',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Constructive Feedback Frameworks', tasks: ['Apply SBI model (Situation, Behavior, Impact)', 'Avoid destructive generalizations ("You always", "You never"); focus on specific observed actions'] }
    ],
    notes: 'Situation-Behavior-Impact (SBI): "In yesterday\'s sprint review (S), when you interrupted the client (B), it caused them to disengage from our demo (I)".',
    practiceQuestions: ['Construct an SBI feedback statement for a colleague who frequently misses team sync deadlines.', 'How do you praise positive behavior effectively to reinforce team excellence?']
  },
  {
    module: 'Module 7: Professional English',
    name: 'Handling questions',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Q&A Mastery', tasks: ['Listen -> Acknowledge -> Bridge -> Answer -> Check in', 'Gracefully handle hostile, off-topic, or unanswerable questions: "I don\'t have that exact metric on hand, but I will follow up by 3 PM"'] }
    ],
    notes: 'Never bluff an answer. Admitting what you don\'t know with a committed follow-up timeline projects supreme confidence and integrity.',
    practiceQuestions: ['How do you answer a question when you genuinely do not know the answer?', 'What is the "Bridging" technique used in executive communication?']
  },

  // Module 8: Daily Speaking Practice (7 topics)
  {
    module: 'Module 8: Daily Speaking Practice',
    name: 'Read aloud',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 30,
    subtopics: [
      { name: '10-Minute Daily Reading Aloud', tasks: ['Read high-quality journalism (NYT, Economist, BBC) aloud with deliberate pacing', 'Focus on vocal clarity, punctuation pauses, and full sentence intonation'] }
    ],
    notes: 'Reading aloud trains your tongue, vocal cords, and facial muscles on correct English syntax without cognitive generation pressure.',
    practiceQuestions: ['Read an editorial paragraph aloud, focusing strictly on crisp final consonants.', 'Record yourself reading aloud and analyze your pitch variance.']
  },
  {
    module: 'Module 8: Daily Speaking Practice',
    name: 'Listen to English',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 30,
    subtopics: [
      { name: 'Immersive Input Habit', tasks: ['Listen to 20-30 minutes of podcasts or audiobooks daily during transit or workouts', 'Expose brain to natural conversational cadences and idiomatic expressions'] }
    ],
    notes: 'Language acquisition requires massive comprehensible input: listen to topics you are genuinely fascinated by.',
    practiceQuestions: ['What English podcast will you commit to listening to daily?', 'Note down 3 interesting expressions from a 20-minute listening session.']
  },
  {
    module: 'Module 8: Daily Speaking Practice',
    name: 'Learn five new words',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 25,
    subtopics: [
      { name: 'Active Vocabulary Integration', tasks: ['Learn 5 words daily in context (meaning, collocation, pronunciation)', 'Use all 5 new words in spoken sentences aloud immediately'] }
    ],
    notes: 'A word is not yours until you have spoken it aloud in three different sentences.',
    practiceQuestions: ['Select 5 new professional words and craft an original spoken sentence for each.', 'How does spaced repetition prevent vocabulary decay?']
  },
  {
    module: 'Module 8: Daily Speaking Practice',
    name: 'Record a voice note',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 30,
    subtopics: [
      { name: 'Self-Audit & Monitoring', tasks: ['Record a 2-minute voice note on your phone reflecting on your day', 'Listen back immediately to audit clarity, pace, filler words, and pronunciation'] }
    ],
    notes: 'Listening to your own recorded voice is uncomfortable at first, but it is the fastest catalyst for rapid vocal refinement.',
    practiceQuestions: ['Record a 2-minute voice reflection on your biggest win today. Listen to it and list 1 strength and 1 area for improvement.', 'What speech patterns do you notice when listening to your own recording?']
  },
  {
    module: 'Module 8: Daily Speaking Practice',
    name: 'Speak for two minutes',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 30,
    subtopics: [
      { name: 'Daily Unscripted Monologue', tasks: ['Pick a random topic card daily and speak for 120 seconds continuously without stopping', 'Build stamina, agility, and cognitive retrieval speed'] }
    ],
    notes: 'Consistency beats intensity: 2 minutes of unscripted speaking every single day creates dramatic results in 30 days.',
    practiceQuestions: ['Set a 2-minute timer and speak on: "The most important habit for success".', 'How does daily unscripted practice desensitize the fear of speaking?']
  },
  {
    module: 'Module 8: Daily Speaking Practice',
    name: 'Have a conversation',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Live Human Interaction', tasks: ['Engage in at least one real English conversation daily with peers, mentors, or language exchange partners', 'Practice active questioning and empathetic rapport building'] }
    ],
    notes: 'Speaking is an interactive sport: you cannot master it by reading books alone. Seek real human conversational practice daily.',
    practiceQuestions: ['Where can you find daily conversational partners in your current environment?', 'How do you initiate a casual English conversation with a colleague?']
  },
  {
    module: 'Module 8: Daily Speaking Practice',
    name: 'Review mistakes',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 25,
    subtopics: [
      { name: 'Growth Mindset & Error Journal', tasks: ['Maintain a small personal "Mistake Log" noting pronunciation stumbles and grammatical slips', 'Re-say corrected sentences 5 times aloud to rewrite neural pathways'] }
    ],
    notes: 'Mistakes are proof that you are stretching your linguistic boundaries. Celebrate mistakes, log them, and practice the correct form.',
    practiceQuestions: ['What three recurring spoken mistakes did you notice this week and how will you correct them?', 'Why is repeating the corrected sentence aloud 5 times essential for muscle memory?']
  }
];

export const INITIAL_ENGLISH_TOPICS: Topic[] = ENGLISH_MODULES_RAW.map((raw, index) => {
  const seq = index + 1;
  const id = `eng_topic_${seq}`;
  return {
    id,
    learningAreaId: 'la_english',
    learningAreaName: 'English Speaking — Fluency and Confidence',
    subjectId: 'sub_eng_fluency',
    subjectName: 'Spoken English & Professional Oratory',
    module: raw.module,
    name: raw.name,
    sequenceNumber: seq,
    importance: raw.importance,
    difficulty: raw.difficulty,
    estimatedMinutes: raw.estimatedMinutes,
    status: 'Not Started',
    notes: raw.notes,
    practiceQuestions: raw.practiceQuestions.map((q, qIdx) => ({
      id: `${id}_q_${qIdx + 1}`,
      question: q,
      completed: false,
    })),
    completionDate: null,
    revisionStatus: 'Not Reviewed',
    revisionCount: 0,
    nextRevisionDate: null,
    subtopics: raw.subtopics.map((sub, sIdx) => ({
      id: `${id}_sub_${sIdx + 1}`,
      name: sub.name,
      sequenceNumber: sIdx + 1,
      importance: raw.importance,
      difficulty: raw.difficulty,
      estimatedMinutes: Math.round(raw.estimatedMinutes / raw.subtopics.length),
      status: 'Not Started',
      notes: '',
      practiceQuestions: [],
      completionDate: null,
      revisionStatus: 'Not Reviewed',
      tasks: sub.tasks.map((taskTitle, tIdx) => ({
        id: `${id}_sub_${sIdx + 1}_task_${tIdx + 1}`,
        title: taskTitle,
        completed: false,
      })),
    })),
  };
});
