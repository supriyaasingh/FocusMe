import { Topic } from '../types/syllabus.ts';

interface PmTopicMeta {
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

const PM_MODULES_RAW: PmTopicMeta[] = [
  // Course 1: Foundations of Project Management (11 topics)
  {
    module: 'Course 1: Foundations of Project Management',
    name: 'What is project management?',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Core Definition & Value', tasks: ['Define project as temporary endeavor with unique goal', 'Understand the business value of disciplined PM practices'] }
    ],
    notes: 'A project is a temporary endeavor undertaken to create a unique product, service, or result with defined beginning and end.',
    practiceQuestions: ['How does project management deliver measurable ROI to an organization?', 'What are the triple constraints of project management (Iron Triangle)?']
  },
  {
    module: 'Course 1: Foundations of Project Management',
    name: 'Project vs operations',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Distinguishing Characteristics', tasks: ['Compare temporary unique deliverables vs repetitive ongoing operations', 'Identify transition of project deliverables into steady-state operations'] }
    ],
    notes: 'Projects create change and have fixed timelines; operations maintain business-as-usual with ongoing, repetitive processes.',
    practiceQuestions: ['Give two examples of organizational activities: one project and one operational.', 'How does a project manager successfully hand over deliverables to operations?']
  },
  {
    module: 'Course 1: Foundations of Project Management',
    name: 'Project lifecycle',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Lifecycle Progression', tasks: ['Trace Initiation, Planning, Execution, and Closing', 'Map cost, staffing, and risk curves across lifecycle stages'] }
    ],
    notes: 'Risk and uncertainty are highest at project initiation; cost of making changes rises exponentially toward closing.',
    practiceQuestions: ['Why does the cost of making project changes increase over the project lifecycle?', 'At which lifecycle phase is stakeholder influence at its peak?']
  },
  {
    module: 'Course 1: Foundations of Project Management',
    name: 'Project phases',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Phase Gate Reviews', tasks: ['Define phase gate deliverables and governance sign-offs', 'Establish go/no-go exit criteria for each phase'] }
    ],
    notes: 'Phase gates (kill points) ensure projects meet quality criteria and strategic alignment before capital is committed to the next phase.',
    practiceQuestions: ['What is the purpose of a Phase Gate review?', 'What happens if a project fails to satisfy phase exit criteria?']
  },
  {
    module: 'Course 1: Foundations of Project Management',
    name: 'Project manager responsibilities',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'PM Roles & Capabilities', tasks: ['Analyze planning, managing tasks, budgeting, and controlling scope', 'Examine cross-functional leadership without direct authority'] }
    ],
    notes: 'Project managers lead through influence rather than hierarchical authority, bridging business goals with technical execution.',
    practiceQuestions: ['How does a project manager influence team members when lacking formal direct reporting authority?', 'What are the top three responsibilities of a Google Project Manager?']
  },
  {
    module: 'Course 1: Foundations of Project Management',
    name: 'Project management methodologies',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Methodology Frameworks', tasks: ['Review Waterfall, Agile, Scrum, Kanban, Lean, Six Sigma', 'Select methodology matching project certainty and volatility'] }
    ],
    notes: 'Choose Waterfall when requirements are fixed and regulatory; choose Agile when requirements evolve through customer feedback.',
    practiceQuestions: ['What criteria dictate choosing an Agile methodology over a Waterfall approach?', 'What is a Hybrid project methodology?']
  },
  {
    module: 'Course 1: Foundations of Project Management',
    name: 'Traditional and Agile approaches',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Linear vs Iterative Delivery', tasks: ['Compare upfront sequential planning vs continuous iterative sprints', 'Analyze change resistance in Waterfall vs change embracing in Agile'] }
    ],
    notes: 'Traditional (Waterfall) prioritizes upfront plan compliance; Agile prioritizes continuous value delivery and adaptive response.',
    practiceQuestions: ['How does feedback loop velocity differ between Traditional and Agile projects?', 'What is the iron triangle comparison between Waterfall (fixed scope) and Agile (fixed time/cost)?']
  },
  {
    module: 'Course 1: Foundations of Project Management',
    name: 'Organizational structures',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Matrix, Functional, & Projectized', tasks: ['Compare Functional, Weak Matrix, Balanced Matrix, Strong Matrix, Project-Oriented', 'Analyze PM authority level across organizational structures'] }
    ],
    notes: 'In a Functional structure, PM authority is minimal (expediter); in a Projectized structure, PM has total authority over resources.',
    practiceQuestions: ['In which organizational structure does the project manager hold the highest level of authority?', 'What is dual reporting in a Matrix organization and how can conflicts be mitigated?']
  },
  {
    module: 'Course 1: Foundations of Project Management',
    name: 'Project stakeholders',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Internal & External Stakeholders', tasks: ['Identify project sponsors, core team, steering committee, clients, end users', 'Determine stakeholder motivations and impact vectors'] }
    ],
    notes: 'A stakeholder is anyone who can affect or is affected by the outcome of the project. The Project Sponsor provides funding and executive backing.',
    practiceQuestions: ['What is the primary role of the Project Sponsor?', 'How do internal stakeholders differ from external stakeholders in terms of communication needs?']
  },
  {
    module: 'Course 1: Foundations of Project Management',
    name: 'Leadership and communication',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Communication Cadence & Soft Skills', tasks: ['Build transparent status reporting channels', 'Practice active listening, negotiation, and empathetic problem-solving'] }
    ],
    notes: 'Over 80-90% of a project manager\'s daily time is spent communicating with stakeholders and team members.',
    practiceQuestions: ['What communication channel is best for resolving contentious project disputes?', 'How does servant leadership empower high-performing delivery teams?']
  },
  {
    module: 'Course 1: Foundations of Project Management',
    name: 'Project success criteria',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Measuring Outcome Quality', tasks: ['Define on-time, on-budget, on-scope metrics', 'Measure business impact (adoption, customer satisfaction, ROI, OKRs)'] }
    ],
    notes: 'Delivering on time and budget is meaningless if the product does not generate intended business value or meet customer expectations.',
    practiceQuestions: ['Can a project be on-time, on-budget, yet still considered a failure? Explain with an example.', 'How are OKRs (Objectives and Key Results) used to define project success?']
  },

  // Course 2: Project Initiation (11 topics)
  {
    module: 'Course 2: Project Initiation',
    name: 'Project initiation',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Initiation Stage Deliverables', tasks: ['Establish project vision and business case justification', 'Obtain formal authorization to begin planning'] }
    ],
    notes: 'Initiation confirms that a project solves a genuine problem, aligns with organizational strategy, and warrants resource investment.',
    practiceQuestions: ['What is the key purpose of the Initiation phase?', 'What components belong in a project business case?']
  },
  {
    module: 'Course 2: Project Initiation',
    name: 'Defining project goals',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Clear Objective Articulation', tasks: ['Draft concise, inspiring project goal statements', 'Align project goals with organizational OKRs and quarterly targets'] }
    ],
    notes: 'Unambiguous goals prevent scope creep and align diverse cross-functional teams toward a single unified objective.',
    practiceQuestions: ['How do you prevent ambiguity when writing project goals?', 'What is the connection between project goals and company strategic objectives?']
  },
  {
    module: 'Course 2: Project Initiation',
    name: 'SMART goals',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'SMART Criteria Framework', tasks: ['Audit goals for Specific, Measurable, Achievable, Relevant, Time-bound criteria', 'Transform vague requests into measurable SMART commitments'] }
    ],
    notes: 'SMART goals replace vague desires ("improve website") with quantifiable contracts ("reduce checkout bounce rate by 15% by Q3").',
    practiceQuestions: ['Rewrite "build a better customer onboarding" into a rigorous SMART goal.', 'Why is the "Measurable" component critical for project evaluation?']
  },
  {
    module: 'Course 2: Project Initiation',
    name: 'Scope and deliverables',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Scope Boundaries & Deliverables', tasks: ['Define in-scope vs out-of-scope boundaries explicitly', 'Document tangible deliverables and acceptance criteria'] }
    ],
    notes: 'Clearly documenting what is OUT of scope is just as important as defining what is IN scope to prevent scope creep.',
    practiceQuestions: ['What is scope creep and what are its primary root causes?', 'How do acceptance criteria validate that a deliverable is complete?']
  },
  {
    module: 'Course 2: Project Initiation',
    name: 'Stakeholder identification',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Stakeholder Discovery', tasks: ['Compile comprehensive stakeholder register', 'Identify primary users, decision makers, regulators, and affected teams'] }
    ],
    notes: 'A missed stakeholder during initiation will inevitably introduce disruptive requirements late in the execution phase.',
    practiceQuestions: ['What strategies do you use to uncover overlooked stakeholders during project initiation?', 'What information belongs in a Stakeholder Register?']
  },
  {
    module: 'Course 2: Project Initiation',
    name: 'Stakeholder analysis',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Power/Interest Grid Mapping', tasks: ['Map stakeholders onto 2x2 Power vs Interest grid', 'Define engagement strategies: Manage Closely, Keep Satisfied, Keep Informed, Monitor'] }
    ],
    notes: 'High Power / High Interest stakeholders must be managed closely with regular steering engagement and personalized communication.',
    practiceQuestions: ['Diagram the Power/Interest Grid and explain how to engage stakeholders in each quadrant.', 'How should you manage a high-power, low-interest stakeholder?']
  },
  {
    module: 'Course 2: Project Initiation',
    name: 'Project charter',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'The Foundational Agreement', tasks: ['Draft project charter: summary, scope, deliverables, budget, milestones, sponsor sign-off', 'Formally establish PM authority to expend company resources'] }
    ],
    notes: 'The Project Charter is the foundational contract formally authorizing the project. Without an approved charter, the project has not officially started.',
    practiceQuestions: ['What are the essential sections of a comprehensive Project Charter?', 'Who signs the Project Charter to grant formal authority to the Project Manager?']
  },
  {
    module: 'Course 2: Project Initiation',
    name: 'Project benefits',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Tangible & Intangible ROI', tasks: ['Quantify financial cost savings and revenue gains', 'Document intangible benefits (brand reputation, compliance, employee morale)'] }
    ],
    notes: 'Projects must have a positive Net Present Value (NPV) or strategic necessity to justify capital expenditure.',
    practiceQuestions: ['Distinguish between tangible and intangible project benefits.', 'What is a Cost-Benefit Analysis (CBA)?']
  },
  {
    module: 'Course 2: Project Initiation',
    name: 'Project requirements',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Requirements Elicitation', tasks: ['Gather functional vs non-functional requirements', 'Document requirements in a Requirements Traceability Matrix (RTM)'] }
    ],
    notes: 'Functional requirements describe what the system does; non-functional requirements describe how it performs (security, scalability, latency).',
    practiceQuestions: ['What is the difference between functional and non-functional requirements?', 'How does a Requirements Traceability Matrix prevent orphaned deliverables?']
  },
  {
    module: 'Course 2: Project Initiation',
    name: 'Project kickoff meetings',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Aligning Team & Expectations', tasks: ['Structure effective kickoff agenda (goals, roles, milestones, Q&A)', 'Establish team culture, collaboration norms, and communication channels'] }
    ],
    notes: 'The kickoff meeting sets the psychological safety, clarity of vision, and operating rhythm for the entire project team.',
    practiceQuestions: ['What are the crucial agenda items for a successful project kickoff meeting?', 'Who should attend the project kickoff?']
  },
  {
    module: 'Course 2: Project Initiation',
    name: 'RACI charts',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Role & Responsibility Matrix', tasks: ['Map Responsible, Accountable, Consulted, Informed across deliverables', 'Enforce golden rule: exactly ONE Accountable (A) per deliverable'] }
    ],
    notes: 'If everyone is accountable, no one is accountable. Every task must have exactly ONE "A" (Accountable).',
    practiceQuestions: ['What does RACI stand for?', 'Why must there be only one Accountable person per activity in a RACI chart?']
  },

  // Course 3: Project Planning (16 topics)
  {
    module: 'Course 3: Project Planning',
    name: 'Planning fundamentals',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'The Planning Horizon', tasks: ['Define scope, schedule, budget, risk, and communication plans', 'Understand iterative progressive elaboration'] }
    ],
    notes: 'Planning is iterative. Progressive elaboration means detailing near-term tasks while maintaining high-level estimates for distant milestones.',
    practiceQuestions: ['What is progressive elaboration (rolling wave planning)?', 'Why is planning considered the most labor-intensive phase of traditional project management?']
  },
  {
    module: 'Course 3: Project Planning',
    name: 'Work breakdown structure',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Hierarchical Decomposition', tasks: ['Decompose project deliverables down to work packages', 'Apply the 100% Rule: WBS includes 100% of project scope and zero out-of-scope work'] }
    ],
    notes: 'A WBS is deliverable-oriented, not task-oriented. The lowest level of the WBS is the Work Package.',
    practiceQuestions: ['What is the 100% Rule in WBS construction?', 'What is the difference between a work package and an activity?']
  },
  {
    module: 'Course 3: Project Planning',
    name: 'Tasks and milestones',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Milestone Definition', tasks: ['Identify zero-duration milestone achievements', 'Break down work packages into actionable, assigned tasks'] }
    ],
    notes: 'A milestone has zero duration and marks a significant achievement or decision point (e.g., "Design Approved").',
    practiceQuestions: ['What is the difference between a task and a milestone?', 'Give three examples of meaningful milestones in a software launch.']
  },
  {
    module: 'Course 3: Project Planning',
    name: 'Task dependencies',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Precedence Diagramming (PDM)', tasks: ['Identify Finish-to-Start (FS), Start-to-Start (SS), Finish-to-Finish (FF), Start-to-Finish (SF)', 'Manage lead time and lag time'] }
    ],
    notes: 'Finish-to-Start (FS) is the most common dependency: Task B cannot begin until Task A completes.',
    practiceQuestions: ['Explain the four types of task dependencies with real-world examples.', 'What is the difference between lead time and lag time?']
  },
  {
    module: 'Course 3: Project Planning',
    name: 'Project schedules',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'Critical Path Method (CPM)', tasks: ['Calculate Early Start, Early Finish, Late Start, Late Finish', 'Identify the Critical Path: sequence of dependent tasks with zero float'] }
    ],
    notes: 'Any delay to a task on the Critical Path will delay the entire project completion date by the exact same duration.',
    practiceQuestions: ['Define the Critical Path and total float (slack).', 'How do you calculate the critical path through forward and backward passes?']
  },
  {
    module: 'Course 3: Project Planning',
    name: 'Gantt charts',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Visual Schedule Tracking', tasks: ['Read and build bar-chart timelines displaying duration, dependencies, milestones', 'Use Gantt charts for executive status communication'] }
    ],
    notes: 'Gantt charts visualize timelines, task overlap, dependencies, and progress against baseline schedule.',
    practiceQuestions: ['What are the advantages and limitations of a Gantt chart?', 'How does a schedule baseline differ from the active Gantt chart?']
  },
  {
    module: 'Course 3: Project Planning',
    name: 'Time estimation',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Estimation Techniques', tasks: ['Apply Analogous, Parametric, Bottom-up, and Three-Point (PERT) estimation', 'Calculate PERT Expected Time: (O + 4M + P) / 6'] }
    ],
    notes: 'PERT uses weighted average: (Optimistic + 4*Most Likely + Pessimistic) / 6 to account for estimation uncertainty.',
    practiceQuestions: ['Calculate PERT expected duration when O=4 days, M=7 days, P=16 days.', 'Compare analogous estimation with bottom-up estimation for speed vs accuracy.']
  },
  {
    module: 'Course 3: Project Planning',
    name: 'Resource planning',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Resource Allocation & Leveling', tasks: ['Forecast human capital, equipment, and facility requirements', 'Apply resource leveling to resolve over-allocated team members'] }
    ],
    notes: 'Resource leveling smooths demand by shifting non-critical tasks within their float to prevent team burnout.',
    practiceQuestions: ['What is the difference between resource leveling and resource smoothing?', 'How do you identify that a team member is over-allocated?']
  },
  {
    module: 'Course 3: Project Planning',
    name: 'Budget planning',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Cost Categorization', tasks: ['Account for direct costs (labor, software) vs indirect costs (overhead)', 'Establish contingency reserves (known unknowns) and management reserves (unknown unknowns)'] }
    ],
    notes: 'Contingency reserves are managed by the PM for identified risks; management reserves require sponsor approval.',
    practiceQuestions: ['What is the difference between contingency reserves and management reserves?', 'How do you calculate a cost baseline?']
  },
  {
    module: 'Course 3: Project Planning',
    name: 'Cost estimation',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Cost Rollup & S-Curve', tasks: ['Aggregate activity cost estimates into work packages', 'Plot planned cumulative expenditure over time (Cost S-Curve)'] }
    ],
    notes: 'The S-curve illustrates that spending starts slowly, accelerates during execution, and tapers off during closing.',
    practiceQuestions: ['Why does project spending typically follow an S-curve shape over time?', 'What factors should be included when estimating team hourly labor rates?']
  },
  {
    module: 'Course 3: Project Planning',
    name: 'Risk identification',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Brainstorming & Risk Registers', tasks: ['Run risk discovery workshops with team and stakeholders', 'Document risks in Risk Register with trigger events and root causes'] }
    ],
    notes: 'A risk is an uncertain event that, if it occurs, has a positive or negative impact on project objectives.',
    practiceQuestions: ['What is the difference between a risk and an issue?', 'How do you encourage psychological safety during risk brainstorming sessions?']
  },
  {
    module: 'Course 3: Project Planning',
    name: 'Risk assessment',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Qualitative & Quantitative Scoring', tasks: ['Score Probability (1-5) and Impact (1-5) to calculate Risk Score', 'Rank risks on Risk Matrix (Heatmap) to prioritize mitigation focus'] }
    ],
    notes: 'Risk Score = Probability x Impact. High-probability/high-impact risks require immediate active mitigation plans.',
    practiceQuestions: ['Explain how a 5x5 Probability-Impact matrix categorizes risks.', 'What is Expected Monetary Value (EMV) in quantitative risk analysis?']
  },
  {
    module: 'Course 3: Project Planning',
    name: 'Risk mitigation',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'The Four Risk Response Strategies', tasks: ['Apply Avoidance, Mitigation, Transfer (insurance/contracts), Acceptance', 'Assign dedicated Risk Owner for each prioritized risk'] }
    ],
    notes: 'Every active risk must have an assigned Risk Owner responsible for monitoring triggers and executing response plans.',
    practiceQuestions: ['Give real-world examples for each of the four negative risk responses: Avoid, Mitigate, Transfer, Accept.', 'What is a secondary risk?']
  },
  {
    module: 'Course 3: Project Planning',
    name: 'Quality planning',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Quality Standards & Metrics', tasks: ['Define quality acceptance criteria and tolerances', 'Differentiate Quality Assurance (QA: process) vs Quality Control (QC: product)'] }
    ],
    notes: 'Quality Assurance (QA) focuses on preventing defects in the process; Quality Control (QC) focuses on inspecting deliverables for defects.',
    practiceQuestions: ['Compare Quality Assurance with Quality Control.', 'What is the Cost of Quality (CoQ) and why is prevention cheaper than remediation?']
  },
  {
    module: 'Course 3: Project Planning',
    name: 'Communication planning',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Communication Management Plan', tasks: ['Define who needs what information, when, in what format, and via what channel', 'Establish feedback loops and escalation pathways'] }
    ],
    notes: 'A communication matrix prevents under-communication with executives and notification fatigue among delivery teams.',
    practiceQuestions: ['What key columns belong in a Communications Plan matrix?', 'How do you calculate communication channels in a team of N members (N*(N-1)/2)?']
  },
  {
    module: 'Course 3: Project Planning',
    name: 'Change management',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Change Control Board (CCB)', tasks: ['Establish formal Change Request submission workflow', 'Evaluate impact on scope, schedule, budget before CCB approval'] }
    ],
    notes: 'No change to baseline scope, budget, or schedule can proceed without formal evaluation and approved Change Request.',
    practiceQuestions: ['Walk through the steps of a formal Change Control process from request to implementation.', 'What is the role of the Change Control Board (CCB)?']
  },

  // Course 4: Project Execution (14 topics)
  {
    module: 'Course 4: Project Execution',
    name: 'Project execution',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Executing the Plan', tasks: ['Coordinate people and resources to build deliverables', 'Manage stakeholder expectations and maintain delivery momentum'] }
    ],
    notes: 'Execution is typically where the largest portion of project budget is consumed and actual deliverables are produced.',
    practiceQuestions: ['What are the primary challenges a project manager faces transitioning from planning to execution?', 'How does a PM maintain team focus during prolonged execution phases?']
  },
  {
    module: 'Course 4: Project Execution',
    name: 'Team management',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Tuckman Team Development Stages', tasks: ['Guide team through Forming, Storming, Norming, Performing, Adjourning', 'Adapt leadership style from directing to coaching to delegating'] }
    ],
    notes: 'Storming is normal and necessary: high-performing teams navigate conflict with transparent rules and mutual respect.',
    practiceQuestions: ['Explain the 5 stages of Tuckman\'s group development model.', 'How does a PM\'s leadership style change between Forming and Performing?']
  },
  {
    module: 'Course 4: Project Execution',
    name: 'Team collaboration',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Psychological Safety & Norms', tasks: ['Establish Google "Project Aristotle" psychological safety norms', 'Promote open peer feedback and blameless postmortems'] }
    ],
    notes: 'Google\'s Project Aristotle proved that psychological safety—not individual skill—is the single greatest predictor of team success.',
    practiceQuestions: ['What did Google\'s Project Aristotle discover about effective teams?', 'How do you foster psychological safety in a distributed project team?']
  },
  {
    module: 'Course 4: Project Execution',
    name: 'Stakeholder communication',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Managing Executive Expectations', tasks: ['Deliver transparent bad news early ("no surprises" rule)', 'Tailor communication depth: high-level for executives, granular for engineering'] }
    ],
    notes: 'Bad news does not age well. Communicate schedule slips or risks immediately along with proposed remediation options.',
    practiceQuestions: ['How should a project manager break bad news about a milestone delay to an executive sponsor?', 'What is the "no surprises" rule in project communication?']
  },
  {
    module: 'Course 4: Project Execution',
    name: 'Meeting management',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'High-Impact Meetings', tasks: ['Always publish clear agenda in advance with designated decision makers', 'Send concise action items with owners and deadlines within 24 hours'] }
    ],
    notes: 'If a meeting has no agenda and no designated decision outcome, cancel it or convert to an asynchronous document.',
    practiceQuestions: ['What are three best practices for running high-efficiency meetings?', 'How do you handle chronic talkers or off-topic tangents in meetings?']
  },
  {
    module: 'Course 4: Project Execution',
    name: 'Conflict resolution',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Thomas-Kilmann Conflict Modes', tasks: ['Apply Collaborating (win-win), Compromising, Accommodating, Forcing, Avoiding', 'Focus on the problem rather than the person'] }
    ],
    notes: 'Collaborating (problem solving) produces the most sustainable, win-win outcome by addressing underlying interests.',
    practiceQuestions: ['Explain the five conflict resolution strategies of the Thomas-Kilmann model.', 'When is Compromising appropriate versus Collaborating?']
  },
  {
    module: 'Course 4: Project Execution',
    name: 'Monitoring progress',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'KPIs & Planned vs Actuals', tasks: ['Track Schedule Variance (SV) and Cost Variance (CV)', 'Compare active velocity against original baseline plans'] }
    ],
    notes: 'Continuous monitoring enables early detection of variances before minor slippages compound into critical delays.',
    practiceQuestions: ['What key metrics indicate that a project is deviating from its schedule baseline?', 'What is the purpose of Earned Value Management (EVM)?']
  },
  {
    module: 'Course 4: Project Execution',
    name: 'Project tracking',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Dashboards & Tracking Tools', tasks: ['Configure Asana/Jira project boards and automated status badges', 'Maintain single source of truth for task completion states'] }
    ],
    notes: 'Centralized project boards provide real-time transparency, eliminating time wasted querying individual status updates.',
    practiceQuestions: ['How do digital project tracking tools improve cross-functional transparency?', 'What information should appear on an executive project dashboard?']
  },
  {
    module: 'Course 4: Project Execution',
    name: 'Status reports',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'RAG Status Reports', tasks: ['Use Red-Amber-Green (RAG) status classification', 'Structure reports: Executive Summary, Milestones, Risks, Next Steps'] }
    ],
    notes: 'Green = On track; Amber = At risk but remediable within team; Red = Off track, requires executive intervention or escalation.',
    practiceQuestions: ['Define the exact criteria for marking a project Red, Amber, or Green.', 'Write a concise 4-bullet executive status update for a delayed project.']
  },
  {
    module: 'Course 4: Project Execution',
    name: 'Managing risks',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Active Risk Monitoring', tasks: ['Review risk triggers during weekly team checkpoints', 'Execute contingency plans when a risk materializes into an active issue'] }
    ],
    notes: 'A materialized risk transitions into an Issue: move it to the Issue Log and execute the pre-approved contingency plan.',
    practiceQuestions: ['What is the protocol when a monitored risk trigger occurs?', 'How frequently should the project risk register be updated during execution?']
  },
  {
    module: 'Course 4: Project Execution',
    name: 'Managing changes',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Change Control Execution', tasks: ['Log change requests and conduct 360-degree impact analysis', 'Update schedule and cost baselines upon approval'] }
    ],
    notes: 'Never implement out-of-scope requests casually ("gold plating"): always process through formal change evaluation.',
    practiceQuestions: ['What is gold plating and why should project managers prevent it?', 'How do you communicate a rejected change request to a disappointed stakeholder?']
  },
  {
    module: 'Course 4: Project Execution',
    name: 'Quality control',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Deliverable Verification', tasks: ['Conduct inspections, peer reviews, and automated acceptance testing', 'Track defect density and verify compliance with acceptance criteria'] }
    ],
    notes: 'Quality control verifies that deliverables meet the agreed specifications before submission to customer acceptance.',
    practiceQuestions: ['How does peer code review or product inspection function as Quality Control?', 'What is acceptance testing and who conducts it?']
  },
  {
    module: 'Course 4: Project Execution',
    name: 'Removing blockers',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Impediment Clearance', tasks: ['Identify blockers in daily stand-ups and unblock dependencies', 'Escalate cross-team roadblocks to leadership decisively'] }
    ],
    notes: 'A primary daily mission of a project manager or Scrum Master is relentlessly clearing impediments so the team can work uninterrupted.',
    practiceQuestions: ['What steps should a PM take when an external vendor dependency blocks the team?', 'How do you determine when a blocker requires executive escalation?']
  },
  {
    module: 'Course 4: Project Execution',
    name: 'Process improvement',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Continuous Improvement (Kaizen)', tasks: ['Identify delivery bottlenecks and waste (Muda)', 'Iteratively refine workflows based on retrospective learnings'] }
    ],
    notes: 'Kaizen represents continuous, incremental improvement of processes to eliminate friction and elevate quality.',
    practiceQuestions: ['What is the Plan-Do-Check-Act (PDCA) cycle?', 'How do process improvements reduce cycle time in software delivery?']
  },

  // Course 5: Agile Project Management (19 topics)
  {
    module: 'Course 5: Agile Project Management',
    name: 'Agile fundamentals',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'The Agile Mindset', tasks: ['Understand iterative value delivery, customer feedback, and adaptive response', 'Contrast plan-driven vs feedback-driven development'] }
    ],
    notes: 'Agile is a mindset defined by the 4 values and 12 principles of the Agile Manifesto, operationalized through frameworks like Scrum.',
    practiceQuestions: ['Why did Agile emerge as an alternative to rigid software development models?', 'What does it mean for a project to deliver value incrementally?']
  },
  {
    module: 'Course 5: Agile Project Management',
    name: 'Agile principles',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'The 12 Principles in Action', tasks: ['Review working software over documentation, early and continuous delivery', 'Promote sustainable pace, cross-functional teams, and self-organization'] }
    ],
    notes: 'Highest priority: satisfy the customer through early and continuous delivery of valuable software.',
    practiceQuestions: ['Explain the Agile principle of "sustainable pace" and how it prevents burnout.', 'Why is working software the primary measure of progress in Agile?']
  },
  {
    module: 'Course 5: Agile Project Management',
    name: 'Agile manifesto',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'The 4 Core Values', tasks: ['Individuals and interactions over processes and tools', 'Working software over comprehensive documentation', 'Customer collaboration over contract negotiation', 'Responding to change over following a plan'] }
    ],
    notes: 'While there is value in the items on the right, Agile values the items on the left more.',
    practiceQuestions: ['Recite the 4 values of the Agile Manifesto.', 'Does Agile mean writing zero documentation? Clarify this common misconception.']
  },
  {
    module: 'Course 5: Agile Project Management',
    name: 'Scrum framework',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Scrum Architecture', tasks: ['Understand the 3 Roles, 5 Events, and 3 Artifacts', 'Embrace Empirical Process Control: Transparency, Inspection, Adaptation'] }
    ],
    notes: 'Scrum is lightweight, simple to understand, but difficult to master. All events are timeboxed.',
    practiceQuestions: ['What are the three pillars of empirical process control in Scrum?', 'List the 3 roles, 5 events, and 3 artifacts of Scrum.']
  },
  {
    module: 'Course 5: Agile Project Management',
    name: 'Scrum roles',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Division of Accountability', tasks: ['Differentiate Product Owner (What/Why), Scrum Master (Process/Servant), Developers (How/When)'] }
    ],
    notes: 'There is no Project Manager role in Scrum: traditional PM responsibilities are distributed among the PO, SM, and Developers.',
    practiceQuestions: ['Where did the traditional Project Manager role go in the Scrum framework?', 'Can a person act as both Product Owner and Scrum Master simultaneously? Why is this discouraged?']
  },
  {
    module: 'Course 5: Agile Project Management',
    name: 'Product owner',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Maximizing Value & Backlog Ownership', tasks: ['Prioritize product backlog based on customer and business value', 'Define acceptance criteria and accept/reject sprint increments'] }
    ],
    notes: 'The Product Owner owns the product vision and has final authority over backlog prioritization.',
    practiceQuestions: ['What are the key responsibilities of the Product Owner?', 'How does a Product Owner balance technical debt with new feature requests?']
  },
  {
    module: 'Course 5: Agile Project Management',
    name: 'Scrum master',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Servant Leadership & Coaching', tasks: ['Facilitate Scrum events and remove team impediments', 'Coach organization in Scrum adoption and shield team from external distractions'] }
    ],
    notes: 'The Scrum Master is not the team\'s boss: they are a servant leader who facilitates process excellence and clears blockers.',
    practiceQuestions: ['How does a Scrum Master differ from a traditional Project Manager?', 'What does "servant leadership" look like in daily team interactions?']
  },
  {
    module: 'Course 5: Agile Project Management',
    name: 'Development team',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Cross-Functional Self-Organization', tasks: ['Maintain all skills necessary to deliver a usable increment each sprint', 'Self-organize around how work is accomplished without top-down assignment'] }
    ],
    notes: 'Scrum Development Teams are cross-functional, typically 3 to 9 members, with no internal hierarchical titles.',
    practiceQuestions: ['What does it mean for a development team to be cross-functional and self-organizing?', 'Why does Scrum recommend team sizes between 3 and 9 people?']
  },
  {
    module: 'Course 5: Agile Project Management',
    name: 'Product backlog',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Ordered Single Source of Truth', tasks: ['Maintain dynamic list of features, bug fixes, technical debt', 'Conduct backlog refinement (grooming) sessions to keep items DEEP'] }
    ],
    notes: 'A healthy Product Backlog is DEEP: Detailed appropriately, Estimated, Emergent, and Prioritized.',
    practiceQuestions: ['What does the DEEP acronym stand for in Product Backlog management?', 'What occurs during a Product Backlog Refinement meeting?']
  },
  {
    module: 'Course 5: Agile Project Management',
    name: 'Sprint planning',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Formulating Sprint Goal', tasks: ['Collaboratively craft the Sprint Goal', 'Select backlog items and decompose into Sprint Backlog tasks'] }
    ],
    notes: 'Sprint Planning answers two questions: Why is this sprint valuable? (Sprint Goal) and What can be delivered? (Sprint Backlog).',
    practiceQuestions: ['What are the inputs and outputs of Sprint Planning?', 'Why is having a unified Sprint Goal important rather than just a list of unrelated tasks?']
  },
  {
    module: 'Course 5: Agile Project Management',
    name: 'Daily stand-ups',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: '15-Minute Synchronization', tasks: ['Answer: What did I do yesterday? What will I do today? What blockers exist?', 'Focus on progress toward the Sprint Goal rather than status reporting'] }
    ],
    notes: 'The Daily Standup is for Developers to synchronize and replan for the next 24 hours. Keep strictly timeboxed to 15 minutes.',
    practiceQuestions: ['What are the three standard stand-up questions?', 'Why should a daily stand-up never turn into an executive status report?']
  },
  {
    module: 'Course 5: Agile Project Management',
    name: 'Sprint review',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Demonstrating Working Increment', tasks: ['Demo completed "Done" features to stakeholders and users', 'Collect feedback to adapt the future Product Backlog'] }
    ],
    notes: 'The Sprint Review is an interactive working session to inspect the increment and adapt the backlog, not just a presentation.',
    practiceQuestions: ['Who attends the Sprint Review and what is its primary objective?', 'What is the difference between a Sprint Review and a Sprint Retrospective?']
  },
  {
    module: 'Course 5: Agile Project Management',
    name: 'Sprint retrospective',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Team Self-Inspection & Adaptation', tasks: ['Reflect on people, relationships, processes, and tools', 'Select 1-2 actionable process improvement experiments for the next sprint'] }
    ],
    notes: 'Without retrospectives, Agile degenerates into rigid mini-waterfalls. Inspect what went well, what didn\'t, and commit to improvement.',
    practiceQuestions: ['Describe a popular retrospective format (e.g. Glad/Mad/Sad, Start/Stop/Continue).', 'How do you ensure action items from retrospectives are actually completed?']
  },
  {
    module: 'Course 5: Agile Project Management',
    name: 'User stories',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'The Connextra Template', tasks: ['Format: "As a [user], I want [goal], so that [benefit]"', 'Apply INVEST criteria (Independent, Negotiable, Valuable, Estimable, Small, Testable)'] }
    ],
    notes: 'User stories capture requirements from the perspective of the end user. Acceptance criteria define when the story is complete.',
    practiceQuestions: ['Explain the INVEST criteria for writing effective user stories.', 'Draft a complete user story with acceptance criteria for a password reset feature.']
  },
  {
    module: 'Course 5: Agile Project Management',
    name: 'Story points',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Relative Estimation', tasks: ['Estimate effort, complexity, and uncertainty using modified Fibonacci sequence (1, 2, 3, 5, 8, 13, 21)', 'Conduct Planning Poker sizing sessions'] }
    ],
    notes: 'Story points measure relative effort and complexity, not hours. Planning Poker leverages consensus to uncover assumptions.',
    practiceQuestions: ['Why is relative estimation (story points) faster and more reliable than estimating in absolute hours?', 'How does Planning Poker prevent anchoring bias?']
  },
  {
    module: 'Course 5: Agile Project Management',
    name: 'Kanban',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Flow-Based Continuous Delivery', tasks: ['Visualize workflow on columns (To Do, Doing, Done)', 'Limit Work in Progress (WIP limits) to reduce bottlenecks and lead time'] }
    ],
    notes: 'Kanban core rule: "Stop starting, start finishing." WIP limits force the team to clear existing bottlenecks before pulling new work.',
    practiceQuestions: ['What are WIP (Work in Progress) limits and why are they fundamental to Kanban?', 'How does Kanban differ from Scrum regarding iterations and roles?']
  },
  {
    module: 'Course 5: Agile Project Management',
    name: 'Agile boards',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Board Mechanics & Transparency', tasks: ['Configure digital board columns and swimlanes', 'Track card flow, blockers, and expedite lanes'] }
    ],
    notes: 'Agile boards act as information radiators, broadcasting live sprint state to everyone without needing status meetings.',
    practiceQuestions: ['What is an information radiator in Agile methodology?', 'What is a swimlane on an Agile board used for?']
  },
  {
    module: 'Course 5: Agile Project Management',
    name: 'Burndown charts',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Tracking Sprint Work Remaining', tasks: ['Plot ideal burn line vs actual work remaining daily', 'Diagnose scope injection, bottlenecks, and early completion'] }
    ],
    notes: 'A sprint burndown chart shows remaining story points across sprint days. A flat line signals work blocked.',
    practiceQuestions: ['How do you interpret a burndown chart where the actual line stays above the ideal line?', 'What causes an upward spike in a sprint burndown chart?']
  },
  {
    module: 'Course 5: Agile Project Management',
    name: 'Agile project tracking',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Team Velocity & Release Forecasting', tasks: ['Calculate average velocity (story points completed per sprint)', 'Forecast release dates using velocity and backlog size'] }
    ],
    notes: 'Velocity is a planning metric for the individual team, never a metric to compare productivity between different teams.',
    practiceQuestions: ['Why should velocity never be weaponized to compare two different development teams?', 'How do you forecast when a release will ship using team velocity?']
  },

  // Course 6: Capstone (15 topics)
  {
    module: 'Course 6: Capstone',
    name: 'Select a project',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Project Selection & Feasibility', tasks: ['Identify business problem and evaluate strategic alignment', 'Confirm resource feasibility and stakeholder backing'] }
    ],
    notes: 'Choose a capstone project with measurable outcomes, clear customer impact, and cross-functional deliverables.',
    practiceQuestions: ['What criteria make a project well-suited for a capstone portfolio showcase?', 'How do you conduct an initial feasibility assessment?']
  },
  {
    module: 'Course 6: Capstone',
    name: 'Define the project goal',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Goal Statement & Success Metrics', tasks: ['Draft clear SMART objective', 'Define target business metrics and customer success indicators'] }
    ],
    notes: 'Formulate an unambiguous goal statement connecting execution to company growth and efficiency.',
    practiceQuestions: ['Write a SMART goal for your chosen capstone project.', 'What are leading vs lagging indicators of project success?']
  },
  {
    module: 'Course 6: Capstone',
    name: 'Create project charter',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'End-to-End Charter Construction', tasks: ['Draft background, business case, in/out of scope, milestones, budget', 'Secure simulated sponsor authorization'] }
    ],
    notes: 'The Capstone Charter integrates all foundational learning into a polished, executive-ready document.',
    practiceQuestions: ['Review a sample capstone charter and identify three potential ambiguities.', 'Why is scope exclusion crucial in the capstone charter?']
  },
  {
    module: 'Course 6: Capstone',
    name: 'Identify stakeholders',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Capstone Stakeholder Register', tasks: ['Identify 6-8 core stakeholders across sponsor, users, team, regulatory', 'Map communication preferences and influence levels'] }
    ],
    notes: 'Compile a complete stakeholder register documenting roles, contact cadence, and expectations.',
    practiceQuestions: ['Draft a stakeholder register for a website redesign project.', 'How do you identify hidden stakeholders who might veto the project later?']
  },
  {
    module: 'Course 6: Capstone',
    name: 'Define scope',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Scope Statement & Acceptance Criteria', tasks: ['Write detailed project scope statement', 'Establish testable acceptance criteria for all major deliverables'] }
    ],
    notes: 'Every deliverable must have clear conditions of satisfaction before planning begins.',
    practiceQuestions: ['How do you document what is explicitly out of scope for your capstone project?', 'What makes an acceptance criterion unambiguous?']
  },
  {
    module: 'Course 6: Capstone',
    name: 'Create work breakdown structure',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Hierarchical WBS Construction', tasks: ['Decompose capstone project into 3-4 levels of work packages', 'Create accompanying WBS Dictionary defining deliverables'] }
    ],
    notes: 'The WBS Dictionary provides detailed descriptions of work packages, acceptance criteria, and assigned owners.',
    practiceQuestions: ['Build a 3-level WBS for your capstone project.', 'What is the role of a WBS Dictionary?']
  },
  {
    module: 'Course 6: Capstone',
    name: 'Create project schedule',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Network Diagram & Critical Path', tasks: ['Sequence all activities with dependencies', 'Identify critical path and establish schedule baseline'] }
    ],
    notes: 'Build a realistic project schedule with clear milestone markers and contingency buffers on critical paths.',
    practiceQuestions: ['Identify the critical path in your capstone schedule network.', 'Where should project schedule contingency buffers be placed?']
  },
  {
    module: 'Course 6: Capstone',
    name: 'Estimate resources',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Resource Loading & Staffing Plan', tasks: ['Estimate hours per work package by discipline', 'Build staffing histogram and resolve allocation spikes'] }
    ],
    notes: 'Match team member expertise with work package complexity while preventing over-allocation.',
    practiceQuestions: ['How do you estimate human resource requirements for a development sprint?', 'What is a resource histogram?']
  },
  {
    module: 'Course 6: Capstone',
    name: 'Create budget',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Cost Baseline Formulation', tasks: ['Calculate labor, tool licensing, equipment, and contingency costs', 'Build baseline cost S-curve for cash flow planning'] }
    ],
    notes: 'Integrate contingency reserves based on identified risk exposure into the overall budget baseline.',
    practiceQuestions: ['Draft a line-item budget for your capstone project including contingency reserves.', 'How do you justify project budget to a skeptical finance committee?']
  },
  {
    module: 'Course 6: Capstone',
    name: 'Identify risks',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Capstone Risk Matrix', tasks: ['Identify top 10 risks with probability and impact scores', 'Assign risk owners and draft concrete mitigation action steps'] }
    ],
    notes: 'Populate a professional Risk Register with both pre-mitigation and residual post-mitigation scores.',
    practiceQuestions: ['Identify 5 significant risks for your capstone project and document their mitigation plans.', 'What is residual risk?']
  },
  {
    module: 'Course 6: Capstone',
    name: 'Prepare communication plan',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Stakeholder Comms Matrix', tasks: ['Document meeting schedules, status report formats, and escalation contacts', 'Define asynchronous communication norms'] }
    ],
    notes: 'Create an executive communications matrix balancing transparency with stakeholder time constraints.',
    practiceQuestions: ['Create a communication matrix for your capstone project.', 'How do you adjust communication style between technical developers and non-technical sponsors?']
  },
  {
    module: 'Course 6: Capstone',
    name: 'Track execution',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Simulated Execution Monitoring', tasks: ['Simulate task progress and log variance against baselines', 'Manage issue log and execute corrective actions'] }
    ],
    notes: 'Track planned versus actual completion dates, updating the schedule to reflect reality.',
    practiceQuestions: ['How do you manage team accountability when tasks start slipping behind schedule?', 'What is a corrective action in project execution?']
  },
  {
    module: 'Course 6: Capstone',
    name: 'Create status reports',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Capstone Executive Status Report', tasks: ['Draft high-impact RAG status update with milestone tracking and blocker escalations'] }
    ],
    notes: 'Produce clean, visual status reports that executive sponsors can absorb in 60 seconds.',
    practiceQuestions: ['Write a 1-page RAG status report for your capstone project at mid-point execution.', 'How do you report an Amber status with confidence and authority?']
  },
  {
    module: 'Course 6: Capstone',
    name: 'Project closure',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Formal Closeout & Handover', tasks: ['Obtain formal customer acceptance and sign-off', 'Transition deliverables to operations, archive documentation, and release team resources'] }
    ],
    notes: 'A project is not complete until formal sign-off is secured, contracts closed, and operations handed over.',
    practiceQuestions: ['What are the formal steps required to close a project properly?', 'Why is conducting a lessons-learned retrospective vital for organizational knowledge?']
  },
  {
    module: 'Course 6: Capstone',
    name: 'Final project presentation',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Executive Showcase', tasks: ['Build 8-10 slide presentation: Problem, Solution, Roadmap, Budget, Outcomes, Retrospective', 'Deliver compelling presentation articulating personal PM leadership'] }
    ],
    notes: 'Tell a compelling story: highlight the problem solved, overcome obstacles, and tangible business impact achieved.',
    practiceQuestions: ['How do you structure an executive capstone presentation for maximum impact?', 'What questions should you anticipate during an executive Q&A?']
  },

  // Additional Professional Skills (16 topics)
  {
    module: 'Additional Professional Skills',
    name: 'Google Workspace',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Cloud Productivity Suite', tasks: ['Integrate Gmail, Calendar, Meet, Chat, Drive for collaborative project workflows'] }
    ],
    notes: 'Google Workspace enables real-time collaborative document editing and integrated scheduling across global teams.',
    practiceQuestions: ['How does real-time co-authoring in Google Workspace improve team alignment?', 'What features make Google Calendar essential for cross-timezone scheduling?']
  },
  {
    module: 'Additional Professional Skills',
    name: 'Google Sheets',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'PM Data Modeling in Sheets', tasks: ['Build automated project trackers with VLOOKUP/XLOOKUP, INDEX/MATCH, and QUERY', 'Create conditional formatting rules for RAG status and milestone timelines'] }
    ],
    notes: 'Google Sheets is the Swiss Army knife for custom PM tracking, budget rollups, and ad-hoc status dashboards.',
    practiceQuestions: ['How do you use the =QUERY() function in Google Sheets to filter project tasks?', 'Build an automated RAG conditional formatting rule based on task due date vs status.']
  },
  {
    module: 'Additional Professional Skills',
    name: 'Google Docs',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Collaborative Project Artifacts', tasks: ['Draft project charters and meeting agendas using smart chips (@-mentions, date chips, dropdown chips)', 'Manage document version history and approval workflows'] }
    ],
    notes: 'Use Google Docs smart chips and building blocks to embed live interactive task lists and voting tables.',
    practiceQuestions: ['How do smart chips in Google Docs enhance meeting minutes and action tracking?', 'How do you manage version approvals in a collaborative Google Doc?']
  },
  {
    module: 'Additional Professional Skills',
    name: 'Google Slides',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Executive Storytelling', tasks: ['Design clean, visually balanced status decks and roadmap summaries', 'Avoid dense text bullet slides: focus on charts, milestones, and high-contrast headlines'] }
    ],
    notes: 'Rule of thumb: One core idea per slide. Executives scan visual milestones and headlines faster than bullet walls.',
    practiceQuestions: ['What are three design principles for executive presentation slides?', 'How do you visualize a quarterly project roadmap on a single slide?']
  },
  {
    module: 'Additional Professional Skills',
    name: 'Google Drive',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Document Governance & Shared Drives', tasks: ['Organize structured folder taxonomy (01_Initiation, 02_Planning, 03_Execution, 04_Closing)', 'Configure granular access permissions and link sharing hygiene'] }
    ],
    notes: 'Establish a standard folder taxonomy so all stakeholders immediately know where to find latest baselines.',
    practiceQuestions: ['Design a folder hierarchy for a multi-month enterprise project in Google Drive.', 'What is the security difference between Shared Drives and personal My Drive sharing?']
  },
  {
    module: 'Additional Professional Skills',
    name: 'Project management tools',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Evaluating PM Software', tasks: ['Compare Jira, Asana, Trello, Monday, Linear, Notion', 'Select tool based on methodology (Agile vs Waterfall) and team scale'] }
    ],
    notes: 'Tools serve the process, not the reverse. Choose the simplest tool that provides necessary visibility.',
    practiceQuestions: ['What criteria should a PM consider when choosing project management software for a team?', 'Why do complex tool configurations often fail in adoption?']
  },
  {
    module: 'Additional Professional Skills',
    name: 'Asana',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Work Management Mastery', tasks: ['Configure tasks, custom fields, dependencies, and timeline views in Asana', 'Automate status updates with Asana rules and intake forms'] }
    ],
    notes: 'Asana shines in cross-functional business projects with timelines, portfolios, and customizable request forms.',
    practiceQuestions: ['How do Asana custom fields enable cross-project portfolio reporting?', 'What is an Asana Form and how does it streamline intake management?']
  },
  {
    module: 'Additional Professional Skills',
    name: 'Trello',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Lightweight Kanban Boards', tasks: ['Build boards, lists, and cards with checklists and due dates', 'Configure Butler automated workflows for card moves and deadline alerts'] }
    ],
    notes: 'Trello provides frictionless visual task management for small teams and simple linear workflows.',
    practiceQuestions: ['How do Trello Butler automations eliminate manual board maintenance?', 'When does a team outgrow Trello and need a more advanced tool like Jira?']
  },
  {
    module: 'Additional Professional Skills',
    name: 'Jira',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'Software Development Issue Tracking', tasks: ['Configure Scrum and Kanban boards, Epics, User Stories, Bugs, and Subtasks', 'Manage sprint lifecycles, release versions, and JQL (Jira Query Language) filters'] }
    ],
    notes: 'Jira is the industry standard for software engineering project management, backlog grooming, and release planning.',
    practiceQuestions: ['Write a JQL query to find all unresolved high-priority bugs in the active sprint.', 'Explain the relationship between Epics, Stories, and Subtasks in Jira.']
  },
  {
    module: 'Additional Professional Skills',
    name: 'Notion',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'All-in-One Connected Workspace', tasks: ['Build relational databases linking Projects, Tasks, and Meeting Notes', 'Create custom team wikis with linked views, formulas, and rollups'] }
    ],
    notes: 'Notion excels as a centralized knowledge base and team documentation wiki tightly coupled with lightweight task databases.',
    practiceQuestions: ['How do Notion database rollups and relations create connected project hubs?', 'How does Notion compare to Confluence for team documentation?']
  },
  {
    module: 'Additional Professional Skills',
    name: 'AI tools for project management',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Generative AI Productivity', tasks: ['Use Gemini/LLMs to draft charters, summarize meeting transcripts, and draft status reports', 'Generate risk breakdown structures and draft user stories from requirements'] }
    ],
    notes: 'AI acts as a tireless PM co-pilot: drafting first-pass documents, identifying blind spots in risk registers, and summarizing discussions.',
    practiceQuestions: ['How can a PM leverage AI to accelerate draft charter creation?', 'What are three specific use cases for AI in daily project operations?']
  },
  {
    module: 'Additional Professional Skills',
    name: 'Responsible AI use',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Ethics, Privacy, & Verification', tasks: ['Protect confidential proprietary company data (never input sensitive secrets into public models)', 'Verify AI outputs for hallucinations and ensure human accountability'] }
    ],
    notes: 'Human in the Loop: AI drafts, but the Project Manager is personally accountable for the accuracy, fairness, and truth of every deliverable.',
    practiceQuestions: ['What data privacy precautions must be taken when using AI tools for company projects?', 'Why must project managers always independently verify AI-generated estimates?']
  },
  {
    module: 'Additional Professional Skills',
    name: 'Professional communication',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Executive Presence & Clarity', tasks: ['Communicate with the BLUF method (Bottom Line Up Front)', 'Manage tone and conciseness across email, Slack, and presentations'] }
    ],
    notes: 'Use BLUF: State the decision or key request in the very first sentence before providing supporting background context.',
    practiceQuestions: ['Rewrite a rambling 3-paragraph status email into a crisp BLUF communication.', 'What is executive presence and how does a PM demonstrate it in meetings?']
  },
  {
    module: 'Additional Professional Skills',
    name: 'Business writing',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Crisp Technical & Business Prose', tasks: ['Eliminate passive voice and corporate jargon', 'Structure proposals with Problem Statement, Options Considered, Recommendation, and Cost'] }
    ],
    notes: 'Clarity is kindness: write concisely so busy decision-makers can approve recommendations quickly.',
    practiceQuestions: ['Why should active voice be preferred in professional project documentation?', 'How do you structure an Options Paper for an executive decision?']
  },
  {
    module: 'Additional Professional Skills',
    name: 'Interview preparation',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 75,
    subtopics: [
      { name: 'PM Behavioral & Situational Questions', tasks: ['Master STAR answers for conflict, failure, scope creep, and leadership under pressure', 'Practice Google Project Management interview question frameworks'] }
    ],
    notes: 'Prepare 5-6 versatile STAR stories covering: leading without authority, recovering a slipping project, handling a difficult stakeholder, and post-mortem failure.',
    practiceQuestions: ['Answer: "Tell me about a time you had to deliver bad news to an executive sponsor."', 'Answer: "How do you handle a team member who consistently misses milestone deadlines?"']
  },
  {
    module: 'Additional Professional Skills',
    name: 'Resume and portfolio',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Quantified PM Resume', tasks: ['Highlight project budget managed, team size, cycle time reduction, and on-time delivery rates', 'Link to public portfolio showcasing project charters, Gantt schedules, and postmortems'] }
    ],
    notes: 'Substantiate claims with metrics: "Managed $450k budget across 12 cross-functional engineers, delivering product 2 weeks ahead of schedule."',
    practiceQuestions: ['Transform "Responsible for project schedule" into a high-impact, quantified resume bullet point.', 'What artifacts should be showcased in a Google PM portfolio?']
  },

  // Practical Projects (5 topics)
  {
    module: 'Practical Projects',
    name: 'Website development project',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 120,
    subtopics: [
      { name: 'E2E Web Delivery Simulation', tasks: ['Draft project charter and technical requirements for a responsive website', 'Build WBS, manage sprint backlog in Jira, and conduct customer acceptance testing'] }
    ],
    notes: 'Demonstrates end-to-end delivery of a digital web product through cross-functional design, engineering, and QA.',
    practiceQuestions: ['What are the key milestones in a website development project lifecycle?', 'How do you coordinate design handoffs between UX designers and frontend developers?']
  },
  {
    module: 'Practical Projects',
    name: 'Student management project',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 120,
    subtopics: [
      { name: 'Educational System Deployment', tasks: ['Define scope for student registration, grades, and records system', 'Build RACI chart, manage stakeholder requirements with school administrators, and conduct phased rollout'] }
    ],
    notes: 'Focus on stakeholder management, data privacy compliance, and user training during deployment.',
    practiceQuestions: ['How do you manage regulatory and student privacy compliance in an education IT project?', 'What change management steps ensure teachers and staff adopt the new software?']
  },
  {
    module: 'Practical Projects',
    name: 'Event management project',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 120,
    subtopics: [
      { name: 'Fixed-Date Event Delivery', tasks: ['Manage hard, immovable deadline constraints for a 500-attendee conference', 'Coordinate vendors, venue logistics, budget tracking, and contingency contingency plans'] }
    ],
    notes: 'Event management involves immovable deadlines: tasks must be executed with rigorous critical path discipline.',
    practiceQuestions: ['How do you manage project schedule when the final completion date cannot be moved under any circumstances?', 'What contingency plans are critical for live physical events?']
  },
  {
    module: 'Practical Projects',
    name: 'Software development project',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 150,
    subtopics: [
      { name: 'Agile Software Lifecycle', tasks: ['Manage multi-sprint Agile release of a cloud web application', 'Facilitate backlog refinement, sprint planning, daily standups, and release retrospectives'] }
    ],
    notes: 'Demonstrates deep mastery of Scrum ceremonies, story estimation, burn-down tracking, and release management.',
    practiceQuestions: ['How do you handle scope changes introduced by stakeholders midway through an active sprint?', 'How do you measure and report software release readiness?']
  },
  {
    module: 'Practical Projects',
    name: 'Team project simulation',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 150,
    subtopics: [
      { name: 'Crisis & Real-World Simulation', tasks: ['Simulate unexpected budget cut (-20%), key engineer resignation, and critical vendor delay', 'Conduct trade-off analysis and present revised baseline recovery plan to sponsor'] }
    ],
    notes: 'Tests resilience and leadership: real project managers shine when plans fall apart and disciplined replanning is required.',
    practiceQuestions: ['How do you re-baseline scope and schedule following an unexpected 20% budget reduction?', 'What communication strategy preserves team morale during a project crisis?']
  }
];

export const INITIAL_PM_TOPICS: Topic[] = PM_MODULES_RAW.map((raw, index) => {
  const seq = index + 1;
  const id = `pm_topic_${seq}`;
  return {
    id,
    learningAreaId: 'la_pm',
    learningAreaName: 'Project Management — Google PM Learning Roadmap',
    subjectId: 'sub_pm_google_cert',
    subjectName: 'Google Project Management Certificate Curriculum',
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
