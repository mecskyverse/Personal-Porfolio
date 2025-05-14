import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


const projectId = import.meta.env.VITE_PROJECT_ID;
const dataset = 'production';

// Create the client
export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2023-05-03',
  useCdn: true,
  token: import.meta.env.VITE_PROJECT_TOKEN,
});


// Create the builder
const builder = imageUrlBuilder({
  projectId,
  dataset,
});

export const urlFor = (source) => {
  if (!source || !source.asset) {
    console.warn('Invalid image source:', source);
    return '';
  }
  
  // Note: We're directly instantiating the builder with the configuration
  try {
    return builder.image(source).url();
  } catch (error) {
    console.error('Error building URL:', error);
    return '';
  }
}