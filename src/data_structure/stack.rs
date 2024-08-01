const STACK_CAPACITY: usize = 100;

#[derive(PartialEq, Debug)]
pub enum StackError {
    Inconsistent,
}

#[derive(Debug)]
pub struct Stack<T>
where
    T: Copy,
{
    pub head: usize,
    pub buffer: Vec<T>,
}

impl<T> Stack<T>
where
    T: Copy,
{
    /// Initialize stack
    ///
    /// # Example
    /// ```
    /// use crate::aoj::data_structure::stack::Stack;
    ///
    /// let stack = Stack::new(0);
    /// assert_eq!(stack.head, 0);
    /// assert_eq!(stack.list.len(), 100);
    /// ```
    pub fn new(initial_value: T) -> Self {
        Stack {
            head: 0,
            buffer: vec![initial_value; STACK_CAPACITY],
        }
    }

    /// Push to stack
    ///
    /// # Example
    /// ```
    /// use crate::aoj::data_structure::stack::Stack;
    ///
    /// let mut stack = Stack::new(0);
    /// stack.push(5);
    /// assert_eq!(stack.head, 1);
    /// assert_eq!(stack.list[stack.head], 5);
    /// ```
    pub fn push(&mut self, value: T) {
        self.head += 1;
        self.buffer[self.head] = value
    }

    /// Pop from stack
    ///
    /// # Example
    /// ```
    /// use crate::aoj::data_structure::stack::Stack;
    ///
    /// let mut stack = Stack::new(0);
    /// stack.push(5);
    /// let output = stack.pop();
    /// assert_eq!(output, Some(5));
    ///
    /// ```
    pub fn pop(&mut self) -> Option<T> {
        if self.head < self.buffer.len() {
            let current = Some(self.buffer[self.head]);
            self.head -= 1;
            return current;
        }
        None
    }
}

pub enum Expression {
    Operand(i32),
    Plus,
    Minus,
    Multiple,
    Divide,
}

pub fn calculate_polish_notation(expressions: &[Expression]) -> Result<i32, StackError> {
    let mut stack: Stack<i32> = Stack::new(0);

    for expression in expressions {
        match expression {
            Expression::Operand(operand) => stack.push(*operand),
            operator => {
                let a = stack.pop().ok_or(StackError::Inconsistent)?;
                let b = stack.pop().ok_or(StackError::Inconsistent)?;

                let c = match operator {
                    Expression::Plus => b + a,
                    Expression::Minus => b - a,
                    Expression::Multiple => b * a,
                    Expression::Divide => b / a,
                    _ => unreachable!(),
                };

                stack.push(c);
            }
        }
    }

    stack.pop().ok_or(StackError::Inconsistent)
}

#[cfg(test)]
mod tests {
    use crate::data_structure::stack::calculate_polish_notation;

    use super::Expression::{Minus, Multiple, Operand, Plus};
    #[test]
    fn should_calculate() {
        assert_eq!(
            calculate_polish_notation(&[
                Operand(1),
                Operand(2),
                Plus,
                Operand(3),
                Operand(4),
                Minus,
                Multiple
            ]),
            Ok(-3)
        )
    }
}
