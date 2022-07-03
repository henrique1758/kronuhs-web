/* eslint-disable react-hooks/exhaustive-deps */
import Router from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { api } from '../services/api';

interface AuthProviderProps {
   children: ReactNode
}

interface SignInData {
    email: string;
    password: string;
}

interface User {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
}

interface SignInResponse {
    token: string;
    userData: User;
    refresh_token: string;
}

interface CreateAccountData {
    name: string;
    email: string;
    password: string;
}

interface AuthContextData {
    signIn: (data: SignInData) => Promise<void>;
    signInWithGithub: () => Promise<void>;
    signOut: () => void;
    createAccount: (data: CreateAccountData) => Promise<void>;
    user: User | undefined;
    isUserLoggedIn: boolean;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function signOut(): void {
    destroyCookie(undefined, '@kronuhs:token')
    destroyCookie(undefined, '@kronuhs:refresh_token')

    Router.push('/');
};

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User>();
    const isUserLoggedIn = !!user;    

    useEffect(() => {
        const { '@kronuhs:token': token } = parseCookies()
        
        if (token) {
          api
            .get('blog/users/profile')
            .then(response => {
              setUser(response.data)
            })
            .catch(() => {
              signOut()
            })
        }
    }, []);

    async function createAccount({ name, email, password }: CreateAccountData): Promise<void> {    
        try {
            await api.post('/blog/users', {
                name,
                email,
                password
            });
        } catch (err: any) {
            toast.error(err.response.data.message, {
                position: 'top-left'
            });
        }
    }

    const signIn = useCallback(async ({ email, password }: SignInData): Promise<void> => {
        try {
            const {
                data: {
                    token,
                    refresh_token,
                    userData
                }
            } = await api.post<SignInResponse>('/blog/session', {
              email,
              password
            });

            setCookie(undefined, '@kronuhs:token', token, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/'
            });

            setCookie(undefined, '@kronuhs:refresh_token', refresh_token, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/'
            });

            setUser({
                id: userData.id,
                name: userData.name,
                email: userData.email,
                avatarUrl: userData.avatarUrl
            });

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            Router.push('/');
            
        } catch (err: any) {
            toast.error(err.response.data.message, {
                position: 'top-left'
            });
        }
    }, []);

    const signInWithGithub = useCallback(async () => {}, []);

    return (
        <AuthContext.Provider value={{
            signIn,
            user,
            signOut,
            signInWithGithub,
            createAccount,
            isUserLoggedIn,
        }}>
            {children}
        </AuthContext.Provider>
    );
}