import os
from dotenv import load_dotenv
from scrapegraphai.graphs import SmartScraperGraph
from scrapegraphai.utils import prettify_exec_info

load_dotenv()

# TODO: change ai model to ollama/llama3
openai_key = os.getenv("OPENAI_APIKEY")
graph_config = {
   "llm": {
      "api_key": openai_key,
      "model": "gpt-3.5-turbo",
   },
}

# ************************************************
# Create the SmartScraperGraph instance and run it
# *******   *****************************************

smart_scraper_graph = SmartScraperGraph(
   prompt="List me all the jobs with their description.",
   # also accepts a string with the already downloaded HTML code
   source="https://realpython.github.io/fake-jobs",
   config=graph_config
)

result = smart_scraper_graph.run()
print(result)