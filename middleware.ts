import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value; 
    if (!token) {
        // return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        // Verify the token
        // jwt.verify(token, SECRET_KEY);

        // Token is valid; proceed to the requested route
        return NextResponse.next();
    } catch (err) {
        // Token verification failed; redirect to login
        return NextResponse.redirect(new URL('/login', request.url));
    }
}


export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
    ],
};
