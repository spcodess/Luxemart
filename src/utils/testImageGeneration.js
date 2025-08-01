import { generateProductImage } from './imageGenerator.js';

// Test function to generate images for first 5 products
export async function testImageGeneration() {
  const testProducts = [
    { title: "Wireless Headphones", category: "Electronics" },
    { title: "Classic Sneakers", category: "Fashion" },
    { title: "The Great Gatsby", category: "Books" },
    { title: "Ceramic Vase", category: "Home" },
    { title: "Smart Watch", category: "Electronics" }
  ];

  console.log('🧪 Testing image generation for 5 products...');
  
  for (let i = 0; i < testProducts.length; i++) {
    const product = testProducts[i];
    console.log(`\n📸 Generating image for: ${product.title}`);
    
    try {
      const imageUrl = await generateProductImage(product.title, product.category);
      
      if (imageUrl) {
        console.log(`✅ Success! Image URL: ${imageUrl}`);
      } else {
        console.log(`❌ Failed to generate image for: ${product.title}`);
      }
    } catch (error) {
      console.log(`❌ Error generating image for ${product.title}:`, error.message);
    }
    
    // Wait 2 seconds between requests to avoid rate limiting
    if (i < testProducts.length - 1) {
      console.log('⏳ Waiting 2 seconds...');
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  console.log('\n🎉 Test completed!');
}

// Run test if this file is executed directly
if (typeof window !== 'undefined') {
  // Browser environment
  window.testImageGeneration = testImageGeneration;
} else {
  // Node.js environment
  testImageGeneration();
} 