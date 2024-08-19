/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"
import { initialFriends } from "../public/data"

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  return (<>
  <div className="">
  <Header />
  <Profile setShowAddFriend={setShowAddFriend} />
  { showAddFriend && <FriendForm setShowAddFriend={setShowAddFriend} />}
  </div>
  
  </>
    
  )
}

function Header(){
  return (<div className=" text-white font-bold font-serif p-3 text-center bg-gradient-to-t from-blue-700 via-blue-300 to-blue-700">
    Eat & Split
  </div>)
}

function Profile({setShowAddFriend}){
  return <>
  <div className="flex">
          <div className="w-8/12">
            <span>
              {initialFriends.map((friend)=>{
                return <div className="inline-flex justify-between w-11/12 m-5 p-3 border border-blue-700 shadow-sm shadow-blue-900" key={friend.id}>
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
            <Button onClick={()=>setShowAddFriend(true)}>Add Friend</Button>
            
          </div>
          <div className=" m-5 p-3 "><SplitForm /></div>
          </div>
        </>
}

function Button({children, onClick}){
  return <div className="">
  <button onClick={onClick} className="m-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-4 py-2 text-center ml-5 mt-1">{children}</button>
</div>
}

function FriendForm({setShowAddFriend}) {
  return <form className="m-5 border-2 border-blue w-11/12 shadow-sm pl-4 py-5 shadow-black">
    <div>
            <label htmlFor="name" className="m-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Name</label>
            <input type="text" id="name" className="mx-3 w-11/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        <div>
            <label htmlFor="image" className="m-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Image URL</label>
            <input type="text" id="image" className="mx-3 mb-5 w-11/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="image.png" required />
        </div>
    <Button onClick={()=>setShowAddFriend(false)}>Close</Button>
  </form>
}

function SplitForm({setShowAddFriend}) {
  return <form className="m-5 shadow-sm p-4 shadow-black">
    <div>
            <label htmlFor="expense" className="m-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total Expense</label>
            <input type="text" id="expense" className="mx-3 w-11/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1000" required />
        </div>
        <div>
            <label htmlFor="splitter" className="m-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Split with: </label>
            <input type="text" id="image" className="mx-3 mb-5 w-11/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Choose a friend" required />
        </div>
        <div>
            <label htmlFor="amount" className="m-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Split Amount</label>
            <input type="text" id="image" className="mx-3 mb-5 w-11/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="image.png" required />
        </div>
        <div>
            <label htmlFor="resturant" className="m-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Resturant</label>
            <input type="text" id="image" className="mx-3 mb-5 w-11/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Resturant Name" required />
        </div>
    <Button onClick={()=>setShowAddFriend(false)}>Split</Button>
  </form>
}

export default App
