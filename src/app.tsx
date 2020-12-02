import React, { Suspense, useState } from 'react';

const ComputedOne = React.lazy(() => import('Components/ComputedOne'));
const ComputedTwo = React.lazy(() => import('Components/ComputedTwo'));

function App(): JSX.Element {
  const [showTwo, setShowTwo] = useState<boolean>(false);

  return (
    <div className="app-content">
      <Suspense fallback={<div>loading...</div>}>
        <ComputedOne a={1} b={2} />
        {showTwo && <ComputedTwo a={3} b={4} />}
        <button type="button" onClick={() => setShowTwo(!showTwo)}>
          显示Two
        </button>
      </Suspense>
    </div>
  );
}

export default App;
