// React|Core|Basic
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

// Redux|Store
import { useDispatch } from 'react-redux';
import type { User } from '@/store/slices/authSlice';
import { login } from '@/store/slices/authSlice';

// i18n|Language
import { useTranslation } from 'react-i18next';

// Animation|Motion
import { motion } from 'framer-motion';

// Icons
import {  AtSymbolIcon, UserIcon } from '@heroicons/react/24/outline';

// UI Components
import { Password, SuperInput } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import { Button } from '@/components/ui/Button';
import { showToast as msn } from '@/components/ui/toast/Toast';

// Components|Layout
import { Footer } from '@/components/layout/Footer';



export {
    React, useState, useForm,
    useNavigate,

    useDispatch,
    User, login,

    useTranslation,
    motion,
    
    AtSymbolIcon, UserIcon,

    Password, SuperInput, Checkbox, Button,
    msn,
    Footer,
};
