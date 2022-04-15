export const FriendCard = ({singleFriendUser, handleDeleteFriend}) => {

    return (
      <>
        <div className="card">
          <div className="cardContent">
            <h3>{singleFriendUser.user.name}</h3>
            <br />
            <p>{singleFriendUser.user.email}</p>
            <button
              type="button"
              onClick={() => handleDeleteFriend(singleFriendUser.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </>
    )

}