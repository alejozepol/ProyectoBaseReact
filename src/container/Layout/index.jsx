import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <section className='Layout'>
    <>
      <Header />
    </>
    <main>
      {children}
    </main>
    <>
      <Footer />
    </>
  </section>
);

export default Layout;
