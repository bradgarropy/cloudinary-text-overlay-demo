import "~/src/App.css"

import {Cloudinary} from "@cloudinary/url-gen"
import {source} from "@cloudinary/url-gen/actions/overlay"
import {Resize} from "@cloudinary/url-gen/actions/resize"
import {Position} from "@cloudinary/url-gen/qualifiers"
import {compass} from "@cloudinary/url-gen/qualifiers/gravity"
import {text} from "@cloudinary/url-gen/qualifiers/source"
import {TextStyle} from "@cloudinary/url-gen/qualifiers/textStyle"

const cloudinary = new Cloudinary({
    cloud: {
        cloudName: "bradgarropy",
    },
    url: {
        secure: true,
    },
})

const shoes = [
    {
        name: "new-balance",
        sale: true,
    },
    {
        name: "puma",
        sale: false,
    },
    {
        name: "adidas",
        sale: true,
    },
    {
        name: "vans",
        sale: false,
    },
    {
        name: "converse",
        sale: false,
    },
    {
        name: "nike",
        sale: false,
    },
]

const header = cloudinary
    .image("cloudinary-text-overlay-demo/header")
    .resize(Resize.fill(1280, 270))
    .quality("auto")
    .format("auto")
    .overlay(
        source(
            text(
                "FRESH FEET",
                new TextStyle("Georgia", 100).fontWeight("bold"),
            ).textColor("white"),
        ),
    )

const App = () => {
    return (
        <>
            <div className="header">
                <img src={header.toURL()} alt="shoes on a wall" />
            </div>

            <h1>Get your kicks</h1>

            <div className="product-grid">
                {shoes.map(shoe => {
                    const saleBanner = source(
                        text(
                            "SALE",
                            new TextStyle("Georgia", 100).fontWeight("bold"),
                        ).textColor("red"),
                    ).position(
                        new Position()
                            .gravity(compass("north_east"))
                            .offsetX(20)
                            .offsetY(20),
                    )

                    const image = cloudinary
                        .image(`cloudinary-text-overlay-demo/${shoe.name}`)
                        .resize(Resize.scale(500))
                        .quality("auto")
                        .format("auto")

                    return (
                        <img
                            key={shoe.name}
                            src={
                                shoe.sale
                                    ? image.overlay(saleBanner).toURL()
                                    : image.toURL()
                            }
                            alt={shoe.name}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default App
