import { useEffect, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import Home from "./home";
import Login from '../Login';

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!auth) {
            setUser(null);
            return undefined;
        }

        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            setUser(authUser);
        });

        return () => unsubscribe();
    }, []);

    return (
       <div>
           {user ? <Home /> : <Login />}
       </div>
    )
}

export default Dashboard;