import { schema } from 'normalizr';


const episodeSchema = new schema.Entity('episodes');

export const episodesSchema = [episodeSchema];