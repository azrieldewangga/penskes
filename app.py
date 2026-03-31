from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/janji-temu')
def janji_temu():
    return render_template('janji-temu.html')

@app.route('/spesialisasi')
def spesialisasi():
    return render_template('spesialisasi.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
