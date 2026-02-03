import { createClient } from '@sanity/client';
import { documentEventHandler } from '@sanity/functions';
import pThrottle from 'p-throttle';

const PAGE_URL_QUERY = `*[_type == "page" && _id == $id] {
  _type,
  _id,
  title,
  slug,
  site,
}`;

const BATCH_SIZE = 10;

const throttle = pThrottle({
  limit: 20,
  interval: 1000,
});

/**
 * Updates URLs for a batch of documents, replacing old slug with new slug
 */
export const handler = documentEventHandler(async ({ context, event }) => {
  const { local } = context;
  const data = event.data;

  const client = createClient({
    ...context.clientOptions,
    useCdn: false,
    perspective: 'raw',
    apiVersion: '2025-05-17',
  });

  const query = PAGE_URL_QUERY;
  const documents = await client.fetch(query, { id: data._id });

  console.log(documents);
});

