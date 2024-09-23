// import { render } from "@testing-library/react";
import React from "react";
// import ReactDOM from "react-dom";// Before V18
import ReactDOM from "react-dom/client";
import "./index.css";
// pizzData
// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

// App
function App() {
  return (
    <React.StrictMode className="container">
      <Header />
      <Menu />
      <Footer />
    </React.StrictMode>
  );
}
// Menu
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        photName="pizzas/margherita.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        photName="pizzas/margherita.jpg"
        price={10}
      />
    </main>
  );
}
// pizza Component
function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.photName} alt={props.name} />
      <div className="">
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 1}</span>
      </div>
    </div>
  );
}

// Header
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

// Footer
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We are currently open!
    </footer>
  );
}

// React V18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// React before V18
// React.render(<App/>)
