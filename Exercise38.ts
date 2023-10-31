function describe_city(city: string, country: string = "USA"): void {
    console.log(`${city} is in ${country}.`);
  }
  
  // Calling the function for three different cities
  describe_city('Karachi', 'Pakistan');
  describe_city('New York');  // Default country is used
  describe_city('Paris', 'France');
export{};  