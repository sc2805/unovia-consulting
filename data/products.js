const products = [
  {
    id: "p001",
    name: "Organic Bananas",
    category: "Fruits",
    price: 1.49,
    unit: "bunch",
    image: "🍌",
    description: "Fresh organic bananas, perfectly ripened. Rich in potassium and naturally sweet.",
    inStock: true,
    rating: 4.7
  },
  {
    id: "p002",
    name: "Red Apples",
    category: "Fruits",
    price: 3.99,
    unit: "kg",
    image: "🍎",
    description: "Crispy, juicy red apples. Perfect for snacking, baking, or salads.",
    inStock: true,
    rating: 4.5
  },
  {
    id: "p003",
    name: "Fresh Strawberries",
    category: "Fruits",
    price: 4.99,
    unit: "pack",
    image: "🍓",
    description: "Sweet and fragrant strawberries picked at peak ripeness.",
    inStock: true,
    rating: 4.8
  },
  {
    id: "p004",
    name: "Avocado",
    category: "Fruits",
    price: 2.49,
    unit: "each",
    image: "🥑",
    description: "Creamy Hass avocados, perfect for guacamole or toast.",
    inStock: true,
    rating: 4.6
  },
  {
    id: "p005",
    name: "Fresh Broccoli",
    category: "Vegetables",
    price: 2.29,
    unit: "head",
    image: "🥦",
    description: "Crisp, green broccoli florets packed with vitamins and fiber.",
    inStock: true,
    rating: 4.3
  },
  {
    id: "p006",
    name: "Baby Spinach",
    category: "Vegetables",
    price: 3.49,
    unit: "bag",
    image: "🥬",
    description: "Tender baby spinach leaves, pre-washed and ready for salads or smoothies.",
    inStock: true,
    rating: 4.4
  },
  {
    id: "p007",
    name: "Sweet Carrots",
    category: "Vegetables",
    price: 1.99,
    unit: "kg",
    image: "🥕",
    description: "Crunchy, naturally sweet carrots. Great raw, steamed, or roasted.",
    inStock: true,
    rating: 4.2
  },
  {
    id: "p008",
    name: "Cherry Tomatoes",
    category: "Vegetables",
    price: 3.29,
    unit: "pack",
    image: "🍅",
    description: "Bite-sized, vine-ripened cherry tomatoes bursting with flavor.",
    inStock: true,
    rating: 4.5
  },
  {
    id: "p009",
    name: "Whole Milk",
    category: "Dairy",
    price: 4.29,
    unit: "gallon",
    image: "🥛",
    description: "Farm-fresh whole milk, pasteurized and homogenized. Rich and creamy.",
    inStock: true,
    rating: 4.6
  },
  {
    id: "p010",
    name: "Greek Yogurt",
    category: "Dairy",
    price: 5.99,
    unit: "tub",
    image: "🫙",
    description: "Thick, protein-rich Greek yogurt. Plain flavor, perfect with fruit or honey.",
    inStock: true,
    rating: 4.7
  },
  {
    id: "p011",
    name: "Cheddar Cheese",
    category: "Dairy",
    price: 6.49,
    unit: "block",
    image: "🧀",
    description: "Sharp aged cheddar cheese. Ideal for sandwiches, gratins, or snacking.",
    inStock: true,
    rating: 4.5
  },
  {
    id: "p012",
    name: "Free-Range Eggs",
    category: "Dairy",
    price: 5.49,
    unit: "dozen",
    image: "🥚",
    description: "Farm-fresh free-range eggs with rich golden yolks.",
    inStock: true,
    rating: 4.8
  },
  {
    id: "p013",
    name: "Sourdough Bread",
    category: "Bakery",
    price: 4.99,
    unit: "loaf",
    image: "🍞",
    description: "Freshly baked artisan sourdough with a crispy crust and tangy flavor.",
    inStock: true,
    rating: 4.9
  },
  {
    id: "p014",
    name: "Croissants",
    category: "Bakery",
    price: 3.99,
    unit: "pack of 4",
    image: "🥐",
    description: "Flaky, buttery French croissants. Perfect for breakfast or brunch.",
    inStock: true,
    rating: 4.7
  },
  {
    id: "p015",
    name: "Chicken Breast",
    category: "Meat",
    price: 8.99,
    unit: "kg",
    image: "🍗",
    description: "Boneless, skinless chicken breast. Lean protein, versatile for any meal.",
    inStock: true,
    rating: 4.4
  },
  {
    id: "p016",
    name: "Atlantic Salmon",
    category: "Meat",
    price: 12.99,
    unit: "fillet",
    image: "🐟",
    description: "Fresh Atlantic salmon fillet, rich in omega-3 fatty acids.",
    inStock: true,
    rating: 4.8
  },
  {
    id: "p017",
    name: "Ground Beef",
    category: "Meat",
    price: 7.99,
    unit: "kg",
    image: "🥩",
    description: "Premium ground beef, 85% lean. Perfect for burgers, meatballs, or tacos.",
    inStock: true,
    rating: 4.3
  },
  {
    id: "p018",
    name: "Olive Oil",
    category: "Pantry",
    price: 9.99,
    unit: "bottle",
    image: "🫒",
    description: "Extra virgin olive oil, cold-pressed from Mediterranean olives.",
    inStock: true,
    rating: 4.9
  },
  {
    id: "p019",
    name: "Basmati Rice",
    category: "Pantry",
    price: 6.49,
    unit: "2kg bag",
    image: "🍚",
    description: "Premium aged basmati rice with long, fluffy grains.",
    inStock: true,
    rating: 4.6
  },
  {
    id: "p020",
    name: "Pasta Penne",
    category: "Pantry",
    price: 2.99,
    unit: "pack",
    image: "🍝",
    description: "Bronze-cut Italian penne pasta made from durum wheat semolina.",
    inStock: true,
    rating: 4.4
  },
  {
    id: "p021",
    name: "Orange Juice",
    category: "Beverages",
    price: 4.49,
    unit: "carton",
    image: "🍊",
    description: "Freshly squeezed orange juice, no added sugar or preservatives.",
    inStock: true,
    rating: 4.5
  },
  {
    id: "p022",
    name: "Green Tea",
    category: "Beverages",
    price: 5.99,
    unit: "box of 20",
    image: "🍵",
    description: "Premium Japanese green tea bags. Delicate, earthy, and antioxidant-rich.",
    inStock: true,
    rating: 4.7
  },
  {
    id: "p023",
    name: "Dark Chocolate",
    category: "Pantry",
    price: 3.49,
    unit: "bar",
    image: "🍫",
    description: "72% cacao dark chocolate, smooth and richly flavored.",
    inStock: true,
    rating: 4.8
  },
  {
    id: "p024",
    name: "Honey",
    category: "Pantry",
    price: 7.99,
    unit: "jar",
    image: "🍯",
    description: "Raw, unfiltered wildflower honey. Natural sweetener with floral notes.",
    inStock: true,
    rating: 4.9
  }
];

module.exports = products;
