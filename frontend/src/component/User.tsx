interface UserProp {
    id: string,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

const User = (props: UserProp) => {
    return (
        <div className="user">
            <img src={props.avatar} alt={props.id}/>
            <h1> Hello I'm {props.last_name}, {props.first_name} </h1>
            <h2> Contact: {props.email} </h2>
        </div>
    );
}
export default User;