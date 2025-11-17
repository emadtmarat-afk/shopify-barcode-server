import fetch from "node-fetch";

async function updateOrderMetafield(orderId, barcodeUrl) {
    const SHOP = "house-of-dates-company.myshopify.com";
    const TOKEN = "15c758d8e06968aa7e3feec19e7c9d76";

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
updateOrderMetafield(123456, "https://shopify-barcode-server.onrender.com/barcode/1001")
  .then(console.log)
  .catch(console.error);
