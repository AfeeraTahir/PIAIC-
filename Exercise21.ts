const programmingLanguagesDetails: { name: string; year: number; paradigm: string[] }[] = [
    { name: "JavaScript", year: 1995, paradigm: ["OOP", "functional", "event-driven"] },
    { name: "Python", year: 1991, paradigm: ["OOP", "imperative", "functional"] },
    { name: "Java", year: 1995, paradigm: ["OOP", "imperative", "structured"] },
    { name: "C++", year: 1985, paradigm: ["OOP", "procedural"] },
    { name: "Ruby", year: 1995, paradigm: ["OOP", "imperative", "functional"] }
  ];
  
  // Print details for each programming language
  for (const language of programmingLanguagesDetails) {
    console.log(`${language.name} was created in ${language.year} and follows paradigms: ${language.paradigm.join(", ")}.`);
  }
export{};  