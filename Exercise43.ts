function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `${magician} the Great`);
  }
  
  // Original array of magician's names
  const magicianNames: string[] = ['Hamid', 'Danial', 'Rehman', 'Tahir'];
  
  // Copying the original array to avoid modification
  const originalMagicianNames: string[] = magicianNames.slice();
  
  // Modifying a copy of the array to include "the Great"
  const greatMagicianNames: string[] = make_great(originalMagicianNames);
  
  // Function to display magicians with their modified names
  function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  // Displaying the original array (unchanged)
  console.log('Original Magician Names:');
  show_magicians(magicianNames);
  
  console.log(); // Adding a line break for clarity
  
  // Displaying the modified array with "the Great" added
  console.log('Modified Magician Names:');
  show_magicians(greatMagicianNames);
  export{};