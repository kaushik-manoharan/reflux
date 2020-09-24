import React from 'react'
import Reflux from 'reflux'
import Action from '../reflux/actions';
import StatusStore from '../reflux/stores';

export default class UserForm extends Reflux.Component{
    constructor(props){
        super(props);
        this.state = {name: '', email:'',allUsr: false}
        this.store=StatusStore;
        this.storeKeys = ['users'];
    }
    onChange = (e)=>{
        console.log(this.state)
        const {name,value} = e.target;
        this.setState({...this.state,[name]: value},()=>console.log(this.state))
    }
    showAll = ()=>{
        this.setState({allUsr: true})
    }
    onSubmit = ()=>{
        Action({name:this.state.name,email:this.state.email})
        this.setState({name: '', email:'',allUsr: false})

    }
    render(){
        var flag = this.state.name; var flag2 = this.state.email
        if(this.state.allUsr)return(<AllUser/>)
        return(
            <>
            <button id='showall' onClick={()=>this.showAll()}>Click Here</button> to list all users<br/>
            Name: <input type='text' name='name'  value={this.state.name} onChange={(e)=>this.onChange(e)}/><br/>
            Email: <input type='email' name='email' value={this.state.email} onChange={(e)=>this.onChange(e)}/><br/>
            <button id='submit' onClick={(e)=>{e.preventDefault();this.onSubmit();}}>Submit</button>
            <p>UserName: {flag}</p><p> MailId: {flag2}</p>
            </>
        )
    }
}

class AllUser extends Reflux.Component{
    constructor(props){
        super(props);
        this.state={}
        this.store = StatusStore;
    }
    componentDidMount(){
        console.log(this.state)
    }
    render(){
        console.log('store exists',this.state)
        return(
            <div>
                            <table>
                <tr>
                    <th style={{borderRight: '1px solid black', padding: '1vh'}}>Name</th>
                    <th style={{ padding: '1vh'}}>Email</th>
                </tr>
            {this.state.users.map((f,i)=>
<tr>
                <td style={{borderRight: '1px solid black', padding: '1vh'}}>{f.name}</td> 
                <td style={{ padding: '1vh'}}>{f.email}</td>
                </tr>
            )}
                        </table>
            </div>
        )
    }
}