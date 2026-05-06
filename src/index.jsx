import Footer from "./footer";



export default function Landing() {

    return (

        <>
            <header className="header">
            <h1>Welcome to New Bank</h1>
            <p>Your trusted partner in financial services.</p>
            </header>
            <section className="About">
                <h2>About us</h2>
                <p>New Bank is a leading financial institution dedicated to providing top-notch banking services to individuals and businesses. With a focus on innovation and customer satisfaction, we strive to meet the diverse needs of our clients.</p>
                <div className="container">
                <div className="info-box">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel assumenda tenetur iusto commodi impedit blanditiis. Adipisci hic cumque in sint! Consequatur architecto numquam atque tempore, eaque labore. Impedit, quaerat atque.</div>
                <div className="info-box">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel assumenda tenetur iusto commodi impedit blanditiis. Adipisci hic cumque in sint! Consequatur architecto numquam atque tempore, eaque labore. Impedit, quaerat atque.</div>
               <div className="info-box">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel assumenda tenetur iusto commodi impedit blanditiis. Adipisci hic cumque in sint! Consequatur architecto numquam atque tempore, eaque labore. Impedit, quaerat atque.</div>
                 <div className="info-box">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel assumenda tenetur iusto commodi impedit blanditiis. Adipisci hic cumque in sint! Consequatur architecto numquam atque tempore, eaque labore. Impedit, quaerat atque.</div>
                <div className="info-box">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel assumenda tenetur iusto commodi impedit blanditiis. Adipisci hic cumque in sint! Consequatur architecto numquam atque tempore, eaque labore. Impedit, quaerat atque.</div>
               <div className="info-box">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel assumenda tenetur iusto commodi impedit blanditiis. Adipisci hic cumque in sint! Consequatur architecto numquam atque tempore, eaque labore. Impedit, quaerat atque.</div>
                <div className="info-box">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel assumenda tenetur iusto commodi impedit blanditiis. Adipisci hic cumque in sint! Consequatur architecto numquam atque tempore, eaque labore. Impedit, quaerat atque.</div>
                <div className="info-box">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel assumenda tenetur iusto commodi impedit blanditiis. Adipisci hic cumque in sint! Consequatur architecto numquam atque tempore, eaque labore. Impedit, quaerat atque.</div>
               <div className="info-box">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel assumenda tenetur iusto commodi impedit blanditiis. Adipisci hic cumque in sint! Consequatur architecto numquam atque tempore, eaque labore. Impedit, quaerat atque.</div>
                
                </div>
            </section>
            <section className="services">
            <h2>Our Services</h2>
            <ul>
              <div>  <li>Personal Banking</li></div>
             <div>  <li>Business Banking</li></div> 
             <div>  <li>Loans and Mortgages</li></div> 
              <div>  <li>Investment Services</li></div>
            </ul>
            </section>
            <main className="main-content">
            <h2>Why Choose Us?</h2>
            <p>At New Bank, we are committed to providing exceptional customer service and innovative financial solutions. Our team of experts is here to help you achieve your financial goals.</p>
            </main>
        <Footer/>
        </>  
    );
}