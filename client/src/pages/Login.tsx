import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '../components/ui/button';
import { X } from 'lucide-react';

const LoginRegister: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({
    name: '',
    dob: '',
    gender: '',
    contact: '',
    email: '',
    password: '',
    acceptTerms: false,
  });
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [, setLocation] = useLocation();

  // Handle login form input changes
  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  // Handle registration form input changes
  const handleRegisterInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setRegisterForm({ ...registerForm, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setRegisterForm({ ...registerForm, [name]: value });
    }
  };

  // Handle forgot password input change
  const handleForgotEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForgotEmail(e.target.value);
  };

  // Handle login submission
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm),
      });

      const result = await response.json();
      if (response.ok) {
        localStorage.setItem('authToken', result.token);
        setSuccess('Login successful!');
        setTimeout(() => setLocation('/dashboard'), 1000);
      } else {
        setError(result.error || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred during login');
      console.error(err);
    }
  };

  // Handle registration submission
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerForm),
      });

      const result = await response.json();
      if (response.ok) {
        const token = result.token || 'dummy-token-' + registerForm.email;
        localStorage.setItem('authToken', token);
        setSuccess(result.message || 'Registration successful!');
        setRegisterForm({
          name: '',
          dob: '',
          gender: '',
          contact: '',
          email: '',
          password: '',
          acceptTerms: false,
        });
        setTimeout(() => setLocation('/dashboard'), 1000);
      } else {
        setError(result.error || 'Failed to register');
      }
    } catch (err) {
      setError('An error occurred during registration');
      console.error(err);
    }
  };

  // Handle forgot password submission
  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('http://localhost:5000/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: forgotEmail }),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess('Password reset link sent to your email.');
        setForgotEmail('');
        setTimeout(() => setShowForgotPassword(false), 1000);
      } else {
        setError(result.error || 'Failed to send reset link');
      }
    } catch (err) {
      setError('An error occurred while sending the reset link');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-4">
      <div className={`w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 ${isLogin ? 'h-auto' : 'h-auto'}`}>
        <div className="md:flex">
          {/* Left Side - Decorative */}
          <div className="hidden md:block md:w-1/3 bg-gradient-to-b from-indigo-600 to-blue-500 p-8 text-white">
            <div className="h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
              <p className="mb-8 opacity-90">
                {isLogin
                  ? "Enter your details to access your account and manage your cultural program registrations."
                  : "Join us today to register for exciting cultural programs and activities."}
              </p>
              <div className="mt-auto">
                <div className="h-2 bg-white bg-opacity-20 rounded-full mb-2">
                  <div className={`h-full bg-white rounded-full transition-all duration-500 ${isLogin ? 'w-1/3' : 'w-2/3'}`}></div>
                </div>
                <p className="text-sm opacity-80">
                  {isLogin ? "Step 1 of 2" : "Step 2 of 2"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-2/3 p-8 md:p-10">
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setIsLogin(true)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${isLogin
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-indigo-600 hover:bg-indigo-50'}`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${!isLogin
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-indigo-600 hover:bg-indigo-50'}`}
              >
                Register
              </button>
            </div>

            {error && (
              <div className="mb-6 p-3 bg-red-50 text-red-600 rounded-lg border border-red-100 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            {success && (
              <div className="mb-6 p-3 bg-green-50 text-green-600 rounded-lg border border-green-100 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {success}
              </div>
            )}

            {isLogin ? (
              <div>
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                          value={loginForm.email}
                          onChange={handleLoginInputChange}
                          placeholder="your@email.com"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                          value={loginForm.password}
                          onChange={handleLoginInputChange}
                          placeholder="••••••••"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <button
                        type="button"
                        onClick={() => setShowForgotPassword(true)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </button>
                    </div>
                  </div>
                  <div>
                    <Button
                      type="submit"
                      className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Sign in
                    </Button>
                  </div>
                </form>
              </div>
            ) : (
              <div>
                <form onSubmit={handleRegisterSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                        value={registerForm.name}
                        onChange={handleRegisterInputChange}
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                        Date of Birth
                      </label>
                      <input
                        id="dob"
                        name="dob"
                        type="date"
                        required
                        className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                        value={registerForm.dob}
                        onChange={handleRegisterInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                        Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        required
                        className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                        value={registerForm.gender}
                        onChange={handleRegisterInputChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Number
                      </label>
                      <input
                        id="contact"
                        name="contact"
                        type="tel"
                        required
                        className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                        value={registerForm.contact}
                        onChange={handleRegisterInputChange}
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                        value={registerForm.email}
                        onChange={handleRegisterInputChange}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                        value={registerForm.password}
                        onChange={handleRegisterInputChange}
                        placeholder="••••••••"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="acceptTerms"
                            name="acceptTerms"
                            type="checkbox"
                            required
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            checked={registerForm.acceptTerms}
                            onChange={handleRegisterInputChange}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="acceptTerms" className="font-medium text-gray-700">
                            I accept the{' '}
                            <a href="#" className="text-indigo-600 hover:text-indigo-500">
                              terms and conditions
                            </a>
                          </label>
                          <p className="text-gray-500">By registering, you agree to our terms of service and privacy policy.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button
                      type="submit"
                      className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Create Account
                    </Button>
                  </div>
                </form>
              </div>
            )}

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    {isLogin ? 'New to our platform?' : 'Already have an account?'}
                  </span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  {isLogin ? 'Create an account' : 'Sign in instead'}
                </button>
              </div>
            </div>

            {/* Forgot Password Modal */}
            {showForgotPassword && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-900">Reset Password</h3>
                    <button
                      onClick={() => setShowForgotPassword(false)}
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="forgotEmail" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        id="forgotEmail"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={forgotEmail}
                        onChange={handleForgotEmailChange}
                      />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {success && <p className="text-green-500 text-sm">{success}</p>}
                    <div className="flex justify-end space-x-2">
                      <Button
                        type="button"
                        onClick={() => setShowForgotPassword(false)}
                        className="border-gray-300 text-gray-700 hover:bg-gray-100"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="bg-indigo-600 text-white hover:bg-indigo-700"
                      >
                        Send Reset Link
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;