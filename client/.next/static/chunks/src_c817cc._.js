(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_c817cc._.js", {

"[project]/src/components/LoginForm.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
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
__turbopack_esm__({
    "default": (()=>LoginForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)"); // Next.js navigation
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/features/auth/authSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/InputAdornment/InputAdornment.js [app-client] (ecmascript) <export default as InputAdornment>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Visibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/Visibility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$VisibilityOff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/icons-material/esm/VisibilityOff.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/DialogTitle/DialogTitle.js [app-client] (ecmascript) <export default as DialogTitle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__ = __turbopack_import__("[project]/node_modules/@mui/material/DialogActions/DialogActions.js [app-client] (ecmascript) <export default as DialogActions>");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
function LoginForm() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('daschinmaya260@gmail.com');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('123');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [otp, setOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        '',
        '',
        '',
        '',
        '',
        ''
    ]);
    const [otpError, setOtpError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [otpSent, setOtpSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openSnackbar, setOpenSnackbar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openOtpDialog, setOpenOtpDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resendTimer, setResendTimer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(30); // Time in seconds to wait before resending OTP
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    // Get users from Redux store
    const users = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "LoginForm.useSelector[users]": (state)=>state.auth.users
    }["LoginForm.useSelector[users]"]);
    // Check if the user is already logged in
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginForm.useEffect": ()=>{
            const token = localStorage.getItem('token');
            if (token) {
                router.push('/notes');
            }
        }
    }["LoginForm.useEffect"], []);
    // Resend OTP timer logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginForm.useEffect": ()=>{
            let timer;
            if (resendTimer > 0 && otpSent) {
                timer = setInterval({
                    "LoginForm.useEffect": ()=>{
                        setResendTimer({
                            "LoginForm.useEffect": (prev)=>prev - 1
                        }["LoginForm.useEffect"]);
                    }
                }["LoginForm.useEffect"], 1000);
            }
            return ({
                "LoginForm.useEffect": ()=>clearInterval(timer)
            })["LoginForm.useEffect"];
        }
    }["LoginForm.useEffect"], [
        resendTimer,
        otpSent
    ]);
    const validateEmail = (email)=>{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }
        // Find the user in the Redux users list
        const user = users.find((user)=>user.email === email && user.password === password);
        if (user) {
            setError('');
            setOtpSent(true);
            setOpenOtpDialog(true);
        } else {
            setError('Invalid email or password');
        }
    };
    const handleOtpSubmit = ()=>{
        const otpValue = otp.join('');
        // Simulate OTP verification (hardcoded as '123456' for this example)
        if (otpValue === '123456') {
            const user = users.find((user)=>user.email === email);
            if (user) {
                // Store token and user data in Redux and localStorage
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$features$2f$auth$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["login"])({
                    token: user.token,
                    username: user.name,
                    role: user.role,
                    email: user.email
                }));
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
    const handleOtpChange = (e, index)=>{
        const value = e.target.value;
        if (/^\d$/.test(value) || value === '') {
            const newOtp = [
                ...otp
            ];
            newOtp[index] = value;
            setOtp(newOtp);
            // Auto submit OTP if all digits are filled
            if (newOtp.every((digit)=>digit !== '') && newOtp.length === 6) {
                handleOtpSubmit();
            }
            if (value && index < otp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };
    const handleKeyDown = (e, index)=>{
        if (e.key === 'Backspace') {
            const newOtp = [
                ...otp
            ];
            newOtp[index] = '';
            setOtp(newOtp);
            if (index > 0) {
                document.getElementById(`otp-input-${index - 1}`).focus();
            }
        }
    };
    const handleClickShowPassword = ()=>{
        setShowPassword(!showPassword);
    };
    const handleResendOtp = ()=>{
        setResendTimer(30);
        setOtpSent(false);
        setOtp([
            '',
            '',
            '',
            '',
            '',
            ''
        ]);
        setOpenOtpDialog(true);
    // Logic to resend OTP (for now, we just simulate it)
    };
    // Render the form (no changes needed in the form structure)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
        component: "main",
        maxWidth: "xs",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                py: 8
            },
            children: [
                !otpSent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            alt: "Your Company",
                            src: "https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600",
                            style: {
                                height: 40,
                                width: 'auto',
                                marginBottom: '20px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/LoginForm.js",
                            lineNumber: 464,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "h5",
                            component: "h1",
                            align: "center",
                            gutterBottom: true,
                            sx: {
                                color: '#0F0F0F'
                            },
                            children: "Sign in to your account"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LoginForm.js",
                            lineNumber: 469,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            component: "form",
                            sx: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 2,
                                width: '100%'
                            },
                            noValidate: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                    label: "Email address",
                                    id: "email",
                                    name: "email",
                                    type: "email",
                                    required: true,
                                    fullWidth: true,
                                    autoComplete: "email",
                                    variant: "outlined",
                                    size: "small",
                                    value: email,
                                    onChange: (e)=>setEmail(e.target.value),
                                    sx: {
                                        input: {
                                            color: '#0F0F0F'
                                        },
                                        label: {
                                            color: '#0F0F0F'
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#E4E4E7'
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#4F39F6'
                                            }
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LoginForm.js",
                                    lineNumber: 474,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                    label: "Password",
                                    id: "password",
                                    name: "password",
                                    type: showPassword ? 'text' : 'password',
                                    value: password,
                                    onChange: (e)=>setPassword(e.target.value),
                                    required: true,
                                    fullWidth: true,
                                    autoComplete: "current-password",
                                    variant: "outlined",
                                    size: "small",
                                    sx: {
                                        input: {
                                            color: '#0F0F0F'
                                        },
                                        label: {
                                            color: '#0F0F0F'
                                        },
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': {
                                                borderColor: '#E4E4E7'
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#4F39F6'
                                            }
                                        }
                                    },
                                    InputProps: {
                                        endAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                                            position: "end",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                "aria-label": "toggle password visibility",
                                                onClick: handleClickShowPassword,
                                                edge: "end",
                                                sx: {
                                                    color: '#4F39F6'
                                                },
                                                children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$VisibilityOff$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/LoginForm.js",
                                                    lineNumber: 525,
                                                    columnNumber: 41
                                                }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Visibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/LoginForm.js",
                                                    lineNumber: 525,
                                                    columnNumber: 61
                                                }, void 0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LoginForm.js",
                                                lineNumber: 519,
                                                columnNumber: 23
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LoginForm.js",
                                            lineNumber: 518,
                                            columnNumber: 21
                                        }, void 0)
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LoginForm.js",
                                    lineNumber: 496,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    type: "submit",
                                    fullWidth: true,
                                    variant: "contained",
                                    color: "primary",
                                    sx: {
                                        py: 0.8,
                                        fontSize: '0.875rem',
                                        fontWeight: 'bold',
                                        borderRadius: '4px',
                                        backgroundColor: '#4F39F6',
                                        textTransform: 'none',
                                        '&:hover': {
                                            backgroundColor: '#3A28D3'
                                        }
                                    },
                                    onClick: handleSubmit,
                                    children: "Sign in"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LoginForm.js",
                                    lineNumber: 532,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LoginForm.js",
                            lineNumber: 473,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
                    open: openOtpDialog,
                    onClose: ()=>setOpenOtpDialog(false),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogTitle$2f$DialogTitle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogTitle$3e$__["DialogTitle"], {
                            children: "Enter OTP"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LoginForm.js",
                            lineNumber: 556,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        display: 'flex',
                                        gap: 1
                                    },
                                    children: otp.map((digit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                            id: `otp-input-${index}`,
                                            value: digit,
                                            onChange: (e)=>handleOtpChange(e, index),
                                            onKeyDown: (e)=>handleKeyDown(e, index),
                                            variant: "outlined",
                                            size: "small",
                                            sx: {
                                                width: 40
                                            },
                                            inputProps: {
                                                maxLength: 1
                                            }
                                        }, index, false, {
                                            fileName: "[project]/src/components/LoginForm.js",
                                            lineNumber: 560,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LoginForm.js",
                                    lineNumber: 558,
                                    columnNumber: 13
                                }, this),
                                otpError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    color: "error",
                                    children: otpError
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LoginForm.js",
                                    lineNumber: 573,
                                    columnNumber: 26
                                }, this),
                                resendTimer === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    onClick: handleResendOtp,
                                    children: "Resend OTP"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LoginForm.js",
                                    lineNumber: 575,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "body2",
                                    color: "textSecondary",
                                    sx: {
                                        mt: 2
                                    },
                                    children: [
                                        "Resend OTP in ",
                                        resendTimer,
                                        " seconds"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LoginForm.js",
                                    lineNumber: 577,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LoginForm.js",
                            lineNumber: 557,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$DialogActions$2f$DialogActions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogActions$3e$__["DialogActions"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    onClick: ()=>setOpenOtpDialog(false),
                                    color: "secondary",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LoginForm.js",
                                    lineNumber: 583,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                    onClick: handleOtpSubmit,
                                    color: "primary",
                                    children: "Verify"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LoginForm.js",
                                    lineNumber: 586,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LoginForm.js",
                            lineNumber: 582,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LoginForm.js",
                    lineNumber: 555,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LoginForm.js",
            lineNumber: 451,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/LoginForm.js",
        lineNumber: 450,
        columnNumber: 5
    }, this);
}
_s(LoginForm, "/2n7vsfIDOdoNubiScOu+YHvE3s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = LoginForm;
var _c;
__turbopack_refresh__.register(_c, "LoginForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.js [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_c817cc._.js.map