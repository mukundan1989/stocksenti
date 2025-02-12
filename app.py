import streamlit as st
import random
from datetime import datetime

st.set_page_config(page_title="Portfolio Dashboard", layout="wide")

def get_random_price():
    return round(random.uniform(100, 500), 2)

def get_random_sentiment():
    return random.choice(["Bullish", "Bearish", "Neutral"])

# Custom CSS to match the original design
st.markdown("""
    <style>
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border-bottom: 2px solid #ddd;
        }
        .logo {
            height: 40px;
            width: 40px;
            background-color: #333;
            border-radius: 50%;
        }
        .menu-button {
            height: 40px;
            width: 40px;
            background-color: #eee;
            border-radius: 50%;
            text-align: center;
            font-size: 24px;
            line-height: 40px;
            cursor: pointer;
        }
        .title { font-size: 28px; font-weight: bold; color: #6a1b9a; margin-top: 20px; }
        .card { background-color: #007bff; color: white; padding: 20px; border-radius: 10px; text-align: center; }
        .sentiment-bullish { color: green; font-weight: bold; }
        .sentiment-bearish { color: red; font-weight: bold; }
        .sentiment-neutral { color: gray; font-weight: bold; }
    </style>
""", unsafe_allow_html=True)

# Header Section
st.markdown("""
    <div class='header'>
        <div class='logo'></div>
        <div class='menu-button'>☰</div>
    </div>
""", unsafe_allow_html=True)

st.markdown("<div class='title'>Portfolio Dashboard</div>", unsafe_allow_html=True)

st.subheader("Your Stocks")

symbols = ["AAPL", "TSLA", "GOOGL", "MSFT", "AMZN"]
cols = st.columns(2)
for i, symbol in enumerate(symbols):
    price = get_random_price()
    sentiment = get_random_sentiment()
    sentiment_class = f"sentiment-{sentiment.lower()}"
    
    with cols[i % 2]:
        st.markdown(f"""
            <div class='card'>
                <strong>{symbol}</strong>: ${price} 
                <div class='{sentiment_class}'>{sentiment}</div>
            </div>
        """, unsafe_allow_html=True)

st.button("Add Stock")
