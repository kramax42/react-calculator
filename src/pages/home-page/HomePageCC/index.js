import React from 'react';

import { Calculator } from '@components/calculator/CalculatorCC';
import { MainLayout } from '@layouts/main-layout/MainLayoutCC';

function HomePage() {
  return (
    <MainLayout>
      <Calculator />
    </MainLayout>
  );
}

export default HomePage;
