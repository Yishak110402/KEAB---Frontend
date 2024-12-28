import "./OurPartners.css"

export default function OurPartners(){
    return(
        <div className="our-partners">
            <h1>Our Partners</h1>
            <div className="partners-container">
                <div className="partner">
                    <img src="https://i.postimg.cc/sgzshFqY/Gudumale-2.png" alt="GSI logo" />
                    <h2>Gudumale Sustainability Initiative</h2>
                </div>
                <div className="partner">
                    <img src="https://i.postimg.cc/G3sCgh1P/Hale.png" alt="HALE logo" />
                    <h2>HALE-Human Rights and Inclusion Network</h2>
                </div>
                <div className="partner">
                    <img src="https://i.postimg.cc/C1Rggwng/vitallogo.jpg" alt="GSI logo" />
                    <h2>Vital Water Purifier and Birtu Society</h2>
                </div>
            </div>
        </div>
    )
}