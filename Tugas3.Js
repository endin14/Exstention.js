const restaurant = {
    name: "Nama Restoran",
    city: "Nama Kota",
    favoriteDrink: "Minuman Favorit",
    favoriteFood: "Makanan Favorit",
    isVegan: true
  };
  
  const restaurants = [
    {
      name: "Rumah Makan Bumi Rasa",
      city: "Sukabumi ",
      favoriteDrink: "Es leci",
      favoriteFood: "Ikan Gurame Bakar",
      isVegan: true
    },
    {
      name: "RM Slera Abadi",
      city: "Solara",
      favoriteDrink: "Es Teh Tawar",
      favoriteFood: "Opor Ayam ",
      isVegan: false
    }
  ];
  
  // Menampilkan informasi restoran objek
  console.log("Informasi Restoran Objek:");
  console.log("Nama Restoran:", restaurant.name);
  console.log("Kota:", restaurant.city);
  console.log("Minuman Favorit:", restaurant.favoriteDrink);
  console.log("Makanan Favorit:", restaurant.favoriteFood);
  console.log("Vegan:", restaurant.isVegan ? "Ya" : "Tidak");
  
  // Menampilkan informasi restoran dari array
  console.log("\nInformasi Restoran Array:");
  restaurants.forEach(function(restaurant, index) {
    console.log("Restoran ke-" + (index + 1));
    console.log("Nama Restoran:", restaurant.name);
    console.log("Kota:", restaurant.city);
    console.log("Minuman Favorit:", restaurant.favoriteDrink);
    console.log("Makanan Favorit:", restaurant.favoriteFood);
    console.log("Vegan:", restaurant.isVegan ? "Ya" : "Tidak");
    console.log("\n");
  });