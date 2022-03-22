import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LinkCard from '../component/LinkCard/LinkCard';
import Loader from '../component/Loader/Loader';
import { AuthContext } from '../context/auth.context';
import { useHttp } from '../hooks/http.hook';

export const DetailsPage = () =>{
    const {request, loading} = useHttp()
    const [link, setLink] = useState(null);
    const linkId = useParams().id //отримуємо параметр id із адресної стрічки
    const {token} = useContext(AuthContext)
    
    const getLink = useCallback(async()=>{
        try {
           const fetched = await request(`/api/v1/link/${linkId}`, "GET", null, {Authorization: `Bearer ${token}`})
           setLink(fetched)
        } catch (error) {
            
        }
    }, [token, linkId, request])

    useEffect(()=>{
        getLink()
    }, [getLink])

    if(loading){
        return(<Loader/>)
    }

    return(
<>
{!loading&& link&&<LinkCard link={link}/>}
</>    )
}