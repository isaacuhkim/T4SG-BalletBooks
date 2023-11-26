'use client'
//import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import balletAndBooks from '../../assets/balletAndBooks.jpg'
import google from '../../assets/google.png'
import Link from 'next/link';
import GoogleIcon from '@mui/icons-material/Google';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { auth, db } from './firebase';
import { addDoc, collection, getDoc, doc, setDoc } from 'firebase/firestore';

const colors = {
    primary: "060606",
    background: "#E0E0E0",
    disbaled: "#D9D9D9",
}

export default function Home () {
  const [userData, setUserData] = useState(null as any);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDocRef = doc(collection(db, 'users'), user.uid);

        try {
          const docSnapshot = await getDoc(userDocRef);

          if (docSnapshot.exists()) {
            setUserData(docSnapshot.data());
          } else {
            console.log('User document does not exist.');
          }
        } catch (error) {
          console.error('Error fetching user data:', error); //error.message
        }
      } else {
        // Handle the case when the user is not authenticated
        setUserData(null);
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, []); // <-- Empty dependency array for componentDidMount behavior

  const session = useSession( {
    required: true,
    onUnauthenticated() {
        redirect('/LoginScreen');
    },
  });

  return (
    <div className='p-8'>
      <h1 className='text-white'>Welcome to the Home Screen</h1>
      {userData && (
        <div className='text-white'>
          <p>User Data:</p>
          <p>First Name: {userData.firstName}</p>
          <p>Last Name: {userData.lastName}</p>
          <p>Email: {userData.email}</p>
          <p>Role: {userData.role}</p>
          {/* Add other user data fields as needed */}
          <div className='text-white'>Session-based email: {session?.data?.user?.email }</div>
          <button className='text-white' onClick={() => signOut()}>Logout</button>
        </div>
      )}
    </div>
  )
}

Home.requireAuth = true
