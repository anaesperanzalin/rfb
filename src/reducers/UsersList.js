import React from "react";
import {connect} from "react-redux";


class UsersList extends React.Component{

    createListItems(){
        return this.props.users.map((user)=>{
            return(
                <li key={user.id}>
                    {user.first} {user.movie}

                </li>
            );

        }

        )
    }

    render(){
        <ul>
            {this.createListItems()}
        </ul>
    }
}

function mapStateToProps(state){
    return{
        users: state.users 
    };
}

export default connect(mapStateToProps)(UsersList);