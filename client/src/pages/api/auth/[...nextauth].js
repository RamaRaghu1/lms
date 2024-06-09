import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

// import dotenv from 'dotenv';
// dotenv.config();


export const authOptions={
    providers:[
        GoogleProvider({
            clientId:process.env.REACT_APP_GOOGLE_CLIENT_ID,
            clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
        }),
        GithubProvider({
            clientId:process.env.REACT_APP_GITHUB_CLIENT_ID,
            clientSecret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
        })
    ],
    secret:process.env.REACT_APP_SECRET,
}


export default NextAuth(authOptions);
