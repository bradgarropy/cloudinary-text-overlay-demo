import "~/src/App.css"

import {cloudinary} from "~/src/cloudinary"
const header = cloudinary.image("cloudinary-text-overlay-demo/header")

const App = () => {
    return (
        <>
            <div className="header">
                <img src={header.toURL()} alt="shoes on a wall" />
            </div>

            <h1>Get your kicks</h1>

            <div className="product-grid">
                {Array(6)
                    .fill(null)
                    .map((_, index) => {
                        const shoes = `shoes-${index + 1}`

                        const image = cloudinary.image(
                            `cloudinary-text-overlay-demo/${shoes}`,
                        )

                        return (
                            <img key={shoes} src={image.toURL()} alt="shoes" />
                        )
                    })}
            </div>
        </>
    )
}

export default App
