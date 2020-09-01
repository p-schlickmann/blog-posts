import React from 'react'
import { connect } from 'react-redux'


const UserHeader = ({id, user, fetchUser}) => {
    return (
        <div className="header">
            {user ? user.name : null}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const user = state.users.find(user => user.id === ownProps.id);
    return {user}
} 

export default connect(mapStateToProps)(UserHeader)
