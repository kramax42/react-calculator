import React from 'react';
import { MainLayout } from '@layouts/main-layout/MainLayoutFC';
import { Calculator } from '@components/calculator/CalculatorFC';

const HomePage = () => {
    return (
        <MainLayout>
            <Calculator />
        </MainLayout>
    );
};

export default HomePage;