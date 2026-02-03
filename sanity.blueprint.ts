import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'

export default defineBlueprint({
  resources: [
    defineDocumentFunction({
      name: 'test-function',
      event: {
        on: ['create', 'update'],
        filter: `_type in ["global_subject", "global_article", "global_definition", "news", "page"] && delta::changedAny(slug.current)`,
        projection: `{
            _type,
            _id,
            url,
          }`,
          resource: {
            id: 'tq6w17ny.dev',
            type: 'dataset',
          }
      },
    }),
  ],
})