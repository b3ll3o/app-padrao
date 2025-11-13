'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

interface LoginResponse {
  accessToken: string;
  user: {
    id: string;
    email: string;
  };
}

interface LoginError {
  message: string;
}

export async function login(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { message: 'Por favor, preencha todos os campos.' };
  }

  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      const error = data as LoginError;
      return { message: error.message || 'Falha ao fazer login. Verifique suas credenciais.' };
    }

    const loginData = data as LoginResponse;

    cookies().set('accessToken', loginData.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    redirect('/dashboard');

  } catch (error) {
    console.error('Login error:', error);
    return { message: 'Ocorreu um erro inesperado. Tente novamente mais tarde.' };
  }
}
