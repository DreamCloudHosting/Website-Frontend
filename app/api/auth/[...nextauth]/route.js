import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/modules/MongoDB/client";


const whmcsURL = "https://client.dreamcloudhosting.net";

const WhmcsProvider = {
    id: "whmcs",
    name: "WHMCS",
    type: "oauth",
    version: "2.0",
    wellKnown: whmcsURL + "/.well-known/openid-configuration.json",

    clientId: process.env.WHMCS_CLIENT_ID,
    clientSecret: process.env.WHMCS_CLIENT_SECRET,

    authorization: {
        // url: `${whmcsURL}/oauth/authorize.php`,
        params: {
            // response_type: "code",
            scope: "openid profile email",
        }
    },

    // Set `idToken` option to true 
    idToken: true,

    // Remove separate userinfo endpoint
    // userinfo: undefined,

    // token: {
    //     // url: `${whmcsURL}/oauth/token.php`,
    //     params: {
    //         grant_type: "authorization_code"
    //     }
    // },

    // Enable PKCE and state checks
    checks: ["pkce", "state"],


    // userinfo: {
    //     url: `${whmcsURL}/oauth/userinfo.php`,
    // },

    profile(profile) {
        const { iss, aud, exp, sub } = profile;

        console.log("\n\n\nCall!\n\n\n");
        console.log(profile);

        return profile;
    },
};

const handler = (req, res) => {
    return NextAuth(req, res, {
        providers: [
            GoogleProvider({
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            }),
            WhmcsProvider
        ],
        adapter: MongoDBAdapter(clientPromise, { databaseName: "whmcs-auth" }),
    });
};

export { handler as GET, handler as POST };