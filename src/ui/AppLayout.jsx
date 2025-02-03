import React from 'react';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { useNavigation, Outlet } from 'react-router-dom';
import Loader from './Loader';

export default function AppLayout() {
  const navigation = useNavigation();
  const isloading = navigation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isloading && <Loader />}

      <Header />
      <div>
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}
