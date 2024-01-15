from flask import Flask, render_template, request, redirect
import psycopg2
import psycopg2.extras

app = Flask(__name__, template_folder='templates')

app.config['SECRET_KEY'] = 'hjshjhdjah kjshkjdhjs'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:admin@localhost/database'

# Replace these with your PostgreSQL database details
database_session = psycopg2.connect(
    database='postgres',
    port=5432,
    host='localhost',
    user='postgres',
    password='132003'
)

# Create a connection to the PostgreSQL database
cur = database_session.cursor(cursor_factory=psycopg2.extras.DictCursor)

# Create a table to store form submissions
cur.execute('''
    CREATE TABLE IF NOT EXISTS contact (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(100),
        telephone VARCHAR(20),
        email VARCHAR(100),
        description TEXT
    );
''')
database_session.commit()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        full_name = request.form['fullName']
        telephone = request.form['telephone']
        email = request.form['email']
        description = request.form['description']

        # Insert form data into the PostgreSQL database
        cur.execute('''
            INSERT INTO contact (full_name, telephone, email, description)
            VALUES (%s, %s, %s, %s);
        ''', (full_name, telephone, email, description))
        database_session.commit()

        return render_template('results.html')

if __name__ == '__main__':
    app.run(debug=True)
