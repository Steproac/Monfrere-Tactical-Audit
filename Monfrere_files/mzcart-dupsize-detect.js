
// Intercept all fetch calls to detect cart updates
setTimeout(() => {
(function () {
  try {
    const originalFetch = window.fetch;
    console.log("checking network hits");
    
    window.fetch = async function (...args) {
      if (args != "/cart.js") {
        const response = await originalFetch.apply(this, args);
        const url = args[0];
        const method = args[1]?.method || "GET";

        if (url.includes("/graphql.json") && method === "POST") {
          response
            .clone()
            .json()
            .then(() => {
              setTimeout(() => {
                addCartUpdateElement();
              }, 500);
            });
        }
        return response;
      }
    };
  } catch (error) {
    console.log(error);
  }
})();
}, 1000);
// Add blank quidget
const bodyElement = document.body;
const blankEle = document.createElement("div");
blankEle.innerHTML = `<blank-quidget id="lom_quidget_btn" partnerId="53bea6f9-e15e-4a94-a22e-90959fe6d891"></blank-quidget>`;
bodyElement.appendChild(blankEle);

let qrsMensId = "";
let qrsWomensId = "";
let custId = "";

// Select the cart drawer element by data attribute
// const cartDrawer = document.querySelector('[data-nyla="cart"]');
setTimeout(() => {
    console.log("checking cart drawer");
  const cartDrawer = document.querySelector('.smart-cart--enabled');
  console.log("cartDrawer",cartDrawer);
  if (cartDrawer) {
    //MutationObserver instance
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          // Check the updated class list
          if (cartDrawer.classList.contains("disable-site-scroll")) {
            console.log("Cart drawer opened");
            setTimeout(() => {
              addCartUpdateElement();
            }, 500);
          } else if (cartDrawer.classList.contains("closing")) {
            console.log("Cart drawer closing");
          } else {
            console.log("Cart drawer state changed:", cartDrawer.className);
          }
        }
      }
    });

    observer.observe(cartDrawer, {
      attributes: true,
      attributeFilter: ["class"],
    });
  } else {
    console.warn("Cart drawer element not found");
  }
}, 4000);

// Fetch data from blank quidget
// setTimeout(async () => {
//   const myElement = document.getElementById("lom_quidget_btn");
//   console.log("myElement:", myElement);

//   if (myElement) {
//     try {
//       const b2b2cData = await myElement.returnDataToPdp();
//       qrsMensId = b2b2cData.detail.quizMenId;
//       qrsWomensId = b2b2cData.detail.quizId;
//       custId = b2b2cData.detail.custId;
//       console.log(qrsMensId);
//       console.log(qrsWomensId);

//       console.log("b2b2cData:", b2b2cData);
//     } catch (err) {
//       console.error("Error fetching data from returnDataToPdp:", err);
//     }
//   } else {
//     console.error("Element not found");
//   }
// }, 500);

// Handle cart update logic
async function addCartUpdateElement() {
  console.log("cart page");

  const quidgets = document.querySelectorAll("cart-quidget-btn");
  const cartDataMap = new Map();

  quidgets.forEach((quidget) => {
    const productHandle = quidget.getAttribute("producthandle") || null;
    if (!productHandle) return;

    const parentCol = quidget.closest('[data-nyla="content-item-column-item"]');
    if (!parentCol) return;

    // Extract size text
    let size = null;
    const spans = parentCol.querySelectorAll("span.p");
    spans.forEach((span) => {
      if (span.textContent.includes("Size:")) {
        size = span.textContent.replace("Size:", "").trim();
      }
    });

    // Add size to corresponding product handle
    if (cartDataMap.has(productHandle)) {
      const product = cartDataMap.get(productHandle);
      if (size && !product.sizes.includes(size)) {
        product.sizes.push(size);
      }
    } else {
      cartDataMap.set(productHandle, {
        product_stub_id: productHandle,
        sizes: size ? [size] : [],
      });
    }
  });

  const cartData = Array.from(cartDataMap.values());
  console.log("Final Cart Data to Send:", cartData);

  // Use IDs fetched from returnDataToPdp
  var res = await sizeSampling(cartData, {
    quizId: qrsMensId,
    custId,
    quizMenId: qrsWomensId,
  });

  updateCartElement(res, quidgets);
}

async function sizeSampling(payload, { quizId, custId, quizMenId }) {
  try {
    console.log("sizeSampling params:", { quizId, custId, quizMenId });
    console.log(qrsMensId);
    console.log(qrsWomensId);
    let queryParam = "";
    // If custId â†’ only use that (ignore others)
    if (custId) {
      queryParam = "customer_id=" + custId;
    } else {
      // If quizId or quizMenId â†’ add whichever exists (both if both exist)
      const q = [];
      if (qrsWomensId) q.push("quiz_id=" + qrsWomensId);
      if (qrsMensId) q.push("quiz_men_id=" + qrsMensId);
      queryParam = q.join("&"); // joins both if both exist
    }

    console.log("queryParam:", queryParam);

    const apiUrl = `https://prod.lawsofmotion.b2b2c.montezuma.ai/partners/0fe9bc0f-371a-48c4-abad-9efa280eba7c/products/size_sampling?${queryParam}`;

    console.log("Final API URL:", apiUrl);

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const result = await res.json();
    console.log("API Response:", result);
    return result.results;
  } catch (error) {
    console.error("Error in sizeSampling:", error);
    return null;
  }
}
function updateCartElement(res, quidgets) {
  quidgets.forEach((quidget, index) => {
    var productHandle = quidget.getAttribute("productHandle");
    // Check if the product_handle matches any product_stub_id in the response
    var matchFound = res.some(
      (product) => product.product_stub_id === productHandle
    );
    // Find the product object where the product_stub_id matches productHandle
    var matchingProduct = res.find(
      (product) => product.product_stub_id === productHandle
    );
    const parentCol = quidget.closest('[data-nyla="content-item-column-item"]');
    if (!parentCol) return;

    // Extract size text
    let size = null;
    const spans = parentCol.querySelectorAll("span.p");
    const productLinktag = parentCol.querySelector(".l1uuhis6");
    const prodLink = productLinktag.getAttribute("href");
    spans.forEach((span) => {
      if (span.textContent.includes("Size:")) {
        size = span.textContent.replace("Size:", "").trim();
      }
    });

    console.log(size);
    console.log(matchingProduct);

    // set here attribute of cart element
    if (matchingProduct) {
      console.log(matchingProduct.size_sampling_sizes.includes(size));
      console.log(quidget);

      console.log(matchingProduct.recommended_size);

      if (matchingProduct.size_sampling_sizes.includes(size)) {
        if (matchingProduct.recommended_size)
          quidget.setAttribute("bestfitsize", matchingProduct.recommended_size);
        else quidget.setAttribute("bestfitsize", "");

        quidget.setAttribute("showele", matchingProduct.size_sampling);
      } else {
        quidget.setAttribute("showele", "false");
        quidget.setAttribute("bestfitsize", matchingProduct.recommended_size);
      }
      quidget.setAttribute("pdppagelink", prodLink);
    } else {
      quidget.setAttribute("showele", "false");
      quidget.setAttribute("bestfitsize", matchingProduct.recommended_size);
    }
  });
}