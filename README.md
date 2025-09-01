# Encrypto 🔐

A modern, secure password manager built with React that helps you store, manage, and organize all your passwords in one place.

## ✨ Features

- **Secure Password Storage** - Store all your passwords locally in your browser
- **Easy Password Management** - Add, edit, and delete passwords with a clean interface
- **One-Click Copy** - Copy usernames and passwords to clipboard instantly
- **Password Visibility Toggle** - Show/hide passwords as needed
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Input Validation** - Ensures minimum security requirements for all credentials
- **Toast Notifications** - Get instant feedback for all actions
- **Modern UI/UX** - Clean, intuitive interface with smooth animations

## 🚀 Demo

![Encrypto Password Manager](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Encrypto+Password+Manager)

## 🛠️ Tech Stack

- **Frontend**: React 18+
- **Styling**: Tailwind CSS
- **Icons**: Lord Icons
- **Notifications**: React Toastify
- **Storage**: Local Storage (browser-based)
- **ID Generation**: UUID v4

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/encrypto.git
   cd encrypto
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install required packages**
   ```bash
   npm install react-toastify uuid
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📋 Usage

### Adding a New Password
1. Fill in the website URL, username, and password fields
2. Click the "Add" button to save your credentials
3. Your password will be stored locally and displayed in the table

### Managing Existing Passwords
- **Copy**: Click the copy icon next to usernames or passwords
- **Edit**: Click the edit icon to modify existing credentials
- **Delete**: Click the delete icon and confirm to remove passwords
- **View/Hide**: Toggle password visibility using the eye icon

### Security Features
- Minimum length validation (3+ characters for all fields)
- Confirmation dialogs for destructive actions
- Local storage encryption (browser-based)

## 🔧 Configuration

### Customizing Toast Settings
You can modify toast notifications in the `ToastContainer` component:

```jsx
<ToastContainer
  position="top-right"
  autoClose={1000}
  hideProgressBar={false}
  // ... other settings
/>
```

### Styling Customization
The project uses Tailwind CSS for styling. You can customize colors, spacing, and components by modifying the className attributes throughout the components.

## 📁 Project Structure

```
encrypto/
├── src/
│   ├── components/
│   │   └── Manager.jsx
│   ├── App.js
│   └── index.js
├── public/
│   └── icons/
│       ├── eye.png
│       ├── eyecross.png
│       └── 3719119.png
├── package.json
└── README.md
```

## 🔒 Security Considerations

- **Local Storage**: Passwords are stored in browser's local storage
- **Client-Side Only**: No data is transmitted to external servers
- **Input Validation**: Minimum length requirements prevent weak credentials
- **Confirmation Dialogs**: Prevent accidental deletion of passwords

> **Note**: This is a client-side password manager. For production use, consider implementing additional security measures such as encryption, master passwords, and secure backup options.

## 🚨 Dependencies

```json
{
  "react": "^18.0.0",
  "react-toastify": "^9.0.0",
  "uuid": "^9.0.0"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Known Issues

- Passwords are stored in plain text in local storage
- No master password protection
- No backup/sync functionality

## 🔮 Future Enhancements

- [ ] Master password authentication
- [ ] Data encryption at rest
- [ ] Password strength indicator
- [ ] Automatic password generation
- [ ] Export/Import functionality
- [ ] Search and filter capabilities
- [ ] Categories and tags
- [ ] Cloud backup integration
- [ ] Two-factor authentication

## 👨‍💻 Author

**Harsh Upadhyay**
- GitHub:https://github.com/Harsh-Upadhyay23
- Email:upadhyayharsh435@gmail.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI Framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lord Icons](https://lordicon.com/) - Beautiful animated icons
- [React Toastify](https://fkhadra.github.io/react-toastify/) - Toast notifications

---

⭐ **If you found this project helpful, please give it a star!**
