import { Component } from "react";


class Input extends Component{

    constructor(props){
        super(props);
        this.state = {
            judul : '',            
            isi : '',
            count : 50
        }
        
        this.onChangeJudulHandler = this.onChangeJudulHandler.bind(this);
        this.onChangeIsiHandler = this.onChangeIsiHandler.bind(this);
        this.addDataFromProps = this.addDataFromProps.bind(this);
    }    


    addDataFromProps(e){
        e.preventDefault();  
        let value = {
            judul : this.state.judul,
            isi : this.state.isi
        }      
        this.props.onAddForm(value);
        this.setState({
            judul : '',
            isi : ''
        })
    }

    onChangeJudulHandler(e){
      
        this.setState((value) => {
            return {
                judul : e.target.value,
                count : 50 - e.target.value.length
            }
        });
    }

    onChangeIsiHandler(e){
        this.setState(() => {
            return {
                isi : e.target.value
            }
        });
    }

    render(){
        
        return(
            <>
                <div className="note-input">
                    <h2>Buat catatan</h2>
                    <form onSubmit={this.addDataFromProps}>
                        <p className="note-input__title__char-limit" >Sisa karakter: {this.state.count}</p>
                        <input className="note-input__title" maxLength={50} value={this.state.judul} onChange={this.onChangeJudulHandler} type="text" placeholder="Ini adalah judul ..."/>                                          
                        <textarea className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..."  required="" value={this.state.isi}  onChange={this.onChangeIsiHandler} />
                            <button type="submit">Buat</button>
                    </form>
                </div>
            </>
        )
    }
}


export default Input;