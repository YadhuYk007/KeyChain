export const validateInput = (
  isSignup: boolean,
  email: string,
  password: string,
  name?: string,
): string => {
  if (isSignup) {
    if (!name || !name.trim()) {
      return 'Name is required';
    }
  }

  const emailRegex = /\S+@\S+\.\S+/;

  if (!email.trim()) {
    return 'Email is required';
  }
  if (!emailRegex.test(email)) {
    return 'Invalid email format';
  }

  if (!password.trim()) {
    return 'Password is required';
  }
  if (password.length < 6) {
    return 'Password must be at least 6 characters';
  }

  return 'valid';
};
