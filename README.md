# Laced -- https://laced-app.herokuapp.com/

## Description
Laced is an e-commerce web application for buying shoes. Users can search for shoes, filter through the search results via filters bar, click on a shoe to view more information about it and add to cart. Users can then go to their cart and purchase their shoes via stripe payment.

This web application is designed for screen sizes of 1000px or more in width.

## Tools 
Front end  - React, Redux, HTML, CSS
<br>
Back end - Node, Express, MongoDB
<br>
Misc - Amazon S3(storage for shoe images), React Stripe(handles payments)  

## Possible todos/improvements
<p>1. Update database when purchase is made. Specifically quantity, when quantitiy of a shoe equals 1 during time of purchase, delete it. Otherwise, just update shoe's quantity by subtracting 1. <p>
<p>2. User authentication (sign in/sign out/register/JWT)<p>
<p>3. Recent orders page<p>
<p>4. Improve search for multi-word queries<p>

## Demo Information
Visit https://laced-app.herokuapp.com/

For Stripe payments, please use Stripe's recommended testing card number <strong>4242 4242 4242 4242</strong>.
<br>
All other payment information is up to you.
