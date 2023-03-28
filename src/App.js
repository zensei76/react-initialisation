import "./App.css";

function App() {
  var people = [
    {
      name: "Bhargav",
      pic: "https://media1.giphy.com/media/gEwRbygRCpBZFxVj4t/giphy.gif",
    },
    {
      name: "WhereGav",
      pic: "https://media.tenor.com/ir2nX96xSJUAAAAC/ghosts-my-profile.gif",
    },
    {
      name: "Howgav",
      pic: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/14cb6b84808917.5d68451d7d126.gif",
    },
  ];
  // const time = 30 ;
  return (
    <div className='App'>
      {people.map(
        (person) => (
          // console.log(person),
          (<Message name={person.name} pic_link={person.pic} />)
        )
      )}
    </div>
  );
}

function Message({  name , pic_link }) { //object desructuring


  return (
    <div>
      <img
        className='profile-pic'
        src={
          pic_link ||
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        }
        alt={name}
      />
      <h1>Hello {name}!!!!!!!😒😒😒</h1>
    </div>
  );
}

export default App;
