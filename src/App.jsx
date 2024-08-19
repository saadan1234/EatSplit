import { useState } from "react";
// Import the initial friends data
import { friends as initialFriends } from "../public/data";

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends); // Use state for friends
  
  function addFriend(name, image) {
    if(!name || !image){
      alert("Please fill all the fields!")
      return
    }
    const newFriend = {
      id: friends.length + 1, // Automatically increment id
      name: name,
      image: image,
      balance: 0,
    };
    setFriends([...friends, newFriend]); // Update state with the new friend
  }

  return (
    <>
      <div className="">
        <Header />
        <Profile
          friends={friends} // Pass friends state to Profile component
          setShowAddFriend={setShowAddFriend}
          addFriend={addFriend}
        />
        {showAddFriend && (
          <FriendForm setShowAddFriend={setShowAddFriend} addFriend={addFriend} />
        )}
      </div>
    </>
  );
}

function Header() {
  return (
    <div className="text-white font-bold font-serif p-3 text-center bg-gradient-to-t from-blue-700 via-blue-300 to-blue-700">
      Eat & Split
    </div>
  );
}

function Profile({ friends, setShowAddFriend }) {
  return (
    <>
      <div className="flex">
        <div className="w-8/12">
          <span>
            {friends.map((friend) => (
              <div
                className="inline-flex justify-between w-11/12 m-5 p-3 border border-blue-700 shadow-sm shadow-blue-900"
                key={friend.id}
              >
                <span>
                  <img
                    className="bg-blue-200 shadow-md shadow-blue-900 p-1 mr-2 w-10 h-10 rounded-full"
                    src={friend.image}
                    alt={friend.name}
                  />
                </span>
                <span>
                  <span>{friend.id}{" "}</span>
                  <span>{friend.name}</span>
                  <div
                    className={
                      friend.balance <= 0 ? "text-red-700" : "text-green-700"
                    }
                  >
                    {friend.balance <= 0
                      ? `You owe ${friend.name} $ ${Math.abs(friend.balance)}`
                      : `${friend.name} owes you ${friend.balance} $`}
                  </div>
                </span>
                <Button>Select</Button>
              </div>
            ))}
          </span>
          <Button onClick={() => setShowAddFriend(true)}>Add Friend</Button>
        </div>
        <div className="m-5 p-3 ">
          <SplitForm />
        </div>
      </div>
    </>
  );
}

function Button({ children, onClick }) {
  return (
    <div className="">
      <button
        onClick={onClick}
        className="m-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-xl text-sm px-4 py-2 text-center ml-5 mt-1"
      >
        {children}
      </button>
    </div>
  );
}

function FriendForm({ setShowAddFriend, addFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit (e){
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="m-5 border-2 border-blue w-11/12 shadow-sm pl-4 py-5 shadow-black">
      <div>
        <label
          htmlFor="name"
          className="m-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          className="mx-3 w-11/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John"
          required
        />
      </div>
      <div>
        <label
          htmlFor="image"
          className="m-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Image URL
        </label>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          id="image"
          className="mx-3 mb-5 w-11/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="image.png"
          required
        />
      </div>
      <div className="flex px-5 justify-between mr-6 ">
        <Button onClick={() => addFriend(name, image)}>Add</Button>
        <Button onClick={() => setShowAddFriend(false)}>Close</Button>
      </div>
    </form>
  );
}

function SplitForm() {
  return (
    <form className="m-5 shadow-sm p-4 shadow-black">
      {/* Add form fields here */}
      <Button>Split</Button>
    </form>
  );
}

export default App;
