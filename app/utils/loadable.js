import React, { lazy, Suspense } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const loadable = (
  importFunc,
  { customFallback = null } = { customFallback: null },
) => {
  const LazyComponent = lazy(importFunc);

  const fallback = customFallback || <LinearProgress />;

  return props => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
