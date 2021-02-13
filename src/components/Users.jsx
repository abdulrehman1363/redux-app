import React ,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {fetchUsers} from '../redux'
const Users = () => {
    const Users = useSelector(state => state.users.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    },[])

    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {Users.map( user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default Users
