// React|Core|Basic
import React, {
    useRef, useState, useEffect,
} from "react";
import { Link, Outlet } from "react-router-dom";

import { useForm } from 'react-hook-form';
import clsx from 'clsx';


// Routes
import { useNavigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRouter from "@/routes/AppRouter";

// Redux|Store
import { store, persistor } from "@/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useDispatch } from 'react-redux';
import type { User } from '@/store/slices/authSlice';
import { login } from '@/store/slices/authSlice';

// i18n|Language
import { useTranslation } from 'react-i18next';

// Animation|Motion
import { motion } from 'framer-motion';

// Icons
import {  
    ExclamationTriangleIcon, HomeIcon,
    AtSymbolIcon, UserIcon, UserGroupIcon
 } from '@heroicons/react/24/outline';

// UI Components
import { Password, SuperInput } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';
import { Slider } from '@/components/ui/slider/Slider';
import { showToast as msn } from '@/components/ui/toast/Toast';


// Components|Layout
import { Header__test } from '@/components/layout/Header__test';
import { Footer } from '@/components/layout/Footer';




//// main:-alias
import ReactDOM from 'react-dom/client';
import App from '@/App';

//// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
//// app:-alias
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar } from '@/components/layout/Navbar';
import { Login } from '@/pages/auth/Login';
import { Dashboard } from '@/pages/Dashboard';
import { ErrorPage } from '@/pages/ErrorPage';
import { PrivateRoute } from '@/components/auth/PrivateRoute';
import { useDirection } from '@/hooks/useDirection';
import { ToastLayout } from '@/components/ui/toast/Toast';

import {type RootState } from '@/store';
//// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----



export {// Global
    // React|Core|Basic
    React,Link, Outlet, useRef, useState, useEffect, useForm,
    clsx,
    
    // Routes
    useNavigate, createBrowserRouter, RouterProvider,
    AppRouter,

    // Redux|Store
    store, persistor, Provider, PersistGate,
    useDispatch,
    User, login,

    // i18n|Language
    useTranslation,
    motion,

    // Icons
    ExclamationTriangleIcon, HomeIcon,
    AtSymbolIcon, UserIcon, UserGroupIcon,

    // UI Components
    Password, SuperInput, Checkbox, Button, Slider,
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
    useDirection, ToastLayout,
    RootState, 
};