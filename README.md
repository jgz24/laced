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
1. Update database when purchase is made. Specifically quantity, when quantitiy of a shoe equals 1 during time of purchase, delete it instead. Otherwise, just update shoe's quantity by subtracting 1.
2. User authentication (sign in/sign out/register/JWT)
3. Recent orders page
4. Improve search for multi-word queries

## Demo Information
Visit https://laced-app.herokuapp.com/

For Stripe payments, please use Stripe's recommended testing card number <strong>4242 4242 4242 4242</strong> 
