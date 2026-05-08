import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://kb-figma-t2qh.onrender.com',
  headers: {
    'Content-Type': 'application/json'
  }
})
