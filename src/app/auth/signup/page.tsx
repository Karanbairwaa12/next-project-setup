'use client'

import { RegisterFormValues, registerSchema } from "@/schemas/userSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


export default function RegisterPage(){

    const {handleSubmit, register, formState:{errors}} = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema)
    })

    const onSubmit = (data:RegisterFormValues) => {
        console.log(data)
    }
    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="name"/>
                {errors.name && <p>{errors.name.message}</p>}
                <input {...register("email")} placeholder="email"/>
                {errors.email && <p>{errors.email.message}</p>}
                <input {...register("password")} placeholder="password"/>
                {errors.password && <p>{errors.password.message}</p>}
                <input {...register("confirmPassword")} placeholder="confirm password"/>
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

                <button type="submit">Register</button>
            </form>
        </div>
    )
}