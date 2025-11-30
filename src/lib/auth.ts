import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/drizzle/db";
import { nextCookies } from "better-auth/next-js";
import { twoFactor } from "better-auth/plugins";
import { UserRole } from "@/core/auth/roles";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    appName: "Portfolio Website",
    emailAndPassword: { 
        enabled: true,
        requireEmailVerification: false
    },
    // emailVerification: {
    //     autoSignInAfterVerification: true,
    //     sendOnSignUp: true,
    //     sendVerificationEmail: async ({ user, url }) => {
    //         // Implement your email sending logic here
    //         console.log(`Send verification email to ${user}: ${url}`);
    //     }
    // },
    user: {
        additionalFields: {
            role: {
                type: "string",
                defaultValue: UserRole.CLIENT,
                input: false
            }
        }
    },
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 60 //1 minute
        }
    },
    rateLimit:{
        window: 60,
        max: 100
    },
    plugins: [nextCookies(), twoFactor()]
});