import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
//   projectId :'6kvdqvro', // Replace with actual Project ID
// dataset :'production' ,// Example: 'production'
// apiVersion : "2025-03-12", ,
apiVersion:NEXT_PUBLIC_SANITY_API_VERSION, dataset:NEXT_PUBLIC_SANITY_DATASET, projectId:NEXT_PUBLIC_SANITY_PROJECT_ID,

  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
