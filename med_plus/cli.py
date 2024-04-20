import requests

class SessionManager:
    def __init__(self):
        self.session = None

    def signup(self):
        print("=== User Signup ===")
        first_name = input("Enter first name: ")
        last_name = input("Enter last name: ")
        email = input("Enter email: ")
        password = input("Enter password: ")
        address = input("Enter address: ")
        phone = input("Enter phone: ")
        dob = input("Enter date of birth (YYYY-MM-DD): ")
        emergency_phone = input("Enter emergency phone: ")

        data = {
            "FirstName": first_name,
            "LastName": last_name,
            "Email": email,
            "Password": password,
            "Address": address,
            "Phone": phone,
            "DateOfBirth": dob,
            "EmergencyPhone": emergency_phone
        }
        response = requests.post('http://localhost:5000/signup', json=data)
        if response.status_code == 200:
            print("Signup successful!")
        else:
            print("Error:", response.json().get('error', 'Unknown error'))

    def login(self):
        print("=== User Login ===")
        email = input("Enter email: ")
        password = input("Enter password: ")
        data = {
            "Email": email,
            "Password": password
        }
        response = requests.post('http://localhost:5000/login', json=data)
        if response.status_code == 200:
            self.session = response.cookies['user_session']
            print("Login successful!")
        else:
            print("Error:", response.json().get('error', 'Unknown error'))

    def logout(self):
        print("=== User Logout ===")
        response = requests.get('http://localhost:5000/logout', cookies={'user_session': self.session})
        if response.status_code == 200:
            print("Logout successful!")
            self.session = None
        else:
            print("Error:", response.json().get('error', 'Unknown error'))

    def place_order(self):
        print("=== Place Order ===")
        item_name = input("Enter item name: ")
        data = {"ItemName": item_name}
        response = requests.post('http://localhost:5000/order', json=data, cookies={'user_session': self.session})
        if response.status_code == 200:
            print("Order placed successfully!")
        else:
            print("Error:", response.json().get('error', 'Unknown error'))

    def check_inventory(self):
        print("=== Check Inventory ===")
        item_name = input("Enter item name: ")
        response = requests.get('http://localhost:5000/inventory', params={"item_name": item_name}, cookies={'vendor_session': self.session})
        if response.status_code == 200:
            quantity = response.json().get('quantity')
            print(f"Available quantity of {item_name}: {quantity}")
        else:
            print("Error:", response.json().get('error', 'Unknown error'))

    def vendor_login(self):
        print("=== Vendor Login ===")
        email = input("Enter email: ")
        password = input("Enter password: ")
        data = {
            "Email": email,
            "Password": password
        }
        response = requests.post('http://localhost:5000/vendor/login', json=data)
        if response.status_code == 200:
            self.session = response.cookies['vendor_session']
            print("Vendor login successful!")
        else:
            print("Error:", response.json().get('error', 'Unknown error'))
    
    def admin_login(self):
        print("=== Admin Login ===")
        email = input("Enter email: ")
        password = input("Enter password: ")
        data = {
            "Email": email,
			"Password": password
		}
        response = requests.post('http://localhost:5000/admin/login', json=data)
        if response.status_code == 200:
            self.session = response.cookies['admin_session']
            print("Admin login successful!")
        else:
            print("Error:", response.json().get('error', 'Unknown error'))
            
    def vendor_add(self):
        print("=== Vendor Add ===")
        vendorname = input("Enter vendor name: ")
        password = input("Enter password: ")
        phone = int(input("Enter phone: "))
        email = input("Enter email: ")
        address = input("Enter address: ")
        data = {
			"VendorName": vendorname,
			"Password": password,
			"Phone": phone,
			"Email": email,
			"Address": address
		}


def main():
    session_manager = SessionManager()

    while True:
        print("\n=== Menu ===")
        print("1. User Signup")
        print("2. User Login")
        print("3. User Logout")
        print("4. Place Order")
        print("5. Check Inventory (Vendor Only)")
        print("6. Vendor Signup")
        print("7. Vendor Login")
        print("8. Exit")

        choice = input("Enter your choice: ")

        if choice == "1":
            session_manager.signup()
        elif choice == "2":
            session_manager.login()
        elif choice == "3":
            session_manager.logout()
        elif choice == "4":
            session_manager.place_order()
        elif choice == "5":
            session_manager.check_inventory()
        elif choice == "6":
            session_manager.vendor_login()
        elif choice == "8":
            break
        else:
            print("Invalid choice! Please enter a number between 1 and 8.")


if __name__ == "__main__":
    main()
