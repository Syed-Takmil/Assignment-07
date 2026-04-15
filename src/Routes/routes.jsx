import { createBrowserRouter } from "react-router";
import MainLayout from "../ui/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import TimeLine from "../pages/TimeLine/TimeLine";
import Stats from "../pages/Stats/Stats";





export const router=createBrowserRouter(
    [
        {
path:'/',
element:<MainLayout/>,
children:[
    {
        index:true,
        element:<HomePage/>
    },
    {
        path:'/timeline',
        element:<TimeLine/>
    },
{
    path:'/stats',
    element:<Stats/>
}]
}]
)