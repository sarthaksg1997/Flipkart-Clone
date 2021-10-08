import mongoose from "mongoose";

const Connection = async (URL) => {
     
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
        console.log('Database connected succesfully');
    } catch (error) {
        console.log(error.message);
    }
}

export default Connection;