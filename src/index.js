import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FaPizzaSlice } from 'react-icons/fa';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
//npm install react-icons to use the icons


const obj = {color: 'black', fontFamily: 'Georgia, serif', fontSize: '24px', textTransform: 'uppercase' };

function Header() {
    return <h1 style={obj}>Che's Pizza.Co</h1>;
}

function Description() {
    return (
        <p style={{ fontFamily: 'Georgia, serif', fontSize: '20px' }}>
            Authentic Italian Cuisine, Fresh from the oven ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧
        </p>
    );
}

function Menu() {
    return (
        <div className="menu">
            <h2>_(´ཀ`」 ∠) _ Our Menu _(´ཀ`」 ∠) _</h2>
        </div>
    );
}

const time = new Date().getHours();

function Footer() {
    return (
        <div className="footer">
            <footer>
                <p>We're Currently {time < 10 ? 'Closed ┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻' : 'Open ଘ(੭*ˊᵕˋ)੭* ੈ♡‧₊˚'} </p>
            </footer>
        </div>
    );
}

function Button(props) {
    return <button style={{ backgroundColor: props.color, color: props.textColor }}>{props.text}</button>;
}

Button.defaultProps = {
    text: 'Default Text of Big Button',
    color: 'azure', // Default background color
    textColor: 'black' // Default text color
};

function Pizza({ imgSrc, altText, name, description, price }) {
    return (
        <div>
            <img src={imgSrc} alt={altText} style={{ width: '150px', height: '150px' }} />
            <p>{name}</p>
            <p>{description}</p>
            <p>${price}</p>
        </div>
    );
}
function isSoldOut(pizza) {
    return pizza.price === 0;
}

const pizzas = [
    { imgSrc: 'pizzas/focaccia.jpg', altText: 'Focaccia', name: 'Focaccia Pizza', description: 'Italian bread with cherry tomatoes, olives, and basil', price: 6 },
    { imgSrc: 'pizzas/funghi.jpg', altText: 'Funghi', name: 'Funghi Pizza', description: 'Pizza with mushrooms, mozzarella, and tomato sauce', price: 12 },
    { imgSrc: 'pizzas/margherita.jpg', altText: 'Margherita', name: 'Margherita Pizza', description: 'Pizza with fresh mozzarella, basil, and tomato sauce', price: 5 },
    { imgSrc: 'pizzas/prosciutto.jpg', altText: 'Prosciutto', name: 'Prosciutto Pizza', description: 'Pizza with prosciutto, arugula, and mozzarella', price: 18 },
    { imgSrc: 'pizzas/salamino.jpg', altText: 'Salamino', name: 'Salamino Pizza', description: 'Pizza with salami, mozzarella, and tomato sauce', price: 15 },
    { imgSrc: 'pizzas/spinaci.jpg', altText: 'Spinaci', name: 'Spinaci Pizza', description: 'Pizza with spinach, cherry tomatoes, and mozzarella', price: 12 },
];

function PizzaList() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            {pizzas.map((pizza, index) => (
                <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                    <Pizza
                        imgSrc={pizza.imgSrc}
                        altText={pizza.altText}
                        name={pizza.name}
                        description={pizza.description}
                        price={pizza.price}
                    />
                                {isSoldOut(pizza) && <p style={{ color: 'red' }}>Sold Out</p>}
                </div>
            ))}
        </div>
    );
}

function Icon() {
    return <FaPizzaSlice style={{ fontSize: '50px', color: 'black' }} />;
}

function Contact() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <FaPhone style={{ fontSize: '24px', marginRight: '10px' }} />
            <span style={{ marginRight: '20px' }}>+1-234-567-890</span>
            <FaEnvelope style={{ fontSize: '24px', marginRight: '10px' }} />
            <span>moreinfo@chespizza.co</span>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <Icon />
            <Header />
            <Description />
            <Footer />
            <Button text="Order from us! ༼ つ ◕_◕ ༽つ🍕" />
            <Menu />
            <PizzaList />
            <Contact />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
