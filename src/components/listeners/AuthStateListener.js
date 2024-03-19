import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storage } from '../../utils/constants';
import { setAuth, setSession } from '../../utils/redux/slices/authSlice';

const AuthStateListener = () => {
  // Use useSelector to listen for changes to the isAuthenticated value
    const dispatch = useDispatch()
  useEffect(() => {
    // This effect will run whenever isAuthenticated changes
    const updateStorage = async () => {
      try {

        const isAuthenticated = await storage.getBoolean('isAuthenticated')
        const session_id= await storage.getString('sessionId')
        
        dispatch(setAuth(isAuthenticated))
        dispatch(setSession(session_id))

      } catch (error) {
      }
    };

    updateStorage();
  }, []); // Dependency array ensures this effect runs only when isAuthenticated changes

  return null; // This component doesn't render anything, it just listens for changes and updates AsyncStorage
};

export default AuthStateListener;
