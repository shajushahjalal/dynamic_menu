"use client"; 
import {useState, useEffect} from 'react';
import Link from 'next/link'
import  Menu  from '../components/app/menu/Menu'

const index = () => {
    

    return (
        <>
            <h1>Application Index Page</h1>
            <Menu />       
        </>
    )
}

export default index;