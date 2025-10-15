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
})
