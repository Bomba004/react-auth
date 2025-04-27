export const auth = {
  login: {
    title: 'Login',
    h2: 'Welcome back',
    p1: 'Please log in to access the dashboard',
  },
  register: {
    title: 'Create Account',
    h2: 'Create a New Account',
    p1: 'Create an account to access the dashboard',
  },
  logout: 'Logout',

  email: 'Email',
  usernamePlaceholder: 'Username or Email',

  password: 'Password',
  passwordPlaceholder: 'Password',
  confirmPassword: 'Confirm Password',
  rememberMe: 'Remember me',
  forgotPassword: 'Forgot password?',

  submit: 'Login',
  signIn: 'Login',

  loginSuccess: 'Logged in successfully',
  loginError: 'Login failed. Please check your credentials',

  errors: {
    required: 'This field is required',
    email: 'Invalid email address',
    identifier: 'Please enter your username or email',
    password: 'Please enter your password',
    passwordMatch: 'Passwords do not match',
    invalidCredentials: 'Invalid login credentials',
    userExists: 'User already exists',
    userNameRequired: 'Username is required',
    passwordRequired: 'Password is required',
  }
};

export default auth;
