import mongoose from "mongoose";

const ProductoSchema = mongoose.Schema(
    {
        name:
        {
            type:String,
            required: [true, "Por favor insere dados correctos"]
        },
        quantidade:
        {
            type: Number,
            required: true,
            default: 0,
        },
        price:
        {
            type: Number,
            required: true,
            default: 0,
        },
        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamp: true
    }

);
const Producto = mongoose.model("Producto", ProductoSchema)
export default Producto;