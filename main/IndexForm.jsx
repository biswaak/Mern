import UserTableComponent from "../User Table/UserTable";
import UserFormComponent from "../component/UserForm";

export default  function UserIndexForm()
{
    return(
        <div>
            <UserFormComponent/>
            <UserTableComponent/>
        </div>
    )
}