# Crypto Viewer -React Project
---

<a href="https://crypto-viewer-sonam.netlify.app">Crypto Viewer </a> is a react app website that makes it easy for users to view crypto datas. Most of my datas are retrieved from <a href="https://www.coingecko.com/">Coin-Gecko.</a>

![Screen Shot 2022-06-09 at 11 36 08 AM](https://user-images.githubusercontent.com/101905331/172888785-59a47aef-11d2-44c0-96ca-80ad4a2396a2.png)

![Screen Shot 2022-06-09 at 11 36 26 AM](https://user-images.githubusercontent.com/101905331/172888799-5b02be78-842d-4b1c-89d4-dfd57988d2ce.png)

![Screen Shot 2022-06-09 at 11 36 34 AM](https://user-images.githubusercontent.com/101905331/172888825-7b8467e3-0926-43be-9f72-98331014e97a.png)

---
## Installation instructions

Clone the repo and the app should be able to run from the index.html in the browser.

---
## Approach

The main approach for this website was using an API and grabbing the data using axios then rendering that data on the webpage implementing them on the JSX. I also used <a href="https://purecss.io/">Pure CSS</a> library to create a dropdown menu that links to several different websites for more information on cryptocurrencies.

---
## User Stories
<ul>
  <li>As a user, I should be able to see what the app is about in the homepage.
</li>
  <li>As a user, I should be able to view all the cryptos stored in the app.
</li>
  <li>As a user, I should be able to see more information on cryptocurrencies.
</li>
  <li>As a user, I should be able to choose a crypto to check their prices and historical data.
</li>
</ul>

---
## Wireframes

![Screen Shot 2022-06-03 at 2 45 57 PM](https://user-images.githubusercontent.com/101905331/172910371-870f3b63-a15c-4266-a9d1-ac61aa46943f.png)

![Screen Shot 2022-06-03 at 2 45 53 PM](https://user-images.githubusercontent.com/101905331/172910379-16500282-14a6-442f-ab6b-1e5bbd49fcad.png)

## Major Hurdles

One of my biggest obstacle was to display the specific coin's historic chart. Initially, I tried to make the chart manually and loop it through the list of coin but failed multiple times. I came to a realization that the API I was using for the crypto datas also had charts. I chose to use their chart to make things easier.

Another hurdle, which was minor, I faced was creating a showpage that displays a speicific coin's data. I had to map through the array then make a condition where the symbol of the coin matches the data's symbol so it displays the right data.

## Technologies and languages used 

<ul>
  <li>JavaScript </li>
  <li>CSS </li>
  <li>API</li>
  <li>ReactJS </li>
<ul>
  
---

I would like to credit Brian Design on youtube for the search and filter functionality. 
