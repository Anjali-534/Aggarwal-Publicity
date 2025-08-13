'use client';

import { useState } from 'react';

export function KYCForm() {
  const [form, setForm] = useState({
    fullName: '',
    entityType: '',
    dobOrIncorporation: '',
    address: '',
    mobile: '',
    email: '',
    natureOfBusiness: '',
    turnover: '',
    product: '',
    notes: '',
    agree: false,
  });

  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Submitting...');

    const res = await fetch('/api/kyc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setStatus('KYC submitted successfully!');
      setForm({
        fullName: '',
        entityType: '',
        dobOrIncorporation: '',
        address: '',
        mobile: '',
        email: '',
        natureOfBusiness: '',
        turnover: '',
        product: '',
        notes: '',
        agree: false,
      });
    } else {
      setStatus('Submission failed. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* Full Name */}
      <div>
        <label className="block font-medium mb-1">Full Name / Company Name</label>
        <input
          type="text"
          required
          className="w-full border p-2 rounded"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />
      </div>

      {/* Entity Type */}
      <div>
        <label className="block font-medium mb-1">Entity Type (Individual, Company, etc.)</label>
        <input
          type="text"
          required
          className="w-full border p-2 rounded"
          value={form.entityType}
          onChange={(e) => setForm({ ...form, entityType: e.target.value })}
        />
      </div>

      {/* Date of Birth / Incorporation */}
      <div>
        <label className="block font-medium mb-1">Date of Birth / Incorporation</label>
        <input
          type="date"
          required
          className="w-full border p-2 rounded"
          value={form.dobOrIncorporation}
          onChange={(e) => setForm({ ...form, dobOrIncorporation: e.target.value })}
        />
      </div>

      {/* Address */}
      <div>
        <label className="block font-medium mb-1">Registered Address</label>
        <textarea
          required
          className="w-full border p-2 rounded"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
      </div>

      {/* Mobile */}
      <div>
        <label className="block font-medium mb-1">Mobile Number</label>
        <input
          type="tel"
          required
          className="w-full border p-2 rounded"
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block font-medium mb-1">Email ID</label>
        <input
          type="email"
          required
          className="w-full border p-2 rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>

      {/* Nature of Business */}
      <div>
        <label className="block font-medium mb-1">Nature of Business</label>
        <select
          required
          className="w-full border p-2 rounded"
          value={form.natureOfBusiness}
          onChange={(e) => setForm({ ...form, natureOfBusiness: e.target.value })}
        >
          <option value="">Select Nature of Business</option>
          <option value="Manufacturer">Manufacturer</option>
          <option value="Trader">Trader</option>
          <option value="Retailer">Retailer</option>
          <option value="Service Provider">Service Provider</option>
          <option value="Others">Others</option>
        </select>
      </div>

      {/* Turnover */}
      <div>
        <label className="block font-medium mb-1">Annual Turnover (in ₹)</label>
        <input
          type="text"
          className="w-full border p-2 rounded"
          value={form.turnover}
          onChange={(e) => setForm({ ...form, turnover: e.target.value })}
        />
      </div>

      {/* Product */}
      <div>
        <p className="font-medium mb-2">Select Product Interested In:</p>
        <div className="space-y-2">
          {['Solvents', 'Acids', 'Polymers', 'Dyes', 'Additives'].map((item) => (
            <label key={item} className="flex items-center space-x-2">
              <input
                type="radio"
                name="product"
                value={item}
                checked={form.product === item}
                onChange={(e) => setForm({ ...form, product: e.target.value })}
                className="accent-blue-600"
                required
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div>
        <label className="block font-medium mb-1">Any Notes / Comments (optional)</label>
        <textarea
          className="w-full border p-2 rounded"
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
        />
      </div>

      {/* Agreement */}
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          required
          checked={form.agree}
          onChange={(e) => setForm({ ...form, agree: e.target.checked })}
        />
        <span>I agree that the above information is true and correct to the best of my knowledge.</span>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Submit KYC
      </button>

      {/* Status */}
      <p className="text-sm text-gray-500 mt-2">{status}</p>
    </form>
  );
}
