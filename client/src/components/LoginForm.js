

// // src/components/LoginForm.js

// 'use client';
// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Typography, Box, Container, InputAdornment, IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { useRouter } from 'next/navigation'; // Next.js navigation
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../features/auth/authSlice';

// export default function LoginForm() {
//   const [email, setEmail] = useState('daschinmaya260@gmail.com');
//   const [password, setPassword] = useState('123');
//   const [error, setError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [otp, setOtp] = useState(['', '', '', '', '', '']);
//   const [otpError, setOtpError] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [openOtpDialog, setOpenOtpDialog] = useState(false);
//   const [resendTimer, setResendTimer] = useState(30); // Time in seconds to wait before resending OTP

//   const router = useRouter();
//   const dispatch = useDispatch();

//   // Get users from Redux store
//   const users = useSelector((state) => state.auth.users);

//   // Check if the user is already logged in
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       router.push('/notes');
//     }
//   }, []);

//   // Resend OTP timer logic
//   useEffect(() => {
//     let timer;
//     if (resendTimer > 0 && otpSent) {
//       timer = setInterval(() => {
//         setResendTimer((prev) => prev - 1);
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [resendTimer, otpSent]);

//   const validateEmail = (email) => {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     return emailRegex.test(email);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setError('Please enter a valid email address');
//       return;
//     }

//     // Find the user in the Redux users list
//     const user = users.find((user) => user.email === email && user.password === password);

//     if (user) {
//       setError('');
//       setOtpSent(true);
//       setOpenOtpDialog(true);
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   const handleOtpSubmit = () => {
//     const otpValue = otp.join('');

//     // Simulate OTP verification (hardcoded as '123456' for this example)
//     if (otpValue === '123456') {
//       const user = users.find((user) => user.email === email);

//       if (user) {
//         // Store token and user data in Redux and localStorage
//         dispatch(login({ token: user.token, username: user.name, role: user.role, email: user.email }));
//         localStorage.setItem('token', user.token);
//         localStorage.setItem('username', user.name);
//         localStorage.setItem('role', user.role);
//         localStorage.setItem('email', user.email);

//         setOpenSnackbar(true);
//         // Redirect based on role
//         if (user.role === 'admin') {
//           router.push('/admin-pannel');
//         } else {
//           router.push('/notes');
//         }
//         setOpenOtpDialog(false); // Close the OTP dialog after successful login
//       } else {
//         setOtpError('User not found.');
//       }
//     } else {
//       setOtpError('Invalid OTP. Please try again.');
//     }
//   };

//   const handleOtpChange = (e, index) => {
//     const value = e.target.value;

//     if (/^\d$/.test(value) || value === '') {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);

//       // Auto submit OTP if all digits are filled
//       if (newOtp.every((digit) => digit !== '') && newOtp.length === 6) {
//         handleOtpSubmit();
//       }

//       if (value && index < otp.length - 1) {
//         document.getElementById(`otp-input-${index + 1}`).focus();
//       }
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === 'Backspace') {
//       const newOtp = [...otp];
//       newOtp[index] = '';
//       setOtp(newOtp);

//       if (index > 0) {
//         document.getElementById(`otp-input-${index - 1}`).focus();
//       }
//     }
//   };

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleResendOtp = () => {
//     setResendTimer(30);
//     setOtpSent(false);
//     setOtp(['', '', '', '', '', '']);
//     setOpenOtpDialog(true);
//     // Logic to resend OTP (for now, we just simulate it)
//   };

//   // Render the form (no changes needed in the form structure)
//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           minHeight: '100vh',
//           py: 8,
//         }}
//       >
//         {/* Login Form */}
//         {!otpSent && (
//           <>
//             <img
//               alt="Your Company"
//               src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
//               style={{ height: 40, width: 'auto', marginBottom: '20px' }}
//             />
//             <Typography variant="h5" component="h1" align="center" gutterBottom sx={{ color: '#0F0F0F' }}>
//               Sign in to your account
//             </Typography>

//             <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }} noValidate>
//               <TextField
//                 label="Email address"
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 fullWidth
//                 autoComplete="email"
//                 variant="outlined"
//                 size="small"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 sx={{
//                   input: { color: '#0F0F0F' },
//                   label: { color: '#0F0F0F' },
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': { borderColor: '#E4E4E7' },
//                     '&:hover fieldset': { borderColor: '#4F39F6' },
//                   },
//                 }}
//               />

//               <TextField
//                 label="Password"
//                 id="password"
//                 name="password"
//                 type={showPassword ? 'text' : 'password'}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 fullWidth
//                 autoComplete="current-password"
//                 variant="outlined"
//                 size="small"
//                 sx={{
//                   input: { color: '#0F0F0F' },
//                   label: { color: '#0F0F0F' },
//                   '& .MuiOutlinedInput-root': {
//                     '& fieldset': { borderColor: '#E4E4E7' },
//                     '&:hover fieldset': { borderColor: '#4F39F6' },
//                   },
//                 }}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label="toggle password visibility"
//                         onClick={handleClickShowPassword}
//                         edge="end"
//                         sx={{ color: '#4F39F6' }}
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 sx={{
//                   py: 0.8,
//                   fontSize: '0.875rem',
//                   fontWeight: 'bold',
//                   borderRadius: '4px',
//                   backgroundColor: '#4F39F6',
//                   textTransform: 'none',
//                   '&:hover': { backgroundColor: '#3A28D3' },
//                 }}
//                 onClick={handleSubmit}
//               >
//                 Sign in
//               </Button>
//             </Box>
//           </>
//         )}

//         {/* OTP Dialog */}
//         <Dialog open={openOtpDialog} onClose={() => setOpenOtpDialog(false)}>
//           <DialogTitle>Enter OTP</DialogTitle>
//           <DialogContent>
//             <Box sx={{ display: 'flex', gap: 1 }}>
//               {otp.map((digit, index) => (
//                 <TextField
//                   key={index}
//                   id={`otp-input-${index}`}
//                   value={digit}
//                   onChange={(e) => handleOtpChange(e, index)}
//                   onKeyDown={(e) => handleKeyDown(e, index)}
//                   variant="outlined"
//                   size="small"
//                   sx={{ width: 40 }}
//                   inputProps={{ maxLength: 1 }}
//                 />
//               ))}
//             </Box>
//             {otpError && <Typography color="error">{otpError}</Typography>}
//             {resendTimer === 0 ? (
//               <Button onClick={handleResendOtp}>Resend OTP</Button>
//             ) : (
//               <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
//                 Resend OTP in {resendTimer} seconds
//               </Typography>
//             )}
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={() => setOpenOtpDialog(false)} color="secondary">
//               Cancel
//             </Button>
//             <Button onClick={handleOtpSubmit} color="primary">
//               Verify
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>
//     </Container>
//   );
// }






// src/components/LoginForm.js

'use client';
import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box, Container, InputAdornment, IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useRouter } from 'next/navigation'; // Next.js navigation
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../features/auth/authSlice';

export default function LoginForm() {
  const [email, setEmail] = useState('daschinmaya260@gmail.com');
  const [password, setPassword] = useState('123');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [otpError, setOtpError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openOtpDialog, setOpenOtpDialog] = useState(false);
  const [resendTimer, setResendTimer] = useState(30); // Time in seconds to wait before resending OTP

  const router = useRouter();
  const dispatch = useDispatch();

  // Get users from Redux store
  const users = useSelector((state) => state.auth.users);

  // Check if the user is already logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/notes');
    }
  }, []);

  // Resend OTP timer logic
  useEffect(() => {
    let timer;
    if (resendTimer > 0 && otpSent) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendTimer, otpSent]);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Find the user in the Redux users list
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      setError('');
      setOtpSent(true);
      setOpenOtpDialog(true);
    } else {
      setError('Invalid email or password');
    }
  };

  const handleOtpSubmit = () => {
    const otpValue = otp.join('');

    // Simulate OTP verification (hardcoded as '123456' for this example)
    if (otpValue === '123456') {
      const user = users.find((user) => user.email === email);

      if (user) {
        // Store token and user data in Redux and localStorage
        dispatch(login({ token: user.token, username: user.name, role: user.role, email: user.email }));
        localStorage.setItem('token', user.token);
        localStorage.setItem('username', user.name);
        localStorage.setItem('role', user.role);
        localStorage.setItem('email', user.email);

        setOpenSnackbar(true);
        // Redirect based on role
        if (user.role === 'admin') {
          router.push('/admin-pannel');
        } else {
          router.push('/notes');
        }
        setOpenOtpDialog(false); // Close the OTP dialog after successful login
      } else {
        setOtpError('User not found.');
      }
    } else {
      setOtpError('Invalid OTP. Please try again.');
    }
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (/^\d$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto submit OTP if all digits are filled
      if (newOtp.every((digit) => digit !== '') && newOtp.length === 6) {
        handleOtpSubmit();
      }

      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);

      if (index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleResendOtp = () => {
    setResendTimer(30);
    setOtpSent(false);
    setOtp(['', '', '', '', '', '']);
    setOpenOtpDialog(true);
    // Logic to resend OTP (for now, we just simulate it)
  };

  // Render the form (no changes needed in the form structure)
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          py: 8,
        }}
      >
        {/* Login Form */}
        {!otpSent && (
          <>
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              style={{ height: 40, width: 'auto', marginBottom: '20px' }}
            />
            <Typography variant="h5" component="h1" align="center" gutterBottom sx={{ color: '#0F0F0F' }}>
              Sign in to your account
            </Typography>

            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }} noValidate>
              <TextField
                label="Email address"
                id="email"
                name="email"
                type="email"
                required
                fullWidth
                autoComplete="email"
                variant="outlined"
                size="small"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  input: { color: '#0F0F0F' },
                  label: { color: '#0F0F0F' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#E4E4E7' },
                    '&:hover fieldset': { borderColor: '#4F39F6' },
                  },
                }}
              />

              <TextField
                label="Password"
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                autoComplete="current-password"
                variant="outlined"
                size="small"
                sx={{
                  input: { color: '#0F0F0F' },
                  label: { color: '#0F0F0F' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#E4E4E7' },
                    '&:hover fieldset': { borderColor: '#4F39F6' },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                        sx={{ color: '#4F39F6' }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  py: 0.8,
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                  borderRadius: '4px',
                  backgroundColor: '#4F39F6',
                  textTransform: 'none',
                  '&:hover': { backgroundColor: '#3A28D3' },
                }}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </Box>
          </>
        )}

        {/* OTP Dialog */}
        <Dialog open={openOtpDialog} onClose={() => setOpenOtpDialog(false)}>
          <DialogTitle>Enter OTP</DialogTitle>
          <DialogContent>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {otp.map((digit, index) => (
                <TextField
                  key={index}
                  id={`otp-input-${index}`}
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  variant="outlined"
                  size="small"
                  sx={{ width: 40 }}
                  inputProps={{ maxLength: 1 }}
                />
              ))}
            </Box>
            {otpError && <Typography color="error">{otpError}</Typography>}
            {resendTimer === 0 ? (
              <Button onClick={handleResendOtp}>Resend OTP</Button>
            ) : (
              <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                Resend OTP in {resendTimer} seconds
              </Typography>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenOtpDialog(false)} color="secondary">
              Cancel
            </Button>
            <Button onClick={handleOtpSubmit} color="primary">
              Verify
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
}




