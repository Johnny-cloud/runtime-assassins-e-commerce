let handbags = [
    {
        "id" : 1,
        "description" : "Designer Handbag Women Shoulder Bag Ladies Handbag Women Purse",
        "image" : "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZGJhZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
        ,"amount" : 1500,
        "rating" : 9
    },
    {
        "id" : 2,
        "description" : "(WDL7429) Business Handbag Ladies Side Bag Branded Purse for Women Womens Designer Handbags",
        "image" : "https://m.media-amazon.com/images/I/51erAzSXnwL._UY535_.jpg",
        "amount" : 1500,
        "rating" :8
    },
    {
        "id" : 3,
        "description" : "Small Makeup Bag Handy Travel Cosmetic Toiletry Pouch Leopard Snakeskin Handbag Leather Purse for Women Girls",
        "image" : "https://m.media-amazon.com/images/I/71hFps3M3lL._UX500_.jpg",
        "amount" : 1500,
        "rating": 9
    },
    {
        "id" : 4,
        "description" : "New Arrival Crocodile Pattern Leather Ladies Handbag Women Purse",
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5dqHcNXJ0-W9NAVOrtMLhAIwFxWk78wFOKQ&usqp=CAU",
        "amount" : 1500, 
        "rating" : 9
    },
    {
        "id" : 5,
        "description" : "New Arrival Crocodile Pattern Leather Ladies Handbag Women Purse",
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWjoTuuL8LOYt3WbYPR1IA3YpostqmYbihKYaKtMdpfHH5cten4brSTfO3Er2Lp4YbEI4&usqp=CAU"
        ,"amount" : 1500, 
        "rating" : 7
    },
    {
        "id" : 6,
        "description" : "High Quality Popular Daily Use Outdoor Shopping Women Handbags PU Leather Lady Shoulder Purses",
        "image" : "https://www.chanel.com/images/t_one////q_auto:good,f_auto,fl_lossy,dpr_1.2/w_1920//mini-flap-bag-light-green-white-ecru-shaded-sequins-gold-tone-metal-shaded-sequins-gold-tone-metal-packshot-artistique-vue1-as3965b10633no020-9521332781086.jpg"
        ,"amount" : 1500, 
        "rating" : 7
    },
    {
        "id" : 7,
        "description" : "Wholesale Custom Female Shoulder Bag Crossbody Purse for Lady Fashion PU Leather Women Handbag",
        "image" : "https://www.chanel.com/images/t_one///q_auto:good,f_auto,fl_lossy,dpr_1.2/w_1920//mini-evening-bag-light-pink-wool-tweed-gold-tone-metal-wool-tweed-gold-tone-metal-packshot-default-as3526b09388nl020-8857327435806.jpg"
        ,"amount" : 1500,
        "rating" : 8
    },
    {
        "id" : 8,
        "description" : "Factory a Wholesale Exquisite Leather Women′s Bags Fashion Bag Crossbody Bag Single Shoulder Handbag Purse",
        "image" : "https://a.1stdibscdn.com/chanel-yellow-tweed-medium-19-flap-bag-for-sale/v_13101/1678097685090/luxury_women_chanel_used_handbags_p757669_014_master.jpg?width=768"
        ,"amount" : 1500, 
        "rating" : 8
    },
    {
        "id" : 9,
        "description" : "Wholesale Replicas Bags Handbags Designer Bag Handbags Women Purses",
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0WvfS_AGfI7ht2bdIRkLu9OzSwOJk2TfHfA&usqp=CAU",
        "amount" : 1500,
        "rating" : 8
    },
    {
        "id" : 10,
        "description" : "Top-Design Cowhide Leather Polka-DOT Wallet Fashion Classical Woman Purses",
        "image" : "https://hips.hearstapps.com/hbz.h-cdn.co/assets/16/24/4000x2250/hd-aspect-1466178782-gettyimages-540778074.jpg?resize=1200:*"
        ,"amount" : 1500,
        "rating" : 8
    }
]

exports.handler = async () => {
    return {
      statusCode: 200,
      headers : {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      body: JSON.stringify(handbags),
    };
  };