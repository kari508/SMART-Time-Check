from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')  # This serves index.html from the templates folder

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)











  






=======
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')  # This serves index.html from the templates folder

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)










  






>>>>>>> 60c317d99cc82e11f11b726aa5a6b58b7554b61a
