import React, { useCallback, useContext, useEffect, useState } from 'react';
import LinksList from '../component/LinksList/LinksList';
import Loader from '../component/Loader/Loader';
import { AuthContext } from '../context/auth.context';
import { useHttp } from '../hooks/http.hook';



export const LinkPage = () =>{
    const [links, setLinks] = useState([]);
    const {loading, request} = useHttp();
    const {token} = useContext(AuthContext);

    const fetchLinks = useCallback(async()=>{
        try {
            const fetched = await request(`/api/v1/link`, "GET", null, {
                Authorization: `Bearer ${token}`
            })
            setLinks(fetched)
        } catch (error) {
            
        }
    }, [token, request])
    
    useEffect(()=>{
        fetchLinks()
    },[fetchLinks])

    if(loading){
        return(<Loader/>)
    }

    
return(
    <>{!loading && <LinksList links={links}/>}</>
)}
