function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`You have ordered a ${size} shirt with the message: "${message}".`);
  }
  
  // Creating shirts using the default message
  make_shirt();  // Large shirt with default message
  make_shirt('Medium');  // Medium shirt with default message
  
  // Creating a shirt with a different message
  make_shirt('Small', 'Hello, World!');  // Small shirt with a different message
export{};  