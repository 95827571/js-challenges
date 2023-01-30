const bobsFollowers = [
    "Arben",
    "Jenny",
    "John",
    "Jordan",
]

const hannahsFollowers = [
    "Alisha",
    "Blake",
    "Connor",
    "Jordan",
]

// Goes through each of bobs followers
for (let x = 0; x < bobsFollowers.length; x++) {
    const bobsFollower = bobsFollowers[x];

    // Goes through each of hannahs followers 
    for (let i = 0; i < hannahsFollowers.length; i++) {
        const hannahsFollower = hannahsFollowers[i];

        // 
        if (bobsFollower.toLowerCase() === hannahsFollower.toLowerCase()) {
            console.log(`Hannah and Bob share the follower: ${hannahsFollower}`);
        }
    }
}