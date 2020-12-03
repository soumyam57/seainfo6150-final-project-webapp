import React from "react";
import { render } from "@testing-library/react";
import GiftDetailDescription from "./GiftDetailDescription.jsx";

const giftdetails={
          "price":"$1000",
          "title":"Couple Rings",
          "shortDesc":"CHuir Wedding Couple Rings for Him and Her, Adjustable Celtic Knot Promise Ring Set",
          "category":"wedding",
          "categoryid":"couplerings",
          "img":
          {
             "url":"https://images-na.ssl-images-amazon.com/images/I/51mfwq0NDEL._AC_UX522_.jpg",
             "height":400,
             "width":500
          },
          "status": "In Stock",
          "description": ["MATERIALS Made of 30% Silver Alloy, White Gold Plating, AAA Grade Cubic Zirconia Stone RINGS SIZE", 
                         "Adjustable design, and don't worry about the size. Adjustable size range (US size) : Women: 4-8, Men: 5-10. Gift for her and him or yourself",
                         "PACKAGE INCLUDES 1 x Pair of Couple Ring Set (one for Her, the other for Him) in a simple pakage"]
}

it("renders the GiftDetailDescription component correctly", () => {
    const { container } = render(
        <GiftDetailDescription
            detail={giftdetails}
        />
    )
});