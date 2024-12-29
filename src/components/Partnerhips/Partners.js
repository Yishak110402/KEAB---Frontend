import './Partners.css'
export default function Partners(){
    return(
        <div className='partners'>
            <h1>Partnerships</h1>
            <div className='partnerships-list'>
            <div className="partnership">
                    <img src="https://i.postimg.cc/sgzshFqY/Gudumale-2.png" alt="GSI logo" />
                    <h2>Gudumale Sustainability Initiative</h2>
                </div>
                <div className="partnership">
                    <img src="https://i.postimg.cc/G3sCgh1P/Hale.png" alt="HALE logo" />
                    <h2>HALE-Human Rights and Inclusion Network</h2>
                </div>
                <div className="partnership">
                    <img src="https://i.postimg.cc/C1Rggwng/vitallogo.jpg" alt="GSI logo" />
                    <h2>Vital Water Purifier and Birtu Society</h2>
                </div>
            </div>
        </div>
    )
}