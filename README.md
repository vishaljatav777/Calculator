# Calculator
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
