// React|Core|Basic
import React, {
    useRef, useState, useEffect,
} from "react";
import { Link, NavLink , Outlet } from "react-router-dom";

import { useForm } from 'react-hook-form';
import clsx from 'clsx';


// Routes
import { useNavigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import { TList_Links, List_Links, AppRouter } from "@/routes/AppRouter";

// Redux|Store
import { store, persistor } from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useDispatch } from 'react-redux';
import { toggleLanguage } from '@/store/slices/languageSlice';
import { toggleTheme } from '@/store/slices/themeSlice';
import type { User } from '@/store/slices/authSlice';
import { login } from '@/store/slices/authSlice';

// i18n|Language
import { useTranslation } from 'react-i18next';

// Animation|Motion
import { motion } from 'framer-motion';

// UI Components
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Password, SuperInput } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button as B_Button } from '@/components/ui/B_Button';
import { Spinner } from '@/components/ui/Spinner';
import { type TabItems, TabControl } from '@/components/ui/controls/TabControl';
import { Slider } from '@/components/ui/slider/Slider';
import { Alert } from '@/components/ui/alert/Alert';
import { showToast as msn } from '@/components/ui/toast/Toast';
  // UI Components Shadcn
  import { Button } from '@/components/ui/button';
  import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { KeyboardWatcher } from '@/components/utils/KeyboardWatcher';



// Components|Layout
import { Header__test } from '@/components/layout/Header__test';
import { Footer } from '@/components/layout/Footer';




//// main:-alias
import ReactDOM from 'react-dom/client';
import App from '@/App';

//// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
//// app:-alias
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar } from '@/components/layout/Navbar';
import { Login } from '@/pages/auth/Login';
import { Dashboard } from '@/pages/Dashboard';
import { ErrorPage } from '@/pages/ErrorPage';
import { PrivateRoute } from '@/components/auth/PrivateRoute';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import { ToastLayout } from '@/components/ui/toast/Toast';

import {type RootState } from '@/store';
//// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----



export {// Global
    // React|Core|Basic
    React, Link, NavLink, Outlet, useRef, useState, useEffect, useForm,
    clsx,
    
    // Routes
    useNavigate, useLocation, createBrowserRouter, RouterProvider,
    type TList_Links, List_Links, AppRouter,

    // Redux|Store
    store, persistor, Provider, PersistGate,
    useDispatch,
    toggleLanguage, toggleTheme,
    User, login,

    // i18n|Language
    useTranslation,
    motion,

    // UI Components
    LanguageToggle, ThemeToggle,
    Password, SuperInput, Checkbox, B_Button, Slider, Spinner, TabItems, TabControl,
      // UI Components Shadcn
      Button,
      Card, CardContent, CardHeader, CardTitle,
    KeyboardWatcher,
    Alert,
    msn,
    Header__test,
    Footer,
};

export {// main
    ReactDOM, App,
};
export {// app
    Router, Routes, Route, Navigate, useSelector,
    Navbar, Login, Dashboard, ErrorPage, PrivateRoute,
    useLanguage, useTheme, ToastLayout,
    RootState, 
};