import axios from "axios";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    // 이메일과 패스워드 방식으로 사용자가 직접 DB 부분을 컨트롤할 수 있음
    CredentialsProvider({
      name: "Credentials",

      // 로그인 form 내용
      credentials: {
        username: { label: "이메일", type: "text", placeholder: "이메일 입력" },
        password: { label: "비밀번호", type: "password" },
      },

      // 이메일, 패스워드 부분을 체크해서
      // 맞으면 user 객체 리턴
      // 틀리면 null 리턴
      async authorize(credentials, req) {
        try {
          const res = await axios.post(
            `${process.env.NEXTAUTH_URL}/api/login`,
            {
              username: credentials?.username,
              password: credentials?.password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (res.status === 401) {
            console.log("error");
            return null;
          }

          const user = res.data;
          console.log(user);

          return user;
        } catch (error) {
          console.error("An error occurred while logging in:", error);
          return null;
        }
      },
    }),
  ],

  // accessToken 관리
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },

  pages: {
    signIn: "/signin",
    newUser: "/signup",
  },
});

export { handler as GET, handler as POST };
