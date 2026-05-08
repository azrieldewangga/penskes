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

@app.route('/layanan-unggulan')
def layanan_unggulan():
    return render_template('layanan-unggulan.html')

@app.route('/promo')
def promo():
    return render_template('promo.html')

@app.route('/artikel')
def artikel():
    return render_template('artikel.html')

@app.route('/tentang-kami')
def tentang_kami():
    return render_template('tentang-kami.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
