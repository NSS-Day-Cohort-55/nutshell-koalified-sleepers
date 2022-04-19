export const UserCard=({singleUser, handleClickSaveFriend})=>{

    return (
        <>
          <div className="card">
            <div className="cardContent">
              <h3>{singleUser.name}</h3>
              <br />
              <p>{singleUser.email}</p>
              <button
        type="button"
        className="btn btn-primary"
        onClick={()=>{handleClickSaveFriend(singleUser.id)}}

      >
        Save to friend list
      </button>
            </div>
          </div>
        </>
      )
}