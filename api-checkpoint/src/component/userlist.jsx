    import React, { useState, useEffect } from 'react';
    import axios from 'axios';
    import './userlist.css'

    const UserList = () => {
    const [listOfUsers, setListOfUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setListOfUsers(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);

    return (
        <div className='user-list'>
        <h1>User List</h1>
        <ul>
            {listOfUsers.map(user => (
            <li key={user.id}>
                {user.name} - {user.email}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default UserList;
