import { defineType } from 'sanity';
import { defineVideoField } from 'sanity/media-library';

export const testDocument = defineType({
  type: 'document',
  name: 'test',
  title: 'Test document',

  preview: {
    select: {
      title: 'title',
    },
  },

  fields: [
    defineVideoField({
      name: 'videoField',
      title: 'Video',
    }),
  ],
});
