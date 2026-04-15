import { createBrowserRouter } from "react-router";
import MainLayout from "../ui/MainLayout";





export const router=createBrowserRouter(
    [
        {
path:'/',
element:<MainLayout/>,
children:[
    {
        index:true,
        element:<h1>Home</h1>
    },
    {
        path:'about',
        element:<h1>About</h1>
    }]
}]
)