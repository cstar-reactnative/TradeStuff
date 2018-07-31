import {Images} from '@theme';

export const items = [
    { thumbnail: Images.img_1, cat: 'Tech', id: 1 , userId: 1},
    { thumbnail: Images.img_2, cat: 'Sports', id: 2 , userId: 2},
    { thumbnail: Images.img_3, cat: 'Books', id: 3 , userId: 3},
    { thumbnail: Images.img_4, cat: 'Tech', id: 4 , userId: 3},
    { thumbnail: Images.img_5, cat: 'Clothing', id: 5 , userId: 2},
    { thumbnail: Images.img_6, cat: 'Sports', id: 6 , userId: 3},
    { thumbnail: Images.img_7, cat: 'Books', id: 7 , userId: 1},
    { thumbnail: Images.img_8, cat: 'Books', id: 8 , userId: 2},
    { thumbnail: Images.img_9, cat: 'Clothing', id: 9 , userId: 1},
    { thumbnail: Images.img_10, cat: 'Music', id: 10, userId: 2 },
    { thumbnail: Images.img_11, cat: 'Music', id: 11, userId: 1 },
];

export const users = [
    {
        id: 1,
        name: 'Jon dave',
        city: 'Washington, DC'
    },
    {
        id: 2,
        name: 'Jon doe',
        city: 'Nashvile, TN',
    },
    {
        id: 3,
        name: 'jhonny blaze',
        city: 'Los Angeles, CA',

    },
]

export const categories = [
    {itemImage: "computer" ,itemName:"Tech" ,index:"Tech" },
    {itemImage: "image" ,itemName:"Clothing" ,index:"Clothing" },
    {itemImage: "accessibility" ,itemName:"Sports" ,index:"Sports" },
    {itemImage: "library-books" ,itemName:"Books" ,index:"Books" },
    {itemImage: "music-video" ,itemName:"Music" ,index:"Music" },
];

export const likedMyMe = [1,3,5,6,8];

export const currentUser = 1;

export const getItems = () => items.filter(v => v.userId !== currentUser);

export const getMyItems = () => items.filter(v => v.userId === currentUser);

export const getUserItems = (id = currentUser) => items.filter(v => v.userId === id);

export const getLikedByMe = () => items.filter(v => v.userId !== currentUser && likedMyMe.indexOf(v.id) > -1);

export const getUser = (id) => users[id-1];

export const getItem = (id) => items[id-1];

export const getSentItems = () => [[1, 2], [7,8], [9,10]].map(trade => trade.map(id => getItem(id)));

export const getReciveItems = () => [[1, 2], [7,8], [9,10]].map(trade => trade.reverse().map(id => getItem(id)));
// export const getReciveItems = getSentItems;