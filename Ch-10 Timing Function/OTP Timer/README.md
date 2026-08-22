# 🔐 OTP Verification System

A modern and responsive **OTP (One-Time Password) Verification System** built using **HTML, CSS, and JavaScript**.

This project demonstrates an OTP verification interface with a circular countdown timer, resend OTP functionality, resend attempt tracking, and a **24-hour cooldown after 3 OTP attempts**.

---

## 🚀 Project Preview

This project contains two main OTP states:

### 🔹 1. OTP Verification Screen

The user receives an OTP and can see the remaining time through a circular countdown timer.

![OTP Verification Screen](images/OTP-1.png)

### 🔹 2. 24-Hour Cooldown Screen

After the OTP has been sent/resend **3 times**, the resend option is disabled and the user must wait **24 hours** before trying again.

![24 Hour Cooldown](images/OTP-2.png)

---

## ✨ Features

- 🔐 OTP verification interface
- 🎨 Modern dark neon/cyan UI
- ⏱️ Circular countdown timer
- 📩 Resend OTP functionality
- 🔢 OTP resend attempt tracking
- 🚫 Maximum 3 OTP attempts
- 🕐 24-hour cooldown after 3 attempts
- 🔄 Dynamic UI updates
- 📱 Responsive design
- ⚡ Pure HTML, CSS and JavaScript
- 🎯 User-friendly authentication interface

---

## 🧠 OTP Resend Logic

The OTP system follows this flow:

```text
OTP Sent
   ↓
Countdown Timer Starts
   ↓
Resend OTP Available
   ↓
1st OTP Resend
   ↓
2nd OTP Resend
   ↓
3rd OTP Resend
   ↓
Maximum Attempts Reached
   ↓
24-Hour Cooldown
   ↓
Try Again After 24 Hours
```
---

## 🛠️ Technologies Used

# HTML5

=> Used to create the structure of the OTP verification interface.

# CSS3
=> Used for:

- Dark theme <br>
- Neon effects<br>
- Circular timer<br>
- Glassmorphism-style card<br>
- Responsive layout<br>
- Buttons<br>
- Animations<br>
- UI styling

# JavaScript
=> Used for:

- Countdown timer<br>
- OTP resend logic<br>
- Attempt counting<br>
- Button state management<br>
- 24-hour cooldown<br>
- Dynamic UI updates<br>
- User interaction handling

---


## 📂 Project Structure
```
OTP-Verification/
│
├── index.html
├── style.css
├── script.js
│
└── screenshots/
    ├── otp-verification.png
    └── otp-24-hours.png
```
---

## 📸 Screenshots
# OTP Verification Screen

The first screenshot shows the normal OTP verification state with:

- 🔐 OTP heading
- 📱 Verification message
- ⏱️ Circular countdown
- 📩 Resend OTP button
- ⏳ Remaining-time information
  
# Maximum Attempts / 24-Hour Cooldown

The second screenshot shows the state after the maximum OTP attempts have been reached.

The interface displays:

- 24h cooldown
- Disabled Resend OTP button
- Try again after 24 hours message

---

## 🎯 What I Learned

While building this project, I practiced:

- DOM manipulation
- JavaScript event handling
- setInterval()
- Countdown timers
- Conditional statements
- Attempt tracking
- Button enable/disable functionality
- Dynamic content updates
- Managing different UI states
- Creating authentication-style interfaces
- Implementing cooldown logic

---

## 💡 JavaScript Logic

The project demonstrates how JavaScript can control the complete UI based on user actions.

The basic flow is:
```
User Action
     ↓
JavaScript checks condition
     ↓
Update attempt count
     ↓
Start / update timer
     ↓
Update button state
     ↓
Update UI message
```

---

## 👩‍💻 Project Information

<strong>Project : </strong> OTP Verification System

<strong>Technologies : </strong> HTML5 • CSS3 • JavaScript

<strong>Type : </strong> Frontend Web Development Project

<strong>Focus : </strong> OTP Verification, Countdown Timer, Resend Limit & 24-Hour Cooldown System