import { useEffect } from 'react';
import { myFirebase } from 'service';

// Route
import { Route, Switch, useHistory } from 'react-router-dom';

// Components
import { Chat, Login, SignUp } from "components"

// Custom Hooks
import { useFbAuth, useResolved } from 'hooks';

export const App = () => {

    // useEffect(() => {
    //     myFirebase.firestore.collection('chatUsers').where('userName', '==', 'batman').get().then(res => {
    //         const user = res.docs[0]?.data();
    //         console.log(user);
    //     })
    // }, [])
    const history = useHistory();
    const { authUser } = useFbAuth();
    const resolved = useResolved(authUser);

    useEffect(() => {
        console.log("user", authUser, resolved)
        if (resolved && authUser === null) {
            history.push("/login") // Login page
        } else if (resolved && authUser !== null) {
            history.push("/") // chat page
        }
    }, [authUser, resolved, history])

    return <div className='app'>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signUp" component={SignUp} />
            <Route exact path="/" component={Chat} />
        </Switch>
    </div>
};
