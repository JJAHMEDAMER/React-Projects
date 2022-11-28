import { useEffect } from 'react';
import { myFirebase } from 'service';

// Route
import { Route, Switch } from 'react-router-dom';

// Components
import { Chat, Login, SignUp } from "components"

export const App = () => {

    useEffect(() => {
        myFirebase.firestore.collection('chatUsers').where('userName', '==', 'batman').get().then(res => {
            const user = res.docs[0]?.data();
            console.log(user);
        })
    }, [])

    return <div className='app'>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signUp" component={SignUp} />
            <Route exact path="/" component={Chat} />
        </Switch>
    </div>
};
