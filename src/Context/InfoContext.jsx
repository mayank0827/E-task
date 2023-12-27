import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InfoContext = createContext();

const InfoProvider = (props) => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleButton = () => {
        console.log(email)
        if (email) {
            alert('Thank You');
            navigate('/home');
        } else {
            alert('Plz Fill The Section')
        }
    }

    const value = {
        email,
        setEmail,
        handleButton,
        handleEmail,
        handleSubmit
    }
    return (
        <InfoContext.Provider value={value}>
            {props.children}
        </InfoContext.Provider>
    );
};

export { InfoContext, InfoProvider };
