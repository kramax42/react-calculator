import React from 'react';

import { Calculator } from '@components/calculator/CalculatorFC';
import { MainLayout } from '@layouts/main-layout/MainLayoutFC';

function HomePage() {
  return (
    <MainLayout>
      <Calculator />
    </MainLayout>
  );
}

export default HomePage;
