import React from 'react'
import './Navlist.css'
const Navlist =()=>{
    return (
        <div className="navlist">
            <ul>
                <li>
                Groceries <i class='bx bx-chevron-down'></i>
                    <ul className={Navlist.dropdown}>
                        {/* <li>Fruits & Vegetables</li>
                        <li>Dairy & Bakery</li>
                        <li>Staples</li>
                        <li>Snacks & Branded foods</li>
                        <li>Beverages</li>
                        <li>Personal Care</li>
                        <li>Home Care</li>
                        <li>Beauty</li> */}
                    </ul>
                </li>
                <li>
                    Premium Fruits <i class='bx bx-chevron-down'></i>
                    <ul className={Navlist.dropdown}>
                        {/* <li>Apples & Peers</li>
                        <li>Avocado, Peach, Plum</li>
                        <li>Banana,Melons & Coconut</li>
                        <li>Dates</li>
                        <li>Citrus, Mangoes & Graps</li>
                        <li>Cherries, Berries</li>
                        <li>Exotic Fruits</li>
                        <li>Seasonal & Minor Fruits</li> */}
                    </ul>
                </li>
                <li>
                    Home & Kitchen <i class='bx bx-chevron-down'></i>
                    <ul className={Navlist.dropdown}>
                        {/* <li>Kitchenware</li>
                        <li>Dining</li>
                        <li>Electricals</li>
                        <li>furniture</li>
                        <li>Home Appliances</li>
                        <li>Toys & Games</li>
                        <li>Disposable</li>
                        <li>Stationary</li>
                        <li>Garden</li>
                        <li>pooja needs</li> */}
                    </ul>
                </li>
                <li>
                    Fashion <i class='bx bx-chevron-down'></i>
                    <ul className={Navlist.dropdown}>
                        {/* <li>Mens</li>
                        <li>Womens</li>
                        <li>Boys</li>
                        <li>Girls</li>
                        <li>Junior Boys</li>
                        <li>Infant</li> */}
                    </ul>
                </li>
                <li>
                    Electronics <i class='bx bx-chevron-down'></i>
                    <ul className={Navlist.dropdown}>
                        {/* <li>Mobiles & Tablets</li>
                        <li>TV & speakers</li>
                        <li>Home Appliance</li>
                        <li>Camera</li>
                        <li>Kitchen Appliance</li>
                        <li>Smart Devices</li>
                        <li>Phones</li>
                        <li>Office Products</li>
                        <li>Electronic Musical Instruments</li> */}
                    </ul>
                </li>
                <li>
                    Beauty <i class='bx bx-chevron-down'></i>
                    <ul className={Navlist.dropdown}>
                        {/* <li>Make Up</li>
                        <li>Skincare</li>
                        <li>Personal Care</li>
                        <li>Fragrances</li>
                        <li>Mom & Baby</li>
                        <li>Mens Grooming</li>
                        <li>Wellness</li> */}
                    </ul>
                </li>
                <li>
                    Jewellery <i class='bx bx-chevron-down'></i>
                    <ul className={Navlist.dropdown}>
                        {/* <li>Fine Jwellery </li>
                        <li>Jwellery</li> */}
                    </ul>
                </li>
            </ul>
            
        </div>
    )
}
export default Navlist
