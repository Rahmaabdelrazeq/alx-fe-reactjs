const UserProfile = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>

              <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '10px' }}>{props.name}</h2>
      <p style={{ fontSize: '16px', margin: '5px 0' }}>
        Age: <span style={{ fontWeight: 'bold', color: 'green' }}>{props.age}</span>
      </p>
      <p style={{ fontSize: '14px', color: 'gray' }}>Bio: {props.bio}</p>
    </div>
        </div>
    );
};

export default UserProfile;

