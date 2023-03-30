import { writable } from 'svelte/store'

const config = writable({
  backendURL: "http://192.168.137.1:5000",
  // backendURL: "http://localhost:5000",
  currentUser: null,
});

export default config;