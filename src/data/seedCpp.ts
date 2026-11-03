import { Topic } from '../types/syllabus.ts';

interface TopicRawMeta {
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

const CPP_MODULES_RAW: TopicRawMeta[] = [
  // Module 1: Programming Fundamentals (20 topics)
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'Introduction to C++',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'History & Evolution of C++', tasks: ['Understand Bjarne Stroustrup design goals', 'Compare C vs C++ paradigm shift'] },
      { name: 'C++ Standards & Compilation Model', tasks: ['Review C++98 to C++20 evolution', 'Understand preprocessor, compiler, assembler, linker phases'] }
    ],
    notes: 'C++ is a statically-typed, compiled, multi-paradigm language offering zero-cost abstractions and deterministic resource management.',
    practiceQuestions: ['What are the key differences between C and C++?', 'Explain the four stages of the C++ compilation pipeline.']
  },
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'Setting up compiler and IDE',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Toolchain Installation', tasks: ['Install GCC/G++ or Clang', 'Verify toolchain version in terminal with g++ --version'] },
      { name: 'IDE & Environment Configuration', tasks: ['Configure VS Code with C/C++ extension and tasks.json', 'Install CMake or LLDB/GDB debuggers'] }
    ],
    notes: 'Modern C++ requires g++ (version 11+) or Clang (13+) with flags -Wall -Wextra -std=c++17 or -std=c++20.',
    practiceQuestions: ['Write and run a minimal build command using g++ in terminal.', 'What do the -Wall and -Wextra flags do?']
  },
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'Structure of a C++ program',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Directives & Namespaces', tasks: ['Analyze #include <iostream>', 'Understand using namespace std vs explicit qualification std::'] },
      { name: 'Main Function Signature', tasks: ['Understand int main(int argc, char* argv[]) and return 0 semantics'] }
    ],
    notes: 'Never use "using namespace std;" in header files to avoid namespace pollution. Always qualify standard library symbols.',
    practiceQuestions: ['Why should "using namespace std" be avoided in production headers?', 'What happens if main() does not explicitly return a value?']
  },
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'Variables and constants',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Variable Declaration & Scope', tasks: ['Declare variables with initialization', 'Understand local, global, and block scope'] },
      { name: 'Const & Immutability', tasks: ['Declare const variables', 'Learn difference between const and #define macros'] }
    ],
    notes: 'Prefer "const" or "constexpr" over preprocessor "#define" for type safety and compiler symbol table inclusion.',
    practiceQuestions: ['Why is const preferred over #define for defining constants?', 'What is variable shadowing in nested scopes?']
  },
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'Data types',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Primitive & Integral Types', tasks: ['Inspect sizeof(int), sizeof(char), sizeof(bool)', 'Understand signed vs unsigned overflow'] },
      { name: 'Floating Point & Fixed-Width Types', tasks: ['Examine float, double, long double precision', 'Use <cstdint> types like int32_t, uint64_t'] }
    ],
    notes: 'Always prefer fixed-width types from <cstdint> (int32_t, int64_t) when binary layout or cross-platform predictability matters.',
    practiceQuestions: ['What is the difference between signed and unsigned integer overflow behavior in C++?', 'When should double be used instead of float?']
  },
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'Input and output',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Standard Streams', tasks: ['Use std::cin and std::cout', 'Understand std::cerr vs std::clog'] },
      { name: 'Stream Buffering & Fast I/O', tasks: ['Practice std::getline for spaced text', 'Learn std::ios_base::sync_with_stdio(false)'] }
    ],
    notes: 'Use std::endl only when flushing is strictly required; prefer \'\\n\' for performance-critical loops to avoid flush overhead.',
    practiceQuestions: ['What is the performance difference between "\\n" and std::endl?', 'How do you read a full line with spaces using std::getline?']
  },
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'Operators',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Arithmetic & Logical Operators', tasks: ['Review precedence & associativity', 'Understand short-circuit evaluation in && and ||'] },
      { name: 'Bitwise & Compound Assignment', tasks: ['Practice bitwise operators (&, |, ^, ~, <<, >>)', 'Implement bit manipulation masks'] }
    ],
    notes: 'Logical operators short-circuit: expressions on the right are evaluated only if necessary.',
    practiceQuestions: ['Explain short-circuit evaluation with a practical example.', 'Write a function to check if an integer is a power of 2 using bitwise operators.']
  },
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'Type conversion',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Implicit vs Explicit Casting', tasks: ['Understand promotion rules and narrowing conversions', 'Avoid C-style casts (int)x'] },
      { name: 'C++ Casting Operators', tasks: ['Practice static_cast<T>', 'Understand reinterpret_cast and const_cast use-cases'] }
    ],
    notes: 'Use static_cast for compile-time verified casts. Never use C-style casts in modern C++ as they bypass compiler safety checks.',
    practiceQuestions: ['Why are C++ named casts safer than C-style casts?', 'What will happen during narrowing conversion from double to int?']
  },
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'Conditional statements',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'If-Else Branching', tasks: ['Implement if-else if ladders', 'Use C++17 if-statements with initializers: if (auto x = ...)'] },
      { name: 'Switch-Case Statements', tasks: ['Implement switch with break and default', 'Use [[fallthrough]] attribute when intentional'] }
    ],
    notes: 'C++17 introduced init-statements for if/switch: if (int val = compute(); val > 0) restricts variable scope cleanly.',
    practiceQuestions: ['Write an if-statement with an initializer in C++17.', 'What is the danger of missing a break statement in a switch block?']
  },
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'Loops',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'While & Do-While Loops', tasks: ['Write condition-controlled while loops', 'Understand when do-while is appropriate'] },
      { name: 'For Loops & Iteration Control', tasks: ['Master traditional three-part for loop', 'Handle multiple loop counters'] }
    ],
    notes: 'Ensure loop termination conditions cannot create infinite loops; be cautious when comparing signed and unsigned index variables.',
    practiceQuestions: ['Write a program to reverse a number using a while loop.', 'Why does comparing an int i < vector.size() trigger a compiler warning?']
  },
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'Break and continue',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Early Loop Termination', tasks: ['Use break in search algorithms', 'Avoid excessive break statements in nested loops'] },
      { name: 'Skipping Iterations', tasks: ['Use continue for filter-like loop passes', 'Refactor nested conditionals with continue'] }
    ],
    notes: 'Break exits the innermost loop; continue jumps directly to the loop update expression.',
    practiceQuestions: ['How can you break out of a deeply nested loop cleanly without goto?', 'What is the exact execution flow of continue in a for loop?']
  },
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'Functions',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Function Anatomy & Prototypes', tasks: ['Write forward declarations in header files', 'Define function implementation in source files'] },
      { name: 'Inline Functions & Call Stack', tasks: ['Understand inline keyword and inlining heuristics', 'Trace stack frames and local variable lifetimes'] }
    ],
    notes: 'Functions should follow Single Responsibility Principle. Place prototypes in .h files and definitions in .cpp files.',
    practiceQuestions: ['What is the difference between a function declaration and definition?', 'When does the compiler decide to inline a function?']
  },
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'Function arguments',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Pass by Value vs Pass by Reference', tasks: ['Compare performance of pass-by-value vs pass-by-const-ref', 'Modify caller variables via reference'] },
      { name: 'Default Arguments & Pass by Pointer', tasks: ['Assign default parameter values in declaration only', 'Safely pass pointers with nullptr checks'] }
    ],
    notes: 'Rule of thumb: pass cheap primitives (int, double) by value; pass non-trivial objects (std::string, std::vector) by const reference.',
    practiceQuestions: ['Why should large objects be passed by const reference instead of value?', 'Where should default argument values be specified: in header or cpp?']
  },
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'Recursion',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Base Cases & Recursive Steps', tasks: ['Write factorial and Fibonacci recursively', 'Identify stack overflow conditions'] },
      { name: 'Tail Call Optimization', tasks: ['Convert standard recursion into tail recursion', 'Analyze call stack depth'] }
    ],
    notes: 'Every recursive function must have a verified base case to prevent stack overflow.',
    practiceQuestions: ['Implement the Euclidean algorithm for GCD recursively.', 'What is tail call optimization and does C++ guarantee it?']
  },
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'Arrays',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Stack-Allocated Fixed Arrays', tasks: ['Declare and initialize C-style arrays int arr[10]', 'Understand array name decay to pointer'] },
      { name: 'Modern std::array', tasks: ['Use #include <array>', 'Compare C-array vs std::array<int, N>'] }
    ],
    notes: 'Prefer std::array<T, N> over raw C-style arrays: it knows its size, does not decay implicitly, and integrates with STL algorithms.',
    practiceQuestions: ['Why does a raw C-array not know its own size inside a function?', 'What is the memory overhead of std::array compared to raw array?']
  },
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'Multidimensional arrays',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: '2D Array Memory Layout', tasks: ['Understand row-major memory order in C++', 'Iterate rows and columns cache-friendly'] },
      { name: 'Matrix Operations', tasks: ['Implement matrix addition and multiplication', 'Flatten 2D index into 1D (row * cols + col)'] }
    ],
    notes: 'C++ stores multidimensional arrays in row-major order: iterate arr[row][col] with row in the outer loop for CPU cache locality.',
    practiceQuestions: ['Why is iterating row-major faster than iterating column-major in C++?', 'How do you map a 2D coordinate (r, c) into a single 1D vector?']
  },
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'Strings',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'C-Strings vs std::string', tasks: ['Compare null-terminated char[] vs dynamic std::string', 'Use std::string methods: size(), substr(), find()'] },
      { name: 'C++17 std::string_view', tasks: ['Use string_view to avoid string copies in read-only APIs', 'Avoid dangling string_view references'] }
    ],
    notes: 'std::string manages its own buffer with SSO (Small String Optimization). Use std::string_view for read-only function arguments.',
    practiceQuestions: ['What is Small String Optimization (SSO)?', 'Why can std::string_view cause undefined behavior if the source string is destroyed?']
  },
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'Pointers',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 90,
    subtopics: [
      { name: 'Address-of & Dereference Operators', tasks: ['Use & to get memory address, * to dereference', 'Visualize pointer memory addresses on paper'] },
      { name: 'Pointer Arithmetic & Nullptr', tasks: ['Increment and decrement pointers', 'Differentiate nullptr from NULL and 0'] },
      { name: 'Dynamic Memory (new/delete)', tasks: ['Allocate on heap with new, deallocate with delete', 'Recognize memory leaks and dangling pointers'] }
    ],
    notes: 'Pointers store raw memory addresses. Always initialize pointers to nullptr. Every heap "new" must have a matching "delete".',
    practiceQuestions: ['Explain the difference between int* const p and const int* p.', 'What is a dangling pointer and how can it be prevented?']
  },
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'References',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Reference Semantics', tasks: ['Declare lvalue reference int& ref = x', 'Understand that references cannot be reseated or null'] },
      { name: 'Pointers vs References', tasks: ['Create comparison table between pointers and references', 'Choose appropriate parameter convention'] }
    ],
    notes: 'A reference is an alias for an existing object and cannot be null or rebound. Prefer references over raw pointers whenever nullability is not required.',
    practiceQuestions: ['Can a reference in C++ ever be null?', 'List three differences between a reference and a pointer.']
  },
  {
    module: 'Module 1: Programming Fundamentals',
    name: 'Structures and enumerations',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Structs & Memory Alignment', tasks: ['Define structs with member variables and methods', 'Inspect struct alignment and padding'] },
      { name: 'Scoped Enums (enum class)', tasks: ['Declare enum class Color { Red, Green, Blue }', 'Understand type safety of scoped enums vs legacy enums'] }
    ],
    notes: 'In C++, struct and class are identical except that struct members default to public. Always use scoped "enum class" instead of plain "enum".',
    practiceQuestions: ['Why should modern C++ use "enum class" instead of "enum"?', 'What is memory alignment and how does padding affect struct size?']
  },

  // Module 2: Object-Oriented Programming (16 topics)
  {
    module: 'Module 2: Object-Oriented Programming',
    name: 'Classes and objects',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Class Definition & Instantiation', tasks: ['Define class with fields and member functions', 'Instantiate stack and heap objects'] },
      { name: 'The this Pointer', tasks: ['Use this-> to resolve name shadowing', 'Chain member function calls by returning *this'] }
    ],
    notes: 'Classes encapsulate state and behavior. The "this" pointer represents the address of the current instance.',
    practiceQuestions: ['What is the difference between a class and an object?', 'How do you achieve method chaining using the "this" pointer?']
  },
  {
    module: 'Module 2: Object-Oriented Programming',
    name: 'Access specifiers',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Public, Private, Protected', tasks: ['Set member access boundaries', 'Understand accessibility in derived classes'] },
      { name: 'Data Hiding Principles', tasks: ['Protect internal invariants behind private specifier', 'Provide minimal, clean public interfaces'] }
    ],
    notes: 'Make data members private by default. Expose public getter/setter methods only when necessary.',
    practiceQuestions: ['Explain the exact difference between private and protected access specifiers.', 'Why is data hiding critical for software maintenance?']
  },
  {
    module: 'Module 2: Object-Oriented Programming',
    name: 'Constructors',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'Default & Parameterized Constructors', tasks: ['Write default constructor and overloaded constructors', 'Use member initializer lists'] },
      { name: 'Copy Constructor & explicit Keyword', tasks: ['Implement deep copy constructor', 'Mark single-argument constructors "explicit" to prevent implicit conversion'] }
    ],
    notes: 'Always initialize members in constructor initializer list in declaration order. Mark single-arg constructors "explicit".',
    practiceQuestions: ['Why should member variables be initialized in the member initializer list rather than inside constructor body?', 'What does the "explicit" keyword do on a constructor?']
  },
  {
    module: 'Module 2: Object-Oriented Programming',
    name: 'Destructors',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Resource Cleanup & RAII', tasks: ['Write destructor ~ClassName() to release resources', 'Understand deterministic destruction on scope exit'] },
      { name: 'Virtual Destructors', tasks: ['Mark base class destructor virtual', 'Explain UB when deleting derived object via base pointer without virtual destructor'] }
    ],
    notes: 'RAII (Resource Acquisition Is Initialization): tie resources to object lifetime. Always make base class destructors virtual.',
    practiceQuestions: ['Why must a base class destructor be declared virtual?', 'What is RAII in C++ and why is it superior to manual cleanup?']
  },
  {
    module: 'Module 2: Object-Oriented Programming',
    name: 'Encapsulation',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Encapsulation Mechanics', tasks: ['Bundle data and validation logic together', 'Enforce class invariants with validate() guards'] }
    ],
    notes: 'Encapsulation shields caller from implementation details and guarantees valid internal state.',
    practiceQuestions: ['How does encapsulation protect class invariants?', 'Give an example of a class invariant for a BankAccount class.']
  },
  {
    module: 'Module 2: Object-Oriented Programming',
    name: 'Inheritance',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Base and Derived Classes', tasks: ['Inherit derived class using : public Base', 'Pass constructor parameters up to base class'] },
      { name: 'Constructor/Destructor Calling Order', tasks: ['Trace execution order: base constructor -> derived constructor -> derived destructor -> base destructor'] }
    ],
    notes: 'Inheritance models an "is-a" relationship. Composition models "has-a". Prefer composition over inheritance when possible.',
    practiceQuestions: ['In what order are base and derived constructors and destructors executed?', 'Why should composition be preferred over inheritance in modern design?']
  },
  {
    module: 'Module 2: Object-Oriented Programming',
    name: 'Types of inheritance',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Single, Multilevel, Multiple, Hierarchical', tasks: ['Implement multilevel and hierarchical hierarchies', 'Analyze Diamond Problem in multiple inheritance'] },
      { name: 'Virtual Base Classes', tasks: ['Use virtual inheritance: class B : virtual public A', 'Resolve duplicate base class subobjects'] }
    ],
    notes: 'The Diamond Problem occurs when two classes inherit from a common base and a fourth inherits from both; solved using virtual base inheritance.',
    practiceQuestions: ['Diagram the diamond problem and demonstrate how "virtual public" resolves ambiguity.', 'What are the trade-offs of multiple inheritance?']
  },
  {
    module: 'Module 2: Object-Oriented Programming',
    name: 'Polymorphism',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Compile-Time vs Runtime Polymorphism', tasks: ['Compare function overloading/templates vs virtual dispatch', 'Measure runtime overhead of vtable dispatch'] }
    ],
    notes: 'Compile-time polymorphism is resolved at compile time with zero runtime overhead; runtime polymorphism enables dynamic behavior via virtual methods.',
    practiceQuestions: ['Compare compile-time polymorphism with runtime polymorphism in terms of performance and flexibility.', 'Give an example of static polymorphism.']
  },
  {
    module: 'Module 2: Object-Oriented Programming',
    name: 'Function overloading',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Overloading Rules', tasks: ['Overload functions by parameter types and count', 'Avoid ambiguous overloads with implicit conversions'] }
    ],
    notes: 'Return type alone is not sufficient to overload a function in C++.',
    practiceQuestions: ['Can functions be overloaded based on return type alone? Why?', 'What causes an ambiguous overload error during compilation?']
  },
  {
    module: 'Module 2: Object-Oriented Programming',
    name: 'Operator overloading',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'Arithmetic & Comparison Operators', tasks: ['Overload operator+, operator==', 'Implement C++20 three-way comparison operator<=> (spaceship operator)'] },
      { name: 'Stream Insertion & Extraction', tasks: ['Overload friend std::ostream& operator<<', 'Overload std::istream& operator>>'] }
    ],
    notes: 'Overload operators only when their semantics are intuitive and match standard mathematical or container conventions.',
    practiceQuestions: ['Implement operator<< for a custom Vector2D class.', 'How does the C++20 spaceship operator (<=>) simplify comparison overloading?']
  },
  {
    module: 'Module 2: Object-Oriented Programming',
    name: 'Function overriding',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Virtual Methods & Override Specifier', tasks: ['Declare virtual in base class', 'Always mark derived methods with override keyword'] }
    ],
    notes: 'Always use the "override" keyword in derived classes: the compiler will flag any typo or signature mismatch immediately.',
    practiceQuestions: ['What compiler error does the "override" keyword prevent?', 'What happens if you omit the virtual keyword in the base class?']
  },
  {
    module: 'Module 2: Object-Oriented Programming',
    name: 'Virtual functions',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 80,
    subtopics: [
      { name: 'Vtable and Vptr Internals', tasks: ['Diagram how the compiler builds the virtual method table (vtable)', 'Inspect object size with and without virtual methods'] },
      { name: 'Dynamic Dispatch Cost', tasks: ['Analyze memory indirection of vptr lookup', 'Understand impact on CPU branch prediction and inlining'] }
    ],
    notes: 'Every class with at least one virtual function has a hidden pointer (vptr) pointing to a vtable containing function pointers.',
    practiceQuestions: ['How does dynamic dispatch work at the machine assembly level using vtables?', 'Why does calling a virtual function usually prevent compiler inlining?']
  },
  {
    module: 'Module 2: Object-Oriented Programming',
    name: 'Abstraction',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Interfaces & Implementation Decoupling', tasks: ['Design clean public API surface', 'Hide complex internal algorithms behind simple methods'] }
    ],
    notes: 'Abstraction separates what an object does from how it does it.',
    practiceQuestions: ['How is abstraction distinguished from encapsulation in C++?', 'Design an abstracted Logger interface with file and console implementations.']
  },
  {
    module: 'Module 2: Object-Oriented Programming',
    name: 'Friend functions',
    importance: 'Low',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Friend Functions & Classes', tasks: ['Declare friend void debugPrint(const MyClass&)', 'Understand encapsulation trade-offs of friendship'] }
    ],
    notes: 'Friendship is not inherited, not transitive, and not reciprocal. Use sparingly, primarily for stream operators and unit tests.',
    practiceQuestions: ['Why is friendship not inherited in C++?', 'When is using a friend function justified over adding public getter methods?']
  },
  {
    module: 'Module 2: Object-Oriented Programming',
    name: 'Static members',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Static Data Members', tasks: ['Declare static int instanceCount in class', 'Define static member in .cpp file or use inline static (C++17)'] },
      { name: 'Static Member Functions', tasks: ['Call static methods via ClassName::method()', 'Understand lack of this pointer in static methods'] }
    ],
    notes: 'Static member functions do not possess a "this" pointer and can only access static members directly.',
    practiceQuestions: ['Why can a static member function not access non-static class members?', 'How did C++17 simplify defining static data members with inline?']
  },
  {
    module: 'Module 2: Object-Oriented Programming',
    name: 'Abstract classes',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Pure Virtual Functions', tasks: ['Declare virtual void draw() = 0', 'Verify that abstract classes cannot be directly instantiated'] },
      { name: 'Pure Abstract Interfaces', tasks: ['Create pure interface structs/classes', 'Implement all pure virtual methods in concrete subclasses'] }
    ],
    notes: 'A class with at least one pure virtual function (= 0) is an abstract class and cannot be instantiated.',
    practiceQuestions: ['What is the difference between an abstract class and a regular base class in C++?', 'Can an abstract class have a constructor? Why or why not?']
  },

  // Module 3: Modern C++11 (11 topics)
  {
    module: 'Module 3: Modern C++11',
    name: 'Auto keyword',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Type Deduction Rules', tasks: ['Use auto for complex iterator types', 'Understand auto vs auto& vs const auto&'] },
      { name: 'Trailing Return Types', tasks: ['Write auto add(int a, int b) -> int', 'Use decltype with auto'] }
    ],
    notes: 'The auto keyword deduces types at compile time. By default, auto strips const and reference qualifiers unless explicitly added.',
    practiceQuestions: ['What type is deduced by "auto x = my_vector.begin();"?', 'What happens if you assign a reference to an auto variable without &?']
  },
  {
    module: 'Module 3: Modern C++11',
    name: 'Range-based loops',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Iteration Syntax', tasks: ['Write for (const auto& item : container)', 'Modify elements using for (auto& item : container)'] },
      { name: 'Requirements for Iteration', tasks: ['Understand begin() and end() requirements for custom classes'] }
    ],
    notes: 'Always prefer for (const auto& x : container) to avoid expensive unintended copies.',
    practiceQuestions: ['Why is "for (auto x : vec)" inefficient for vectors of large objects?', 'What methods must a custom class define to support range-based for loops?']
  },
  {
    module: 'Module 3: Modern C++11',
    name: 'Lambda expressions',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 75,
    subtopics: [
      { name: 'Capture Clauses', tasks: ['Capture by value [=] and by reference [&]', 'Capture specific variables [x, &y]'] },
      { name: 'Generic Lambdas & Mutable', tasks: ['Use auto in lambda parameters (C++14)', 'Use mutable keyword to modify value captures'] }
    ],
    notes: 'Lambdas are anonymous function objects (functors) synthesized by the compiler with operator().',
    practiceQuestions: ['Explain the difference between [=], [&], and [this] capture modes.', 'Write a lambda to sort a vector of strings by length in descending order.']
  },
  {
    module: 'Module 3: Modern C++11',
    name: 'nullptr',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 30,
    subtopics: [
      { name: 'Type Safety of nullptr', tasks: ['Replace NULL and 0 with nullptr', 'Understand std::nullptr_t type'] }
    ],
    notes: 'nullptr has type std::nullptr_t, which resolves ambiguity in overloaded functions where NULL (macro for 0) matched int.',
    practiceQuestions: ['Show an overloaded function call where NULL causes ambiguous behavior but nullptr works correctly.', 'What is the type of nullptr?']
  },
  {
    module: 'Module 3: Modern C++11',
    name: 'Smart pointers',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 90,
    subtopics: [
      { name: 'std::unique_ptr', tasks: ['Use std::make_unique<T>', 'Transfer ownership with std::move'] },
      { name: 'std::shared_ptr & weak_ptr', tasks: ['Use std::make_shared<T>', 'Break circular references using std::weak_ptr'] }
    ],
    notes: 'Prefer std::unique_ptr by default (zero overhead). Use std::shared_ptr only when shared ownership is genuinely needed.',
    practiceQuestions: ['Why is std::make_unique preferred over "new" when creating a unique_ptr?', 'How does std::weak_ptr prevent cyclic reference memory leaks?']
  },
  {
    module: 'Module 3: Modern C++11',
    name: 'Move semantics',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 85,
    subtopics: [
      { name: 'Copy vs Move Philosophy', tasks: ['Understand resource stealing from temporaries', 'Implement move constructor and move assignment operator'] },
      { name: 'std::move Casting', tasks: ['Understand that std::move does not move anything, it casts to rvalue reference', 'Leave moved-from objects in valid but unspecified state'] }
    ],
    notes: 'Move semantics eliminates deep copies when transferring ownership from temporary (rvalue) objects.',
    practiceQuestions: ['What does std::move actually do under the hood?', 'What state must a moved-from object be left in according to standard guidelines?']
  },
  {
    module: 'Module 3: Modern C++11',
    name: 'Rvalue references',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'Lvalues vs Rvalues', tasks: ['Identify lvalues (named, persistent) vs rvalues (literals, temporary results)', 'Declare rvalue reference T&&'] },
      { name: 'Universal / Forwarding References', tasks: ['Understand template <typename T> void foo(T&& arg)', 'Use std::forward for perfect forwarding'] }
    ],
    notes: 'An lvalue has an identity and address you can take; an rvalue is an ephemeral value without persistent identity.',
    practiceQuestions: ['Is "x + 5" an lvalue or an rvalue? Explain why.', 'What is reference collapsing in C++ templates?']
  },
  {
    module: 'Module 3: Modern C++11',
    name: 'Initializer lists',
    importance: 'Medium',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'std::initializer_list', tasks: ['Write constructor taking std::initializer_list<T>', 'Initialize vectors and custom collections with {1, 2, 3}'] }
    ],
    notes: 'std::initializer_list provides access to an array of const T objects allocated on the stack by the compiler.',
    practiceQuestions: ['How do you enable brace-initialization for a custom container class?', 'Why are elements inside std::initializer_list always const?']
  },
  {
    module: 'Module 3: Modern C++11',
    name: 'Uniform initialization',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Braced Initialization', tasks: ['Use Type obj{args} consistently', 'Understand narrowing conversion prevention'] },
      { name: 'Most Vexing Parse Resolution', tasks: ['Resolve ambiguity between function declaration and object construction using braces'] }
    ],
    notes: 'Braced initialization prevents "the most vexing parse" (treating an object instantiation as a function prototype) and forbids narrowing conversions.',
    practiceQuestions: ['What is C++\'s "most vexing parse" and how does uniform initialization fix it?', 'Try initializing int x{3.14}; what does the compiler do?']
  },
  {
    module: 'Module 3: Modern C++11',
    name: 'constexpr',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Compile-Time Computation', tasks: ['Write constexpr functions', 'Declare constexpr variables for static array bounds'] },
      { name: 'constexpr vs const', tasks: ['Understand that all constexpr is const, but not all const is constexpr'] }
    ],
    notes: 'constexpr guarantees evaluation at compile time when all inputs are constant expressions, shifting computation to compile time.',
    practiceQuestions: ['Write a compile-time Fibonacci or factorial function using constexpr.', 'What is the difference between const and constexpr?']
  },
  {
    module: 'Module 3: Modern C++11',
    name: 'Deleted and defaulted functions',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: '= default Specifier', tasks: ['Explicitly request compiler-generated default constructor Class() = default;'] },
      { name: '= delete Specifier', tasks: ['Disallow copying with Class(const Class&) = delete;', 'Delete specific overloaded types to prevent implicit conversion'] }
    ],
    notes: 'Use = delete to make classes non-copyable or to prevent unwanted type promotions.',
    practiceQuestions: ['How do you make a class non-copyable in Modern C++?', 'Why is "= default" preferred over writing an empty body {} for a constructor?']
  },

  // Module 4: Exception Handling (8 topics)
  {
    module: 'Module 4: Exception Handling',
    name: 'Errors and exceptions',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Error Reporting Strategies', tasks: ['Compare error codes, std::optional/expected, and exceptions', 'Identify when exceptions are warranted'] }
    ],
    notes: 'Exceptions are for exceptional situations where a function cannot fulfill its contract. Do not use exceptions for routine control flow.',
    practiceQuestions: ['What are the advantages and disadvantages of exceptions versus error codes?', 'What does the noexcept specifier communicate to the compiler?']
  },
  {
    module: 'Module 4: Exception Handling',
    name: 'try block',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Guarded Code Scope', tasks: ['Enclose exception-prone operations in try {}', 'Understand function-try-blocks for constructors'] }
    ],
    notes: 'Keep try blocks minimal to clearly isolate the source of potential failures.',
    practiceQuestions: ['What happens to stack variables allocated inside a try block when an exception is thrown?', 'What is a function-try-block used for?']
  },
  {
    module: 'Module 4: Exception Handling',
    name: 'throw statement',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 35,
    subtopics: [
      { name: 'Throwing Exceptions', tasks: ['Throw standard and custom exception objects', 'Re-throw current exception with bare throw;'] }
    ],
    notes: 'Always throw exception objects by value and catch them by const reference.',
    practiceQuestions: ['Why should you use a bare "throw;" instead of "throw e;" when re-throwing an exception?', 'Can any type be thrown in C++?']
  },
  {
    module: 'Module 4: Exception Handling',
    name: 'catch block',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Catch by Const Reference', tasks: ['Write catch (const std::exception& e)', 'Prevent object slicing during exception handling'] }
    ],
    notes: 'Catching by value causes object slicing, stripping derived exception details and what() polymorphism.',
    practiceQuestions: ['What is exception slicing and why does catching by const reference prevent it?', 'What does the e.what() method return?']
  },
  {
    module: 'Module 4: Exception Handling',
    name: 'Multiple catch blocks',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Ordering Catch Handlers', tasks: ['Order handlers from most derived to most base class', 'Use catch (...) as catch-all fallback'] }
    ],
    notes: 'Always place more specific derived catch handlers before general base catch handlers.',
    practiceQuestions: ['Why does placing "catch (std::exception&)" before "catch (std::runtime_error&)" cause a compiler warning?', 'When should catch(...) be used?']
  },
  {
    module: 'Module 4: Exception Handling',
    name: 'Standard exceptions',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'std::exception Hierarchy', tasks: ['Review std::runtime_error vs std::logic_error', 'Study std::out_of_range, std::bad_alloc, std::invalid_argument'] }
    ],
    notes: 'Logic errors represent preventable programming bugs; runtime errors represent environmental and external failures.',
    practiceQuestions: ['Distinguish between std::logic_error and std::runtime_error.', 'Which standard exception is thrown when new fails to allocate memory?']
  },
  {
    module: 'Module 4: Exception Handling',
    name: 'Custom exceptions',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Inheriting from std::exception', tasks: ['Derive struct NetworkException : public std::runtime_error', 'Override const char* what() const noexcept'] }
    ],
    notes: 'Always inherit custom exceptions from std::runtime_error or std::exception so standard catch blocks can intercept them.',
    practiceQuestions: ['Write a custom DatabaseConnectionException class inheriting from std::runtime_error.', 'Why must the what() method be marked noexcept?']
  },
  {
    module: 'Module 4: Exception Handling',
    name: 'Exception propagation',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Stack Unwinding', tasks: ['Trace automatic destruction of local variables during unwinding', 'Ensure destructors never throw exceptions'] }
    ],
    notes: 'If a destructor throws an exception during stack unwinding while another exception is in flight, std::terminate() is called immediately.',
    practiceQuestions: ['What happens if a destructor throws an exception during stack unwinding?', 'What is the Strong Exception Guarantee?']
  },

  // Module 5: STL (16 topics)
  {
    module: 'Module 5: STL',
    name: 'Introduction to STL',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'STL Architecture', tasks: ['Understand containers, iterators, algorithms, and functors', 'Appreciate template-based generic programming'] }
    ],
    notes: 'The Standard Template Library separates data structures (containers) from operations (algorithms) through iterators as the bridge.',
    practiceQuestions: ['How do iterators decouple STL algorithms from specific container implementations?', 'What are the main categories of the STL?']
  },
  {
    module: 'Module 5: STL',
    name: 'Containers',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Sequence vs Associative vs Unordered', tasks: ['Classify vector, list, map, unordered_set', 'Choose optimal container based on access and insertion patterns'] }
    ],
    notes: 'Default to std::vector unless you have a concrete measured reason to use another container.',
    practiceQuestions: ['What is the container decision flowchart in C++?', 'Why is std::vector preferred over std::list for almost all use cases?']
  },
  {
    module: 'Module 5: STL',
    name: 'Vector',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Dynamic Resizing & Capacity', tasks: ['Differentiate size() vs capacity()', 'Use reserve() to prevent reallocations'] },
      { name: 'emplace_back vs push_back', tasks: ['Construct objects in-place with emplace_back', 'Understand iterator invalidation on vector reallocation'] }
    ],
    notes: 'Vector provides amortized O(1) push_back and contiguous memory. Call reserve() when the approximate element count is known.',
    practiceQuestions: ['What causes iterator invalidation in std::vector?', 'How does emplace_back avoid an extra temporary object copy compared to push_back?']
  },
  {
    module: 'Module 5: STL',
    name: 'List',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'std::list (Doubly-Linked)', tasks: ['Perform O(1) insertions/deletions anywhere with known iterator', 'Use splice() to transfer nodes without allocation'] },
      { name: 'std::forward_list', tasks: ['Use singly-linked forward_list for ultra-low memory overhead'] }
    ],
    notes: 'std::list elements are scattered across heap nodes, resulting in poor CPU cache locality compared to vector.',
    practiceQuestions: ['Under what specific circumstances is std::list actually faster than std::vector?', 'Does inserting into a std::list invalidate existing iterators?']
  },
  {
    module: 'Module 5: STL',
    name: 'Deque',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Double-Ended Queue Architecture', tasks: ['Understand chunked array architecture of deque', 'Perform O(1) push_front, push_back, and operator[]'] }
    ],
    notes: 'std::deque is implemented as an array of fixed-size chunks, allowing O(1) insertion at both ends without reallocating existing elements.',
    practiceQuestions: ['How does the memory layout of std::deque differ from std::vector?', 'When would you prefer std::deque over std::vector?']
  },
  {
    module: 'Module 5: STL',
    name: 'Stack',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'Container Adapter Semantics', tasks: ['Use push, pop, top, empty', 'Inspect default underlying container (std::deque)'] }
    ],
    notes: 'std::stack is an adapter providing LIFO (Last-In-First-Out) interface over an underlying container (defaults to deque).',
    practiceQuestions: ['Why does stack::pop() not return the popped value in C++?', 'How can you instantiate a std::stack that uses std::vector underneath?']
  },
  {
    module: 'Module 5: STL',
    name: 'Queue',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 40,
    subtopics: [
      { name: 'FIFO Operations', tasks: ['Use push, pop, front, back', 'Implement breadth-first traversal queue'] }
    ],
    notes: 'std::queue provides FIFO (First-In-First-Out) ordering over std::deque or std::list.',
    practiceQuestions: ['Which underlying container cannot be used with std::queue and why (vector)?', 'Write a producer-consumer task queue interface.']
  },
  {
    module: 'Module 5: STL',
    name: 'Priority queue',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Max-Heap & Min-Heap', tasks: ['Instantiate default max-heap', 'Create min-heap using std::greater<T>'] },
      { name: 'Custom Comparators', tasks: ['Write comparator struct for custom types in priority_queue'] }
    ],
    notes: 'std::priority_queue is a heap-based adapter over std::vector. Insertion and deletion are O(log N).',
    practiceQuestions: ['How do you configure std::priority_queue to act as a min-heap?', 'What is the time complexity of top(), push(), and pop() in priority_queue?']
  },
  {
    module: 'Module 5: STL',
    name: 'Set and multiset',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Ordered Red-Black Tree Sets', tasks: ['Insert unique elements into std::set', 'Allow duplicates with std::multiset'] },
      { name: 'Logarithmic Queries', tasks: ['Use lower_bound(), upper_bound(), equal_range()'] }
    ],
    notes: 'std::set stores sorted elements in a self-balancing binary search tree (Red-Black tree). Operations are O(log N).',
    practiceQuestions: ['What is the difference between set::find() and std::find()?', 'How do lower_bound() and upper_bound() work on a sorted set?']
  },
  {
    module: 'Module 5: STL',
    name: 'Map and multimap',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Key-Value Ordered Pairs', tasks: ['Use operator[] vs at() vs find()', 'Understand that operator[] inserts default value if key is missing'] }
    ],
    notes: 'std::map::operator[] inserts a default-constructed value if the key does not exist. Use find() or contains() for non-mutating lookups.',
    practiceQuestions: ['Why can map::operator[] not be called on a const map?', 'What is the time complexity of searching a key in std::map?']
  },
  {
    module: 'Module 5: STL',
    name: 'Unordered containers',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Hash Table Containers', tasks: ['Use std::unordered_map and std::unordered_set for O(1) average lookup', 'Inspect bucket_count and load_factor'] },
      { name: 'Custom Hash Functions', tasks: ['Specialise std::hash<T> or pass custom hash functor'] }
    ],
    notes: 'Unordered containers use hash tables with separate chaining. Average operations are O(1); worst case is O(N) during hash collisions.',
    practiceQuestions: ['Compare std::map vs std::unordered_map across time complexity and ordering guarantees.', 'How do you define a custom hash function for a struct?']
  },
  {
    module: 'Module 5: STL',
    name: 'Iterators',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Iterator Categories', tasks: ['Identify input, forward, bidirectional, and random access iterators', 'Use std::advance and std::distance'] },
      { name: 'Const & Reverse Iterators', tasks: ['Use cbegin(), cend(), rbegin(), rend()'] }
    ],
    notes: 'Random access iterators support pointer arithmetic (it + 5); bidirectional iterators only support ++ and --.',
    practiceQuestions: ['What iterator category does std::vector support vs std::list?', 'What is the difference between iterator and const_iterator?']
  },
  {
    module: 'Module 5: STL',
    name: 'Algorithms',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Standard Algorithm Header <algorithm>', tasks: ['Master std::for_each, std::transform, std::accumulate', 'Use std::count_if and std::all_of/any_of/none_of'] }
    ],
    notes: 'Prefer standard algorithms over raw loops: they are self-documenting, less bug-prone, and optimized by standard library maintainers.',
    practiceQuestions: ['Transform a vector of integers to their squares using std::transform.', 'Explain the purpose of std::accumulate with a custom binary operation.']
  },
  {
    module: 'Module 5: STL',
    name: 'Sorting',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'std::sort & Variants', tasks: ['Use std::sort (IntroSort: quicksort + heapsort + insertion sort)', 'Use std::stable_sort to preserve relative order of equal elements'] },
      { name: 'Partial Sorting', tasks: ['Use std::partial_sort and std::nth_element for top-k problems in O(N)'] }
    ],
    notes: 'std::sort runs in O(N log N) worst-case time using IntroSort. std::nth_element finds the k-th smallest element in O(N) average time.',
    practiceQuestions: ['What algorithm does std::sort use under the hood?', 'How does std::nth_element solve the Top-K elements problem in linear time?']
  },
  {
    module: 'Module 5: STL',
    name: 'Searching',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Linear & Binary Searches', tasks: ['Use std::find for unsorted collections (O(N))', 'Use std::binary_search and std::equal_range on sorted ranges (O(log N))'] }
    ],
    notes: 'Binary search functions require the range to already be partitioned/sorted. Passing an unsorted range results in undefined behavior.',
    practiceQuestions: ['What is the prerequisite for using std::binary_search?', 'How does std::equal_range combine lower_bound and upper_bound?']
  },
  {
    module: 'Module 5: STL',
    name: 'Lambda with STL',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 55,
    subtopics: [
      { name: 'Predicate Lambdas', tasks: ['Pass lambdas to std::sort, std::find_if, std::copy_if', 'Write stateful lambdas with mutable captures'] }
    ],
    notes: 'Lambdas are often inlined by the compiler directly into the STL algorithm loop, generating faster code than function pointers.',
    practiceQuestions: ['Filter all even numbers from a vector into a new vector using std::copy_if and a lambda.', 'Why can an STL algorithm with a lambda be faster than using a raw function pointer?']
  },

  // Module 6: Data Structures and Algorithms (19 topics)
  {
    module: 'Module 6: Data Structures and Algorithms',
    name: 'Time complexity',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Operation Counting & Asymptotics', tasks: ['Count basic operations across input size N', 'Analyze best, average, and worst cases'] }
    ],
    notes: 'Time complexity measures how execution time scales with input size, independent of hardware specifics.',
    practiceQuestions: ['What is the time complexity of traversing a 2D matrix of size M x N?', 'Explain the difference between worst-case and amortized time complexity.']
  },
  {
    module: 'Module 6: Data Structures and Algorithms',
    name: 'Space complexity',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Auxiliary Memory & Recursion Stack', tasks: ['Measure extra memory allocated beyond input data', 'Calculate recursive call stack space overhead'] }
    ],
    notes: 'Auxiliary space refers to extra space used by the algorithm, excluding the input data space.',
    practiceQuestions: ['What is the space complexity of quicksort and merge sort?', 'How does recursive call stack depth affect space complexity?']
  },
  {
    module: 'Module 6: Data Structures and Algorithms',
    name: 'Big O notation',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Order of Growth Scales', tasks: ['Compare O(1), O(log N), O(N), O(N log N), O(N^2), O(2^N)', 'Drop lower-order terms and leading coefficients'] }
    ],
    notes: 'Big O defines the mathematical upper bound on the asymptotic growth rate of a function.',
    practiceQuestions: ['Rank the following complexities from fastest to slowest: O(N log N), O(2^N), O(N^2), O(N!), O(1).', 'Why do we drop constant factors in Big O?']
  },
  {
    module: 'Module 6: Data Structures and Algorithms',
    name: 'Arrays',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Two-Pointer Technique', tasks: ['Implement opposite-direction pointers (Two Sum II)', 'Implement fast and slow pointers'] },
      { name: 'Sliding Window Pattern', tasks: ['Fixed-size sliding window (Max Subarray of size K)', 'Dynamic sliding window (Longest Substring Without Repeating Characters)'] }
    ],
    notes: 'Two pointers and sliding windows turn O(N^2) brute force array problems into linear O(N) solutions.',
    practiceQuestions: ['Solve Two Sum on a sorted array in O(N) time and O(1) space.', 'Explain how a sliding window maintains state across iterations.']
  },
  {
    module: 'Module 6: Data Structures and Algorithms',
    name: 'Strings',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'String Algorithms & Palindromes', tasks: ['Check valid palindromes with alphanumeric filtering', 'Count anagrams using frequency arrays'] },
      { name: 'Substrings & Prefix Trees', tasks: ['Generate string permutations and substrings', 'Learn Rabin-Karp / KMP pattern matching concepts'] }
    ],
    notes: 'Use a fixed-size frequency array int count[256] = {0} for O(1) space anagram and character counting.',
    practiceQuestions: ['Write an algorithm to check if two strings are anagrams of each other in O(N) time.', 'Implement string compression ("aabcccccaaa" -> "a2b1c5a3").']
  },
  {
    module: 'Module 6: Data Structures and Algorithms',
    name: 'Linked lists',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 75,
    subtopics: [
      { name: 'Singly & Doubly Linked List', tasks: ['Implement Node struct with next and prev pointers', 'Reverse a linked list iteratively and recursively'] },
      { name: 'Cycle Detection & Middle Finding', tasks: ['Implement Floyd\'s Tortoise and Hare cycle detection', 'Find middle node in a single pass'] }
    ],
    notes: 'Use a dummy head node to simplify edge cases when inserting or deleting at the front of a linked list.',
    practiceQuestions: ['Reverse a singly linked list in-place in O(N) time and O(1) space.', 'Explain Floyd\'s cycle-finding algorithm.']
  },
  {
    module: 'Module 6: Data Structures and Algorithms',
    name: 'Stacks',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Monotonic Stack Pattern', tasks: ['Solve Next Greater Element in O(N)', 'Solve Daily Temperatures problem'] },
      { name: 'Parentheses Matching & Evaluation', tasks: ['Validate balanced parentheses strings', 'Evaluate postfix / Reverse Polish Notation'] }
    ],
    notes: 'A monotonic stack maintains elements in strictly increasing or decreasing order to find nearest greater/smaller elements in linear time.',
    practiceQuestions: ['Implement a MinStack that supports push, pop, top, and retrieving min element in O(1) time.', 'Solve the Next Greater Element problem using a monotonic stack.']
  },
  {
    module: 'Module 6: Data Structures and Algorithms',
    name: 'Queues',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Circular Queue & Deque Implementation', tasks: ['Implement circular queue using array and modulo arithmetic', 'Track front and rear indices'] },
      { name: 'Monotonic Queue Pattern', tasks: ['Solve Sliding Window Maximum in O(N) using std::deque'] }
    ],
    notes: 'Circular queues use index = (index + 1) % capacity to wrap around array boundaries efficiently.',
    practiceQuestions: ['Implement a circular queue with array storage and boundary checks.', 'How does a monotonic deque solve the Sliding Window Maximum problem?']
  },
  {
    module: 'Module 6: Data Structures and Algorithms',
    name: 'Hash tables',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'Collision Resolution Mechanisms', tasks: ['Implement Separate Chaining with linked lists', 'Implement Open Addressing (Linear Probing, Quadratic Probing)'] },
      { name: 'Hash Function Design', tasks: ['Evaluate uniform distribution properties', 'Calculate load factor and implement rehashing'] }
    ],
    notes: 'When load factor exceeds 0.7 - 0.75, hash tables double their bucket count and rehash all elements to maintain O(1) speed.',
    practiceQuestions: ['Explain separate chaining vs open addressing collision resolution.', 'Why is prime number table sizing beneficial for modulo-based hashing?']
  },
  {
    module: 'Module 6: Data Structures and Algorithms',
    name: 'Trees',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 75,
    subtopics: [
      { name: 'Binary Tree Representation', tasks: ['Define TreeNode with left and right pointers', 'Calculate maximum depth and diameter'] },
      { name: 'Tree Traversals', tasks: ['Implement Preorder, Inorder, and Postorder traversals (recursive & iterative)', 'Implement Level-order (BFS) traversal'] }
    ],
    notes: 'Inorder traversal of a binary search tree visits nodes in sorted ascending order.',
    practiceQuestions: ['Implement iterative inorder traversal using an explicit stack.', 'Calculate the maximum depth (height) of a binary tree.']
  },
  {
    module: 'Module 6: Data Structures and Algorithms',
    name: 'Binary search trees',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 75,
    subtopics: [
      { name: 'BST Properties & Operations', tasks: ['Search, insert, and delete node in BST', 'Handle deletion with 0, 1, or 2 children (inorder successor)'] },
      { name: 'Validation & Balance', tasks: ['Validate BST with range boundaries (min, max)', 'Understand degenerate BST becoming linked list O(N)'] }
    ],
    notes: 'When deleting a node with two children, replace it with its inorder successor (smallest in right subtree) and recursively delete that node.',
    practiceQuestions: ['Implement node deletion in a Binary Search Tree.', 'Write a function to validate whether a binary tree satisfies the BST property.']
  },
  {
    module: 'Module 6: Data Structures and Algorithms',
    name: 'Heaps',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'Binary Heap Array Representation', tasks: ['Parent index (i-1)/2, children at 2i+1 and 2i+2', 'Implement heapify-up and heapify-down'] },
      { name: 'Build Heap & Heapsort', tasks: ['Build heap from array in O(N) time', 'Implement in-place Heapsort in O(N log N)'] }
    ],
    notes: 'Building a heap from an arbitrary array takes O(N) time using bottom-up sift-down, not O(N log N).',
    practiceQuestions: ['Why does building a binary heap take O(N) time instead of O(N log N)?', 'Implement heapify-down for a max-heap in C++.']
  },
  {
    module: 'Module 6: Data Structures and Algorithms',
    name: 'Graphs',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 85,
    subtopics: [
      { name: 'Graph Representations', tasks: ['Build Adjacency Matrix vs Adjacency List', 'Model directed, undirected, and weighted graphs'] },
      { name: 'Breadth-First & Depth-First Search', tasks: ['Implement BFS using queue and visited set', 'Implement DFS (recursive and iterative) to find connected components'] }
    ],
    notes: 'Adjacency lists use O(V + E) space and are preferred for sparse graphs; adjacency matrices use O(V^2) space.',
    practiceQuestions: ['Implement BFS to find shortest path in an unweighted graph.', 'Detect cycles in a directed graph using DFS and recursion stack tracking.']
  },
  {
    module: 'Module 6: Data Structures and Algorithms',
    name: 'Searching algorithms',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Binary Search Mastery', tasks: ['Implement left and right boundary binary search', 'Calculate mid safely with low + (high - low) / 2 to prevent overflow'] },
      { name: 'Binary Search on Answer Space', tasks: ['Solve Capacity To Ship Packages problem', 'Solve Koko Eating Bananas'] }
    ],
    notes: 'Always write mid = low + (high - low) / 2 instead of (low + high) / 2 to avoid integer overflow bugs.',
    practiceQuestions: ['Find first and last position of element in sorted array.', 'Explain how binary search can be applied to monotonic answer spaces.']
  },
  {
    module: 'Module 6: Data Structures and Algorithms',
    name: 'Sorting algorithms',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 75,
    subtopics: [
      { name: 'Comparison Sorts', tasks: ['Implement QuickSort with Lomuto or Hoare partitioning', 'Implement MergeSort with divide-and-conquer'] },
      { name: 'Non-Comparison Sorts', tasks: ['Implement Counting Sort and Radix Sort in O(N + K) time'] }
    ],
    notes: 'MergeSort is stable and guaranteed O(N log N) but requires O(N) extra space. QuickSort is in-place but O(N^2) in worst case with naive pivot.',
    practiceQuestions: ['Implement the partition step of QuickSort in C++.', 'Why is comparison-based sorting bounded by Omega(N log N) lower bound?']
  },
  {
    module: 'Module 6: Data Structures and Algorithms',
    name: 'Recursion',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'Divide and Conquer', tasks: ['Solve Tower of Hanoi', 'Analyze recursion trees and master theorem for T(n) = aT(n/b) + f(n)'] }
    ],
    notes: 'Master theorem provides asymptotic bounds for divide-and-conquer recurrences.',
    practiceQuestions: ['State the Master Theorem and apply it to MergeSort recurrence.', 'Solve Tower of Hanoi and count total moves for N disks.']
  },
  {
    module: 'Module 6: Data Structures and Algorithms',
    name: 'Backtracking',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 80,
    subtopics: [
      { name: 'State-Space Tree Exploration', tasks: ['Follow template: choose -> explore -> unchoose', 'Prune invalid branches early'] },
      { name: 'Classic Backtracking Problems', tasks: ['Solve N-Queens puzzle', 'Solve Sudoku solver and generate all subsets/permutations'] }
    ],
    notes: 'Backtracking systematically searches for solutions by abandoning candidate paths ("backtracking") as soon as they violate constraints.',
    practiceQuestions: ['Solve the N-Queens problem and return all distinct board configurations.', 'Generate all subsets of a given set of distinct integers.']
  },
  {
    module: 'Module 6: Data Structures and Algorithms',
    name: 'Greedy algorithms',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'Greedy Choice Property', tasks: ['Prove optimal substructure and greedy choice validity', 'Solve Activity Selection / Interval Scheduling'] },
      { name: 'Classic Greedy Problems', tasks: ['Solve Fractional Knapsack', 'Implement Huffman Coding compression concept'] }
    ],
    notes: 'A greedy algorithm makes the locally optimal choice at each stage in the hope of finding a global optimum.',
    practiceQuestions: ['Solve the Non-overlapping Intervals problem using greedy end-time sorting.', 'Why does the greedy approach work for fractional knapsack but fail for 0/1 knapsack?']
  },
  {
    module: 'Module 6: Data Structures and Algorithms',
    name: 'Dynamic programming',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 95,
    subtopics: [
      { name: 'Overlapping Subproblems & Optimal Substructure', tasks: ['Compare Memoization (top-down) vs Tabulation (bottom-up)', 'Space-optimize 1D/2D DP tables'] },
      { name: 'Core DP Patterns', tasks: ['0/1 Knapsack problem', 'Longest Common Subsequence (LCS) and Longest Increasing Subsequence (LIS)'] }
    ],
    notes: 'DP applies when subproblems overlap and exhibits optimal substructure. Define the state clearly: dp[i] = optimal answer up to index i.',
    practiceQuestions: ['Solve 0/1 Knapsack with memoization and then convert to bottom-up 1D space-optimized tabulation.', 'Find the length of the Longest Increasing Subsequence in O(N log N) time using patience sorting.']
  },

  // Module 7: Developer Skills (8 topics)
  {
    module: 'Module 7: Developer Skills',
    name: 'Git',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Version Control Fundamentals', tasks: ['Initialize git repository (git init)', 'Staging, committing, and inspecting history with git status and git log --oneline'] },
      { name: 'Branching & Merging', tasks: ['Create feature branches (git checkout -b / git switch -c)', 'Merge branches and resolve merge conflicts cleanly'] }
    ],
    notes: 'Commit early and often with concise imperative messages ("Fix memory leak in buffer parser").',
    practiceQuestions: ['What is the difference between git merge and git rebase?', 'How do you undo the last commit while keeping staged changes?']
  },
  {
    module: 'Module 7: Developer Skills',
    name: 'GitHub',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Remote Collaboration', tasks: ['Configure SSH keys and remote origins', 'Push and pull branches (git push -u origin main)'] },
      { name: 'Pull Requests & Code Review', tasks: ['Open pull requests with descriptive summaries', 'Conduct code reviews and manage GitHub Issues'] }
    ],
    notes: 'Maintain a clean GitHub profile with pinned repositories, well-structured READMEs, and CI badges.',
    practiceQuestions: ['How do you configure and test an SSH key for GitHub authentication?', 'What makes an exemplary open-source pull request description?']
  },
  {
    module: 'Module 7: Developer Skills',
    name: 'Linux fundamentals',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Shell Navigation & File Manipulation', tasks: ['Master ls, cd, cp, mv, rm, find, grep', 'Understand Unix permissions (chmod, chown)'] },
      { name: 'Process Management & Piping', tasks: ['Inspect processes with ps, top, kill', 'Combine commands with pipes | and redirection >, >>'] }
    ],
    notes: 'Systems development heavily relies on Linux. Practice terminal proficiency without relying on GUI file managers.',
    practiceQuestions: ['Explain the command: "grep -rnw \'TODO\' src/ | sort | head -n 5".', 'What do file permissions 755 and 644 mean in octal notation?']
  },
  {
    module: 'Module 7: Developer Skills',
    name: 'Debugging',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 65,
    subtopics: [
      { name: 'GDB & LLDB Debuggers', tasks: ['Compile with -g debug symbols', 'Set breakpoints, step through code (next, step), and inspect variables (print, display)'] },
      { name: 'Sanitizers & Valgrind', tasks: ['Compile with AddressSanitizer (-fsanitize=address,undefined)', 'Run Valgrind memcheck to locate heap leaks and invalid reads'] }
    ],
    notes: 'AddressSanitizer (ASan) catches buffer overflows, use-after-free, and stack bugs at runtime with minimal slowdown.',
    practiceQuestions: ['How do you compile a C++ program with AddressSanitizer enabled in GCC/Clang?', 'What GDB command prints a full stack backtrace when a segmentation fault occurs?']
  },
  {
    module: 'Module 7: Developer Skills',
    name: 'Compilation',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 50,
    subtopics: [
      { name: 'Compiler Flags & Optimizations', tasks: ['Understand -O0, -O2, -O3, -Os optimization levels', 'Set warning flags -Wall -Wextra -Wpedantic -Werror'] },
      { name: 'Header Inclusion & Header Guards', tasks: ['Use #pragma once or include guards', 'Prevent duplicate symbol linker errors'] }
    ],
    notes: 'Always compile with -Wall -Wextra -Wpedantic and treat warnings as errors (-Werror) during development.',
    practiceQuestions: ['Explain the difference between compile-time errors and linker errors.', 'What does -O3 optimization do and can it ever make debugging harder?']
  },
  {
    module: 'Module 7: Developer Skills',
    name: 'Build systems',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 70,
    subtopics: [
      { name: 'Make & Makefiles', tasks: ['Write Makefile with targets, dependencies, and rules', 'Use automatic variables ($@, $<, $^)'] },
      { name: 'Modern CMake', tasks: ['Write CMakeLists.txt with target_include_directories and target_link_libraries', 'Configure out-of-source builds (cmake -B build)'] }
    ],
    notes: 'Modern CMake uses targets (add_executable, target_link_libraries) rather than global variables.',
    practiceQuestions: ['Write a minimal CMakeLists.txt for a C++20 project linking a static library.', 'Why are out-of-source builds recommended in CMake?']
  },
  {
    module: 'Module 7: Developer Skills',
    name: 'Unit testing',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 60,
    subtopics: [
      { name: 'Testing Frameworks', tasks: ['Set up GoogleTest (gtest) or Catch2', 'Write test suites and test cases: TEST(Suite, Case)'] },
      { name: 'Assertions & Test Driven Development', tasks: ['Use EXPECT_EQ, ASSERT_TRUE, EXPECT_THROW', 'Practice TDD: write failing test -> implement -> pass -> refactor'] }
    ],
    notes: 'ASSERT_* stops the current test immediately upon failure; EXPECT_* records the failure and continues execution.',
    practiceQuestions: ['What is the difference between ASSERT_EQ and EXPECT_EQ in GoogleTest?', 'Explain the Red-Green-Refactor cycle in Test-Driven Development.']
  },
  {
    module: 'Module 7: Developer Skills',
    name: 'Writing clean code',
    importance: 'High',
    difficulty: 'Easy',
    estimatedMinutes: 45,
    subtopics: [
      { name: 'Naming & Function Design', tasks: ['Choose intention-revealing variable and function names', 'Limit functions to small, cohesive units'] },
      { name: 'Core Guidelines & Clang-Format', tasks: ['Follow C++ Core Guidelines', 'Enforce automatic code styling with .clang-format and clang-tidy'] }
    ],
    notes: 'Follow the C++ Core Guidelines maintained by Bjarne Stroustrup and Herb Sutter. Automate formatting with clang-format.',
    practiceQuestions: ['What are three key principles from the C++ Core Guidelines?', 'How does clang-tidy help prevent memory and security defects?']
  },

  // Module 8: Practical Projects (6 topics)
  {
    module: 'Module 8: Practical Projects',
    name: 'Calculator',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 120,
    subtopics: [
      { name: 'Expression Parsing & Tokenization', tasks: ['Lex input string into tokens (numbers, operators, parentheses)', 'Implement Shunting-Yard algorithm to convert infix to postfix'] },
      { name: 'Calculation Engine', tasks: ['Evaluate postfix expression using stack', 'Handle division by zero and invalid syntax errors gracefully'] }
    ],
    notes: 'Build an extensible command-line or expression calculator capable of handling operator precedence and parentheses.',
    practiceQuestions: ['How does Dijkstra\'s Shunting-Yard algorithm parse operator precedence?', 'How do you handle floating point rounding errors in a calculator?']
  },
  {
    module: 'Module 8: Practical Projects',
    name: 'Student management system',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 150,
    subtopics: [
      { name: 'Data Model & CRUD Operations', tasks: ['Design Student and Course classes with encapsulation', 'Implement Add, Search, Update, Delete student records'] },
      { name: 'File Persistence & Sorting', tasks: ['Serialize records to CSV/binary file and reload on startup', 'Sort students by GPA, Roll Number, or Name using STL algorithms'] }
    ],
    notes: 'Focus on clean separation between the user interface console layer, business logic manager, and file repository.',
    practiceQuestions: ['Design the class hierarchy for a Student Management System.', 'How do you implement binary file serialization in C++ using std::fstream?']
  },
  {
    module: 'Module 8: Practical Projects',
    name: 'Library management system',
    importance: 'High',
    difficulty: 'Medium',
    estimatedMinutes: 150,
    subtopics: [
      { name: 'Book & Patron Domain Logic', tasks: ['Track checkout dates, due dates, and fine calculations', 'Handle inventory tracking and reserve queues'] },
      { name: 'Polymorphic Item Catalog', tasks: ['Inherit Book, Magazine, DigitalMedia from base LibraryItem', 'Use smart pointers (std::unique_ptr<LibraryItem>) in repository'] }
    ],
    notes: 'Demonstrates runtime polymorphism, RAII, smart pointers, and exception-safe transaction management.',
    practiceQuestions: ['How do you model overdue fines calculation cleanly using OOP?', 'Why should the library catalog store std::unique_ptr<LibraryItem> instead of raw objects?']
  },
  {
    module: 'Module 8: Practical Projects',
    name: 'Banking application',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 180,
    subtopics: [
      { name: 'Account Hierarchy & Transactions', tasks: ['Create base Account with SavingsAccount and CheckingAccount derived classes', 'Implement thread-safe deposit, withdrawal, and transfer methods'] },
      { name: 'Audit Logging & Invariant Verification', tasks: ['Record transaction history with timestamps', 'Enforce balance invariants and throw InsufficientFundsException'] }
    ],
    notes: 'Simulate realistic financial integrity: prevent negative balances, protect against integer overflow, and record complete audit trails.',
    practiceQuestions: ['How do you ensure atomicity during a transfer between two bank accounts?', 'Why should financial calculations avoid binary floating point (double) in production?']
  },
  {
    module: 'Module 8: Practical Projects',
    name: 'Contact management system',
    importance: 'Medium',
    difficulty: 'Medium',
    estimatedMinutes: 120,
    subtopics: [
      { name: 'Contact Data Structures', tasks: ['Store contacts in std::map or Trie for prefix search', 'Implement fuzzy name search and phone number validation'] },
      { name: 'Import/Export & VCard Format', tasks: ['Export contacts to standard format', 'Support grouping (Family, Work, Favorites)'] }
    ],
    notes: 'Implements fast prefix searching using Trie or binary search on sorted std::vector.',
    practiceQuestions: ['How does a Trie data structure optimize prefix search for phone contacts?', 'What validation checks are essential for phone numbers and email addresses?']
  },
  {
    module: 'Module 8: Practical Projects',
    name: 'Data structure visualizer',
    importance: 'High',
    difficulty: 'Hard',
    estimatedMinutes: 180,
    subtopics: [
      { name: 'Visualizer Engine', tasks: ['Render ASCII or graphic steps for linked list insertions and tree rotations', 'Step-by-step execution playback for sorting algorithms'] },
      { name: 'Algorithm State Tracking', tasks: ['Maintain state snapshots across algorithm iterations', 'Visualize array comparisons and swaps in real-time'] }
    ],
    notes: 'Demonstrates deep algorithmic comprehension by recording and displaying intermediate states of BST, Heaps, and Sorting algorithms.',
    practiceQuestions: ['How do you capture snapshots of an algorithm\'s state without deep copying entire large structures?', 'Design a step-by-step controller that supports Next Step, Previous Step, and Play/Pause.']
  }
];

export const INITIAL_CPP_TOPICS: Topic[] = CPP_MODULES_RAW.map((raw, index) => {
  const seq = index + 1;
  const id = `cpp_topic_${seq}`;
  return {
    id,
    learningAreaId: 'la_cpp',
    learningAreaName: 'Programming Language — C++',
    subjectId: 'sub_cpp_core',
    subjectName: 'C++ Systems Engineering & Computer Architecture',
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
