import { writable } from 'svelte/store';
import { youtubeApiKey } from '../keys';
export let page = writable(1);
export let apiKey = writable(youtubeApiKey);
