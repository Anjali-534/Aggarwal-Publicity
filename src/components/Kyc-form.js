'use client';

import { useState } from 'react';

export function KYCForm() {
  const [form, setForm] = useState({
    fullName: '',
    entityType: '',
    dobOrIncorporation: '',
    pan: '',
    aadhar: '',
    gstin: '',
    iec: '',
    address: '',
    mobile: '',
    email: '',
    natureOfBusiness: '',
    turnover: '',
    product: '',
    bankName: '',
    accountNumber: '',
    accountType: '',
    ifsc: '',
    branchAddress: '',
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
        pan: '',
        aadhar: '',
        gstin: '',
        iec: '',
        address: '',
        mobile: '',
        email: '',
        natureOfBusiness: '',
        turnover: '',
        product: '',
        bankName: '',
        accountNumber: '',
        accountType: '',
        ifsc: '',
        branchAddress: '',
        notes: '',
        agree: false,
      });
    } else {
      setStatus('Submission failed. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Full Name / Company Name" required className="w-full border p-2 rounded"
        value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />

      <input type="text" placeholder="Entity Type (Individual, Company, etc.)" required className="w-full border p-2 rounded"
        value={form.entityType} onChange={(e) => setForm({ ...form, entityType: e.target.value })} />

      <input type="date" placeholder="Date of Birth / Incorporation" required className="w-full border p-2 rounded"
        value={form.dobOrIncorporation} onChange={(e) => setForm({ ...form, dobOrIncorporation: e.target.value })} />

      <input type="text" placeholder="PAN Number" required className="w-full border p-2 rounded"
        value={form.pan} onChange={(e) => setForm({ ...form, pan: e.target.value })} />

      <input type="text" placeholder="Aadhar Number (if Individual)" className="w-full border p-2 rounded"
        value={form.aadhar} onChange={(e) => setForm({ ...form, aadhar: e.target.value })} />

      <input type="text" placeholder="GSTIN (if applicable)" className="w-full border p-2 rounded"
        value={form.gstin} onChange={(e) => setForm({ ...form, gstin: e.target.value })} />

      <input type="text" placeholder="IEC Code (if applicable)" className="w-full border p-2 rounded"
        value={form.iec} onChange={(e) => setForm({ ...form, iec: e.target.value })} />

      <textarea placeholder="Registered Address" required className="w-full border p-2 rounded"
        value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />

      <input type="tel" placeholder="Mobile Number" required className="w-full border p-2 rounded"
        value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} />

      <input type="email" placeholder="Email ID" required className="w-full border p-2 rounded"
        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />

      <select required className="w-full border p-2 rounded"
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

      <input type="text" placeholder="Annual Turnover (in ₹)" className="w-full border p-2 rounded"
        value={form.turnover} onChange={(e) => setForm({ ...form, turnover: e.target.value })} />

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

      <input type="text" placeholder="Bank Name" required className="w-full border p-2 rounded"
        value={form.bankName} onChange={(e) => setForm({ ...form, bankName: e.target.value })} />

      <input type="text" placeholder="Account Number" required className="w-full border p-2 rounded"
        value={form.accountNumber} onChange={(e) => setForm({ ...form, accountNumber: e.target.value })} />

      <input type="text" placeholder="Account Type (Savings, Current, etc.)" required className="w-full border p-2 rounded"
        value={form.accountType} onChange={(e) => setForm({ ...form, accountType: e.target.value })} />

      <input type="text" placeholder="IFSC Code" required className="w-full border p-2 rounded"
        value={form.ifsc} onChange={(e) => setForm({ ...form, ifsc: e.target.value })} />

      <input type="text" placeholder="Bank Branch Address" required className="w-full border p-2 rounded"
        value={form.branchAddress} onChange={(e) => setForm({ ...form, branchAddress: e.target.value })} />

      <textarea placeholder="Any Notes / Comments (optional)" className="w-full border p-2 rounded"
        value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          required
          checked={form.agree}
          onChange={(e) => setForm({ ...form, agree: e.target.checked })}
        />
        <span>I agree that the above information is true and correct to the best of my knowledge.</span>
      </label>

      <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
        Submit KYC
      </button>

      <p className="text-sm text-gray-500 mt-2">{status}</p>
    </form>
  );
}
