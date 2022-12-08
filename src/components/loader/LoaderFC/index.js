import React from 'react';
import  { MainLayout } from '@layouts/main-layout/MainLayoutFC';
import { Spinner } from '../styled';

const LoaderFC = () => {
    return (
        <MainLayout>
            <Spinner/>
        </MainLayout>
    )
}

export const Loader = LoaderFC;