import "~/src/App.css"

import {source} from "@cloudinary/url-gen/actions/overlay"
import {Resize} from "@cloudinary/url-gen/actions/resize"
import {Position} from "@cloudinary/url-gen/qualifiers"
import {compass} from "@cloudinary/url-gen/qualifiers/gravity"
import {text} from "@cloudinary/url-gen/qualifiers/source"
import {TextStyle} from "@cloudinary/url-gen/qualifiers/textStyle"

import {cloudinary} from "~/src/cloudinary"
const header = cloudinary
    .image("cloudinary-text-overlay-demo/header")
    .resize(Resize.scale(1280))

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
                        const shoes = `shoes-${index}`

                        const saleBanner = source(
                            text(
                                "SALE",
                                new TextStyle("Georgia", 100).fontWeight(
                                    "bold",
                                ),
                            ).textColor("red"),
                        ).position(
                            new Position()
                                .gravity(compass("north_east"))
                                .offsetX(20)
                                .offsetY(20),
                        )

                        const image = cloudinary
                            .image(`cloudinary-text-overlay-demo/${shoes}`)
                            .resize(Resize.scale(500))

                        return (
                            <img
                                key={shoes}
                                src={
                                    index === 0 || index === 2
                                        ? image.overlay(saleBanner).toURL()
                                        : image.toURL()
                                }
                                alt={shoes}
                            />
                        )
                    })}
            </div>
        </>
    )
}

export default App
