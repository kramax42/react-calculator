import React from 'react';
import { MainLayout } from '@layouts/main-layout/MainLayoutCC';
import { Calculator } from '@components/calculator/CalculatorCC';

const HomePage = () => {
    return (
        <MainLayout>
            <Calculator />
        </MainLayout>
    );
};

export default HomePage;