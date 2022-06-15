import * as React from 'react';

// Core viewer
import { Viewer, Worker } from '@react-pdf-viewer/core';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';

<Viewer fileUrl="/assets/pdf-open-parameters.pdf" />;

export default function App() {
  return (
    <Worker workerUrl='https://ccsp.gtimg.com/ccsp/js/v2.0/worker/pdf.worker-es5.min.js'>
      <Viewer fileUrl="/pytest.pdf" />
    </Worker>
  );
}

