import { Suspense } from "react";
import { NavLink, Outlet } from 'react-router-dom';
const SharedLayout = () => {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li>
                    <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/movies">Movies</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet/>
                </Suspense> 
      </main>
    </>
    )
}
export default SharedLayout;