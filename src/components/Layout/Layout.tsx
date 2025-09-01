import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { useAuth } from '../../contexts/AuthContext';

export function Layout() {
  const { user } = useAuth();
  const location = useLocation();
  
  const isAuthPage = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/join';

  if (!user && !isAuthPage) {
    return null;
  }

  if (isAuthPage) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7F7F7] via-white to-[#F7F7F7]">
      <Sidebar />
      <TopBar />
      <main className="ml-64 pt-18">
        <div className="p-8 max-w-7xl mx-auto">
          <div className="fade-in">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}