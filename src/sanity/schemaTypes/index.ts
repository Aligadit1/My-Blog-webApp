import { type SchemaTypeDefinition } from 'sanity'
import { webName } from './Name'
import { aboutData } from './about'
import singleBlogSchema from './singleBlog'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [webName,aboutData,singleBlogSchema],
}
