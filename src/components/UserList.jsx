const UserList = ({ users, loading, error }) => {
  if (loading) return <div>...loading</div>;
  if (error) return <div>Something went wrong</div>;
  if (!users) return null;
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {users.length &&
        users.map((item) => (
          <div key={item.id}>
            <img src={item.avatar} alt="" />
            <p>
              <strong>{item.first_name}</strong>
            </p>
            <p>{item.email}</p>
          </div>
        ))}
    </div>
  );
};

export default UserList;
