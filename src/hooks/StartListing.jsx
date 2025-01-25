import React from 'react';
import { useState, useEffect } from 'react';
import ApiList from '../js/ApiList';

export default function useStartListing() {
    const [listing, setListing] = useState();

    useEffect(() => {
        (async () => {
            const data = await ApiList(); 
            setListing(data);
        })();
    },[])

    return {listing, setListing};
}
