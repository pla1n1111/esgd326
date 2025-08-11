import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
// import './Layout.css'; // Предполагается, что у вас есть базовые стили

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/form" className="nav-link">Form Builder</Link>
        </nav>
      </header>
      <main className="main-content">
        {children}
      </main>
      <footer className="footer">
        © 2023 Dynamic Form Builder
      </footer>
    </div>
  );
};