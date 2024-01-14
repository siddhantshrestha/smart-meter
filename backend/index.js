"use strict"
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, "__esModule", { value: true })
const express_1 = __importDefault(require("express"))
const dotenv_1 = __importDefault(require("dotenv"))
const PORT = process.env.PORT || 3000
const app = (0, express_1.default)()
dotenv_1.default.config()
app.use(express_1.default.json())
app.get("/", (req, res) => {
  res.send("Hello world!")
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
//# sourceMappingURL=index.js.map
