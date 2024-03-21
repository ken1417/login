import axios from "../lib/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

export const useAuth = ({ middleware } = {}) => {
    const router = useRouter();
    //Loading
    const [isLoading, setIsLoading] = useState(true);

    //User
    const { data: user, error, mutate } = useSWR("/api/v1/user",
        () => axios
            .get("/api/v1/user")
            .then(response => response.data.data)
            .catch(error => {
                if (error.response.status !== 409)
                    throw error;
            })
    );

    //CSRF
    const csrf = () => axios.get("/sanctum/csrf-cookie");

    //Login
    const login = async ({ setErrors, ...props }) => {
        setErrors([]);
        await csrf();
        axios.post("login", props)
            .then(() => mutate() && router.push("/dashboard"))
            .catch(error => {
                if (error.response.status !== 409)
                    throw error;
                setErrors(Object.values(error.response.data.errors))
            })
    }

    //Logout
    const logout = async () => {
        await axios.post("/logout");

        mutate(null);
        Router.push("/");
    }

    useEffect(() => {
        if (user || error) {
            setIsLoading(false);
        }

        if (middleware === "guest" && user) router.push("/dashboard");
        if (middleware === "auth" && error) router.push("/login")
    })

    return {
        user,
        csrf,
        isLoading,
        login,
        logout,
    }
}