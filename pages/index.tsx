import { useState, useContext } from 'react'; 
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { userAgent } from 'next/server';
import Link from 'next/link';

import Layout from '../components/layout/Layout';
import LoginSignContainer from '../components/loginSign/LoginSignContainer';
import AppContext from '../components/appContext/AppContext';
import NavPanelContainer from '../components/navPanels/NavPanelContainer';



const url: string = "/goals"

const Home: any = () => {
  const context = useContext(AppContext)
//  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false);
console.log("context index.tsx: ", context.isLoggedIn)
console.log("context user: ", context.user)

 if(!context.isLoggedIn) {
  return (
    <>
      <LoginSignContainer / >
    </>
  );
 }
 if(context.isLoggedIn) {
  return (
    <>
      <h1>Hello {context.user.username}</h1>
        <NavPanelContainer />
    </>
  );
 }



}

export default Home
