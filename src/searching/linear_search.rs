pub fn search(a: &[i32], b: &[i32]) -> u8 {
    let mut count = 0;

    for c in a {
        for d in b {
            if c == d {
                count += 1;
            }
        }
    }

    count
}

#[cfg(test)]
mod tests {
    use crate::searching::linear_search::search;

    #[test]
    fn should_search() {
        let a = &[1, 2, 3, 4, 5];
        let b = &[3, 4, 1];

        assert_eq!(search(a, b), 3);
    }
}
