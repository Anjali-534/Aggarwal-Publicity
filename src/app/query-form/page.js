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
          
          {/* Contact Details */}
          <div>
            <label className="block font-medium mb-1">Full Name *</label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full border px-4 py-2 rounded"
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Company Name *</label>
            <input
              type="text"
              placeholder="Enter your company name"
              required
              className="w-full border px-4 py-2 rounded"
              onChange={(e) => handleChange('company', e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email Address *</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border px-4 py-2 rounded"
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Phone Number *</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              required
              className="w-full border px-4 py-2 rounded"
              onChange={(e) => handleChange('phone', e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Location (City, State, Country) *</label>
            <input
              type="text"
              placeholder="Enter your location"
              required
              className="w-full border px-4 py-2 rounded"
              onChange={(e) => handleChange('location', e.target.value)}
            />
          </div>

          {/* Product Details */}
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="block font-medium mb-1">Quantity *</label>
              <input
                type="number"
                placeholder="Enter quantity"
                required
                className="w-full border px-4 py-2 rounded"
                onChange={(e) => handleChange('quantity', e.target.value)}
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Unit *</label>
              <select
                className="border px-4 py-2 rounded w-full"
                value={formData.unit}
                required
                onChange={(e) => handleChange('unit', e.target.value)}
              >
                <option value="Kg">Kg</option>
                <option value="MT">Metric Ton</option>
                <option value="L">Liters</option>
                <option value="Units">Units</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Packaging Preference</label>
            <input
              type="text"
              placeholder="e.g., Bags, Drums, Bulk"
              className="w-full border px-4 py-2 rounded"
              onChange={(e) => handleChange('packaging', e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Grade / Purity Requirement</label>
            <input
              type="text"
              placeholder="Enter grade or purity"
              className="w-full border px-4 py-2 rounded"
              onChange={(e) => handleChange('grade', e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Delivery Timeline</label>
            <input
              type="text"
              placeholder="e.g., Urgent, 1 Week, 1 Month"
              className="w-full border px-4 py-2 rounded"
              onChange={(e) => handleChange('deliveryTime', e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Intended Use / Application</label>
            <input
              type="text"
              placeholder="Enter intended use"
              className="w-full border px-4 py-2 rounded"
              onChange={(e) => handleChange('useCase', e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Additional Notes</label>
            <textarea
              placeholder="Add any special requirements"
              className="w-full border px-4 py-2 rounded"
              onChange={(e) => handleChange('message', e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Purchase Query'}
            </button>
            <button
              type="reset"
              className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400 transition-all"
              onClick={() => setFormData({
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
              })}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
