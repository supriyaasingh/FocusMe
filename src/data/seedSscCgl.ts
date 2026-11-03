import { Topic } from '../types/syllabus.ts';
import { getSscCategory, getExamTier } from '../services/sscSyllabusService.ts';

interface SscTopicRaw {
  subjectId: 'sub_ssc_tier1' | 'sub_ssc_tier2_p1' | 'sub_ssc_tier2_p3';
  subjectName: string;
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

const SSC_MODULES_RAW: SscTopicRaw[] = [
  // ==========================================
  // TIER 1 - Subject 1: English Language & Comprehension (25 topics)
  // ==========================================
  // Grammar (12)
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Grammar', name: 'Noun',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 45,
    subtopics: [{ name: 'Rules of Nouns & Pluralization', tasks: ['Master singular-plural exceptions (data, phenomena, criteria)', 'Learn nouns that always take singular verbs (scenery, machinery, poetry, furniture)'] }],
    notes: 'Words like furniture, scenery, advice, luggage, machinery, information are uncountable and always take singular verbs in SSC CGL.',
    practiceQuestions: ['Spot the error: "The sceneries of Kashmir are extremely enchanting."', 'Correct the sentence: "He purchased five dozens eggs."']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Grammar', name: 'Pronoun',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Pronoun Order & Cases', tasks: ['Apply order of personal pronouns: 231 for positive context, 123 for negative/confession', 'Use relative pronouns (who vs whom, that vs which)'] }],
    notes: 'Order of pronouns: 2nd, 3rd, 1st person ("You, he and I are partners"). For mistakes or confessions: 1st, 2nd, 3rd ("I, you and he are to blame").',
    practiceQuestions: ['Spot the error: "It is him who broke the classroom window."', 'Choose correct: "Between you and (I / me), this deal is finalized."']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Grammar', name: 'Adjective',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 40,
    subtopics: [{ name: 'Comparisons & Confusing Adjectives', tasks: ['Differentiate elder/older, farther/further, little/few', 'Avoid double comparatives: "more better", "most sweetest"'] }],
    notes: 'Adjectives ending in -ior (senior, junior, prior, superior, inferior) take "to", never "than".',
    practiceQuestions: ['Correct: "He is senior than me by three years."', 'Differentiate: "a little" vs "the little" vs "little" with examples.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Grammar', name: 'Verb',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Transitive/Intransitive & Confusing Verbs', tasks: ['Master lie/lay/laid, rise/raise/rose, hang/hanged/hung', 'Identify finite vs non-finite verbs (gerund, infinitive, participle)'] }],
    notes: 'Lay (put down): lay, laid, laid. Lie (recline): lie, lay, lain. Lie (untruth): lie, lied, lied.',
    practiceQuestions: ['Fill the blank: "He ______ his bag on the table and went to sleep." (laid / lay)', 'Spot error: "The prisoner was hung till death."']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Grammar', name: 'Adverb',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 40,
    subtopics: [{ name: 'Adverb Positioning & Inversion', tasks: ['Apply inversion when negative adverbs begin a sentence (Scarcely, Seldom, Hardly, Barely)', 'Differentiate hard/hardly, late/lately'] }],
    notes: 'Scarcely/Hardly... when; No sooner... than. When starting a sentence with Hardly/Scarcely, use inversion: "Hardly had I arrived when..."',
    practiceQuestions: ['Complete: "Hardly had she entered the room ______ the phone rang."', 'Correct: "No sooner did the bell ring when the students left."']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Grammar', name: 'Preposition',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 60,
    subtopics: [{ name: 'Fixed Prepositions in SSC CGL', tasks: ['Master abide by, abstain from, adhere to, agree with (person) / to (plan)', 'Learn verbs taking no prepositions (comprise, order, attack, reach)'] }],
    notes: '"Comprise" means consist of: never say "comprises of". "Resemble" takes no preposition.',
    practiceQuestions: ['Fill the blank: "He was accused ______ theft by his employer." (with / of / for)', 'Spot the error: "The committee comprises of five distinguished scholars."']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Grammar', name: 'Conjunction',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Correlative Conjunction Pairs', tasks: ['Master Neither...nor, Either...or, Not only...but also, Although...yet', 'Ensure parallel balance between correlated elements'] }],
    notes: '"Lest" is always followed by "should" or bare subjunctive, never "not" (e.g. "Work hard lest you should fail").',
    practiceQuestions: ['Spot the error: "Walk carefully lest you do not slip and fall."', 'Correct: "He not only lost his ticket but also his luggage."']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Grammar', name: 'Articles',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 40,
    subtopics: [{ name: 'Article Rules & Omission', tasks: ['Use "the" with mountain ranges, rivers, holy books, unique bodies', 'Omit articles before names of meals, languages, sports, and school/hospital when visited for primary purpose'] }],
    notes: 'We say "go to hospital" as a patient, but "go to the hospital" as a visitor.',
    practiceQuestions: ['Insert appropriate article: "He is ______ European diplomat."', 'Spot error: "The gold is a precious metal."']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Grammar', name: 'Tenses',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 60,
    subtopics: [{ name: 'Tense Rules in Examination', tasks: ['Master "Since" with past simple and main clause in present perfect', 'Avoid future tense in conditional/time clauses (when, until, as soon as)'] }],
    notes: 'In conditional sentences, the clause containing if/when/until cannot contain "will/shall".',
    practiceQuestions: ['Correct: "If it will rain tomorrow, we will cancel the trip."', 'Fill blank: "Five years have passed since I ______ him." (see / saw / had seen)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Grammar', name: 'Subject-verb agreement',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Concord Traps', tasks: ['As well as, along with, together with agree with the FIRST subject', 'Either...or, neither...nor agree with the NEAREST subject'] }],
    notes: '"The Prime Minister along with his ministers has (not have) arrived."',
    practiceQuestions: ['Choose correct: "Neither the captain nor the sailors (was / were) rescued."', 'Spot error: "The quality of these mangoes are not satisfactory."']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Grammar', name: 'Active and passive voice',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Voice Conversion Rules', tasks: ['Master voice transformations for all tenses', 'Convert imperative sentences: "Let the door be shut" or "You are requested to..."'] }],
    notes: 'SSC CGL Tier 1 & Tier 2 ask direct voice conversion questions: recognize tense shifting rules instantly.',
    practiceQuestions: ['Convert to passive: "They are painting the bridge."', 'Convert to active: "Let the orders be executed immediately."']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Grammar', name: 'Direct and indirect speech',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 55,
    subtopics: [{ name: 'Narration Transformations', tasks: ['Backshift rules for assertives, interrogatives, imperatives, exclamations', 'Convert time/place words: here -> there, tomorrow -> the next day'] }],
    notes: 'Universal truths and historical facts do not undergo tense backshifting in indirect speech.',
    practiceQuestions: ['Convert: "The teacher said, \'The Earth revolves around the Sun.\'"', 'Convert: "He said to me, \'Where are you going?\'"']
  },

  // Vocabulary (5)
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Vocabulary', name: 'Synonyms',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Previous Year Synonyms', tasks: ['Review high-frequency SSC vocabulary: candid, pragmatic, meticulous, obscure', 'Learn root words (bene-, mal-, chron-, greg-)'] }],
    notes: 'Root words allow deducing meanings of unfamiliar vocabulary in seconds.',
    practiceQuestions: ['Find synonym of "CANDID": (a) Deceitful (b) Frank (c) Arrogant (d) Shy.', 'Find synonym of "METICULOUS": (a) Careless (b) Painstaking (c) Hasty (d) Vague.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Vocabulary', name: 'Antonyms',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Opposites & Contextual Nuance', tasks: ['Master SSC CGL repeated antonyms: zenith/nadir, frugal/extravagant, docile/rebellious'] }],
    notes: 'Zenith = peak; Nadir = lowest point. Frugal = economical; Extravagant = wasteful.',
    practiceQuestions: ['Antonym of "NADIR": (a) Zenith (b) Base (c) Depth (d) Bottom.', 'Antonym of "EPHEMERAL": (a) Transient (b) Permanent (c) Brief (d) Short-lived.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Vocabulary', name: 'One-word substitution',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Categorized One-Word Substitutes', tasks: ['Study phobias, manias, killing terms (-cide), person classifications (altruist, misanthrope)'] }],
    notes: 'Altruist: unselfish helper; Misanthrope: hater of mankind; Philanthropist: lover of mankind.',
    practiceQuestions: ['One word: "A person who hates women": (Misogynist)', 'One word: "A remedy for all diseases": (Panacea)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Vocabulary', name: 'Idioms and phrases',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'High-Yield SSC Idioms', tasks: ['Master: burn the midnight oil, once in a blue moon, bolt from the blue, Achilles heel', 'Understand contextual idiom meanings in fill-in-the-blank questions'] }],
    notes: '"A bolt from the blue" = an unexpected shock or event. "Achilles heel" = a vulnerable weakness.',
    practiceQuestions: ['What does "To leave no stone unturned" mean?', 'Meaning of "A dark horse": (An unexpected winner)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Vocabulary', name: 'Spelling correction',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 40,
    subtopics: [{ name: 'Tricky Double Consonants', tasks: ['Master commonly misspelled words: accommodation, embarrassment, committee, millennium, occurrence'] }],
    notes: 'Accommodation (2 c\'s, 2 m\'s); Embarrassment (2 r\'s, 2 s\'s); Committee (2 m\'s, 2 t\'s, 2 e\'s).',
    practiceQuestions: ['Identify the correctly spelled word: (a) Accomodation (b) Accommodation (c) Acommodation', 'Identify the correctly spelled word: (a) Embarasment (b) Embarrassment (c) Embarrasement']
  },

  // Comprehension (8)
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Comprehension', name: 'Reading comprehension',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Passage Scanning & Tone Identification', tasks: ['Read questions first before scanning passage', 'Identify central theme, author tone, and inferential details'] }],
    notes: 'Always read question stems first to identify keywords to target while scanning the comprehension text.',
    practiceQuestions: ['How do you deduce the author\'s tone (objective, critical, laudatory, skeptical)?', 'Practice a 300-word reading passage with 5 targeted inference questions.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Comprehension', name: 'Cloze test',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 55,
    subtopics: [{ name: 'Blanks in Contextual Flow', tasks: ['Read entire paragraph first to understand overall context', 'Eliminate options using grammar and collocation rules'] }],
    notes: 'Cloze tests evaluate vocabulary, prepositions, and grammatical harmony in connected prose.',
    practiceQuestions: ['Solve a 5-blank cloze passage on environmental conservation.', 'What strategy eliminates incorrect options in a cloze test when two synonyms are choices?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Comprehension', name: 'Fill in the blanks',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 40,
    subtopics: [{ name: 'Single & Double Fillers', tasks: ['Select words maintaining grammatical and contextual consistency', 'Check subject-verb agreement and preposition pairings'] }],
    notes: 'Check both semantic fit (meaning) and syntactic fit (grammatical form) before selecting an option.',
    practiceQuestions: ['Fill the blank: "The committee has ______ its decision until next month." (deferred / differed)', 'Fill blank with appropriate collocation: "He made a ______ mistake." (grave / severe)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Comprehension', name: 'Error spotting',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 60,
    subtopics: [{ name: 'Sentence Grammar Diagnostics', tasks: ['Scan subjects and verbs first, check prepositions and parallel structure', 'Test for redundant words and improper modifiers'] }],
    notes: 'Check sequence: 1. Subject-Verb agreement, 2. Tense consistency, 3. Pronoun cases, 4. Preposition rules.',
    practiceQuestions: ['Spot error: "One of the most important feature (A) / of this project (B) / is its scalability (C) / No Error (D)"', 'Spot error: "Unless you do not apologize (A) / you will not (B) / be forgiven (C) / No Error (D)"']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Comprehension', name: 'Sentence improvement',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Replacing Phrasing for Precision', tasks: ['Identify underlined segment errors', 'Select grammatically precise, idiomatic replacement'] }],
    notes: 'If the underlined section is already grammatically flawless, choose "No Improvement". Do not change for stylistic preference.',
    practiceQuestions: ['Improve: "The train departed before I *reached* the station." -> (had reached)', 'Improve: "He is addicted to *gamble*." -> (gambling)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Comprehension', name: 'Sentence correction',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Whole Sentence Structural Syntax', tasks: ['Fix dangling modifiers, split infinitives, and incorrect correlatives', 'Ensure subject and object parallelism'] }],
    notes: 'Dangling modifier example: "Walking down the street, a car hit him" -> the street wasn\'t walking; "While he was walking down the street, a car hit him".',
    practiceQuestions: ['Correct the dangling modifier: "Having finished the assignment, the TV was turned on."', 'Fix parallelism error: "She likes swimming, dancing, and to cook."']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Comprehension', name: 'Sentence rearrangement',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Chronological & Logical Sentence Links', tasks: ['Identify opening introductory sentence (independent of pronouns)', 'Link mandatory pairs (noun before pronoun, cause before effect)'] }],
    notes: 'Find the opening sentence first: an introductory sentence rarely begins with a pronoun (He, They, It) or connector (However, Thus).',
    practiceQuestions: ['Rearrange P, Q, R, S sentences to form a coherent paragraph.', 'How do mandatory pairs accelerate solving sentence rearrangements in under 45 seconds?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: English - Comprehension', name: 'Para jumbles',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Paragraph Sequencing Patterns', tasks: ['Group sentences by transitional signposts (First, Furthermore, Finally)', 'Match demonstrative pronouns (this, these) with antecedents'] }],
    notes: 'Look for acronym expansion: the full name always precedes its abbreviated acronym in standard prose.',
    practiceQuestions: ['Solve a 4-sentence para jumble on economic liberalization.', 'What clues do "this" and "these" provide in para jumble sequencing?']
  },

  // ==========================================
  // TIER 1 - Subject 2: Quantitative Aptitude (35 topics)
  // ==========================================
  // Arithmetic (14)
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Arithmetic', name: 'Number system',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 60,
    subtopics: [{ name: 'Divisibility Rules & Remainder Theorems', tasks: ['Divisibility rules for 7, 11, 13, 72, 88, 99', 'Find unit digit of large powers, cyclicity of 4, Euler totient remainder theorem'] }],
    notes: 'Divisibility by 88 = divisible by both 8 (last 3 digits) and 11 (alternating sum difference). Cyclicity of 2, 3, 7, 8 is 4.',
    practiceQuestions: ['Find the remainder when 7^84 is divided by 342.', 'If 8-digit number 789x531y is divisible by 72, find the value of (5x - 3y).']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Arithmetic', name: 'Simplification',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 40,
    subtopics: [{ name: 'V-BODMAS Execution', tasks: ['Order: Vinculum, Brackets, Of, Division, Multiplication, Addition, Subtraction', 'Recurring decimals to fractions (0.bar(3) = 1/3, 0.2bar(3) = (23-2)/90)'] }],
    notes: '"Of" operations are calculated before division. Never violate BODMAS order.',
    practiceQuestions: ['Evaluate: 18 / 3 of 2 * 4 + (9 - 3).', 'Convert 0.3bar(54) into vulgar fraction form.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Arithmetic', name: 'Square roots',
    importance: 'Medium', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Square & Cube Root Shortcuts', tasks: ['Fast approximation methods for 4- and 5-digit square roots', 'Surds square roots: sqrt(a + sqrt(b)) format'] }],
    notes: 'Squares end in 0, 1, 4, 5, 6, 9. A perfect square never ends in 2, 3, 7, or 8.',
    practiceQuestions: ['Find the square root of 7 + 4*sqrt(3).', 'What is the square root of 7396 using unit-digit shortcut?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Arithmetic', name: 'Percentage',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 55,
    subtopics: [{ name: 'Fraction-to-Percentage Equivalence', tasks: ['Memorize fractions 1/2 to 1/20', 'Net successive percentage change formula: a + b + (ab/100)'] }],
    notes: 'If price increases by x%, consumption must decrease by [x / (100 + x)] * 100% to keep expenditure constant.',
    practiceQuestions: ['Price of sugar increases by 25%. By what percentage must consumption decrease to keep expenditure unchanged?', 'A number is first increased by 20% and then decreased by 20%. What is the net change?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Arithmetic', name: 'Ratio and proportion',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Compound Ratio & Cross Multiplication', tasks: ['Combine ratios: A:B and B:C to find A:B:C', 'Mean proportional (sqrt(ab)) and third proportional (b^2 / a)'] }],
    notes: 'Mean proportional of a and b is sqrt(ab). Third proportional to a and b is b^2 / a.',
    practiceQuestions: ['If A:B = 2:3 and B:C = 4:5, find A:B:C.', 'Find the third proportional to 16 and 24.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Arithmetic', name: 'Average',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Deviation Method & Replacement', tasks: ['Solve batting average and age problems using deviation from assumed mean', 'Replacement formula: New value = Replaced value + (No. of items * Change in avg)'] }],
    notes: 'Deviation method saves tedious arithmetic: deviation sum equals zero.',
    practiceQuestions: ['The average weight of 24 students is 35 kg. If teacher\'s weight is included, average increases by 400g. Find teacher\'s weight.', 'Average of 9 consecutive odd numbers is 53. Find the least number.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Arithmetic', name: 'Simple interest',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 45,
    subtopics: [{ name: 'Linear Interest Growth', tasks: ['Apply SI = (P * R * T) / 100', 'Solve "sum doubles in T years" problems: R = (n-1)*100 / T'] }],
    notes: 'In SI, principal remains constant and annual interest is identical every year.',
    practiceQuestions: ['A sum of money doubles itself in 8 years at simple interest. What is the rate of interest per annum?', 'A sum invested at SI amounts to Rs 815 in 3 years and to Rs 854 in 4 years. Find the principal.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Arithmetic', name: 'Compound interest',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 65,
    subtopics: [{ name: 'Compounding & CI-SI Differences', tasks: ['Tree method for 2 and 3 years', 'Difference between CI and SI: for 2 years = P*(R/100)^2, for 3 years = P*(R/100)^2 * (3 + R/100)'] }],
    notes: 'For 2 years, CI - SI = P*(R/100)^2. This formula appears in almost every SSC CGL exam paper.',
    practiceQuestions: ['The difference between CI and SI on a sum at 10% per annum for 2 years is Rs 65. Find the sum.', 'A sum amounts to Rs 4500 in 2 years and Rs 6750 in 4 years at CI. Find the principal.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Arithmetic', name: 'Profit and loss',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 65,
    subtopics: [{ name: 'CP, SP, Profit %, & Dishonest Dealers', tasks: ['Calculate profit% on CP vs on SP', 'Dishonest shopkeeper using false weights formula: [Error / (True Value - Error)] * 100%'] }],
    notes: 'A dealer uses 900g instead of 1kg: profit% = (100 / 900) * 100% = 11.11%.',
    practiceQuestions: ['A dishonest merchant sells goods at cost price but uses 800g weight for 1kg. Find his profit percentage.', 'By selling 33 meters of cloth, a merchant gains the selling price of 11 meters. Find the gain %.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Arithmetic', name: 'Discount',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Marked Price & Successive Discounts', tasks: ['Equivalence of successive discounts: D = d1 + d2 - (d1*d2 / 100)', 'Relate CP and MP: MP / CP = (100 + P%) / (100 - D%)'] }],
    notes: 'MP / CP = (100 + Profit%) / (100 - Discount%). Direct formula bypasses intermediate steps.',
    practiceQuestions: ['Find single discount equivalent to successive discounts of 20%, 10%, and 5%.', 'A trader marks goods 40% above CP and allows a 20% discount. Find his profit percentage.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Arithmetic', name: 'Partnership',
    importance: 'Medium', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Capital-Time Ratio', tasks: ['Profit Ratio = (Capital_A * Time_A) : (Capital_B * Time_B)', 'Active/Working partner salary allocation before profit sharing'] }],
    notes: 'Profit is distributed in proportion to the product of investment capital and investment duration.',
    practiceQuestions: ['A and B invest in ratio 3:5. After 6 months, C joins with capital equal to B. Find ratio of profit at year end.', 'A is an active partner and receives 10% profit as salary; remaining profit is divided by capital ratio. Calculate distribution.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Arithmetic', name: 'Mixture and allegation',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 55,
    subtopics: [{ name: 'Rule of Alligation', tasks: ['Apply Cheaper vs Dearer price cross diagram', 'Repeated replacement formula: Remaining = Initial * (1 - x/C)^n'] }],
    notes: 'In a vessel with liquid A, if x units are removed and replaced with water n times: Remaining A = V * (1 - x/V)^n.',
    practiceQuestions: ['In what ratio must tea at Rs 62/kg be mixed with tea at Rs 72/kg to give a mixture worth Rs 64.50/kg?', 'A container contains 40 liters of milk. 4 liters are removed and replaced with water. This is repeated twice more. Find remaining milk.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Arithmetic', name: 'Time and work',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 60,
    subtopics: [{ name: 'LCM Efficiency Method & Pipes/Cisterns', tasks: ['Total Work = LCM of individual times', 'Calculate individual efficiencies and solve alternating day problems'] }],
    notes: 'Assume total work is the LCM of given days: efficiency = work / days.',
    practiceQuestions: ['A can do a work in 12 days and B in 15 days. They work together for 4 days. What fraction of work remains?', 'Pipe A fills in 20 min, Pipe B in 30 min, Leak C empties in 15 min. If all are open, how long to fill?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Arithmetic', name: 'Time, speed and distance',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 65,
    subtopics: [{ name: 'Relative Speed, Trains, & Boats/Streams', tasks: ['Convert km/h to m/s (* 5/18)', 'Relative speed: opposite directions (+), same direction (-)', 'Downstream = u + v, Upstream = u - v'] }],
    notes: 'Average speed for equal distances = 2xy / (x + y). Train crossing platform crosses distance = Train length + Platform length.',
    practiceQuestions: ['A 150m long train running at 54 km/h crosses a 250m long platform in how many seconds?', 'A man can row 18 km/h in still water. If the river runs at 6 km/h, it takes him 4 hours to row up and back. Find distance.']
  },

  // Algebra (3)
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Algebra', name: 'Algebraic identities',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 65,
    subtopics: [{ name: 'Symmetric Polynomial Identities', tasks: ['If x + 1/x = k, then x^2 + 1/x^2 = k^2 - 2, x^3 + 1/x^3 = k^3 - 3k', 'If a + b + c = 0, then a^3 + b^3 + c^3 = 3abc'] }],
    notes: 'If a + b + c = 0, a^3 + b^3 + c^3 - 3abc = 0. Extremely frequent in SSC CGL.',
    practiceQuestions: ['If x + 1/x = 5, find the value of x^3 + 1/x^3.', 'If a + b + c = 6 and ab + bc + ca = 11, find a^3 + b^3 + c^3 - 3abc.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Algebra', name: 'Linear equations',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 40,
    subtopics: [{ name: 'Two-Variable Systems & Conditions', tasks: ['Unique solution: a1/a2 != b1/b2', 'Infinite solutions: a1/a2 = b1/b2 = c1/c2', 'No solution (parallel): a1/a2 = b1/b2 != c1/c2'] }],
    notes: 'No solution occurs when two linear equations represent parallel lines with identical slopes.',
    practiceQuestions: ['For what value of k will 2x + 3y = 7 and 6x + ky = 21 have infinitely many solutions?', 'Solve 3x + 4y = 25 and 4x + 3y = 24.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Algebra', name: 'Elementary surds',
    importance: 'Medium', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Rationalization & Infinite Series', tasks: ['Rationalize denominators: 1 / (sqrt(3) + sqrt(2)) = sqrt(3) - sqrt(2)', 'Solve sqrt(6 + sqrt(6 + sqrt(6...))) = 3'] }],
    notes: 'For sqrt(n + sqrt(n + ...)): factor n into consecutive integers a * (a+1); answer is (a+1) for + and a for -.',
    practiceQuestions: ['Find value of sqrt(12 + sqrt(12 + sqrt(12 + ... inf))).', 'If x = 3 + 2*sqrt(2), find x + 1/x.']
  },

  // Geometry (4)
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Geometry', name: 'Lines and angles',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 40,
    subtopics: [{ name: 'Parallel Lines & Transversals', tasks: ['Alternate interior angles, corresponding angles, consecutive interior angles sum = 180 degrees', 'Complementary (90) and supplementary (180) angle pairs'] }],
    notes: 'Interior angles on the same side of a transversal intersecting parallel lines sum to 180 degrees.',
    practiceQuestions: ['An angle is 24 degrees more than its complement. Find the angle.', 'In parallel lines AB || CD, find unknown angle x using alternate angles.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Geometry', name: 'Triangles',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 75,
    subtopics: [{ name: 'Congruence, Similarity, & Centers', tasks: ['Incenter (angle bisectors, angle BIC = 90 + A/2)', 'Circumcenter (perpendicular bisectors, angle BOC = 2A)', 'Orthocenter (altitudes, angle BHC = 180 - A)', 'Centroid (medians, 2:1 division)'] }],
    notes: 'Incenter angle: BIC = 90 + A/2. Circumcenter angle: BOC = 2A. Orthocenter angle: BHC = 180 - A.',
    practiceQuestions: ['In triangle ABC, I is incenter. If angle BAC = 70, find angle BIC.', 'Centroid divides each median in what ratio from vertex to midpoint?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Geometry', name: 'Circles',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 70,
    subtopics: [{ name: 'Chords, Tangents, & Secants', tasks: ['Tangent-Secant Theorem: PT^2 = PA * PB', 'Alternate Segment Theorem and cyclic quadrilateral opposite angles sum = 180 degrees'] }],
    notes: 'PT^2 = PA * PB for a tangent PT from external point P and secant PAB.',
    practiceQuestions: ['From an external point P, tangent PT = 8 cm. Secant PAB has PA = 4 cm. Find chord AB length.', 'Opposite angles of a cyclic quadrilateral sum to how many degrees?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Geometry', name: 'Quadrilaterals',
    importance: 'Medium', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Parallelograms, Rhombus, & Trapeziums', tasks: ['Rhombus diagonals bisect at 90 degrees: 4a^2 = d1^2 + d2^2', 'Area of Trapezium = 1/2 * (sum of parallel sides) * height'] }],
    notes: 'In a rhombus, diagonals are perpendicular bisectors and side a satisfies: 4a^2 = d1^2 + d2^2.',
    practiceQuestions: ['Diagonals of a rhombus are 16 cm and 12 cm. Find its perimeter.', 'Parallel sides of a trapezium are 12 cm and 20 cm, height is 8 cm. Find its area.']
  },

  // Mensuration (5)
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Mensuration', name: 'Area',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: '2D Plane Figures', tasks: ['Heron\'s formula: sqrt(s(s-a)(s-b)(s-c))', 'Equilateral triangle area = (sqrt(3)/4) * a^2'] }],
    notes: 'Area of circle = pi * r^2. Area of sector = (theta/360) * pi * r^2.',
    practiceQuestions: ['Find area of triangle with sides 13 cm, 14 cm, 15 cm using Heron\'s formula.', 'Area of equilateral triangle is 49*sqrt(3) cm^2. Find its perimeter.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Mensuration', name: 'Perimeter',
    importance: 'Medium', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Boundary Calculations', tasks: ['Circumference of circle = 2*pi*r', 'Perimeter of semicircle = pi*r + 2r = r*(36/7)'] }],
    notes: 'Perimeter of semicircle is (pi + 2)*r = 36r/7, not just pi*r.',
    practiceQuestions: ['If perimeter of a semicircle is 72 cm, find its radius (use pi=22/7).', 'A wire bent into square has area 121 cm^2. If rebent into a circle, find its radius.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Mensuration', name: 'Surface area',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'CSA and TSA of 3D Solids', tasks: ['Cylinder CSA = 2*pi*r*h, TSA = 2*pi*r*(r + h)', 'Cone CSA = pi*r*l, Sphere surface = 4*pi*r^2'] }],
    notes: 'Total surface area includes all flat bases plus curved surface area.',
    practiceQuestions: ['Curved surface area of cylinder is 880 cm^2 and height is 10 cm. Find its radius.', 'Find total surface area of a hemisphere of radius 7 cm.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Mensuration', name: 'Volume',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Volume of 3D Figures', tasks: ['Cylinder = pi*r^2*h, Cone = 1/3*pi*r^2*h, Sphere = 4/3*pi*r^3, Cube = a^3'] }],
    notes: 'When a solid is melted and recast into another shape, volume remains constant.',
    practiceQuestions: ['A solid metallic sphere of radius 6 cm is melted into smaller cones of radius 2 cm and height 3 cm. Find number of cones.', 'Find volume of a cone with radius 7 cm and slant height 25 cm.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Mensuration', name: 'Solids',
    importance: 'Medium', difficulty: 'Hard', estimatedMinutes: 55,
    subtopics: [{ name: 'Prisms, Pyramids, & Frustums', tasks: ['Prism volume = Base Area * Height', 'Pyramid volume = 1/3 * Base Area * Height', 'Frustum volume = 1/3 * pi * h * (R^2 + r^2 + Rr)'] }],
    notes: 'Regular pyramid: Slant height l = sqrt(h^2 + r^2). Lateral surface area = 1/2 * (perimeter of base) * slant height.',
    practiceQuestions: ['Find the volume of a right prism with a triangular base of area 24 cm^2 and height 15 cm.', 'Write the formula for the volume of a frustum of a cone.']
  },

  // Trigonometry (4)
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Trigonometry', name: 'Trigonometric ratios',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 40,
    subtopics: [{ name: 'Right Triangle Definitions', tasks: ['sin, cos, tan, cosec, sec, cot via P/H, B/H, P/B', 'Pythagorean triplets: (3,4,5), (5,12,13), (7,24,25), (8,15,17), (9,40,41)'] }],
    notes: 'Memorize common Pythagorean triplets to compute trigonometric ratios in seconds without calculating squares.',
    practiceQuestions: ['If sin theta = 5/13, find tan theta + sec theta.', 'If tan theta = 4/3, evaluate (3 sin theta + 2 cos theta) / (3 sin theta - 2 cos theta).']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Trigonometry', name: 'Standard values',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Table of Values (0, 30, 45, 60, 90 deg)', tasks: ['Memorize exact radical values for all standard angles', 'Quadrant signs: ASTC (All, Sin, Tan, Cos positive)'] }],
    notes: 'ASTC rule: All positive in Q1, Sin/Cosec in Q2, Tan/Cot in Q3, Cos/Sec in Q4.',
    practiceQuestions: ['Evaluate: sin^2 30 + cos^2 45 + 4 tan^2 30 + 1/2 sin^2 90 - 2 cos^2 60.', 'What is the value of tan 15 degrees? [2 - sqrt(3)]']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Trigonometry', name: 'Heights and distances',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Angle of Elevation & Depression', tasks: ['Standard 30-60-90 triangle ratio: 1 : sqrt(3) : 2', 'Standard 45-45-90 triangle ratio: 1 : 1 : sqrt(2)'] }],
    notes: 'In a 30-60-90 triangle, side opposite 30 deg is x, opposite 60 deg is x*sqrt(3), hypotenuse is 2x.',
    practiceQuestions: ['The shadow of a tower standing on level ground is found to be 40m longer when Sun\'s altitude is 30 than when it was 60. Find height of tower.', 'From top of a 7m high building, angle of elevation of top of cable tower is 60 and angle of depression of its foot is 45. Find height of tower.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Trigonometry', name: 'Trigonometric identities',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 65,
    subtopics: [{ name: 'Fundamental Identities & Max/Min Values', tasks: ['sin^2 + cos^2 = 1, 1 + tan^2 = sec^2, 1 + cot^2 = cosec^2', 'Maximum and minimum of a*sin(theta) + b*cos(theta) = +/- sqrt(a^2 + b^2)'] }],
    notes: 'Max and min values of a*sin(x) + b*cos(x) are +sqrt(a^2 + b^2) and -sqrt(a^2 + b^2).',
    practiceQuestions: ['If sec theta + tan theta = 3, find sin theta.', 'Find maximum and minimum values of 3 sin theta + 4 cos theta.']
  },

  // Data Interpretation (5)
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Data Interpretation', name: 'Bar graphs',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Comparative & Stacked Bar Charts', tasks: ['Calculate percentage increase/decrease across discrete bars', 'Extract average and ratio values rapidly'] }],
    notes: 'DI in SSC CGL primarily tests rapid mental percentage calculations and ratio comparisons.',
    practiceQuestions: ['Solve a 4-question bar graph set on company sales across 5 years.', 'What shortcut simplifies finding percentage growth between two bar heights?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Data Interpretation', name: 'Pie charts',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Degree & Percentage Conversion', tasks: ['Convert degrees to percentage: 360 degrees = 100% (3.6 deg = 1%)', 'Compare sectors without calculating absolute values'] }],
    notes: '360 degrees = 100%. To convert degrees to %, divide by 3.6.',
    practiceQuestions: ['A family expenditure pie chart shows 72 degrees on education. What percentage of total income is this?', 'Solve a dual pie chart set comparing student enrollment and graduation ratios.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Data Interpretation', name: 'Line graphs',
    importance: 'Medium', difficulty: 'Easy', estimatedMinutes: 40,
    subtopics: [{ name: 'Trend Line Analysis', tasks: ['Analyze slope for steepest rise/fall', 'Track cumulative production vs sales curves'] }],
    notes: 'Look at the steepness of the line slope to identify the year with maximum percentage growth.',
    practiceQuestions: ['Analyze a line graph of imports and exports to identify the year with maximum trade deficit.', 'How do you calculate average annual growth rate from a line graph?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Data Interpretation', name: 'Tables',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Tabular Dataset Extraction', tasks: ['Cross-reference multiple row and column criteria', 'Use approximation to eliminate choices in ratio and average queries'] }],
    notes: 'Round numbers to 2 significant digits when calculating percentages from large tabular figures.',
    practiceQuestions: ['Solve a 5-question table set evaluating employee counts across departments.', 'Why is rounding numbers to nearest hundred or thousand useful in DI?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Quantitative Aptitude - Data Interpretation', name: 'Data analysis',
    importance: 'Medium', difficulty: 'Medium', estimatedMinutes: 40,
    subtopics: [{ name: 'Integrated Mixed DI', tasks: ['Combine data from table + pie chart', 'Interpret statistical variability and weighted averages'] }],
    notes: 'Mixed DI tests cross-table correlation: verify the base values before comparing percentages.',
    practiceQuestions: ['Solve a mixed DI set featuring a pie chart for total revenue and a table for cost breakdown.', 'What common trap occurs when comparing percentages from two different pie charts?']
  },

  // ==========================================
  // TIER 1 - Subject 3: General Intelligence and Reasoning (20 topics)
  // ==========================================
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Analogy',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 40,
    subtopics: [{ name: 'Semantic, Symbolic, & Number Analogies', tasks: ['Identify underlying relationship (cause-effect, tool-worker, country-capital, square/cube)', 'Apply relationship to second pair'] }],
    notes: 'Always check if the relationship is based on word meaning, alphabetical position, or mathematical operations.',
    practiceQuestions: ['Physician : Stethoscope :: Sculptor : ? (Chisel)', '12 : 144 :: 14 : ? (196)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Similarities and differences',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Common Attributes & Odd One Out', tasks: ['Find shared characteristics among group items', 'Detect the odd one out based on grammatical or numeric properties'] }],
    notes: 'Odd one out: check prime numbers, squares, multiples, or word categories.',
    practiceQuestions: ['Find the odd one out: (a) Iron (b) Copper (c) Zinc (d) Brass (Brass is an alloy)', 'Find the odd one: (a) 125 (b) 216 (c) 343 (d) 512']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Classification',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Categorical Grouping', tasks: ['Classify letters based on position numbers (EJOTY) and vowel/consonant count', 'Group words by botanical, geographical, or historical taxonomy'] }],
    notes: 'EJOTY (5, 10, 15, 20, 25) helps calculate alphabetical letter positions rapidly.',
    practiceQuestions: ['Classify letters: BDF, HJL, NPR, TVW (TVW is odd, step is +1 instead of +2).', 'Classify: Carrot, Potato, Ginger, Tomato (Tomato grows above ground).']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Space visualization',
    importance: 'Medium', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Mental Rotation & Assembly', tasks: ['Mentally assemble 2D pieces into complete 2D shapes', 'Visualize folded net cubes into 3D dice'] }],
    notes: 'In an unfolded dice net, opposite faces are separated by exactly one square.',
    practiceQuestions: ['Determine the face opposite to 3 on an unfolded dice net.', 'Identify which figure can be formed from the given cut-out pieces.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Spatial orientation',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 40,
    subtopics: [{ name: 'Direction Sense Test', tasks: ['Map 8 directions: N, S, E, W, NE, NW, SE, SW', 'Calculate straight-line displacement using Pythagoras theorem'] }],
    notes: 'Always draw a small cross reference on paper: Up = North, Right = East.',
    practiceQuestions: ['A man walks 4 km North, turns right and walks 3 km. How far and in what direction is he from the starting point? (5 km NE)', 'A person turns 90 degrees clockwise, then 135 degrees counter-clockwise. What is net rotation?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Problem solving',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Analytical Deduction', tasks: ['Solve multi-variable constraint problems', 'Assign attributes to individuals based on negative and positive clues'] }],
    notes: 'Build a matrix table: rows for people, columns for attributes, check off verified facts.',
    practiceQuestions: ['Solve a 5-person puzzle with car brands and cities.', 'How do negative clues ("X is not from Delhi") help eliminate options in grid puzzles?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Analysis',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 40,
    subtopics: [{ name: 'Data Sufficiency & Sequence Analysis', tasks: ['Determine if Statement I or Statement II alone is sufficient to answer', 'Analyze comparative orders (A is taller than B but shorter than C)'] }],
    notes: 'In Data Sufficiency, do not compute the final numerical answer; only verify if sufficient data exists.',
    practiceQuestions: ['Is X > Y? Statement 1: X - Y > 0. Statement 2: X > 5. Determine data sufficiency.', 'Five boys are in a line. A is taller than B, C is shortest. Who is the tallest?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Judgment and decision making',
    importance: 'Medium', difficulty: 'Medium', estimatedMinutes: 40,
    subtopics: [{ name: 'Rule-Based Candidate Selection', tasks: ['Evaluate candidate qualifications against eligibility rules and exception clauses'] }],
    notes: 'Follow criteria strictly: if a candidate fails criteria A but fulfills alternative exception B, route to Chairman/Director as specified.',
    practiceQuestions: ['Evaluate a recruitment case against age, percentage, and experience criteria.', 'What decision is taken when candidate meets all criteria except age but has special sports certificate?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Visual memory',
    importance: 'Medium', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Mirror & Water Images', tasks: ['Mirror image: Left and right invert, top and bottom remain unchanged', 'Water image: Top and bottom invert, left and right remain unchanged'] }],
    notes: 'Mirror image: Left <-> Right invert. Water image: Top <-> Bottom invert.',
    practiceQuestions: ['Find the mirror image of the word "EXAMINATION".', 'Find the water image of the letter string "BRIDGE".']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Observation',
    importance: 'Medium', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Figure Counting & Matrix Completion', tasks: ['Count triangles in symmetric divided figures', 'Count squares in an m x n grid (sum of products)'] }],
    notes: 'Number of squares in n x n grid = 1^2 + 2^2 + ... + n^2. In 4x4: 1 + 4 + 9 + 16 = 30.',
    practiceQuestions: ['Count the total number of triangles in a square with both diagonals drawn and midpoints connected.', 'Count squares in a 4x4 chessboard grid.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Relationship concepts',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Blood Relations Tree', tasks: ['Draw family tree with generations (+1 parents, 0 siblings/spouse, -1 children)', 'Solve coded relations (A + B means A is father of B)'] }],
    notes: 'Use clear symbols: + for male, - for female, = for married couple, | for generation gap.',
    practiceQuestions: ['Pointing to a photograph, a woman says: "He is the only son of my father\'s only son." How is the boy related to the woman? (Nephew)', 'If A + B means A is brother of B, A * B means A is mother of B, what does P * Q + R mean?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Arithmetical reasoning',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Mathematical Operations & Symbol Swaps', tasks: ['Substitute operators according to code (+ means *, - means /)', 'Solve head and feet problems (chickens and cows)'] }],
    notes: 'Chickens (2 legs) and cows (4 legs): No. of cows = (Total Legs / 2) - Total Heads.',
    practiceQuestions: ['In a farm there are pigeons and sheep. Total heads = 50, total feet = 140. Find number of sheep. (20)', 'If "+" means "-", "-" means "*", "*" means "/", "/" means "+", evaluate 15 - 3 + 10 * 5 / 5.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Coding and decoding',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Alphabetical Shifts & Opposite Pairs', tasks: ['Letter shifts (+1, -2, alternating)', 'Opposite letter pairs (A-Z, B-Y, C-X, D-W, E-V, F-U, G-T, H-S, I-R, J-Q, K-P, L-O, M-N)'] }],
    notes: 'Opposite letter pairs sum to 27: A(1) + Z(26) = 27. B(2) + Y(25) = 27.',
    practiceQuestions: ['If DELHI is coded as CCIDD, how is BOMBAY coded?', 'If \'book is good\' is \'na pa da\', find the code for \'good\'.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Statement and conclusion',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Logical Deduction Boundaries', tasks: ['Accept statement as 100% true', 'Do not assume external real-world facts not stated in the premise'] }],
    notes: 'A conclusion must follow logically with 100% certainty from the stated premise alone.',
    practiceQuestions: ['Statement: "Most students are diligent." Conclusion 1: Some students are diligent. Conclusion 2: All students are intelligent. Which follows?', 'Why should external general knowledge never be assumed in statement-conclusion problems?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Syllogism',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 65,
    subtopics: [{ name: 'Venn Diagram Syllogism', tasks: ['Statements: All, Some, No, Some Not', 'Master "Possibility" cases and "Either-Or" complimentary pairs (Some + No)'] }],
    notes: 'Complimentary pair for Either-Or: 1. Same subject/predicate, 2. Both conclusions false independently, 3. One positive and one negative (Some + No).',
    practiceQuestions: ['Statements: All cats are dogs. Some dogs are birds. Conclusions: 1. Some cats are birds. 2. Some birds are dogs. Which follows?', 'What are the conditions for an "Either-Or" answer in syllogisms?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Non-verbal series',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Figure Pattern Progression', tasks: ['Track clockwise/anticlockwise rotations (45, 90, 135 deg)', 'Track addition, deletion, and movement of internal elements'] }],
    notes: 'Look at one symbol or dot at a time across figures 1, 2, 3 to identify the governing mathematical transformation.',
    practiceQuestions: ['Determine the next figure in a clockwise 45-degree rotating arrow series.', 'How do you isolate independent moving elements in complex geometric series?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Venn diagrams',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 40,
    subtopics: [{ name: 'Set Inclusion & Intersections', tasks: ['Identify concentric circles (Mammals, Dogs, Golden Retrievers)', 'Intersecting circles (Engineers, Doctors, Writers)', 'Disjoint circles'] }],
    notes: 'Concentric = complete inclusion. Intersecting = partial overlap. Disjoint = mutually exclusive categories.',
    practiceQuestions: ['Choose the best Venn diagram for: Women, Mothers, Engineers.', 'Identify the Venn diagram for: Reptiles, Snakes, Lizards.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Embedded figures',
    importance: 'Medium', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Pattern Concealment & Paper Folding', tasks: ['Locate a hidden question figure inside 4 complex option figures', 'Trace punch hole patterns when paper is unfolded'] }],
    notes: 'Pay attention to whether rotation of the figure is allowed in the question instructions.',
    practiceQuestions: ['Identify which option contains the given shape embedded without rotation.', 'Trace the punch marks when a paper folded into four quarters is unfolded.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Critical thinking',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Statements & Assumptions / Arguments', tasks: ['Identify implicit assumptions', 'Differentiate strong arguments (fact-based, logical) vs weak arguments (emotional, biased)'] }],
    notes: 'An assumption is something taken for granted or unsaid when stating the premise. A strong argument directly addresses the core issue with objective logic.',
    practiceQuestions: ['Statement: "Please do not lean out of the train." Assumption: Leaning out is dangerous. Is it implicit?', 'What makes an argument weak in logical reasoning questions?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: Reasoning', name: 'Emotional and social intelligence',
    importance: 'Medium', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Situational Judgment & Ethical Reasoning', tasks: ['Select balanced, lawful, and socially responsible courses of action in public service scenarios'] }],
    notes: 'Select options demonstrating empathy, adherence to legal rules, and public welfare balance.',
    practiceQuestions: ['As a civil servant, how do you handle an emotional public protest outside your office lawfully?', 'What is the most constructive response when a senior official issues an ambiguous verbal directive?']
  },

  // ==========================================
  // TIER 1 - Subject 4: General Awareness (41 topics)
  // ==========================================
  // History (6)
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - History', name: 'Ancient Indian history',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 55,
    subtopics: [{ name: 'Indus Valley & Vedic Period', tasks: ['Harappa, Mohenjodaro, Great Bath, Lothal port, seals', 'Vedas, Upanishads, Jainism (Tirthankaras), Buddhism (4 Noble Truths, 8-fold Path)'] }],
    notes: 'Lothal was the ancient dockyard/port of IVC. First Buddhist Council: Rajgriha (483 BC) under Ajatashatru.',
    practiceQuestions: ['Which Indus Valley site is famous for its dockyard? (Lothal)', 'Where did Gautama Buddha deliver his first sermon (Dharmachakra Pravartana)? (Sarnath)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - History', name: 'Medieval Indian history',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 55,
    subtopics: [{ name: 'Delhi Sultanate & Mughal Dynasty', tasks: ['Slave, Khilji, Tughlaq, Sayyid, Lodi dynasties', 'Babur (1526 Panipat), Akbar\'s administration (Mansabdari, Din-i-Ilahi)'] }],
    notes: 'Qutub Minar was started by Qutb-ud-din Aibak and completed by Iltutmish. Akbar introduced Mansabdari system.',
    practiceQuestions: ['Who founded the Slave Dynasty in India? (Qutb-ud-din Aibak)', 'Between whom was the First Battle of Panipat fought in 1526? (Babur and Ibrahim Lodi)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - History', name: 'Modern Indian history',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Advent of Europeans & Governor Generals', tasks: ['Battle of Plassey (1757) and Buxar (1764)', 'Reforms under Warren Hastings, Cornwallis (Permanent Settlement), Dalhousie (Doctrine of Lapse)'] }],
    notes: 'Lord Cornwallis is known as the Father of Civil Services in India. Lord Dalhousie introduced railways (1853) and Doctrine of Lapse.',
    practiceQuestions: ['Who was known as the "Father of Civil Services in India"? (Lord Cornwallis)', 'In which year did the Battle of Plassey take place? (1757)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - History', name: 'British rule',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Revolt of 1857 & Acts of Parliament', tasks: ['Causes of 1857 Revolt, Mangal Pandey, proclamation of Queen Victoria 1858', 'Charter Acts, Indian Councils Acts, Government of India Acts (1909, 1919, 1935)'] }],
    notes: 'GOI Act 1858 ended East India Company rule; power transferred directly to the British Crown under a Viceroy (Lord Canning).',
    practiceQuestions: ['Who was the Governor-General during the Revolt of 1857? (Lord Canning)', 'Which Act introduced bicameral legislature at the Centre? (Government of India Act 1919)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - History', name: 'Indian freedom movement',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 60,
    subtopics: [{ name: 'Congress Sessions & Extremists/Moderates', tasks: ['Founding of INC (1885) under A.O. Hume, W.C. Bonnerjee', 'Partition of Bengal (1905), Swadeshi movement, Home Rule League (1916)'] }],
    notes: 'First woman president of INC: Annie Besant (1917). First Indian woman president of INC: Sarojini Naidu (1925 Kanpur).',
    practiceQuestions: ['Who was the first president of the Indian National Congress in 1885? (W.C. Bonnerjee)', 'In which session did the split between Moderates and Extremists occur? (Surat Session 1907)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - History', name: 'Gandhian era',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 65,
    subtopics: [{ name: 'Non-Cooperation, Civil Disobedience, & Quit India', tasks: ['Champaran (1917), Kheda, Rowlatt Act, Jallianwala Bagh (1919)', 'Dandi March (1930), Gandhi-Irwin Pact (1931), Quit India Movement (1942)'] }],
    notes: 'Gandhiji\'s first Satyagraha in India was Champaran (1917) for indigo farmers. Quit India call: "Do or Die" (8 August 1942).',
    practiceQuestions: ['Where did Mahatma Gandhi launch his first Satyagraha in India? (Champaran, Bihar)', 'From where to where was the historic Dandi March conducted in 1930? (Sabarmati Ashram to Dandi)']
  },

  // Geography (8)
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Geography', name: 'Physical geography',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Earth Structure & Atmosphere', tasks: ['Crust, Mantle, Core; Lithosphere, Troposphere, Stratosphere (ozone layer)', 'Plate tectonics, earthquakes, and seismic waves (P and S waves)'] }],
    notes: 'Troposphere: all weather phenomena occur here. Stratosphere: contains the ozone layer (absorbs UV rays).',
    practiceQuestions: ['In which layer of the atmosphere is the ozone layer located? (Stratosphere)', 'Which seismic waves can travel only through solids? (S-waves)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Geography', name: 'Indian geography',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 55,
    subtopics: [{ name: 'Physiography & Boundaries', tasks: ['Northern Mountains (Himalayas), Great Plains, Peninsular Plateau, Coastal Plains, Islands', 'States with international boundaries, Tropic of Cancer passing through 8 states'] }],
    notes: 'Tropic of Cancer (23.5 N) passes through 8 Indian states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, WB, Tripura, Mizoram.',
    practiceQuestions: ['Through how many Indian states does the Tropic of Cancer pass? (8 states)', 'Which Indian state has the longest coastline? (Gujarat)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Geography', name: 'World geography',
    importance: 'Medium', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Continents, Oceans, & Straits', tasks: ['Strait of Malacca, Gibraltar, Hormuz; Major trenches (Mariana Trench)', 'Highest peaks, major deserts (Sahara, Atacama - driest)'] }],
    notes: 'Mariana Trench in Pacific Ocean is the deepest point on Earth (~11,034 m). Strait of Gibraltar connects Atlantic to Mediterranean.',
    practiceQuestions: ['Which strait separates Asia from North America? (Bering Strait)', 'Which is the driest desert in the world? (Atacama Desert)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Geography', name: 'Rivers',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 60,
    subtopics: [{ name: 'Himalayan & Peninsular River Systems', tasks: ['Ganga, Indus, Brahmaputra and their tributaries', 'West-flowing rivers forming estuaries (Narmada, Tapti), East-flowing rivers forming deltas (Godavari, Krishna, Kaveri)'] }],
    notes: 'Narmada and Tapti flow westward into the Arabian Sea through rift valleys and do NOT form deltas.',
    practiceQuestions: ['Which river is known as "Dakshin Ganga"? (Godavari)', 'Name two major west-flowing rivers in India that form estuaries. (Narmada and Tapti)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Geography', name: 'Mountains',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Mountain Ranges & Passes', tasks: ['Himadri, Himachal, Shiwaliks; Western Ghats (Anamudi peak) vs Eastern Ghats', 'Important passes: Zoji La, Shipki La, Nathu La, Palghat'] }],
    notes: 'Highest peak in India: K2 / Godwin Austen (POK) or Kangchenjunga (Sikkim). Highest peak in Western Ghats: Anamudi (2695 m, Kerala).',
    practiceQuestions: ['What is the highest mountain peak in South India / Western Ghats? (Anamudi)', 'Which pass connects Sikkim with Tibet? (Nathu La)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Geography', name: 'Climate',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Monsoon Dynamics & Rainfall Distribution', tasks: ['South-West Monsoon (Arabian Sea and Bay of Bengal branches)', 'North-East Retreating Monsoon (rainfall in Tamil Nadu coast), Western Disturbances'] }],
    notes: 'Mawsynram in Meghalaya receives the highest average rainfall in the world. Tamil Nadu coast receives winter rainfall from NE Monsoon.',
    practiceQuestions: ['Which coast in India receives rainfall from the retreating North-East monsoon in winter? (Coromandel / Tamil Nadu coast)', 'Where is the highest rainfall in the world recorded? (Mawsynram, Meghalaya)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Geography', name: 'Ports',
    importance: 'Medium', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Major Indian Sea Ports', tasks: ['Major 13 ports: Kandla (Deendayal), JNPT (Nhava Sheva - largest container), Visakhapatnam (deepest landlocked), Paradip, Kolkata (riverine)'] }],
    notes: 'Kolkata (Syama Prasad Mookerjee) is the only major riverine port in India (on Hooghly river).',
    practiceQuestions: ['Which is the only major riverine port in India? (Kolkata Port)', 'Which port is known as the tidal port and has a Special Economic Zone? (Kandla / Deendayal Port, Gujarat)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Geography', name: 'Solar system',
    importance: 'Medium', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Planets & Astronomical Facts', tasks: ['Inner terrestrial planets vs Outer gas giants', 'Venus (hottest planet, morning/evening star, rotates clockwise), Jupiter (largest, Ganymede moon)'] }],
    notes: 'Venus is the hottest planet due to runaway greenhouse effect (96% CO2 atmosphere) and rotates clockwise (retrograde).',
    practiceQuestions: ['Which is the hottest planet in the Solar System? (Venus)', 'Which planet has the largest moon (Ganymede) in the Solar System? (Jupiter)']
  },

  // Polity (10)
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Polity', name: 'Indian Constitution',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Making of the Constitution & Sources', tasks: ['Constituent Assembly (Dr. Rajendra Prasad - President, Dr. B.R. Ambedkar - Drafting Committee)', 'Borrowing: Parliamentary system (UK), Fundamental Rights (USA), DPSP (Ireland), Concurrent List (Australia)'] }],
    notes: 'Constitution was adopted on 26 Nov 1949 and came into effect on 26 Jan 1950. Originally 395 Articles and 8 Schedules.',
    practiceQuestions: ['Who was the Chairman of the Drafting Committee of the Constituent Assembly? (Dr. B.R. Ambedkar)', 'From which country\'s constitution did India borrow the Directive Principles of State Policy? (Ireland)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Polity', name: 'Fundamental Rights',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 65,
    subtopics: [{ name: 'Articles 12 to 35 (Part III)', tasks: ['Right to Equality (14-18), Right to Freedom (19-22), Right against Exploitation (23-24)', 'Right to Freedom of Religion (25-28), Cultural & Educational Rights (29-30), Writs (Article 32 - Habeas Corpus, Mandamus, Prohibition, Certiorari, Quo Warranto)'] }],
    notes: 'Dr. Ambedkar called Article 32 (Right to Constitutional Remedies) the "Heart and Soul of the Constitution".',
    practiceQuestions: ['Which article of the Indian Constitution abolishes Untouchability? (Article 17)', 'Name the five writs issued by the Supreme Court under Article 32.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Polity', name: 'Fundamental Duties',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Part IVA - Article 51A', tasks: ['Added by 42nd Constitutional Amendment 1976 on recommendation of Swaran Singh Committee', '11 Fundamental Duties (11th added by 86th Amendment 2002: education for children 6-14)'] }],
    notes: 'Fundamental Duties are non-justiciable and were borrowed from the USSR constitution.',
    practiceQuestions: ['By which constitutional amendment were Fundamental Duties added to the Indian Constitution? (42nd Amendment 1976)', 'How many Fundamental Duties are currently in the Constitution? (11 duties)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Polity', name: 'President',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 60,
    subtopics: [{ name: 'Articles 52 to 62', tasks: ['Election by Electoral College (elected members of Parliament + elected members of State Legislative Assemblies)', 'Pardoning power (Article 72), Ordinance power (Article 123), Impeachment (Article 61)'] }],
    notes: 'President can pardon death sentences (Article 72). Impeachment under Article 61 requires 2/3rd majority of total membership in both houses.',
    practiceQuestions: ['Who participates in the election of the President of India?', 'Under which Article can the President promulgate an Ordinance when Parliament is not in session? (Article 123)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Polity', name: 'Prime Minister',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Real Executive (De Facto) & Council of Ministers', tasks: ['Article 74 (Council of Ministers to aid and advise President)', 'Article 75 (PM appointed by President, collective responsibility to Lok Sabha)'] }],
    notes: 'Council of Ministers is collectively responsible to the Lok Sabha (Article 75(3)). Council size cannot exceed 15% of Lok Sabha (91st Amendment).',
    practiceQuestions: ['To whom is the Union Council of Ministers collectively responsible? (Lok Sabha)', 'What is the maximum limit on the size of Council of Ministers according to 91st Amendment? (15% of Lok Sabha)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Polity', name: 'Parliament',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 65,
    subtopics: [{ name: 'Lok Sabha & Rajya Sabha Dynamics', tasks: ['Rajya Sabha (permanent body, 1/3rd members retire every 2 years, Vice President is ex-officio Chairman)', 'Lok Sabha (Money Bill Article 110 introduced only in Lok Sabha), Joint Sitting (Article 108 presided by Speaker)'] }],
    notes: 'Money Bill (Art 110) can only be introduced in Lok Sabha with prior recommendation of President. Speaker decides if a bill is a Money Bill.',
    practiceQuestions: ['Who presides over a Joint Sitting of both Houses of Parliament? (Speaker of Lok Sabha)', 'What is the maximum tenure of a member of Rajya Sabha? (6 years)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Polity', name: 'Supreme Court',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Articles 124 to 147', tasks: ['Appointment of Chief Justice of India and Collegium system', 'Original jurisdiction (Art 131), Appellate jurisdiction, Advisory jurisdiction (Art 143)'] }],
    notes: 'Supreme Court retirement age is 65 years. Court of Record (Article 129).',
    practiceQuestions: ['What is the retirement age of a Supreme Court judge in India? (65 years)', 'Under which Article can the President seek the advisory opinion of the Supreme Court? (Article 143)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Polity', name: 'High Courts',
    importance: 'Medium', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Articles 214 to 231', tasks: ['Writ jurisdiction under Article 226 (wider than SC Art 32 as it covers legal rights too)', 'Retirement age 62 years, common High Courts for multiple states'] }],
    notes: 'Article 226 writ jurisdiction of High Court is wider than Supreme Court Article 32 because High Court can issue writs for legal rights too.',
    practiceQuestions: ['What is the retirement age of a High Court judge? (62 years)', 'Which Article empowers High Courts to issue writs for the enforcement of Fundamental Rights? (Article 226)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Polity', name: 'CAG',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 55,
    subtopics: [{ name: 'Comptroller and Auditor General (Articles 148 to 151)', tasks: ['Guardian of the Public Purse, appointed by President', 'Tenure: 6 years or 65 years of age, reports submitted to Public Accounts Committee (PAC)'] }],
    notes: 'CAG is the "Friend, Philosopher, and Guide" of the Public Accounts Committee. Extremely critical for AAO aspirants!',
    practiceQuestions: ['What is the tenure of the Comptroller and Auditor General of India? (6 years or 65 years of age)', 'Which parliamentary committee examines the audit reports of the CAG? (Public Accounts Committee)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Polity', name: 'Panchayati Raj',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Local Self-Government', tasks: ['73rd Constitutional Amendment Act 1992 (Part IX, 11th Schedule, 29 subjects)', 'Balwant Rai Mehta Committee (1957) 3-tier system: Gram Panchayat, Panchayat Samiti, Zilla Parishad'] }],
    notes: 'First state to establish Panchayati Raj: Rajasthan (Nagaur district, 2 October 1959). Article 40 (DPSP) directs state to organize village panchayats.',
    practiceQuestions: ['Which was the first state in India to establish Panchayati Raj? (Rajasthan, 1959)', 'Which constitutional amendment gave constitutional status to Panchayati Raj institutions? (73rd Amendment Act 1992)']
  },

  // Economics (6)
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Economics', name: 'Demand and supply',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Market Equilibrium & Elasticity', tasks: ['Law of Demand (inverse price-quantity relationship) and Giffen goods exception', 'Price Elasticity of Demand formula: (% Change in Q) / (% Change in P)'] }],
    notes: 'Giffen and Veblen goods violate the law of demand: demand rises as price rises.',
    practiceQuestions: ['What is a Giffen good and how does it violate the standard law of demand?', 'What does an elasticity of demand greater than 1 signify? (Elastic demand)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Economics', name: 'Inflation',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Inflation Indices & Types', tasks: ['Demand-Pull vs Cost-Push inflation', 'CPI (Consumer Price Index - headline inflation target 4% +/- 2%) vs WPI (Wholesale Price Index)'] }],
    notes: 'RBI targets CPI headline inflation at 4% with a tolerance band of +/- 2% (2% to 6%) under the Monetary Policy Framework.',
    practiceQuestions: ['What is the difference between Demand-Pull and Cost-Push inflation?', 'Which inflation index is used by the RBI as its key monetary policy target? (CPI Combined)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Economics', name: 'Indian economy',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Economic Structure & Five-Year Plans', tasks: ['Mixed economy model, NITI Aayog (replaced Planning Commission in 2015)', 'GDP, GNP, NNP at Factor Cost (National Income)'] }],
    notes: 'National Income = NNP at Factor Cost (Net National Product at Factor Cost).',
    practiceQuestions: ['National Income of India is measured as which economic aggregate? (NNP at Factor Cost)', 'When was NITI Aayog established and who is its ex-officio Chairman? (1 Jan 2015, Prime Minister)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Economics', name: 'Economic sectors',
    importance: 'Medium', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Primary, Secondary, Tertiary Sectors', tasks: ['Primary (agriculture, mining), Secondary (manufacturing), Tertiary (services - highest contributor to GDP)'] }],
    notes: 'Services (tertiary) sector contributes over 53% to India\'s Gross Value Added (GVA).',
    practiceQuestions: ['Which sector contributes the largest share to India\'s Gross Domestic Product (GDP)? (Tertiary / Services sector)', 'What is disguised unemployment and in which sector is it most prevalent? (Agriculture)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Economics', name: 'Banking basics',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'RBI Tools & Commercial Banking', tasks: ['Repo Rate, Reverse Repo, CRR (Cash Reserve Ratio), SLR (Statutory Liquidity Ratio)', 'Bank nationalization (1969: 14 banks, 1980: 6 banks)'] }],
    notes: 'When RBI increases the Repo Rate, commercial bank borrowing becomes expensive, reducing money supply to tame inflation.',
    practiceQuestions: ['What happens to money supply when RBI increases the Cash Reserve Ratio (CRR)? (Decreases)', 'In which year were 14 major commercial banks nationalized in India? (1969)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Economics', name: 'International organizations',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 40,
    subtopics: [{ name: 'Bretton Woods & Global Bodies', tasks: ['IMF and World Bank (Washington DC), WTO (Geneva), ADB (Manila), BRICS NDB (Shanghai)'] }],
    notes: 'IMF provides balance of payments financial support; World Bank funds long-term developmental infrastructure projects.',
    practiceQuestions: ['Where are the headquarters of the International Monetary Fund (IMF) and World Bank located? (Washington D.C.)', 'Where is the headquarters of the World Trade Organization (WTO)? (Geneva, Switzerland)']
  },

  // General Science (4)
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Science', name: 'Physics',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Units, Optics, & Mechanics', tasks: ['SI Units (Force - Newton, Work/Energy - Joule, Power - Watt)', 'Total Internal Reflection (optical fiber, mirage), Concave vs Convex mirrors and lenses'] }],
    notes: 'Optical fibers work on the principle of Total Internal Reflection (TIR). Sky appears blue due to Rayleigh scattering.',
    practiceQuestions: ['On what principle do optical fiber communication cables work? (Total Internal Reflection)', 'Why does the sky appear blue to an observer on Earth? (Scattering of light)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Science', name: 'Chemistry',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Chemical Names & Periodic Table', tasks: ['Common names: Baking soda (NaHCO3), Washing soda (Na2CO3.10H2O), Bleaching powder (CaOCl2), Plaster of Paris (CaSO4.1/2H2O)', 'Acids, bases, pH scale (pH < 7 acid, pH = 7 neutral, pH > 7 base)'] }],
    notes: 'Baking Soda = Sodium Bicarbonate (NaHCO3). Washing Soda = Sodium Carbonate Decahydrate (Na2CO3.10H2O).',
    practiceQuestions: ['What is the chemical name and formula of Baking Soda? (Sodium Bicarbonate, NaHCO3)', 'What is the pH value of pure water at 25 degrees Celsius? (7.0)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Science', name: 'Biology',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 60,
    subtopics: [{ name: 'Human Physiology, Vitamins, & Diseases', tasks: ['Vitamins & Deficiency Diseases: Vit A (Night blindness), Vit C (Scurvy), Vit D (Rickets), Vit B1 (Beriberi)', 'Blood groups (AB+ universal recipient, O- universal donor), Cell biology (Mitochondria powerhouse)'] }],
    notes: 'Mitochondria is the powerhouse of the cell (ATP synthesis). Vitamin K is essential for blood clotting.',
    practiceQuestions: ['Which vitamin deficiency causes Scurvy? (Vitamin C / Ascorbic acid)', 'Which blood group is known as the Universal Donor? (O negative)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Science', name: 'Environmental studies',
    importance: 'Medium', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Ecosystems & Biodiversity Protocols', tasks: ['Food chain and 10% energy transfer law (Lindeman)', 'National parks, Ramsar wetlands, Kyoto Protocol (greenhouse gases), Paris Agreement'] }],
    notes: 'Lindeman\'s 10% law: only 10% of energy is transferred from one trophic level to the next.',
    practiceQuestions: ['What is Lindeman\'s 10% Law in ecology?', 'What do Ramsar Convention sites designate? (Wetlands of international importance)']
  },

  // Current Affairs (7)
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Current Affairs', name: 'National news',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 40,
    subtopics: [{ name: 'Major National Developments', tasks: ['Track national infrastructure inaugurations, summits, and legislative bills of the past 12 months'] }],
    notes: 'Review monthly compilations of national current affairs focusing on major milestones.',
    practiceQuestions: ['What major national bills and infrastructure corridors were launched recently?', 'How do you structure revision for last 6 months\' national news?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Current Affairs', name: 'International news',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 40,
    subtopics: [{ name: 'Global Summits & Bilateral Treaties', tasks: ['Track G20, BRICS, SCO, ASEAN, QUAD summits and bilateral defense exercises'] }],
    notes: 'Pay special attention to summit host countries, themes, and new member admissions.',
    practiceQuestions: ['Which country hosted the latest BRICS and G20 summits?', 'Name three major bilateral military exercises conducted by India with foreign nations.']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Current Affairs', name: 'Sports',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Tournaments & Medal Tally', tasks: ['Olympic Games, Asian Games, Commonwealth Games, Cricket World Cup, Grand Slam tennis winners'] }],
    notes: 'SSC CGL frequently tests Grand Slam tennis tournament champions and Indian medalists at Asian/Olympic Games.',
    practiceQuestions: ['Who won the men\'s and women\'s singles titles at Wimbledon and Australian Open this year?', 'What were India\'s major achievements at the recent Asian Games?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Current Affairs', name: 'Awards',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'National & International Honors', tasks: ['Bharat Ratna, Padma Awards, Nobel Prizes, Booker Prize, Dadasaheb Phalke, Jnanpith Award'] }],
    notes: 'Memorize latest Bharat Ratna awardees and recent Nobel Prize categories.',
    practiceQuestions: ['Who received the latest Bharat Ratna awards?', 'Who was honored with the Dadasaheb Phalke Award for lifetime contribution to cinema?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Current Affairs', name: 'Government schemes',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Flagship Central Welfare Schemes', tasks: ['PM-KISAN, PM Awas Yojana, Ayushman Bharat, Jal Jeevan Mission, PLI Scheme (Production Linked Incentive)'] }],
    notes: 'Review nodal ministry, launch year, budgetary allocation, and beneficiary eligibility criteria.',
    practiceQuestions: ['Which ministry implements the Ayushman Bharat PM-JAY scheme and what is the insurance coverage limit? (Ministry of Health, Rs 5 lakh per family)', 'What is the objective of the Jal Jeevan Mission? (Functional household tap connections to all rural households)']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Current Affairs', name: 'Important appointments',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Key Constitutional & Executive Heads', tasks: ['Chief Justice of India, Chief Election Commissioner, CAG, Attorney General, RBI Governor, CDS'] }],
    notes: 'Keep a quick-revision cheat sheet of constitutional dignitaries and heads of financial regulatory bodies.',
    practiceQuestions: ['Who is the current Comptroller and Auditor General (CAG) of India?', 'Who is the Chief Election Commissioner and Attorney General of India?']
  },
  {
    subjectId: 'sub_ssc_tier1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 1: General Awareness - Current Affairs', name: 'Economic events',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 40,
    subtopics: [{ name: 'Union Budget & Economic Survey', tasks: ['Key Union Budget fiscal deficit targets, capital expenditure allocations, tax slab revisions'] }],
    notes: 'Union Budget figures (Capex, Fiscal Deficit % of GDP) are guaranteed questions in SSC CGL.',
    practiceQuestions: ['What is the target fiscal deficit percentage of GDP announced in the latest Union Budget?', 'What was the GDP growth projection presented in the Economic Survey?']
  },

  // ==========================================
  // TIER 2 - PAPER 1: 6 Modules (50 topics)
  // ==========================================
  // Module 1: Mathematical Abilities (7)
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Mathematical Abilities', name: 'Advanced arithmetic',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 65,
    subtopics: [{ name: 'Multi-Concept Arithmetic Integration', tasks: ['Solve complex problems combining profit/loss with successive discounts and SI/CI variations', 'Advanced work and pipe cistern efficiency equations'] }],
    notes: 'Tier 2 Paper 1 maths problems feature multi-step calculations requiring fast approximation and algebraic shortcuts.',
    practiceQuestions: ['A trader marks goods up by 40%, gives 20% discount, but uses 900g false weight. Find overall net profit %.', 'Solve an advanced partnership case with fluctuating investments and active manager deductions.']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Mathematical Abilities', name: 'Advanced algebra',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 70,
    subtopics: [{ name: 'Higher Order Polynomials & Systems', tasks: ['Solve x^5 + 1/x^5 and x^7 + 1/x^7 expansions', 'Three-variable algebraic identity manipulations with conditional constraints'] }],
    notes: 'x^5 + 1/x^5 = (x^2 + 1/x^2)(x^3 + 1/x^3) - (x + 1/x).',
    practiceQuestions: ['If x + 1/x = 3, calculate the exact value of x^5 + 1/x^5.', 'If a + b + c = 0, simplify [a^2 / (bc)] + [b^2 / (ca)] + [c^2 / (ab)]. (Answer: 3)']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Mathematical Abilities', name: 'Geometry',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 75,
    subtopics: [{ name: 'Advanced Circle & Triangle Theorems', tasks: ['Apollonius theorem on medians (AB^2 + AC^2 = 2*(AD^2 + BD^2))', 'Common internal and external tangents: sqrt(d^2 - (r1 +/- r2)^2)'] }],
    notes: 'Length of direct common tangent = sqrt(d^2 - (r1 - r2)^2). Transverse common tangent = sqrt(d^2 - (r1 + r2)^2).',
    practiceQuestions: ['Two circles of radii 9 cm and 4 cm have centers 13 cm apart. Find length of direct common tangent. (12 cm)', 'State and apply Apollonius\'s theorem to find length of a median.']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Mathematical Abilities', name: 'Mensuration',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 70,
    subtopics: [{ name: 'Complex 3D Combinations & Inscribed Shapes', tasks: ['Sphere inscribed inside a cone or cylinder', 'Water flow rate through pipes filling geometric reservoirs'] }],
    notes: 'Calculate volume flow rate: Volume = Area of cross-section * Flow speed * Time.',
    practiceQuestions: ['Water flows through a cylindrical pipe of diameter 14 cm at 5 km/h into a rectangular tank 50m x 44m. Find time to raise water by 7 cm.', 'Calculate surface area of a composite solid formed by joining a hemisphere to a cylinder.']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Mathematical Abilities', name: 'Trigonometry',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 65,
    subtopics: [{ name: 'Advanced Conditional Trigonometry', tasks: ['Eliminate theta between equations', 'Value substitution shortcuts (theta = 45 or 0 or 30 degrees) to verify identities'] }],
    notes: 'Value-putting method: substitute theta = 45 degrees to verify and eliminate multiple choice options rapidly.',
    practiceQuestions: ['Simplify: (sin theta / (1 + cos theta)) + ((1 + cos theta) / sin theta). (2 cosec theta)', 'Solve: If a cos theta + b sin theta = c, find a sin theta - b cos theta. (+/- sqrt(a^2 + b^2 - c^2))']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Mathematical Abilities', name: 'Statistics',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 60,
    subtopics: [{ name: 'Central Tendency & Dispersion', tasks: ['Mean, Median, Mode empirical formula: Mode = 3*Median - 2*Mean', 'Variance and Standard Deviation calculations'] }],
    notes: 'Empirical relation: Mode = 3 Median - 2 Mean. Standard Deviation is the square root of Variance.',
    practiceQuestions: ['If the mean of a dataset is 20 and median is 22, calculate the mode using the empirical formula. (26)', 'Calculate the variance and standard deviation of numbers: 2, 4, 6, 8, 10.']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Mathematical Abilities', name: 'Probability',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 60,
    subtopics: [{ name: 'Permutations, Combinations, & Probability', tasks: ['Coin tosses, dice rolls, pack of cards (52 cards distribution)', 'Addition rule P(A or B) and independent events multiplication P(A and B)'] }],
    notes: 'P(Event) = Favorable outcomes / Total outcomes. For independent events, P(A and B) = P(A) * P(B).',
    practiceQuestions: ['Two dice are thrown simultaneously. What is the probability of getting a sum of 8? (5/36)', 'From a pack of 52 cards, two cards are drawn at random. What is the probability that both are kings?']
  },

  // Module 2: Reasoning and General Intelligence (8)
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Reasoning', name: 'Semantic analogy',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Advanced Semantic Word Associations', tasks: ['Identify nuanced literary and philosophical analogy pairs in Tier 2 patterns'] }],
    notes: 'Focus on precise degree and nature of relationship.',
    practiceQuestions: ['Taciturn : Verbose :: Sedentary : ? (Active)', 'Solve 3 advanced semantic analogy pairs.']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Reasoning', name: 'Symbolic operations',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Multi-Symbol Equation Balancing', tasks: ['Interchange two numbers and two operational signs to satisfy target equation'] }],
    notes: 'Look at division operators first: division must result in integers for the equation to hold.',
    practiceQuestions: ['Which two signs should be interchanged to make 16 + 8 / 4 * 2 - 1 = 9 correct?', 'Balance multi-symbol equations using divisibility constraints.']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Reasoning', name: 'Venn diagrams',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 40,
    subtopics: [{ name: 'Geometric Venn Number Calculation', tasks: ['Identify numbers representing specific shaded cross-sections (e.g. educated rural women)'] }],
    notes: 'Pay close attention to restrictive modifiers ("only", "not").',
    practiceQuestions: ['In a triangle (artists), circle (doctors), rectangle (players), find number representing doctors who are players but not artists.', 'Solve a 3-set quantitative Venn diagram problem.']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Reasoning', name: 'Number series',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 50,
    subtopics: [{ name: 'Multi-Tier Difference Series', tasks: ['Second-difference series, prime number increments, alternating multiplication/subtraction'] }],
    notes: 'When number growth is steady, compute differences of differences (step-down method).',
    practiceQuestions: ['Find the next number: 2, 9, 28, 65, 126, ? (n^3 + 1 -> 217)', 'Find the missing number in: 6, 13, 28, 59, ? (*2 + 1, *2 + 2, *2 + 3 -> 122)']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Reasoning', name: 'Figural series',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Multi-Element Matrix Movements', tasks: ['Analyze pinwheel rotations and corner flips in 3x3 figure matrices'] }],
    notes: 'Track one inner feature at a time across columns and rows.',
    practiceQuestions: ['Complete a 3x3 matrix where elements undergo 90-degree rotations across rows.', 'Identify governing spatial patterns in non-verbal matrices.']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Reasoning', name: 'Critical thinking',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 55,
    subtopics: [{ name: 'Course of Action & Cause-Effect', tasks: ['Evaluate feasible, non-extreme courses of action', 'Determine which event is the cause and which is the effect'] }],
    notes: 'A course of action must be realistic, proportionate, and directly address the root problem without creating worse side effects.',
    practiceQuestions: ['Statement: Severe water scarcity in city. Course of action 1: Ban all construction. Course of action 2: Rationalize water supply. Which is appropriate?', 'Identify cause and effect between two related social events.']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Reasoning', name: 'Problem solving',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 55,
    subtopics: [{ name: 'Seating Arrangements & Order Puzzles', tasks: ['Circular seating arrangement (facing center vs facing outside)', 'Floor puzzles and scheduling puzzles with 2-3 variable attributes'] }],
    notes: 'In circular seating facing center: Right = Counter-clockwise, Left = Clockwise.',
    practiceQuestions: ['8 friends seated in a circle facing center: solve position of G relative to B given 4 constraints.', 'Solve a 6-person floor puzzle (floors 1 to 6).']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Reasoning', name: 'Logical reasoning',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 50,
    subtopics: [{ name: 'Complex Deductive Arguments', tasks: ['Analyze multi-premise formal logic and truth-teller vs liar puzzles'] }],
    notes: 'Test assumed states: assume Person A is telling truth; trace contradictions.',
    practiceQuestions: ['Solve a 3-person truth-teller/liar puzzle where only one person tells the truth.', 'Identify valid deductive inferences from complex syllogistic sets.']
  },

  // Module 3: English Language and Comprehension (10)
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: English', name: 'Grammar',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 55,
    subtopics: [{ name: 'Tier 2 Advanced Grammar Rules', tasks: ['Inversion with conditional clauses ("Had I known...", "Should you need...")', 'Participle clauses and subjunctive mood'] }],
    notes: '"Had I known about the changes, I would have prepared accordingly" (inversion replacing "If I had known").',
    practiceQuestions: ['Transform: "If he should call, tell him I am busy" into inverted form.', 'Spot the subjunctive mood error in: "The committee insisted that the member resigns." (resign)']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: English', name: 'Vocabulary',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 55,
    subtopics: [{ name: 'High-Level Academic & Archaic Lexicon', tasks: ['Review high-tier vocabulary: obsequious, ubiquitous, esoteric, bellicose, trenchant'] }],
    notes: 'Tier 2 tests vocabulary with subtle distinctions in literary and formal registers.',
    practiceQuestions: ['Meaning of "UBIQUITOUS": (Present everywhere)', 'Meaning of "OBSEQUIOUS": (Overly submissive / flattering)']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: English', name: 'Active and passive voice',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Complex Imperative & Interrogative Voice', tasks: ['Who wrote this book? -> By whom was this book written?', 'It is time to close the shop -> It is time for the shop to be closed'] }],
    notes: '"Who wrote this book?" becomes "By whom was this book written?".',
    practiceQuestions: ['Convert: "Why did you break the vase?" -> (Why was the vase broken by you?)', 'Convert: "It is time to take tea." -> (It is time for tea to be taken.)']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: English', name: 'Spot the error',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 55,
    subtopics: [{ name: 'Deep Syntax Diagnostics', tasks: ['Parallelism, correlative conjunction alignment, split infinitives, modifier placement'] }],
    notes: 'Examine sentence structure holistically: errors in Tier 2 often involve misplaced clauses rather than simple subject-verb agreement.',
    practiceQuestions: ['Spot error: "Not only she failed in the examination, but she also lost her scholarship."', 'Spot error: "He gave me two five-hundred-rupees notes."']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: English', name: 'Synonyms',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 45,
    subtopics: [{ name: 'Tier 2 Repeated Synonyms', tasks: ['Epistle, Grandiose, Alacrity, Cacophony, Enervate, Castigate'] }],
    notes: 'Alacrity = brisk and cheerful readiness; Castigate = reprimand severely.',
    practiceQuestions: ['Synonym of "ALACRITY": (Eagerness / Readiness)', 'Synonym of "CASTIGATE": (Rebuke / Censure)']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: English', name: 'Antonyms',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 45,
    subtopics: [{ name: 'Tier 2 Nuanced Opposites', tasks: ['Gregarious vs Solitary, Loquacious vs Reticent, Prodigal vs Parsimonious'] }],
    notes: 'Prodigal = extravagant; Parsimonious = stingy. Gregarious = sociable; Solitary = lone.',
    practiceQuestions: ['Antonym of "LOQUACIOUS": (Reticent / Silent)', 'Antonym of "PARSIMONIOUS": (Generous / Extravagant)']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: English', name: 'Sentence improvement',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Idiomatic Phrase Replacement', tasks: ['Refine awkward phrases into standard English idioms and correct prepositions'] }],
    notes: 'Pay attention to fixed prepositional idioms: "in accordance with", "with a view to + V_ing".',
    practiceQuestions: ['Improve: "He came here with a view to *get* a job." -> (getting)', 'Improve: "Hardly he had arrived when it began to rain." -> (Hardly had he arrived)']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: English', name: 'Cloze passage',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 55,
    subtopics: [{ name: '10-Blank Advanced Cloze Passage', tasks: ['Read full narrative to map emotional and logical arc before selecting options', 'Differentiate closely related contextual vocabulary'] }],
    notes: 'Tier 2 features 10-blank passages: maintaining cohesive thematic understanding across the entire passage is vital.',
    practiceQuestions: ['Solve a 10-blank passage on geopolitical diplomacy.', 'How do grammatical clues eliminate 2 of 4 options in cloze tests?']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: English', name: 'Sentence rearrangement',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 55,
    subtopics: [{ name: 'Tier 2 Para Jumble Pairs', tasks: ['Eliminate options rapidly by checking starting and ending sentence validity', 'Identify pronouns (he, it, they) and match with their noun referents in preceding sentences'] }],
    notes: 'Option elimination is twice as fast as building the sequence from scratch.',
    practiceQuestions: ['Solve a 6-sentence rearrangement (S1, P, Q, R, S, S6 format).', 'What connects S1 to the opening sequence option?']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: English', name: 'Reading comprehension',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 60,
    subtopics: [{ name: 'Dense Editorial Analysis', tasks: ['Analyze passages on economics, philosophy, scientific research, and judicial reviews', 'Answer main idea, title of passage, author\'s perspective, and vocabulary in context'] }],
    notes: 'Passages in Tier 2 are drawn directly from editorial broadsheets (The Hindu, Indian Express, Project Syndicate).',
    practiceQuestions: ['Practice a dense 400-word editorial passage with 5 analytical questions.', 'How do you determine the most appropriate title for a comprehension passage?']
  },

  // Module 4: General Awareness (8)
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: General Awareness', name: 'History',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Constitutional & Administrative Evolution', tasks: ['Trace development of civil administration, revenue settlements, and national movement chronologies'] }],
    notes: 'Focus on chronological sequences of British Acts and landmark Congress sessions.',
    practiceQuestions: ['Arrange in chronological order: Gandhi-Irwin Pact, Simon Commission, Poona Pact, Rowlatt Act.', 'Which Act introduced provincial autonomy in British India? (GOI Act 1935)']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: General Awareness', name: 'Geography',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Economic & Resource Geography', tasks: ['Distribution of mineral resources (iron ore, coal, bauxite), major industrial corridors, national highways (Golden Quadrilateral)'] }],
    notes: 'Major coal fields: Jharia, Raniganj, Bokaro (Damodar Valley). Iron ore: Kudremukh, Bailadila, Mayurbhanj.',
    practiceQuestions: ['Which region in India is known as the "Ruhr of India"? (Damodar Valley)', 'Which National Highway connects Delhi and Kolkata via Varanasi? (NH 19 / old NH 2)']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: General Awareness', name: 'Economics',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Macroeconomic Aggregates & Fiscal Management', tasks: ['Fiscal Deficit, Revenue Deficit, Primary Deficit definitions', 'Balance of Payments (Current Account vs Capital Account)'] }],
    notes: 'Primary Deficit = Fiscal Deficit - Interest Payments. Revenue Deficit = Revenue Expenditure - Revenue Receipts.',
    practiceQuestions: ['Define Primary Deficit and its economic significance.', 'What items constitute the Capital Account of the Balance of Payments?']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: General Awareness', name: 'Polity',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Constitutional Bodies & Amendments', tasks: ['Election Commission (Art 324), UPSC (Art 315), Finance Commission (Art 280), GST Council (Art 279A)', 'Landmark amendments (42nd, 44th, 73rd, 86th, 101st GST, 103rd EWS)'] }],
    notes: 'Finance Commission is constituted every 5 years under Article 280 by the President. 101st Amendment enacted GST.',
    practiceQuestions: ['Which Article of the Constitution governs the establishment of the Finance Commission? (Article 280)', 'Which Constitutional Amendment introduced the Goods and Services Tax (GST)? (101st Amendment Act 2016)']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: General Awareness', name: 'Physics',
    importance: 'Medium', difficulty: 'Medium', estimatedMinutes: 40,
    subtopics: [{ name: 'Applied Physics & Devices', tasks: ['Working principles of Transformer (mutual induction), Dynamo (electromagnetic induction), Sonar (ultrasonic waves)'] }],
    notes: 'Transformers work on mutual induction and operate exclusively on Alternating Current (AC).',
    practiceQuestions: ['On which principle does an electric generator (dynamo) operate? (Electromagnetic induction)', 'Which electromagnetic waves are used in satellite communication? (Microwaves)']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: General Awareness', name: 'Chemistry',
    importance: 'Medium', difficulty: 'Medium', estimatedMinutes: 40,
    subtopics: [{ name: 'Industrial Chemistry & Alloys', tasks: ['Alloys: Brass (Cu + Zn), Bronze (Cu + Sn), Stainless Steel (Fe + Cr + Ni + C), Solder (Pb + Sn)', 'Polymers, glass types, and fertilizers'] }],
    notes: 'Brass is Copper + Zinc. Bronze is Copper + Tin. Solder is Lead + Tin.',
    practiceQuestions: ['What are the constituent metals of Brass? (Copper and Zinc)', 'Which chemical compound is known as "Laughing Gas"? (Nitrous Oxide, N2O)']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: General Awareness', name: 'Biology',
    importance: 'Medium', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Endocrine System & Genetics', tasks: ['Hormones (Insulin from pancreas beta cells, Thyroid, Pituitary master gland)', 'DNA vs RNA structure, Mendel\'s laws of inheritance'] }],
    notes: 'Insulin is secreted by beta cells of the Islets of Langerhans in the pancreas; deficiency causes Diabetes Mellitus.',
    practiceQuestions: ['Which gland is known as the "Master Gland" of the human body? (Pituitary Gland)', 'Which hormone regulates blood sugar levels and from where is it secreted? (Insulin, Pancreas)']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: General Awareness', name: 'Current affairs',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Integrated Annual Current Affairs', tasks: ['National sports, science & technology missions (ISRO Chandrayaan, Gaganyaan, Aditya-L1), global geopolitical treaties'] }],
    notes: 'ISRO space missions, defense inductions, and international summits are staple Tier 2 questions.',
    practiceQuestions: ['What was the landing site of Chandrayaan-3 on the lunar south pole named? (Shiv Shakti Point)', 'What is the objective of India\'s Aditya-L1 solar mission?']
  },

  // Module 5: Computer Knowledge (13)
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Computer Knowledge', name: 'Computer fundamentals',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 40,
    subtopics: [{ name: 'Generations & Architecture', tasks: ['1st (Vacuum tubes), 2nd (Transistors), 3rd (ICs), 4th (Microprocessors), 5th (AI/ULSI)', 'Von Neumann architecture (CPU, Memory, I/O)'] }],
    notes: 'Computer Knowledge is a qualifying module in Tier 2: candidates MUST score qualifying marks to be eligible for all posts.',
    practiceQuestions: ['What electronic components characterized the first generation of computers? (Vacuum tubes)', 'What is the Von Neumann bottleneck in computer architecture?']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Computer Knowledge', name: 'Computer hardware',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 40,
    subtopics: [{ name: 'Input/Output & Memory Hierarchy', tasks: ['RAM (volatile) vs ROM (non-volatile), Cache memory (fastest SRAM)', 'Primary memory vs Secondary memory (HDD, SSD, Optical)'] }],
    notes: 'Cache memory sits between CPU registers and main RAM to accelerate frequently accessed instructions.',
    practiceQuestions: ['Which is the fastest memory accessible by the CPU? (Registers / L1 Cache)', 'What is the difference between volatile and non-volatile memory?']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Computer Knowledge', name: 'Software',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'System vs Application Software', tasks: ['System software (OS, Device Drivers, Compilers, Interpreters, Assemblers)', 'Application software (Word processors, Spreadsheets, DBMS)'] }],
    notes: 'A compiler translates entire high-level code to machine code before execution; an interpreter translates line-by-line.',
    practiceQuestions: ['What is the difference between a Compiler and an Interpreter?', 'What is firmware and where is it permanently stored? (ROM)']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Computer Knowledge', name: 'Operating systems',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'OS Functions & Kernels', tasks: ['Process scheduling, memory management, file systems (FAT32, NTFS, ext4)', 'Compare Windows, Linux/Unix, macOS, Android'] }],
    notes: 'The kernel is the core component of the operating system that directly controls hardware resources.',
    practiceQuestions: ['What is the main function of the operating system kernel?', 'Name three common file systems used by Windows and Linux.']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Computer Knowledge', name: 'MS Word',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Word Processing & Keyboard Shortcuts', tasks: ['Master Ctrl+A to Ctrl+Z shortcuts', 'Headers/Footers, Mail Merge, Page Breaks, Margins, Find & Replace (Ctrl+H)'] }],
    notes: 'Ctrl+K inserts hyperlink; Ctrl+H opens Find and Replace; Ctrl+E centers text.',
    practiceQuestions: ['What is the keyboard shortcut to insert a hyperlink in MS Word? (Ctrl + K)', 'Explain the purpose and steps of Mail Merge in MS Word.']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Computer Knowledge', name: 'MS Excel',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 55,
    subtopics: [{ name: 'Spreadsheets, Formulas, & Cell Referencing', tasks: ['Relative (A1), Absolute ($A$1), and Mixed ($A1) cell referencing', 'Functions: SUM, AVERAGE, COUNT, COUNTA, IF, VLOOKUP, CONCATENATE'] }],
    notes: 'Absolute referencing ($A$1) anchors row and column so they don\'t shift when formula is copied across cells.',
    practiceQuestions: ['What is the difference between relative ($A1) and absolute ($A$1) referencing in Excel?', 'What formula counts only non-empty cells in range A1:A10? (=COUNTA(A1:A10))']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Computer Knowledge', name: 'MS PowerPoint',
    importance: 'Medium', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Presentation Slides & Shortcuts', tasks: ['F5 (start slideshow from beginning), Shift+F5 (start from current slide)', 'Slide Master, slide transitions, animation triggers'] }],
    notes: 'F5 starts slideshow from slide 1; Shift+F5 starts slideshow from the current active slide.',
    practiceQuestions: ['What shortcut runs a presentation from the current slide in PowerPoint? (Shift + F5)', 'What is the function of the Slide Master in MS PowerPoint?']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Computer Knowledge', name: 'Internet',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 40,
    subtopics: [{ name: 'Web Architecture & Protocols', tasks: ['URL structure, HTTP/HTTPS, FTP, DNS, Search engine web crawlers', 'Cookies, browser cache, private incognito browsing'] }],
    notes: 'HTTP port 80; HTTPS port 443; FTP ports 20/21; DNS port 53.',
    practiceQuestions: ['What are the standard port numbers for HTTP, HTTPS, and FTP?', 'What is the role of an Internet Service Provider (ISP)?']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Computer Knowledge', name: 'Email',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Email Protocols & Fields', tasks: ['SMTP (sending port 25/587), POP3 (receiving port 110), IMAP (syncing port 143)', 'To, Cc (Carbon Copy), Bcc (Blind Carbon Copy - hides recipients)'] }],
    notes: 'SMTP sends emails; POP3/IMAP retrieves emails. Bcc recipients cannot see each other\'s email addresses.',
    practiceQuestions: ['Which protocol is used for sending emails over the internet? (SMTP)', 'What is the functional difference between CC and BCC in email messaging?']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Computer Knowledge', name: 'Networking',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Network Topologies & Devices', tasks: ['Topologies: Star, Bus, Ring, Mesh (highest redundancy)', 'Devices: Hub (broadcasts to all), Switch (intelligent MAC filtering), Router (IP packet routing)'] }],
    notes: 'Switches operate at OSI Layer 2 (Data Link - MAC); Routers operate at Layer 3 (Network - IP).',
    practiceQuestions: ['At which OSI layer does a network router operate? (Layer 3 - Network Layer)', 'Which network topology requires a central hub/switch and has the easiest troubleshooting? (Star topology)']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Computer Knowledge', name: 'Cybersecurity',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Threat Vectors & Defenses', tasks: ['Phishing, Spoofing, Denial of Service (DoS/DDoS), Man-in-the-Middle (MitM)', 'Firewalls (packet filtering), Two-Factor Authentication, encryption'] }],
    notes: 'Phishing tricks users into revealing credentials through fake emails or imitation login websites.',
    practiceQuestions: ['What is a Phishing attack and how can users identify it?', 'What is the primary function of a network firewall?']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Computer Knowledge', name: 'Computer viruses',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 40,
    subtopics: [{ name: 'Malware Taxonomy', tasks: ['Virus (attaches to host file), Worm (self-replicating over network without host)', 'Trojan Horse (disguised as useful tool), Ransomware, Spyware, Keylogger'] }],
    notes: 'Worms self-replicate independently across networks without needing a host file; viruses require host executable files to propagate.',
    practiceQuestions: ['How does a computer worm differ from a computer virus?', 'What is Ransomware and how does it extort victims?']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Computer Knowledge', name: 'Digital security',
    importance: 'Medium', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Digital Signatures & Indian IT Act', tasks: ['Public Key Infrastructure (PKI), asymmetric cryptography, Information Technology Act 2000 provisions'] }],
    notes: 'Digital signatures provide authentication, integrity, and non-repudiation using asymmetric public/private key pairs.',
    practiceQuestions: ['What three security properties does a digital signature guarantee? (Authenticity, Integrity, Non-repudiation)', 'In which year was the Information Technology Act enacted in India? (2000)']
  },

  // Module 6: Data Entry Speed Test (4)
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Data Entry Speed Test', name: 'Typing fundamentals',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 30,
    subtopics: [{ name: 'Home Row & Ergonomics', tasks: ['Position fingers on ASDF and JKL;', 'Maintain upright posture, flat wrists, and eyes on screen without looking at keyboard'] }],
    notes: 'DEST requires 2000 key depressions in 15 minutes (~27 words per minute with <= 5-7% error rate).',
    practiceQuestions: ['What is the exact typing speed requirement in key depressions for SSC CGL DEST? (2000 key depressions in 15 minutes)', 'What are the home row keys on a standard QWERTY keyboard? (ASDF JKL;)']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Data Entry Speed Test', name: 'Typing accuracy',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 30,
    subtopics: [{ name: 'Error Rate Elimination', tasks: ['Minimize backspace dependency', 'Eliminate omission, substitution, and spelling errors in mock typing passages'] }],
    notes: 'Accuracy is prioritized over raw speed in SSC DEST: errors exceed allowable threshold results in disqualification.',
    practiceQuestions: ['What is the maximum permissible error percentage for general category in DEST? (Typically 5%)', 'How does practicing without using the backspace key improve typing flow?']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 1',
    module: 'Tier 2 P1: Data Entry Speed Test', name: 'Typing speed',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 35,
    subtopics: [{ name: 'Building WPM Velocity', tasks: ['Transition from 25 WPM to safe buffer of 35-40 WPM on typing software (TypingMaster, Monkeytype)'] }],
    notes: 'Aim for 35 WPM in practice so that exam hall keyboard friction or nervousness does not pull you below the 27 WPM qualifying threshold.',
    practiceQuestions: ['What practice WPM speed provides a safe margin for exam day anxiety? (35+ WPM)', 'How do rhythm and cadence prevent muscle tension during 15-minute typing stints?']
  },
  {
    subjectId: 'sub_ssc_tier2_p1', subjectName: 'SSC CGL Tier 2 — Paper 1',
    module: 'Tier 2 P1: Data Entry Speed Test', name: 'Timed typing practice',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 30,
    subtopics: [{ name: '15-Minute Exam Simulation', tasks: ['Complete full 2000-character test passage under strict 15-minute timer', 'Review error audit breakdown'] }],
    notes: 'Daily 15-minute timed test builds the necessary stamina to complete all 2000 key depressions comfortably.',
    practiceQuestions: ['Execute a 15-minute timed mock test on official SSC sample passage format.', 'Audit your results: total key depressions, mistakes, and net accuracy percentage.']
  },

  // ==========================================
  // TIER 2 - PAPER 3: AAO FINANCE & ECONOMICS (80 topics)
  // ==========================================
  // Part A: Finance and Accounts - Accounting Fundamentals (8)
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Accounting Fundamentals', name: 'Introduction to accounting',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 45,
    subtopics: [{ name: 'Meaning, Objectives, & Users of Accounting', tasks: ['Define accounting as art of recording, classifying, summarizing in significant manner', 'Identify internal users (management, employees) and external users (investors, creditors, tax authorities)'] }],
    notes: 'Accounting is the language of business. Bookkeeping is the mechanical recording phase; accounting includes analysis and interpretation.',
    practiceQuestions: ['Differentiate between Bookkeeping and Accounting.', 'Who are the primary external stakeholders of financial accounting statements?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Accounting Fundamentals', name: 'Accounting concepts',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Fundamental Accounting Concepts', tasks: ['Business Entity concept (owner separate from business), Money Measurement (only financial transactions recorded)', 'Going Concern concept (business will continue indefinitely), Accounting Period concept'] }],
    notes: 'Business Entity Concept: Capital invested by the owner is treated as a liability of the business to the owner.',
    practiceQuestions: ['Why is capital shown on the liabilities side of the balance sheet? (Business Entity Concept)', 'Which concept justifies charging depreciation over the useful life of an asset? (Going Concern Concept)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Accounting Fundamentals', name: 'Accounting principles',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'GAAP & Standards', tasks: ['Historical Cost principle (assets recorded at purchase price)', 'Matching principle (expenses matched with revenues of the period)', 'Revenue Recognition / Realization principle'] }],
    notes: 'Matching Principle: Expenses incurred to earn revenue in an accounting period must be recognized in the same period.',
    practiceQuestions: ['Explain the Matching Principle with an example of prepaid expenses.', 'Under which principle are assets recorded at acquisition cost rather than market value? (Historical Cost Principle)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Accounting Fundamentals', name: 'Accounting conventions',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Prudence & Consistency', tasks: ['Convention of Conservatism / Prudence: anticipate no profits, provide for all possible losses', 'Convention of Consistency (methods unchanged year-to-year), Materiality, Full Disclosure'] }],
    notes: 'Conservatism convention: "Closing stock is valued at Cost or Net Realizable Value (Market Price), whichever is lower."',
    practiceQuestions: ['Why is inventory valued at cost or market price, whichever is lower? (Convention of Prudence/Conservatism)', 'Explain the Convention of Materiality with a minor office supply example.']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Accounting Fundamentals', name: 'Accounting equation',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Assets = Liabilities + Capital', tasks: ['Track impact of transactions on the dual balance equation', 'Express expanded equation: Assets = Liabilities + Capital + Revenue - Expenses - Drawings'] }],
    notes: 'Every transaction has two equal and opposite effects: Assets = Liabilities + Owner\'s Equity.',
    practiceQuestions: ['If a business purchases machinery for cash of Rs 50,000, what is the net impact on total assets? (Zero net change)', 'Express the expanded accounting equation incorporating revenues and expenses.']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Accounting Fundamentals', name: 'Double-entry system',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 40,
    subtopics: [{ name: 'Dual Aspect Concept', tasks: ['Every debit has a corresponding credit of equal amount', 'Origins: Luca Pacioli (1494) Summa de Arithmetica'] }],
    notes: 'Luca Pacioli is known as the Father of Double-Entry Accounting.',
    practiceQuestions: ['Who is regarded as the Father of Double-Entry Bookkeeping? (Fra Luca Pacioli, 1494)', 'What is the fundamental rule governing the double-entry system?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Accounting Fundamentals', name: 'Single-entry system',
    importance: 'Medium', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Incomplete Records Accounting', tasks: ['Determine profit using Statement of Affairs method', 'Convert single-entry records into double-entry by finding missing figures (Total Debtors, Total Creditors)'] }],
    notes: 'Single-entry does not maintain dual records: personal accounts and cash book are partially kept, real and nominal accounts ignored.',
    practiceQuestions: ['How is profit calculated using the Statement of Affairs method? (Closing Capital + Drawings - Additional Capital - Opening Capital)', 'What are the main defects of the single-entry system?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Accounting Fundamentals', name: 'Debit and credit',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'The Golden Rules of Accounting', tasks: ['Real Accounts (Assets): Debit what comes in, Credit what goes out', 'Personal Accounts: Debit the receiver, Credit the giver', 'Nominal Accounts (P&L): Debit all expenses and losses, Credit all incomes and gains'] }],
    notes: 'Golden Rules: Real (In/Out), Personal (Receiver/Giver), Nominal (Expenses/Incomes). Modern approach: Assets/Expenses increase on Debit; Liabilities/Capital/Revenues increase on Credit.',
    practiceQuestions: ['State the Golden Rules of Accounting for Personal, Real, and Nominal accounts.', 'According to the modern American approach, which account types have normal debit balances? (Assets and Expenses)']
  },

  // Financial Accounting (10)
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Financial Accounting', name: 'Journal',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Book of Original Entry', tasks: ['Record compound journal entries with narration', 'Differentiate Trade Discount (not recorded in books) vs Cash Discount (recorded in books)'] }],
    notes: 'Trade discount is deducted directly from invoice price and NEVER recorded in accounts; Cash discount is recorded to incentivize prompt payment.',
    practiceQuestions: ['Goods costing Rs 10,000 sold at 10% trade discount and 5% cash discount for cash. What amount is recorded in Cash Account? (Rs 8,550)', 'Why is trade discount not recorded in the books of accounts?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Financial Accounting', name: 'Ledger',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Principal Book of Accounts', tasks: ['Post journal entries into T-accounts (Debit side "To", Credit side "By")', 'Balance ledger accounts (c/d carried down, b/d brought down)'] }],
    notes: 'The Ledger is the Principal Book of accounts. Posting is transferring entries from journal to ledger.',
    practiceQuestions: ['What is the difference between Journal (original entry) and Ledger (principal book)?', 'What does a debit balance in a customer\'s personal account indicate? (Debtor / Asset)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Financial Accounting', name: 'Trial balance',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 55,
    subtopics: [{ name: 'Arithmetical Accuracy Verification', tasks: ['Prepare trial balance listing all debit and credit ledger balances', 'Identify errors that affect vs do NOT affect trial balance agreement (Errors of Principle, Compensating Errors, Omission)'] }],
    notes: 'Agreement of a Trial Balance is NOT conclusive proof of absolute accuracy: errors of principle and compensating errors remain hidden.',
    practiceQuestions: ['List three types of accounting errors that are NOT revealed by a Trial Balance agreement.', 'What is an Error of Principle? Give an example (treating capital expenditure as revenue).']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Financial Accounting', name: 'Cash book',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Single, Double, & Triple Column Cash Book', tasks: ['Manage Cash, Bank, and Discount columns', 'Record Contra Entries (cash deposited into bank or withdrawn for office use)', 'Petty Cash Book and Imprest system'] }],
    notes: 'Contra entries affect both Cash and Bank columns simultaneously in a double/triple column cash book (marked with "C").',
    practiceQuestions: ['What is a Contra Entry in a double-column cash book? Give two examples.', 'How does the Imprest System operate in a Petty Cash Book?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Financial Accounting', name: 'Subsidiary books',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 45,
    subtopics: [{ name: 'Specialized Journals', tasks: ['Purchase Book (credit purchase of goods only)', 'Sales Book (credit sales of goods only)', 'Purchase Return Book, Sales Return Book, Bills Receivable/Payable, Journal Proper'] }],
    notes: 'Cash purchases go to Cash Book, NOT Purchase Book. Asset purchases on credit go to Journal Proper, NOT Purchase Book.',
    practiceQuestions: ['Which transactions are recorded in the Purchase Book? (Only credit purchase of merchandise goods)', 'Where is a credit purchase of office machinery recorded? (Journal Proper, not Purchase Book)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Financial Accounting', name: 'Bank reconciliation',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 65,
    subtopics: [{ name: 'Reconciling Cash Book & Pass Book', tasks: ['Cheques issued but not yet presented for payment (Add to Cash Book)', 'Cheques deposited but not yet cleared (Deduct from Cash Book)', 'Direct debits/credits by bank, interest, and bank overdraft rules'] }],
    notes: 'BRS reconciles difference between Bank balance as per Cash Book and Pass Book on a particular date.',
    practiceQuestions: ['Bank balance as per Cash Book is Rs 10,000. Cheques issued for Rs 3,000 not presented. Bank charges Rs 200 debited in passbook. Find passbook balance. (Rs 12,800)', 'What does a credit balance in the Bank Pass Book represent? (Favorable / Asset)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Financial Accounting', name: 'Depreciation',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 60,
    subtopics: [{ name: 'Asset Amortization Methods', tasks: ['Straight Line Method (SLM: equal annual charge)', 'Written Down Value method (WDV: reducing balance, approved by IT Act)', 'Profit/loss on sale of depreciated assets'] }],
    notes: 'SLM charges equal depreciation on original cost every year. WDV charges depreciation on the opening book value, reducing annually.',
    practiceQuestions: ['An asset bought for Rs 1,00,000 has scrap value Rs 10,000 after 10 years. Calculate annual SLM depreciation. (Rs 9,000)', 'Why does the Income Tax Act recognize only the Written Down Value (WDV) method for tax depreciation?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Financial Accounting', name: 'Profit and loss account',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Trading & P&L Statement', tasks: ['Trading Account: Gross Profit = Net Sales - Cost of Goods Sold (COGS)', 'P&L Account: Net Profit = Gross Profit + Indirect Incomes - Indirect Expenses'] }],
    notes: 'Direct expenses (wages, carriage inward, factory rent) go to Trading Account; indirect expenses (salaries, rent, advertising) go to P&L Account.',
    practiceQuestions: ['Differentiate between Direct Expenses and Indirect Expenses with 3 examples each.', 'What is Cost of Goods Sold (COGS)? (Opening Stock + Purchases + Direct Expenses - Closing Stock)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Financial Accounting', name: 'Balance sheet',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 55,
    subtopics: [{ name: 'Financial Position Statement', tasks: ['Marshal assets and liabilities by Order of Liquidity vs Order of Permanence', 'Classify Current Assets, Non-Current Assets, Current Liabilities, Long-term Debt, Share Capital'] }],
    notes: 'A Balance Sheet is a statement, not an account, showing the financial position of a business as on a specific date.',
    practiceQuestions: ['Why is the Balance Sheet called a "statement" rather than an "account"?', 'Explain marshaling of a balance sheet in the Order of Permanence.']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Financial Accounting', name: 'Financial statements',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Final Accounts with Adjustments', tasks: ['Closing stock adjustment, outstanding expenses, prepaid expenses, accrued income', 'Provision for doubtful debts and provision for discount on debtors'] }],
    notes: 'Adjustments outside the trial balance have a dual effect: one in Trading/P&L and one in the Balance Sheet.',
    practiceQuestions: ['How is an adjustment for "Outstanding Salaries" recorded in final accounts? (Add to salaries in P&L, show as Current Liability in Balance Sheet)', 'Why does Closing Stock appear in the Balance Sheet if given inside the trial balance?']
  },

  // Taxation (4)
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Taxation', name: 'Direct taxes',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Income Tax & Corporate Tax', tasks: ['Incidence and impact fall on the same person (non-transferable)', 'Progressive tax structure (higher income pays higher marginal rate)'] }],
    notes: 'Direct taxes (Income Tax, Corporation Tax) are progressive and cannot be shifted onto consumers.',
    practiceQuestions: ['Define direct tax and provide two examples.', 'Why are direct taxes considered progressive in economic theory?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Taxation', name: 'Indirect taxes',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Taxes on Goods & Services', tasks: ['Incidence falls on consumers; impact collected by seller', 'Regressive nature of indirect taxes'] }],
    notes: 'Indirect taxes (GST, Customs Duty) can be shifted. They are regressive because poor and rich pay the same tax on goods.',
    practiceQuestions: ['Why are indirect taxes criticized for having a regressive impact on lower-income populations?', 'What is the cascading effect of taxation (tax on tax)?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Taxation', name: 'GST',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 60,
    subtopics: [{ name: 'Goods and Services Tax Framework', tasks: ['Dual GST structure: CGST, SGST, IGST (inter-state transactions)', 'Input Tax Credit (ITC) mechanism, GST Council (Article 279A, chaired by Union Finance Minister)'] }],
    notes: 'GST replaced multiple indirect taxes. IGST is collected by the Central Government and apportioned between Center and States.',
    practiceQuestions: ['Explain how the Input Tax Credit (ITC) mechanism eliminates the cascading effect of taxation.', 'What are the voting shares in the GST Council? (Center has 1/3rd, all States combined have 2/3rd, decision requires 3/4th majority)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Taxation', name: 'Basic taxation concepts',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Canons of Taxation & Assessment', tasks: ['Adam Smith\'s 4 Canons: Equality, Certainty, Convenience, Economy', 'Assessment Year (AY) vs Previous Year (FY), Tax Deducted at Source (TDS)'] }],
    notes: 'Adam Smith\'s 4 Canons of Taxation: Equity, Certainty, Convenience, Economy. Income earned in Previous Year is assessed in Assessment Year.',
    practiceQuestions: ['Name and explain Adam Smith\'s four Canons of Taxation.', 'What is the difference between Previous Year and Assessment Year under the Income Tax Act?']
  },

  // Auditing (8)
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Auditing', name: 'Introduction to auditing',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Definition & Independence', tasks: ['Independent examination of financial information to express an opinion', 'Auditor is a watchdog, not a bloodhound (Kingston Cotton Mills case 1896)'] }],
    notes: '"An auditor is a watchdog, but not a bloodhound" (Lopes L.J., Kingston Cotton Mills Co., 1896). An auditor verifies, does not assume crime.',
    practiceQuestions: ['Explain the landmark judicial principle: "An auditor is a watchdog, not a bloodhound."', 'What is the primary objective of an independent financial audit?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Auditing', name: 'Objectives of auditing',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Primary & Secondary Objectives', tasks: ['Primary: Expression of independent opinion on true and fair view of financial statements', 'Secondary: Detection and prevention of fraud (misappropriation) and error'] }],
    notes: 'The primary objective of an audit is to express an opinion on whether financial statements exhibit a "True and Fair View", NOT to guarantee zero fraud.',
    practiceQuestions: ['What is the primary objective of an audit versus secondary objectives?', 'What is the difference between fraud (intentional) and error (unintentional)?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Auditing', name: 'Types of audit',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 55,
    subtopics: [{ name: 'Classification of Audits', tasks: ['Statutory Audit (mandatory by law), Continuous Audit, Interim Audit, Final/Annual Audit', 'Cost Audit, Management Audit, Performance/Propriety Audit'] }],
    notes: 'Continuous audit is conducted throughout the accounting year at regular intervals; useful for large banking and financial enterprises.',
    practiceQuestions: ['What are the advantages and disadvantages of a Continuous Audit?', 'What is a Propriety Audit and how does it evaluate government expenditure?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Auditing', name: 'Audit principles',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Core Standards & Ethics', tasks: ['Integrity, Objectivity, Independence, Confidentiality, Due Professional Care, Documentation'] }],
    notes: 'Auditor independence is the cornerstone of the profession: the auditor must be free from any conflicting interest with client management.',
    practiceQuestions: ['Why is Auditor Independence considered the fundamental cornerstone of auditing?', 'What are the fundamental principles of professional ethics for an auditor according to ICAI?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Auditing', name: 'Internal audit',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Internal Control & Internal Check', tasks: ['Internal audit conducted by internal employees/appointees for management assistance', 'Differentiate Internal Audit vs Statutory External Audit'] }],
    notes: 'Internal audit is an appraisal activity established within an entity as a service to management. Statutory audit is required by law for shareholders.',
    practiceQuestions: ['Compare Internal Audit and External Statutory Audit across appointment, scope, and reporting.', 'What is an "Internal Check" system and how does it prevent employee fraud?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Auditing', name: 'External audit',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Independent Statutory Auditing', tasks: ['Appointment of statutory auditor by shareholders under Companies Act 2013 (Section 139)', 'Rights, duties, and liabilities of company auditors'] }],
    notes: 'Under Section 139 of the Companies Act 2013, the first auditor of a non-government company is appointed by the Board of Directors within 30 days.',
    practiceQuestions: ['How is the first auditor of a government company appointed? (By CAG within 60 days of registration)', 'What are the statutory rights of a company auditor under Section 143 of Companies Act 2013?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Auditing', name: 'Audit evidence',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Sufficient & Appropriate Evidence (SA 500)', tasks: ['Vouching (testing transaction authenticity with source documents: receipts, invoices)', 'Verification (confirming existence, ownership, valuation of assets and liabilities)'] }],
    notes: '"Vouching is the essence of auditing." Vouching verifies entries in books with vouchers; verification confirms physical existence of balance sheet assets.',
    practiceQuestions: ['Why is vouching called the "backbone of auditing"?', 'Distinguish between Vouching and Verification.']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Auditing', name: 'Audit reports',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 60,
    subtopics: [{ name: 'Types of Audit Opinions (SA 700/705)', tasks: ['Clean / Unqualified Report (fair view without reservations)', 'Qualified Report (fair view except for specific reservation)', 'Adverse Report (misstated and pervasive)', 'Disclaimer of Opinion (unable to obtain evidence)'] }],
    notes: 'Unqualified = Clean. Qualified = "Subject to". Adverse = Financial statements do NOT show a true and fair view. Disclaimer = Auditor cannot express opinion.',
    practiceQuestions: ['Explain the difference between an Adverse Audit Report and a Disclaimer of Opinion.', 'When is an auditor required to issue a Qualified Audit Report?']
  },

  // ==========================================
  // Part B: Economics and Governance (50 topics)
  // ==========================================
  // Microeconomics (7)
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Microeconomics', name: 'Demand',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Determinants & Demand Curve', tasks: ['Individual vs Market demand schedule', 'Movement along demand curve (change in quantity demanded due to price) vs Shift in demand curve (income, tastes)'] }],
    notes: 'Price change causes movement along the curve (expansion/contraction); non-price factors cause shifts (increase/decrease) of the curve.',
    practiceQuestions: ['Differentiate between a shift in the demand curve and a movement along the demand curve.', 'What are complementary goods and substitute goods? Give cross-elasticity relationships.']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Microeconomics', name: 'Supply',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Law of Supply & Cost Factors', tasks: ['Positive price-supply relationship', 'Shifts in supply curve due to technology, input costs, excise taxes'] }],
    notes: 'Law of supply states that ceteris paribus, price and quantity supplied have a direct, positive relationship.',
    practiceQuestions: ['State the Law of Supply and list two exceptions.', 'How does a government subsidy shift the supply curve?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Microeconomics', name: 'Market structures',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 60,
    subtopics: [{ name: 'Competition Paradigms', tasks: ['Perfect Competition (infinite buyers/sellers, homogeneous product, price taker P = MR = AR)', 'Monopoly (single seller, unique product, price maker, entry barriers)', 'Monopolistic Competition (differentiated products)', 'Oligopoly (few dominant firms, kinked demand curve)'] }],
    notes: 'In Perfect Competition, firm is a Price Taker with horizontal demand curve (AR = MR = P). In Oligopoly, Paul Sweezy\'s Kinked Demand Curve explains price rigidity.',
    practiceQuestions: ['Compare Perfect Competition with Monopoly across price, output, and long-run economic profits.', 'What is Paul Sweezy\'s Kinked Demand Curve hypothesis in an Oligopoly?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Microeconomics', name: 'Elasticity',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 55,
    subtopics: [{ name: 'Price, Income, & Cross Elasticity', tasks: ['Income elasticity: Normal goods (>0), Inferior goods (<0), Luxury goods (>1)', 'Cross elasticity: Substitutes (>0), Complements (<0)'] }],
    notes: 'Cross elasticity of demand for substitute goods (tea and coffee) is positive; for complementary goods (car and petrol) it is negative.',
    practiceQuestions: ['If cross elasticity between two goods is negative, what is their relationship? (Complements)', 'Calculate price elasticity of demand when price falls from Rs 10 to Rs 8 and demand increases from 50 to 65 units.']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Microeconomics', name: 'Production',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Production Functions', tasks: ['Short-run Law of Variable Proportions (Stage I: Increasing, Stage II: Diminishing returns - rational stage, Stage III: Negative returns)', 'Long-run Returns to Scale (Isoquants)'] }],
    notes: 'A rational producer always operates in Stage II of production (Diminishing Marginal Returns where MP > 0 and MP is falling).',
    practiceQuestions: ['In which stage of the Law of Variable Proportions does a rational producer operate and why? (Stage II)', 'What is the relationship between Total Product (TP) and Marginal Product (MP) when MP is zero? (TP is at maximum)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Microeconomics', name: 'Cost',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Short-Run and Long-Run Cost Curves', tasks: ['Fixed Cost, Variable Cost, Total Cost (TC = TFC + TVC)', 'U-shaped Average Cost (AC) and Marginal Cost (MC) curves; MC cuts AC at its lowest point'] }],
    notes: 'Marginal Cost (MC) curve always intersects Average Variable Cost (AVC) and Average Total Cost (ATC) curves at their minimum points.',
    practiceQuestions: ['Why are short-run average cost curves U-shaped? (Law of Variable Proportions)', 'Prove that the Marginal Cost curve intersects the Average Cost curve at its minimum point.']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Microeconomics', name: 'Revenue',
    importance: 'High', difficulty: 'Easy', estimatedMinutes: 40,
    subtopics: [{ name: 'Total, Average, & Marginal Revenue', tasks: ['TR = P * Q; AR = TR / Q = Price; MR = change in TR / change in Q', 'Relationship between AR, MR, and Elasticity: MR = AR * [1 - (1 / e)]'] }],
    notes: 'MR = AR * (1 - 1/e). When elasticity e = 1, MR = 0.',
    practiceQuestions: ['What is the value of Marginal Revenue (MR) when price elasticity of demand is unitary (e = 1)? (Zero)', 'Why does the Average Revenue (AR) curve always represent the firm\'s demand curve?']
  },

  // Indian Economy (10)
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Indian Economy', name: 'Economic development',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Growth vs Development Indices', tasks: ['Economic Growth (quantitative GDP expansion) vs Economic Development (qualitative standard of living)', 'Human Development Index (HDI - Life Expectancy, Education, GNI per capita)'] }],
    notes: 'HDI is published by UNDP based on 3 dimensions: Health (life expectancy), Education (mean & expected schooling), and Standard of Living (GNI per capita).',
    practiceQuestions: ['What are the three core dimensions evaluated by the Human Development Index (HDI)?', 'How does economic growth differ fundamentally from economic development?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Indian Economy', name: 'National income',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 60,
    subtopics: [{ name: 'Methods of Computing National Income', tasks: ['Product / Value Added Method (GVA)', 'Income Method (wages + rent + interest + profits)', 'Expenditure Method (C + I + G + (X - M))'] }],
    notes: 'National Income = Net National Product at Factor Cost (NNP_FC) = GNP_FC - Depreciation.',
    practiceQuestions: ['Explain the three methods used to calculate National Income in India.', 'What is the difference between GDP at Market Price and GDP at Factor Cost? (Net Indirect Taxes)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Indian Economy', name: 'GDP',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Real vs Nominal GDP', tasks: ['Nominal GDP (valued at current year prices)', 'Real GDP (valued at constant base year prices, adjusted for inflation)', 'GDP Deflator = (Nominal GDP / Real GDP) * 100'] }],
    notes: 'Real GDP reflects true physical output changes by stripping away inflation using base year prices (currently 2011-12 in India).',
    practiceQuestions: ['If Nominal GDP is Rs 1200 crore and Real GDP is Rs 1000 crore, calculate the GDP Deflator. (120)', 'Why is Real GDP preferred over Nominal GDP when comparing economic growth over time?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Indian Economy', name: 'Inflation',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Inflation Control & Monetary Policy', tasks: ['Stagflation (high inflation + high unemployment + stagnant economic growth)', 'Core Inflation (headline inflation minus volatile food and fuel prices)'] }],
    notes: 'Stagflation is an economic nightmare: stagnant growth combined with high inflation and unemployment.',
    practiceQuestions: ['What is Stagflation and why is it difficult for central banks to manage?', 'What is Core Inflation and why is it preferred by economists over Headline Inflation?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Indian Economy', name: 'Agriculture',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Agrarian Challenges & Reforms', tasks: ['MSP (Minimum Support Price - recommended by CACP based on A2+FL and C2 formulas)', 'Green Revolution (M.S. Swaminathan), PM Fasal Bima Yojana, e-NAM'] }],
    notes: 'CACP (Commission for Agricultural Costs and Prices) recommends MSP for 22 mandated crops and FRP for sugarcane.',
    practiceQuestions: ['Who was known as the Father of the Green Revolution in India? (Dr. M.S. Swaminathan)', 'Which agency recommends Minimum Support Prices (MSP) to the Government of India? (CACP)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Indian Economy', name: 'Industry',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Industrial Policies & MSMEs', tasks: ['Industrial Policy Resolutions (1948, 1956 - Mahalanobis model, 1991)', 'New MSME classification criteria based on Composite Investment & Turnover limits', 'Make in India & PLI Schemes'] }],
    notes: 'Micro: Investment <= 1 Cr, Turnover <= 5 Cr. Small: Inv <= 10 Cr, Turnover <= 50 Cr. Medium: Inv <= 50 Cr, Turnover <= 250 Cr.',
    practiceQuestions: ['What are the updated investment and turnover criteria for Micro, Small, and Medium Enterprises (MSMEs)?', 'What was the focus of the Industrial Policy Resolution 1956?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Indian Economy', name: 'Services sector',
    importance: 'Medium', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Engine of Indian Economic Growth', tasks: ['IT/ITeS, telecommunications, financial services, tourism, logistics', 'Contribution to foreign exchange earnings and service exports'] }],
    notes: 'India is the world\'s leading exporter of IT and business process management services.',
    practiceQuestions: ['What percentage of India\'s Gross Value Added (GVA) is contributed by the services sector? (~53-55%)', 'Why has India\'s economic structural transformation skipped direct expansion into manufacturing?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Indian Economy', name: 'Poverty',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Poverty Estimation Committees', tasks: ['Alagh Committee (1979 - calorie norms: 2400 rural, 2100 urban)', 'Lakdawala Committee (1993), Tendulkar Committee (2009 - per capita monthly consumption), Rangarajan Committee (2014)'] }],
    notes: 'Tendulkar Committee based poverty estimation on Per Capita Consumption Expenditure (Rs 27.2/day rural, Rs 33.3/day urban at 2011-12 prices).',
    practiceQuestions: ['Which committee recommended daily per capita calorie intake norms of 2400 kcal (rural) and 2100 kcal (urban)? (Y.K. Alagh Committee, 1979)', 'What methodology did the Suresh Tendulkar Committee propose for measuring poverty?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Indian Economy', name: 'Unemployment',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Unemployment Categories in India', tasks: ['Disguised (marginal productivity = 0)', 'Seasonal, Structural (mismatch between worker skills and market demand), Frictional, Cyclical'] }],
    notes: 'In Disguised Unemployment, marginal productivity of the surplus labor is zero.',
    practiceQuestions: ['What is the marginal productivity of labor in disguised unemployment? (Zero)', 'Explain the difference between structural unemployment and frictional unemployment.']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Indian Economy', name: 'Population',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Demographic Transition & 2011 Census', tasks: ['Demographic Dividend (high working-age population 15-59)', 'Census 2011 facts: Sex ratio 943, Literacy rate 74.04%, most populous state (UP), highest density (Bihar)'] }],
    notes: 'Census 2011: India\'s overall literacy rate was 74.04% (Males 82.14%, Females 65.46%). Sex ratio was 943 females per 1000 males.',
    practiceQuestions: ['What was the sex ratio and literacy rate of India according to Census 2011? (Sex ratio: 943, Literacy: 74.04%)', 'What is the "Demographic Dividend" and how can India capitalize on it?']
  },

  // Economic Reforms (4)
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Economic Reforms', name: 'Liberalization',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Dismantling the License Raj', tasks: ['Abolition of industrial licensing for all except hazardous/strategic sectors', 'Deregulation of interest rates and import tariff reductions'] }],
    notes: 'Liberalization in 1991 abolished industrial licensing for almost all sectors, removing bureaucratic "License-Quota-Permit Raj".',
    practiceQuestions: ['Which industries still require compulsory industrial licensing in India?', 'How did trade liberalization accelerate FDI inflows into India after 1991?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Economic Reforms', name: 'Privatization',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 40,
    subtopics: [{ name: 'Disinvestment & Strategic Sales', tasks: ['DIPAM (Department of Investment and Public Asset Management)', 'Strategic sale of public sector enterprises (e.g. Air India)'] }],
    notes: 'DIPAM under the Ministry of Finance manages government equity in Central Public Sector Enterprises (CPSEs).',
    practiceQuestions: ['What is the difference between minority disinvestment and strategic disinvestment of CPSEs?', 'Which department under the Ministry of Finance handles disinvestment? (DIPAM)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Economic Reforms', name: 'Globalization',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 40,
    subtopics: [{ name: 'Integration with Global Economy', tasks: ['Rupee convertibility on Current Account (1994)', 'Foreign Direct Investment (FDI) and Foreign Portfolio Investment (FPI) automatic routes'] }],
    notes: 'The Indian Rupee is fully convertible on the Current Account, but only partially convertible on the Capital Account.',
    practiceQuestions: ['Is the Indian Rupee fully convertible on both Current and Capital accounts?', 'What is the difference between Foreign Direct Investment (FDI) and Foreign Portfolio Investment (FPI)?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Economic Reforms', name: 'Economic reforms in India',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 55,
    subtopics: [{ name: '1991 Balance of Payments Crisis', tasks: ['Narasimha Rao-Manmohan Singh model of LPG reforms', 'Devaluation of Rupee, IMF structural adjustment, financial sector reforms (Narasimham Committee)'] }],
    notes: 'Narasimham Committee (1991 and 1998) formed the blueprint for modern banking reforms in India.',
    practiceQuestions: ['What were the key causes of India\'s 1991 Balance of Payments crisis?', 'What were the major recommendations of the Narasimham Committee on banking sector reforms?']
  },

  // Monetary and Fiscal Policy (8)
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Monetary and Fiscal Policy', name: 'Monetary policy',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 55,
    subtopics: [{ name: 'Monetary Policy Committee (MPC)', tasks: ['6-member MPC (3 from RBI, 3 appointed by Central Govt, RBI Governor has casting vote)', 'Inflation targeting framework (CPI 4% +/- 2%)'] }],
    notes: 'Monetary policy regulates money supply and interest rates to achieve price stability while supporting economic growth.',
    practiceQuestions: ['What is the composition of the Monetary Policy Committee (MPC) of India? (6 members)', 'What is the statutory inflation target assigned to the RBI under the amended RBI Act 1934? (4% +/- 2%)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Monetary and Fiscal Policy', name: 'Fiscal policy',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 55,
    subtopics: [{ name: 'Government Taxation & Borrowing', tasks: ['Expansionary vs Contractionary fiscal policy', 'FRBM Act 2003 (Fiscal Responsibility and Budget Management Act) deficit containment rules'] }],
    notes: 'Fiscal policy is managed by the Ministry of Finance through government expenditure and taxation.',
    practiceQuestions: ['How does expansionary fiscal policy stimulate an economy during a recession?', 'What are the main objectives of the FRBM Act 2003?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Monetary and Fiscal Policy', name: 'RBI',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 60,
    subtopics: [{ name: 'Central Bank Architecture', tasks: ['Established on 1 April 1935 under RBI Act 1934 (Hilton Young Commission)', 'Nationalized on 1 Jan 1949, functions as Banker to Govt and Lender of Last Resort'] }],
    notes: 'RBI was established on recommendation of the Royal Commission on Indian Currency and Finance (Hilton Young Commission).',
    practiceQuestions: ['On the recommendation of which commission was the Reserve Bank of India established? (Hilton Young Commission)', 'In which year was the Reserve Bank of India nationalized? (1 January 1949)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Monetary and Fiscal Policy', name: 'Interest rates',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Transmission Mechanisms', tasks: ['Repo Rate (lending to banks), Reverse Repo Rate (absorbing liquidity)', 'Marginal Standing Facility (MSF - overnight emergency liquidity against SLR)'] }],
    notes: 'MSF rate is always pegged higher than the Repo rate and provides emergency overnight funds to scheduled commercial banks.',
    practiceQuestions: ['What is the Marginal Standing Facility (MSF) and how does its rate compare to the Repo Rate?', 'Explain the transmission delay of monetary policy interest rate cuts into commercial bank loan rates.']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Monetary and Fiscal Policy', name: 'Money supply',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Monetary Aggregates (M0, M1, M2, M3, M4)', tasks: ['M1 (Narrow Money) = Currency with public + Demand deposits + Other deposits with RBI', 'M3 (Broad Money) = M1 + Time deposits with banking system'] }],
    notes: 'M1 is the most liquid monetary aggregate (Narrow Money); M3 is Broad Money and the standard measure of money supply in India.',
    practiceQuestions: ['Write the formula for M1 (Narrow Money) and M3 (Broad Money).', 'Which monetary aggregate is the most liquid? (M1)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Monetary and Fiscal Policy', name: 'Government expenditure',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Revenue vs Capital Expenditure', tasks: ['Revenue Expenditure (does not create assets: salaries, pensions, subsidies, interest payments)', 'Capital Expenditure (creates physical/financial assets: roads, railways, defense equipment)'] }],
    notes: 'Capital expenditure (Capex) has a high multiplier effect on economic growth; revenue expenditure maintains operational governance.',
    practiceQuestions: ['Distinguish between Revenue Expenditure and Capital Expenditure with 2 examples each.', 'Why does increasing Capital Expenditure generate a higher GDP multiplier than Revenue Expenditure?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Monetary and Fiscal Policy', name: 'Government revenue',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Revenue Receipts vs Capital Receipts', tasks: ['Revenue Receipts: Tax revenue (GST, Income Tax) + Non-tax revenue (dividends from PSUs, spectrum fees)', 'Capital Receipts: create liabilities or reduce assets (market borrowings, recovery of loans, disinvestment)'] }],
    notes: 'Borrowings by the government are Capital Receipts because they create a financial debt liability.',
    practiceQuestions: ['Why is the recovery of loans considered a Capital Receipt rather than a Revenue Receipt? (Reduces financial assets)', 'List three major sources of non-tax revenue for the Central Government.']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Monetary and Fiscal Policy', name: 'Budget',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 55,
    subtopics: [{ name: 'Annual Financial Statement (Article 112)', tasks: ['Consolidated Fund of India (Art 266(1)), Contingency Fund of India (Art 267 - Rs 30,000 Cr corpus)', 'Public Account of India (Art 266(2)), Guillotine and Appropriation Bill'] }],
    notes: 'The word "Budget" does not appear in the Indian Constitution: Article 112 refers to it as the "Annual Financial Statement".',
    practiceQuestions: ['What is the constitutional term for the Union Budget under Article 112? (Annual Financial Statement)', 'From which fund can money be withdrawn only after an Appropriation Act is passed by Parliament? (Consolidated Fund of India)']
  },

  // Public Finance (6)
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Public Finance', name: 'Public revenue',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Sources & Fiscal Federalism', tasks: ['Tax buoyancy (growth of tax revenue relative to GDP growth)', 'Tax devolution to states based on Finance Commission recommendations'] }],
    notes: 'Tax buoyancy measures the percentage change in tax revenue in response to a percentage change in GDP.',
    practiceQuestions: ['What does a tax buoyancy greater than 1 signify?', 'What share of central divisible tax pool was recommended for devolution to states by the 15th Finance Commission? (41%)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Public Finance', name: 'Public expenditure',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Wagner\'s Law & Wiseman-Peacock Hypothesis', tasks: ['Theories explaining secular rise in public expenditure as economies develop and during national crises'] }],
    notes: 'Wagner\'s Law of Increasing State Activity: as per capita income rises, government expenditure rises as a share of GDP.',
    practiceQuestions: ['State Wagner\'s Law of increasing state activities.', 'What is the Wiseman-Peacock hypothesis regarding public spending during crises (Displacement Effect)?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Public Finance', name: 'Public debt',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Internal vs External Debt & Debt-to-GDP', tasks: ['Internal debt (market loans, treasury bills) accounts for >95% of India\'s public debt', 'Debt sustainability and debt servicing burden'] }],
    notes: 'Over 95% of India\'s sovereign debt is denominated in domestic currency (INR) and held internally, mitigating currency risk.',
    practiceQuestions: ['Why is high domestic-currency sovereign debt less risky than foreign-denominated external debt?', 'What is the NK Singh Committee target for General Government Debt-to-GDP ratio? (60% - 40% Center, 20% States)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Public Finance', name: 'Budgeting',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 50,
    subtopics: [{ name: 'Budgetary Systems', tasks: ['Line-Item Budgeting, Performance Budgeting, Zero-Based Budgeting (ZBB: Peter Pyhrr, every item justified from zero)', 'Outcome Budgeting and Gender Budgeting'] }],
    notes: 'Zero-Based Budgeting (ZBB) assumes zero baseline every year: every expense must be justified afresh, eliminating legacy wastage.',
    practiceQuestions: ['What is Zero-Based Budgeting (ZBB) and how does it prevent incremental budget padding?', 'What is an Outcome Budget and how does it evaluate expenditure quality?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Public Finance', name: 'Financial management',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 55,
    subtopics: [{ name: 'Public Financial Management System (PFMS)', tasks: ['Real-time tracking of scheme funds from Treasury to end-beneficiary bank accounts (DBT)', 'Cash management and treasury single account (TSA)'] }],
    notes: 'PFMS eliminates intermediary fund parking by routing central scheme disbursements directly to beneficiaries via Direct Benefit Transfer (DBT).',
    practiceQuestions: ['What is the role of PFMS (Public Financial Management System) in tracking government expenditure?', 'How does the Treasury Single Account (TSA) system reduce government borrowing costs?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Public Finance', name: 'Capital budgeting',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 55,
    subtopics: [{ name: 'Investment Appraisal Methods', tasks: ['Net Present Value (NPV: discounted cash flows, accept if > 0)', 'Internal Rate of Return (IRR), Payback Period, Benefit-Cost Ratio (BCR)'] }],
    notes: 'NPV is the gold standard for capital budgeting: it discounts future cash flows at the cost of capital to reflect time value of money.',
    practiceQuestions: ['Why is Net Present Value (NPV) superior to the Payback Period method for capital appraisal?', 'Define the Internal Rate of Return (IRR).']
  },

  // Governance (7)
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Governance', name: 'CAG',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 60,
    subtopics: [{ name: 'Supreme Audit Institution (SAI India)', tasks: ['CAG audits accounts of Union, States, PSUs, and aided institutions (DPC Act 1971)', 'Three audit reports: Appropriation Accounts, Finance Accounts, Commercial PSUs', 'Auditing standards and independence safeguards'] }],
    notes: 'The CAG submits audit reports relating to the Union to the President, who causes them to be laid before each House of Parliament (Article 151). The core role of an AAO!',
    practiceQuestions: ['What are the three statutory audit reports submitted by the CAG to Parliament under Article 151?', 'What duties are assigned to the CAG under the CAG (Duties, Powers and Conditions of Service) Act 1971?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Governance', name: 'Finance Commission',
    importance: 'High', difficulty: 'Hard', estimatedMinutes: 50,
    subtopics: [{ name: 'Constitutional Revenue Distribution (Art 280)', tasks: ['Vertical devolution (Center to States) vs Horizontal devolution (criteria among States: Income distance, Population, Area, Forest cover, Tax effort)', '15th Finance Commission recommendations (headed by N.K. Singh)'] }],
    notes: 'The 15th Finance Commission used 2011 Census population data (15% weight) and Income Distance (45% weight) for horizontal tax devolution.',
    practiceQuestions: ['What criteria are used by the 15th Finance Commission for horizontal tax devolution among states?', 'What is the constitutional mandate of the Finance Commission under Article 280?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Governance', name: 'RBI',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Regulatory Governance & Supervision', tasks: ['Department of Banking Supervision, prompt corrective action (PCA) framework for distressed banks', 'Payment and settlement systems regulation (NPCI, UPI, RTGS, NEFT)'] }],
    notes: 'RBI places commercial banks under Prompt Corrective Action (PCA) when capital adequacy, asset quality (NPA), or leverage breach safe thresholds.',
    practiceQuestions: ['What are the trigger parameters for placing a bank under Prompt Corrective Action (PCA)?', 'What is the legal mandate of the Board for Financial Supervision (BFS) in RBI?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Governance', name: 'SEBI',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Securities and Exchange Board of India', tasks: ['Established 1988, given statutory powers by SEBI Act 1992', 'Regulates stock exchanges (NSE, BSE), mutual funds, insider trading prevention, and IPO listing norms'] }],
    notes: 'SEBI protects the interests of investors in securities and promotes the development of securities markets.',
    practiceQuestions: ['In which year did SEBI receive statutory status through the SEBI Act? (1992)', 'What regulatory powers does SEBI possess to investigate and penalize insider trading?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Governance', name: 'IRDA',
    importance: 'Medium', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Insurance Regulatory and Development Authority', tasks: ['Established under IRDA Act 1999 on recommendation of Malhotra Committee', 'Headquarters in Hyderabad, protects insurance policyholders and regulates life/general insurers'] }],
    notes: 'IRDAI headquarters is in Hyderabad. It was created following the Malhotra Committee recommendations.',
    practiceQuestions: ['On the recommendation of which committee was the IRDA established? (RN Malhotra Committee)', 'Where is the headquarters of IRDAI situated? (Hyderabad, Telangana)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Governance', name: 'Government institutions',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Central Transparency & Regulatory Bodies', tasks: ['CVC (Central Vigilance Commission - Santhanam Committee)', 'CBI, Lokpal & Lokayuktas, Competition Commission of India (CCI)'] }],
    notes: 'Central Vigilance Commission was established in 1964 on recommendation of the K. Santhanam Committee on Prevention of Corruption.',
    practiceQuestions: ['Which committee recommended the creation of the Central Vigilance Commission (CVC)? (K. Santhanam Committee)', 'What is the role of the Competition Commission of India (CCI)?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Governance', name: 'Financial regulations',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 50,
    subtopics: [{ name: 'Statutory Financial Compliance', tasks: ['Insolvency and Bankruptcy Code (IBC 2016)', 'Prevention of Money Laundering Act (PMLA 2002)', 'Fugitive Economic Offenders Act 2018', 'SARFAESI Act 2002'] }],
    notes: 'IBC 2016 introduced time-bound resolution for corporate insolvency (180 days + 90 days extension).',
    practiceQuestions: ['What is the primary objective of the Insolvency and Bankruptcy Code (IBC) 2016?', 'What power does the SARFAESI Act 2002 give to banks regarding non-performing asset (NPA) collateral?']
  },

  // Economic and Social Issues (8)
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Economic and Social Issues', name: 'Poverty',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Multidimensional Poverty Index (MPI)', tasks: ['NITI Aayog National MPI based on Oxford OPHI methodology (12 indicators across Health, Education, Standard of Living)', 'Targeted anti-poverty programs'] }],
    notes: 'National MPI reflects multidimensional deprivations beyond income alone, measuring nutrition, child mortality, cooking fuel, sanitation, drinking water, housing, assets, bank accounts.',
    practiceQuestions: ['What are the three broad dimensions of NITI Aayog\'s Multidimensional Poverty Index (MPI)?', 'How has targeted DBT assistance contributed to poverty reduction according to recent surveys?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Economic and Social Issues', name: 'Unemployment',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Periodic Labour Force Survey (PLFS)', tasks: ['NSSO/NSO PLFS metrics: Worker Population Ratio (WPR), Labour Force Participation Rate (LFPR), Usual Status vs Current Weekly Status'] }],
    notes: 'LFPR is the percentage of persons in the labor force (working or actively seeking work) in the total population.',
    practiceQuestions: ['Define Labour Force Participation Rate (LFPR) and Worker Population Ratio (WPR).', 'Which agency conducts the Periodic Labour Force Survey (PLFS) in India? (National Sample Survey Office / NSO)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Economic and Social Issues', name: 'Education',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'National Education Policy (NEP 2020)', tasks: ['5+3+3+4 school curricular structure replacing 10+2 system', 'Gross Enrolment Ratio (GER) targets, Right to Education Act 2009 (Article 21A)'] }],
    notes: 'NEP 2020 replaced the 10+2 structure with a 5+3+3+4 framework and targets 50% Gross Enrollment Ratio in higher education by 2035.',
    practiceQuestions: ['Explain the 5+3+3+4 pedagogical structure introduced by the National Education Policy 2020.', 'Under which Article of the Constitution was the Right to Education declared a Fundamental Right? (Article 21A)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Economic and Social Issues', name: 'Health',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Public Healthcare Architecture', tasks: ['National Health Policy 2017 target (raise public health spending to 2.5% of GDP)', 'Ayushman Bharat PM-JAY and Health & Wellness Centers, Maternal Mortality Ratio (MMR) and Infant Mortality Rate (IMR)'] }],
    notes: 'Ayushman Bharat provides health insurance cover of Rs 5 lakh per family per year for secondary and tertiary care hospitalization.',
    practiceQuestions: ['What is the target public health spending as a percentage of GDP under the National Health Policy 2017? (2.5% of GDP)', 'Define Infant Mortality Rate (IMR) and Maternal Mortality Ratio (MMR).']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Economic and Social Issues', name: 'Population',
    importance: 'Medium', difficulty: 'Easy', estimatedMinutes: 35,
    subtopics: [{ name: 'Fertility Rates & Demographics', tasks: ['Total Fertility Rate (TFR) in India has reached 2.0 (below replacement level 2.1) according to NFHS-5', 'Urbanization trends and migration patterns'] }],
    notes: 'According to NFHS-5, India\'s Total Fertility Rate (TFR) fell to 2.0, below the replacement level of 2.1.',
    practiceQuestions: ['What is the replacement level fertility rate? (2.1 births per woman)', 'What did the National Family Health Survey (NFHS-5) reveal regarding India\'s Total Fertility Rate?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Economic and Social Issues', name: 'Social development',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Inclusion & Empowerment Programs', tasks: ['Gender parity indices, tribal welfare, empowerment of persons with disabilities (Divyangjan)', 'Financial inclusion (PM Jan Dhan Yojana, Pradhan Mantri Mudra Yojana)'] }],
    notes: 'PMJDY achieved universal banking access with over 50 crore accounts, driving financial inclusion.',
    practiceQuestions: ['What are the three loan categories under Pradhan Mantri Mudra Yojana? (Shishu up to 50k, Kishore up to 5L, Tarun up to 10L)', 'How does financial inclusion empower marginalized communities?']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Economic and Social Issues', name: 'Welfare schemes',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Social Safety Nets', tasks: ['MGNREGA (guarantees 100 days of wage employment in rural areas)', 'National Food Security Act (NFSA 2013), PM Garib Kalyan Anna Yojana, Atal Pension Yojana'] }],
    notes: 'MGNREGA guarantees at least 100 days of wage employment in a financial year to every rural household whose adult members volunteer for unskilled manual work.',
    practiceQuestions: ['What are the legal entitlements guaranteed under the MGNREGA 2005 Act?', 'What coverage is mandated under the National Food Security Act (NFSA) 2013? (75% rural and 50% urban population)']
  },
  {
    subjectId: 'sub_ssc_tier2_p3', subjectName: 'SSC CGL Tier 2 — Paper 3 (AAO Finance & Economics)',
    module: 'Tier 2 P3: Economic and Social Issues', name: 'Economic indicators',
    importance: 'High', difficulty: 'Medium', estimatedMinutes: 45,
    subtopics: [{ name: 'Measuring Inequality & Performance', tasks: ['Gini Coefficient and Lorenz Curve (measuring income inequality from 0 to 1)', 'Ease of Doing Business, Global Innovation Index, Purchasing Power Parity (PPP)'] }],
    notes: 'Gini coefficient ranges from 0 (perfect equality) to 1 (perfect inequality). A larger Lorenz curve deviation indicates higher inequality.',
    practiceQuestions: ['Explain the Lorenz Curve and how the Gini Coefficient is derived from it.', 'What is Purchasing Power Parity (PPP) and where does India rank globally in GDP (PPP)? (3rd in the world)']
  }
];

export const INITIAL_SSC_TOPICS: Topic[] = SSC_MODULES_RAW.map((raw, index) => {
  const seq = index + 1;
  const id = `ssc_topic_${seq}`;
  return {
    id,
    learningAreaId: 'la_ssccgl',
    learningAreaName: 'SSC CGL — AAO Exam Preparation',
    subjectId: raw.subjectId,
    subjectName: raw.subjectName,
    module: raw.module,
    name: raw.name,
    sequenceNumber: seq,
    importance: raw.importance,
    difficulty: raw.difficulty,
    estimatedMinutes: raw.estimatedMinutes,
    status: 'Not Started',
    sscCategory: getSscCategory(raw.module),
    examTier: getExamTier(raw.module),
    postponeCount: 0,
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
