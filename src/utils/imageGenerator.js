import { getApiKey } from '../config.js';

// Function to generate image for a single product
export async function generateProductImage(productTitle, productCategory) {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    console.error('API key not found. Please check your .env file.');
    return null;
  }

  // Create a more specific and descriptive prompt based on product title and category
  let prompt = '';
  
  if (productCategory === 'Electronics') {
    prompt = `Professional product photography of ${productTitle}, modern electronics, clean white background, high quality commercial product image, studio lighting, 512x512, product showcase`;
  } else if (productCategory === 'Fashion') {
    prompt = `Professional fashion photography of ${productTitle}, stylish clothing or accessory, clean white background, high quality commercial product image, fashion photography, 512x512, product showcase`;
  } else if (productCategory === 'Books') {
    prompt = `Professional book photography of ${productTitle}, book cover or reading scene, clean white background, high quality commercial product image, book photography, 512x512, product showcase`;
  } else if (productCategory === 'Home') {
    prompt = `Professional home decor photography of ${productTitle}, home and garden item, clean white background, high quality commercial product image, interior photography, 512x512, product showcase`;
  } else {
    prompt = `Professional product photography of ${productTitle}, ${productCategory} category, clean white background, high quality commercial product image, 512x512, product showcase`;
  }

  try {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: prompt,
        n: 1,
        size: '512x512',
        quality: 'standard',
        response_format: 'url'
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    return data.data[0].url;
  } catch (error) {
    console.error(`Error generating image for ${productTitle}:`, error);
    return null;
  }
}

// Function to generate images for all products
export async function generateAllProductImages(products) {
  const updatedProducts = [];
  
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(`Generating image for product ${i + 1}/${products.length}: ${product.title}`);
    
    const imageUrl = await generateProductImage(product.title, product.category);
    
    if (imageUrl) {
      updatedProducts.push({
        ...product,
        image: imageUrl
      });
      console.log(`✅ Generated image for: ${product.title}`);
    } else {
      // Keep original image if generation fails
      updatedProducts.push(product);
      console.log(`❌ Failed to generate image for: ${product.title}`);
    }
    
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  return updatedProducts;
}

// Function to generate images for specific products
export async function generateImagesForProducts(products, startIndex = 0, endIndex = null) {
  const targetProducts = endIndex ? products.slice(startIndex, endIndex) : products.slice(startIndex);
  const updatedProducts = [...products];
  
  for (let i = 0; i < targetProducts.length; i++) {
    const product = targetProducts[i];
    const actualIndex = startIndex + i;
    
    console.log(`Generating image for product ${actualIndex + 1}/${products.length}: ${product.title}`);
    
    const imageUrl = await generateProductImage(product.title, product.category);
    
    if (imageUrl) {
      updatedProducts[actualIndex] = {
        ...product,
        image: imageUrl
      };
      console.log(`✅ Generated image for: ${product.title}`);
    } else {
      console.log(`❌ Failed to generate image for: ${product.title}`);
    }
    
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  return updatedProducts;
}

// Function to update ProductsContent.js file with new images
export function updateProductsFile(updatedProducts) {
  const productsData = `const products = ${JSON.stringify(updatedProducts, null, 2)};\n\nexport default products;`;
  
  // Create a downloadable file
  const blob = new Blob([productsData], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'ProductsContent_updated.js';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  console.log('📁 Downloaded updated products file');
  return productsData;
}

// Function to generate and immediately update products (for testing)
export async function generateAndUpdateProducts(startIndex = 0, count = 5) {
  const products = await import('../ProductsContent.js').then(module => module.default);
  const endIndex = startIndex + count;
  
  console.log(`🔄 Generating images for products ${startIndex + 1} to ${endIndex}...`);
  
  const updatedProducts = await generateImagesForProducts(products, startIndex, endIndex);
  
  // Update the file
  updateProductsFile(updatedProducts);
  
  return updatedProducts;
} 