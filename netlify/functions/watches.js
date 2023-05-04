let watches = [
    {
        "id" : 1,
        "description" : "Olevs 5562 Men Quartz Chronograph Buy Online Man Wristwatch Calender Timer Casual Quartz Watches",
        "image" : "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHw%3D&w=1000&q=80"
        ,"amount" : 1500,
        "rating" : 8
    },
    {
        "id" : 2,
        "description" : "olevs 5885 Top high quality sport watches for men waterproof classic stainless steel fashion man wrist business Quartz Watches",
        "image" : "https://c4.wallpaperflare.com/wallpaper/29/520/1004/breitling-swiss-luxury-watches-swiss-wrist-watches-luxury-analog-watch-breitling-hd-wallpaper-preview.jpg"
        ,"amount" : 1500,
        "rating" : 8
    },
    {
        "id" : 3,
        "description" : "Men Watch OLEVS 2858 Business Multi Time Zone Wristwatch Waterproof Feature Analog Date Watch Stainless Steel Quartz Watch",
        "image" : "https://c4.wallpaperflare.com/wallpaper/816/832/60/watch-luxury-watches-ulysse-nardin-wallpaper-preview.jpg"
        ,"amount" : 1500,
        "rating" : 9
    },
    {
        "id" : 4,
        "description" : "Olevs 2870 Waterproof Chronograph Luminosos Analogue Luxury Crescent Steel Multifuncional Com Tres Olhos Homem quartz watches",
        "image" : "https://cdn.shopify.com/s/files/1/0263/1919/2169/files/ow-xmas-mobile-rolex_x800.jpg?v=1613637600",
        "amount" : 1500,
        "rating" : 7
    },
    {
        "id" : 5,
        "description" : "New Style Wearable Ble NRF52810 iBeacon Wristband Beacon Bracele",
        "image" : "https://i.pinimg.com/originals/c4/2a/f6/c42af627abc222376be52d4512e26ce9.jpg",
        "amount" : 1500,
        "rating" : 8
    },
    {
        "id" : 6,
        "description" : "Custom S9871G Calendar Dial Quartz Wrist Watch Relojes Para Hombres Silver Band Arabic Watches For Men",
        "image" : "https://w0.peakpx.com/wallpaper/954/28/HD-wallpaper-hublot-wrist-watch-clock-horloge-luxury-watches-thumbnail.jpg"
        ,"amount" : 1500,
        "rating" : 10
    },
    {
        "id" : 7,
        "description" : "SINOBI Cool Boys Watch S9823G All Black Mens Watch With Luminous Hands Stainless Steel Strap Simple Watch With No Dial Saat",
        "image" : "https://wallpaperaccess.com/full/1332142.jpg",
        "amount" : 1500,
        "rating" : 6
    },
    {
        "id" : 8,
        "description" : "Custom Logo Popular Watches Man Relogio Masculino Simple Men Quartz Wristwatch Relojes Hombre",
        "image" : "https://wallpaperaccess.com/full/1332134.jpg",
        "amount" : 1500,
        "rating" : 7
    },
    {
        "id" : 9,
        "description" : "sinobi Men's Digital Watch Custom Logo Watches Chronograph Wristwatches Waterproof Quartz Sports Watch Custom Business",
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdROWVT37xY6i5dlsK5u1aoZiPaaxxx-d2-BHFogivBAMRrJCgcYBWOj57ZbmPjgg_xOA&usqp=CAU"
        ,"amount" : 1500,
        "rating" : 5
    },
    {
        "id" : 10,
        "description" : "SINOBI Brand S9863 Mens Quartz Watches Temperament Wrist Watch Fashion Trend Waterproof Men Luxury Watch",
        "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5OngoKTwTlkojpkJcc-sQ2Jy5wg-pHZK2GIAY6VKOl2n-F0UFZV7l5S7r98hkVFpTwVM&usqp=CAU"
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
      body: JSON.stringify(watches),
    };
  };