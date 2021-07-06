import React, {useState} from 'react'
import AddUser from './components/AddUser'
import UserList from './components/UserList'

export default function App() {
	const [userList, setUserList] = useState([])
	const adduserHandler=(uName,uAge)=>{
		setUserList((prevUserList)=> {
			return[...prevUserList, {name:uName , age:uAge , id: Math.random().toString()},];
		});

	};
	return (
		<div>
			<AddUser onAddUser={ adduserHandler}/>
			<UserList users={userList}/>
		</div>
	)
}
