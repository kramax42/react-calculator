import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  HOME_PAGE_ROUTE_FC,
  SETTINGS_PAGE_ROUTE_FC,
  HOME_PAGE_ROUTE_CC,
  SETTINGS_PAGE_ROUTE_CC,
} from '@constants/routes';
import  { Loader } from '@components/loader/LoaderCC';
const HomePageFC = lazy(() => import('@pages/home-page/HomePageFC'));
const HomePageCC = lazy(() => import('@pages/home-page/HomePageCC'));
const SettingsPageFC = lazy(() => import('@/pages/settings-page/SettingsPageFC'));
const SettingsPageCC = lazy(() => import('@/pages/settings-page/SettingsPageCC'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route exact path={HOME_PAGE_ROUTE_FC} element={<HomePageFC />} />
        <Route exact path={SETTINGS_PAGE_ROUTE_FC} element={<SettingsPageFC />} />
        <Route exact path={HOME_PAGE_ROUTE_CC} element={<HomePageCC />} />
        <Route exact path={SETTINGS_PAGE_ROUTE_CC} element={<SettingsPageCC />} />
      </Routes>
    </Suspense>
  );
}

export default App;
