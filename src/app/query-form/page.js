// app/query-form/page.js
import { Suspense } from 'react';
import QueryForm from './Queryform';

export default function QueryFormPage() {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <QueryForm />
    </Suspense>
  );
}
