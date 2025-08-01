// app/contact/page.js
import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <ContactForm />
    </div>
  );
}
