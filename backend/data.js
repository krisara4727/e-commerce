import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name:'krishna',
            email:'krishna@gmail.com',
            password:bcrypt.hashSync('1234', 8),
            isAdmin:true,
        },
        {
            name:'user',
            email:'user@gmail.com',
            password:bcrypt.hashSync('1234', 8),
            isAdmin:false,
        },

    ],
    products:[
        {
            name:"NIke slim shirts",
            category:"shirts",
            image: '/images/p1.jpg',
            price:120,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product',
            countInStock:10,
        },
        {
            name:"Adidas slim shirts",
            category:"shirts",
            image: '/images/p2.jpg',
            price:140,
            brand: 'Adidas',
            rating: 4.4,
            numReviews: 100,
            description: 'high quality product',
            countInStock:20,
        },
        {
            name:"roadster slim shirts",
            category:"shirts",
            image: '/images/p1.jpg',
            price:120,
            brand: 'Nike',
            rating: 4.0,
            numReviews: 17,
            description: 'high quality product',
            countInStock:0,
        },
        {
            name:"puma slim shirts",
            category:"pants",
            image: '/images/p4.jpg',
            price:210,
            brand: 'Nike',
            rating: 4.8,
            numReviews: 31,
            description: 'high quality product',
            countInStock:70,
        },
        {
            name:"polo slim shirts",
            category:"pants",
            image: '/images/p5.jpg',
            price:540,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 310,
            description: 'high quality product',
            countInStock:43,
        },
        {
            name:"whitehouse slim shirts",
            category:"pants",
            image: '/images/p6.jpg',
            price:520,
            brand: 'puma',
            rating: 4.9,
            numReviews: 910,
            description: 'high quality product',
            countInStock:10,
        },
    ]
}

export default data;