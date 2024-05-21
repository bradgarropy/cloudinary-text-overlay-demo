import "~/src/App.css"

import {source} from "@cloudinary/url-gen/actions/overlay"
import {Resize} from "@cloudinary/url-gen/actions/resize"
import {Position} from "@cloudinary/url-gen/qualifiers"
import {compass} from "@cloudinary/url-gen/qualifiers/gravity"
import {text} from "@cloudinary/url-gen/qualifiers/source"
import {TextStyle} from "@cloudinary/url-gen/qualifiers/textStyle"

import {cloudinary} from "~/src/cloudinary"

const shoes = [
    {
        name: "shoes-0",
        sale: true,
    },
    {
        name: "shoes-1",
        sale: false,
    },
    {
        name: "shoes-2",
        sale: true,
    },
    {
        name: "shoes-3",
        sale: false,
    },
    {
        name: "shoes-4",
        sale: false,
    },
    {
        name: "shoes-5",
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
