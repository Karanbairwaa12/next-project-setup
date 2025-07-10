import {z} from "zod"   
export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export const registerSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6)
}).refine((data) => data.password === data.confirmPassword, {
    message: "password must match",
    path:["confirmPassword"]
})

export type LoginFormValues = z.infer<typeof loginSchema>
export type RegisterFormValues = z.infer<typeof registerSchema>