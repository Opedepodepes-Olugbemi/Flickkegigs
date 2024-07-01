# Import the required libraries
import streamlit as st
from scrapegraphai.graphs import SmartScraperGraph

st.title("'Paladdin: Ai Web Scrapper")
st.caption("This app allows you to scrape websites")

#setting up configuration
# TODO: Change model to openai
graph_config = {
    "llm" : {
        "model" : "ollama/llama3",
        "temperature" : 0,
        "format" : "json",
        "base_url" : "http://localhost:11434",
    },
    "embeddings" : {
        "model" : "ollama/nomimc-embed-text",
        "base_url" : "http://localhost:11434",
    },
    "verbose" : True,
    }

url = st.text_input("Enter the URL of the website you want to scrape")
# Get the user prompt
user_prompt = st.text_input("What you want Paladdin to scrape from the website?")
st.caption("e.g: scrape all the pictures and and price tags from the clothing website")

# Create SmartSCraperGraph object
smart_scraper_graph = SmartScraperGraph(
    prompt=user_prompt,
    source=url,
    config=graph_config
)

if st.button("Scrape"):
    result = smart_scraper_graph.run()
    st.write(result)