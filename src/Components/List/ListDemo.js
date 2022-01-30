import React from 'react';
import List from './List/List';

const ListDemo = () => {
    const img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU";
    return (
        <div>
            <List icon="fab fa-facebook-messenger">Facebook Messenger</List>
            <List image={img}>Jonathon Nikolas</List>
            <List image={img} alt="secondary text">Jonathon Nikolas</List>
        </div>
    );
};

export default ListDemo;