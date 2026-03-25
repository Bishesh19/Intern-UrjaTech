const getUserFromDB =(userId) => {
    return new Promise((resolve, reject) => {
        const fakeDB = [
            { id: 1, name: 'Bishesh Lamichhane' , role: 'admin'},
            { id: 2, name: 'Sumit Chettri' , role: 'user'},
            { id: 3, name: 'Nishan Malla' , role: 'user'}
        ];

        setTimeout(() => {

        const user = fakeDB.find(u => u.id === userId);

        if (user) {
            resolve(user);
        } else {
            reject(new Error(`User ${userId} not found`));
        }
    }, 1000);
});
};

getUserFromDB(1)
    .then(user => {
        console.log(`User found: ${user.name} (Role: ${user.role})`);
    })
    .catch(err => {
        console.error('Error:', err.message);
    });

    // using async/await
const loadUser = async (id) => {
  try {
    const user = await getUserFromDB(id);
    console.log("Found:", user.name);
  } catch (err) {
    console.log("Error:", err.message);
  }
};

loadUser(1);
loadUser(99);

// Fetch API Example
const fetchUser = async (id) => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    const user = await res.json();

    const { name, email, address: { city } } = user;

    console.log(`${name} | ${email} | City: ${city}`);
  } catch (err) {
    console.log("Failed:", err.message);
  }
};

fetchUser(1);
fetchUser(999); // 404 case