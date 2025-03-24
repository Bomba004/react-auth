import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { register as registerUser } from '../../store/slices/authSlice';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { AppDispatch } from '../../store';
import {
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
  KeyIcon
} from '@heroicons/react/24/outline';

const schema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterForm = z.infer<typeof schema>;

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const Register: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  
  const {
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<RegisterForm>({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data: RegisterForm) => {
    try {
      // Here we're transforming the form data into the expected format
      await dispatch(registerUser({
        user: {
          id: 0, // This will be set by the backend
          name: data.username
        },
        token: 'dummy-token' // This should come from your API response
      }));
      
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-md w-full space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {t('auth.register')}
          </h2>
        </motion.div>
        
        <motion.form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                label={t('auth.username')}
                name="username"
                // register={register}
                error={errors.username?.message}
                className="pl-10"
              />
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="relative">
              <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                label={t('auth.email')}
                name="email"
                type="email"
                // register={register}
                error={errors.email?.message}
                className="pl-10"
              />
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="relative">
              <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                label={t('auth.password')}
                name="password"
                type="password"
                // register={register}
                error={errors.password?.message}
                className="pl-10"
              />
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="relative">
              <KeyIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                label={t('auth.confirmPassword')}
                name="confirmPassword"
                type="password"
                // register={register}
                error={errors.confirmPassword?.message}
                className="pl-10"
              />
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Button
              type="submit"
              className="w-full"
              isLoading={isSubmitting}
            >
              {t('auth.submit')}
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
};
