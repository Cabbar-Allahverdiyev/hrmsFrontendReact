import React  from 'react'
import {Route,Switc,Link} from 'react-router-dom'
import Employer from '../pages/users/Employer'
import {routes} from "../routing"
//import "../templatemo-seo-dream.css"

export default function Dashboard({children}) {
    return (
        <div>
           {children}
        </div>
    )
}
