import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function generateStructuredData(type, data) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data
  };
  
  return JSON.stringify(baseData);
}

export function formatPhoneNumber(phone) {
  return phone.replace(/(\d{2})(\d{5})(\d{5})/, '+$1 $2 $3');
}

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}