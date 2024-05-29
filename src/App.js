import './App.css';

function App() {
    return (
        <div className="">
            <section className="home">
                <div className="info">
                    <div className="logo">
                        <img src="imgs/box-logo.png"/>
                        <h3>Over The Box</h3>
                    </div>
                    <div className="texts">
                        <h1>Declutter Your Space, Simplify Your Life!</h1>
                        <p>Are you tired of clutter and looking for the perfect storage solution? Look no further! Our
                            premium
                            storage boxes are designed to help you organize your space effortlessly. And the best part?
                            They’re
                            on sale now!</p>
                    </div>
                    <a className="btn" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                       target="_blank">View Boxes</a>
                </div>
                <div className="image">
                    <img src="imgs/Cardboard-boxes.png"/>
                </div>
            </section>

            <section className="qualitys">
                <div className="pricinpal-info">
                    <h2>Why Choose Our Storage Boxes?</h2>
                    <p>Available in a variety of colors and designs to match your home décor. Functionality meets style
                        with
                        our sleek and modern storage solutions.</p>
                    <a className="btn" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                       target="_blank">View Boxes</a>
                </div>
                <div className="container">
                    <div className="item">
                        <p className="title">Durable & Sturdy</p>
                        <p className="content">Made from high-quality materials, our boxes are built to last. Whether you need to store
                            heavy items or delicate keepsakes, these boxes can handle it all.</p>
                    </div>
                    <div className="item">
                        <p className="title">Versatile & Multi-Purpose</p>
                        <p className="content">Perfect for any room in the house – from the bedroom to the garage. Store clothes, toys,
                            documents, tools, and more with ease.</p>
                    </div>
                    <div className="item">
                        <p className="title">Easy to Use & Stackable</p>
                        <p className="content">Designed for convenience, our boxes are easy to assemble and can be stacked to maximize your
                            storage space.</p>
                    </div>
                </div>
            </section>

            <footer>
                <h3>Desenvolvido por mim</h3>
            </footer>
        </div>
    );
}

export default App;
