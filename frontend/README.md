# 🍽️ PinkBites Restaurant Chatbot

PinkBites is a restaurant chatbot application that allows customers to browse meals, place orders, manage their cart, and complete payments using Paystack.

The chatbot uses a number-based ordering system where customers can:

- Select meals
- View current orders
- View order history
- Cancel orders
- Checkout orders
- Make payments


## 🚀 Features

### Customer Features

✅ Chat-based restaurant interface  
✅ Device-based user sessions  
✅ Browse restaurant menu  
✅ Add meals to cart  
✅ View current order  
✅ View previous orders  
✅ Cancel orders  
✅ Checkout orders  
✅ Paystack payment integration  


## 🛠️ Technologies Used

### Frontend

- React.js
- Vite
- CSS
- Axios
- React Router


### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Express Session
- Paystack API


## 📂 Project Structure


```
PinkBites
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── src
    ├── package.json
    └── vite.config.js

```


# ⚙️ Installation Guide


## 1. Clone Repository


```bash
git clone https://github.com/YOUR_USERNAME/PinkBites.git
```


Move into project:

```bash
cd PinkBites
```


# Backend Setup


Move into backend:

```bash
cd backend
```


Install dependencies:

```bash
npm install
```


Create a `.env` file:

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

SESSION_SECRET=your_session_secret

PAYSTACK_SECRET_KEY=your_paystack_test_secret_key
```


Start backend:

Development mode:

```bash
npm run dev
```


Production mode:

```bash
npm start
```


Backend runs on:

```
http://localhost:5000
```



# Frontend Setup


Open another terminal.


Move into frontend:

```bash
cd frontend
```


Install dependencies:

```bash
npm install
```


Start application:

```bash
npm run dev
```


Frontend runs on:

```
http://localhost:5173
```


# 🔑 Environment Variables


Backend requires:


| Variable | Description |
|---|---|
| MONGO_URI | MongoDB database connection |
| SESSION_SECRET | Session encryption key |
| PAYSTACK_SECRET_KEY | Paystack test secret key |


# 💳 Payment Testing


PinkBites uses Paystack test mode.


Test card:

```
Card:
4084 0840 8408 4081

Expiry:
Any future date

CVV:
408

PIN:
0000
```


# 📌 API Routes


## Chat

```
POST /api/chat
```


Example:

```json
{
 "message":"1"
}
```


## Payment Initialization

```
POST /api/payment
```


## Payment Verification

```
GET /api/payment/verify/:reference
```


# 🌐 Deployment

Frontend:

- Vercel


Backend:

- Render


Database:

- MongoDB Atlas


# 👨‍💻 Author

Kolawole Moyosore

