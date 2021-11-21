import React, { useEffect, useState, useCallback, useRef } from 'react'
import NavBar from "../Navbar/NavBar"
import ListItems from '../ListItems/ListItems'
import Divider from '@mui/material/Divider';
import "./Home.css";
import { IContactResponse, IHomeProps } from "../../types/Home"
import { ITEMS_REQUESTED } from "../../constants/constants"

export default function Home(props: IHomeProps) {

    const [loading, setLoading] = useState(false)
    const [contactList, setContactList] = useState<any>([])
    const [contactListError, setContactListError] = useState(false)

    const observer = useRef<IntersectionObserver>();

    const lastContactListElem = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !contactListError) {
                fetchContacts()
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, observer, contactListError]);

    function fetchContacts() {
        setLoading(true)
        setContactListError(false)
        fetch(`https://randomuser.me/api/?results=${ITEMS_REQUESTED}`)
            .then(data => data.json())
            .then((res: any) => {
                setLoading(false)
                console.log(res);
                setContactList((prev: IContactResponse[]) => [...prev, ...res.results])
                return res.results
            }).catch(e => {
                setLoading(false)
                //Implement Error
                setContactListError(true)
            });
    }

    useEffect(() => {
        fetchContacts()
    }, [])


    return (
        <>
            <NavBar setAuthorization={props.setAuthorization} currentUser={props.currentUser} />
            <div className="container">

                <div className="grid">
                    {contactList.map((contact: any, index: number) => {

                        if (contactList.length === index + 1) {
                            return (<div className="listItem" tabIndex={0} key={contact.login.username} ref={lastContactListElem}>
                                <ListItems loading={false} name={contact.name} image={contact.picture.large} phone={contact.phone} email={contact.email} />
                            </div>)
                        }
                        return (<div className="listItem" tabIndex={0} key={contact.login.username}>
                            <ListItems loading={false} name={contact.name} image={contact.picture.large} phone={contact.phone} email={contact.email} />
                            <Divider variant="inset" />
                        </div>)
                    })}

                    {loading && [...Array(ITEMS_REQUESTED)].map((contact: any, index: number) => {
                        return (<div className="" key={index}>
                            <ListItems loading={loading} image={""} phone={""} email={""} />
                            <Divider variant="inset"  />
                        </div>)
                    })}
                </div>

                {contactListError && <div className="text-danger text-center errorMessage">
                    Unable to fetch data. Please Sign In once again
                </div>}
            </div>
        </>
    )
}

