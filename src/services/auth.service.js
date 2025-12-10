import { auth } from './firebase.config';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

export const login = async (email, password) =>
  (await signInWithEmailAndPassword(auth, email, password)).user;

export const register = async (email, password) =>
  (await createUserWithEmailAndPassword(auth, email, password)).user;

export const resetPassword = (email) =>
  sendPasswordResetEmail(auth, email);

export const subscribeToAuthChanges = (callback) =>
  onAuthStateChanged(auth, callback);

export const logout = () =>
  signOut(auth);
