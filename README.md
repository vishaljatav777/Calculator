# Calculator
<<<<<<< HEAD
Hello everyone, I created a simple calculator application.


Flowchart of Calculator Logic



      ┌──────────────────────────┐
      │  User clicks a button    │
      └───────────┬──────────────┘
                  │
                  ▼
    ┌───────────────────────────────┐
    │ appendInput(value) is called  │
    └───────────┬───────────────────┘
                │
      ┌─────────┼──────────────────────┐
      │         │                      │             
      ▼         ▼                      ▼             
 [Number?]  [Operator?]          [Parenthesis?]     
      │         │                      │                  
      ▼         ▼                      ▼              
Update         Replace or           Add to            
currentInput   append operator      expression        
and fullExpression
      └─────────────────────────────────┘
                  │
                  ▼
        ┌────────────────────┐
        │  updateDisplay()    │
        │ (refresh screen)    │
        └────────────────────┘
                  │
                  ▼
    ┌──────────────────────────────────────┐
    │ If "=" pressed → calculateResult()    │
    └──────────────────────────────────────┘
                  │
                  ▼
  Validate expression (numbers, operators, brackets only?)
                  │
                  ▼
 Replace symbols (×, ÷ → *, /) → Evaluate safely
                  │
                  ▼
     ┌──────────────────────────────┐
     │ Result shown on display       │
     │ resetDisplay = true           │
     └──────────────────────────────┘
=======

A simple and responsive calculator built using HTML, CSS, and JavaScript. It performs basic arithmetic operations like addition, subtraction, multiplication, and division.
## 🚀 Features

- Responsive layout
- Real-time calculations
- Clear and intuitive UI
- Keyboard input support (optional)

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

## 📁 Project Structure

Calculator/
│
├── index.html # Main HTML file
├── style.css # CSS styling
├── script.js # JavaScript logic
├── README.md # Project documentation

## 📦 How to Use

1. Clone the repository:

```bash
git clone https://github.com/vishaljatav777/Calculator.git
cd Calculator

Open index.html in your browser:

Double-click index.html, or

Right-click → "Open with" → Your browser

No setup or installation required.

📄 License
This project is licensed under the MIT License.

🙋‍♂️ Author
GitHub: @vishaljatav777

Feel free to fork, contribute, or suggest improvements!

yaml
Copy
Edit

---

### ✅ Next Steps:
- Save this content as a file named `README.md` in your project folder.
- Commit and push it to GitHub:

```bash
git add README.md
git commit -m "Add README"
git push
>>>>>>> d6a4aa50913f5f8bd87713fff72cb297f777871b
