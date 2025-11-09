# 🎉 Age to Birth Year Calculator

A small, friendly web project that calculates your **Gregorian** and **Islamic (Hijri)** birth year from your age. Built with **HTML**, **CSS**, and **JavaScript** — with input validation and a delete/clear button. 💻✨

---

## 🚀 Features

- 🧮 Enter your age to calculate:
  - 📅 **Gregorian Birth Year**
  - 🕌 **Approximate Islamic (Hijri) Birth Year**
- ⚠️ Input validation: alerts if the input is empty or not a number.
- 🗑️ Clear button: clears the input and results.
- 🎨 Clean responsive layout using **Flexbox**.

---

## 🖼️ Demo

<img width="715" height="489" alt="image" src="https://github.com/user-attachments/assets/a9f81d55-25ca-4911-8115-86ebb14d9b6b" />

---

## 🧰 Technologies

- **HTML** — page structure  
- **CSS** — styling and layout  
- **JavaScript** — calculation and interactivity

---

## 🔢 Calculation details

* **Gregorian Birth Year** = `Current Year - Age`
* **Approximate Islamic (Hijri) Birth Year** = `Math.floor((GregorianBirthYear - 622) * 33 / 32) + 1`

> ⚠️ The Hijri result is an approximation because the Islamic (Hijri) calendar is lunar (shorter than Gregorian).

---
