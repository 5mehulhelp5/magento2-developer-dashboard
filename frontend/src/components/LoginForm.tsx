import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';

interface ApiMsg {
    status: string,
    message: string
}

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [apiMsg, setApiMsg] = useState<ApiMsg | null>(null);
    const [isLoading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data: unknown) => {
        setLoading(true);
        fetch('http://localhost:5000/customer/token',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        )
        .then((response) => response.json())
        .then((data) => {
            if (data?.errorMessage) {
                setApiMsg({
                    status: "error",
                    message: data.errorMessage,
                });
            } else {
                // store the token for further need
                setApiMsg({
                    status: "success",
                    message: "Logged in successfully",
                });
            }
        })
        .catch((error) => {
            console.error(error);
        });
    };

    useEffect(() => {
        if (apiMsg?.message) {
            setTimeout(() => {
                setApiMsg(null);
            }, 3000);
        }
    }, [apiMsg]);

    return (
        <div>
            <h1>Customer Login</h1>
            {apiMsg && (
                <div>
                    {apiMsg.message}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='email'
                    {...register("email", {
                        required: "Email is required"
                    })}
                    name='email'
                    id='email'
                />
                <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                        required: "Password is required",
                    })}
                    name='password'
                    id='password'
                />

                <div
                    className='flex items-center h-5'
                    onClick={() => setShowPassword(!showPassword)}
                >
                    Show Password
                </div>

                <button
                    disabled={isLoading}
                    type='submit'
                >
                    Sign in
                </button>

                {errors.username && (
                    <p>
                        errors.username?.message
                    </p>
                )}

            </form>
        </div>
)
}