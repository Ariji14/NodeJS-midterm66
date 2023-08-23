const express = require('express');
const que1 = require('./que1');

const app = express();
const port = 3000; // หรือ port ที่คุณต้องการใช้งาน

app.use(express.json());

// สร้าง route สำหรับ API "que1"
app.post('/que1', (req, res) => {
  const { x } = req.body; // รับค่า x จาก request body
  if (x === undefined) {
    return res.status(400).json({ error: 'กรุณาระบุค่า x' });
  }

  const result = que1(x);
  return res.json({ result });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
