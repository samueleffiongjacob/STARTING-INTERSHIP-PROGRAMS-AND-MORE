from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
from chatterbot.trainers import ListTrainer

app = Flask(__name__)

chatbot = ChatBot('MyBot')

# First, lets train our bot with some data
trainer = ChatterBotCorpusTrainer(chatbot)

trainer.train('chatterbot.corpus.english')

# Now we can export the data to a file
trainer.export_for_training('./my_export.json')

@app.route("/")
def home():    
    return render_template("index.html")

@app.route("/get")
def get_bot_response():    
    userText = request.args.get('msg')    
    return str(chatbot.get_response(userText)) 
if __name__ == "__main__":    
    app.run()