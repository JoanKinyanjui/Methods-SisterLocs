type ReviewProps = {
    name: string;
    review: string;
    image: string;
    proffession: string;
    rating: number;
    before?: string;
    after?: string;
    slideNo?: string;
}

export const reviewData:ReviewProps[] =[
    {
        name: "Carol Njuguna",
        image:'https://i.pinimg.com/474x/3e/75/ea/3e75ea1eced5809aa745d0ce8c6ca7c9.jpg',
        review: "I love the service, I have been a client for 3 years now love the I love the service, I have been a client for 3 years now love the I love the service, I have been a client for 3 years now love the service, I have been a client for 3 years now  love the service, I have been a client for 3 years now and I am always satisfied. The staff is friendly and professional.",
        proffession: "Beautician",
        rating: 5,
        slideNo:'slide1',
        before:"#slide4",
        after:"#slide2",

    },
    {
        name: "Joan Kinyanjui",
        image:'https://i.pinimg.com/474x/3e/75/ea/3e75ea1eced5809aa745d0ce8c6ca7c9.jpg',
        review: "I love the service, I have been a client for 3 years now love the I love the service, I have been a client for 3 years now love the I love the service, I have been a client for 3 years now love the service, I have been a client for 3 years now  love the service, I have been a client for 3 years now and I am always satisfied. The staff is friendly and professional.",
        proffession: "Doctor",
        rating: 4,
        slideNo:'slide2',
        before:"#slide1",
        after:"#slide3"
    },
    {
        name: "Stella Wanga",
        image:'https://i.pinimg.com/474x/3e/75/ea/3e75ea1eced5809aa745d0ce8c6ca7c9.jpg',
        review: "I love the service, I have been a client for 3 years now love the I love the service, I have been a client for 3 years now love the I love the service, I have been a client for 3 years now love the service, I have been a client for 3 years now  love the service, I have been a client for 3 years now and I am always satisfied. The staff is friendly and professional.",
        proffession: "Business Woman",
        rating: 4,
        slideNo:'slide3',
        before:"#slide2",
        after:"#slide4"
    },
    {
        name: "Mary Kibabe",
        image:'https://i.pinimg.com/474x/3e/75/ea/3e75ea1eced5809aa745d0ce8c6ca7c9.jpg',
        review: "I love the service, I have been a client for 3 years now love the I love the service, I have been a client for 3 years now love the I love the service, I have been a client for 3 years now love the service, I have been a client for 3 years now  love the service, I have been a client for 3 years now and I am always satisfied. The staff is friendly and professional.",
        proffession: "Software Developer",
        rating: 5,
        slideNo:'slide4',
        before:"#slide3",
        after:"#slide1"
    }
]