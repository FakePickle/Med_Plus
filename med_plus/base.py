from flask import Flask, request, jsonify, session
from flask_mysqldb import MySQL

app = Flask(__name__)

# MySQL configurations
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'Med_Plus'
app.config['MYSQL_PASSWORD'] = 'password'
app.config['MYSQL_DB'] = 'med_plus'

mysql = MySQL(app)

# Secret key for session management
app.secret_key = 'secret_key'

# Routes


# User Signup
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    first_name = data['FirstName']
    last_name = data['LastName']
    email = data['Email']
    password = data['Password']
    address = data['Address']
    phone = data['Phone']
    dob = data['DateOfBirth']
    emergency_phone = data['EmergencyPhone']

    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO Users (FirstName, LastName, Email, PWD, Address, Phone, DateOfBirth, EmergencyPhone) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)",
                (first_name, last_name, email, password, address, phone, dob, emergency_phone))
    mysql.connection.commit()
    cur.close()
    return jsonify({"message": "Signup successful"})


# User Login
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data['Email']
    password = data['Password']

    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Users WHERE Email = %s", (email,))
    user = cur.fetchone()
    cur.close()
    print(email, password, user)
    if user and user[5] == password:
        session['user_id'] = user[0]
        print("User ID ", session['user_id'])
        return jsonify({"message": "Login successful"})
    else:
        return jsonify({"error": "Invalid email or password"}), 401


# User Logout
@app.route('/logout', methods=['GET'])
def logout():
    session.pop('user_id', None)
    return jsonify({"message": "Logout successful"})


# Place Order for User
@app.route('/order', methods=['POST'])
def place_order():
    if 'user_id' not in session:
        return jsonify({"error": "Unauthorized"}), 401

    user_id = session['user_id']

    cur = mysql.connection.cursor()
    cur.callproc('order_cart', [user_id])
    mysql.connection.commit()
    cur.close()

    return jsonify({"message": "Order placed successfully"})


# Check Inventory for Vendor
@app.route('/inventory', methods=['GET'])
def check_inventory():
    if 'vendor_id' not in session:
        return jsonify({"error": "Unauthorized"}), 401

    item_name = request.args.get('item_name')
    vendor_id = session['vendor_id']

    cur = mysql.connection.cursor()
    cur.callproc('check_inventory', [item_name, vendor_id])
    result = cur.fetchone()
    cur.close()

    if result:
        return jsonify({"quantity": result[0]})
    else:
        return jsonify({"error": "Item not found in inventory"}), 404


# Admin Login
@app.route('/admin/login', methods=['POST'])
def admin_login():
    data = request.json
    email = data['Email']
    password = data['Password']

    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Admins WHERE Email = %s", (email,))
    admin = cur.fetchone()
    cur.close()

    if admin and admin['PWD'] == password:
        session['admin_id'] = admin['AdminID']
        return jsonify({"message": "Admin login successful"})
    else:
        return jsonify({"error": "Invalid email or password"}), 401


# Vendor Login
@app.route('/vendor/login', methods=['POST'])
def vendor_login():
    data = request.json
    email = data['Email']
    password = data['Password']

    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM Vendor WHERE Mail = %s", (email,))
    vendor = cur.fetchone()
    cur.close()

    if vendor and vendor['PWD'] == password:
        session['vendor_id'] = vendor['VendorID']
        return jsonify({"message": "Vendor login successful"})
    else:
        return jsonify({"error": "Invalid email or password"}), 401


# Vendor Signup
@app.route('/vendor/signup', methods=['POST'])
def vendor_signup():
    data = request.json
    vendor_name = data['VendorName']
    email = data['Email']
    password = data['Password']
    phone = data['PhoneNumber']

    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO Vendor (VendorName, Mail, PWD, PhoneNumber) VALUES (%s, %s, %s, %s)",
                (vendor_name, email, password, phone))
    mysql.connection.commit()
    cur.close()

    return jsonify({"message": "Vendor signup successful"})


if __name__ == '__main__':
    app.run(debug=True)
