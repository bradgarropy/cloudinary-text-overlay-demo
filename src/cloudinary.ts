import {Cloudinary} from "@cloudinary/url-gen"

const cloudinary = new Cloudinary({
    cloud: {
        cloudName: "bradgarropy",
    },
    url: {
        secure: true,
    },
})

export {cloudinary}
