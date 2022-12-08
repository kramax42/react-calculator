import React, { Component } from 'react';
import  { MainLayout } from '@layouts/main-layout/MainLayoutCC';
import { Spinner } from '../styled';

class LoaderCC extends Component {
    render() {
        return (
            <MainLayout>
                <Spinner/>
            </MainLayout>
        );
    }
}

export const Loader = LoaderCC;