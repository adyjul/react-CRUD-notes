import { Component } from "react";

class Header extends Component{
    render(){
        return(
            <>
            <div className="note-app__header">
                <h1>Notes</h1>
                <div className="note-search">
                    <input type="text" placeholder="Cari catatan....."/>
                </div>
            </div>
            </>
        )
    }
}

export default Header;