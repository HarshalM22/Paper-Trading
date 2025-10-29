import z from 'zod' ;

export const SignUpSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  name: z.string().min(3, { message: "Username must be at least 3 characters" }),
});

export const SigninSchema = z.object({
  password: z.string().min(6),
  email: z.string().email({ message: "Invalid email format" }),
});