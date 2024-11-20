import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  -logo
 *  -Nav items
 * Body
 *  -search
 *  -restaurantcard
 *      -img
 *      -name of res,star rating,cuisine,delivery time
 * 
 */

const Header=()=>{
    return (
        <div className="Header">
            <div>
                <img  className="logo" src="https://cdn.sanity.io/images/kts928pd/production/b374a124fc505ab3255fadae257d90e8e4a4855e-449x432.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>cart</li>

                </ul>

            </div>
        </div>
    )
}
//you can also give style from here but it is not recommanded --inline css
const styleCard={
    backgroundColor:"cream",
}

const RestaurantCard=(props)=>{
    // console.log(props)
    const {resData}=props;
    //decluttering instead of writing everything in h3
    const {cloudinaryImageId,name,cuisines,avgRating}=resData?.card.card.info
    const {deliveryTime}=resData?.card.card.info.sla
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating}</h3>
            <h3>Delivery Time : {deliveryTime}</h3>
        </div>
    )

}
const ResObj=[{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "845179",
        "name": "Mehfile's Biryani",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/11/f7a01dbf-5cb5-4d99-aa9e-0b426d66c443_ea28cde9-e38c-41bf-8621-7697e0d2d507.jpg",
        "locality": "Krishna Nagar Colony",
        "areaName": "Kondapur",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Chinese",
          "Arabian"
        ],
        "avgRating": 3.4,
        "parentId": "500024",
        "avgRatingString": "3.4",
        "totalRatingsString": "89",
        "promoted": true,
        "adTrackingId": "cid=21552583~p=0~adgrpid=21552583#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=845179~eid=328eae3f-d133-40d1-a42d-aab552912863~srvts=1732062930656~collid=83639",
        "sla": {
          "deliveryTime": 45,
          "lastMileTravel": 6.5,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "6.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-20 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "21552583"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=845179&source=collection&query=Biryani",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "477574",
        "name": "Masala Chowk",
        "cloudinaryImageId": "vfl6glh6qxzq4wahlff8",
        "locality": "Jal Vayu Vihar",
        "areaName": "Kukatpally",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Indian"
        ],
        "avgRating": 3.7,
        "parentId": "132974",
        "avgRatingString": "3.7",
        "totalRatingsString": "351",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-20 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹150",
          "discountTag": "SAVE BIG",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=477574&source=collection&query=Biryani",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "845186",
        "name": "New Green Bawarchi",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/6/45ee3eb4-ce1f-4e75-aca6-24d499c266ad_2ac9a719-b930-403e-855d-191e6554cef9",
        "locality": "Krishna Nagar Colony",
        "areaName": "Miyapur",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Indian",
          "Chinese",
          "Biryani"
        ],
        "avgRating": 3.3,
        "parentId": "146619",
        "avgRatingString": "3.3",
        "totalRatingsString": "33",
        "promoted": true,
        "adTrackingId": "cid=21552861~p=1~adgrpid=21552861#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=845186~eid=483d9a23-5095-4f5e-9ea5-917dd00078f9~srvts=1732062930656~collid=83639",
        "sla": {
          "deliveryTime": 42,
          "lastMileTravel": 6.3,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "6.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-20 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "21552861"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=845186&source=collection&query=Biryani",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "730966",
        "name": "Hitex Bawarchi",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/7/15/587c2ba1-e527-49c0-af8c-07aee858c735_616ae54f-c41a-46c1-8879-766a34c5c036.JPG",
        "locality": "Kaithalapoor",
        "areaName": "Kukatpally",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Biryani",
          "Chinese",
          "Tandoor",
          "Kebabs"
        ],
        "avgRating": 3.5,
        "parentId": "4977",
        "avgRatingString": "3.5",
        "totalRatingsString": "142",
        "sla": {
          "deliveryTime": 44,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-27 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=730966&source=collection&query=Biryani",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "863050",
        "name": "Airport Bawarchi",
        "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/6/499a708e-f843-47d9-8d9d-93433ac53c58_6c236fe4-21d3-4dfe-b231-fb1da9b99d88",
        "locality": "Krishna Nagar Colony",
        "areaName": "Miyapur",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Chinese",
          "Biryani",
          "Fast Food"
        ],
        "avgRating": 3,
        "parentId": "19758",
        "avgRatingString": "3.0",
        "totalRatingsString": "22",
        "promoted": true,
        "adTrackingId": "cid=21554491~p=2~adgrpid=21554491#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=863050~eid=cbfbfd97-fc43-4a21-bba0-b56c83fea938~srvts=1732062930656~collid=83639",
        "sla": {
          "deliveryTime": 52,
          "lastMileTravel": 6.3,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "6.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-27 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.9",
            "ratingCount": "2.0K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "21554491"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=863050&source=collection&query=Biryani",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "730977",
        "name": "Mehfil Biryani",
        "cloudinaryImageId": "6538c94356c1f0b2ce0008584bd455e4",
        "locality": "V V Nagar",
        "areaName": "Kukatpally",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Biryani",
          "Snacks"
        ],
        "avgRating": 2.9,
        "parentId": "262188",
        "avgRatingString": "2.9",
        "totalRatingsString": "3.2K+",
        "sla": {
          "deliveryTime": 41,
          "lastMileTravel": 4.3,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "4.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-20 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textExtendedBadges": {
              
            },
            "textBased": {
              
            },
            "imageBased": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=730977&source=collection&query=Biryani",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
},
{
  "card": {
    "card": {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      "info": {
        "id": "660038",
        "name": "Mfc My Friends S Circle",
        "cloudinaryImageId": "df758e93a78088422147e59fd8df29e6",
        "locality": "Madhava Nagar Colony",
        "areaName": "Miyapur",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "Indian",
          "Chinese"
        ],
        "avgRating": 3.5,
        "parentId": "471259",
        "avgRatingString": "3.5",
        "totalRatingsString": "189",
        "promoted": true,
        "adTrackingId": "cid=21553404~p=3~adgrpid=21553404#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=660038~eid=1636dc89-8f9e-4c6c-96fa-28d4478ef2a0~srvts=1732062930656~collid=83639",
        "sla": {
          "deliveryTime": 39,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-11-20 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {
              
            },
            "imageBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "logoCtx": {
            "text": "BENEFITS"
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          },
          "commsStyling": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "campaignId": "21553404"
      },
      "analytics": {
        
      },
      "cta": {
        "link": "swiggy://menu?restaurant_id=660038&source=collection&query=Biryani",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
    },
    "relevance": {
      "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
      "sectionId": "MENU_RETURN_FOOD"
    }
  }
}]   

//whenever you are doing looping/map you should give key over there
//not using keys(not recommanded) <<< index as key <<<<<<<<<<<<<<<< unique id(best practice)
const Body=()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restro-container">
            {ResObj.map((restaurant)=>(<RestaurantCard key={restaurant.card.card.info.id} resData={restaurant}/>))}
            {/* <RestaurantCard resData={ResObj[0]}/>
            <RestaurantCard resData={ResObj[1]}/>
            <RestaurantCard resData={ResObj[2]}/>
            <RestaurantCard resData={ResObj[3]}/>
            <RestaurantCard resData={ResObj[4]}/>
            <RestaurantCard resData={ResObj[5]}/>
            <RestaurantCard resData={ResObj[6]}/> */}
            {/* <RestaurantCard resData={ResObj[7]}/> */}
           
            </div>

        </div>
    )
}

const AppLayout = () => {
  return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
  )
};
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>);




























//-----------------------------------------------------------------------------------------

// const heading = React.createElement("h1", { "id": "h1id", name: "h1name" }, "hello world from react");
// console.log(heading) //returns object i.e react element
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); //render method converting this obj(heading) to h1 tag(html element) and put it at there(browser)

// // created nested elements
// const parent = React.createElement("div", { id: "Parent" },
//     [React.createElement("div", { id: "Child" },
//         [React.createElement("h1", { id: "h1tag" }, "Iam on H1 Tag"), React.createElement("h2", { id: "h2tag" }, "Iam on H2 Tag")]), React.createElement("div", { id: "Child2" },
//             [React.createElement("h1", { id: "h1tag" }, "Iam on H1 Tag"), React.createElement("h2", { id: "h2tag" }, "Iam on H2 Tag")])])

// const root1 = ReactDOM.createRoot(document.getElementById("root1"));
// root1.render(parent);

// React element
// const heading=React.createElement("h1",{id:"heading"},"Hello React!!")
// console.log(heading)
// const root =ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
//creating h1 directly in html is better than above code because of this JSX is introduced
//JSX -javascript syntax which is easier to create react elements.React and JSX are different.It is html or xml like syntax

// const jsxHeading=(<h1 id="heading" className="head">Hello React using JSX</h1>);//it trans piled before reaching js using PARCEL and with the help of BABEL
// console.log(jsxHeading)
// const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// //functional component
// const Title = () => (
//       <h1 id="heading" tabIndex="5">
//         Hello React
//       </h1>
//   );
// //component inside a component
// const HeadingComponent = () => ( //all titles are same
//   <div id="container">
//     <Title/>
//     <Title></Title>
//     {Title()}
//     <h1 id="heading" className="head">
//       Hello React using functional component
//     </h1>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);
