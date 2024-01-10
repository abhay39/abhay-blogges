import { authOptions } from "@/utils/auth"
import NextAuth from "next-auth"

const Hanlder= NextAuth(authOptions)

export {Hanlder as GET, Hanlder as POST }