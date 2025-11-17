import express from "express";
import bwipjs from "bwip-js";

const app = express();

// توليد باركود Code128 لأي order_number
app.get('/barcode/:text', async (req, res) => {
  try {
    const png = await bwipjs.toBuffer({
      bcid:        'code128',       // نوع الباركود
      text:        req.params.text, // النص اللي هيتحول لباركود
      scale:       3,
      height:      15,
      includetext: false
    });

    res.set('Content-Type', 'image/png');
    res.send(png);

  } catch (err) {
    console.error(err);
    res.status(500).send('Error generating barcode');
  }
});

// الصفحة الرئيسية — اختيارية
app.get('/', (req, res) => {
  res.send("Barcode server is running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
