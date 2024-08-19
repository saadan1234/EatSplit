import { initialFriends } from "../public/data"

function App() {
  return (<>
  <Profile />
  <FriendForm />
  </>
    
  )
}

function Profile(){
  return <>
          <div>
            <span>
              {initialFriends.map((friend)=>{
                return <div className="inline-flex justify-between w-3/4 m-5 p-3 border border-blue-700 shadow-sm shadow-blue-900" key={friend.id}>
                  <span>
                    <img className="bg-blue-200 shadow-md shadow-blue-900  p-1 mr-2 w-10 h-10 rounded-full" src={friend.image} alt={friend.name} />
                  </span>
                  <span>
                  <span>{friend.id}{" "}</span>
                  <span>{friend.name}</span>
                  <div className={
                      friend.balance <= 0 ? "text-red-700" : "text-green-700"
                    }>
                    {
                      (friend.balance<=0)? (`You owe ${(friend.name)} $ ${Math.abs(friend.balance)}`): (`${friend.name} owes you ${friend.balance} $`)
                    }
                    </div>
                  </span>
                  <Button>Select</Button>
                </div> 
              })}
            </span>
          </div>
        </>
}

function Button({children}){
  return <div className="end-0 ">
  <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-4 py-2 text-center ml-5 mt-1">{children}</button>
</div>
}

function FriendForm() {
  return <form>
    <label htmlFor="addFriend">Friend Name</label>
    <input type="text"></input>
    <label htmlFor="addFriend">Friend Image</label>
    <input className="border-2 border-black" type="text"></input>
    <Button>Add Friend</Button>
  </form>
}

export default App
