import streamlit as st
import random
from datetime import datetime

def get_random_price():
    return round(random.uniform(100, 500), 2)

def get_random_sentiment():
    return random.choice(["Bullish", "Bearish", "Neutral"])

# Custom CSS to match the original design
st.markdown("""
    <style>
        .title { font-size: 28px; font-weight: bold; color: #6a1b9a; }
        .card { background-color: #f5f5f5; padding: 20px; border-radius: 10px; }
        .sentiment-bullish { color: green; font-weight: bold; }
        .sentiment-bearish { color: red; font-weight: bold; }
        .sentiment-neutral { color: gray; font-weight: bold; }
    </style>
""", unsafe_allow_html=True)

st.markdown("<div class='title'>Portfolio Dashboard</div>", unsafe_allow_html=True)

# Stock Portfolio UI
st.subheader("Your Stocks")

symbols = ["AAPL", "TSLA", "GOOGL", "MSFT", "AMZN"]
for symbol in symbols:
    price = get_random_price()
    sentiment = get_random_sentiment()
    sentiment_class = f"sentiment-{sentiment.lower()}"
    
    st.markdown(f"""
        <div class='card'>
            <strong>{symbol}</strong>: ${price} 
            <span class='{sentiment_class}'>{sentiment}</span>
        </div>
    """, unsafe_allow_html=True)

st.button("Refresh Data")
