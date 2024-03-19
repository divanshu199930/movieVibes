import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthAccepted, setAuthRejected } from '../../utils/redux/slices/authSlice';
import { createSession } from '../../utils/redux/thunks/authThunk';

const DeepLinkHandler = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.requestToken);

  useEffect(() => {
    const handleDeepLink = (event) => {

      if (event.url.includes('approved=true')) {

        dispatch(createSession(token))


      } else if (event.url.includes('approved=false')) {

      }
    };

    Linking.getInitialURL().then((initialUrl) => {
      if (initialUrl) {
        handleDeepLink({ url: initialUrl });
      }
    });

    const unsubscribe = Linking.addEventListener('url', handleDeepLink);

    return () => unsubscribe.remove();
  }, [dispatch,token]);

  return null;
};

export default DeepLinkHandler;
