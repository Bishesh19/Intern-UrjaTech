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