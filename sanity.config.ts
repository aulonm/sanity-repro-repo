import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'OBOS',

  projectId: 'tq6w17ny',
  dataset: 'dev',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  mediaLibrary: {
    enabled: true,
  },
  form: {
      // Disable the default for image assets
      image: {
        assetSources: (sources) =>
          sources.filter((source) => source.name !== 'sanity-default'),
      },
      // Disable the default for file assets
      file: {
        assetSources: (sources) =>
          sources.filter((source) => source.name !== 'sanity-default'),
      },
    },
})
