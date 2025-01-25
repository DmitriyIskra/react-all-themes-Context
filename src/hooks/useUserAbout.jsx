import React from 'react';
import { useEffect, useState } from 'react';

import apiGetUser from '../js/ApiUser';

export default function useUserAbout(id) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            if(id) {
                const response = await apiGetUser(id);
                setUser(response);
            }
        })()
    }, []);
    
    return [user];
}
