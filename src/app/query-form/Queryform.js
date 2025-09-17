// app/query-form/QueryForm.js
'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function QueryForm() {
  const searchParams = useSearchParams();
  const product = searchParams.get('product');

  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    quantity: '',
    unit: 'Kg',
    packaging: '',
    grade: '',
    deliveryTime: '',
    useCase: '',
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

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="max-w-2xl mx-auto py-20 px-4">
      <h1 className="text-2xl font-bold mb-6">
        Purchase Query for <span className="text-blue-600">{product}</span>
      </h1>

      {emailSent ? (
        <p className="text-green-600 font-semibold">✅ Purchase order sent successfully!</p>
      ) : (
        <form onSubmit={sendPO} className="space-y-4 bg-white p-6 rounded-lg shadow-md border">
          {/* ... your full form code stays same ... */}
        </form>
      )}
    </div>
  );
}
