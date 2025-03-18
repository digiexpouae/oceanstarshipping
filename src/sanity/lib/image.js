import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId:'6kvdqvro', dataset:'production' })

export const urlFor = (source) => {
  {console.log(source)}
  return builder.image(source).url()
}
