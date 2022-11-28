import { useEffect } from 'react';
import { myFirebase } from 'service';

export const App = () => {

    useEffect(() => {
        myFirebase.firestore.collection('chatUsers').where('userName', '==', 'batman').get().then(res => {
            const user = res.docs[0]?.data();
            console.log(user);
        })
    }, [])
    return <>Hello from Batman</>
};
