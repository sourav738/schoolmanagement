import express from "express"
import { createConnection, getMongoManager } from "typeorm";
import { User } from "./entity/User";
import routes from './routes/index'
const app = express();

createConnection({
    type: 'mongodb',
    url: "mongodb+srv://root:root@transport-dev.ltttd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    port: 27017,
    synchronize: true,
    entities: [User],
    logging: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("connected aa")
}).catch((err) => {
    console.log({ err })
});
app.use('/api/v1',routes)



app.listen(3000, () => console.log("server is running 3000"))