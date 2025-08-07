// app/query-form/page.js

'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function QueryFormPage() {
  const searchParams = useSearchParams();
  const product = searchParams.get('product');

  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const sendPO = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/send-po', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        product,
      }),
    });

    if (res.ok) {
      setEmailSent(true);
    }

    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto py-20 px-4">
      <h1 className="text-2xl font-bold mb-4">Purchase Query for <span className="text-blue-600">{product}</span></h1>

      {emailSent ? (
        <p className="text-green-600 font-semibold">✅ Purchase order sent successfully!</p>
      ) : (
        <form onSubmit={sendPO} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border px-4 py-2 rounded"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full border px-4 py-2 rounded"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="Message (Optional)"
            className="w-full border px-4 py-2 rounded"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send PO to Email'}
          </button>
        </form>
      )}
    </div>
  );
}
