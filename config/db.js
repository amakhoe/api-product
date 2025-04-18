import mongo from 'mongoose';
export const connectDB = async () => {
    try {
        const conn = await mongo.connect(process.env.MONGO_URI);
        console.log(`Mongo esta funcionar na porta ${conn}`);
    } catch (error) {
        console.error(`Error: ${error}`)
        process.exit(1);
    }
}