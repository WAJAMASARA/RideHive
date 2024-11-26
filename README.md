# RideHive💳

A full-stack ride-sharing app built with **React Native**, **PostgreSQL**, **TypeScript**, **Stripe**, and **Tailwind CSS**. This app enables users to book rides, make secure payments, and manage their account details—all while enjoying a seamless, responsive UI.

## 🚀 Features
- **User Authentication**: Sign up, login, and account management functionality.
- **Booking System**: Users can book and manage rides.
- **Payment Integration**: Integration with **Stripe** for secure and seamless payments.
- **Database Management**: Using **PostgreSQL** for storing user and transaction data.
- **Responsive UI**: Built with **Tailwind CSS** for a modern, mobile-first interface.
- **TypeScript**: Ensuring type safety and reducing runtime errors across the app.

## 🛠️ Technology Stack
- **Frontend**: React Native with TypeScript and Tailwind CSS.
- **Backend**:  PostgreSQL.
- **Payment Integration**: Stripe API for handling secure payments.

## 🧑‍💻 Getting Started

### Prerequisites:
- PostgreSQL
- Stripe account for payment setup

### Steps to Set Up Locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/ridehive-fullstack.git
    ```
   
2. Install dependencies:
    ```bash
    cd RideHive
    npm install
    ```

3. Set up the PostgreSQL database:
   - Create a `.env` file with your database credentials.
   - Run database migrations to set up the necessary tables.

4. Set up Stripe API keys:
   - Create a Stripe account and obtain your public and secret keys.
   - Add the keys to your `.env` file.

5. Start the server:
    ```bash
    npm run dev
    ```

6. For the frontend (React Native):
    ```bash
    cd mobile
    npm install
    npx react-native run-android
    ```

## 💡 Key Features to Implement
- **Stripe Payment Flow**: Integrate Stripe for handling payments when booking rides.
- **Responsive Design**: Utilize **Tailwind CSS** for creating a mobile-friendly UI.
- **PostgreSQL Database**: Use **PostgreSQL** to handle user data and transactions securely.

## 🤝 Contributing
Feel free to fork this repository and submit issues or pull requests. Any contributions are welcome!

## 📄 License
This project is licensed under the MIT License.
