import React, { FC } from 'react';

import { SideBar } from '../SideBar';

import styles from './Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <main>
    <SideBar />
    <section className={styles.main}>{children}</section>
  </main>
);
