"use client";
import { GoogleOAuthProvider } from '@react-oauth/google';

const GoogleProvider = ({children}) => {
  return (
    <GoogleOAuthProvider clientId="149539606049-aje6od8k10opghflom6p8sqsrmaemlek.apps.googleusercontent.com">
    {children}
    </GoogleOAuthProvider>
  )
}

export default GoogleProvider