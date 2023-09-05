import express from 'express'
import * as cors from "cors";
import routes from "./routes";

const port = 8000
const app = express()

app.get('/' , (req,res) => {
  res.send('test')
})
app.use(cors());
app.use("/", routes);

app.listen(port, () => {console.log(port)})