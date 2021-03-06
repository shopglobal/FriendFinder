// ---------------------------------------
// Friends is outside main-dir for an added layer of security 
// ---------------------------------------

var friends = [
// {
//     "name": "High Average Always 5",
//     "photo": "https://drive.google.com/open?id=14BTtkQIvHO1jcOr7ELPAWcZpfkWaeTEEDg",
//     "scores": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
// },
{
    "name": "Mark",
    "photo": "https://image.ibb.co/epUwMR/35c9aa9.jpg",
    "scores": [5, 4, 2, 2, 4, 3, 4, 4, 5, 5]
}, {
    "name": "Ryan S.",
    "photo": "https://image.ibb.co/nGk4Qm/IMG_0900.jpg",
    "scores": [3, 3, 1, 2, 1, 2, 4, 3, 1, 2]
}, {
    "name": "Mark",
    "photo": "https://image.ibb.co/ffjykm/10731526_788370824554808_522872068_a.jpg",
    "scores": [4, 3, 2, 3, 4, 2, 4, 2, 2, 4]
}, {
    "name": "Milena Garces",
    "photo": "https://image.ibb.co/dBAcd6/Retro_Star_icon.png",
    "scores": [3, 4, 3, 2, 1, 3, 3, 5, 1, 5]
}, {
    "name": "Erik Denman",
    "photo": "https://image.ibb.co/krgNBR/erikdenman.png",
    "scores": [3, 4, 3, 2, 2, 1, 4, 5, 5, 5]
}, {
    "name": "Kendra Krzywicki",
    "photo": "https://image.ibb.co/d1y2BR/kendra_friendfinder.png",
    "scores": [2, 2, 3, 4, 1, 4, 3, 5, 4, 2]
},
// {
//     "name": "Low Low Always 1",
//     "photo": "https://drive.google.com/open?id=14BTtkQIvHO1jcOr7ELPAWcZpfkWaeTEEDg",
//     "scores": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// }
];

// ---------------------------------------
// constructor is exported to api route
// ---------------------------------------
function friendConstructor(name, picture, survey) {
    //Holds json info
    this.friendObj = {
        "name": name,
        "photo": picture,
        "scores": survey
    }

    //pushes to friends array
    this.newFriend = function () {
        friends.push(this.friendObj);
        this.findMatch();
    }

    //will hold match
    this.closestMatch;

    //used for api get function to display all friends
    this.showFriends = function () {
        return friends;
    }

    //loops and finds match
    this.findMatch = function () {
        var currentBestMatch;
        var currentBestMatchScore = -1;

        for (var i in friends) {
            //dont match yourself
            if (friends[i] != this.friendObj) {
                var newFriendBestMatch = calcFriendDifference(friends[i].scores, this.friendObj.scores);

                if (currentBestMatchScore >= 0) {
                    if (newFriendBestMatch < currentBestMatchScore) {
                        currentBestMatch = friends[i];
                        currentBestMatchScore = newFriendBestMatch;
                    }
                }
                //drops first person in array to have baseline to compare
                else {
                    currentBestMatch = friends[i];
                    currentBestMatchScore = newFriendBestMatch;
                }
            }
        }
        this.closestMatch = currentBestMatch;
    }
}

module.exports = friendConstructor;

calcFriendDifference = function (arr1, arr2) {
    totalDifference = 0;
    for (var i in arr1) {
        totalDifference += Math.abs(arr1[i] - arr2[i]);
    }
    return totalDifference;
}