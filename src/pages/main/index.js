import { lazy } from "react"


export const Posts = lazy(()=>import(("./posts/Posts")))
export const Comments = lazy(()=>import(("./comments/Comments")))
export const Users = lazy(()=>import(("./users/User")))