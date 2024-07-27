pub fn fibonacci(n: usize) -> usize {
    calculate(n, &mut vec![1, 1])
}

fn calculate(n: usize, memo: &mut Vec<usize>) -> usize {
    match n {
        0 | 1 => 1,
        _ => {
            if let Some(&a) = memo.get(n) {
                return a;
            } else {
                let value = calculate(n - 2, memo) + calculate(n - 1, memo);
                memo.push(value);
                value
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn should_find_fibonacci_number_at_index() {
        assert_eq!(fibonacci(0), 1);
        assert_eq!(fibonacci(3), 3);
        assert_eq!(fibonacci(7), 21);
    }
}
