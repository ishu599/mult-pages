
  function Avatar(props) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }

  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
          
        </div>
      </div>
    );
  }
  
  function PaginationBtn() {
    return(<button></button>);
  }
  function Comment(props) {
 
    return (
      
        <div className="user-info">
       {props.text}
        </div>
       
      
    );
  }
  
  export default Comment

