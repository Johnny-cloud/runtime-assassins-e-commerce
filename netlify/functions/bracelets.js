let bracelets = [
    {
        "id" : 1,
        "description" : "4-12mm Round ABS Cheap Shape Imitation Pearls White Beads Handmade DIY Bracelet Jewelry Accessories Making Wholesale",
        "image" : "https://wallpapercave.com/wp/wp2487338.jpg",
        "amount" : 1500,
        "rating" : 7
    },
    {
        "id" : 2,
        "description" : "15g/lot 2mm 3mm 4mm Czech Glass Solid Seed Beads DIY Bracelet Beads For Jewelry Making Accessories",
        "image" : "https://www.vhv.rs/dpng/d/146-1466197_22ct-mens-gold-bracelet-bracelet-hd-png-download.png",
        "amount" : 1000,
        "rating": 4
    },
    {
        "id" : 3,
        "description" : "Trend Sunflower Flower Resin Earrings for Women Korean Fashion Funny Designer Earrings Elegant Unique Geometric Earring Fun",
        "image" : "https://e1.pxfuel.com/desktop-wallpaper/794/137/desktop-wallpaper-bracelet-gold-jewelry-thumbnail.jpg",
        "amount" : 2000,
        "rating" : 10
    },
    {
        "id" : 4,
        "description" : "Isywaka Light Blue Colors 4*6mm 50pcs Rondelle Austria faceted Crystal Glass Beads Loose Spacer Round Beads for Jewelry Making",
        "image" : "https://m.media-amazon.com/images/I/61pLMB8VUZL._AC_SX522_.jpg",
        "amount" : 1500,
        "rating" : 8
    },
    {
        "id" : 5,
        "description" : "Brand new original European charm puppy, beautiful rainbow suitable for Pandora bracelet DIY women's jewelry",
        "image" : "https://wallpaperaccess.com/full/2135566.jpg",
        "amount" : 800,
        "rating" : 8
    },
    {
        "id" : 6,
        "description" : "Astronaut Enamel Pin Adventure Ocean Drifting Wishing Bottle Brooches Bag Lapel Pin Badge Artistic Design Brooch Pin Wholesale",
        "image" : "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhY2VsZXR8ZW58MHx8MHx8&w=1000&q=80"
        ,"amount" : 900,
        "rating" : 6
    },
    {
        "id" : 7,
        "description" : "Approx.1000pcs 2mm Cream Color Czech Glass Beads for Jewelry Making DIY Beads Round Bracelet Necklace Earrings Accessories",
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zJo7XbdSGAWJLNQHCjx1Ji0lYu17Oa3MgA&usqp=CAU"
        ,"amount" : 1500,
        "rating" : 5
    },
    {
        "id" : 8,
        "description" : "Cat Earrings Luna and Artemis Anime Inspired Enamel Drop Earrings Kawaii Animal Jewelry for Women Girl Gift",
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5f9qaO68HcHAVVtACb7QaiXHoCUQ36GOZltYyu5ucPuchW_vg0M2NtNT-TjQ6rafG38w&usqp=CAU"
        ,"amount" : 1350,
        "rating": 10
    },
    {
        "id" : 9,
        "description" : "Isywaka White Multicolor 4*6mm 50pcs Rondelle Austria faceted Crystal Glass Beads Loose Spacer Round Beads for Jewelry Making",
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAt5s2iigrft7UhN3DbaUQ-ZRJEE7AXIwcuA&usqp=CAU",
        "amount" : 1300,
        "rating" : 3
    },
    {
        "id" : 10,
        "description" : "Wholesale colorful multicolor 2mm 3mm 4mm Czech glass beads for bracelet necklace earrings jewelry DIY seed beads materia",
        "image" : "https://cdn.shopify.com/s/files/1/0003/6500/2803/products/B496-Diamond-20k-Rose-Black-1_600x.jpg?v=1665023329"
        ,"amount" : 1100,
        "rating" : 5
    }

]

exports.handler = async () => {
    return {
      statusCode: 200,
      headers : {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
      body: JSON.stringify(bracelets),
    };
  };