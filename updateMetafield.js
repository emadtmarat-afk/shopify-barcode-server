import fetch from "node-fetch";

async function updateOrderMetafield(orderId, barcodeUrl) {
    const SHOP = "your-shop.myshopify.com";
    const TOKEN = "your-admin-token";

    const url = `https://${SHOP}/admin/api/2025-10/orders/${orderId}/metafields.json`;

    const body = {
        metafield: {
            namespace: "barcode",
            key: "image_url",
            type: "single_line_text_field",
            value: barcodeUrl
        }
    };

    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Shopify-Access-Token": TOKEN
        },
        body: JSON.stringify(body)
    });

    return await res.json();
}

// مثال: تحديث Order
updateOrderMetafield(123456, "https://your-app.onrender.com/barcode/1001")
  .then(console.log)
  .catch(console.error);
