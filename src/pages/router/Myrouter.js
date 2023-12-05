import React from 'react'
import { useRoutes } from 'react-router'
import Home from '../../components/home/Home'
import About from '../../components/about/About'
import Team from '../../components/ourTeam/Team'
import Testi from '../../components/testi/Testi'
import FAQ from '../../components/faq/FAQ'
import Services from '../../components/services/Services'
import Contact from '../../components/contact/Contact'
import Layout from '../layout'



const Myrouter = () => {
    const myRoute = useRoutes([
        {
            path: '/',
            element:<Layout/>, //JSX HERE
            children : [
                {
                    element :<Home/>, //JSX HERE
                    index : true
                },
                {
                    element : <About/>,
                    path: '/about-us',
                },
                {
                    element : <Team/>,
                    path : '/our-team'
                },
                {
                    element : <Testi/>,
                    path : '/testimonials'
                },
                {
                    element : <FAQ/>,
                    path : '/faq'
                },
                {
                    element : <Services/>,
                    path : '/services'
                },

                {
                    element : <Contact/>,
                    path : '/contact-us'
                }
            ]
        }
    ])
    return myRoute
}

export default Myrouter