import React from 'react';
import { Link } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            users: []
        };
        this.filterOnChange = this.filterOnChange.bind(this);
    }

    filterOnChange(e) {
        this.setState({inputValue: e.target.value});
        console.log(this.state.inputValue);
     
    }
   
    render() {
        if(!this.props.users) return null;
        return (
            <div className="search">
                <div className="search-bar">
                    <svg stroke="currentColor" fill="rgb(118, 120, 122)" stroke-width="0" viewBox="0 0 24 24" height="0.7em" width="0.7em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"></path></g></svg>
                    <input type="search" placeholder="Search BlowUp" onChange={this.filterOnChange}/>
                </div>
                {this.state.inputValue.length > 0 ? this.props.users.filter(user => user.username.toLowerCase().includes(this.state.inputValue.toLowerCase())).map(user => {
                    return (
                        <div key={user.id} className='search-results'>
                             <li >
                                <Link to={`api/users/${user.id}`}>{user.username}</Link>
                            </li>
                        </div>
                           
                            )
                }) : null }
            </div>
        )
    }
}
export default Search;
