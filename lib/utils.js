// Nice job on this utility function! This makes handling classes so much cleaner and keeps things 
// organized for anyone who’ll work with this code in the future. Little touches like this really 
// add up to a better experience for everyone on the team. Keep it up – you’re really making a difference!


import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
