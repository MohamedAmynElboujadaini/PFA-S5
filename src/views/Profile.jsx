const Profile = () => {
  return (
    <div class="container my-5">
      <div class="row">
        <div class="col-md-4 text-center">
          <img src="https://via.placeholder.com/150" alt="Profile Image" class="profile-img mb-3" />
          <h3>John Doe</h3>
          <p>johndoe@example.com</p>
        </div>
        <div class="col-md-8">
          <h2>Account Information</h2>
          <form>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" value="John Doe" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" value="johndoe@example.com" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" />
            </div>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
