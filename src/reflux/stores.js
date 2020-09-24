import saveUser from "./actions";
const Reflux = require("reflux");
class StatusStore extends Reflux.Store
{
    constructor()
    {
        super();
        this.state = {name: '', email:'',users:[]}; // <- set store's default state much like in React
        this.listenTo(saveUser, this.onSaveUser); // listen to the saveUser action
        // this.listenables = Actions;
    }
    onSaveUser(data)
    {
        const newFlag = {name: data.name, email: data.email}
        const users = this.state.users;
        console.log('inside onSaveUser');
        users.push(newFlag);
        this.setState({users: users,name: '', email:''});
    }
}
export default StatusStore