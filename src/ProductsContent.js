const products = [
  {
    id: 1,
    category: "Electronics",
    title: "Wireless Headphones",
    price: 2999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    description: "Experience high-quality sound without the wires. Perfect for music lovers and commuters."
  },
  {
    id: 2,
    category: "Fashion",
    title: "Classic Sneakers",
    price: 1999,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
    description: "Timeless design and comfort. These sneakers go with any outfit, any day."
  },
  {
    id: 3,
    category: "Books",
    title: "The Great Gatsby",
    price: 499,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    description: "A classic novel by F. Scott Fitzgerald, exploring themes of wealth, love, and the American Dream."
  },
  {
    id: 4,
    category: "Home",
    title: "Ceramic Vase",
    price: 799,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Elegant ceramic vase to enhance your home décor. Ideal for fresh or dried flowers."
  },
  {
    id: 5,
    category: "Electronics",
    title: "Smart Watch",
    price: 4999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    description: "Track your fitness, notifications, and more with this stylish smart watch."
  },
  {
    id: 6,
    category: "Fashion",
    title: "Leather Wallet",
    price: 899,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
    description: "Premium leather wallet with multiple compartments for cards and cash."
  },
  {
    id: 7,
    category: "Books",
    title: "Atomic Habits",
    price: 599,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400",
    description: "James Clear's bestselling guide to building good habits and breaking bad ones."
  },
  {
    id: 8,
    category: "Home",
    title: "Table Lamp",
    price: 1299,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
    description: "Modern table lamp for your study or bedside. Adjustable brightness."
  },
  {
    id: 9,
    category: "Electronics",
    title: "Bluetooth Speaker",
    price: 1599,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Portable Bluetooth speaker with powerful sound and long battery life."
  },
  {
    id: 10,
    category: "Fashion",
    title: "Denim Jacket",
    price: 2499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Classic denim jacket for a cool and casual look. Unisex fit."
  },
  {
    id: 11,
    category: "Books",
    title: "Sapiens",
    price: 699,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Yuval Noah Harari's sweeping history of humankind, from ancient times to today."
  },
  {
    id: 12,
    category: "Home",
    title: "Wall Clock",
    price: 599,
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400",
    description: "Minimalist wall clock to keep you on time and add style to your room."
  },
  {
    id: 13,
    category: "Electronics",
    title: "DSLR Camera",
    price: 29999,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
    description: "Capture stunning photos and videos with this high-resolution DSLR camera."
  },
  {
    id: 14,
    category: "Fashion",
    title: "Sunglasses",
    price: 799,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
    description: "Stylish sunglasses with UV protection for sunny days."
  },
  {
    id: 15,
    category: "Books",
    title: "Deep Work",
    price: 499,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Cal Newport's essential guide to focused success in a distracted world."
  },
  {
    id: 16,
    category: "Home",
    title: "Cushion Set",
    price: 999,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    description: "Soft and comfortable cushion set to add color and comfort to your sofa."
  },
  {
    id: 17,
    category: "Electronics",
    title: "Fitness Tracker",
    price: 1999,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
    description: "Monitor your health and activity with this sleek fitness tracker."
  },
  {
    id: 18,
    category: "Fashion",
    title: "Analog Watch",
    price: 1499,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400",
    description: "Elegant analog watch with a leather strap for a timeless look."
  },
  {
    id: 19,
    category: "Books",
    title: "The Alchemist",
    price: 399,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    description: "Paulo Coelho's inspiring tale about following your dreams."
  },
  {
    id: 20,
    category: "Home",
    title: "Floor Rug",
    price: 1799,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
    description: "Soft and durable floor rug to enhance the comfort and style of your living space."
  },
  {
    id: 21,
    category: "Electronics",
    title: "Noise Cancelling Earbuds",
    price: 2499,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
    description: "Enjoy immersive sound and block out distractions with these wireless earbuds."
  },
  {
    id: 22,
    category: "Fashion",
    title: "Cotton T-Shirt",
    price: 599,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Soft and breathable cotton t-shirt for everyday comfort."
  },
  {
    id: 23,
    category: "Books",
    title: "Educated",
    price: 699,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Tara Westover's memoir about family, education, and self-invention."
  },
  {
    id: 24,
    category: "Home",
    title: "Wooden Photo Frame",
    price: 399,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Classic wooden frame to display your favorite memories."
  },
  {
    id: 25,
    category: "Electronics",
    title: "Portable Charger",
    price: 999,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Keep your devices powered on the go with this compact power bank."
  },
  {
    id: 26,
    category: "Fashion",
    title: "Canvas Backpack",
    price: 1499,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    description: "Durable and stylish backpack for school, work, or travel."
  },
  {
    id: 27,
    category: "Books",
    title: "Becoming",
    price: 799,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Michelle Obama's inspiring memoir about her journey and legacy."
  },
  {
    id: 28,
    category: "Home",
    title: "Scented Candle",
    price: 299,
    image: "https://images.unsplash.com/photo-1603006905006-9e2c5b2c5b2c?w=400",
    description: "Fill your home with relaxing aromas using this long-lasting candle."
  },
  {
    id: 29,
    category: "Electronics",
    title: "USB Desk Fan",
    price: 499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Stay cool at your desk with this portable USB-powered fan."
  },
  {
    id: 30,
    category: "Fashion",
    title: "Woolen Scarf",
    price: 799,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Cozy woolen scarf to keep you warm in style."
  },
  {
    id: 31,
    category: "Electronics",
    title: "Wireless Mouse",
    price: 999,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    description: "Ergonomic wireless mouse for comfortable and precise navigation."
  },
  {
    id: 32,
    category: "Fashion",
    title: "Silk Scarf",
    price: 1299,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Luxurious silk scarf for a sophisticated look."
  },
  {
    id: 33,
    category: "Books",
    title: "The Power of Now",
    price: 599,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Eckhart Tolle's profound guide to living in the present moment."
  },
  {
    id: 34,
    category: "Home",
    title: "Glass Vase",
    price: 199,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Transparent glass vase for fresh flowers or decorative items."
  },
  {
    id: 35,
    category: "Electronics",
    title: "Portable Bluetooth Speaker",
    price: 1499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Compact and portable Bluetooth speaker for music on the go."
  },
  {
    id: 36,
    category: "Fashion",
    title: "Cashmere Sweater",
    price: 2999,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Soft and warm cashmere sweater for chilly days."
  },
  {
    id: 37,
    category: "Books",
    title: "The Subtle Art of Not Giving a F*ck",
    price: 699,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Mark Manson's controversial guide to living a more fulfilling life."
  },
  {
    id: 38,
    category: "Home",
    title: "Scented Candles Set",
    price: 499,
    image: "https://images.unsplash.com/photo-1603006905006-9e2c5b2c5b2c?w=400",
    description: "A set of three different scented candles for a relaxing home."
  },
  {
    id: 39,
    category: "Electronics",
    title: "USB-C Hub",
    price: 199,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    description: "Expand your USB-C port with this multi-function hub."
  },
  {
    id: 40,
    category: "Fashion",
    title: "Cashmere Scarf",
    price: 1499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Premium cashmere scarf for a luxurious feel."
  },
  {
    id: 41,
    category: "Books",
    title: "The 7 Habits of Highly Effective People",
    price: 799,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Stephen R. Covey's timeless guide to personal and professional effectiveness."
  },
  {
    id: 42,
    category: "Home",
    title: "Glass Jars",
    price: 199,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Set of glass jars for storing dry goods and kitchen supplies."
  },
  {
    id: 43,
    category: "Electronics",
    title: "Portable Mini Fan",
    price: 499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Small and portable USB-powered fan for quick cooling."
  },
  {
    id: 44,
    category: "Fashion",
    title: "Silk Scarf",
    price: 1299,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Luxurious silk scarf for a sophisticated look."
  },
  {
    id: 45,
    category: "Books",
    title: "The Power of Now",
    price: 599,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Eckhart Tolle's profound guide to living in the present moment."
  },
  {
    id: 46,
    category: "Home",
    title: "Glass Vase",
    price: 199,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Transparent glass vase for fresh flowers or decorative items."
  },
  {
    id: 47,
    category: "Electronics",
    title: "Portable Bluetooth Speaker",
    price: 1499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Compact and portable Bluetooth speaker for music on the go."
  },
  {
    id: 48,
    category: "Fashion",
    title: "Cashmere Sweater",
    price: 2999,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Soft and warm cashmere sweater for chilly days."
  },
  {
    id: 49,
    category: "Books",
    title: "The Subtle Art of Not Giving a F*ck",
    price: 699,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Mark Manson's controversial guide to living a more fulfilling life."
  },
  {
    id: 50,
    category: "Home",
    title: "Scented Candles Set",
    price: 499,
    image: "https://images.unsplash.com/photo-1603006905006-9e2c5b2c5b2c?w=400",
    description: "A set of three different scented candles for a relaxing home."
  },
  {
    id: 51,
    category: "Electronics",
    title: "USB-C Hub",
    price: 199,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    description: "Expand your USB-C port with this multi-function hub."
  },
  {
    id: 52,
    category: "Fashion",
    title: "Cashmere Scarf",
    price: 1499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Premium cashmere scarf for a luxurious feel."
  },
  {
    id: 53,
    category: "Books",
    title: "The 7 Habits of Highly Effective People",
    price: 799,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Stephen R. Covey's timeless guide to personal and professional effectiveness."
  },
  {
    id: 54,
    category: "Home",
    title: "Glass Jars",
    price: 199,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Set of glass jars for storing dry goods and kitchen supplies."
  },
  {
    id: 55,
    category: "Electronics",
    title: "Portable Mini Fan",
    price: 499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Small and portable USB-powered fan for quick cooling."
  },
  {
    id: 56,
    category: "Fashion",
    title: "Silk Scarf",
    price: 1299,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Luxurious silk scarf for a sophisticated look."
  },
  {
    id: 57,
    category: "Books",
    title: "The Power of Now",
    price: 599,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Eckhart Tolle's profound guide to living in the present moment."
  },
  {
    id: 58,
    category: "Home",
    title: "Glass Vase",
    price: 199,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Transparent glass vase for fresh flowers or decorative items."
  },
  {
    id: 59,
    category: "Electronics",
    title: "Portable Bluetooth Speaker",
    price: 1499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Compact and portable Bluetooth speaker for music on the go."
  },
  {
    id: 60,
    category: "Fashion",
    title: "Cashmere Sweater",
    price: 2999,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Soft and warm cashmere sweater for chilly days."
  },
  {
    id: 61,
    category: "Books",
    title: "The Subtle Art of Not Giving a F*ck",
    price: 699,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Mark Manson's controversial guide to living a more fulfilling life."
  },
  {
    id: 62,
    category: "Home",
    title: "Scented Candles Set",
    price: 499,
    image: "https://images.unsplash.com/photo-1603006905006-9e2c5b2c5b2c?w=400",
    description: "A set of three different scented candles for a relaxing home."
  },
  {
    id: 63,
    category: "Electronics",
    title: "USB-C Hub",
    price: 199,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    description: "Expand your USB-C port with this multi-function hub."
  },
  {
    id: 64,
    category: "Fashion",
    title: "Cashmere Scarf",
    price: 1499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Premium cashmere scarf for a luxurious feel."
  },
  {
    id: 65,
    category: "Books",
    title: "The 7 Habits of Highly Effective People",
    price: 799,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Stephen R. Covey's timeless guide to personal and professional effectiveness."
  },
  {
    id: 66,
    category: "Home",
    title: "Glass Jars",
    price: 199,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Set of glass jars for storing dry goods and kitchen supplies."
  },
  {
    id: 67,
    category: "Electronics",
    title: "Portable Mini Fan",
    price: 499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Small and portable USB-powered fan for quick cooling."
  },
  {
    id: 68,
    category: "Fashion",
    title: "Silk Scarf",
    price: 1299,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Luxurious silk scarf for a sophisticated look."
  },
  {
    id: 69,
    category: "Books",
    title: "The Power of Now",
    price: 599,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Eckhart Tolle's profound guide to living in the present moment."
  },
  {
    id: 70,
    category: "Home",
    title: "Glass Vase",
    price: 199,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Transparent glass vase for fresh flowers or decorative items."
  },
  {
    id: 71,
    category: "Electronics",
    title: "Portable Bluetooth Speaker",
    price: 1499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Compact and portable Bluetooth speaker for music on the go."
  },
  {
    id: 72,
    category: "Fashion",
    title: "Cashmere Sweater",
    price: 2999,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Soft and warm cashmere sweater for chilly days."
  },
  {
    id: 73,
    category: "Books",
    title: "The Subtle Art of Not Giving a F*ck",
    price: 699,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Mark Manson's controversial guide to living a more fulfilling life."
  },
  {
    id: 74,
    category: "Home",
    title: "Scented Candles Set",
    price: 499,
    image: "https://images.unsplash.com/photo-1603006905006-9e2c5b2c5b2c?w=400",
    description: "A set of three different scented candles for a relaxing home."
  },
  {
    id: 75,
    category: "Electronics",
    title: "USB-C Hub",
    price: 199,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    description: "Expand your USB-C port with this multi-function hub."
  },
  {
    id: 76,
    category: "Fashion",
    title: "Cashmere Scarf",
    price: 1499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Premium cashmere scarf for a luxurious feel."
  },
  {
    id: 77,
    category: "Books",
    title: "The 7 Habits of Highly Effective People",
    price: 799,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Stephen R. Covey's timeless guide to personal and professional effectiveness."
  },
  {
    id: 78,
    category: "Home",
    title: "Glass Jars",
    price: 199,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Set of glass jars for storing dry goods and kitchen supplies."
  },
  {
    id: 79,
    category: "Electronics",
    title: "Portable Mini Fan",
    price: 499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Small and portable USB-powered fan for quick cooling."
  },
  {
    id: 80,
    category: "Fashion",
    title: "Silk Scarf",
    price: 1299,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Luxurious silk scarf for a sophisticated look."
  },
  {
    id: 81,
    category: "Books",
    title: "The Power of Now",
    price: 599,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Eckhart Tolle's profound guide to living in the present moment."
  },
  {
    id: 82,
    category: "Home",
    title: "Glass Vase",
    price: 199,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Transparent glass vase for fresh flowers or decorative items."
  },
  {
    id: 83,
    category: "Electronics",
    title: "Portable Bluetooth Speaker",
    price: 1499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Compact and portable Bluetooth speaker for music on the go."
  },
  {
    id: 84,
    category: "Fashion",
    title: "Cashmere Sweater",
    price: 2999,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Soft and warm cashmere sweater for chilly days."
  },
  {
    id: 85,
    category: "Books",
    title: "The Subtle Art of Not Giving a F*ck",
    price: 699,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Mark Manson's controversial guide to living a more fulfilling life."
  },
  {
    id: 86,
    category: "Home",
    title: "Scented Candles Set",
    price: 499,
    image: "https://images.unsplash.com/photo-1603006905006-9e2c5b2c5b2c?w=400",
    description: "A set of three different scented candles for a relaxing home."
  },
  {
    id: 87,
    category: "Electronics",
    title: "USB-C Hub",
    price: 199,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    description: "Expand your USB-C port with this multi-function hub."
  },
  {
    id: 88,
    category: "Fashion",
    title: "Cashmere Scarf",
    price: 1499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Premium cashmere scarf for a luxurious feel."
  },
  {
    id: 89,
    category: "Books",
    title: "The 7 Habits of Highly Effective People",
    price: 799,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Stephen R. Covey's timeless guide to personal and professional effectiveness."
  },
  {
    id: 90,
    category: "Home",
    title: "Glass Jars",
    price: 199,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Set of glass jars for storing dry goods and kitchen supplies."
  },
  {
    id: 91,
    category: "Electronics",
    title: "Portable Mini Fan",
    price: 499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Small and portable USB-powered fan for quick cooling."
  },
  {
    id: 92,
    category: "Fashion",
    title: "Silk Scarf",
    price: 1299,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Luxurious silk scarf for a sophisticated look."
  },
  {
    id: 93,
    category: "Books",
    title: "The Power of Now",
    price: 599,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Eckhart Tolle's profound guide to living in the present moment."
  },
  {
    id: 94,
    category: "Home",
    title: "Glass Vase",
    price: 199,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Transparent glass vase for fresh flowers or decorative items."
  },
  {
    id: 95,
    category: "Electronics",
    title: "Portable Bluetooth Speaker",
    price: 1499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Compact and portable Bluetooth speaker for music on the go."
  },
  {
    id: 96,
    category: "Fashion",
    title: "Cashmere Sweater",
    price: 2999,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Soft and warm cashmere sweater for chilly days."
  },
  {
    id: 97,
    category: "Books",
    title: "The Subtle Art of Not Giving a F*ck",
    price: 699,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Mark Manson's controversial guide to living a more fulfilling life."
  },
  {
    id: 98,
    category: "Home",
    title: "Scented Candles Set",
    price: 499,
    image: "https://images.unsplash.com/photo-1603006905006-9e2c5b2c5b2c?w=400",
    description: "A set of three different scented candles for a relaxing home."
  },
  {
    id: 99,
    category: "Electronics",
    title: "USB-C Hub",
    price: 199,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    description: "Expand your USB-C port with this multi-function hub."
  },
  {
    id: 100,
    category: "Fashion",
    title: "Cashmere Scarf",
    price: 1499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Premium cashmere scarf for a luxurious feel."
  },
  {
    id: 101,
    category: "Books",
    title: "The 7 Habits of Highly Effective People",
    price: 799,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Stephen R. Covey's timeless guide to personal and professional effectiveness."
  },
  {
    id: 102,
    category: "Home",
    title: "Glass Jars",
    price: 199,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Set of glass jars for storing dry goods and kitchen supplies."
  },
  {
    id: 103,
    category: "Electronics",
    title: "Portable Mini Fan",
    price: 499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Small and portable USB-powered fan for quick cooling."
  },
  {
    id: 104,
    category: "Fashion",
    title: "Silk Scarf",
    price: 1299,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Luxurious silk scarf for a sophisticated look."
  },
  {
    id: 105,
    category: "Books",
    title: "The Power of Now",
    price: 599,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Eckhart Tolle's profound guide to living in the present moment."
  },
  {
    id: 106,
    category: "Home",
    title: "Glass Vase",
    price: 199,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Transparent glass vase for fresh flowers or decorative items."
  },
  {
    id: 107,
    category: "Electronics",
    title: "Portable Bluetooth Speaker",
    price: 1499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Compact and portable Bluetooth speaker for music on the go."
  },
  {
    id: 108,
    category: "Fashion",
    title: "Cashmere Sweater",
    price: 2999,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Soft and warm cashmere sweater for chilly days."
  },
  {
    id: 109,
    category: "Books",
    title: "The Subtle Art of Not Giving a F*ck",
    price: 699,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Mark Manson's controversial guide to living a more fulfilling life."
  },
  {
    id: 110,
    category: "Home",
    title: "Scented Candles Set",
    price: 499,
    image: "https://images.unsplash.com/photo-1603006905006-9e2c5b2c5b2c?w=400",
    description: "A set of three different scented candles for a relaxing home."
  },
  {
    id: 111,
    category: "Electronics",
    title: "USB-C Hub",
    price: 199,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    description: "Expand your USB-C port with this multi-function hub."
  },
  {
    id: 112,
    category: "Fashion",
    title: "Cashmere Scarf",
    price: 1499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Premium cashmere scarf for a luxurious feel."
  },
  {
    id: 113,
    category: "Books",
    title: "The 7 Habits of Highly Effective People",
    price: 799,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Stephen R. Covey's timeless guide to personal and professional effectiveness."
  },
  {
    id: 114,
    category: "Home",
    title: "Glass Jars",
    price: 199,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Set of glass jars for storing dry goods and kitchen supplies."
  },
  {
    id: 115,
    category: "Electronics",
    title: "Portable Mini Fan",
    price: 499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Small and portable USB-powered fan for quick cooling."
  },
  {
    id: 116,
    category: "Fashion",
    title: "Silk Scarf",
    price: 1299,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Luxurious silk scarf for a sophisticated look."
  },
  {
    id: 117,
    category: "Books",
    title: "The Power of Now",
    price: 599,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400",
    description: "Eckhart Tolle's profound guide to living in the present moment."
  },
  {
    id: 118,
    category: "Home",
    title: "Glass Vase",
    price: 199,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Transparent glass vase for fresh flowers or decorative items."
  },
  {
    id: 119,
    category: "Electronics",
    title: "Portable Bluetooth Speaker",
    price: 1499,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
    description: "Compact and portable Bluetooth speaker for music on the go."
  },
  {
    id: 120,
    category: "Home",
    title: "Decorative Wall Art",
    price: 1599,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    description: "Modern wall art to add a touch of elegance to your living space."
  }
];

export default products;