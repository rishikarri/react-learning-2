// From the snippet below extract the following components:
// - UserInfo
// - Avatar
// - Comment Body
// - Badges

// You may organize each however you want.
// I have not provided any data. Try and break it down without, and add in some dummy datat when ready to test.

var author = {
  avatarUrl: "http://khaledhosseini.com/wp-content/uploads/2013/01/home-bio-portrait.png",
  name: "Khaled Hosseini"
};

var userBadges = ["Wrote Kiterunner", "Wrote A Thousand Splendid Suns", "Wrote And the Mountains Echoed"]
//create a date with time of now 
var today = new Date(); 

function Badges(props){
  return(
    <div className="UserBadges">
        <div className="badge">{props.userBadge[0]}</div>
        <div className="badge">{props.userBadge[1]}</div>
        <div className="badge">{props.userBadge[2]}</div>
    </div>
    
  )
}

// in this occassion, props is the date we receive
function formatDate(props){
  return(
    
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      
      <div className="Comment-body">
        <h1>{props.commentHeading}</h1>
        <div className="Comment-text">{props.text}</div>

        <div className="Comment-date">
          {formatDate(props.date)}
        </div>

        <Badges userBadge={userBadges} />
      </div>
    </div>
      
  );
}

function Avatar(props){
  return(
    <div>
      <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}/>
    </div>
  )
  
}

function UserInfo(props){
  return(
    <div className="UserInfo">        
        <Avatar author={author} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
    </div>
  )
}



function Application(){
  return(
    // <Avatar imageSrc="http://khaledhosseini.com/wp-content/uploads/2013/01/home-bio-portrait.png"/>     
    <div className="application">
      <UserInfo author={author} />
      <Comment date={today} commentHeading="Author of many best sellers" text="Khaled Hosseini is an Afghan-born American novelist and physician. After graduating from college, he worked as a doctor in California, an occupation that he likened to 'an arranged marriage'"/>
    </div>
  )
}

ReactDOM.render(
<Application />, 
document.getElementById("container")
)