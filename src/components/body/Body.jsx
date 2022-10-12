import { Component } from "react";
import Input from './input/Input';
import { Catatan } from "./catatan/Catatan";
import {getInitialData,showFormattedDate} from '../../utils/index';

class Body extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : getInitialData(),
            judul : '',
            isi : ''
        }

        this.changeData = this.changeData.bind(this);
        this.deleteData = this.deleteData.bind(this);    
        this.onAddForm = this.onAddForm.bind(this);
    }    


    onAddForm({judul,isi}){
        let today = new Date()
        this.setState((value)=> {
            return {
                data : [
                    ...value.data,{
                        id : +today,
                        title : judul,
                        body : isi,
                        createdAt : today.toISOString(),
                        archived : false,
                    }
                ]
            }
        })
    }

    changeData(id){
        let tempData  = this.state.data;
        let indexData = this.state.data.findIndex(rs => rs.id === id);
        if(tempData[indexData].archived === false){
            tempData[indexData].archived = true;
        }else{
            tempData[indexData].archived = false;
        }
        this.setState({
            data : tempData
        });                           
    }    

    deleteData(id){      
        let tempData = this.state.data;
        let indexData = this.state.data.findIndex(rs => rs.id === id);

        tempData.splice(indexData,1);
        this.setState({
            data : tempData
        });
    }

    render(){       
        let state = this.state;
        return(
             <div className="note-app__body">
                <Input onAddForm={this.onAddForm}/>                
                <Catatan data={state.data} changeData={this.changeData} deleteData={this.deleteData} convert={showFormattedDate}/>
             </div>
        )
    }
}

export default Body;