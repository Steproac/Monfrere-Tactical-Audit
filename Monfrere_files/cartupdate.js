
  // Fetch the cart and update lomdata on page load
  fetch('/cart.js')
    .then(response => response.json())
    .then(async cart => {
      if (cart.items.length > 0) {
        const myElement = document.getElementById('lom_quidget_btn');
        console.log(myElement)
        const b2b2cData = await myElement.returnDataToPdp();
        console.log("b2b2cData")
        console.log(b2b2cData)
        // console.log(b2b2cData.detail.quizMenId);
        // Get existing attributes
        const existingAttributes = cart.attributes || {};
        var quizidMen;
        if(b2b2cData.detail.quizMenId != null){
          quizidMen  =b2b2cData.detail.quizMenId;
        }
        var quizidWomen=b2b2cData.detail.quizId;
        if(quizidWomen==null){
          quizidWomen="";
        }
        if(quizidMen==null){
          quizidMen="";
        }
        // Directly create the lomdata object with quizid and lomuserid
        const b2b2cdata  = {
          quizid: quizidWomen,
          quizmenid: quizidMen,
          lmuserid: b2b2cData.detail.custId
        };

        // Ensure that the lomdata object is nested properly within existing attributes
        const updatedAttributes = {
          ...existingAttributes,
          b2b2cdata: b2b2cdata
        };

        // Update the cart with the merged attributes
        jQuery.ajax({
          url: '/cart/update.js',
          type: 'POST',
          data: JSON.stringify({
            attributes: updatedAttributes
          }),
          dataType: 'json',
          contentType: 'application/json; charset=utf-8',
          success: function(updatedCart) {
            console.log('Cart updated', updatedCart);
          },
          error: function(jqxhr, textStatus, error) {
            console.error('Error updating cart', textStatus, error);
          }
        });
      } else {
        console.log('Cart is empty, no updates made.');
      }
    })
    .catch(error => console.error('Error fetching cart', error));