import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

function parsePrefixes(prefixStr) {
  if (!prefixStr || prefixStr.trim() === '' || prefixStr.toLowerCase() === 'none') return []
  return prefixStr.split(',').map(p => p.trim()).filter(Boolean)
}

function parseBoolean(value) {
  if (typeof value === 'string') {
    return value.toLowerCase() === 'on' || value.toLowerCase() === 'true' || value === '1'
  }
  return Boolean(value)
}

function parseLids(lidStr) {
  if (!lidStr || lidStr.trim() === '') return []
  return lidStr.split(',').map(l => l.trim()).filter(Boolean)
}

function parseMenuImages(menuImagesStr) {
  if (!menuImagesStr || menuImagesStr.trim() === '') return []
  return menuImagesStr.split(',').map(img => img.trim()).filter(Boolean)
}

const CONFIG = {
  MODE: process.env.MODE || 'private',
  PREFIXES: parsePrefixes(process.env.PREFIXES),
  PORT: parseInt(process.env.PORT) || 3000,
  SESSION: process.env.SESSION || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUtGMVExaFlYdVd1SnFBZ0dtK3lEcHptVjFYNXBOZGYzL2RacERRQWtXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVG1aaytzOXo5R21pN1lKNEUvL09ZVC9jYnVlT09tRjVwZHR3bzZua20zQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQzhLR1hlcXYvaEd3RVVPRVYxVWJ3bkxxZ3ptb3hRVnQ4YnNpTkFOR0h3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2WGNLQXFlZi9sTXdMT3RFRkZ6OFBzSXpUb0tQR25sSlVrWXJIWGJodms4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNFaWRvUUdUZ25ISWpyejFXbmZSV29DWmg1RGdZUHpKMmxDeUNQaExjSEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlhTEI0U25NTVNWL25DdUMwb0FHWlRsS0c0SW5JM3dqeXRFdGJycloreHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVpdzdxUDBTK1BiRVVoTHBtUWl2ZE04N3hVZFM0d1RuTFdyZ1Eya1ZWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHdIbmY2ejdRNFpWN3dESmRQN09raVBFb3B1QjFSOHNhdkU2K25wTnFnST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBhMEJFUzBBcVNlNDF5TlRxdkhYN1piV2ZNN2lYUE9CUWc5QVdDYXVUSHhkSlpQZXJDMHJMMmNLcGM4YWF2SHZBbVV2YzJZRUluN2dwUTI5MWtFV0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYxLCJhZHZTZWNyZXRLZXkiOiJRS2FXOVNPcnJyemJvUmJGMjV4Mzh1M3gvOWxpalJmMVZuU3Y0WGRpd2lrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI3S0s2N1I5MyIsIm1lIjp7ImlkIjoiMjU0NzA3NDc1ODEzOjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8JOBj0NPREUgUEhBTlRPTfCTgY9cblxuXG5cblxuXG5cblxuXG5cblxu8JOAkPCTgJHwk4CQXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbvCTgIfwk4CDXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxu8JOJo/CTgIgiLCJsaWQiOiIxNTgyMzQ4MTYxODY3MToxQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUEd3M3U0R0VLYitqOVlHR0FNZ0FTZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoib1RUYk42TjA2Y0dncUIyd0lLcExiZEJlNkErQWFYUTVBVk4yb2lMaElqOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMFhNSHIxWjg2eUthWmd6OGFhZkl0UDljMkJoQzR4a3FKa0JyZ0xDMEZpd0RGc1Q4MmcreHgyWG1aQnZxZkFpU05pbVN2LzgwaWpmeWFFOVRaenp4QVE9PSIsImRldmljZVNpZ25hdHVyZSI6IldtRVI1a0szZWdQMmdrQjlsMXpXS2hXanBGUmR1bGFwMGRTZStGMmQ4aEloa0QrM2lqSE9ZR2RNWkVYTFB2YUNSZjA1UVBER1Y2b1VOTlJDYlR3UUJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzA3NDc1ODEzOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYUUwMnplamRPbkJvS2dkc0NDcVMyM1FYdWdQZ0dsME9RRlRkcUlpNFNJLyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRZ0kifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzkxMjI5NzQzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFlMyJ9",
  TZ: process.env.TZ || 'Africa/Nairobi',
  ANTICALL: parseBoolean(process.env.ANTICALL || 'off'),
  ANTIDELETE: parseBoolean(process.env.ANTIDELETE || 'on'),
  ANTIEDIT: parseBoolean(process.env.ANTIEDIT || 'on'),
  AUTO_READ: parseBoolean(process.env.AUTO_READ || 'off'),
  AUTO_VIEW: parseBoolean(process.env.AUTO_VIEW || 'on'),
  AUTO_LIKE: parseBoolean(process.env.AUTO_LIKE || 'on'),
  DM_PRESENCE: process.env.DM_PRESENCE || '',
  GRP_PRESENCE: process.env.GRP_PRESENCE || '',
  USER_LID: parseLids(process.env.USER_LID || ''),
  OWNER_NUMBER: process.env.OWNER_NUMBER || '',
  OWNER_NAME: process.env.OWNER_NAME || 'Flash MD user',
  BOT_NAME: process.env.BOT_NAME || 'Flash-Md-V3',
  BOT_VERSION: process.env.BOT_VERSION || '3.0.0',
  MENU_IMAGES: parseMenuImages(process.env.MENU_IMAGES || '')
}

export default CONFIG
